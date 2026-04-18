# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TravelGuide AI is an interactive web application for browsing city travel guides worldwide. Built with React 19 + Vite, featuring a searchable city directory, detailed city guide pages, and an AI-powered travel chat assistant.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (Vite, default port 5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build
```

**Prerequisites:** Node.js (v18+) and npm must be installed.

## Architecture

**Routing** uses `react-router-dom` v7 with `HashRouter` (for static hosting compatibility). Routes are defined in `src/main.jsx`:
- `/` — Home page with search and city grid
- `/city/:cityId` — Individual city guide page

**Key data flow:**
- `src/data/cities.js` — All city data (static array of objects). Each city has: id, name, country, continent, description, highlights, tips, foods, neighborhoods, and image URL. **To add a new city, add an object to this array.**
- `ChatAssistant` component currently uses client-side response generation (no AI API). To connect a real AI service, replace the `generateResponse` function in `src/components/ChatAssistant.jsx`.

**Component structure:**
- `App.jsx` — Layout shell (Navbar + Outlet + Footer)
- `components/Navbar.jsx` — Sticky nav with logo
- `components/CityCard.jsx` — City thumbnail card with overlay
- `components/SearchBar.jsx` — Search input with clear button
- `components/ChatAssistant.jsx` — Floating chat widget with quick-question buttons
- `pages/Home.jsx` — City grid with search and continent filters
- `pages/CityGuide.jsx` — Full city detail page with all sections

**Styling:** Single CSS file at `src/styles/main.css` using CSS custom properties (see `:root`). Design is mobile-first with breakpoints at 768px and 1024px.

## City Data Schema

Each city object in `src/data/cities.js` follows this shape:
```
{ id, name, country, continent, emoji, tagline, image, description,
  highlights[], bestTime, currency, language, tips[], foods[],
  neighborhoods: [{ name, vibe }] }
```
