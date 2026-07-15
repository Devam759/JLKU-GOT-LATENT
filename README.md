# 🎭 JKLU's Got Latent

An interactive, cinematic web application inspired by the aesthetic of Samay Raina's popular show **"India's Got Latent"**. It features a randomized contestant selection system and a dare generator, complete with smooth, GPU-accelerated animations, a photorealistic dark red-blue curtain background, and custom stage overlays.

---

## 🚀 Key Features

*   **🎬 Cinematic Aesthetic:** Featuring a photorealistic dark red and blue stage curtain background with a custom CSS overlay for high-contrast visibility.
*   **🎰 Contestant Roulette:** A "Judge Your Fate" spinner that cycles rapidly through names before smoothly landing on a selected contestant.
*   **⚡ Dynamic Dare Reveal:** A multi-step animation sequence that scales up the chosen contestant's name and fades in a personalized dare.
*   **🧠 Session Persistence:** Uses browser Session Storage to track selected contestants, ensuring no repeats. It automatically resets once all names have been drawn.
*   **🔄 Quick Reset Hotkey:** Press `R` at any time to instantly wipe session memory and reset the user interface to its initial state.
*   **📊 CSV Data Support:** Capable of dynamically parsing and loading names and dares from a CSV file (`assets/participants.csv`), with robust local JavaScript fallbacks.
*   **⚡ Lightweight & Fast:** Built using vanilla web technologies and powered by the Web Animations API for smooth 60fps transitions.

---

## 🛠️ Technology Stack

*   **Frontend:** HTML5, Vanilla CSS3 (Custom Grid/Flexbox layouts, keyframe animations), Modern JavaScript (ES6+, Web Animations API)
*   **Bundler & Dev Server:** [Vite](https://vite.dev/)
*   **Data Parsing:** [SheetJS (xlsx)](https://sheetjs.com/) via CDN for CSV processing.

---

## 📦 Project Structure

```text
├── assets/
│   ├── participants.csv      # CSV source file for contestants and dares
│   ├── logo_2.png            # Main branding logo displayed on the page
│   └── netflix_bg.png        # Photorealistic red-blue curtain background image
├── index.html                # Main entry point and page structure
├── style.css                 # Core design system, layout, and animations
├── script.js                 # Application state, CSV parser, and animation logic
├── package.json              # Project dependencies and npm scripts
└── README.md                 # Project documentation
```

---

## ⚙️ Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amritagrawal12598-stack/JLKU-GOT-LATENT.git
   ```
2. Navigate to the project root directory:
   ```bash
   cd JLKU-GOT-LATENT
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To launch the local Vite development server:
```bash
npm run dev
```
The application will run by default at `http://localhost:5173/`. The browser will automatically hot-reload when you save changes to your files.

---

## 🎨 Customization Guide

### 1. Logo & Imagery
*   To change the main logo, replace the image at `assets/logo_2.png` with your custom logo file.
*   To adjust the background curtain appearance, customize the `.curtain-overlay` background image or tweak the `rgba` black overlay values in `style.css`.

### 2. Customizing Contestants and Dares
The app has two modes of population:
*   **Hardcoded Fallbacks:** You can directly modify the `finalists` and `dares` arrays located in `script.js` to change the fallback contestants and dares.
*   **CSV Integration:** 
    1. Update the data in `assets/participants.csv`.
    2. To enable dynamic CSV loading, uncomment the `loadCSVData()` function call in `script.js`.
    3. Ensure the CSV headers in `script.js` (e.g. `'Form Filler Name'` or custom columns like `'Your Name'`) match your CSV structure.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
