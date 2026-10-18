import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionProvider from "@/components/MotionProvider";
import { images } from "@/content/images";
import { keywords, seo } from "@/content/seo";
import { site } from "@/content/site";
import "./globals.css";

// Headings. Only weights 400 and 600 are loaded, so only use
// font-normal and font-semibold on headings.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-fraunces",
});

// Body text. Inter is a variable font, so one file covers every weight.
// Not preloaded: on a slow phone connection the hero photo and the heading
// font matter more for the first screen. Body text shows in a size-matched
// fallback for a moment, then swaps to Inter without shifting the layout.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.home.title,
    template: `%s | ${site.name}`,
  },
  description: seo.home.description,
  keywords: keywords,
  applicationName: site.name,
  category: "travel",
  // No site-wide canonical: each page sets its own, so no page can
  // accidentally point Google at the homepage.
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    title: seo.home.title,
    description: seo.home.description,
    url: "/",
    // Default preview picture when a link is shared on WhatsApp or Facebook.
    images: [{ url: images.heroSunset.src, width: images.heroSunset.width, height: images.heroSunset.height, alt: images.heroSunset.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    images: [images.heroSunset.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Google Search Console: paste the verification code into the
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION environment variable in Vercel
  // (Search Console > Add property > HTML tag > the content="..." value).
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  // Lets pinch-zoom work (never disable it: many of our visitors need it).
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {/* Invisible strip at the top of the page. When it scrolls out of
            view, the header turns solid. See Header.tsx. */}
        <div id="top-sentinel" aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-12" />

        <a
          href="#main"
          className="sr-only rounded-control bg-accent-fill px-2 py-1 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-1 focus:left-1 focus:z-[60]"
        >
          Skip to content
        </a>

        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
