"use client";
import { useMotionPreference as useReducedMotion } from "./useMotionPreference";
import { useState } from "react";
import { motion } from "framer-motion";
import { birthdayData as d } from "@/data/birthdayData";
import { Reveal, ChapterLabel } from "./Reveal";
import type { CSSProperties } from "react";
export function GiftSurprise() {
  const [opened, setOpened] = useState(false);
  const reduced = useReducedMotion();
  return (
    <section id="gift" className="section gift-section">
      <div className="content-width text-center">
        <Reveal>
          <ChapterLabel number="04">{d.copy.chapters[4]}</ChapterLabel>
          <h2 className="section-heading centered-heading">
            {d.copy.giftHeading}
          </h2>
          <p className="body-copy section-note">{d.copy.giftNote}</p>
        </Reveal>
        <Reveal>
          <button
            className={"gift-button " + (opened ? "opened" : "")}
            onClick={() => setOpened(true)}
            disabled={opened}
            aria-label={opened ? d.copy.giftOpened : d.copy.giftAction}
            aria-expanded={opened}
            aria-controls="gift-message"
          >
            <span className="gift-halo" aria-hidden="true" />
            <span className="gift-illustration" aria-hidden="true">
              <span className="gift-body">
                <span className="gift-ribbon" />
                <span className="gift-monogram">✧</span>
              </span>
              <span className="gift-lid">
                <span className="bow bow-left" />
                <span className="bow bow-right" />
                <span className="lid-ribbon" />
              </span>
              {opened &&
                !reduced &&
                Array.from({ length: 12 }, (_, i) => (
                  <i
                    className="gift-particle"
                    key={i}
                    style={
                      {
                        "--x": Math.cos((i / 12) * Math.PI * 2) * 145 + "px",
                        "--y":
                          Math.sin((i / 12) * Math.PI * 2) * 130 - 80 + "px",
                        "--delay": (i % 3) * 0.05 + "s",
                      } as CSSProperties
                    }
                  />
                ))}
            </span>
            <span className="gift-prompt eyebrow">
              {opened ? d.copy.giftOpened : d.copy.giftAction}
            </span>
          </button>
        </Reveal>
        <div id="gift-message" className="gift-message" aria-live="polite">
          {opened && (
            <motion.blockquote
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduced ? 0 : 0.45, duration: 0.8 }}
            >
              <span aria-hidden="true">“</span>
              {d.copy.giftMessage}
            </motion.blockquote>
          )}
        </div>
      </div>
    </section>
  );
}
