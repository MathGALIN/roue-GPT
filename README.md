# Roue GPT

> Discover hidden cinematic gems you've never heard of.

**Roue GPT** is an interactive film discovery wheel that surfaces 100 cult, underground, and critically-acclaimed films overlooked by mainstream audiences. Spin the wheel, land on a genre, and uncover a hidden masterpiece from world cinema.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)

---

## Features

- **Interactive Spinning Wheel** — Canvas-rendered wheel with 16 genre segments, smooth easing animations, and pointer tick feedback
- **100 Curated Films** — Hand-picked hidden gems spanning all continents, eras (1920s–2025), and formats (live-action, anime, animation)
- **Premium UI/UX** — Glassmorphism design, floating particle system, confetti celebrations, and fluid responsive layout
- **Zero Dependencies** — Built entirely with vanilla HTML5, CSS3, and ES6+ JavaScript
- **Retina-Ready** — Canvas rendering adapts to high-DPI displays

## How It Works

1. Click **"TOURNER LA ROUE"** to spin the wheel
2. The wheel decelerates over 5–7 seconds with realistic easing
3. A film card appears with full details: title, director, year, country, IMDb rating, synopsis, and genre tags
4. Choose **"Autre film"** to discover another film in the same genre, or **"J'ai trouvé !"** to confirm your pick

## Film Collection

The curated database deliberately excludes mainstream blockbusters and focuses on:

- Films from **30+ countries** across all continents
- Underground cinema, festival darlings, and auteur works
- Forgotten classics and regional masterpieces
- Minimum **6.5/10 IMDb** rating
- Balanced mix of live-action (~50), anime (~25), and animation (~25)

### Genre Wheel

| Genre | Genre | Genre | Genre |
|-------|-------|-------|-------|
| Sci-Fi | Drama | Thriller | Horror |
| Anime | Animation | Comedy | Action |
| Crime | Romance | Fantasy | War |
| Western | Musical | Adventure | Historical |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5, Canvas API |
| Styling | CSS3 (Variables, Keyframes, Glassmorphism, Flexbox/Grid) |
| Logic | Vanilla JavaScript ES6+ (Classes, async/await, Canvas 2D) |
| Fonts | Google Fonts — Space Grotesk, Inter |
| Dependencies | **None** |

## Project Structure

```
roue-gpt/
├── index.html          # Main entry point
├── css/
│   └── style.css       # Styling, animations, responsive design
├── js/
│   └── app.js          # Core logic (wheel, particles, confetti, film data)
├── data/
│   └── films.json      # Film database schema
└── IA/
    └── generate-films.md   # AI prompt for curating the film collection
```

## Visual Design

- **Background** — Animated floating orbs (gold, purple, cyan) with a particle network
- **Wheel** — Radial gradients per segment, golden center ring, tick marks, idle rocking animation
- **Film Cards** — Glassmorphism modal with blur backdrop, genre-colored tags, star-animated IMDb rating
- **Confetti** — 80-piece burst with randomized shapes, colors, drift, and rotation on film reveal
- **Responsive** — Adapts from mobile (280px wheel) to desktop (460px wheel) using `clamp()` and media queries

## Getting Started

No build step, no dependencies — just open it:

```bash
git clone https://github.com/your-username/roue-gpt.git
cd roue-gpt
# Open index.html in your browser, or use any local server:
npx serve .
```

## License

MIT

---

Built with vanilla JS and a love for cinema.
