# Mecvitech React Website

## Quick Summary

- **Project name:** Mecvitech (React)
- **Goal:** Provide a componentized React app with client-side routing and the original site's look-and-feel.

## Project Structure

```
Mecvitech/
├── public/                # Static assets (css, js libs, images, index.html)
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, Staff, etc.)
│   ├── pages/            # Route pages (Home, Services, Projects, About, etc.)
│   ├── App.js            # Router and app layout
│   └── index.js          # React entrypoint
└── package.json          # Project config and scripts
```

## Routes

- `/` — Home
- `/services` — Services
- `/projects` — Projects
- `/about` — About (includes team/staff)
- `/testimonials` — Testimonials
- `/blog` — Blog
- `/contact` — Contact

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

Open http://localhost:3000 in your browser.

3. Build for production:

```bash
npm run build
```

## Scripts

- `npm start` — Run development server
- `npm run build` — Create production build
- `npm test` — Run tests (if any)

## Dependencies

- react
- react-dom
- react-router-dom
- react-scripts

## Notes & Tips

- All page sections are componentized under `src/pages` and `src/components`.
- Static CSS, JS libraries, and images remain in `public/` to preserve original behaviors.
- Components use `.js` file extension.

If you'd like, I can also:

- add a contributing guide and code style rules
- add a short CI workflow for tests/builds
- commit these README changes for you

Updated file: [README.md](README.md)
