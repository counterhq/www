# Counter website

The public source repository for Counter’s marketing website.

## Preview locally

The site is static HTML: `index.html` (home), `platform/index.html` and a placeholder `blog/index.html`, sharing `styles.css`. No build step or package installation is needed.

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open <http://127.0.0.1:8080>. The page loads Inter Tight and DM Mono from Google Fonts.

## Status

The waitlist form is not connected to a backend. Its empty `data-endpoint` makes submissions display “The waitlist isn’t open yet”; no signup is collected.

This repository contains the website source only. Hosting and domain configuration are not set up here. No license has been selected.
