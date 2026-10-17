// Turns original photos into web-ready files.  Usage: npm run images
//
// Put full-size originals in /image-sources using the same folder and file
// name you want under /public/images (for example
// image-sources/destinations/munnar.jpg -> public/images/destinations/munnar.jpg).
// /image-sources is not committed to git; the optimised files are.
//
// What it does to each photo:
// - landscape photos: resized to 1920px wide; portrait: 1600px tall;
//   vehicle photos: 1000px wide
//   (never enlarged)
// - saved as a progressive JPEG with mozjpeg. next/image then serves AVIF
//   or WebP versions to browsers, so this JPEG is only the master copy.
// - quality is stepped down until the file is under the limit: 300KB for the
//   hero, 200KB for everything else. If even low quality is too big, the
//   photo is made smaller.
// - a few photos are cropped first (see CROPS below)
//
// At the end it prints each file's final size. Copy the width and height
// into content/images.ts.

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "image-sources";
const OUTPUT_DIR = path.join("public", "images");

const HERO_LIMIT = 300 * 1024;
const PHOTO_LIMIT = 200 * 1024;

// Photos that need cropping, by source path. Each source can produce
// several outputs. `region` is a fraction of the original (0 to 1).
const CROPS = {
  // Kathakali band: a wide 16:9 crop around the performer's face, because
  // the band is a wide strip.
  "home/kathakali-performer.jpg": [
    {
      output: "home/kathakali-performer.jpg",
      region: { left: 0, top: 0.22, width: 1, height: 0.371 },
    },
  ],
  // The tourist bus is small in a wide hillside photo: crop in on the bus.
  "vehicles/tourist-bus.jpg": [
    {
      output: "vehicles/tourist-bus.jpg",
      region: { left: 0.39, top: 0.15, width: 0.46, height: 0.613 },
      maxWidth: 1000,
    },
  ],
};

async function listFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(fullPath)));
    } else if (/\.(jpe?g|png|webp|tiff?)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimise(sourcePath, job) {
  let pipeline = sharp(sourcePath).rotate(); // rotate() applies camera orientation
  const { width, height } = await pipeline.metadata();

  if (job.region) {
    pipeline = pipeline.extract({
      left: Math.round(job.region.left * width),
      top: Math.round(job.region.top * height),
      width: Math.round(job.region.width * width),
      height: Math.round(job.region.height * height),
    });
  }

  const croppedWidth = job.region ? Math.round(job.region.width * width) : width;
  const croppedHeight = job.region ? Math.round(job.region.height * height) : height;
  const isPortrait = croppedHeight > croppedWidth;
  const limit = job.output.startsWith("hero/") ? HERO_LIMIT : PHOTO_LIMIT;
  const buffer = await pipeline.toBuffer();

  // Try sizes from largest to smallest, and qualities from best to worst,
  // until the file fits under the limit.
  const scales = [1, 0.9, 0.8, 0.7];
  const qualities = [82, 76, 70, 64, 58];
  for (const scale of scales) {
    const resize = job.maxWidth
      ? { width: Math.round(job.maxWidth * scale) }
      : isPortrait
        ? { height: Math.round(1600 * scale) }
        : { width: Math.round(1920 * scale) };

    for (const quality of qualities) {
      const output = await sharp(buffer)
        .resize({ ...resize, withoutEnlargement: true })
        .jpeg({ quality, mozjpeg: true, progressive: true })
        .toBuffer({ resolveWithObject: true });

      if (output.data.length <= limit) {
        const outputPath = path.join(OUTPUT_DIR, job.output);
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, output.data);
        return { file: job.output, ...output.info, kb: Math.round(output.data.length / 1024), quality };
      }
    }
  }
  throw new Error(`Could not get ${job.output} under ${limit / 1024}KB`);
}

const sources = await listFiles(SOURCE_DIR);
const results = [];
for (const sourcePath of sources) {
  const relative = path.relative(SOURCE_DIR, sourcePath).split(path.sep).join("/");
  // Vehicle photos only ever show as small cards, so 1000px wide is plenty.
  const defaultJob = relative.startsWith("vehicles/")
    ? { output: relative.replace(/\.\w+$/, ".jpg"), maxWidth: 1000 }
    : { output: relative.replace(/\.\w+$/, ".jpg") };
  const jobs = CROPS[relative] ?? [defaultJob];
  for (const job of jobs) {
    results.push(await optimise(sourcePath, job));
  }
}

console.table(results.map((r) => ({ file: r.file, width: r.width, height: r.height, KB: r.kb, quality: r.quality })));
