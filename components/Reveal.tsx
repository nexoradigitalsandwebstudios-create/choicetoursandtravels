"use client";

import { m, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { observeReveal, unobserveReveal } from "@/lib/revealObserver";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating, for gentle staggering */
  delay?: number;
}

// "shown": normal. This is also how the server renders it, so content is
//          never invisible if JavaScript is slow or fails.
// "hidden": below the fold, waiting to scroll into view.
// "revealing": animating in. Happens once; nothing re-animates on scroll up.
type RevealState = "shown" | "hidden" | "revealing";

/**
 * Wraps a block of content so it rises 16px and fades in the first time it
 * scrolls into view. On devotional pages, and on devices set to reduce
 * motion, it fades in without moving.
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<RevealState>("shown");
  const [fadeOnly, setFadeOnly] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element === null) {
      return;
    }

    let isFirstReport = true;
    observeReveal(element, (entry) => {
      if (isFirstReport) {
        isFirstReport = false;
        // Already on screen when the page loaded: leave it alone, so nothing
        // that the visitor can already see blinks out and back in.
        if (entry.boundingClientRect.top < window.innerHeight) {
          unobserveReveal(element);
          return;
        }
        // Below the fold: hide it (instantly, it is off screen) and wait.
        // Devotional pages and "reduce motion" devices get a plain fade with
        // no movement.
        setFadeOnly(reduceMotion === true || element.closest('[data-mode="devotional"]') !== null);
        setState("hidden");
        return;
      }

      if (entry.isIntersecting) {
        setState("revealing");
        unobserveReveal(element);
      }
    });

    return () => unobserveReveal(element);
  }, [reduceMotion]);

  // Devotional mode reduces motion to a simple fade.
  const riseDistance = fadeOnly ? 0 : 16;

  return (
    <m.div
      ref={ref}
      className={className}
      initial={false}
      animate={state === "hidden" ? { opacity: 0, y: riseDistance } : { opacity: 1, y: 0 }}
      transition={state === "revealing" ? { duration: 0.5, ease: "easeOut", delay } : { duration: 0 }}
    >
      {children}
    </m.div>
  );
}
