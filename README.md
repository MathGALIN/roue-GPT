# Roue GPT

> Découvre des pépites cinématographiques que tu n'as jamais vues.

**Roue GPT** est une roue interactive de découverte de films cultes, underground et acclamés par la critique, mais ignorés du grand public. Tourne la roue, tombe sur un genre, et découvre un chef-d'oeuvre caché du cinéma mondial.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dépendances-Aucune-brightgreen)

---

## Fonctionnalités

- **Roue interactive** — Roue rendue en Canvas avec 16 segments de genres, animations fluides et retour sonore du pointeur
- **100 films sélectionnés** — Pépites triées sur le volet couvrant tous les continents, toutes les époques (1920–2025) et tous les formats (live-action, anime, animation)
- **UI/UX premium** — Design glassmorphism, système de particules flottantes, confettis, et mise en page responsive
- **Zéro dépendance** — Construit entièrement en HTML5, CSS3 et JavaScript ES6+ vanilla
- **Retina-ready** — Le rendu Canvas s'adapte aux écrans haute résolution

## Comment ça marche

1. Clique sur **"TOURNER LA ROUE"** pour lancer la roue
2. La roue décélère sur 5 à 7 secondes avec un easing réaliste
3. Une carte film apparaît avec tous les détails : titre, réalisateur, année, pays, note IMDb, synopsis et tags de genre
4. Choisis **"Autre film"** pour découvrir un autre film du même genre, ou **"J'ai trouvé !"** pour valider ton choix

## Collection de films

La base de données exclut volontairement les blockbusters mainstream et se concentre sur :

- Des films de **30+ pays** sur tous les continents
- Du cinéma underground, des sélections de festivals et des oeuvres d'auteur
- Des classiques oubliés et des chefs-d'oeuvre régionaux
- Note IMDb minimum de **6.5/10**
- Un mix équilibré de live-action (~50), anime (~25) et animation (~25)

### Genres de la roue

| Genre | Genre | Genre | Genre |
|-------|-------|-------|-------|
| Sci-Fi | Drame | Thriller | Horreur |
| Anime | Animation | Comédie | Action |
| Policier | Romance | Fantaisie | Guerre |
| Western | Musical | Aventure | Historique |

## Stack technique

| Couche | Technologie |
|--------|------------|
| Structure | HTML5, Canvas API |
| Style | CSS3 (Variables, Keyframes, Glassmorphism, Flexbox/Grid) |
| Logique | JavaScript ES6+ vanilla (Classes, async/await, Canvas 2D) |
| Polices | Google Fonts — Space Grotesk, Inter |
| Dépendances | **Aucune** |

## Structure du projet

```
roue-gpt/
├── index.html          # Point d'entrée principal
├── css/
│   └── style.css       # Styles, animations, responsive design
├── js/
│   └── app.js          # Logique principale (roue, particules, confettis, données films)
├── data/
│   └── films.json      # Schéma de la base de films
└── IA/
    └── generate-films.md   # Prompt IA pour la curation de la collection
```

## Design visuel

- **Arrière-plan** — Orbes flottants animés (or, violet, cyan) avec un réseau de particules
- **Roue** — Dégradés radiaux par segment, anneau central doré, graduations, animation de balancement au repos
- **Cartes film** — Modal glassmorphism avec flou en arrière-plan, tags colorés par genre, note IMDb animée
- **Confettis** — Explosion de 80 pièces avec formes, couleurs, dérive et rotation aléatoires à chaque révélation
- **Responsive** — S'adapte du mobile (roue 280px) au desktop (roue 460px) via `clamp()` et media queries

## Lancer le projet

Pas de build, pas de dépendances — il suffit d'ouvrir :

```bash
git clone https://github.com/MathGALIN/roue-GPT.git
cd roue-GPT
# Ouvre index.html dans ton navigateur, ou utilise un serveur local :
npx serve .
```

## Licence

MIT

---

Construit en vanilla JS et avec un amour pour le cinéma.
