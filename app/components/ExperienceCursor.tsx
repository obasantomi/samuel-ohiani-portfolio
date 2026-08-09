"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";

interface ExperienceCursorProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  visible: boolean;
  enabled: boolean;
}

export default function ExperienceCursor({
  x,
  y,
  visible,
  enabled,
}: ExperienceCursorProps) {
  const prefersReducedMotion = useReducedMotion();
  const springX = useSpring(x, { stiffness: 260, damping: 28 });
  const springY = useSpring(y, { stiffness: 260, damping: 28 });

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
      animate={
        visible
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }
      }
      transition={{
        duration: prefersReducedMotion ? 0.16 : 0.22,
        ease: "easeOut",
      }}
      aria-hidden="true"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>
    </motion.div>
  );
}
