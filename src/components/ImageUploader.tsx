
import React, { useState, useRef } from 'react';
import { Upload, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  onImageUpload: (imageData: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const processFile = (file: File) => {
    setIsLoading(true);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onImageUpload(result);
      }
      setIsLoading(false);
    };
    
    reader.onerror = () => {
      console.error('Error reading file');
      setIsLoading(false);
    };
    
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        processFile(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        processFile(file);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      className={cn(
        "border-2 border-dashed rounded-lg p-10 text-center transition-all duration-200",
        isDragging ? "border-quantum-blue bg-quantum-blue/10" : "border-quantum-blue/30",
        "hover:border-quantum-blue hover:bg-quantum-blue/5"
      )}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-quantum-blue/20 flex items-center justify-center animate-quantum-float">
            <FileImage className="w-8 h-8 text-quantum-blue" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-quantum-dark border border-quantum-blue flex items-center justify-center">
            <Upload className="w-3 h-3 text-quantum-blue" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-quantum-light">Upload an image to encrypt</h3>
          <p className="text-sm text-quantum-light/70">
            Drag and drop an image here, or click to select
          </p>
        </div>
        
        <Button
          onClick={handleButtonClick}
          disabled={isLoading}
          className="bg-quantum-blue hover:bg-quantum-blue-dark text-white"
        >
          {isLoading ? (
            <>Processing...</>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Select Image
            </>
          )}
        </Button>
        
        <p className="text-xs text-quantum-light/50 max-w-xs mx-auto">
          Supported formats: JPEG, PNG, GIF, BMP
        </p>
      </div>
    </div>
  );
};

export default ImageUploader;
