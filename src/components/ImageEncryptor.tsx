import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Lock, Shield, Download } from 'lucide-react';
import ImageUploader from './ImageUploader';
import ImageDisplay from './ImageDisplay';
import { generateQuantumKey } from '@/lib/quantum';
import { encryptImage, decryptImage } from '@/lib/encryption';
import { toast } from '@/components/ui/use-toast';
import StatusIndicator from './StatusIndicator';

const ImageEncryptor = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [encryptedImage, setEncryptedImage] = useState<string | null>(null);
  const [decryptedImage, setDecryptedImage] = useState<string | null>(null);
  const [encryptionKey, setEncryptionKey] = useState<string | null>(null);
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [activeTab, setActiveTab] = useState('original');

  const handleImageUpload = (imageData: string) => {
    setOriginalImage(imageData);
    setEncryptedImage(null);
    setDecryptedImage(null);
    setEncryptionKey(null);
    setActiveTab('original');
  };

  const handleGenerateKey = async () => {
    if (!originalImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive"
      });
      return;
    }

    setIsGeneratingKey(true);
    try {
      // Simulate quantum key generation with a delay
      setTimeout(() => {
        const key = generateQuantumKey();
        setEncryptionKey(key);
        toast({
          title: "Quantum Key Generated",
          description: "Secure key created using simulated BB84 protocol",
        });
        setIsGeneratingKey(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Key generation failed",
        description: "Error during quantum key generation",
        variant: "destructive"
      });
      setIsGeneratingKey(false);
    }
  };

  const handleEncrypt = async () => {
    if (!originalImage || !encryptionKey) {
      toast({
        title: "Cannot encrypt",
        description: "Please upload an image and generate a key first",
        variant: "destructive"
      });
      return;
    }

    setIsEncrypting(true);
    try {
      const encrypted = await encryptImage(originalImage, encryptionKey);
      setEncryptedImage(encrypted);
      toast({
        title: "Encryption Complete",
        description: "Image successfully encrypted with quantum key",
      });
      setActiveTab('encrypted');
    } catch (error) {
      toast({
        title: "Encryption failed",
        description: "Error during image encryption",
        variant: "destructive"
      });
    } finally {
      setIsEncrypting(false);
    }
  };

  const handleDecrypt = async () => {
    if (!encryptedImage || !encryptionKey) {
      toast({
        title: "Cannot decrypt",
        description: "Please encrypt an image first",
        variant: "destructive"
      });
      return;
    }

    setIsDecrypting(true);
    try {
      const decrypted = await decryptImage(encryptedImage, encryptionKey);
      setDecryptedImage(decrypted);
      toast({
        title: "Decryption Complete",
        description: "Image successfully decrypted with quantum key",
      });
      setActiveTab('decrypted');
    } catch (error) {
      toast({
        title: "Decryption failed",
        description: "Error during image decryption",
        variant: "destructive"
      });
    } finally {
      setIsDecrypting(false);
    }
  };

  const handleDownload = (imageType: 'encrypted' | 'decrypted') => {
    const imageData = imageType === 'encrypted' ? encryptedImage : decryptedImage;
    if (!imageData) return;

    const link = document.createElement('a');
    link.href = imageData;
    link.download = `quantum_${imageType}_image.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Started",
      description: `Your ${imageType} image is being downloaded`,
    });
  };

  return (
    <Card className="bg-quantum-darker border-quantum-blue/30 quantum-glow overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-quantum-blue/20 to-transparent border-b border-quantum-blue/30">
        <CardTitle className="text-2xl text-quantum-blue">Image Encryption Lab</CardTitle>
        <CardDescription>
          Upload, encrypt, and decrypt images using quantum-secured keys
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {!originalImage ? (
          <ImageUploader onImageUpload={handleImageUpload} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="col-span-1 space-y-4">
                <StatusIndicator 
                  label="Quantum Key"
                  status={encryptionKey ? 'success' : 'pending'}
                  detail={encryptionKey ? "Generated" : "Not generated"}
                  icon={<Shield className="h-5 w-5" />}
                  isLoading={isGeneratingKey}
                />
                <StatusIndicator 
                  label="Encryption"
                  status={encryptedImage ? 'success' : 'pending'}
                  detail={encryptedImage ? "Complete" : "Not started"}
                  icon={<Lock className="h-5 w-5" />}
                  isLoading={isEncrypting}
                />
                <StatusIndicator 
                  label="Decryption"
                  status={decryptedImage ? 'success' : 'pending'}
                  detail={decryptedImage ? "Complete" : "Not started"}
                  icon={<Lock className="h-5 w-5" />}
                  isLoading={isDecrypting}
                />
                
                <div className="space-y-2 pt-4">
                  <Button
                    variant="outline"
                    className="w-full bg-quantum-darker border-quantum-blue/40 text-quantum-blue hover:bg-quantum-blue/20 hover:text-quantum-blue-light"
                    onClick={handleGenerateKey}
                    disabled={isGeneratingKey || !originalImage}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    {isGeneratingKey ? 'Generating Key...' : 'Generate Quantum Key'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full bg-quantum-darker border-quantum-blue/40 text-quantum-blue hover:bg-quantum-blue/20 hover:text-quantum-blue-light"
                    onClick={handleEncrypt}
                    disabled={isEncrypting || !encryptionKey || !originalImage}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    {isEncrypting ? 'Encrypting...' : 'Encrypt Image'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full bg-quantum-darker border-quantum-blue/40 text-quantum-blue hover:bg-quantum-blue/20 hover:text-quantum-blue-light"
                    onClick={handleDecrypt}
                    disabled={isDecrypting || !encryptedImage}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    {isDecrypting ? 'Decrypting...' : 'Decrypt Image'}
                  </Button>
                </div>
              </div>
              
              <div className="col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="bg-quantum-dark border border-quantum-blue/30 mb-4 w-full grid grid-cols-3">
                    <TabsTrigger value="original" className="data-[state=active]:bg-quantum-blue data-[state=active]:text-white">
                      Original
                    </TabsTrigger>
                    <TabsTrigger value="encrypted" disabled={!encryptedImage} className="data-[state=active]:bg-quantum-blue data-[state=active]:text-white">
                      Encrypted
                    </TabsTrigger>
                    <TabsTrigger value="decrypted" disabled={!decryptedImage} className="data-[state=active]:bg-quantum-blue data-[state=active]:text-white">
                      Decrypted
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="original" className="mt-0">
                    <ImageDisplay imageData={originalImage} label="Original Image" />
                  </TabsContent>
                  
                  <TabsContent value="encrypted" className="mt-0">
                    <div className="relative">
                      <ImageDisplay imageData={encryptedImage} label="Encrypted Image" />
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute top-2 right-2 bg-quantum-dark/60 hover:bg-quantum-blue/80"
                        onClick={() => handleDownload('encrypted')}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="decrypted" className="mt-0">
                    <div className="relative">
                      <ImageDisplay imageData={decryptedImage} label="Decrypted Image" />
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute top-2 right-2 bg-quantum-dark/60 hover:bg-quantum-blue/80"
                        onClick={() => handleDownload('decrypted')}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </>
        )}
      </CardContent>
      
      {originalImage && (
        <CardFooter className="bg-quantum-darker border-t border-quantum-blue/30 justify-between">
          <Button
            variant="ghost"
            onClick={() => {
              setOriginalImage(null);
              setEncryptedImage(null);
              setDecryptedImage(null);
              setEncryptionKey(null);
            }}
            className="text-quantum-light/70 hover:text-quantum-light"
          >
            Reset
          </Button>
          
          <div className="text-xs text-quantum-blue-light/70">
            {encryptionKey && (
              <span>
                Key: {encryptionKey.substring(0, 8)}...{encryptionKey.substring(encryptionKey.length - 8)}
              </span>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ImageEncryptor;
