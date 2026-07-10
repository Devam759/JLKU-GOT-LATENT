# JKLU's Got Latent

An interactive, cinematic web application inspired by the aesthetic of Samay Raina's "India's Got Latent". It features a randomized contestant selection system and a dare generator, complete with smooth, GPU-accelerated animations and an ambient stage lighting background.

## Features

- 🎭 **Cinematic Aesthetic**: Deep black background with animated, breathing red and blue stage lights.
- 🎲 **Contestant Roulette**: A "Judge Your Fate" button that spins through names before smoothly revealing the selected contestant.
- ⚡ **Dare Reveal**: A slick, multi-step animation sequence that scales the contestant name and fades in a personalized dare.
- 🧠 **Smart Memory**: Uses browser Session Storage to remember picked contestants and guarantee no repeats during a session. Auto-resets if everyone is picked.
- 🔄 **Quick Reset**: Built-in hotkey support—press `R` to instantly wipe the memory and perfectly reset the game UI back to its initial state.
- 🚀 **High Performance**: Built with Vanilla HTML/CSS/JS and the Web Animations API, ensuring 60fps animations with zero layout thrashing.
- 📊 **CSV Integration**: Dynamically loads names and personalized dares from CSV data, with hardcoded fallbacks if data isn't present.

## Tech Stack

- HTML5
- CSS3 (Vanilla, Modern Flexbox/Grid, Animations)
- JavaScript (ES6+, Web Animations API)
- Vite (Development Server & Bundler)

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (if you haven't already):
   ```bash
   git clone https://github.com/amritagrawal12598-stack/JLKU-GOT-LATENT.git
   ```
2. Navigate to the project directory:
   ```bash
   cd JLKU-GOT-LATENT
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the Vite development server, run:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`. The page will automatically reload whenever you make changes to the files.

## Project Structure

- `index.html`: The main entry point and structural layout.
- `style.css`: Contains all the styling, including the cinematic background and CSS-based hover effects.
- `script.js`: Handles the application logic, CSV parsing, and complex GPU-composited animations.
- `assets/`: Contains images (like the logo) and audio files for sound effects.

## Customizing

- **Logo**: Replace `assets/logo_2.png` with your own logo.
- **Names & Dares**: Update the CSV loading logic in `script.js` or modify the hardcoded `finalists` and `dares` arrays to customize the participants.
- **Lighting**: The ambient background lighting is controlled via `style.css` in the `body::before` and `body::after` pseudo-elements. You can change the colors, blur radius, and animation speeds there.
