"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import AnimatedBuildingStatement from "./AnimatedBuildingStatement";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const entranceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.55 : 1.4,
        ease: easeOut,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.32 : 0.8,
        ease: easeOut,
      },
    },
  };

  const sectionStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: prefersReducedMotion ? 0.12 : 0.3,
        staggerChildren: prefersReducedMotion ? 0.08 : 0.18,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={entranceVariants}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="max-w-120">
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-foreground"
            aria-hidden
          >
            <motion.span
              className="w-3 h-3 rounded-full bg-[#22c55e] border border-white/10"
              animate={{
                scale: [1, 1.18, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34,197,94,0.35)",
                  "0 0 0 10px rgba(34,197,94,0.08)",
                  "0 0 0 0 rgba(34,197,94,0.35)",
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span>AVAILABLE FOR WORK</span>
          </motion.div>
          <h1
            className="font-display text-base sm:text-lg md:text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--foreground)",
            }}
          >
            <motion.img
              src="/images/samuel.JPG"
              alt="Profile"
              className="inline-block align-middle w-8 h-8 md:w-10 md:h-10 object-cover rounded-lg mr-2"
              layoutId="profile-image"
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            Senior Fullstack Engineer with 3+ years of experience building
            products from idea to production.
          </h1>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  background: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(4px)",
                }}
              />
              <motion.img
                src="/images/samuel.JPG"
                alt="Profile enlarged"
                className="z-50 cursor-pointer rounded-2xl object-cover"
                layoutId="profile-image"
                onClick={() => setOpen(false)}
                style={{
                  width: 220,
                  height: 220,
                  transformOrigin: "center center",
                }}
                initial={{ scale: 1 }}
                animate={{ scale: 1.12 }}
                exit={{ scale: 1 }}
                transition={{
                  // Use a short tween for a smooth, non-bouncy finish
                  default: { duration: 0.32, ease: "easeOut" },
                  layout: { duration: 0.32, ease: "easeOut" },
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href="mailto:ohianisammy2005@gmail.com"
          className="inline-flex items-center gap-2 px-2 sm:px-3 bg-[#ffffff] text-[#050505] rounded-full text-sm h-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Discuss a project via email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden
          >
            <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5A2.25 2.25 0 0120.25 19.5H3.75A2.25 2.25 0 011.5 17.25V6.75zM3.72 6.75l8.28 5.07L20.28 6.75H3.72zM20.25 8.4l-7.17 4.39a.75.75 0 01-.78 0L4.5 8.4V17.25c0 .414.336.75.75.75h15c.414 0 .75-.336.75-.75V8.4z" />
          </svg>
          <span>DISCUSS A PROJECT</span>
        </motion.a>
      </div>

      <motion.section
        className="w-full flex flex-col md:flex-row-reverse  mx-auto mt-30 gap-20"
        variants={fadeUpVariants}
      >
        <div className="flex flex-col justify-between gap-6 w-full">
          <div className="max-w-135">
            <AnimatedBuildingStatement />
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(
                    "ohianisammy2005@gmail.com",
                  );
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                } catch (e) {
                  // ignore clipboard errors silently
                }
              }}
              className="inline-flex items-center gap-2 px-2 sm:px-3 bg-[#141414] text-white rounded-full text-sm h-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              aria-label="Copy email address"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden
              >
                <path d="M16 1H4a2 2 0 00-2 2v14h2V3h12V1zM20 5H8a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2zm-1 4l-7 4-7-4V7l7 4 7-4v2z" />
              </svg>
              <span>{copied ? "COPIED" : "COPY EMAIL ADDRESS"}</span>
            </motion.button>

            <motion.a
              href="/resume/Samuel-Ohiani-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 sm:px-3 bg-[#141414] text-white rounded-full text-sm h-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              aria-label="View resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden
              >
                <path d="M6 2h7l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm8 1.5V7h3.5L14 3.5z" />
              </svg>
              <span>VIEW RESUME</span>
            </motion.a>
          </div>
        </div>

        <motion.div
          className="space-y-8 text-md text-white/50"
          variants={sectionStaggerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUpVariants}>
            I'm Samuel, a Fullstack Engineer with 3+ years of experience
            building products from idea to production. While my expertise is in
            backend engineering, I enjoy working across the stack to create
            fast, reliable, and user-focused applications.
          </motion.p>
          <motion.div variants={fadeUpVariants}>
            Currently, I work on the backend infrastructure powering a card
            acquiring platform, integrating global payment providers and
            delivering secure, scalable payment flows for merchants worldwide at
            <Link
              href={"https://www.resilience17.com/"}
              target="_blank"
              className="inline-flex relative items-center gap-1 group mx-1 transition-all duration-400 font-bold"
            >
              <span className="absolute left-0 opacity-0 p-0.5 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                <img
                  src="/images/work/resilience.jpeg"
                  alt="Resilience Logo"
                  className="h-5 object-cover"
                />
              </span>
              <span className="group-hover:translate-x-6 transform text-white/80 transition-transform duration-300 group-hover:text-[#8ae051]">
                Resilience
              </span>
            </Link>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            I've also contributed to a range of other major companies and
            startups. I worked as a core software engineer at
            <Link
              href={"https://userivo.co/"}
              target="_blank"
              className="inline-flex relative items-center peer gap-1 group mx-1 transition-all duration-400 font-bold"
            >
              <span className="absolute left-0 opacity-0 p-0.5 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                <img
                  src="/images/work/rivo.jpeg"
                  alt="Rivo Business Logo"
                  className="h-6 object-cover"
                />
              </span>
              <span className="group-hover:translate-x-6 transform transition-transform duration-300 text-white/80 group-hover:text-[#ec1e85]">
                Rivo Business
              </span>
            </Link>
            <span className="inline-block peer-hover:translate-x-6 whitespace-break-spaces transform transition-transform duration-300">
              building services for crypto and fiat payment.
            </span>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            I've also worked with
            <Link
              href={"http://www.thepfs.biz/"}
              target="_blank"
              className="inline-flex relative items-center peer gap-1 group mx-1 transition-all duration-400 font-bold"
            >
              <span className="absolute left-0 opacity-0 p-0.5 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                <img
                  src="/images/work/PFS.jpeg"
                  alt="Rivo Business Logo"
                  className="h-4 object-cover"
                />
              </span>
              <span className="group-hover:translate-x-6 transform text-white/80 transition-transform duration-300 group-hover:text-[#358aa6]">
                Precise Financial Systems,
              </span>
            </Link>
            <Link
              href={"https://www.bugatravels.com/"}
              target="_blank"
              className="inline-flex peer-hover:translate-x-6 relative items-center peer gap-1 group mx-1 transition-all duration-400 font-bold"
            >
              <span className="absolute left-0 opacity-0 p-0.5 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                <img
                  src="/images/work/buga.jpeg"
                  alt="Rivo Business Logo"
                  className="h-4 object-cover"
                />
              </span>
              <span className="group-hover:translate-x-6 transform text-white/80 transition-transform duration-300 group-hover:text-yellow-400">
                Buga Travels.
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
