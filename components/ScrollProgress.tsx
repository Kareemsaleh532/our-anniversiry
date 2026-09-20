"use client";
import { useEffect, useState } from "react";
import { birthdayData as d } from "@/data/birthdayData";
const ids = [
  "intro",
  "story",
  "reasons",
  "memories",
  "gift",
  "letter",
  "final",
];
export function ScrollProgress() {
  const [active, setActive] = useState("intro");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -45% 0px" },
    );
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="scroll-progress" aria-label="Chapters">
      {ids.map((id, i) => (
        <a
          key={id}
          href={"#" + id}
          aria-label={d.copy.chapters[i]}
          aria-current={active === id ? "step" : undefined}
        >
          <span className="progress-label">{d.copy.chapters[i]}</span>
          <span className="progress-dot" />
        </a>
      ))}
    </nav>
  );
}
