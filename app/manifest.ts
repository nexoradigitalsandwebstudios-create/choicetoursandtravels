import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Generates /manifest.webmanifest: the name and icon a phone uses when
// someone adds the site to their home screen. Also another place Google
// finds the logo icon.
//
// Colours must be written out here (the manifest can't read CSS); they match
// --ink and --sand in app/globals.css.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Choice Travels",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#f7f3ea",
    theme_color: "#0b3b2e",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
