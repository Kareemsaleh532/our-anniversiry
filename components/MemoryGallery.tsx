"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { birthdayData as d } from "@/data/birthdayData";
import { Reveal, ChapterLabel } from "./Reveal";
import { MemoryImage } from "./MemoryImage";
import { MemoryModal } from "./MemoryModal";
import type { CSSProperties } from "react";
const rotations = [-4, 3, -2, 4, -3];
export function MemoryGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <section id="memories" className="section memories-section">
      <div className="wide-width">
        <Reveal>
          <ChapterLabel number="03">{d.copy.chapters[3]}</ChapterLabel>
          <h2 className="section-heading">{d.copy.memoriesHeading}</h2>
          <p className="body-copy section-note">{d.copy.memoriesNote}</p>
        </Reveal>
        <div className="memory-grid">
          {d.memories.map((memory, i) => (
            <Reveal
              key={memory.image + i}
              className="polaroid-wrap"
              delay={(i % 3) * 0.1}
            >
              <button
                className="polaroid"
                style={
                  {
                    "--rotation": rotations[i % rotations.length] + "deg",
                  } as CSSProperties
                }
                onClick={() => setSelected(i)}
                aria-label={"Open memory: " + memory.title}
              >
                <MemoryImage memory={memory} />
                <span className="polaroid-caption">
                  <span>
                    <span className="memory-date">{memory.date}</span>
                    <span className="memory-title">{memory.title}</span>
                  </span>
                  <Plus size={18} strokeWidth={1} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {selected !== null && (
        <MemoryModal
          memories={d.memories}
          index={selected}
          onChange={setSelected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
