
import React from 'react';

interface ImageDisplayProps {
  imageData: string | null;
  label: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageData, label }) => {
  if (!imageData) {
    return (
      <div className="w-full aspect-video bg-quantum-dark/50 flex items-center justify-center rounded-md border border-quantum-blue/20">
        <p className="text-quantum-light/50 text-sm">No image available</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative w-full rounded-md overflow-hidden border border-quantum-blue/30">
        <img 
          src={imageData} 
          alt={label} 
          className="w-full h-auto object-contain max-h-[300px]" 
        />
      </div>
      <p className="text-sm text-quantum-light/70 text-center">{label}</p>
    </div>
  );
};

export default ImageDisplay;
