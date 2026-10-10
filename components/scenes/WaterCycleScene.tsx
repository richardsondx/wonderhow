"use client";

// The water cycle: sun -> evaporation -> cloud -> rain -> river -> ocean.
// A little drop character rides the whole trip.

const INK = "#3A2E2A";

function Drop({ x, y, s = 1, className = "" }: { x: number; y: number; s?: number; className?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} className={className}>
      <path d="M0 -18 C 10 -4 14 4 14 12 A 14 14 0 1 1 -14 12 C -14 4 -10 -4 0 -18 Z" fill="#2E9BF0" stroke={INK} strokeWidth="5" />
      <circle cx="-4" cy="2" r="3.4" fill="#fff" />
      <circle cx="4" cy="2" r="3.4" fill="#fff" />
      <circle cx="-4" cy="2" r="1.6" fill={INK} />
      <circle cx="4" cy="2" r="1.6" fill={INK} />
      <path d="M-5 9 q5 5 10 0" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  );
}

export default function WaterCycleScene({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 800 520" className="wh-scene" role="img" aria-label="The water cycle: sun, ocean, clouds and rain">
      {/* sun */}
      <g className="sun-spin" style={{ transformOrigin: "130px 110px" }}>
        <g stroke="#FFB800" strokeWidth="10" strokeLinecap="round">
          {[...Array(8)].map((_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line key={i}
                x1={130 + Math.cos(a) * 62} y1={110 + Math.sin(a) * 62}
                x2={130 + Math.cos(a) * 84} y2={110 + Math.sin(a) * 84} />
            );
          })}
        </g>
      </g>
      <circle cx="130" cy="110" r="52" fill="#FFD93D" stroke={INK} strokeWidth="6" />
      <circle cx="115" cy="102" r="5" fill={INK} /><circle cx="145" cy="102" r="5" fill={INK} />
      <path d="M115 122 q15 12 30 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />

      {/* heat waves off the ocean on step 1 */}
      {step === 1 && (
        <g stroke="#FF9D2E" strokeWidth="9" strokeLinecap="round" fill="none" className="heat">
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
      <g className={step === 2 ? "cloud-pop" : ""} style={{ transformOrigin: "560px 150px" }} opacity={step >= 1 ? 1 : 0.25}>
        <g fill="#fff" stroke={INK} strokeWidth="6">
          <ellipse cx="520" cy="150" rx="62" ry="40" />
          <ellipse cx="580" cy="132" rx="58" ry="44" />
          <ellipse cx="636" cy="152" rx="50" ry="36" />
        </g>
        {step >= 2 && (
          <>
            <circle cx="548" cy="140" r="5" fill={INK} /><circle cx="600" cy="140" r="5" fill={INK} />
            <path d="M552 158 q22 14 44 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          </>
        )}
      </g>
      {step === 2 && <Drop x={560} y={90} s={0.9} className="bob" />}

      {/* rain on step 3 */}
      {step === 3 && (
        <g stroke="#2E9BF0" strokeWidth="8" strokeLinecap="round" className="rain">
          <line x1="500" y1="200" x2="492" y2="250" /><line x1="550" y1="200" x2="542" y2="250" />
          <line x1="600" y1="200" x2="592" y2="250" /><line x1="650" y1="200" x2="642" y2="250" />
          <line x1="525" y1="270" x2="517" y2="320" /><line x1="575" y1="270" x2="567" y2="320" />
          <line x1="625" y1="270" x2="617" y2="320" />
        </g>
      )}

      {/* river on step 4 */}
      {step >= 4 && (
        <g>
          <path d="M660 340 q-40 30 -90 40 q-60 12 -110 30" fill="none" stroke="#2E9BF0" strokeWidth="26" strokeLinecap="round" className="river-flow" strokeDasharray="30 22" />
          <path d="M660 340 q-40 30 -90 40 q-60 12 -110 30" fill="none" stroke={INK} strokeWidth="34" strokeLinecap="round" opacity="0.18" />
        </g>
      )}

      {/* mountain */}
      <path d="M620 440 L700 300 L780 440 Z" fill="#9AA5B1" stroke={INK} strokeWidth="6" />
      <path d="M682 330 L700 300 L718 330 L708 340 L692 340 Z" fill="#fff" stroke={INK} strokeWidth="4" />

      {/* ocean */}
      <rect x="0" y="440" width="620" height="80" fill="#2E9BF0" />
      <path d="M0 440 q40 -18 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" className="waves" />
      <path d="M0 480 q40 -14 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="#BFE3FF" strokeWidth="7" strokeLinecap="round" className="waves" style={{ animationDelay: "0.6s" }} />

      {/* hero drop riding the cycle */}
      {step === 0 && <Drop x={200} y={470} s={1.4} className="bob" />}
      {step === 1 && <Drop x={400} y={250} s={1.2} className="bob" />}
      {step === 2 && <Drop x={700} y={300} s={1.2} className="bob" />}
      {step === 3 && <Drop x={560} y={330} s={1.2} />}
      {step >= 4 && <Drop x={330} y={470} s={1.4} className="bob" />}

      {/* step labels */}
      <g fontSize="21" fontWeight="800" fill={INK} className="wh-label">
        {step === 0 && <text x="200" y="415" textAnchor="middle">the ocean</text>}
        {step === 1 && <text x="400" y="215" textAnchor="middle">floating up!</text>}
        {step === 2 && <text x="560" y="235" textAnchor="middle">a fluffy cloud</text>}
        {step === 3 && <text x="560" y="375" textAnchor="middle">rain falls</text>}
        {step === 4 && <text x="480" y="330" textAnchor="middle">back to the sea</text>}
      </g>
    </svg>
  );
}
