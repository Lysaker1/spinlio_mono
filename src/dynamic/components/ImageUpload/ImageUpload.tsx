// src/dynamiCcomponents/ImageUpload/ImageUpload.tsx
import React, { useState } from 'react';
import { generate3DModel } from '../../api/stabilityApi';
import './ImageUpload.css';

interface ImageUploadProps {
  onModelGenerated: (modelBlob: Blob) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onModelGenerated }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>('fork');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async () => {
    if (!imageFile) return;
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Starting 3D model generation...');
      const modelBlob = await generate3DModel(imageFile);
      console.log('Model generation successful, blob size:', modelBlob.size);
      onModelGenerated(modelBlob);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('Model generation error:', error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="image-upload">
      <div className="image-upload__input-container">
        <label className="image-upload__label">
          <input 
            type="file" 
            className="image-upload__input"
            accept="image/*" 
            onChange={handleImageChange} 
            disabled={isLoading}
          />
          {imageFile ? (
            <span>Selected: {imageFile.name}</span>
          ) : (
            <>
              <span>Drop image here or click to upload</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                Supported formats: PNG, JPG, WEBP
              </span>
            </>
          )}
        </label>
      </div>

      <div>
        <select 
          className="category-select"
          id="category" 
          value={category} 
          onChange={handleCategoryChange}
        >
          <option value="fork">Fork</option>
          <option value="headtube">Headtube</option>
          <option value="seatpost">Seatpost</option>
          <option value="stem">Stem</option>
          <option value="handlebar">Handlebar</option>
          <option value="seatclamp">Seatclamp</option>
          <option value="downtube">Downtube</option>
        </select>
      </div>

      <button 
        className="generate-button"
        onClick={handleSubmit} 
        disabled={!imageFile || isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate 3D Model'}
      </button>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;