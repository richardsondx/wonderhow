"use client";

// Chunky fire truck.
// step 0: truck + flashing lights   1: water tank fills   2: pump spins
// step 3: hose sprays, fire shrinks  4: ladder extends tall

const INK = "#3A2E2A";

export default function FireTruckScene({ step }: { step: number }) {
  const fireOut = step >= 4;
  const fireSmall = step === 3;
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="Cartoon fire truck with ladder, water tank and hose">
      {/* sky */}
      <circle cx="90" cy="80" r="40" fill="#FFD93D" stroke={INK} strokeWidth="6" />
      <g fill="#fff" stroke={INK} strokeWidth="5">
        <ellipse cx="640" cy="70" rx="52" ry="24" />
        <ellipse cx="685" cy="62" rx="40" ry="22" />
      </g>
      {/* ground */}
      <rect x="0" y="440" width="800" height="80" fill="#8FD694" />
      <rect x="0" y="440" width="800" height="10" fill={INK} opacity="0.15" />

      {/* the fire (right side) */}
      {!fireOut && (
        <g className={fireSmall ? "fire-small" : "fire-big"} style={{ transformOrigin: "660px 440px" }}>
          <path
            d="M610 440 q-8 -60 25 -95 q5 30 22 38 q-2 -45 20 -70 q30 35 33 80 q25 -12 20 -45 q38 40 30 92 z"
            fill="#FF7A1A" stroke={INK} strokeWidth="6"
          />
          <path d="M635 440 q-5 -35 15 -55 q3 18 14 24 q0 -28 13 -42 q18 22 19 48 q14 -8 12 -26 q22 24 17 51 z" fill="#FFD93D" />
        </g>
      )}
      {fireOut && (
        <g stroke={INK} strokeWidth="6" strokeLinecap="round" opacity="0.7">
          <path d="M640 400 q10 -18 0 -36" fill="none" stroke="#B9B2A8" />
          <path d="M672 405 q-8 -16 2 -32" fill="none" stroke="#B9B2A8" />
        </g>
      )}

      {/* water arc from hose to fire */}
      {step === 3 && (
        <g fill="none" stroke="#2E9BF0" strokeWidth="16" strokeLinecap="round" className="water-arc">
          <path d="M300 350 Q 480 300 620 380" strokeDasharray="2 26" />
        </g>
      )}
      {step >= 4 && (
        <g fill="none" stroke="#2E9BF0" strokeWidth="14" strokeLinecap="round" className="water-arc">
          <path d="M470 130 Q 560 200 630 330" strokeDasharray="2 24" />
        </g>
      )}

      <g className="truck-bob">
        {/* ladder on top: extends on step 4 */}
        <g>
          <rect x="180" y={step >= 4 ? "120" : "250"} width="330" height="26" rx="10" fill="#C9CFD6" stroke={INK} strokeWidth="6" className="ladder" />
          {[...Array(step >= 4 ? 9 : 5)].map((_, i) => (
            <line
              key={i}
              x1={200 + i * 36} y1={step >= 4 ? "120" : "250"}
              x2={200 + i * 36} y2={step >= 4 ? "146" : "276"}
              stroke={INK} strokeWidth="5"
            />
          ))}
          <rect x="150" y={step >= 4 ? "112" : "242"} width="46" height="42" rx="10" fill="#8A93A0" stroke={INK} strokeWidth="6" />
          {step >= 4 && (
            <g className="firefighter">
              <circle cx="470" cy="92" r="16" fill="#FFD9B3" stroke={INK} strokeWidth="5" />
              <rect x="448" y="60" width="44" height="18" rx="9" fill="#F43F2E" stroke={INK} strokeWidth="5" />
              <rect x="452" y="106" width="36" height="30" rx="10" fill="#2E9BF0" stroke={INK} strokeWidth="5" />
            </g>
          )}
        </g>

        {/* truck body */}
        <rect x="120" y="290" width="330" height="120" rx="20" fill="#F43F2E" stroke={INK} strokeWidth="7" />
        <rect x="450" y="310" width="120" height="100" rx="16" fill="#F43F2E" stroke={INK} strokeWidth="7" />
        {/* cab window */}
        <path d="M470 318 h70 q14 0 14 14 v30 h-84 z" fill="#BFE9FF" stroke={INK} strokeWidth="6" />
        {/* stripe */}
        <rect x="120" y="352" width="450" height="22" fill="#FFD93D" stroke={INK} strokeWidth="5" />
        {/* water tank window */}
        <rect x="150" y="300" width="150" height="44" rx="12" fill="#fff" stroke={INK} strokeWidth="5" />
        <rect
          x="156" y={step >= 1 ? "308" : "340"} width="138" height={step >= 1 ? "30" : "0"}
          rx="8" fill="#2E9BF0" className="tank-fill"
        />
        <text x="225" y="292" textAnchor="middle" fontSize="20" fontWeight="800" fill={INK} className="wh-label">
          {step === 1 ? "GLUG GLUG" : "water tank"}
        </text>
        {/* pump */}
        <circle cx="360" cy="322" r="30" fill="#fff" stroke={INK} strokeWidth="6" />
        <g className={step === 2 ? "pump-spin" : ""} style={{ transformOrigin: "360px 322px" }}>
          <path d="M360 322 L360 300 M360 322 L378 332 M360 322 L342 332" stroke={INK} strokeWidth="9" strokeLinecap="round" />
        </g>
        <circle cx="360" cy="322" r="8" fill={INK} />
        <text x="360" y="372" textAnchor="middle" fontSize="18" fontWeight="800" fill={INK} className="wh-label">pump</text>

        {/* light bar */}
        <rect x="440" y="282" width="140" height="30" rx="14" fill={INK} />
        <circle cx="475" cy="297" r="14" fill="#FF3B30" stroke="#fff" strokeWidth="4" className="light-red" />
        <circle cx="545" cy="297" r="14" fill="#2E9BF0" stroke="#fff" strokeWidth="4" className="light-blue" />

        {/* hose */}
        <path d="M300 400 Q 260 430 300 452" fill="none" stroke="#8A93A0" strokeWidth="18" strokeLinecap="round" />
        <rect x="284" y="336" width="32" height="70" rx="10" fill="#8A93A0" stroke={INK} strokeWidth="5" transform="rotate(18 300 370)" />

        {/* wheels */}
        {[210, 400, 520].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="420" r="44" fill="#3A2E2A" />
            <circle cx={cx} cy="420" r="24" fill="#C9CFD6" stroke={INK} strokeWidth="5" />
            <circle cx={cx} cy="420" r="8" fill={INK} />
          </g>
        ))}
        {/* smile */}
        <path d="M500 372 q16 12 32 0" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
}
