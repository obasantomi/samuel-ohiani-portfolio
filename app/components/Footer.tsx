"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  const contentVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.75,
        ease: easeOut,
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, x: 10, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.24 : 0.52,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      className="bg-[#F5F3ECE0]"
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="px-6 sm:px-10 lg:px-16 py-28 lg:py-40 text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={contentVariants}
      >
        <motion.div
          className="flex flex-col items-center text-center gap-5"
          variants={contentVariants}
        >
          <motion.p className="text-sm text-[#8A8880]" variants={itemVariants}>
            OPEN TO OPPORTUNITIES
          </motion.p>
          <motion.h2
            className="font-display text-2xl text-[#0A0A0A] mt-2 text-[64px]"
            variants={itemVariants}
          >
            Say hello.{" "}
            <em className="block italic text-[#8A8880]">
              I always write back.
            </em>
          </motion.h2>
          <motion.a
            href="mailto:ohianisammy2005@gmail.com"
            className="no-underline border-b mt-5 tracking-widest text-[#8A8880] text-2xl border-[#333] pb-px transition-colors duration-200 hover:text-[#0A0A0A]"
            variants={itemVariants}
          >
            ohiani.samuel.@gmail.com<span aria-hidden>↗</span>
          </motion.a>

          <motion.div
            className="flex flex-col gap-4 mt-9 sm:flex-row sm:justify-center sm:gap-9"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/samohiani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8880] hover:text-[#0A0A0A]"
              variants={itemVariants}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/samuel-ohiani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8880] hover:text-[#0A0A0A]"
              variants={itemVariants}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:ohianisammy2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8880] hover:text-[#0A0A0A]"
              variants={itemVariants}
            >
              Email <span aria-hidden>↗</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="border-t-[0.1px] border-[#363535]/20 p-8 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-[#8A8880] text-[0.78rem] text-left transition-colors duration-200 hover:text-[#0A0A0A]"
        >
          © 2026 Samuel Ohiani
        </button>
        <a
          href="#"
          className="text-[#8A8880] text-[0.78rem] transition-colors duration-200 hover:text-[#0A0A0A]"
        >
          Thanks for viewing ♥︎
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
