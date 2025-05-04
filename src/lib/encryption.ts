/**
 * Encrypts an image using the provided key
 * This is a simulated implementation that actually applies a visual effect
 * to represent encryption rather than true cryptographic encryption
 * 
 * @param imageData - The original image as a data URL
 * @param key - The encryption key
 * @returns The "encrypted" image as a data URL
 */
export function encryptImage(imageData: string, key: string): string {
  // For demonstration purposes, we'll create a pixelated/scrambled effect
  // In a real application, you would use AES or another strong algorithm
  
  return new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not create canvas context'));
        return;
      }
      
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the original image
      ctx.drawImage(img, 0, 0);
      
      // Get image data to manipulate pixels
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      // Use key to create a simple pseudo-random number generator
      const keySum = key.split('')
        .reduce((sum, char) => sum + char.charCodeAt(0), 0);
      
      // Apply visual "encryption" effect (pixel manipulation)
      for (let i = 0; i < data.length; i += 4) {
        // Simulate encryption by XORing with key-derived values
        // In a real implementation, you'd use a proper encryption algorithm
        const pixelIndex = i / 4;
        const row = Math.floor(pixelIndex / canvas.width);
        const col = pixelIndex % canvas.width;
        
        // Generate deterministic but seemingly random values based on position and key
        const keyFactor = (row * 37 + col * 23 + keySum) % 256;
        
        // Modify RGB channels (leave alpha unchanged)
        data[i] = (data[i] + keyFactor) % 256;      // Red
        data[i + 1] = (data[i + 1] + keyFactor) % 256;  // Green
        data[i + 2] = (data[i + 2] + keyFactor) % 256;  // Blue
        
        // Apply some visual noise to random pixels
        if ((row + col + keySum) % 7 === 0) {
          data[i] = (data[i] + 128) % 256;
          data[i + 1] = (data[i + 1] + 128) % 256;
          data[i + 2] = (data[i + 2] + 128) % 256;
        }
      }
      
      // Put the modified data back on the canvas
      ctx.putImageData(imgData, 0, 0);
      
      // Convert canvas to data URL
      resolve(canvas.toDataURL('image/png'));
    };
    
    img.onerror = () => {
      reject(new Error('Could not load image for encryption'));
    };
    
    img.src = imageData;
  });
}

/**
 * Decrypts an image using the provided key
 * This is a simulated implementation that reverses the visual effect
 * 
 * @param encryptedImageData - The encrypted image as a data URL
 * @param key - The encryption key
 * @returns The "decrypted" image as a data URL
 */
export function decryptImage(encryptedImageData: string, key: string): string {
  // In a real application, this would use the inverse of your encryption algorithm
  // For our demo, we'll return the original image with slight modifications
  // to simulate a decryption process
  
  return new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not create canvas context'));
        return;
      }
      
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the encrypted image
      ctx.drawImage(img, 0, 0);
      
      // Get image data to manipulate pixels
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      // Use key to create the same pseudo-random number generator as in encryption
      const keySum = key.split('')
        .reduce((sum, char) => sum + char.charCodeAt(0), 0);
      
      // Apply inverse of the encryption transform
      for (let i = 0; i < data.length; i += 4) {
        const pixelIndex = i / 4;
        const row = Math.floor(pixelIndex / canvas.width);
        const col = pixelIndex % canvas.width;
        
        // Generate the same deterministic values as in encryption
        const keyFactor = (row * 37 + col * 23 + keySum) % 256;
        
        // Reverse the RGB modifications
        data[i] = (data[i] - keyFactor + 256) % 256;      // Red
        data[i + 1] = (data[i + 1] - keyFactor + 256) % 256;  // Green
        data[i + 2] = (data[i + 2] - keyFactor + 256) % 256;  // Blue
        
        // Reverse the noise pattern
        if ((row + col + keySum) % 7 === 0) {
          data[i] = (data[i] - 128 + 256) % 256;
          data[i + 1] = (data[i + 1] - 128 + 256) % 256;
          data[i + 2] = (data[i + 2] - 128 + 256) % 256;
        }
      }
      
      // Put the modified data back on the canvas
      ctx.putImageData(imgData, 0, 0);
      
      // Convert canvas to data URL
      resolve(canvas.toDataURL('image/png'));
    };
    
    img.onerror = () => {
      reject(new Error('Could not load image for decryption'));
    };
    
    img.src = encryptedImageData;
  });
}
