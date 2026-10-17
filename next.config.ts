import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    // AVIF first, WebP as the fallback. Browsers that support neither get
    // the original JPEG. Next.js picks the format from the Accept header.
    formats: ["image/avif", "image/webp"],

    // Widths Next.js generates for full-width and large images (srcset).
    // 360 covers the many 360px-wide Android phones this audience uses.
    deviceSizes: [360, 640, 828, 1080, 1440, 1920],

    // Widths for small images that pass a `sizes` prop narrower than the
    // screen (thumbnails, icons). Next.js requires these to be smaller than
    // the smallest deviceSize (360).
    imageSizes: [96, 128, 256],

    // Next.js 16 requires an explicit allowlist of quality values.
    qualities: [75],
  },
};

export default nextConfig;
