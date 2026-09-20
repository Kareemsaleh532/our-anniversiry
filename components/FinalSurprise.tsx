"use client";
import { useMotionPreference as useReducedMotion } from "./useMotionPreference";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { birthdayData as d } from "@/data/birthdayData";
import { Reveal, ChapterLabel } from "./Reveal";
import type { CSSProperties } from "react";
export function FinalSurprise() {
  const [opened, setOpened] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const alreadyOpened = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!opened) return;
    heading.current?.focus({ preventScroll: true });
    const timer = setTimeout(() => setCelebrating(false), 5000);
    return () => clearTimeout(timer);
  }, [opened]);
  function open() {
    if (alreadyOpened.current) return;
    alreadyOpened.current = true;
    setOpened(true);
    setCelebrating(true);
  }
  return (
    <section
      id="final"
      className={"section final-section " + (opened ? "final-opened" : "")}
    >
      <div className="final-glow" aria-hidden="true" />
      <div className="content-width text-center">
        <Reveal>
          <ChapterLabel number="06">{d.copy.chapters[6]}</ChapterLabel>
        </Reveal>
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div key="closed" exit={{ opacity: 0 }}>
              <Reveal>
                <span className="final-star" aria-hidden="true">
                  ✧
                </span>
                <h2 className="section-heading centered-heading">
                  {d.copy.finalPrelude}
                </h2>
                <button className="button primary-button" onClick={open}>
                  {d.copy.finalAction}
                  <ArrowUpRight size={17} />
                </button>
              </Reveal>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              onAnimationComplete={() =>
                heading.current?.focus({ preventScroll: true })
              }
            >
              <Sparkles
                className="final-icon"
                strokeWidth={0.8}
                size={36}
                aria-hidden="true"
              />
              <h2 className="final-message" tabIndex={-1} ref={heading}>
                {d.finalMessage}
              </h2>
              <p className="final-wish">{d.copy.finalWish}</p>
              <span className="final-love" aria-hidden="true">
                ♡
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {celebrating && !reduced && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 34 }, (_, i) => (
            <i
              key={i}
              style={
                {
                  "--left": ((i * 37) % 100) + "%",
                  "--drift": (i % 2 ? 1 : -1) * (30 + i * 3) + "px",
                  "--spin": (i % 2 ? 480 : -560) + "deg",
                  "--delay": (i % 9) * 0.09 + "s",
                  "--color": ["#d6b36a", "#dfa6b5", "#fff8f0"][i % 3],
                } as CSSProperties
              }
            />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <span
              className="floating-heart"
              key={"heart" + i}
              style={{ left: 15 + i * 17 + "%", animationDelay: i * 0.2 + "s" }}
            >
              <Heart size={13 + i * 2} strokeWidth={1} />
            </span>
          ))}
        </div>
      )}
      <footer className="final-footer">
        <span className="footer-rule" />
        <p>{d.copy.footer}</p>
        <span className="footer-rule" />
      </footer>
    </section>
  );
}
