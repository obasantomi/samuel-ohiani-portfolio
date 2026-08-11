"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PHRASES: string[] = [
  "Scalable backend systems and APIs",
  "Responsive web applications and product features",
  "Payment and financial solutions",
  "Developer-friendly tools and internal platforms",
  "Reliable systems that are easy to maintain and scale",
];

export default function AnimatedBuildingStatement() {
  const TYPING_SPEED = 65; // ms per char (between 50-80)
  const DELETING_SPEED = 35; // ms per char (between 30-40)
  const PAUSE_AFTER_COMPLETE = 1600; // ms (between 1500-2000)

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mounted.current) return;

    const currentPhrase = PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedLength < currentPhrase.length) {
      // typing
      timeout = setTimeout(() => {
        if (!mounted.current) return;
        setDisplayedLength((l) => l + 1);
      }, TYPING_SPEED);
    } else if (!isDeleting && displayedLength === currentPhrase.length) {
      // pause before deleting
      timeout = setTimeout(() => {
        if (!mounted.current) return;
        setIsDeleting(true);
      }, PAUSE_AFTER_COMPLETE);
    } else if (isDeleting && displayedLength > 0) {
      // deleting
      timeout = setTimeout(() => {
        if (!mounted.current) return;
        setDisplayedLength((l) => l - 1);
      }, DELETING_SPEED);
    } else if (isDeleting && displayedLength === 0) {
      // move to next phrase
      timeout = setTimeout(() => {
        if (!mounted.current) return;
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, 120);
    }

    return () => clearTimeout(timeout);
  }, [displayedLength, isDeleting, phraseIndex]);

  const current = PHRASES[phraseIndex].slice(0, displayedLength);

  return (
    <div
      className="font-display text-lg md:text-xl leading-snug"
      style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
    >
      <span className="font-bold text-3xl xl:text-6xl">Building&nbsp;</span>
      <span className="text-[#9bef8f] text-3xl xl:text-6xl">{current}</span>
      <motion.span
        aria-hidden
        className="text-[#9bef8f] inline-block ml-0"
        animate={{ opacity: [1, 0.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        |
      </motion.span>
    </div>
  );
}
