"use client";

// The water cycle in a warm storybook style: sun -> evaporation -> cloud -> rain -> river -> ocean.
// A little drop character rides the whole trip.

const INK = "#3A2E2A";

function Drop({ x, y, s = 1, className = "" }: { x: number; y: number; s?: number; className?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} className={className}>
      <path d="M0 -18 C 10 -4 14 4 14 12 A 14 14 0 1 1 -14 12 C -14 4 -10 -4 0 -18 Z" fill="#4AA3E8" stroke={INK} strokeWidth="4" />
      <circle cx="-4" cy="2" r="3.4" fill="#fff" />
      <circle cx="4" cy="2" r="3.4" fill="#fff" />
      <circle cx="-4" cy="2" r="1.6" fill={INK} />
      <circle cx="4" cy="2" r="1.6" fill={INK} />
      <path d="M-5 9 q5 5 10 0" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
}

export default function WaterCycleScene({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="The water cycle: sun, ocean, clouds and rain">
      <defs>
        <linearGradient id="wcSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#AEDCF2" />
          <stop offset="65%" stopColor="#DFF0FA" />
          <stop offset="100%" stopColor="#FDF4E2" />
        </linearGradient>
        <linearGradient id="wcSea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5AA9E6" />
          <stop offset="100%" stopColor="#3D8BD1" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="800" height="520" fill="url(#wcSky)" />

      {/* sun */}
      <g className="sun-spin" style={{ transformOrigin: "130px 110px" }}>
        <g stroke="#F5B942" strokeWidth="8" strokeLinecap="round">
          {[...Array(8)].map((_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line key={i}
                x1={130 + Math.cos(a) * 60} y1={110 + Math.sin(a) * 60}
                x2={130 + Math.cos(a) * 80} y2={110 + Math.sin(a) * 80} />
            );
          })}
        </g>
      </g>
      <circle cx="130" cy="110" r="48" fill="#FFD66B" stroke={INK} strokeWidth="4" />
      <circle cx="116" cy="103" r="4.5" fill={INK} /><circle cx="144" cy="103" r="4.5" fill={INK} />
      <path d="M116 121 q14 11 28 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />

      {/* heat waves off the ocean on step 1 */}
      {step === 1 && (
        <g stroke="#F5A742" strokeWidth="7" strokeLinecap="round" fill="none" className="heat">
          <path d="M300 380 q12 -18 0 -36 q-12 -18 0 -36" />
          <path d="M380 380 q12 -18 0 -36 q-12 -18 0 -36" />
          <path d="M460 380 q12 -18 0 -36 q-12 -18 0 -36" />
        </g>
      )}

      {/* rising vapor drops on step 1 */}
      {step === 1 && (
        <g className="rise">
          <Drop x={320} y={330} s={0.8} /><Drop x={400} y={300} s={0.7} /><Drop x={470} y={340} s={0.85} />
        </g>
      )}

      {/* cloud */}
      <g className={step === 2 ? "cloud-pop" : ""} style={{ transformOrigin: "560px 150px" }} opacity={step >= 1 ? 1 : 0.3}>
        <g fill="#fff" stroke={INK} strokeWidth="5">
          <ellipse cx="520" cy="150" rx="60" ry="38" />
          <ellipse cx="578" cy="132" rx="56" ry="42" />
          <ellipse cx="634" cy="152" rx="48" ry="34" />
        </g>
        {step >= 2 && (
          <>
            <circle cx="548" cy="140" r="4.5" fill={INK} /><circle cx="600" cy="140" r="4.5" fill={INK} />
            <path d="M552 157 q22 13 44 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          </>
        )}
      </g>
      {step === 2 && <Drop x={560} y={88} s={0.9} className="bob" />}

      {/* rain on step 3 */}
      {step === 3 && (
        <g stroke="#4AA3E8" strokeWidth="6" strokeLinecap="round" className="rain">
          <line x1="500" y1="200" x2="492" y2="250" /><line x1="550" y1="200" x2="542" y2="250" />
          <line x1="600" y1="200" x2="592" y2="250" /><line x1="650" y1="200" x2="642" y2="250" />
          <line x1="525" y1="270" x2="517" y2="320" /><line x1="575" y1="270" x2="567" y2="320" />
          <line x1="625" y1="270" x2="617" y2="320" />
        </g>
      )}

      {/* river on step 4 */}
      {step >= 4 && (
        <g>
          <path d="M660 340 q-40 30 -90 40 q-60 12 -110 30" fill="none" stroke="#4AA3E8" strokeWidth="22" strokeLinecap="round" className="river-flow" strokeDasharray="28 20" />
          <path d="M660 340 q-40 30 -90 40 q-60 12 -110 30" fill="none" stroke={INK} strokeWidth="30" strokeLinecap="round" opacity="0.15" />
        </g>
      )}

      {/* mountain */}
      <path d="M620 440 L700 300 L780 440 Z" fill="#A8B4C0" stroke={INK} strokeWidth="5" strokeLinejoin="round" />
      <path d="M682 330 L700 300 L718 330 L708 340 L692 340 Z" fill="#fff" stroke={INK} strokeWidth="3" />

      {/* ocean */}
      <rect x="0" y="440" width="620" height="80" fill="url(#wcSea)" />
      <path d="M0 440 q40 -16 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" className="waves" opacity="0.9" />
      <path d="M0 478 q40 -12 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="#C9E7F7" strokeWidth="5" strokeLinecap="round" className="waves" style={{ animationDelay: "0.6s" }} />

      {/* hero drop riding the cycle */}
      {step === 0 && <Drop x={200} y={470} s={1.4} className="bob" />}
      {step === 1 && <Drop x={400} y={250} s={1.2} className="bob" />}
      {step === 2 && <Drop x={700} y={300} s={1.2} className="bob" />}
      {step === 3 && <Drop x={560} y={330} s={1.2} />}
      {step >= 4 && <Drop x={330} y={470} s={1.4} className="bob" />}

      {/* step labels */}
      <g fontSize="20" fontWeight="800" fill={INK} className="wh-label">
        {step === 0 && <text x="200" y="415" textAnchor="middle">the ocean</text>}
        {step === 1 && <text x="400" y="215" textAnchor="middle">floating up!</text>}
        {step === 2 && <text x="560" y="235" textAnchor="middle">a fluffy cloud</text>}
        {step === 3 && <text x="560" y="375" textAnchor="middle">rain falls</text>}
        {step === 4 && <text x="480" y="330" textAnchor="middle">back to the sea</text>}
      </g>
    </svg>
  );
}
