import React, { useState } from 'react';

interface ModelUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (metadata: {
    name: string;
    category: string;
    subcategory?: string;
    price?: number;
    description?: string;
    manufacturer?: string;
    dimensions?: string;
    partType?: string;
  }) => Promise<void>;
}

const ModelUploadModal: React.FC<ModelUploadModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    subcategory: '',
    price: '',
    description: '',
    manufacturer: '',
    dimensions: '',
    partType: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.category) {
      alert('Please fill in required fields');
      return;
    }
    
    try {
      await onSubmit({
        name: formData.name,
        category: formData.category,
        subcategory: formData.subcategory || undefined,
        price: formData.price ? parseFloat(formData.price) : undefined,
        description: formData.description || undefined,
        manufacturer: formData.manufacturer || undefined,
        dimensions: formData.dimensions || undefined,
        partType: formData.partType || undefined
      });
      onClose();
    } catch (error) {
      alert('Error uploading model: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Upload New 3D Model</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Model Name *</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter model name"
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="">Select Category</option>
              <option value="frames">Frames</option>
              <option value="components">Components</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Enter model description"
            />
          </div>

          <div className="form-group">
            <label>
              Manufacturer
              <input type="text" name="manufacturer" required />
            </label>
          </div>

          <div className="form-group">
            <label>
              Dimensions (mm)
              <input type="text" name="dimensions" placeholder="LxWxH" />
            </label>
          </div>

          <div className="form-group">
            <label>
              Part Type
              <select name="partType">
                <option value="structural">Structural</option>
                <option value="decorative">Decorative</option>
                <option value="mechanical">Mechanical</option>
              </select>
            </label>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Upload</button>
          </div>
        </form>
      </div>

      <style >{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}; 

export default ModelUploadModal;