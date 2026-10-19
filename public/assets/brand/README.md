# Counter brand assets

The mark is a stack of three planes. The top plane is solid with an open counter cut into it. The wordmark is “counter” in Inter Tight Medium (500), tracked −0.02em, with its outlines converted to paths so it renders without the font.

Colours: ink `#1e1b19`, paper `#f7f6f3`.

## Which file to use

| Need | File |
| --- | --- |
| Logo on a light background | `svg/counter-logo-ink.svg` · `png/counter-logo-ink-{64,128,256}h.png` |
| Logo on a dark background | `svg/counter-logo-white.svg` · `png/counter-logo-white-{64,128,256}h.png` |
| Mark only | `svg/counter-mark-{ink,white,black}.svg` · `png/counter-mark-{ink,white}-{32…1024}.png` |
| GitHub org / X / LinkedIn profile picture | `png/counter-avatar-dark-1024.png` (or `-light`). Square with padding, so it survives a circular crop. |
| App icon / rounded tile | `png/counter-app-icon-{dark,light}-{512,1024}.png` |
| GitHub repository social preview | `social/github-social-preview.png` (1280×640, set under the repository's Settings → Social preview) |
| Link previews (Open Graph / X card) | `social/og-image.png` (1200×630). The site serves a copy at `/assets/og-image.png`. |
| X header | `social/x-header.png` (1500×500). Content is centred because the avatar overlaps bottom-left. |
| LinkedIn company cover | `social/linkedin-banner.png` (2256×382, i.e. LinkedIn’s 1128×191 at 2×). Content is right of centre because the page logo overlaps the bottom-left. |

Each social image also has a `-dark` variant. The social images use the home page hero copy. After changing it, update `HEADLINE` and `SUBHEAD` in `scripts/social-images.mjs` and run `node scripts/social-images.mjs`. The script regenerates every social image and the `/assets/og-image.png` copy. The LinkedIn illustration comes from `scripts/social/`.

## Site icons

These live at the site root: `favicon.ico` (16/32/48), `favicon.svg` (switches to paper on dark browser themes), `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png` and `site.webmanifest`.

## Usage

- Keep clear space around the logo equal to at least the height of the top plane.
- Don't recolour, rotate, outline or add effects to the mark.
- Below 24px, use the mark on its own rather than the full logo.
