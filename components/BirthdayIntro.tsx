"use client";
import { useMotionPreference as useReducedMotion } from "./useMotionPreference";
import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { birthdayData as d, formatBirthday } from "@/data/birthdayData";
import { blurReveal, fadeIn } from "./animations";
export function BirthdayIntro({
  entered,
  onEnter,
}: {
  entered: boolean;
  onEnter: () => void;
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (entered) {
      const timer = setTimeout(
        () => heading.current?.focus({ preventScroll: true }),
        reduced ? 0 : 500,
      );
      return () => clearTimeout(timer);
    }
  }, [entered, reduced]);
  return (
    <section
      id="intro"
      className={"intro section " + (entered ? "is-entered" : "")}
      aria-label={d.title}
    >
      <header className="intro-header">
        <span className="brand">
          <Sparkles size={17} strokeWidth={1} />
          {d.title}
        </span>
        <time dateTime={d.birthdayDate} className="date-label">
          {formatBirthday(d.birthdayDate)}
        </time>
      </header>
      <div className="orbit-art" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="orbit-sun" />
        <span className="orbit-star">✧</span>
      </div>
      <div className="intro-content">
        <p className="eyebrow intro-eyebrow">{d.copy.dedication}</p>
        <AnimatePresence mode="wait">
          {!entered ? (
            <motion.div
              key="invitation"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              variants={reduced ? fadeIn : blurReveal}
            >
              <p className="opening-message">{d.openingMessage}</p>
              <h1 className="universe-title">
                {d.title.split(" ").slice(0, -1).join(" ")}
                <br />
                <em>{d.title.split(" ").at(-1)}</em>
                <span className="title-star" aria-hidden="true">
                  ✦
                </span>
              </h1>
              <p className="intro-caption">
                {d.copy.introCaption.replaceAll("{name}", d.girlfriendName)}
              </p>
              <button className="button primary-button" onClick={onEnter}>
                {d.copy.enter}
                <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="birthday"
              initial="hidden"
              animate="visible"
              variants={reduced ? fadeIn : blurReveal}
            >
              <p className="opening-message">{d.copy.birthdayGreeting}</p>
              <h1 ref={heading} tabIndex={-1} className="birthday-name">
                {d.girlfriendName}
                <span className="name-period">.</span>
              </h1>
              <p className="intro-caption personal-intro">{d.introMessage}</p>
              <a className="button primary-button" href="#story">
                {d.copy.continue}
                <ArrowDown size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="intro-bottom">
        <span className="tiny-star" aria-hidden="true">
          ✧
        </span>
        <p>{d.copy.scroll}</p>
        {entered && (
          <a href="#story" aria-label="Scroll to our story">
            <ArrowDown size={17} />
          </a>
        )}
      </div>
    </section>
  );
}
