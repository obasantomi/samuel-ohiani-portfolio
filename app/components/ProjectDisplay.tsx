"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import GitHubExtension from "./GitHubExtension";

const projects = [
  {
    number: "01",
    name: "HebronBites",
    description:
      "Web-based application connecting users to campus food vendors. Users can browse menus, place orders, rate vendors, and track deliveries.",
    technologies: "Node.js · Express · Sequelize · PostgreSQL · Paystack",
    date: "March 2024",
    // href: "https://github.com/samohiani", // TODO: Replace with the actual HebronBites project URL.
  },
  {
    number: "02",
    name: "Buga Travels",
    description:
      "A school ride-hailing mobile application designed to connect users with reliable drivers for safe and convenient trips to and from their various schools.",
    technologies: "Node.js · Express · Sequelize · PostgreSQL",
    date: "July 2024",
    // href: "https://www.bugatravels.com/", // TODO: Replace with the actual Buga Travels project URL.
  },
  {
    number: "03",
    name: "Qualiflow",
    description:
      "A lead qualification app that cleans CSV lead exports, normalizes inconsistent data, detects duplicates, scores buying fit and intent, and returns a ranked shortlist with explainable recommendations.",
    technologies: "Next.js · TypeScript · Tailwind CSS · Node.js",
    date: "2026",
    href: "https://leads-qualification-app.vercel.app/",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ProjectDisplay() {
  const prefersReducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.25 : 0.72,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="font-display text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--foreground)",
            }}
          >
            Projects
          </h2>
          <p className="text-sm uppercase tracking-[0.32em] text-(--muted)">
            03 PROJECTS
          </p>
        </div>
        <div className="mt-6 h-px w-full bg-white/10" />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-0 sm:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: prefersReducedMotion ? 0.04 : 0.1,
              delayChildren: prefersReducedMotion ? 0.04 : 0.08,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.number} index={index} {...project} />
        ))}
        <GitHubExtension />
      </motion.div>
    </div>
  );
}
