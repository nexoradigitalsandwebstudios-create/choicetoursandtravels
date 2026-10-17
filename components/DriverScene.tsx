"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated illustration for the "Our drivers" section: a car driving along a
 * road past palm trees, with a temple on the hills and the evening sun.
 *
 * Built so it can never make the page hang:
 * - every moving part is its own HTML layer animated with CSS `transform`
 *   (and the sun's glow with `opacity`), which the browser hands to the GPU.
 *   We never animate inside the SVGs themselves, because SVG animations run
 *   on the main thread.
 * - it only plays while on screen. An IntersectionObserver sets
 *   data-playing; the CSS in globals.css pauses everything otherwise.
 * - with "reduce motion" switched on, it is a still picture.
 *
 * Purely decorative, so it is hidden from screen readers.
 */
export default function DriverScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-playing={playing}
      className="driver-scene relative aspect-[4/3] overflow-hidden rounded-card bg-ink lg:aspect-[4/5]"
    >
      {/* Evening sun with a softly pulsing glow */}
      <div className="absolute top-[14%] right-[16%] h-[22%] aspect-square">
        <div className="scene-sun-glow absolute -inset-[35%] rounded-full bg-accent" />
        <div className="absolute inset-0 rounded-full bg-accent" />
      </div>

      {/* Far hills with a temple gopuram on the ridge (still) */}
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute inset-x-0 bottom-[22%] h-[45%] w-full">
        <path d="M0 120 Q60 70 120 100 T240 80 T400 95 V200 H0 Z" className="fill-sand" fillOpacity={0.08} />
        <path d="M262 84 L266 58 L284 58 L288 84 Z M268 58 L270 46 L280 46 L282 58 Z" className="fill-sand" fillOpacity={0.22} />
        <path d="M0 150 Q80 110 170 140 T330 125 T400 135 V200 H0 Z" className="fill-ink-deep" />
      </svg>

      {/* Palm trees sliding past. Two identical copies side by side, moved
          left by exactly one copy's width, so the loop has no visible seam. */}
      <div className="scene-palms absolute bottom-[20%] left-0 flex w-[200%]">
        <PalmRow />
        <PalmRow />
      </div>

      {/* Road */}
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-ink-deep">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-sand/15" />
        <div className="absolute top-1/2 left-0 w-[200%] -translate-y-1/2">
          {/* 1600 wide = 16 dash periods of 100, so each half holds a whole
              number of dashes and the loop is seamless. */}
          <svg viewBox="0 0 1600 4" preserveAspectRatio="none" className="scene-road-line block h-0.5 w-full">
            <line x1="0" y1="2" x2="1600" y2="2" strokeWidth="4" strokeDasharray="60 40" className="stroke-sand" strokeOpacity={0.5} />
          </svg>
        </div>
      </div>

      {/* The car, gently bouncing as it drives */}
      <div className="scene-car absolute bottom-[13%] left-[18%] w-[46%]">
        <svg viewBox="0 0 200 80" className="block w-full">
          <path
            d="M12 62V48q1-6 10-8l24-4 18-16q4-4 12-4h94q10 0 13 10l5 18v18h-22a15 15 0 0 0-30 0H66a15 15 0 0 0-30 0Z"
            className="fill-sand"
          />
          <path
            d="M52 36l16-15q3-2 8-2h22v17Z M102 19h28v17h-28Z M134 19h38q5 0 7 7l3 10h-48Z"
            className="fill-ink"
            fillOpacity={0.85}
          />
          <rect x="12" y="46" width="8" height="5" rx="2" className="fill-accent" />
          <circle cx="51" cy="62" r="12" className="fill-ink-deep stroke-sand" strokeWidth="3" />
          <circle cx="151" cy="62" r="12" className="fill-ink-deep stroke-sand" strokeWidth="3" />
          <circle cx="51" cy="62" r="4" className="fill-accent" />
          <circle cx="151" cy="62" r="4" className="fill-accent" />
        </svg>
      </div>

      {/* What every driver brings, floating gently */}
      <ul className="absolute top-[8%] left-[6%] flex flex-col items-start gap-1">
        {["English", "Hindi", "Local routes"].map((label) => (
          <li
            key={label}
            className="scene-chip rounded-control border border-sand/25 bg-ink-deep/80 px-1.5 py-0.5 text-sm font-semibold text-sand"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// A strip of palm tree silhouettes, as wide as the scene.
function PalmRow() {
  return (
    <svg viewBox="0 0 400 120" className="block w-1/2 shrink-0">
      <g className="stroke-ink-deep" strokeLinecap="round" fill="none">
        <Palm x={30} scale={1} />
        <Palm x={120} scale={0.7} />
        <Palm x={235} scale={1.15} />
        <Palm x={330} scale={0.8} />
      </g>
    </svg>
  );
}

function Palm({ x, scale }: { x: number; scale: number }) {
  return (
    <g transform={`translate(${x} 120) scale(${scale})`}>
      <path d="M0 0 Q4 -45 12 -88" strokeWidth="5" />
      <path d="M12 -88 Q-8 -96 -22 -78 M12 -88 Q32 -100 46 -82 M12 -88 Q0 -110 -14 -108 M12 -88 Q26 -112 40 -110 M12 -88 Q14 -104 12 -118" strokeWidth="5" />
    </g>
  );
}
