# My Little World, Baby ❤️

A personalised, mobile-friendly love website built with React, Vite, TypeScript and Tailwind CSS.

## Personal photos

The Memories gallery includes the nine supplied photos, organised into **Her**, **Me**, and **Little Moments**. The captions are defined in `scripts/generate-image-manifest.mjs`; the gallery manifest is regenerated automatically before development and production builds.

To add more photos, place `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, or `.avif` files in one of these folders:

- `public/images/her/`
- `public/images/me/`
- `public/images/us/`
- `public/images/memories/`
- `public/images/special/`

Then run `npm run generate:images`. For custom captions, add the exact filename and caption to `personalCaptions` in `scripts/generate-image-manifest.mjs`.

## Video

The first **Open My Heart 💌** button opens the dedicated video screen. The original video's embedded audio plays with the video; there is no separate hidden audio track. If a mobile browser blocks playback, tap the visible play button. Put the video at `public/media/videos/our-special-video.mp4` (or update `src/data/loveContent.ts`).

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Set the framework preset to **Vite**.
5. Use these build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
   - Root directory: `./` (the folder containing `package.json`)
6. Click **Deploy**. Vercel will install dependencies, generate the image manifest, build the site and publish `dist`.
7. After deployment, open the generated `*.vercel.app` URL on your phone and test the gallery and video.

For later updates, push commits to the connected GitHub branch; Vercel will automatically create a new deployment. If the project uses a different branch, select it under **Project → Settings → Git**.

## Build

```bash
npm run build
```
