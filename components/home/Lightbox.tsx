"use client";

import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent } from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import CloseIcon from "../icons/CloseIcon";
import type { SiteImage } from "@/content/images";

interface LightboxProps {
  images: SiteImage[];
  /** Which photo to show, or null when closed */
  openIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}

/**
 * Full-screen photo viewer built on the browser's own <dialog> element.
 *
 * Opening it with showModal() gives us, for free:
 * - a focus trap: everything behind the dialog becomes inert, so Tab and
 *   Shift+Tab stay inside it
 * - Escape to close (handled through the dialog's "cancel" event, below)
 * - focus returned to the thumbnail that opened it when it closes
 *
 * Left and right arrow keys move between photos.
 */
export default function Lightbox({ images, openIndex, onChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (openIndex !== null && !dialog.open) {
      dialog.showModal();
      // Stop the page behind the lightbox from scrolling.
      document.documentElement.style.overflow = "hidden";
    }
    if (openIndex === null && dialog.open) {
      dialog.close();
    }
    if (openIndex === null) {
      document.documentElement.style.overflow = "";
    }
  }, [openIndex]);

  // Escape: the browser fires "cancel" on the dialog. Some browsers then
  // close it without a reliable "close" event, which would leave our state
  // thinking it is still open. So we stop the browser closing it, and close
  // it through our own state instead (the effect above calls dialog.close()).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    function handleCancel(event: Event) {
      event.preventDefault();
      onClose();
    }
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  const image = openIndex === null ? null : images[openIndex];

  function showPrevious() {
    if (openIndex !== null) {
      onChange((openIndex - 1 + images.length) % images.length);
    }
  }

  function showNext() {
    if (openIndex !== null) {
      onChange((openIndex + 1) % images.length);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft") {
      showPrevious();
    }
    if (event.key === "ArrowRight") {
      showNext();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onKeyDown={handleKeyDown}
      aria-label="Photo viewer"
      className="m-0 h-dvh max-h-none w-full max-w-none bg-ink-deep p-0 text-sand [--focus-ring:var(--sand)] backdrop:bg-ink-deep"
    >
      {image && openIndex !== null && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-2 py-1.5 sm:px-3">
            <p className="text-sm text-sand/85" aria-live="polite">
              Photo {openIndex + 1} of {images.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="inline-flex min-h-6 items-center gap-1 rounded-control px-1.5 font-semibold hover:bg-ink"
            >
              <CloseIcon className="h-3 w-3" />
              Close
            </button>
          </div>

          <figure className="flex min-h-0 flex-1 flex-col">
            <div className="relative min-h-0 flex-1">
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="content-width py-2 text-center">
              <span className="block">{image.alt}</span>
              <span className="mt-0.5 block text-sm text-sand/70">
                Photo: {image.credit.author}, {image.credit.license}
              </span>
            </figcaption>
          </figure>

          <div className="flex justify-center gap-2 pb-3">
            <button
              type="button"
              onClick={showPrevious}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-sand/60 hover:bg-ink"
            >
              <ArrowLeftIcon className="h-3 w-3" />
              <span className="sr-only">Previous photo</span>
            </button>
            <button
              type="button"
              onClick={showNext}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-sand/60 hover:bg-ink"
            >
              <ArrowRightIcon className="h-3 w-3" />
              <span className="sr-only">Next photo</span>
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
