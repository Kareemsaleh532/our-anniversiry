"use client";
import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { StarBackground } from "./StarBackground";
import { BirthdayIntro } from "./BirthdayIntro";
import { StorySection } from "./StorySection";
import { LoveReasons } from "./LoveReasons";
import { MemoryGallery } from "./MemoryGallery";
import { GiftSurprise } from "./GiftSurprise";
import { LoveLetter } from "./LoveLetter";
import { FinalSurprise } from "./FinalSurprise";
import { ScrollProgress } from "./ScrollProgress";
export function Universe() {
  const [entered, setEntered] = useState(false);
  return (
    <MotionConfig reducedMotion="user">
      <StarBackground />
      <a className="skip-link" href="#story" onClick={() => setEntered(true)}>
        Skip to our story
      </a>
      <main id="universe">
        <BirthdayIntro entered={entered} onEnter={() => setEntered(true)} />
        {entered && (
          <>
            <StorySection />
            <LoveReasons />
            <MemoryGallery />
            <GiftSurprise />
            <LoveLetter />
            <FinalSurprise />
          </>
        )}
      </main>
      {entered && <ScrollProgress />}
      <noscript>
        <div className="no-script">
          This little universe needs JavaScript to open its surprises. Please
          enable it and reload.
        </div>
      </noscript>
    </MotionConfig>
  );
}
