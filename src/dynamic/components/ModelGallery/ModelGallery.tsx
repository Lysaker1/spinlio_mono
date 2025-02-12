import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { FileObject } from '@supabase/storage-js';
import * as THREE from 'three';
import ModelUploadModal from '../ModelUploadModal/ModelUploadModal';
import './ModelGallery.css';

interface Model {
  id: string;
  name: string;
  filename: string;
  file_size: number;
  file_type: string;
  url: string;
  created_at: string;
  category: string;
  subcategory?: string;
  price?: number;
  description?: string;
  attachment_points?: {
    name: string;
    position_x: number;
    position_y: number;
    position_z: number;
    rotation_x: number;
    rotation_y: number;
    rotation_z: number;
  }[];
  manufacturer?: string;
  dimensions?: string;
  part_type?: string;
  material?: string;
  weight_kg?: number;
}

interface ModelGalleryProps {
  onModelSelect: (url: string | null) => void;
}

interface AttachmentPoint {
  name: string;
  mesh: THREE.Mesh;
  position: THREE.Vector3;
  rotation: THREE.Euler;
}

export const ModelGallery: React.FC<ModelGalleryProps> = ({ onModelSelect }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [uploading, setUploading] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    const { data: models, error: dbError } = await supabase
      .from('models')
      .select('*')
      .order('created_at', { ascending: false });

    if (dbError) {
      console.error('Error loading models:', dbError);
      return;
    }

    setModels(models || []);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);
    
    // Check if any file is not GLB or GLTF
    const invalidFiles = files.filter(file => {
      const ext = file.name.split('.').pop()?.toLowerCase();
      return !['glb', 'gltf'].includes(ext || '');
    });

    if (invalidFiles.length > 0) {
      alert('Please upload only GLB or GLTF files');
      return;
    }

    setSelectedFiles(files);
    setShowUploadModal(true);
  };

  const handleUpload = async (metadata: {
    name: string;
    category: string;
    subcategory?: string;
    price?: number;
    description?: string;
    manufacturer?: string;
    dimensions?: string;
    partType?: string;
  }) => {
    if (!metadata.name || !metadata.category) {
      throw new Error('Name and category are required');
    }
    if (metadata.dimensions && !/^\d+x\d+x\d+$/.test(metadata.dimensions)) {
      throw new Error('Dimensions must be in LxWxH format');
    }

    setUploading(true);
    try {
      for (const file of selectedFiles) {
        const filename = `${Date.now()}-${file.name}`;
        
        // Upload file to storage
        const { error: uploadError } = await supabase.storage
          .from('models')
          .upload(filename, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('models')
          .getPublicUrl(filename);

        // Store metadata in database
        const { error: dbError } = await supabase
          .from('models')
          .insert({
            name: metadata.name,
            filename,
            file_size: file.size,
            file_type: file.type || `model/${file.name.split('.').pop()}`,
            url: publicUrl,
            category: metadata.category,
            subcategory: metadata.subcategory,
            price: metadata.price,
            description: metadata.description,
            manufacturer: metadata.manufacturer,
            dimensions: metadata.dimensions,
            part_type: metadata.partType,
          });

        if (dbError) throw dbError;
      }
      await loadModels();
    } finally {
      setUploading(false);
      setShowUploadModal(false);
    }
  };

  const handleModelSelect = async (model: Model) => {
    console.log('[Gallery] Clicking model:', model);
    if (!model.url) {
      console.error('[Gallery] Model URL is missing');
      return;
    }
    console.log('[Gallery] Selected model:', model.name, model.url);
    onModelSelect(model.url);
  };

  const handleAttachmentPointsFound = async (points: AttachmentPoint[]) => {
    if (!selectedModelId) return;
    
    console.log('Found points:', points);
    // For now, just log all detected points
    points.forEach((point, index) => {
      console.log(`Point ${index}:`, {
        name: point.name,
        position: point.position,
        rotation: point.rotation
      });
    });
  };

  return (
    <div className="model-gallery">
      <ModelUploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onSubmit={handleUpload}
      />
      
      <div className="upload-section">
        <label className="upload-button">
          Upload GLB Models
          <input
            type="file"
            accept=".glb,.gltf"
            onChange={handleFileSelect}
            disabled={uploading}
            multiple
          />
        </label>
      </div>

      <div className="gallery-layout">
        <div className="models-grid">
          {models.map((model) => (
            <div 
              key={model.name} 
              className="model-card"
              onClick={() => handleModelSelect(model)}
            >
              <h3>{model.name}</h3>
              <div className="model-metadata">
                {model.manufacturer && <div>Maker: {model.manufacturer}</div>}
                {model.dimensions && <div>Size: {model.dimensions}mm</div>}
                {model.part_type && <div>Type: {model.part_type}</div>}
              </div>
              <div className="model-info">
                <span>{(model.file_size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 