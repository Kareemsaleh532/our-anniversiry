import { birthdayData as d } from "@/data/birthdayData";
import { Reveal, ChapterLabel } from "./Reveal";
export function StorySection() {
  return (
    <section id="story" className="section story-section">
      <div className="content-width">
        <Reveal>
          <ChapterLabel number="01">{d.copy.chapters[1]}</ChapterLabel>
          <h2 className="section-heading story-heading">
            {d.copy.storyHeading}
          </h2>
        </Reveal>
        <div className="story-timeline">
          <span className="timeline-dot" />
          <Reveal>
            <blockquote>{d.copy.storyQuote}</blockquote>
            <p className="body-copy">{d.copy.storyNote}</p>
            <span className="story-end" aria-hidden="true">
              ✧
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
