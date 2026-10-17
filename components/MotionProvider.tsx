"use client";

import { LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

// Loads the animation features in a separate, later download. Until they
// arrive, every <m.div> simply shows its content, which is exactly what we
// want: scroll reveals are decoration, never needed to read the page.
const loadFeatures = () => import("@/lib/motionFeatures").then((module) => module.default);

// LazyMotion keeps Framer Motion's share of the JavaScript small. `strict`
// makes Framer Motion warn if anyone uses the full <motion.div> instead of
// the lightweight <m.div>.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
