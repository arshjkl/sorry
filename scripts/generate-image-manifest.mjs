import { readdir, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const folders = ['her', 'me', 'us', 'memories', 'special'];
const extensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);
const images = [];
const personalCaptions = {
  '01-that-smile.jpg': 'That smile could fix my entire day. ❤️',
  '02-those-eyes.jpg': 'I could get lost in those eyes. ✨',
  '03-my-favourite-view.jpg': 'My favourite view, every single time. 🌷',
  '04-a-day-to-remember.jpg': 'A little moment I want to keep forever. 🎞️',
  '05-a-soft-moment.jpg': 'Even the quiet moments feel special. 🤍',
  '06-my-favourite-face.jpg': 'The face I never get tired of seeing. 💗',
  '01-a-little-piece-of-me.jpg': 'A little piece of me, saved in your world. 🖤',
  '02-me-thinking-of-you.jpg': 'Probably thinking about you. ❤️',
  '01-instead-of-texting.jpg': 'One day, less texting and more moments like this. 🥺',
};


for (const folder of folders) {
  const directory = path.join(root, 'public', 'images', folder);
  await mkdir(directory, { recursive: true });
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !extensions.has(path.extname(entry.name).toLowerCase())) continue;
    const filename = entry.name;
    const caption = personalCaptions[filename] ?? path.basename(filename, path.extname(filename)).replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
    images.push({
      id: `${folder}/${filename}`,
      src: `/images/${folder}/${encodeURIComponent(filename)}`,
      caption,
      category: folder,
    });
  }
}

const output = `// Generated automatically by scripts/generate-image-manifest.mjs. Do not edit by hand.\n` +
  `export interface MemoryPhoto { id: string; src: string; caption: string; category: string; }\n` +
  `export const memoryImages: MemoryPhoto[] = ${JSON.stringify(images, null, 2)};\n`;

const generatedDir = path.join(root, 'src', 'generated');
await mkdir(generatedDir, { recursive: true });
await writeFile(path.join(generatedDir, 'imageManifest.ts'), output, 'utf8');
console.log(`Image manifest generated: ${images.length} image(s) found.`);
