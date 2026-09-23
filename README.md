TECHZYN Systems — Website

React + Tailwind CSS landing page for TECHZYN Systems, built to match the brand doc (colors, fonts, tagline).

Run it locally
npm install
npm run dev

Then open the URL it prints (usually http://localhost:5173).

Build for production
npm run build

This creates a dist/ folder — upload that folder's contents to any static host (Vercel, Netlify, cPanel, GitHub Pages, etc.) to go live on techzyn.com.

Structure
src/components/ — Navbar, Hero, About, Services, Values, Contact, Footer
src/index.css — Tailwind + base styles
tailwind.config.js — brand colors (brand.blue, brand.cyan, brand.purple, brand.navy, brand.light) and fonts (Poppins for headings, Inter for body)
Editing content

Text and services live directly inside each component file in src/components/ — edit them there, no separate content file.s