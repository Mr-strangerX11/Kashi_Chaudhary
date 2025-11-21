# My Portfolio

This is a lightweight static portfolio site for Kashi Chaudhary.

## Project Overview
- Single-page portfolio built with plain HTML/CSS and inline SVGs for icons.
- Backgrounds and assets are stored in the `assest/` folder (note: folder name is `assest`, not `assets`).

## Quick Start (macOS)
Prerequisites: Python 3 installed.

1. Open a terminal in the project folder:

```bash
cd "/Users/macbook/Desktop/Project/untitled folder"
```

2. Start a local server:

```bash
python3 -m http.server 8000
```

3. Open the site in your browser:

```
http://localhost:8000
```

4. Stop the server: find the PID and kill it (if started in background), or press `Ctrl+C` if running foreground.

```bash
lsof -iTCP:8000 -sTCP:LISTEN -P -n
kill <PID>
```

## File Structure
- `index.html` — main page
- `assest/` — images and assets (Back.jpg, footer.jpg, logo.png, Astra.png, avator.png, etc.)
- `server.log` — server log created when launching with `nohup`

## Notes & Suggestions
- The assets folder is named `assest/`. Consider renaming it to `assets/` for consistency with conventions. If you rename it, update all references in `index.html`.
- To improve performance: convert large JPEG/PNG images to WebP and add `srcset` for responsive sizes.
- To improve SEO and sharing: add `meta description`, Open Graph and Twitter Card meta tags in the `<head>`.
- Accessibility: add a visible "skip to content" link, ensure focus outlines, and test with Lighthouse accessibility audits.
- Contact form: configure your EmailJS credentials (or add a server endpoint) instead of the current client placeholder.

## Quick Commands
- Run Lighthouse (install Node + Lighthouse):

```bash
npm install -g lighthouse
lighthouse http://localhost:8000 --view
```

- Convert images to WebP (macOS Homebrew + libwebp):

```bash
brew install webp
cwebp assest/Back.jpg -q 80 -o assest/Back.webp
```

## Next Steps I can help with
- Run a Lighthouse audit and give prioritized fixes.
- Convert and add optimized images with `srcset`.
- Rename `assest/` → `assets/` and update paths safely.
- Add Open Graph meta tags, favicon, and webmanifest.
- Improve accessibility (skip link, focus styles, semantic tags).

If you want, I can start one of these now — tell me which item to begin with.