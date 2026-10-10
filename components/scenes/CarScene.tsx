"use client";

// Chunky side-view car with x-ray peeks inside, in a warm storybook style.
// step 0: whole car   1: fuel tank fills + pipe flows   2: air flows in
// step 3: pistons pump + spark   4: wheels spin, car drives

const INK = "#3A2E2A";

export default function CarScene({ step }: { step: number }) {
  const drive = step >= 4;
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="Cartoon car with a peek inside its engine">
      <defs>
        <linearGradient id="carSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFE0F2" />
          <stop offset="70%" stopColor="#E8F3FA" />
          <stop offset="100%" stopColor="#FDF4E3" />
        </linearGradient>
        <linearGradient id="carHill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A9D6A5" />
          <stop offset="100%" stopColor="#86C482" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="800" height="520" fill="url(#carSky)" />
      {/* sun */}
      <circle cx="700" cy="80" r="40" fill="#FFD66B" stroke={INK} strokeWidth="4" />
      <g className={step >= 2 ? "sun-rays" : ""} stroke="#F5B942" strokeWidth="6" strokeLinecap="round">
        <line x1="700" y1="14" x2="700" y2="28" />
        <line x1="758" y1="80" x2="744" y2="80" />
        <line x1="642" y1="80" x2="656" y2="80" />
        <line x1="741" y1="39" x2="731" y2="49" />
        <line x1="659" y1="39" x2="669" y2="49" />
      </g>
      {/* soft clouds */}
      <g fill="#FFFFFF" stroke={INK} strokeWidth="4" opacity="0.95">
        <ellipse cx="140" cy="92" rx="50" ry="24" />
        <ellipse cx="182" cy="84" rx="42" ry="22" />
        <ellipse cx="105" cy="84" rx="34" ry="20" />
      </g>

      {/* rolling hills */}
      <path d="M0 430 Q 200 400 400 428 T 800 424 L 800 520 L 0 520 Z" fill="url(#carHill)" />
      <path d="M0 430 Q 200 400 400 428 T 800 424" fill="none" stroke={INK} strokeWidth="4" opacity="0.35" />
      <g stroke="#6FAE6B" strokeWidth="4" strokeLinecap="round" opacity="0.8">
        <line x1="90" y1="472" x2="90" y2="490" /><line x1="700" y1="468" x2="700" y2="486" />
        <line x1="420" y1="480" x2="420" y2="496" />
      </g>
      {/* distant trees */}
      <g>
        <circle cx="60" cy="410" r="26" fill="#7CBF77" stroke={INK} strokeWidth="4" />
        <rect x="54" y="424" width="12" height="22" rx="5" fill="#8A5A3B" stroke={INK} strokeWidth="3" />
        <circle cx="750" cy="404" r="30" fill="#7CBF77" stroke={INK} strokeWidth="4" />
        <rect x="743" y="420" width="14" height="24" rx="5" fill="#8A5A3B" stroke={INK} strokeWidth="3" />
      </g>

      {/* speed lines when driving */}
      {drive && (
        <g stroke="#fff" strokeWidth="8" strokeLinecap="round" className="speedlines" opacity="0.9">
          <line x1="40" y1="300" x2="130" y2="300" />
          <line x1="20" y1="350" x2="140" y2="350" />
          <line x1="55" y1="400" x2="125" y2="400" />
        </g>
      )}

      <g className={drive ? "car-drive" : "car-idle"}>
        {/* car body */}
        <path
          d="M110 340 Q110 300 160 295 L250 290 Q300 230 380 230 L520 230 Q600 230 640 290 L690 295 Q740 300 740 340 L740 380 Q740 400 715 400 L135 400 Q110 400 110 380 Z"
          fill="#E86A5E" stroke={INK} strokeWidth="5"
        />
        {/* windows */}
        <path d="M320 238 Q360 240 385 285 L300 285 Q305 255 320 238 Z" fill="#C9E7F7" stroke={INK} strokeWidth="4" />
        <path d="M400 238 L505 238 Q560 240 585 285 L400 285 Z" fill="#C9E7F7" stroke={INK} strokeWidth="4" />
        {/* door + handle */}
        <rect x="470" y="300" width="110" height="95" rx="14" fill="#D95F52" stroke={INK} strokeWidth="4" />
        <rect x="540" y="318" width="34" height="12" rx="6" fill={INK} />
        {/* headlight + smile */}
        <circle cx="712" cy="330" r="18" fill="#FFF3B0" stroke={INK} strokeWidth="4" className={step >= 3 ? "lamp-glow" : ""} />
        <circle cx="200" cy="352" r="4" fill={INK} />
        <path d="M150 358 q18 12 36 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />

        {/* wheels */}
        {[290, 620].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="405" r="50" fill="#3A2E2A" />
            <circle cx={cx} cy="405" r="28" fill="#D5DBE2" stroke={INK} strokeWidth="4" />
            <g className={drive ? "wheel-spin" : ""} style={{ transformOrigin: `${cx}px 405px` }}>
              <line x1={cx} y1="385" x2={cx} y2="425" stroke={INK} strokeWidth="6" strokeLinecap="round" />
              <line x1={cx - 20} y1="405" x2={cx + 20} y2="405" stroke={INK} strokeWidth="6" strokeLinecap="round" />
            </g>
            <circle cx={cx} cy="405" r="8" fill={INK} />
          </g>
        ))}

        {/* x-ray: fuel tank (rear) */}
        <g>
          <rect x="115" y="312" width="98" height="82" rx="18" fill="#FFEFD6" stroke={INK} strokeWidth="5" />
          <rect x="123" y="320" width="82" height="66" rx="12" fill="#fff" stroke={INK} strokeWidth="3" />
          <rect
            x="127" y={step >= 1 ? "330" : "382"} width="74" height={step >= 1 ? "52" : "0"}
            rx="8" fill="#4AA3E8" className="tank-fill"
          />
          <text x="164" y="304" textAnchor="middle" fontSize="20" fontWeight="800" fill={INK} className="wh-label">
            {step === 1 ? "filling up" : "fuel tank"}
          </text>
        </g>

        {/* x-ray: fuel pipe from tank to engine */}
        <path d="M213 340 H 600" fill="none" stroke={INK} strokeWidth="13" strokeLinecap="round" opacity="0.22" />
        <path
          d="M213 340 H 600"
          fill="none"
          stroke={step >= 1 ? "#4AA3E8" : "#D8CBB8"}
          strokeWidth="7"
          strokeLinecap="round"
          className={step === 1 ? "pipe-flow" : ""}
          strokeDasharray={step === 1 ? "16 12" : "0"}
        />

        {/* x-ray: engine cutaway (front) */}
        <g>
          <rect x="600" y="296" width="122" height="98" rx="14" fill="#463B36" opacity="0.94" />
          {[0, 1].map((i) => (
            <g key={i}>
              <rect x={616 + i * 46} y="304" width="32" height="54" rx="8" fill="#9AA5B1" stroke="#fff" strokeWidth="3" />
              <rect
                x={620 + i * 46} y="312" width="24" height="28" rx="6"
                fill={step === 3 ? "#FFD66B" : "#6B7684"}
                className={step === 3 ? "piston" : ""}
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            </g>
          ))}
          <text x="661" y="388" textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff" className="wh-label">engine</text>
        </g>
        {/* spark flash */}
        {step === 3 && (
          <g className="spark" style={{ transformOrigin: "661px 296px" }}>
            <path d="M661 272 l10 22 22 4 -16 15 4 23 -20 -11 -20 11 4 -23 -16 -15 22 -4 z" fill="#FFD66B" stroke={INK} strokeWidth="3" />
          </g>
        )}
        {/* air whoosh into front */}
        {step === 2 && (
          <g stroke="#4AA3E8" strokeWidth="6" strokeLinecap="round" fill="none" className="airflow">
            <path d="M795 250 q-30 10 -50 0 t-50 0" />
            <path d="M795 285 q-30 10 -50 0 t-50 0" />
          </g>
        )}
      </g>

      {/* exhaust puffs when driving */}
      {drive && (
        <g fill="#F2EFE9" stroke={INK} strokeWidth="3" className="puffs">
          <circle cx="90" cy="380" r="13" /><circle cx="60" cy="365" r="17" /><circle cx="25" cy="350" r="21" />
        </g>
      )}
    </svg>
  );
}
