# Andrea-Helena | Work

Complete static portfolio website, including the ZOLEO and BlueCosmo case studies, original exported image assets, image viewer, and desktop/mobile comparison controls.

## Requirements

No npm packages, API keys, backend, or build step are required. The site uses plain HTML, CSS, and JavaScript. All image assets are included locally.

## Publish with GitHub Pages

1. Sign in at https://github.com and create a new repository named `portfolio`. Choose Public if using GitHub Free. You can initialize it with a README.
2. Extract this ZIP on your computer and open the `andrea-helena-portfolio` folder.
3. In the repository, select **Add file > Upload files**. Upload the contents of that folder, including the entire `assets` folder. Do not upload the ZIP itself or put the enclosing portfolio folder inside the repository. `index.html` must be at the repository root.
4. Commit the files to `main`. If your file picker hides `.nojekyll`, create an empty file with that name using **Add file > Create new file**. It tells Pages to serve the files without Jekyll processing.
5. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Choose **main**, then **/(root)**, and click **Save**.
6. Wait for the deployment to finish. The Pages settings show the published URL, normally `https://YOUR-USERNAME.github.io/portfolio/`. Check the Actions tab if a deployment fails.

GitHub Pages publishes the website publicly. A public repository also exposes its source files and images. This export includes the case-study content and baseline analytics shown in the current portfolio. Review that content before publishing. To store the code privately without a public website, create a private repository and leave Pages disabled. Pages availability for private repositories depends on your GitHub plan; a private repository does not automatically make a Pages website private.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Alternative: upload with Git

Create an empty repository on GitHub without adding a README, license, or gitignore. Open a terminal inside the extracted portfolio folder, replace YOUR-USERNAME, and run:

```bash
git init
git branch -M main
git add .
git commit -m "Add portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Authenticate with your normal GitHub credential manager, GitHub CLI, or a personal access token when prompted. GitHub does not accept your account password for HTTPS Git operations. Then enable Pages using step 5 above.

## Preview on your computer

With Python 3 installed, open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

On Windows, `py -m http.server 8000` is an alternative. Open http://localhost:8000 in your browser. Press Ctrl+C in the terminal to stop the server. You can also use a local static-server extension in your editor.

## File guide

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio homepage and project previews |
| `zoleo.html` | ZOLEO case study |
| `bluecosmo.html` | BlueCosmo case study |
| `styles.css` | Shared styles and responsive layouts |
| `app.js` | Main page interactions |
| `viewer.js` | In-page image viewer |
| `device-switch.js` | Desktop/mobile comparison controls |
| `case-nav.js` | Case-study navigation script |
| `favicon.svg` | Browser tab icon |
| `assets/` | Complete exported image asset folder |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages |

## Make future edits

Edit the relevant HTML file for text or page content, `styles.css` for appearance, and the JavaScript files for behavior. Keep image filenames and letter case consistent with the references in HTML and JavaScript. Keep local links relative so the site works under `/portfolio/` as well as a custom domain.

Commit and push changes to `main` to update the published site. With Git:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Before publishing changes, check both case studies, image viewer open/close and zoom, desktop/mobile switches, and narrow-screen layouts. If images are missing, check their exact filenames and confirm the `assets` folder is at the root beside `index.html`.

## Export details

This is a copy of the current website files, exported September 29, 2026. Existing pages, styles, scripts, and all asset files were preserved. The original hosted site was not changed. Hosting-provider configuration, Git history, credentials, and source research documents are not included. No open-source license has been added; brand assets retain their respective owners' rights.
