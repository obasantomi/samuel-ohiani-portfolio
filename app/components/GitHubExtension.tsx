"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function GitHubExtension() {
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const supportsPointer = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    supportsPointer.current = media.matches;

    const listener = () => {
      supportsPointer.current = media.matches;
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!supportsPointer.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--x", `${x}px`);
    event.currentTarget.style.setProperty("--y", `${y}px`);
  };

  const highlightStyle = {
    background:
      "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 40%)",
    opacity: hovered ? 1 : 0,
  } as React.CSSProperties;

  return (
    <motion.article
      className="group relative overflow-hidden  h-[323.5px] rounded-sm border border-white/5 bg-[rgba(255,255,255,0.015)] transition-colors duration-300 hover:border-white/15 focus-within:border-white/15"
      onMouseEnter={(e) => {
        setHovered(true);
        handleMouseMove(e);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.65,
        ease: easeOut,
      }}
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
        style={highlightStyle}
        aria-hidden
      />

      <div className="relative h-full flex items-center justify-center p-6 md:p-8">
        <div className="mt-6 flex items-center justify-between">
          <span
            className="font-display mr-3 italic text-[#2a2a2a] text-2xl"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            More on
          </span>
          <a
            href="https://github.com/samohiani"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-display)",
            }}
            className=" italic no-underline border-b text-[#8A8880] text-xl border-[#333] pb-px transition-colors duration-200 hover:text-[#aaa]"
          >
            github.com/samohiani↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}
