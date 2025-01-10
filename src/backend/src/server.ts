import express, { Request, Response, Application } from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { RequestHandler } from 'express-serve-static-core';
import { auth } from 'express-oauth2-jwt-bearer';

dotenv.config();

const AUTH0_AUDIENCE = process.env.NODE_ENV === 'production' 
  ? process.env.AUTH0_AUDIENCE_PROD 
  : process.env.AUTH0_AUDIENCE_DEV;

const requiredEnvVars = [
    'SUPABASE_URL',
    'SUPABASE_ANON_KEY',
    'AUTH0_AUDIENCE_DEV',
    'AUTH0_AUDIENCE_PROD',
    'AUTH0_ISSUER_BASE_URL'
  ];
  
  requiredEnvVars.forEach(varName => {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  });

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
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3003',
    'https://design.spinlio.com',
    'https://spinlio.com',
    'https://configurator.spinlio.com',
    'https://api.spinlio.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

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

// Get single item by ID
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

// Add the new design endpoints
app.get('/api/designs/:userId', (async (req: Request, res: Response) => {
  try {
    console.log('GET /api/designs/:userId - Request params:', req.params);
    
    const { data, error } = await supabase
      .from('saved_designs')
      .select('*')
      .eq('user_id', req.params.userId)
      .order('created_at', { ascending: false });

    console.log('Database response:', { data, error });

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    res.json(data || []);
  } catch (error: any) {
    console.error('Error fetching designs:', error);
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

app.post('/api/designs', (async (req: Request, res: Response) => {
  try {
    // Validate required fields
    const { user_id, name, description, parameters, thumbnail_url, configurator_type } = req.body;
    
    if (!user_id || !name || !parameters || !configurator_type) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['user_id', 'name', 'parameters', 'configurator_type']
      });
    }

    console.log('Received design data:', req.body);

    const { data, error } = await supabase
      .from('saved_designs')
      .insert([{ 
        user_id,
        name,
        description,
        parameters,
        thumbnail_url,
        configurator_type
      }])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    if (!data) {
      throw new Error('Failed to create design');
    }

    res.status(201).json(data);
  } catch (error: any) {
    console.error('Error saving design:', error);
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

// Get all designs (for debugging)
app.get('/api/designs', (async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('saved_designs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

const jwtCheck = auth({
  audience: process.env.NODE_ENV === 'production'
    ? 'https://api.spinlio.com'
    : 'http://localhost:3003',
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

// Apply JWT check to protected routes only
app.use('/api/designs', jwtCheck);
app.use('/api/items', jwtCheck);

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

app.use((err: any, req: Request, res: Response, next: any) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

