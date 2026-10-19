// Makes every site icon from the logo emblem, so Google, browsers and phones
// all show the same gold disc.
//
//   node scripts/generate-icons.mjs
//
// Run it again only if public/logo/choice-tours-travels-emblem.svg changes.
//
// What it writes, and who uses it:
// - app/favicon.ico (16, 32, 48 px): browser tabs, and the first file
//   Google's favicon crawler asks for
// - app/icon1.png (96 px): the icon Google shows next to search results.
//   Google wants a square of at least 48 px, ideally a multiple of 48.
//   (app/icon.svg stays for browsers that prefer a sharp vector icon.)
// - public/icons/icon-192.png and icon-512.png: Android home screen,
//   listed in app/manifest.ts
//
// app/apple-icon.png (iPhone home screen) is made separately, on an ivory
// square, because iPhones fill see-through corners with black.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const SOURCE = "public/logo/choice-tours-travels-emblem.svg";
const svg = await readFile(SOURCE);

/** Renders the emblem as a square PNG of the given size. */
async function png(size) {
  // Rasterise large first, then shrink: small sizes stay crisp.
  return sharp(svg, { density: 600 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/**
 * An .ico file is a small header followed by images. Modern browsers and
 * Google accept PNG images inside it, which keeps this simple.
 */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + 16 * images.length;
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size % 256, 0); // width (0 means 256)
    entry.writeUInt8(size % 256, 1); // height
    entry.writeUInt8(0, 2); // no colour palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

const favicon = ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await png(size) }))));

await mkdir("public/icons", { recursive: true });
await writeFile("app/favicon.ico", favicon);
await writeFile("app/icon1.png", await png(96));
await writeFile("public/icons/icon-192.png", await png(192));
await writeFile("public/icons/icon-512.png", await png(512));

console.log("Icons written: app/favicon.ico, app/icon1.png, public/icons/icon-192.png, public/icons/icon-512.png");
