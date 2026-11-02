# Christian A. Pidlaoan: Portfolio

My personal portfolio site. One page, built with HTML, Tailwind CSS and plain JavaScript. No framework and no backend.

## Run it

Open `index.html` in a browser. The compiled CSS is already in `dist/styles.css`, so nothing needs to be installed.

If you change the styles (Tailwind classes in `index.html` or files in `src/styles/`), rebuild the CSS:

```
npm install
npm run build
```

`npm run dev` rebuilds on every save.

## Project layout

```
index.html          page content
dist/styles.css     compiled CSS (generated, don't edit by hand)
src/styles/         theme.css, base.css, components.css, animations.css
src/js/             one small script per feature
assets/             fonts, images, resume
```

| Script | What it does |
|---|---|
| `page.js` | footer year, closes dialogs |
| `menu.js` | mobile menu |
| `reveal.js` | fade-in on scroll |
| `skills.js` | clickable skill bars in the hero |
| `copy.js` | copy-email button |
| `slider.js` | screenshot slider on the project cards, click to enlarge |
| `projects.js` | project details dialog and the project data |
| `form.js` | contact form checks |

## Before publishing

- The skill percentages and notes in the hero panel (`index.html`) are example values; set your own.
- The contact form only shows a success dialog. To receive messages, connect it to a form service such as Formspree in `src/js/form.js`.
- Project info and links live in `src/js/projects.js`; screenshots are in `assets/images/projects/`.

## Hosting

It's a static site, so GitHub Pages works: push the repo, then Settings, Pages, deploy from the `main` branch root.

## Credits

Fonts: Source Serif 4 and JetBrains Mono (SIL Open Font License) and Hanken Grotesk, self-hosted; licences are in `assets/fonts/`.
