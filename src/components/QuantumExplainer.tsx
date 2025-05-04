
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const QuantumExplainer = () => {
  return (
    <Card className="bg-quantum-darker border-quantum-blue/30 h-full">
      <CardHeader className="bg-gradient-to-r from-quantum-blue/20 to-transparent border-b border-quantum-blue/30">
        <CardTitle className="text-quantum-blue text-xl">Quantum Encryption Guide</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-quantum-dark border border-quantum-blue/30 mb-4 w-full grid grid-cols-3">
            <TabsTrigger value="overview" className="data-[state=active]:bg-quantum-blue data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="bb84" className="data-[state=active]:bg-quantum-blue data-[state=active]:text-white">
              BB84 Protocol
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-quantum-blue data-[state=active]:text-white">
              Security
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-0">
            <div className="space-y-4">
              <div className="relative p-4 rounded-lg bg-quantum-blue/10 border border-quantum-blue/30">
                <h3 className="text-quantum-blue font-medium mb-2">Quantum Image Encryption</h3>
                <p className="text-sm text-quantum-light/80">
                  This application demonstrates a simulated quantum-secure image encryption system.
                  It combines classical AES encryption with keys generated through quantum key distribution (QKD).
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-quantum-blue font-medium">How It Works:</h3>
                <ol className="list-decimal list-inside text-sm text-quantum-light/80 space-y-2 pl-2">
                  <li>Upload an image you want to encrypt</li>
                  <li>Generate a secure quantum key using BB84 simulation</li>
                  <li>Encrypt your image using the quantum-generated key</li>
                  <li>Decrypt the image using the same quantum key</li>
                </ol>
              </div>
              
              <div className="text-xs text-quantum-light/60 mt-4">
                <p>
                  This is a simplified simulation of quantum encryption principles.
                  In a real quantum system, the key exchange would happen over a quantum channel using actual qubits.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="bb84" className="mt-0 space-y-4">
            <div className="p-4 rounded-lg bg-quantum-blue/10 border border-quantum-blue/30">
              <h3 className="text-quantum-blue font-medium mb-2">BB84 Protocol</h3>
              <p className="text-sm text-quantum-light/80">
                BB84 is the first quantum key distribution protocol, developed by Charles Bennett and Gilles Brassard in 1984.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-quantum-blue font-medium">Protocol Steps:</h3>
              <ol className="list-decimal list-inside text-sm text-quantum-light/80 space-y-2 pl-2">
                <li>Alice prepares qubits in random quantum states</li>
                <li>Bob measures these qubits using random bases</li>
                <li>Alice and Bob publicly compare measurement bases</li>
                <li>They keep only results where bases matched</li>
                <li>The resulting shared bits form the secure key</li>
              </ol>
            </div>
            
            <div className="animate-quantum-pulse p-4 rounded-lg bg-gradient-to-r from-quantum-blue/5 to-quantum-dark border border-quantum-blue/20">
              <h3 className="text-quantum-blue font-medium mb-2 quantum-text-glow">Quantum Advantage</h3>
              <p className="text-sm text-quantum-light/80">
                The security of BB84 relies on the fundamental principles of quantum mechanics:
                any attempt to intercept the qubits will disturb them in a detectable way.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="mt-0 space-y-4">
            <div className="p-4 rounded-lg bg-quantum-blue/10 border border-quantum-blue/30">
              <h3 className="text-quantum-blue font-medium mb-2">Quantum Security Benefits</h3>
              <p className="text-sm text-quantum-light/80">
                Quantum key distribution offers several advantages over classical encryption methods.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 rounded-md bg-quantum-blue/5 border border-quantum-blue/20">
                <h4 className="text-sm font-medium text-quantum-blue">Quantum Eavesdropping Detection</h4>
                <p className="text-xs text-quantum-light/70">
                  Any attempt to measure or copy quantum data disturbs the system, revealing the presence of an eavesdropper.
                </p>
              </div>
              
              <div className="p-3 rounded-md bg-quantum-blue/5 border border-quantum-blue/20">
                <h4 className="text-sm font-medium text-quantum-blue">Quantum-Resistant</h4>
                <p className="text-xs text-quantum-light/70">
                  Even quantum computers cannot break properly implemented quantum key distribution.
                </p>
              </div>
              
              <div className="p-3 rounded-md bg-quantum-blue/5 border border-quantum-blue/20">
                <h4 className="text-sm font-medium text-quantum-blue">Information-Theoretic Security</h4>
                <p className="text-xs text-quantum-light/70">
                  Security based on the laws of physics, not computational hardness assumptions.
                </p>
              </div>
            </div>
            
            <p className="text-xs text-quantum-light/60 italic">
              Note: This demonstration simulates quantum processes. Real quantum encryption would require specialized quantum hardware.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuantumExplainer;
