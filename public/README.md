# Public Assets

This directory contains static assets that will be copied to the root of the build output.

## Required Files

- `favicon.ico` - Main favicon (16x16 or 32x32)
- `favicon-16x16.png` - 16x16 PNG favicon
- `favicon-32x32.png` - 32x32 PNG favicon
- `apple-touch-icon.png` - 180x180 Apple touch icon
- `icons/icon-192.png` - 192x192 PWA icon
- `icons/icon-512.png` - 512x512 PWA icon

## Optional Files

- `manifest.webmanifest` - PWA manifest (already created)
- `service-worker.js` - Service worker for offline support (already created)
- `robots.txt` - SEO robots file (already created)
- `sitemap.xml` - SEO sitemap (to be generated)

## Favicons

Favicons and PWA icons are provided by the `favicon_io/` folder at the project root.
To update them: copy files from `favicon_io/` to `public/` and `public/icons/`.

Alternative sources:
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/
- https://www.pwabuilder.com/imageGenerator



