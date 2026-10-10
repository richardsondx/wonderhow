"use client";

// StoryStage: the visual stage for freshly generated explanations.
// A giant animated icon on a playful backdrop, since brand-new topics
// get a storybook illustration instead of a hand-built scene.

import { iconFor } from "./icons";

const INK = "#3A2E2A";

export default function StoryStage({ step, icon, tint }: { step: number; icon: string; tint: string }) {
  const Icon = iconFor(icon);
  const anims = ["float", "spin-slow", "bounce-soft", "sway", "pulse-big"];
  const anim = anims[step % anims.length];
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="Storybook illustration">
      <rect x="0" y="0" width="800" height="520" fill={tint} />
      {/* confetti dots */}
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
      {/* big icon medallion */}
      <g className={`stage-anim-${anim}`} style={{ transformOrigin: "400px 260px" }}>
        <circle cx="400" cy="260" r="150" fill="#fff" stroke={INK} strokeWidth="8" />
        <circle cx="400" cy="260" r="150" fill="none" stroke={INK} strokeWidth="3" strokeDasharray="4 18" opacity="0.35" />
        <g transform="translate(325 185)">
          <Icon size={150} color={INK} strokeWidth={1.8} />
        </g>
      </g>
      {/* step badge */}
      <g>
        <circle cx="400" cy="455" r="40" fill="#FFD93D" stroke={INK} strokeWidth="6" />
        <text x="400" y="470" textAnchor="middle" fontSize="42" fontWeight="900" fill={INK}>{step + 1}</text>
      </g>
    </svg>
  );
}
