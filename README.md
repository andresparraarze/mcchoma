# My React Portfolio

A personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS** to showcase projects, skills, and contact information.

**Live site:** <https://andresparraarze.github.io/mcchoma/>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization Tips](#customization-tips)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

---

## Overview

This portfolio highlights:

- A landing/home section
- About section
- Skills section
- Projects showcase
- Contact section

It is configured for static hosting on GitHub Pages.

---

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS
- **Icons:** react-icons
- **Build tooling:** react-scripts (Create React App)
- **Deployment:** gh-pages

---

## Getting Started

### Prerequisites

- **Node.js:** 18.x LTS (recommended)
- **npm:** 9+

> You can usually verify versions with `node -v` and `npm -v`.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/andresparraarze/mcchoma.git
   cd mcchoma
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open <http://localhost:3000> in your browser.

---

## Available Scripts

In the project directory, you can run:

- `npm start` — Runs the app in development mode.
- `npm run build` — Creates an optimized production build in the `build/` folder.
- `npm test` — Launches the test runner in interactive watch mode.
- `npm run deploy` — Builds and deploys the app to GitHub Pages.

---

## Deployment

This project uses `gh-pages` and the `homepage` field in `package.json`:

- `predeploy` runs `npm run build`
- `deploy` publishes `build/` to the `gh-pages` branch

To deploy:

```bash
npm run deploy
```

---

## Project Structure

```text
mcchoma/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.tsx
│   └── index.tsx
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Customization Tips

- Update section content in `src/components/*`.
- Replace project/skill images in `src/assets/`.
- Adjust styles in:
  - `src/index.css`
  - `src/App.css`
  - Tailwind config files

---

## Troubleshooting

- If `npm start` fails, delete `node_modules` and `package-lock.json`, then run `npm install` again.
- If deployment assets 404 on GitHub Pages, verify the `homepage` URL in `package.json` matches your repository URL.

---

## Contact

- **GitHub:** <https://github.com/andresparraarze>
- Portfolio contact details are available in the site's Contact section.
