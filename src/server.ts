import express, { Request, Response, Application } from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { RequestHandler } from 'express-serve-static-core';

dotenv.config();

const app = express();

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}) as unknown as RequestHandler;

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// Middleware
app.use(limiter);
app.use(cors({
  origin: ['http://localhost:3001', 'https://design.spinlio.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});