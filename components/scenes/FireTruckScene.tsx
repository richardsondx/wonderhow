"use client";

// Chunky fire truck in a warm storybook style.
// step 0: truck + flashing lights   1: water tank fills   2: pump spins
// step 3: hose sprays, fire shrinks  4: ladder extends tall

const INK = "#3A2E2A";

export default function FireTruckScene({ step }: { step: number }) {
  const fireOut = step >= 4;
  const fireSmall = step === 3;
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="Cartoon fire truck with ladder, water tank and hose">
      <defs>
        <linearGradient id="fireSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFDFF0" />
          <stop offset="70%" stopColor="#E9F4FA" />
          <stop offset="100%" stopColor="#FDF3E0" />
        </linearGradient>
        <linearGradient id="fireHill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A9D6A5" />
          <stop offset="100%" stopColor="#86C482" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="800" height="520" fill="url(#fireSky)" />
      <circle cx="90" cy="80" r="38" fill="#FFD66B" stroke={INK} strokeWidth="4" />
      <g fill="#FFFFFF" stroke={INK} strokeWidth="4" opacity="0.95">
        <ellipse cx="640" cy="70" rx="50" ry="23" />
        <ellipse cx="683" cy="62" rx="38" ry="21" />
        <ellipse cx="605" cy="62" rx="32" ry="19" />
      </g>

      {/* rolling hills */}
      <path d="M0 440 Q 220 412 430 438 T 800 432 L 800 520 L 0 520 Z" fill="url(#fireHill)" />
      <path d="M0 440 Q 220 412 430 438 T 800 432" fill="none" stroke={INK} strokeWidth="4" opacity="0.35" />
      {/* a house in the distance */}
      <g>
        <rect x="52" y="368" width="72" height="56" rx="8" fill="#F5E6C8" stroke={INK} strokeWidth="4" />
        <path d="M44 372 L88 338 L132 372 Z" fill="#D98F6A" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
        <rect x="78" y="394" width="20" height="30" rx="4" fill="#8A5A3B" stroke={INK} strokeWidth="3" />
      </g>

      {/* the fire (right side) */}
      {!fireOut && (
        <g className={fireSmall ? "fire-small" : "fire-big"} style={{ transformOrigin: "660px 440px" }}>
          <path
            d="M610 440 q-8 -60 25 -95 q5 30 22 38 q-2 -45 20 -70 q30 35 33 80 q25 -12 20 -45 q38 40 30 92 z"
            fill="#FF8A3D" stroke={INK} strokeWidth="5"
          />
          <path d="M635 440 q-5 -35 15 -55 q3 18 14 24 q0 -28 13 -42 q18 22 19 48 q14 -8 12 -26 q22 24 17 51 z" fill="#FFD66B" />
        </g>
      )}
      {fireOut && (
        <g stroke={INK} strokeWidth="4" strokeLinecap="round" opacity="0.6">
          <path d="M640 400 q10 -18 0 -36" fill="none" stroke="#B9B2A8" />
          <path d="M672 405 q-8 -16 2 -32" fill="none" stroke="#B9B2A8" />
        </g>
      )}

      {/* water arc from hose to fire */}
      {step === 3 && (
        <g fill="none" stroke="#4AA3E8" strokeWidth="13" strokeLinecap="round" className="water-arc">
          <path d="M300 350 Q 480 300 620 380" strokeDasharray="2 26" />
        </g>
      )}
      {step >= 4 && (
        <g fill="none" stroke="#4AA3E8" strokeWidth="12" strokeLinecap="round" className="water-arc">
          <path d="M470 130 Q 560 200 630 330" strokeDasharray="2 24" />
        </g>
      )}

      <g className="truck-bob">
        {/* ladder on top: extends on step 4 */}
        <g>
          <rect x="180" y={step >= 4 ? "120" : "250"} width="330" height="24" rx="10" fill="#D5DBE2" stroke={INK} strokeWidth="5" className="ladder" />
          {[...Array(step >= 4 ? 9 : 5)].map((_, i) => (
            <line
              key={i}
              x1={200 + i * 36} y1={step >= 4 ? "120" : "250"}
              x2={200 + i * 36} y2={step >= 4 ? "144" : "274"}
              stroke={INK} strokeWidth="4"
            />
          ))}
          <rect x="150" y={step >= 4 ? "112" : "242"} width="46" height="40" rx="10" fill="#9AA5B1" stroke={INK} strokeWidth="5" />
          {step >= 4 && (
            <g className="firefighter">
              <circle cx="470" cy="92" r="15" fill="#FFD9B3" stroke={INK} strokeWidth="4" />
              <rect x="448" y="60" width="44" height="17" rx="8" fill="#E8554A" stroke={INK} strokeWidth="4" />
              <rect x="452" y="106" width="36" height="28" rx="10" fill="#4AA3E8" stroke={INK} strokeWidth="4" />
            </g>
          )}
        </g>

        {/* truck body */}
        <rect x="120" y="290" width="330" height="120" rx="20" fill="#E8554A" stroke={INK} strokeWidth="5" />
        <rect x="450" y="310" width="120" height="100" rx="16" fill="#E8554A" stroke={INK} strokeWidth="5" />
        {/* cab window */}
        <path d="M470 318 h70 q14 0 14 14 v30 h-84 z" fill="#C9E7F7" stroke={INK} strokeWidth="4" />
        {/* stripe */}
        <rect x="120" y="352" width="450" height="22" fill="#FFD66B" stroke={INK} strokeWidth="4" />
        {/* water tank window */}
        <rect x="150" y="300" width="150" height="44" rx="12" fill="#fff" stroke={INK} strokeWidth="4" />
        <rect
          x="156" y={step >= 1 ? "308" : "340"} width="138" height={step >= 1 ? "30" : "0"}
          rx="8" fill="#4AA3E8" className="tank-fill"
        />
        <text x="225" y="292" textAnchor="middle" fontSize="19" fontWeight="800" fill={INK} className="wh-label">
          {step === 1 ? "filling up" : "water tank"}
        </text>
        {/* pump */}
        <circle cx="360" cy="322" r="28" fill="#fff" stroke={INK} strokeWidth="5" />
        <g className={step === 2 ? "pump-spin" : ""} style={{ transformOrigin: "360px 322px" }}>
          <path d="M360 322 L360 302 M360 322 L376 331 M360 322 L344 331" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        </g>
        <circle cx="360" cy="322" r="7" fill={INK} />
        <text x="360" y="370" textAnchor="middle" fontSize="17" fontWeight="800" fill={INK} className="wh-label">pump</text>

        {/* light bar */}
        <rect x="440" y="282" width="140" height="30" rx="14" fill={INK} />
        <circle cx="475" cy="297" r="13" fill="#FF5A4E" stroke="#fff" strokeWidth="3" className="light-red" />
        <circle cx="545" cy="297" r="13" fill="#4AA3E8" stroke="#fff" strokeWidth="3" className="light-blue" />

        {/* hose */}
        <path d="M300 400 Q 260 430 300 452" fill="none" stroke="#9AA5B1" strokeWidth="15" strokeLinecap="round" />
        <rect x="284" y="336" width="30" height="68" rx="10" fill="#9AA5B1" stroke={INK} strokeWidth="4" transform="rotate(18 300 370)" />

        {/* wheels */}
        {[210, 400, 520].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="420" r="42" fill="#3A2E2A" />
            <circle cx={cx} cy="420" r="22" fill="#D5DBE2" stroke={INK} strokeWidth="4" />
            <circle cx={cx} cy="420" r="7" fill={INK} />
          </g>
        ))}
        {/* smile */}
        <path d="M500 372 q16 12 32 0" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
