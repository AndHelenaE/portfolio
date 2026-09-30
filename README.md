# Andrea-Helena | Work

Portfolio featuring ZOLEO and BlueCosmo case studies.

Live website: https://andhelenae.github.io/portfolio/

## Requirements

Plain HTML, CSS, and JavaScript. No npm packages, API keys, backend, or build step. Image assets are local in `assets/`.

## Current content

- About and AI experience, including Tools I use most.
- Both case studies use the same five-part structure: challenge and role, research and decisions, design system contribution, design evolution, and outcomes.
- Design system contributions are distinguished from ownership of the full systems.
- Compact expandable design specifications and in-page image previews.
- ZOLEO typography, buttons, and full colour palette, including darker greens.
- BlueCosmo typography, colours, and buttons, with wireframes before final designs.
- Existing research, baseline analytics, page comparisons, and mobile controls retained.

## Updating this existing repository

1. Extract the latest update ZIP.
2. In the repository root, use Add file > Upload files to upload all files from this code-only ZIP. Commit the replacements to main.
3. Keep the existing assets folder unchanged. This code-only ZIP contains no images.
4. The six design system images from the previous update must already be in assets.
5. GitHub Pages rebuilds automatically from main and /(root). You do not need to create another repository or change Pages settings.

The repository is public, as is its GitHub Pages website.

## Local preview

From a complete local copy of the repository, run:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. On Windows, `py -m http.server 8000` is an alternative.

## File guide

| File | Purpose |
| --- | --- |
| index.html | Homepage, About, and AI experience |
| zoleo.html | ZOLEO case study |
| bluecosmo.html | BlueCosmo case study |
| styles.css | Shared and responsive styling |
| app.js | Homepage interactions |
| viewer.js | In-page image viewer |
| device-switch.js | Desktop/mobile controls |
| case-nav.js | Case-study navigation script |
| favicon.svg | Browser icon |
| assets/ | Local images |
| .nojekyll | Serve static files without Jekyll processing |

## Future changes

Edit the relevant HTML, CSS, or JavaScript files, then commit to main. Use relative asset paths and preserve filename case. After deployment, check the homepage, both case studies, expandable specifications, image viewer, and mobile layouts.

For an existing local Git checkout:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The original ChatGPT-hosted portfolio and GitHub Pages are separate deployments. Updates to one do not automatically update the other.

## Attribution

No open-source license has been added. Brand assets retain their respective owners' rights. Shared design system examples illustrate the foundations behind Andrea-Helena's website work; individual contributions are described in each case study.
