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
- **100 films sélectionnés** — Pépites triées sur le volet couvrant tous les continents, toutes les époques (1920–aujourd'hui) et tous les formats (live-action, anime, animation)
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

## Curation IA & Feedback communautaire

Le dossier `IA/` contient un système de curation intelligent qui permet de **régénérer entièrement la collection de 100 films via une IA** (Claude, GPT, etc.), tout en s'adaptant aux retours de la communauté.

### Comment ça fonctionne

```
Communauté regarde les films
        ↓
Feedback noté dans IA/feedback.md
  (genres aimés, époques préférées, pays favoris...)
        ↓
L'IA lit le feedback + le prompt IA/generate-films.md
        ↓
Génération d'une nouvelle liste de 100 films adaptée
        ↓
Écriture dans data/films.json
        ↓
La roue se renouvelle automatiquement
```

### Fichiers du système IA

| Fichier | Rôle |
|---------|------|
| `IA/generate-films.md` | Prompt complet pour l'agent IA : critères de sélection, quotas de diversité (époques, genres, pays, types), format JSON, et instructions d'adaptation au feedback |
| `IA/feedback.md` | Journal de feedback communautaire : les utilisateurs y notent les films aimés/détestés, leurs préférences de genre, d'époque et de format |
| `IA/init.txt` | Paramètres d'initialisation pour la première génération (sélection équilibrée sans biais) |

### Règles de curation

L'IA respecte des **quotas stricts** pour garantir la diversité :

- **50/50** : 50 films live-action, 50 animés (anime + animation)
- **Couverture temporelle** : de avant 1960 jusqu'à aujourd'hui
- **30+ pays** représentés sur tous les continents
- **16 genres** couverts minimum
- **Adaptation** : si la communauté adore un genre, sa proportion augmente ; si elle en déteste un, il diminue (sans jamais disparaître)

La collection n'est donc jamais figée — elle évolue avec les goûts de la communauté tout en maintenant une diversité maximale.

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
    ├── generate-films.md   # Prompt IA pour la curation de la collection
    ├── feedback.md         # Retours communautaires pour affiner la sélection
    └── init.txt            # Paramètres de première génération
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
