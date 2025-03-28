import express, { Request, Response, Application } from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { RequestHandler } from 'express-serve-static-core';
import { auth } from 'express-oauth2-jwt-bearer';
import crypto from 'crypto';
import Stripe from 'stripe';
import path from 'path';
import { setupModelRoutes } from './routes/models';

dotenv.config();

const requiredEnvVars = [
    'SUPABASE_URL',
    'SUPABASE_ANON_KEY',
    'AUTH0_AUDIENCE',  // Just use a single audience variable
    'AUTH0_ISSUER_BASE_URL',
    'STRIPE_SECRET_KEY',
    'FRONTEND_URL',
    'RHINO_COMPUTE_ENDPOINT',
    'RHINO_COMPUTE_KEY',
    'BUCKET_NAME'
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
  origin: function(origin, callback) {
    const allowedOrigins = [
      // Production origins
      'https://design.spinlio.com',
      'https://spinlio.com',
      'https://configurator.spinlio.com',
      'https://contact.spinlio.com',
      'https://api.spinlio.com',
      'https://auth.spinlio.com',
      'https://dev-jxcml1qpmbgabh6v.us.auth0.com',
      'https://www.herokucdn.com',
      'https://viewer.shapediver.com',
      'https://res.cloudinary.com',
      
      // Development origins
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3003'
    ];
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Blocked origin:', origin);
      }
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Authorization'],
  optionsSuccessStatus: 200,
  preflightContinue: false // This is important for handling OPTIONS requests properly
}));

// Helper function to verify auth tokens in routes where it's optional
const optionalJwtCheck = (req: Request, res: Response, next: Function) => {
  if (req.headers.authorization) {
    // Try to authenticate, but don't block if it fails
    jwtCheck(req, res, (err: any) => {
      if (err) {
        console.log('Optional JWT check failed, continuing as unauthenticated:', err.message);
        // Continue as unauthenticated
        next();
      } else {
        // Authentication succeeded
        next();
      }
    });
  } else {
    // No auth header, continue as unauthenticated
    next();
  }
};

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

// User management routes
app.get('/api/users/:userId', (async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    console.log(`Fetching user profile for: ${userId}`);
    
    // Query the profiles table in Supabase
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId);

    if (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ 
        error: error.message || 'Internal server error',
        details: 'Failed to fetch user profile due to database error'
      });
    }
    
    if (!data || data.length === 0) {
      return res.status(404).json({ 
        error: 'User not found',
        message: `No user found with ID: ${userId}`
      });
    }
    
    res.json(data[0]);
  } catch (error: any) {
    console.error('Error in GET /api/users/:userId:', error);
    res.status(500).json({ 
      error: error.message || 'Internal server error',
      details: 'Failed to fetch user profile'
    });
  }
}) as RequestHandler);

app.post('/api/users', (async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    console.log('Creating new user:', userData);
    
    // Validate required fields
    if (!userData.id || !userData.email) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'User ID and email are required'
      });
    }
    
    // Create user object with only the fields that exist in the profiles table
    const user = {
      id: userData.id,
      email: userData.email,
      name: userData.name || userData.email.split('@')[0],
      avatar_url: userData.picture || null,
      location: userData.location || '',
      description: userData.description || '',
      website: userData.website || '',
      is_public: userData.is_public !== undefined ? userData.is_public : true,
      custom_url: userData.custom_url || null,
      created_at: new Date().toISOString()
    };
    
    // Insert the user into the Supabase profiles table
    const { data, error } = await supabase
      .from('profiles')
      .insert([user])
      .select();

    if (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ 
        error: error.message || 'Internal server error',
        details: 'Failed to create user profile due to database error'
      });
    }
    
    if (!data || data.length === 0) {
      return res.status(500).json({
        error: 'No data returned',
        message: 'Failed to create user: No data returned from database'
      });
    }
    
    console.log('User created successfully:', data[0]);
    res.status(201).json(data[0]);
  } catch (error: any) {
    console.error('Error in POST /api/users:', error);
    res.status(500).json({ 
      error: error.message || 'Internal server error',
      details: 'Failed to create user profile'
    });
  }
}) as RequestHandler);

app.patch('/api/users/:userId', (async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updates = req.body;
    console.log(`Updating user ${userId}:`, updates);
    
    // Filter updates to only include valid fields for the profiles table
    const validFields = [
      'email', 'name', 'avatar_url', 'location', 'description', 
      'website', 'is_public', 'custom_url'
    ];
    
    const filteredUpdates = Object.keys(updates)
      .filter(key => validFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = updates[key];
        return obj;
      }, {} as Record<string, any>);
    
    // Update the user in the Supabase profiles table
    const { data, error } = await supabase
      .from('profiles')
      .update(filteredUpdates)
      .eq('id', userId)
      .select();

    if (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ 
        error: error.message || 'Internal server error',
        details: 'Failed to update user profile due to database error'
      });
    }
    
    if (!data || data.length === 0) {
      return res.status(404).json({ 
        error: 'User not found',
        message: `No user found with ID: ${userId}`
      });
    }
    
    console.log('User updated successfully:', data[0]);
    res.json(data[0]);
  } catch (error: any) {
    console.error('Error in PATCH /api/users/:userId:', error);
    res.status(500).json({ 
      error: error.message || 'Internal server error',
      details: 'Failed to update user profile'
    });
  }
}) as RequestHandler);

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

// Add this after your existing routes
app.get('/developer', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// Serve static files for the developer portal
app.use('/developer', express.static(path.join(__dirname, 'client/dist')));

// Add the API endpoint for models
app.post('/api/developer/models', jwtCheck, async (req, res) => {
  const { name, ticket, modelId, configuratorType } = req.body;
  try {
    const { data, error } = await supabase
      .from('models')
      .insert([{ 
        name, 
        ticket, 
        model_id: modelId,
        configurator_type: configuratorType 
      }])
      .select();
    
    if (error) throw error;
    res.json(data[0]);
  } catch (error: any) {
    console.error('Error saving model:', error);
    res.status(500).json({ error: error.message });
  }
});

// Add this new endpoint for Rhino Compute
app.post('/api/rhino-compute', async (req: Request, res: Response) => {
  try {
    const { definitionId, parameters } = req.body;
    
    const computeResponse = await fetch(`${process.env.RHINO_COMPUTE_ENDPOINT}/grasshopper`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RHINO_COMPUTE_KEY}`
      },
      body: JSON.stringify({
        definitionId,
        inputs: parameters
      })
    });

    if (!computeResponse.ok) throw new Error(await computeResponse.text());
    
    const resultBuffer = await computeResponse.arrayBuffer();
    res.set('Content-Type', 'application/octet-stream');
    res.send(Buffer.from(resultBuffer));
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Rhino Compute error' });
  }
});

// Add this after your existing endpoints
app.post('/api/upload-model', async (req: Request, res: Response) => {
  try {
    const { modelFile, filename } = req.body;
    const modelId = crypto.randomUUID();
    const modelFilename = `${modelId}-${filename}`;

    // Convert base64 to buffer if needed
    const modelBuffer = modelFile.startsWith('data:') 
      ? Buffer.from(modelFile.split(',')[1], 'base64')
      : Buffer.from(modelFile);

    // Upload to Supabase storage
    const { data, error } = await supabase.storage
      .from('models')
      .upload(modelFilename, modelBuffer, {
        contentType: 'model/gltf+json',
        upsert: true
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('models')
      .getPublicUrl(modelFilename);

    res.json({
      id: modelId,
      filename: modelFilename,
      url: publicUrl
    });

  } catch (error) {
    console.error('Model upload error:', error);
    res.status(500).json({ error: 'Failed to upload model' });
  }
});

// Set up model routes
app.use('/api/models', setupModelRoutes(supabase));

// Get all public models
app.get('/api/models/public', (async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('is_public', true)
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error('Error fetching public models:', error);
    res.status(500).json({ error: 'Failed to fetch public models' });
  }
}) as RequestHandler);

// Get models for a specific user (both public and private if it's the authenticated user)
app.get('/api/models/user/:userId', (async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const authenticatedUserId = req.auth?.payload?.sub;

    let query = supabase.from('models').select('*');
    
    // If requesting user's own models, return all
    // Otherwise, filter to only public models
    if (userId === authenticatedUserId) {
      query = query.eq('user_id', userId);
    } else {
      query = query
        .eq('user_id', userId)
        .eq('is_public', true);
    }

    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error('Error fetching user models:', error);
    res.status(500).json({ error: 'Failed to fetch user models' });
  }
}) as RequestHandler);

// Get public models from a specific manufacturer
app.get('/api/models/manufacturer/:manufacturerId', (async (req: Request, res: Response) => {
  try {
    const { manufacturerId } = req.params;
    
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('user_id', manufacturerId)
      .eq('is_public', true)
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error('Error fetching manufacturer models:', error);
    res.status(500).json({ error: 'Failed to fetch manufacturer models' });
  }
}) as RequestHandler);

// Get a specific model by ID (respecting visibility)
app.get('/api/models/:modelId', (async (req: Request, res: Response) => {
  try {
    const { modelId } = req.params;
    const authenticatedUserId = req.auth?.payload?.sub;
    
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('id', modelId)
      .single();
      
    if (error) throw error;
    
    // Check visibility permissions
    if (!data) {
      return res.status(404).json({ error: 'Model not found' });
    }
    
    // Only return private models to their owner
    if (!data.is_public && data.user_id !== authenticatedUserId) {
      return res.status(403).json({ error: 'Access denied: Model is private' });
    }
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching model by ID:', error);
    res.status(500).json({ error: 'Failed to fetch model' });
  }
}) as RequestHandler);

// Update a model (owner only)
app.patch('/api/models/:modelId', (async (req: Request, res: Response) => {
  try {
    const { modelId } = req.params;
    const authenticatedUserId = req.auth?.payload?.sub;
    const updates = req.body;
    
    // First check if user owns the model
    const { data: model, error: fetchError } = await supabase
      .from('models')
      .select('user_id')
      .eq('id', modelId)
      .single();
      
    if (fetchError) throw fetchError;
    
    if (!model) {
      return res.status(404).json({ error: 'Model not found' });
    }
    
    if (model.user_id !== authenticatedUserId) {
      return res.status(403).json({ error: 'Access denied: You do not own this model' });
    }
    
    // Apply updates
    const { data, error } = await supabase
      .from('models')
      .update(updates)
      .eq('id', modelId)
      .select()
      .single();
      
    if (error) throw error;
    
    res.json(data);
  } catch (error) {
    console.error('Error updating model:', error);
    res.status(500).json({ error: 'Failed to update model' });
  }
}) as RequestHandler);

// Delete a model (owner only)
app.delete('/api/models/:modelId', (async (req: Request, res: Response) => {
  try {
    const { modelId } = req.params;
    const authenticatedUserId = req.auth?.payload?.sub;
    
    // First check if user owns the model
    const { data: model, error: fetchError } = await supabase
      .from('models')
      .select('user_id, s3_key')
      .eq('id', modelId)
      .single();
      
    if (fetchError) throw fetchError;
    
    if (!model) {
      return res.status(404).json({ error: 'Model not found' });
    }
    
    if (model.user_id !== authenticatedUserId) {
      return res.status(403).json({ error: 'Access denied: You do not own this model' });
    }
    
    // Delete from Supabase Storage if key exists
    if (model.s3_key) {
      try {
        const { error: storageError } = await supabase.storage
          .from('models')
          .remove([model.s3_key]);
          
        if (storageError) {
          console.error('Error deleting model from storage:', storageError);
          // Continue with database deletion even if storage deletion fails
        }
      } catch (storageError) {
        console.error('Error deleting model from storage:', storageError);
        // Continue with database deletion even if storage deletion fails
      }
    }
    
    // Delete from database
    const { error: deleteError } = await supabase
      .from('models')
      .delete()
      .eq('id', modelId);
      
    if (deleteError) throw deleteError;
    
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting model:', error);
    res.status(500).json({ error: 'Failed to delete model' });
  }
}) as RequestHandler);

// Get profile by id (or custom url)
app.get('/api/profile/:id', optionalJwtCheck, async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    // Safely extract the requesting user ID if available
    const requestingUserId = req.auth?.payload?.sub || null;

    console.log(`Profile request for: ${id}, requesting user: ${requestingUserId || 'unauthenticated'}`);

    if (!id) {
      res.status(400).json({ error: 'Profile ID is required' });
      return;
    }

    // First try to find by ID
    let { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching profile by id:', {
        error,
        message: error.message,
        details: error.details
      });
      res.status(500).json({ 
        error: 'Database error', 
        message: 'An error occurred while fetching the profile',
        details: error.message
      });
      return;
    }

    // If no error but also no data, it means no record was found
    if (!data) {
      // Then try to find by custom_url
      const { data: customUrlData, error: customUrlError } = await supabase
        .from('profiles')
        .select('*')
        .eq('custom_url', id)
        .maybeSingle();
      
      if (customUrlError) {
        console.error('Error fetching profile by custom_url:', customUrlError);
        res.status(500).json({ 
          error: 'Database error', 
          message: 'An error occurred while fetching the profile'
        });
        return;
      }

      data = customUrlData;
    }

    // If no profile was found by either ID or custom_url
    if (!data) {
      console.log(`Profile not found for ID or custom_url: ${id}`);
      res.status(404).json({ 
        error: 'Profile not found',
        message: 'This profile does not exist or might be private.'
      });
      return;
    }

    // Check if the profile is private and the requesting user is not the owner
    if (data.is_public === false && requestingUserId !== data.id) {
      console.log(`Access denied for private profile ${id} - requestor: ${requestingUserId || 'unauthenticated'}`);
      res.status(403).json({ 
        error: 'Access denied', 
        message: 'This profile is private.' 
      });
      return;
    }

    res.status(200).json(data);
  } catch (error: any) {
    console.error('Error fetching profile by id:', {
      message: error.message || 'Unknown error',
      details: error.stack || '',
      hint: '',
      code: error.code || ''
    });
    res.status(500).json({ 
      error: 'Server error', 
      message: error.message || 'An unexpected error occurred'
    });
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

if (!process.env.RHINO_COMPUTE_ENDPOINT || !process.env.RHINO_COMPUTE_KEY) {
  throw new Error('Rhino Compute environment variables not configured');
}

const PORT = process.env.PORT|| 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
