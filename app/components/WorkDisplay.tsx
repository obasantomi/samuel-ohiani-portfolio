"use client";

import type { PointerEvent } from "react";
import { useEffect, useState } from "react";
import type { MotionValue } from "framer-motion";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import ExperienceCursor from "./ExperienceCursor";

const experiences = [
  {
    company: "Resilience 17",
    role: "Backend Engineer",
    roleLabel: "BACKEND ENGINEER",
    location: "Lagos, Nigeria",
    period: "December 2025 — Present",
    achievements: [
      "Led cross-service error-contract standardization, eliminating fragmented error semantics and improving service-to-service reliability.",
      "Increased resilience of card gateway integrations by improving timeout, retry, and dependency-failure handling, which reduced failed transactions during third-party instability.",
      "Built and refined end-to-end card payment flows, from transaction initiation and gateway authorization to callback/webhook processing and final status updates.",
      "Collaborated closely with product and QA to convert payment business rules into robust backend validations, improving feature quality and delivery predictability.",
    ],
    keyImpact:
      "Improved reliability across card payment infrastructure by strengthening gateway failure handling, standardizing service error contracts, and refining end-to-end payment flows.",
    url: "https://www.resilience17.com/",
  },
  {
    company: "Low Gravity Limited",
    role: "Backend Engineer",
    roleLabel: "BACKEND ENGINEER",
    location: "Lagos, Nigeria",
    period: "May 2025 — April 2026",
    achievements: [
      "Resolved bugs and improved endpoint accuracy, decreasing reported backend-related issues by 40%.",
      "Built reliable integration foundations for partner systems by creating structured client and webhook data models with strong integrity rules.",
      "Developed “recent recipient” features to help users quickly repeat transfers, improving overall product usability and transaction speed.",
      "Supported deployments on Heroku, ensuring smooth CI/CD workflows and minimal downtime.",
      "Implemented core functionalities for Bluecole webapp and Dashboard, enabling multi-currency transactions amongst users.",
    ],
    keyImpact:
      "Strengthened backend integration reliability by improving endpoint accuracy, streamlining deployment workflows, and building reusable transaction flows for partner systems.",
    url: "https://www.userivo.co/",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkDisplay() {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(() =>
    experiences.map(() => true),
  );
  const [cursorVisible, setCursorVisible] = useState(false);
  const [useCustomCursor, setUseCustomCursor] = useState(false);
  const cursorX: MotionValue<number> = useMotionValue(0);
  const cursorY: MotionValue<number> = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hoverMedia = window.matchMedia("(hover: hover)");
    const finePointerMedia = window.matchMedia("(pointer: fine)");
    const update = () =>
      setUseCustomCursor(hoverMedia.matches && finePointerMedia.matches);

    update();
    hoverMedia.addEventListener("change", update);
    finePointerMedia.addEventListener("change", update);

    return () => {
      hoverMedia.removeEventListener("change", update);
      finePointerMedia.removeEventListener("change", update);
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!useCustomCursor) return;
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
  };

  const handleToggle = (index: number) => {
    setExpandedStates((current) =>
      current.map((value, currentIndex) =>
        currentIndex === index ? !value : value,
      ),
    );
  };

  const roleCount = experiences.length.toString().padStart(2, "0");

  return (
    <section className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.6,
          ease: "easeOut",
        }}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="font-display text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--foreground)",
            }}
          >
            Work Experience
          </h2>
          <p className="text-sm uppercase tracking-[0.32em] text-(--muted)">
            {roleCount} ROLES
          </p>
        </div>
        <div className="mt-6 h-px w-full bg-white/10" />
      </motion.div>

      <div className="mt-10 space-y-6">
        {experiences.map((experience, index) => {
          const isExpanded = expandedStates[index];
          return (
            <motion.article
              key={experience.company}
              onPointerEnter={(event) => {
                if (useCustomCursor) {
                  setCursorVisible(true);
                  cursorX.set(event.clientX);
                  cursorY.set(event.clientY);
                }
              }}
              onPointerMove={handlePointerMove}
              onPointerLeave={() => setCursorVisible(false)}
              className={`overflow-hidden rounded-sm bg-[rgba(255,255,255,0.01)] transition-colors duration-300 ${useCustomCursor && cursorVisible ? "cursor-none" : "cursor-auto"}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.55,
                ease: "easeOut",
              }}
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className={`w-full px-6 py-6 text-left transition-colors duration-300 hover:bg-[rgba(255,255,255,0.03)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${useCustomCursor && cursorVisible ? "cursor-inherit" : "cursor-pointer"}`}
                aria-expanded={isExpanded}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                      <p className="text-xs uppercase tracking-[0.34em] text-(--muted)">
                        {experience.period}
                      </p>
                      <p className="text-xs uppercase tracking-[0.34em] text-(--muted)">
                        {experience.roleLabel}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <a
                        href={experience.url}
                        onClick={(e) => e.stopPropagation()}
                        className="flex group flex-wrap items-center gap-2 text-lg font-semibold text-foreground"
                      >
                        <span>{experience.company}</span>

                        <span className="text-(--muted) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform transition-all duration-300">
                          ↗
                        </span>
                      </a>
                      <p className="text-sm text-(--muted-2)">
                        {experience.location}
                      </p>
                    </div>
                    <p className="text-base font-medium text-foreground">
                      {experience.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-(--muted)">
                    <span>{isExpanded ? "Collapse" : "Expand"}</span>
                    <span aria-hidden>•</span>
                    <span>{isExpanded ? "Hide details" : "Show details"}</span>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.16 : 0.4,
                      ease: "easeOut",
                    }}
                    className="overflow-hidden  bg-[rgba(255,255,255,0.02)] px-6 pb-6"
                  >
                    <div className="mt-6 space-y-6 text-sm leading-7 text-(--muted)">
                      <ul className="space-y-3 list-disc pl-5 text-foreground">
                        {experience.achievements.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <div className="rounded-[0.35rem]  bg-[rgba(255,255,255,0.035)] p-4 text-sm text-foreground">
                        <p className="text-(--muted) uppercase tracking-[0.32em] mb-2">
                          Key impact
                        </p>
                        <p>{experience.keyImpact}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      <ExperienceCursor
        x={cursorX}
        y={cursorY}
        visible={cursorVisible}
        enabled={useCustomCursor && !prefersReducedMotion}
      />
    </section>
  );
}
