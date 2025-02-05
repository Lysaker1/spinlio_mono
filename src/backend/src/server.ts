import express, { Request, Response, Application } from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { RequestHandler } from 'express-serve-static-core';
import { auth } from 'express-oauth2-jwt-bearer';
import crypto from 'crypto';
import Stripe from 'stripe';


dotenv.config();

const requiredEnvVars = [
    'SUPABASE_URL',
    'SUPABASE_ANON_KEY',
    'AUTH0_AUDIENCE',  // Just use a single audience variable
    'AUTH0_ISSUER_BASE_URL',
    'STRIPE_SECRET_KEY',
    'FRONTEND_URL'
];

// Validate required env vars
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const app = express();

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  legacyHeaders: false,
  standardHeaders: true,
  skip: (req) => {
    return req.path === '/';
  }
}) as unknown as RequestHandler;

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// Middleware
app.use(limiter);

// Move these to the top, right after imports and before routes
const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE || 'http://localhost:3003',
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || 'https://auth.spinlio.com',
  tokenSigningAlg: 'RS256'
});

// Move CORS before JWT check
app.use(cors({
  origin: [
    ...(process.env.NODE_ENV === 'production' 
      ? [
          'https://design.spinlio.com',
          'https://spinlio.com',
          'https://configurator.spinlio.com',
          'https://api.spinlio.com',
        ]
      : [
          'http://localhost:3000',
          'http://localhost:3001',
          'http://localhost:3003',
        ]
    ),
    'https://dev-jxcml1qpmbgabh6v.us.auth0.com',
    'https://auth.spinlio.com'

  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  optionsSuccessStatus: 200
}));

// Then the JWT checks
app.use('/api/designs', (req, res, next) => {
  console.log('Auth header:', req.headers.authorization);
  next();
}, jwtCheck);
app.use('/api/items', jwtCheck);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Add this after app initialization
app.set('trust proxy', 1);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Spinlio API is running' });
});

// Test route
app.get('/api/test', (async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('test_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({
      message: 'Database connection successful',
      data: data
    });
  } catch (error: any) {
    console.error('Database query error:', error);
    res.status(500).json({
      error: 'Database connection failed',
      details: error.message
    });
  }
}) as RequestHandler);

// Get all items
app.get('/api/items', (async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('test_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

app.get('/api/items/:id', (async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('test_items')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

// Create new item
app.post('/api/items', (async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const { data, error } = await supabase
      .from('test_items')
      .insert([{ name, description, price }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

// Update item
app.put('/api/items/:id', (async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const { data, error } = await supabase
      .from('test_items')
      .update({ name, description, price })
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

// Delete item
app.delete('/api/items/:id', (async (req: Request, res: Response) => {
  try {
    const { error } = await supabase
      .from('test_items')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

// Save design endpoint
app.post('/api/designs', (async (req: Request, res: Response) => {
  try {
    const design = req.body;
    console.log('Received design name:', design.name);
    
    const designId = crypto.randomUUID();
    let thumbnailFilename = null;

    console.log('Design save flow:', {
      designId,
      host: req.get('host'),
      protocol: req.protocol,
      hasImage: design.thumbnail_url?.startsWith('data:image')
    });

    // Handle screenshot if provided
    if (design.thumbnail_url?.startsWith('data:image')) {
      thumbnailFilename = `${designId}.png`;
      
      try {
        // Convert base64 to buffer more safely
        const base64Data = design.thumbnail_url.split(',')[1]; // Remove data:image/png;base64,
        const imageBuffer = Buffer.from(base64Data, 'base64');
        
        console.log('Uploading image, size:', imageBuffer.length);
        
        // Save screenshot to storage with increased timeout
        const { error: uploadError } = await supabase.storage
          .from('design-thumbnail')
          .upload(thumbnailFilename, imageBuffer, {
            contentType: 'image/png',
            upsert: true,
            duplex: 'half'
          });

        if (uploadError) {
          console.error('Screenshot upload failed:', uploadError);
          // Continue without thumbnail rather than failing completely
          thumbnailFilename = null;
        } else {
          console.log('Thumbnail saved:', {
            filename: thumbnailFilename,
            size: imageBuffer.length,
            storageBucket: 'design-thumbnail'
          });
        }
      } catch (imgError) {
        console.error('Image processing error:', imgError);
        // Continue without thumbnail
        thumbnailFilename = null;
      }
    }

    const thumbnailUrl = thumbnailFilename 
      ? `${process.env.NODE_ENV === 'production' ? 'https' : req.protocol}://${req.get('host')}/api/thumbnail/${thumbnailFilename}`
      : null;

    console.log('Final thumbnail URL:', {
      filename: thumbnailFilename,
      fullUrl: thumbnailUrl,
      host: req.get('host')
    });

    // Save design with thumbnail reference
    const { data, error } = await supabase
      .from('saved_designs')
      .insert({
        ...design,
        id: designId,
        thumbnail_url: thumbnailUrl,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    
    console.log('Design saved successfully:', designId);
    res.status(201).json(data);
  } catch (error: any) {
    console.error('Save design error:', error);
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

// Get designs endpoint
app.get('/api/designs/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const requestingUserId = req.auth?.payload?.sub;

    let query = supabase
      .from('saved_designs')
      .select('*')
      .eq('user_id', userId);

    // If the requesting user is not the same as the userId, filter by is_public
    if (userId !== requestingUserId) {
      query = query.eq('is_public', true);
    }

    const { data, error } = await query;

    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error('Error fetching designs:', error);
    res.status(500).json({ error: 'Failed to fetch designs' });
  }
});

// Get thumbnail endpoint
app.get('/api/thumbnail/:filename', (async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.storage
      .from('design-thumbnail')
      .download(req.params.filename);

    if (error) {
      console.error('Thumbnail fetch error:', error);
      return res.status(404).json({ error: 'Thumbnail not found' });
    }
    
    const buffer = await data.arrayBuffer();
    res.set({
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000'
    });
    res.send(Buffer.from(buffer));
  } catch (error: any) {
    console.error('Thumbnail error:', error);
    res.status(404).json({ error: 'Thumbnail not found' });
  }
}) as RequestHandler);

// Add this new endpoint after the existing ones
app.patch('/api/fix-thumbnails', async (req: Request, res: Response) => {
  try {
    // First get all files from storage
    const { data: storageFiles, error: storageError } = await supabase
      .storage
      .from('design-thumbnail')
      .list();

    if (storageError) throw storageError;

    // Get all designs
    const { data: designs, error: designsError } = await supabase
      .from('saved_designs')
      .select('id, name, thumbnail_url');

    if (designsError) throw designsError;

    const updates = [];
    const orphanedFiles = [];

    // Process storage files
    for (const file of storageFiles || []) {
      if (!file.name.endsWith('.png')) continue;
      
      // Try to find matching design by filename without .png
      const baseFilename = file.name.replace('.png', '');
      const matchingDesign = designs.find(d => 
        d.id === baseFilename || 
        (d.thumbnail_url && d.thumbnail_url.includes(baseFilename))
      );

      if (matchingDesign) {
        // Update design if thumbnail_url doesn't match
        if (matchingDesign.thumbnail_url !== file.name) {
          updates.push({
            id: matchingDesign.id,
            thumbnail_url: file.name
          });
        }
      } else {
        // Track orphaned files
        orphanedFiles.push(file.name);
      }
    }

    // Perform updates
    let updateCount = 0;
    for (const update of updates) {
      const { error: updateError } = await supabase
        .from('saved_designs')
        .update({ thumbnail_url: update.thumbnail_url })
        .eq('id', update.id);

      if (updateError) throw updateError;
      updateCount++;
    }

    res.json({ 
      message: 'Thumbnails fix completed',
      updatedDesigns: updateCount,
      orphanedFiles,
      totalDesigns: designs.length,
      totalStorageFiles: storageFiles.length
    });
  } catch (error: any) {
    console.error('Error fixing thumbnails:', error);
    res.status(500).json({ error: error.message });
  }
});

const getBaseUrl = (req: Request) => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.spinlio.com';
  }
  return `${req.protocol}://${req.get('host')}`;
};

app.post('/api/fix-thumbnail-urls', async (req: Request, res: Response) => {
  try {
    const { data: designs, error } = await supabase
      .from('saved_designs')
      .select('id, thumbnail_url');
    
    if (error) throw error;

    const baseUrl = getBaseUrl(req);
    const updates = designs
      .filter(d => d.thumbnail_url && !d.thumbnail_url.startsWith('http'))
      .map(d => ({
        id: d.id,
        thumbnail_url: `${baseUrl}/api/thumbnail/${d.thumbnail_url}`
      }));

    for (const update of updates) {
      await supabase
        .from('saved_designs')
        .update({ thumbnail_url: update.thumbnail_url })
        .eq('id', update.id);
    }

    res.json({ 
      message: 'Thumbnail URLs updated',
      updatedCount: updates.length 
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Stripe payment routes
app.post('/api/create-checkout-session', async (req: Request, res: Response) => {
  try {
    const { productId, price, productName } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
            },
            unit_amount: price * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      metadata: {
        productId,
      },
    });

    res.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe session error:', error);
    res.status(500).json({ error: 'Error creating checkout session' });
  }
});

// Optional: Add webhook handling for successful payments
app.post('/api/webhook', express.raw({type: 'application/json'}), async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      // Handle successful payment
      console.log('Payment successful:', session);
    }

    res.json({ received: true });
  } catch (err: unknown) {
    console.error('Webhook error:', err);
    const error = err as Error;  // Type assertion
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
});

// // Any catch-all or error handling middleware should be last
// app.use((req, res, next) => {
//   // Allow everything
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', '*');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   next();
// });

app.use((err: any, req: Request, res: Response, next: any) => {
  console.error('Unhandled error:', err);
  
  // Set CORS headers even for errors
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  
  res.status(err.status || 500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.patch('/api/designs/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const { error } = await supabase
      .from('saved_designs')
      .update(updates)
      .eq('id', id);

    if (error) throw error;
    res.status(200).json({ message: 'Design updated successfully' });
  } catch (error) {
    console.error('Error updating design:', error);
    res.status(500).json({ error: 'Failed to update design' });
  }
});

app.delete('/api/designs/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Delete the design from the database
    const { error } = await supabase
      .from('saved_designs')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting design:', error);
    res.status(500).json({ error: 'Failed to delete design' });
  }
});
 
// Get profile by id (or custom url)
app.get('/api/profile/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: 'User ID is missing in token' });
      return;
    }

    let { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error && error.code === 'PGRST116') {
      // If no profile was found with ID, check custom_url
      let { data: customUrlData, error: customUrlError } = await supabase
        .from('profiles')
        .select('*')
        .eq('custom_url', id)
        .single();

      if (customUrlError && customUrlError.code === 'PGRST116') {
        res.status(404).json({ error: 'Profile not found' });
        return;
      }

      data = customUrlData;

      if (!data) {
        res.status(404).json({ error: 'Profile not found' });
        return;
      }

      if (!data.is_public && req.auth?.payload?.sub !== data.id) {
        res.status(403).json({ error: 'Access denied: Profile is private' });
        return;
      }

      if (!customUrlError) {
        res.status(200).json(data)
        return;
      }
    }

    if (error) throw error;

    if (!data) {
      res.status(404).json({ error: 'Profile not found' });
      return;
    }

    if (!data.is_public && req.auth?.payload?.sub !== data.id) {
      res.status(403).json({ error: 'Access denied: Profile is private' });
      return;
    }

    res.status(200).json(data);
  } catch (error: any) {
    console.error('Error fetching:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Create profile
app.post('/api/profile', jwtCheck, async (req: Request, res: Response): Promise<void> => {
  try {
    const profile = req.body;
    const { data, error } = await supabase
      .from('profiles')
      .insert(profile)
      .select()
      .single();

    if (error) throw error;

    res.status(201).json(data);
  } catch (error: any) {
    console.error('Error creating profile:', error);
    res.status(500).json({ error: 'Failed to create profile' });
  }
});

// Update user profile
app.patch('/api/profile', jwtCheck, async (req: Request, res: Response): Promise<void> => {

  try {
    const userId = req.auth?.payload?.sub;
    const updates = req.body;

    if (!userId) {
      res.status(400).json({ error: 'User ID is missing in token' });
      return; // Sørger for at funksjonen avsluttes her
    }

    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (error: any) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

const PORT = process.env.PORT|| 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
