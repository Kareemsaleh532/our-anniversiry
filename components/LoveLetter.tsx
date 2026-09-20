import { birthdayData as d, formatBirthday } from "@/data/birthdayData";
import { Reveal, ChapterLabel } from "./Reveal";
export function LoveLetter() {
  return (
    <section id="letter" className="section letter-section">
      <div className="content-width">
        <Reveal>
          <ChapterLabel number="05">{d.copy.chapters[5]}</ChapterLabel>
          <h2 className="section-heading">{d.copy.letterHeading}</h2>
          <p className="body-copy section-note">{d.copy.letterNote}</p>
        </Reveal>
        <Reveal className="letter-wrap">
          <article className="letter-paper">
            <div className="letter-top">
              <span aria-hidden="true">✧</span>
              <time dateTime={d.birthdayDate}>
                {formatBirthday(d.birthdayDate)}
              </time>
            </div>
            <h3>
              {d.copy.salutation} {d.girlfriendName},
            </h3>
            {d.letter
              .split(/\n\s*\n/)
              .filter(Boolean)
              .map((paragraph, i) => (
                <Reveal key={i}>
                  <p className="letter-paragraph">{paragraph}</p>
                </Reveal>
              ))}
            <Reveal>
              <div className="letter-signature">
                <span>{d.copy.signature}</span>
                <p>{d.senderName}</p>
                <svg viewBox="0 0 180 20" aria-hidden="true">
                  <path d="M4 13C43 4 112 4 170 9M18 18C58 10 103 10 135 12" />
                </svg>
              </div>
            </Reveal>
            <span className="paper-seal" aria-hidden="true">
              ✦
            </span>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
