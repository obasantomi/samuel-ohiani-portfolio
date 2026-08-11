"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    company: "Resilience 17",
    role: "Backend Engineer",
    roleLabel: "BACKEND ENGINEER",
    location: "Lagos, Nigeria",
    period: "December 2025 — Present",
    achievements: [
      "Design and maintain the backend infrastructure powering a card acquiring platform, integrating global payment providers including Fiserv, Worldpay, Nuvei, Elavon, and PayPal, alongside Apple Pay.",
      "Built end-to-end payment flows covering payment initiation, 3DS authentication, payment session management, redirect handling, and transaction lifecycle processing for secure, scalable operations.",
      "Implemented provider-specific onboarding, redirect, and payment processing workflows for card and digital wallet transactions, ensuring compatibility with each gateway's integration model.",
      "Designed reusable payment abstractions and shared acquiring patterns to unify multiple providers behind a consistent backend architecture while supporting complex business rules and provider variability.",
      "Improved reliability across gateway integrations by tightening timeout, retry, and dependency-failure handling, while standardizing cross-service error contracts and operational semantics.",
    ],
    keyImpact:
      "Strengthened the platform's payment infrastructure by unifying provider integrations, hardening core transaction flows, and improving reliability, security, and scalability across card and wallet acquiring operations.",
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
  {
    company: "Unified Payment Services Limited",
    role: "Backend Developer",
    roleLabel: "BACKEND DEVELOPER",
    location: "Lagos Island, Lagos State, Nigeria",
    period: "March 2024 — September 2024 · 7 mos",
    achievements: [
      "Actively resolved bugs in the backend architecture developed with Javascript and NodeJs, improving system stability and performance.",
      "Implemented fixes that led to a reduction in bug reports over the course of the internship.",
      "Conducted thorough reviews of existing systems and provided constructive feedback to team leads.",
      "Developed proficiency in Back-End Web Development and PostgreSQL database management.",
    ],
    keyImpact:
      "Enhanced backend stability and system performance through effective bug resolution and comprehensive code reviews during internship tenure.",
    url: "https://www.storipod.com/",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, x: 10, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)" },
};

export default function WorkDisplay() {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(() =>
    experiences.map(() => false),
  );
  const prefersReducedMotion = useReducedMotion();

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
              className="overflow-hidden rounded-sm bg-[rgba(255,255,255,0.01)] transition-colors duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-6 text-left transition-colors duration-300 hover:bg-[rgba(255,255,255,0.03)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
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
                        target="_blank"
                        rel="noopener noreferrer"
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
    </section>
  );
}
