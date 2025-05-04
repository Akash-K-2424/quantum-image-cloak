
import React from 'react';
import ImageEncryptor from '@/components/ImageEncryptor';
import QuantumExplainer from '@/components/QuantumExplainer';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-quantum-dark quantum-grid">
      <div className="container px-4 py-8 mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-quantum-blue quantum-text-glow">
            Quantum Image Encryptor
          </h1>
          <p className="text-lg text-quantum-light/80 max-w-2xl mx-auto">
            Secure your images with next-generation encryption powered by simulated Quantum Key Distribution (BB84)
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageEncryptor />
          </div>
          <div className="lg:col-span-1">
            <QuantumExplainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
