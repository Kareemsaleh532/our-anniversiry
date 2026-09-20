import { birthdayData as d } from "@/data/birthdayData";
import { Reveal, ChapterLabel } from "./Reveal";
export function LoveReasons() {
  return (
    <section id="reasons" className="section reasons-section">
      <div className="content-width">
        <Reveal>
          <ChapterLabel number="02">{d.copy.chapters[2]}</ChapterLabel>
          <h2 className="section-heading">{d.copy.reasonsHeading}</h2>
          <p className="body-copy section-note">{d.copy.reasonsNote}</p>
        </Reveal>
        <div className="reasons-grid">
          {d.reasonsILoveYou.map((reason, index) => (
            <Reveal
              key={index}
              className={"reason-wrap reason-" + index}
              delay={(index % 2) * 0.12}
            >
              <article className="reason-card">
                <span className="reason-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{reason}</p>
                <span className="reason-spark" aria-hidden="true">
                  ✧
                </span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="section-afterword">{d.copy.reasonsFooter}</p>
        </Reveal>
      </div>
    </section>
  );
}
