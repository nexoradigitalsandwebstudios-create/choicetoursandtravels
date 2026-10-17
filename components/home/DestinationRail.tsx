"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

interface DestinationRailProps {
  /** The cards, each already wrapped in an <li> */
  children: ReactNode;
  /** Accessible name for the scrolling region */
  label: string;
  itemCount: number;
}

/**
 * The scrolling part of the destinations rail.
 *
 * - Scrolling is native: overflow-x with scroll-snap-type: x mandatory.
 * - Keyboard: the rail can be focused and scrolled with the arrow keys, and
 *   tabbing to a card scrolls it into view.
 * - The progress bar and arrow states come from an IntersectionObserver that
 *   watches which cards are visible. There is no scroll event listener.
 */
export default function DestinationRail({ children, label, itemCount }: DestinationRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [firstVisible, setFirstVisible] = useState(0);
  const [lastVisible, setLastVisible] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    const list = rail?.querySelector("ul");
    if (!rail || !list) {
      return;
    }

    const items = Array.from(list.children);
    const visible = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = items.indexOf(entry.target);
          if (entry.isIntersecting) {
            visible.add(index);
          } else {
            visible.delete(index);
          }
        }
        if (visible.size > 0) {
          setFirstVisible(Math.min(...visible));
          setLastVisible(Math.max(...visible));
        }
      },
      // A card counts as visible once 90% of it is inside the rail.
      { root: rail, threshold: 0.9 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  function scrollByPage(direction: 1 | -1) {
    const rail = railRef.current;
    if (!rail) {
      return;
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Move by most of a screen; scroll-snap then settles on the nearest card.
    rail.scrollBy({ left: direction * rail.clientWidth * 0.8, behavior: reduceMotion ? "auto" : "smooth" });
  }

  const progress = (lastVisible + 1) / itemCount;
  const atStart = firstVisible === 0;
  const atEnd = lastVisible === itemCount - 1;

  return (
    <div>
      <div
        ref={railRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        // The padding lines the first card up with the page's content column,
        // while letting the rail run to the edge of the screen.
        className="no-scrollbar snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-[max(1.5rem,calc((100%-90rem)/2))] scroll-px-[max(1.5rem,calc((100%-90rem)/2))]"
      >
        <ul className="flex gap-2 pb-1 lg:gap-3">{children}</ul>
      </div>

      <div className="content-width mt-3 flex items-center gap-3">
        {/* Progress bar: grows as you reach further along the rail. Animated
            with transform: scaleX, never width. */}
        <div aria-hidden="true" className="h-0.5 flex-1 overflow-hidden bg-text/15">
          <div
            className="h-full origin-left bg-accent transition-transform duration-300"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
        <p aria-hidden="true" className="w-6 text-right text-sm text-text-muted tabular-nums">
          {lastVisible + 1}/{itemCount}
        </p>

        <div className="hidden gap-1 lg:flex">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={atStart}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-ink text-ink hover:bg-sand disabled:opacity-30"
          >
            <ArrowLeftIcon className="h-2.5 w-2.5" />
            <span className="sr-only">Previous destinations</span>
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={atEnd}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-ink text-ink hover:bg-sand disabled:opacity-30"
          >
            <ArrowRightIcon className="h-2.5 w-2.5" />
            <span className="sr-only">Next destinations</span>
          </button>
        </div>
      </div>
    </div>
  );
}
