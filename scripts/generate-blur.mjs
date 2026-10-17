// Runs automatically before `npm run dev` and `npm run build`.
//
// For every photo listed in content/images.ts it:
// 1. makes a tiny blurred version with plaiceholder and saves it to
//    content/blur-data.json (shown while the real photo loads)
// 2. checks the file exists, that its size in pixels matches images.ts, and
//    that it is under the weight limit (300KB for the hero, 200KB otherwise)
//
// With --strict (used by `npm run build`) any problem stops the build, so an
// oversized or mismatched photo can never reach the live site.

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { getPlaiceholder } from "plaiceholder";
import { images } from "../content/images.ts";

const HERO_LIMIT = 300 * 1024;
const PHOTO_LIMIT = 200 * 1024;
const strict = process.argv.includes("--strict");

const blurBySrc = {};
const problems = [];

for (const [key, image] of Object.entries(images)) {
  const filePath = path.join("public", image.src);

  let buffer;
  try {
    buffer = await fs.readFile(filePath);
  } catch {
    problems.push(`${key}: file not found at ${filePath}`);
    continue;
  }

  const { width, height } = await sharp(buffer).metadata();
  if (width !== image.width || height !== image.height) {
    problems.push(`${key}: images.ts says ${image.width}x${image.height} but the file is ${width}x${height}`);
  }

  const limit = image.src.startsWith("/images/hero/") ? HERO_LIMIT : PHOTO_LIMIT;
  if (buffer.length > limit) {
    problems.push(`${key}: ${Math.round(buffer.length / 1024)}KB is over the ${limit / 1024}KB limit`);
  }

  // size: 8 means an 8px-wide blurred image, a few hundred bytes of base64.
  const { base64 } = await getPlaiceholder(buffer, { size: 8 });
  blurBySrc[image.src] = base64;
}

await fs.writeFile("content/blur-data.json", `${JSON.stringify(blurBySrc, null, 2)}\n`);
console.log(`Blur placeholders written for ${Object.keys(blurBySrc).length} photos.`);

if (problems.length > 0) {
  console.error(`\nImage problems:\n- ${problems.join("\n- ")}\n`);
  if (strict) {
    process.exit(1);
  }
}
