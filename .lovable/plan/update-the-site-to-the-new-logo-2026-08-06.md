# Update the site to the new logo

In plain terms: the new logo you uploaded becomes the single source image for every place the old logo shows up: the navbar mark, the footer mark, the browser tab icon (favicon), the iPhone home-screen icon, and the small logo Google reads from article pages. Nothing about layout, wording, or navigation changes.

## What gets replaced

1. **In-app logo** (navbar and footer, via the shared `Logo` component)
   - Replace `src/assets/proHIRE_Logo_circle_full.png` with the new file. No code changes needed since every usage points at that one import.

2. **Favicons and app icons in `public/`** (regenerated from the new logo, same filenames so `index.html` stays untouched)
   - `favicon.ico` (multi-size: 16, 32, 48)
   - `favicon-48x48.png`
   - `favicon-96x96.png`
   - `prohire-google-favicon-192x192.png`
   - `apple-touch-icon.png` (180x180)

3. **Structured-data logo** used in article JSON-LD
   - `public/prohire-favicon.png` and `public/prohire-logo-512.png` regenerated from the new logo.

## Sizing approach

Full circular logo for 96x96, 192x192, 180x180, 512, and the in-app mark. For 48x48 and the small ICO frames, use a tight crop of the moon and silhouette (no text), matching what was done previously so the tab icon stays legible.

## Not touched

- `index.html` head tags (filenames unchanged)
- The older versioned duplicates in `public/` (`*-v4`, `*-v5`, `*-v6`) since nothing references them
- Any copy, layout, or routing

## Verification

Generate the new files, confirm dimensions and ICO frame counts, and show you a preview sheet of all icons plus a screenshot of the navbar and footer before you publish.
