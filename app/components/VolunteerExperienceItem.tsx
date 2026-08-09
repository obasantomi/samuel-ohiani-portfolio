"use client";

import { motion, useReducedMotion } from "framer-motion";

interface VolunteerExperienceItemProps {
  role: string;
  organization: string;
  period: string;
  location: string;
  details: string[];
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function VolunteerExperienceItem({
  role,
  organization,
  period,
  location,
  details,
}: VolunteerExperienceItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="overflow-hidden rounded-sm border border-white/5 bg-[rgba(255,255,255,0.015)] p-6 md:p-8"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: easeOut }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--muted)]">
            {period}
          </p>
          <h4 className="text-xl font-semibold text-white">{role}</h4>
          <p className="text-sm text-[var(--muted)]">{organization}</p>
        </div>
        <p className="text-sm text-[var(--muted)] md:text-right">{location}</p>
      </div>

      <div className="mt-6 space-y-3 text-sm leading-7 text-[var(--muted-2)]">
        {details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
    </motion.article>
  );
}
