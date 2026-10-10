"use client";

// How a plant grows: seed -> water -> sun+root -> sprout -> flower.
// Soil cross-section at the bottom, sky above.

const INK = "#3A2E2A";

export default function PlantScene({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="A seed growing into a flower in the soil">
      {/* sun */}
      <g opacity={step >= 2 ? 1 : 0.45}>
        <g className={step >= 2 ? "sun-spin" : ""} style={{ transformOrigin: "650px 100px" }} stroke="#FFB800" strokeWidth="10" strokeLinecap="round">
          {[...Array(8)].map((_, i) => {
            const a = (i * Math.PI) / 4;
            return <line key={i} x1={650 + Math.cos(a) * 58} y1={100 + Math.sin(a) * 58} x2={650 + Math.cos(a) * 78} y2={100 + Math.sin(a) * 78} />;
          })}
        </g>
        <circle cx="650" cy="100" r="48" fill="#FFD93D" stroke={INK} strokeWidth="6" />
        <circle cx="636" cy="92" r="5" fill={INK} /><circle cx="664" cy="92" r="5" fill={INK} />
        <path d="M636 112 q14 12 28 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      </g>
      {/* cloud */}
      <g fill="#fff" stroke={INK} strokeWidth="5" opacity="0.95">
        <ellipse cx="180" cy="80" rx="52" ry="26" />
        <ellipse cx="225" cy="70" rx="40" ry="24" />
      </g>

      {/* rain on step 1 */}
      {step === 1 && (
        <g stroke="#2E9BF0" strokeWidth="9" strokeLinecap="round" className="rain">
          <line x1="330" y1="120" x2="322" y2="170" /><line x1="400" y1="120" x2="392" y2="170" />
          <line x1="470" y1="120" x2="462" y2="170" /><line x1="365" y1="190" x2="357" y2="240" />
          <line x1="435" y1="190" x2="427" y2="240" />
        </g>
      )}

      {/* soil */}
      <rect x="0" y="330" width="800" height="190" fill="#8A5A3B" />
      <rect x="0" y="330" width="800" height="12" fill={INK} opacity="0.2" />
      <g fill="#6E452C">
        <ellipse cx="120" cy="400" rx="26" ry="16" /><ellipse cx="680" cy="440" rx="30" ry="18" />
        <ellipse cx="250" cy="470" rx="24" ry="14" /><ellipse cx="560" cy="400" rx="22" ry="14" />
      </g>
      {/* grass tufts */}
      <g stroke="#3FA34D" strokeWidth="7" strokeLinecap="round">
        <path d="M80 330 q6 -22 -4 -34 M96 330 q2 -24 12 -32" fill="none" />
        <path d="M700 330 q6 -22 -4 -34 M716 330 q2 -24 12 -32" fill="none" />
      </g>

      {/* the seed (visible until the sprout takes over) */}
      {step <= 2 && (
        <g className={step === 1 ? "seed-wake" : ""} style={{ transformOrigin: "400px 400px" }}>
          <ellipse cx="400" cy="400" rx="34" ry="26" fill="#C98A4B" stroke={INK} strokeWidth="6" />
          <path d="M388 392 q10 -8 22 -2" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          {step === 0 && <text x="400" y="300" textAnchor="middle" fontSize="26" fontWeight="800" fill={INK} className="wh-label">a seed waits</text>}
        </g>
      )}

      {/* root growing down on step 2 */}
      {step >= 2 && (
        <g fill="none" stroke="#E8DCC8" strokeWidth="12" strokeLinecap="round" className="root-grow">
          <path d="M400 415 q-6 40 -26 62" />
          <path d="M400 415 q10 36 30 58" />
          <path d="M400 415 q0 44 0 78" />
        </g>
      )}

      {/* sprout + stem */}
      {step >= 3 && (
        <g className="stem-grow" style={{ transformOrigin: "400px 330px" }}>
          <path d="M400 330 q-4 -70 2 -130" fill="none" stroke="#3FA34D" strokeWidth="16" strokeLinecap="round" />
          {/* leaves */}
          <g className="sway" style={{ transformOrigin: "400px 250px" }}>
            <ellipse cx="360" cy="250" rx="42" ry="20" fill="#57B866" stroke={INK} strokeWidth="6" transform="rotate(-24 360 250)" />
            <ellipse cx="442" cy="225" rx="42" ry="20" fill="#57B866" stroke={INK} strokeWidth="6" transform="rotate(24 442 225)" />
          </g>
        </g>
      )}

      {/* flower on step 4 */}
      {step >= 4 && (
        <g className="bloom" style={{ transformOrigin: "402px 200px" }}>
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="402" cy="158" rx="24" ry="44" fill="#FF7AB8" stroke={INK} strokeWidth="5" transform={`rotate(${a} 402 200)`} />
          ))}
          <circle cx="402" cy="200" r="26" fill="#FFD93D" stroke={INK} strokeWidth="6" />
          <circle cx="394" cy="196" r="4" fill={INK} /><circle cx="410" cy="196" r="4" fill={INK} />
          <path d="M394 208 q8 8 16 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        </g>
      )}

      {/* bee on step 4 */}
      {step >= 4 && (
        <g className="bee" >
          <ellipse cx="0" cy="0" rx="26" ry="18" fill="#FFD93D" stroke={INK} strokeWidth="5" />
          <line x1="-8" y1="-16" x2="-8" y2="16" stroke={INK} strokeWidth="7" />
          <line x1="8" y1="-16" x2="8" y2="16" stroke={INK} strokeWidth="7" />
          <ellipse cx="-4" cy="-24" rx="14" ry="10" fill="#BFE9FF" stroke={INK} strokeWidth="4" className="wing" />
          <ellipse cx="12" cy="-24" rx="14" ry="10" fill="#BFE9FF" stroke={INK} strokeWidth="4" className="wing" style={{ animationDelay: "0.15s" }} />
          <circle cx="-16" cy="-4" r="3.4" fill={INK} />
        </g>
      )}

      {/* step labels */}
      <g fontSize="22" fontWeight="800" fill={INK} className="wh-label">
        {step === 1 && <text x="400" y="285" textAnchor="middle">rain falls</text>}
        {step === 2 && <text x="400" y="285" textAnchor="middle">the root grows down</text>}
        {step === 3 && <text x="400" y="130" textAnchor="middle">first leaves</text>}
        {step === 4 && <text x="400" y="90" textAnchor="middle">a flower opens</text>}
      </g>
    </svg>
  );
}
