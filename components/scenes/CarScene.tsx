"use client";

// Chunky side-view car with x-ray peeks inside.
// step 0: whole car   1: fuel tank fills + pipe flows   2: air flows in
// step 3: pistons pump + spark   4: wheels spin, car drives

const INK = "#3A2E2A";

export default function CarScene({ step }: { step: number }) {
  const drive = step >= 4;
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="Cartoon car with a peek inside its engine">
      {/* sky bits */}
      <circle cx="700" cy="80" r="44" fill="#FFD93D" stroke={INK} strokeWidth="6" />
      <g className={step >= 2 ? "sun-rays" : ""} stroke="#FFD93D" strokeWidth="8" strokeLinecap="round">
        <line x1="700" y1="8" x2="700" y2="24" />
        <line x1="764" y1="80" x2="748" y2="80" />
        <line x1="636" y1="80" x2="652" y2="80" />
        <line x1="745" y1="35" x2="734" y2="46" />
        <line x1="655" y1="35" x2="666" y2="46" />
      </g>
      <g fill="#fff" stroke={INK} strokeWidth="5">
        <ellipse cx="140" cy="90" rx="52" ry="26" />
        <ellipse cx="185" cy="82" rx="44" ry="24" />
      </g>

      {/* ground */}
      <rect x="0" y="430" width="800" height="90" fill="#8FD694" />
      <rect x="0" y="430" width="800" height="10" fill={INK} opacity="0.15" />
      <g stroke="#5DAE63" strokeWidth="6" strokeLinecap="round">
        <line x1="90" y1="470" x2="90" y2="492" /><line x1="700" y1="465" x2="700" y2="487" />
        <line x1="420" y1="478" x2="420" y2="498" />
      </g>

      {/* speed lines when driving */}
      {drive && (
        <g stroke="#fff" strokeWidth="10" strokeLinecap="round" className="speedlines" opacity="0.9">
          <line x1="40" y1="300" x2="130" y2="300" />
          <line x1="20" y1="350" x2="140" y2="350" />
          <line x1="55" y1="400" x2="125" y2="400" />
        </g>
      )}

      <g className={drive ? "car-drive" : "car-idle"}>
        {/* car body */}
        <path
          d="M110 340 Q110 300 160 295 L250 290 Q300 230 380 230 L520 230 Q600 230 640 290 L690 295 Q740 300 740 340 L740 380 Q740 400 715 400 L135 400 Q110 400 110 380 Z"
          fill="#FF5A5A" stroke={INK} strokeWidth="7"
        />
        {/* windows */}
        <path d="M320 238 Q360 240 385 285 L300 285 Q305 255 320 238 Z" fill="#BFE9FF" stroke={INK} strokeWidth="6" />
        <path d="M400 238 L505 238 Q560 240 585 285 L400 285 Z" fill="#BFE9FF" stroke={INK} strokeWidth="6" />
        {/* door + handle */}
        <rect x="470" y="300" width="110" height="95" rx="14" fill="#E84A4A" stroke={INK} strokeWidth="5" />
        <rect x="540" y="318" width="34" height="12" rx="6" fill={INK} />
        {/* headlight + smile */}
        <circle cx="712" cy="330" r="20" fill="#FFF3B0" stroke={INK} strokeWidth="6" className={step >= 3 ? "lamp-glow" : ""} />
        <path d="M150 355 q18 14 36 0" fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round" />

        {/* wheels */}
        {[290, 620].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="405" r="52" fill="#3A2E2A" />
            <circle cx={cx} cy="405" r="30" fill="#C9CFD6" stroke={INK} strokeWidth="5" />
            <g className={drive ? "wheel-spin" : ""} style={{ transformOrigin: `${cx}px 405px` }}>
              <line x1={cx} y1="383" x2={cx} y2="427" stroke={INK} strokeWidth="8" strokeLinecap="round" />
              <line x1={cx - 22} y1="405" x2={cx + 22} y2="405" stroke={INK} strokeWidth="8" strokeLinecap="round" />
            </g>
            <circle cx={cx} cy="405" r="9" fill={INK} />
          </g>
        ))}

        {/* x-ray: fuel tank (rear) */}
        <g>
          <rect x="115" y="312" width="98" height="82" rx="18" fill="#FFE9C7" stroke={INK} strokeWidth="6" />
          <rect x="123" y="320" width="82" height="66" rx="12" fill="#fff" stroke={INK} strokeWidth="4" />
          <rect
            x="127" y={step >= 1 ? "330" : "382"} width="74" height={step >= 1 ? "52" : "0"}
            rx="8" fill="#2E9BF0" className="tank-fill"
          />
          <text x="164" y="304" textAnchor="middle" fontSize="21" fontWeight="800" fill={INK} className="wh-label">
            {step === 1 ? "GLUG GLUG!" : "tank"}
          </text>
        </g>

        {/* x-ray: fuel pipe from tank to engine */}
        <path d="M213 340 H 600" fill="none" stroke={INK} strokeWidth="16" strokeLinecap="round" opacity="0.25" />
        <path
          d="M213 340 H 600"
          fill="none"
          stroke={step >= 1 ? "#2E9BF0" : "#D8CBB8"}
          strokeWidth="9"
          strokeLinecap="round"
          className={step === 1 ? "pipe-flow" : ""}
          strokeDasharray={step === 1 ? "16 12" : "0"}
        />

        {/* x-ray: engine cutaway (front) */}
        <g>
          <rect x="600" y="296" width="122" height="98" rx="14" fill="#3A2E2A" opacity="0.94" />
          {[0, 1].map((i) => (
            <g key={i}>
              <rect x={616 + i * 46} y="304" width="32" height="54" rx="8" fill="#9AA5B1" stroke="#fff" strokeWidth="4" />
              <rect
                x={620 + i * 46} y="312" width="24" height="28" rx="6"
                fill={step === 3 ? "#FFD93D" : "#6B7684"}
                className={step === 3 ? "piston" : ""}
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            </g>
          ))}
          <text x="661" y="388" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff" className="wh-label">engine</text>
        </g>
        {/* spark flash */}
        {step === 3 && (
          <g className="spark" style={{ transformOrigin: "661px 296px" }}>
            <path d="M661 272 l10 22 22 4 -16 15 4 23 -20 -11 -20 11 4 -23 -16 -15 22 -4 z" fill="#FFD93D" stroke={INK} strokeWidth="4" />
          </g>
        )}
        {/* air whoosh into front */}
        {step === 2 && (
          <g stroke="#2E9BF0" strokeWidth="8" strokeLinecap="round" fill="none" className="airflow">
            <path d="M795 250 q-30 10 -50 0 t-50 0" />
            <path d="M795 285 q-30 10 -50 0 t-50 0" />
          </g>
        )}
      </g>

      {/* exhaust puffs when driving */}
      {drive && (
        <g fill="#E8E4DE" stroke={INK} strokeWidth="4" className="puffs">
          <circle cx="90" cy="380" r="14" /><circle cx="60" cy="365" r="18" /><circle cx="25" cy="350" r="22" />
        </g>
      )}
    </svg>
  );
}
