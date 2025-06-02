# Quantum Image Cloak

A beginner-friendly web app to encrypt and decrypt images using a simulated quantum key. No prior experience needed—just follow the steps below!

---

## 🌟 What is this?
This project lets you upload an image, generate a quantum-inspired key, and encrypt or decrypt your image—all in your browser. It's a fun way to learn about quantum encryption concepts (no real quantum computer needed).

---

## 🖥️ How to Download and Run This Project

### 1. Prerequisites
- **Node.js** and **npm** must be installed on your computer.
  - If you don't have them, install both easily with [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating).

### 2. Download the Code
- Click the green **Code** button on the GitHub page and choose **Download ZIP**.
- Or, if you use git, run this in your terminal:
  ```zsh
  git clone https://github.com/Akash-K-2424/quantum-image-cloak.git
  cd quantum-image-cloak
  ```

### 3. Install Dependencies
- In your terminal, run:
  ```zsh
  npm install
  ```
  This will download everything the project needs.

### 4. Start the App
- In your terminal, run:
  ```zsh
  npm run dev
  ```
- You will see a message like:
  ```
  VITE vX.X.X  ready in XXXX ms
  ➜  Local:   http://localhost:8080/
  ```
- Open your browser and go to [http://localhost:8080](http://localhost:8080)

---

## 🕹️ How to Use the App
1. **Encrypt an Image**
   - Click "I want to encrypt an image"
   - Upload your image
   - Click "Generate Quantum Key"
   - Click "Encrypt Image"
   - Download your encrypted image

2. **Decrypt an Image**
   - Click "I want to decrypt an image"
   - Upload your encrypted image
   - Enter or generate the quantum key
   - Click "Decrypt Image"
   - Download your decrypted image

---

## 🛠️ Technologies Used
- Vite (for fast development)
- React (for the user interface)
- TypeScript (for safer code)
- shadcn-ui & Tailwind CSS (for beautiful styling)

---

## 📁 Project Structure (for the curious)
- `src/components/` — UI building blocks
- `src/lib/` — Encryption and key logic
- `src/pages/` — Main pages
- `public/` — Static files

---

## ❓ FAQ
**Q: Do I need to know coding to use this?**
A: No! Just follow the steps above.

**Q: Is this real quantum encryption?**
A: No, it's a simulation for learning and fun.

**Q: Can I use my own key?**
A: The app generates a key for you, but you can modify the code to allow manual entry if you wish.

---

## 👤 Author
- [Akash Kotha](https://github.com/Akash-K-2424)

---

## 📝 License
This project is for educational and demonstration purposes only.
