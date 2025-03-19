import express, { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import { auth } from 'express-oauth2-jwt-bearer';

const router = express.Router();

// Add your Supabase client here
// This will be passed from server.ts
export const setupModelRoutes = (supabase: any) => {
  // Apply JWT check to all routes
  const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE || 'http://localhost:3003',
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || 'https://auth.spinlio.com',
    tokenSigningAlg: 'RS256'
  });

  router.use(jwtCheck);

  // Get all public models
  router.get('/public', (async (req: Request, res: Response) => {
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
  router.get('/user/:userId', (async (req: Request, res: Response) => {
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
  router.get('/manufacturer/:manufacturerId', (async (req: Request, res: Response) => {
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
  router.get('/:modelId', (async (req: Request, res: Response) => {
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
  router.patch('/:modelId', (async (req: Request, res: Response) => {
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
  router.delete('/:modelId', (async (req: Request, res: Response) => {
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

  return router;
}; 