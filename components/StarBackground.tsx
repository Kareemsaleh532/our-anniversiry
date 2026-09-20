import type { CSSProperties } from "react";
export function StarBackground() {
  return (
    <div className="star-background" aria-hidden="true">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      {Array.from({ length: 48 }, (_, i) => (
        <i
          key={i}
          className="star"
          style={
            {
              left: ((i * 43 + 7) % 100) + "%",
              top: ((i * 31 + 11) % 100) + "%",
              "--star-size": (i % 5 === 0 ? 3 : 1.5) + "px",
              "--star-opacity": 0.2 + (i % 4) * 0.16,
              "--star-delay": -(i % 9) + "s",
              "--star-duration": 7 + (i % 6) + "s",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
