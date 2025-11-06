# Erel Ozen - Personal Portfolio

A terminal-themed personal portfolio website inspired by the aesthetic of ameya.info.

## How to Use

### 1. Add Your Files

Place the following files in the **exact same folder** as `index.html`:

- **Resume**: `Erel_Ozen_Resume_2026.pdf` (must be named exactly this)
- **Profile Picture**: `profile.jpg` (must be named exactly this)

### 2. Push to GitHub

Commit and push all files to your `eozen1.github.io` repository:

```bash
git add index.html style.css README.md Erel_Ozen_Resume_2026.pdf profile.jpg
git commit -m "Add terminal-themed portfolio"
git push origin main
```

### 3. Configure GitHub Pages

1. Go to your repository: https://github.com/eozen1/eozen1.github.io
2. Click **Settings**
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

Your site will be live at `https://eozen1.github.io` within a few minutes!

## File Structure

```
eozen1.github.io/
├── index.html                    # Main HTML file
├── style.css                     # Stylesheet
├── README.md                     # This file
├── Erel_Ozen_Resume_2026.pdf     # Your resume (add this)
└── profile.jpg                   # Your profile picture (add this)
```

## Notes

- The site uses a dark terminal aesthetic with monospace fonts
- All section headings are styled as shell commands
- The profile picture floats to the right on desktop, centered on mobile
- Smooth scrolling is enabled for navigation links
- The site is fully responsive
