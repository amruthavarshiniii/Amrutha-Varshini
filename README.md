# Portfolio (Vite + React)

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
npm run preview
```

## Deployment notes (React Router)

This project uses `react-router-dom`, so static hosts must redirect all routes to `index.html`.

- **Netlify**: `public/_redirects` is included.
- **Vercel**: `vercel.json` is included.
