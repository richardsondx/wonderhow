"use client";

// How a plant grows in a warm storybook style: seed -> water -> sun+root -> sprout -> flower.
// Soil cross-section at the bottom, sky above.

const INK = "#3A2E2A";

export default function PlantScene({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="A seed growing into a flower in the soil">
      <defs>
        <linearGradient id="plSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B7E3F0" />
          <stop offset="70%" stopColor="#E6F4E8" />
          <stop offset="100%" stopColor="#FDF4DE" />
        </linearGradient>
        <linearGradient id="plSoil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9A6B4F" />
          <stop offset="100%" stopColor="#7A5238" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="800" height="520" fill="url(#plSky)" />

      {/* sun */}
      <g opacity={step >= 2 ? 1 : 0.5}>
        <g className={step >= 2 ? "sun-spin" : ""} style={{ transformOrigin: "650px 100px" }} stroke="#F5B942" strokeWidth="8" strokeLinecap="round">
          {[...Array(8)].map((_, i) => {
            const a = (i * Math.PI) / 4;
            return <line key={i} x1={650 + Math.cos(a) * 56} y1={100 + Math.sin(a) * 56} x2={650 + Math.cos(a) * 74} y2={100 + Math.sin(a) * 74} />;
          })}
        </g>
        <circle cx="650" cy="100" r="44" fill="#FFD66B" stroke={INK} strokeWidth="4" />
        <circle cx="637" cy="93" r="4.5" fill={INK} /><circle cx="663" cy="93" r="4.5" fill={INK} />
        <path d="M637 111 q13 11 26 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* cloud */}
      <g fill="#fff" stroke={INK} strokeWidth="4" opacity="0.95">
        <ellipse cx="180" cy="80" rx="50" ry="25" />
        <ellipse cx="223" cy="70" rx="38" ry="23" />
        <ellipse cx="145" cy="70" rx="32" ry="20" />
      </g>

      {/* rain on step 1 */}
      {step === 1 && (
        <g stroke="#4AA3E8" strokeWidth="7" strokeLinecap="round" className="rain">
          <line x1="330" y1="120" x2="322" y2="170" /><line x1="400" y1="120" x2="392" y2="170" />
          <line x1="470" y1="120" x2="462" y2="170" /><line x1="365" y1="190" x2="357" y2="240" />
          <line x1="435" y1="190" x2="427" y2="240" />
        </g>
      )}

      {/* soil with a soft rolling top */}
      <path d="M0 330 Q 400 312 800 330 L 800 520 L 0 520 Z" fill="url(#plSoil)" />
      <path d="M0 330 Q 400 312 800 330" fill="none" stroke={INK} strokeWidth="4" opacity="0.4" />
      <g fill="#6E452C" opacity="0.85">
        <ellipse cx="120" cy="400" rx="26" ry="15" /><ellipse cx="680" cy="440" rx="30" ry="17" />
        <ellipse cx="250" cy="470" rx="24" ry="13" /><ellipse cx="560" cy="400" rx="22" ry="13" />
      </g>
      {/* grass tufts */}
      <g stroke="#4E9B52" strokeWidth="5" strokeLinecap="round">
        <path d="M80 330 q6 -20 -4 -32 M96 330 q2 -22 12 -30" fill="none" />
        <path d="M700 330 q6 -20 -4 -32 M716 330 q2 -22 12 -30" fill="none" />
      </g>
      {/* little stones */}
      <g fill="#C9BBA8" stroke={INK} strokeWidth="3">
        <ellipse cx="200" cy="430" rx="12" ry="9" /><ellipse cx="620" cy="470" rx="14" ry="10" />
      </g>

      {/* the seed (visible until the sprout takes over) */}
      {step <= 2 && (
        <g className={step === 1 ? "seed-wake" : ""} style={{ transformOrigin: "400px 400px" }}>
          <ellipse cx="400" cy="400" rx="32" ry="24" fill="#D09A5B" stroke={INK} strokeWidth="5" />
          <path d="M388 392 q10 -8 22 -2" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          {step === 0 && <text x="400" y="298" textAnchor="middle" fontSize="24" fontWeight="800" fill={INK} className="wh-label">a seed waits</text>}
        </g>
      )}

      {/* root growing down on step 2 */}
      {step >= 2 && (
        <g fill="none" stroke="#EFE3CC" strokeWidth="10" strokeLinecap="round" className="root-grow">
          <path d="M400 415 q-6 40 -26 62" />
          <path d="M400 415 q10 36 30 58" />
          <path d="M400 415 q0 44 0 78" />
        </g>
      )}

      {/* sprout + stem */}
      {step >= 3 && (
        <g className="stem-grow" style={{ transformOrigin: "400px 330px" }}>
          <path d="M400 330 q-4 -70 2 -130" fill="none" stroke="#4E9B52" strokeWidth="14" strokeLinecap="round" />
          {/* leaves */}
          <g className="sway" style={{ transformOrigin: "400px 250px" }}>
            <ellipse cx="360" cy="250" rx="40" ry="19" fill="#66BE6A" stroke={INK} strokeWidth="4" transform="rotate(-24 360 250)" />
            <ellipse cx="442" cy="225" rx="40" ry="19" fill="#66BE6A" stroke={INK} strokeWidth="4" transform="rotate(24 442 225)" />
          </g>
        </g>
      )}

      {/* flower on step 4 */}
      {step >= 4 && (
        <g className="bloom" style={{ transformOrigin: "402px 200px" }}>
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="402" cy="158" rx="23" ry="42" fill="#F78FB3" stroke={INK} strokeWidth="4" transform={`rotate(${a} 402 200)`} />
          ))}
          <circle cx="402" cy="200" r="24" fill="#FFD66B" stroke={INK} strokeWidth="5" />
          <circle cx="394" cy="196" r="3.6" fill={INK} /><circle cx="410" cy="196" r="3.6" fill={INK} />
          <path d="M394 208 q8 8 16 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      )}

      {/* bee on step 4 */}
      {step >= 4 && (
        <g className="bee">
          <ellipse cx="0" cy="0" rx="24" ry="17" fill="#FFD66B" stroke={INK} strokeWidth="4" />
          <line x1="-8" y1="-15" x2="-8" y2="15" stroke={INK} strokeWidth="6" />
          <line x1="8" y1="-15" x2="8" y2="15" stroke={INK} strokeWidth="6" />
          <ellipse cx="-4" cy="-22" rx="13" ry="9" fill="#C9E7F7" stroke={INK} strokeWidth="3" className="wing" />
          <ellipse cx="12" cy="-22" rx="13" ry="9" fill="#C9E7F7" stroke={INK} strokeWidth="3" className="wing" style={{ animationDelay: "0.15s" }} />
          <circle cx="-15" cy="-4" r="3" fill={INK} />
        </g>
      )}

      {/* step labels */}
      <g fontSize="21" fontWeight="800" fill={INK} className="wh-label">
        {step === 1 && <text x="400" y="285" textAnchor="middle">rain soaks in</text>}
        {step === 2 && <text x="400" y="285" textAnchor="middle">the root grows down</text>}
        {step === 3 && <text x="400" y="130" textAnchor="middle">first leaves</text>}
        {step === 4 && <text x="400" y="88" textAnchor="middle">a flower opens</text>}
      </g>
    </svg>
  );
}
