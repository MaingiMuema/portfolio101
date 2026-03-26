"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { activeHero, capabilityGroups } from "./portfolioContent";
import styles from "./WelcomeAnimation.module.css";

const CTA_REVEAL_MS = 1600;
const AUTO_EXIT_MS = 6200;
const EXIT_DURATION_MS = 900;

const PARTICLES = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 4 + (index % 4) * 2,
  left: `${(index * 19) % 100}%`,
  top: `${(index * 23 + 11) % 100}%`,
  delay: index * 0.18,
  duration: 7 + (index % 5),
  driftX: ((index % 5) - 2) * 18,
  driftY: ((index % 4) - 1.5) * 24,
}));

const FLOATING_CARDS = [
  {
    label: "System lens",
    title: capabilityGroups[0].title,
    description: capabilityGroups[0].items.slice(0, 3).join(" / "),
  },
  {
    label: "Build mode",
    title: capabilityGroups[1].title,
    description: capabilityGroups[1].items.slice(0, 3).join(" / "),
  },
  {
    label: "Experience focus",
    title: capabilityGroups[2].title,
    description: capabilityGroups[2].items.slice(0, 3).join(" / "),
  },
];

export default function WelcomeAnimation({ onAnimationComplete }) {
  const reduceMotion = useReducedMotion();
  const completionTimerRef = useRef(null);
  const [showActions, setShowActions] = useState(reduceMotion);
  const [shouldExit, setShouldExit] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.38);
  const smoothX = useSpring(pointerX, {
    stiffness: 110,
    damping: 20,
    mass: 0.6,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 110,
    damping: 20,
    mass: 0.6,
  });

  const glowX = useTransform(smoothX, (value) => `${Math.round(value * 100)}%`);
  const glowY = useTransform(smoothY, (value) => `${Math.round(value * 100)}%`);
  const backdrop = useMotionTemplate`
    radial-gradient(circle at ${glowX} ${glowY}, rgba(255, 220, 132, 0.28), transparent 34%),
    radial-gradient(circle at 18% 20%, rgba(239, 179, 7, 0.22), transparent 28%),
    linear-gradient(135deg, rgba(7, 9, 14, 0.98), rgba(15, 18, 28, 0.95) 42%, rgba(4, 5, 9, 0.99))
  `;

  const heroX = useTransform(smoothX, (value) => (value - 0.5) * 38);
  const heroY = useTransform(smoothY, (value) => (value - 0.5) * -28);
  const orbOneX = useTransform(smoothX, (value) => (value - 0.5) * 180);
  const orbOneY = useTransform(smoothY, (value) => (value - 0.5) * -120);
  const orbTwoX = useTransform(smoothX, (value) => (value - 0.5) * -150);
  const orbTwoY = useTransform(smoothY, (value) => (value - 0.5) * 120);
  const cardLayouts = [
    {
      className: styles.leftCard,
      x: useTransform(smoothX, (value) => (value - 0.5) * -64),
      y: useTransform(smoothY, (value) => (value - 0.5) * 26),
    },
    {
      className: styles.topCard,
      x: useTransform(smoothX, (value) => (value - 0.5) * 72),
      y: useTransform(smoothY, (value) => (value - 0.5) * -24),
    },
    {
      className: styles.bottomCard,
      x: useTransform(smoothX, (value) => (value - 0.5) * 56),
      y: useTransform(smoothY, (value) => (value - 0.5) * 30),
    },
  ];

  useEffect(() => {
    const revealTimer = window.setTimeout(
      () => setShowActions(true),
      reduceMotion ? 180 : CTA_REVEAL_MS,
    );
    const autoExitTimer = window.setTimeout(
      () => setShouldExit(true),
      reduceMotion ? 2200 : AUTO_EXIT_MS,
    );

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(autoExitTimer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!shouldExit || isExiting) {
      return undefined;
    }

    setIsExiting(true);
    return undefined;
  }, [isExiting, shouldExit]);

  useEffect(() => {
    if (!isExiting) {
      return undefined;
    }

    completionTimerRef.current = window.setTimeout(
      onAnimationComplete,
      reduceMotion ? 160 : EXIT_DURATION_MS,
    );

    return () => {
      if (completionTimerRef.current) {
        window.clearTimeout(completionTimerRef.current);
      }
    };
  }, [isExiting, onAnimationComplete, reduceMotion]);

  useEffect(() => {
    return () => {
      if (completionTimerRef.current) {
        window.clearTimeout(completionTimerRef.current);
      }
    };
  }, []);

  const updatePointer = (clientX, clientY) => {
    const width = window.innerWidth || 1;
    const height = window.innerHeight || 1;

    pointerX.set(Math.min(Math.max(clientX / width, 0), 1));
    pointerY.set(Math.min(Math.max(clientY / height, 0), 1));
  };

  return (
    <motion.section
      className={styles.shell}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
      animate={
        isExiting
          ? { opacity: 0, scale: 1.04, filter: "blur(16px)" }
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      transition={
        reduceMotion
          ? { duration: 0.18 }
          : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
      }
      onPointerMove={(event) => updatePointer(event.clientX, event.clientY)}
      onPointerLeave={() => {
        pointerX.set(0.5);
        pointerY.set(0.38);
      }}
    >
      <motion.div className={styles.backdrop} style={{ background: backdrop }} />
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.scanline} aria-hidden="true" />
      <div className={styles.frame} aria-hidden="true" />

      <motion.div
        className={`${styles.orb} ${styles.orbOne}`}
        style={{ x: orbOneX, y: orbOneY }}
        aria-hidden="true"
      />
      <motion.div
        className={`${styles.orb} ${styles.orbTwo}`}
        style={{ x: orbTwoX, y: orbTwoY }}
        aria-hidden="true"
      />

      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className={styles.particle}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            reduceMotion
              ? { opacity: 0.2, scale: 1 }
              : {
                  opacity: [0.08, 0.42, 0.14],
                  scale: [0.85, 1.16, 0.94],
                  x: [0, particle.driftX, particle.driftX * -0.45, 0],
                  y: [0, particle.driftY, particle.driftY * -0.3, 0],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      ))}

      {FLOATING_CARDS.map((card, index) => (
        <motion.div
          key={card.title}
          className={`${styles.floatingCard} ${cardLayouts[index].className}`}
          style={{ x: cardLayouts[index].x, y: cardLayouts[index].y }}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.35 + index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.cardLabel}>{card.label}</span>
          <span className={styles.cardTitle}>{card.title}</span>
          <p className={styles.cardDescription}>{card.description}</p>
        </motion.div>
      ))}

      <div className={styles.content}>
        <motion.div
          className={styles.panel}
          style={{ x: heroX, y: heroY }}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className={styles.badge}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className={styles.badgeDot} aria-hidden="true" />
            {activeHero.eyebrow}
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Mark
            <span className={styles.titleAccent}>Maingi</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {activeHero.intro}
          </motion.p>

          <div className={styles.roleRow}>
            {activeHero.roles.map((role, index) => (
              <motion.span
                key={role}
                className={styles.rolePill}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : 0.48 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {role}
              </motion.span>
            ))}
          </div>

          <AnimatePresence>
            {showActions ? (
              <motion.div
                className={styles.actions}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => setShouldExit(true)}
                >
                  Enter portfolio
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>
                <p className={styles.supportText}>
                  Move across the scene to shift the light, or let the intro
                  glide straight into the work.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>

      <button
        type="button"
        className={styles.skipButton}
        onClick={() => setShouldExit(true)}
      >
        Skip intro
      </button>

      <div className={styles.dock}>
        <div className={styles.progressRail} aria-hidden="true">
          <motion.span
            className={styles.progressFill}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: (reduceMotion ? 2200 : AUTO_EXIT_MS) / 1000,
              ease: "linear",
            }}
          />
        </div>
        <span className={styles.hint}>Move to explore / auto entering</span>
      </div>
    </motion.section>
  );
}
