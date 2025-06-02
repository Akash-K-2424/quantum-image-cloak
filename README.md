# Quantum Image Cloak

Quantum Image Cloak is a web-based application that demonstrates quantum-inspired encryption and decryption of images using a simulated BB84 protocol for key generation. This project is built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

---

## 🚀 Features

- **Quantum Key Generation**: Simulates quantum key generation (BB84 protocol) for secure encryption.
- **Image Encryption**: Encrypt any uploaded image using the generated quantum key.
- **Image Decryption**: Decrypt encrypted images using the same quantum key.
- **Download Support**: Download encrypted and decrypted images.
- **Modern UI**: Clean, responsive interface with status indicators and workflow tabs.

---

## 🖼️ How It Works

1. **Encrypt Workflow**
   - Upload an image.
   - Generate a quantum key.
   - Encrypt the image using the key.
   - Download or view the encrypted image.

2. **Decrypt Workflow**
   - Upload an encrypted image.
   - Enter or generate the quantum key.
   - Decrypt the image using the key.
   - Download or view the decrypted image.

---

## 🛠️ Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🏁 Getting Started

### Prerequisites
- Node.js & npm (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```sh
# 1. Clone the repository
 git clone <YOUR_GIT_URL>

# 2. Navigate to the project directory
 cd quantum-image-cloak

# 3. Install dependencies
 npm install

# 4. Start the development server
 npm run dev
```

The app will be available at [http://localhost:8080](http://localhost:8080).

---

## 🧑‍💻 Project Structure

- `src/components/` — UI components (encryption, decryption, uploader, display, status)
- `src/lib/` — Core logic for encryption, decryption, and quantum key generation
- `src/pages/` — Page components
- `public/` — Static assets

---

## 🧬 Quantum Encryption Model

This project simulates quantum encryption using a BB84-inspired protocol for key generation. The encryption and decryption functions use this key to manipulate image data. No real quantum hardware or neural networks are involved—this is a conceptual and educational demo.

---

## 🌐 Deployment

You can deploy this project using any static hosting provider (e.g., Vercel, Netlify) or via the [Lovable](https://lovable.dev/) platform.

---

## 📄 License

This project is for educational and demonstration purposes.

---

## 🙋 FAQ

**Q: Can I use my own key for decryption?**
A: Currently, the UI generates the key for you. You can modify the code to allow manual key entry if needed.

**Q: Is this real quantum encryption?**
A: No, this is a simulation for educational purposes only.

**Q: Where is the encryption logic?**
A: See `src/lib/encryption.ts` and `src/lib/quantum.ts` for the core logic.

---

## 👤 Author

- [Your Name](https://github.com/yourusername)
