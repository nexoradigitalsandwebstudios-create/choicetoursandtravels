import type { Metadata } from "next";
import { seo } from "@/content/seo";
import Drivers from "@/components/Drivers";
import Enquiry from "@/components/Enquiry";
import FaqSection from "@/components/FaqSection";
import TravelAgencyJsonLd from "@/components/TravelAgencyJsonLd";
import Destinations from "@/components/home/Destinations";
import FleetPreview from "@/components/home/FleetPreview";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import JatayuStory from "@/components/home/JatayuStory";
import KathakaliBand from "@/components/home/KathakaliBand";
import Since2005 from "@/components/home/Since2005";
import TwoDoors from "@/components/home/TwoDoors";
import { images } from "@/content/images";

export const metadata: Metadata = {
  // "absolute" skips the "| Choice Tours & Travels" ending: the name is
  // already at the start of the homepage title.
  title: { absolute: seo.home.title },
  description: seo.home.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    images: [{ url: images.heroSunset.src, alt: images.heroSunset.alt }],
  },
};

// Homepage. Mode-neutral: no data-mode, so it uses the default gold accent.
//
// The order is deliberate: photo-led sections alternate with quiet ones so
// the page has a rhythm. Never put two sections with the same kind of
// imagery next to each other.
export default function HomePage() {
  return (
    <main id="main">
      <TravelAgencyJsonLd />
      {/* 1. dark, split: photo beside the headline */}
      <Hero />
      {/* 2. sand, numbers only */}
      <Since2005 />
      {/* 3. dark, two photos */}
      <TwoDoors />
      {/* 4. sand, vehicle photos */}
      <FleetPreview />
      {/* 5. sand-deep, card rail */}
      <Destinations />
      {/* 6. dark, one sticky photo */}
      <JatayuStory />
      {/* 7. sand, animated road scene */}
      <Drivers />
      {/* 8. dark, fixed background */}
      <KathakaliBand />
      {/* 9. sand, photo grid */}
      <Gallery />
      {/* 10. sand-deep, common questions (also read by Google) */}
      <FaqSection
        background="sand-deep"
        title="Tours and travels in Trivandrum: your questions"
        intro="Straight answers about our taxis, tours and temple trips from Thiruvananthapuram."
      />
      {/* 11. ink, phone and map */}
      <Enquiry />
    </main>
  );
}
