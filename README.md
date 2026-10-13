# Lianzijun Wang Portfolio

A responsive React + Vite portfolio for Lianzijun (Lian) Wang, designed for GitHub Pages at the root domain `username.github.io`.

The site is intentionally content-first: research imagery, music, underwater photography, and CV details are all editable in one central data file. Sample media is clearly marked as replaceable so the site does not imply awards, publications, photos, or recordings that have not been supplied yet.

## Quick Start

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## Edit Text

Most text lives in:

```text
src/data.js
```

Update the exported objects there:

- `profile` controls name, title, email, biography, links, and CV path.
- `hero` controls the home hero.
- `homeAbout` controls the homepage About Me section, including Chinese name, hometown, and short education notes.
- `science.publishedWorks` controls the published-paper timeline, including title, authors, summary, figure snapshot, journal/preprint-site link, and PDF download link.
- `science.ongoingWork` controls the ongoing-project cards.
- `music` controls pipa images and YouTube video placeholders.
- `exploration` controls underwater gallery and trip notes.
- `credentials` controls the About/CV credential list.

## Replace Images

Put real images in:

```text
public/media/
```

Then update the matching `src`, `image`, and `alt` fields in `src/data.js`.

Recommended image formats:

- `.jpg` or `.webp` for photography
- `.png` or `.webp` for microscopy screenshots
- Keep large images around 1600-2400 px wide for good quality without slow loading

Every image should have useful alt text. If an image is decorative, keep the alt text short. If it communicates scientific content, describe the image and use the caption for details.

Published-work figure snapshots currently live beside the paper PDFs:

```text
public/publications/
```

Each published work in `src/data.js` has:

- `figure.src` for the main figure or abstract illustration snapshot
- `journalLabel` and `journalUrl` for the journal or preprint website button
- `pdfUrl` for the downloadable local PDF

To add a new paper, copy one object inside `science.publishedWorks`, give it a unique `id`, and point its figure/PDF paths to files in `public/publications/`.

## Add YouTube Videos

In `src/data.js`, find `music.videos` and replace the empty `youtubeId` value:

```js
youtubeId: 'YOUR_VIDEO_ID'
```

For a YouTube URL like:

```text
https://www.youtube.com/watch?v=abc123
```

the ID is:

```text
abc123
```

The site uses `youtube-nocookie.com` embeds.

## Replace the CV

Put the real PDF here:

```text
public/files/lian-wang-cv.pdf
```

Then update `profile.cvPath` in `src/data.js`:

```js
cvPath: '/files/lian-wang-cv.pdf'
```

## GitHub Pages Setup

This repository includes:

```text
.github/workflows/deploy.yml
```

The workflow builds the Vite app and deploys `dist/` with GitHub Pages when changes are pushed to `main`.

For a root GitHub Pages site:

1. Create a repository named exactly `username.github.io`, replacing `username` with the GitHub username.
2. Push this project to the `main` branch.
3. In GitHub, open repository settings.
4. Go to Pages.
5. Set the source to GitHub Actions.
6. Push a change to `main` or run the workflow manually.

The site is configured with `base: '/'` in `vite.config.js`, which is correct for `username.github.io`.

## Accessibility and Motion

The site includes:

- Keyboard-accessible navigation and lightbox controls
- A skip link
- Alt text fields for all images
- Responsive layouts for mobile and desktop
- `prefers-reduced-motion` support
- Lazy loading for gallery images and videos

## No Backend

This is a static site. It uses no backend, database, paid service, or runtime server.
