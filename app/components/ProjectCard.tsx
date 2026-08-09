"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  number?: string;
  name: string;
  description?: string;
  technologies?: string;
  date?: string;
  href: string;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ProjectCard({
  number,
  name,
  description,
  technologies,
  date,
  href,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const supportsPointer = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    supportsPointer.current = media.matches;

    const listener = () => {
      supportsPointer.current = media.matches;
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!supportsPointer.current) {
      return;
    }

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
      className="group relative overflow-hidden rounded-sm border border-white/5 bg-[rgba(255,255,255,0.015)] transition-colors duration-300  focus-within:border-white/15"
      onMouseEnter={(event) => {
        setHovered(true);
        handleMouseMove(event);
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
        aria-hidden="true"
      />
      <div className="relative p-6 md:p-8">
        {number ? (
          <p className="text-xs uppercase tracking-[0.32em] text-(--muted)">
            {number}
          </p>
        ) : null}
        <h3
          className="mt-4 font-display text-2xl leading-tight text-white transition-colors duration-300 group-hover:text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>
        {description ? (
          <p className="mt-4 text-sm leading-7 text-(--muted-2)">
            {description}
          </p>
        ) : null}
        {technologies || date ? (
          <div
            className={`mt-6 border-t border-white/5 pt-5 ${description ? "" : "mt-4"}`}
          >
            {technologies ? (
              <p className="text-[11px] text-(--muted)">{technologies}</p>
            ) : null}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {date ? (
                <p className="text-sm text-(--muted)">{date}</p>
              ) : (
                <div />
              )}
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-(--muted) transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                transition={{ duration: 0.25, ease: easeOut }}
              >
                <span>Visit</span>
                <span aria-hidden>↗</span>
              </motion.a>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-(--muted) transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              whileHover={prefersReducedMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.25, ease: easeOut }}
            >
              <span>Visit</span>
              <span aria-hidden>↗</span>
            </motion.a>
          </div>
        )}
      </div>
    </motion.article>
  );
}
