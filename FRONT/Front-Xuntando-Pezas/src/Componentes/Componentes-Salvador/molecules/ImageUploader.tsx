import React, { useRef, useState } from 'react';
import Button from '../atoms/Button';
import './ImageUploader.css';

interface ImageUploaderProps {
  onImageChange: (file: File | null) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onImageChange(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onImageChange(null);
  };

  return (
    <div className="image-uploader">
      <div className="preview-container">
        <img src={preview || ''} alt="Preview" className={`preview ${preview ? 'visible' : 'hidden'}`} />
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div className="buttons">
        <Button onClick={handleUploadClick} variant="primary" className="uploader-button">
          Cambiar imagen
        </Button>
        <Button onClick={handleRemoveImage} variant="danger" className="uploader-button">
          Eliminar imagen
        </Button>
      </div>
    </div>
  );
};

export default ImageUploader;
