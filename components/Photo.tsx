import Image from "next/image";
import type { SiteImage } from "@/content/images";
import { getBlurDataURL } from "@/lib/blur";

interface PhotoProps {
  image: SiteImage;
  /**
   * How wide the photo appears on screen, so the browser downloads the right
   * size. Examples: "100vw" for full width, "(min-width: 1024px) 50vw, 100vw"
   * for half width on desktop.
   */
  sizes: string;
  /** Classes for the wrapper. It must have a size; the photo fills it. */
  className?: string;
  /** Classes for the <img> itself, e.g. a hover zoom */
  imageClassName?: string;
  /** Override the alt text. Pass "" for decorative photos. */
  alt?: string;
  /**
   * Load this photo before anything else on the page. Use it only for the one
   * big photo at the top of a page (its Largest Contentful Paint).
   */
  highPriority?: boolean;
}

/**
 * Every photo on the site goes through this component. It adds:
 * - the shared colour grade (.photo-grade in globals.css)
 * - a real blurred placeholder while the photo loads
 * - lazy loading (unless highPriority is set) and AVIF/WebP via next/image
 *
 * Server components only: it reads the blur data file.
 */
export default function Photo({
  image,
  sizes,
  className = "",
  imageClassName = "",
  alt,
  highPriority = false,
}: PhotoProps) {
  const blurDataURL = getBlurDataURL(image.src);

  return (
    <span className={`photo-grade block ${className}`}>
      <Image
        src={image.src}
        alt={alt ?? image.alt}
        fill
        sizes={sizes}
        loading={highPriority ? "eager" : "lazy"}
        fetchPriority={highPriority ? "high" : undefined}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        className={`object-cover ${imageClassName}`}
        style={image.focus ? { objectPosition: image.focus } : undefined}
      />
    </span>
  );
}
