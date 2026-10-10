"use client";

// StoryStage: the visual stage for freshly generated explanations.
// Shows a real AI-drawn illustration per step; while it draws, a playful
// icon medallion holds the place.

import { iconFor } from "./icons";

const INK = "#3A2E2A";

type Props = {
  step: number;
  icon: string;
  tint: string;
  /** illustration URL once drawn, null while pending */
  image: string | null;
};

export default function StoryStage({ step, icon, tint, image }: Props) {
  const Icon = iconFor(icon);
  const anims = ["float", "spin-slow", "bounce-soft", "sway", "pulse-big"];
  const anim = anims[step % anims.length];

  if (image) {
    return (
      <div className="story-illus" role="img" aria-label="Illustration for this step">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" />
        <div className="story-illus-badge">
          <span>{step + 1}</span>
        </div>
      </div>
    );
  }

  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="Wally is drawing this picture">
      <rect x="0" y="0" width="800" height="520" fill={tint} />
      <g fill={INK} opacity="0.12">
        {[
          [70, 80], [730, 60], [120, 430], [690, 440], [400, 60], [60, 260], [745, 250],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={10 + (i % 3) * 5} />
        ))}
      </g>
      <g fill="#fff" opacity="0.5">
        {[[200, 140], [600, 120], [150, 350], [650, 360]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={26} className="bob" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      </g>
      <g className={`stage-anim-${anim}`} style={{ transformOrigin: "400px 260px" }}>
        <circle cx="400" cy="260" r="150" fill="#fff" stroke={INK} strokeWidth="8" />
        <circle cx="400" cy="260" r="150" fill="none" stroke={INK} strokeWidth="3" strokeDasharray="4 18" opacity="0.35" />
        <g transform="translate(325 185)">
          <Icon size={150} color={INK} strokeWidth={1.8} />
        </g>
      </g>
      <g>
        <rect x="300" y="428" width="200" height="56" rx="28" fill="#FFD93D" stroke={INK} strokeWidth="6" className="bob" />
        <text x="400" y="466" textAnchor="middle" fontSize="30" fontWeight="900" fill={INK} className="wh-label">
          Drawing...
        </text>
      </g>
    </svg>
  );
}
