"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

const TECH_ITEMS = [
  "Node.js",
  "Nest.js",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Express.js",
  "Git/GitHub",
  "PostgreSQL",
  "HTML",
  "CSS",
  "Python",
  "Render",
  "Heroku",
  "Figma",
  "MongoDB",
  "API Documentation (Swagger/Postman)",
];

function Icon({
  name,
  className = "w-5 h-5",
}: {
  name: string;
  className?: string;
}) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
  } as any;

  switch (name) {
    case "Node.js":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M12 2l8 4v8l-8 4-8-4V6l8-4z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "Nest.js":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M3 7.5L12 3l9 4.5v9L12 21 3 16.5v-9z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "React.js":
      return (
        <svg {...common} className={className} aria-hidden>
          <ellipse
            cx="12"
            cy="12"
            rx="6"
            ry="2.4"
            stroke="currentColor"
            strokeWidth={1.2}
          />
          <ellipse
            cx="12"
            cy="12"
            rx="6"
            ry="2.4"
            transform="rotate(60 12 12)"
            stroke="currentColor"
            strokeWidth={1.2}
          />
          <ellipse
            cx="12"
            cy="12"
            rx="6"
            ry="2.4"
            transform="rotate(120 12 12)"
            stroke="currentColor"
            strokeWidth={1.2}
          />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        </svg>
      );
    case "Next.js":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M3 19V5h6l6 14h-6l-1.2-3.2L9 19H3z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M2 12c4 0 6-4 10-4s6 4 10 4c-4 0-6 4-10 4S6 12 2 12z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "TypeScript":
      return (
        <svg {...common} className={className} aria-hidden>
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth={1.2}
          />
          <text
            x="6"
            y="16"
            fill="currentColor"
            fontSize="8"
            fontFamily="sans-serif"
          >
            TS
          </text>
        </svg>
      );
    case "JavaScript":
      return (
        <svg {...common} className={className} aria-hidden>
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth={1.2}
          />
          <text
            x="6"
            y="16"
            fill="currentColor"
            fontSize="8"
            fontFamily="sans-serif"
          >
            JS
          </text>
        </svg>
      );
    case "Express.js":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        </svg>
      );
    case "Git/GitHub":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M12 2v6M5 9l7 5 7-5"
            stroke="currentColor"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M12 3c3 0 6 2 6 6s-3 9-6 12c-3-3-6-9-6-12s3-6 6-6z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "HTML":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M3 3l1.5 16L12 21l7.5-1L21 3H3z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "CSS":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M3 3l1.5 16L12 21l7.5-1L21 3H3z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "Python":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M4 8c2-4 8-4 8-4v4H8v2H4V8zM20 16c-2 4-8 4-8 4v-4h4v-2h4v2z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "Render":
      return (
        <svg {...common} className={className} aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="7"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "Heroku":
      return (
        <svg {...common} className={className} aria-hidden>
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "Figma":
      return (
        <svg {...common} className={className} aria-hidden>
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth={1.2} />
          <rect
            x="12"
            y="5"
            width="6"
            height="6"
            rx="3"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "MongoDB":
      return (
        <svg {...common} className={className} aria-hidden>
          <path
            d="M12 3s4 3 4 6c0 6-4 9-4 12s-4-3-4-12c0-3 4-6 4-6z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
    case "API Documentation (Swagger/Postman)":
      return (
        <svg {...common} className={className} aria-hidden>
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth={1.2}
          />
          <path
            d="M7 8h10M7 12h10"
            stroke="currentColor"
            strokeWidth={1.2}
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...common} className={className} aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      );
  }
}

export default function TechMarquee() {
  const prefersReducedMotion = useReducedMotion();

  const items = TECH_ITEMS;

  const animationDuration = 12; // seconds for a slower, more deliberate scroll

  return (
    <div className="relative mx-auto max-w-225 w-full mt-25">
      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full"
          style={{
            width: 96,
            background:
              "linear-gradient(to right, var(--background), rgba(5,5,5,0))",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full"
          style={{
            width: 96,
            background:
              "linear-gradient(to left, var(--background), rgba(5,5,5,0))",
          }}
        />

        <div
          aria-hidden={prefersReducedMotion!}
          className="relative"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="marquee-track flex items-center gap-8 whitespace-nowrap"
            style={
              prefersReducedMotion
                ? { animation: "none" }
                : {
                    animation: `marquee ${animationDuration}s linear infinite`,
                  }
            }
          >
            {[...items, ...items].map((t, idx) => (
              <div
                key={`${t}-${idx}`}
                className="inline-flex items-center gap-3 text-white/50 text-sm md:text-base"
                style={{ minWidth: 120 }}
              >
                <Icon name={t} className="w-5 h-5 text-white/50 shrink-0" />
                <span className="font-medium text-white/50">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .marquee-track {
            gap: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
