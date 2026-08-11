"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const workHistory = [
  { company: "BUGA", logo: "/images/work/buga.jpeg" },
  { company: "PFS", logo: "/images/work/PFS.jpeg" },
  { company: "Resilience", logo: "/images/work/resilience.jpeg" },
  { company: "Rivo", logo: "/images/work/rivo.jpeg" },
];

const stackPositions = [
  { y: 0, opacity: 1, scale: 1, x: 0, zIndex: 40 },
  { y: 10, opacity: 0.72, scale: 0.986, x: 4, zIndex: 30 },
  { y: 20, opacity: 0.5, scale: 0.966, x: 8, zIndex: 20 },
  { y: 30, opacity: 0.28, scale: 0.94, x: 12, zIndex: 10 },
];

export default function AnimatedWorkDisplay() {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % workHistory.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const orderedHistory = useMemo(() => {
    return workHistory.map(
      (_, offset) => workHistory[(currentIndex + offset) % workHistory.length],
    );
  }, [currentIndex]);

  return (
    <div className=" w-full md:max-w-100 mx-auto md:mx-0 relative h-100 rounded-4xl overflow-hidden">
      <img
        src="/images/samuel.JPG"
        alt="Samuel portrait"
        className="w-full object-cover rounded-3xl"
      />

      <div className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-[#050505]/50 via-[#050505]/35 to-transparent" />

      <div className="absolute left-4 right-4 bottom-20 md:left-0 z-50 md:right-auto md:max-w-85">
        {orderedHistory.map((item, position) => {
          const positionStyles =
            stackPositions[position] ??
            stackPositions[stackPositions.length - 1];

          return (
            <motion.div
              key={item.company}
              initial={false}
              animate={{
                y: positionStyles.y,
                opacity: positionStyles.opacity,
                scale: positionStyles.scale,
                x: positionStyles.x,
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.72,
                ease: easeOut,
              }}
              style={{ zIndex: positionStyles.zIndex }}
              className="absolute w-50   overflow-hidden rounded-xl pr-3 border border-white/10 bg-[#111111]/95 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 px-4 py-2 sm:px-5">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-[0.24em] text-white/45">
                    Worked at
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-white">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
