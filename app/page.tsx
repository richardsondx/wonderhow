"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Play, Sparkles, Footprints } from "lucide-react";
import Mascot from "../components/Mascot";
import { iconFor } from "../components/icons";
import { listExplainers } from "../lib/registry";

const TRY_THESE = ["a volcano", "a rocket ship", "a honey bee", "the human heart", "a thunderstorm"];

export default function Home() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const stories = listExplainers();

  const ask = (topic: string) => {
    const t = topic.trim();
    if (t) router.push(`/ask?q=${encodeURIComponent(t)}`);
  };

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-mascot">
          <Mascot size={150} />
        </div>
        <div>
          <h1 className="home-title">
            <span className="w">Wonder</span><span className="h">How</span>
          </h1>
          <p className="home-sub">
            Hi, I am Wally! Pick a story and I will show you, step by step, how things work.
          </p>
          <div className="home-cta">
            <button className="wh-btn" style={{ background: "#FFD93D" }} onClick={() => router.push("/explore/car")}>
              <Play size={28} /> <span>Start a story</span>
            </button>
            <button className="wh-btn" onClick={() => router.push("/ask")}>
              <Sparkles size={28} /> <span>Ask me anything</span>
            </button>
          </div>
        </div>
      </section>

      <section className="home-grid" aria-label="Stories">
        {stories.map((s) => {
          const Icon = iconFor(s.icon);
          return (
            <button
              key={s.slug}
              className="story-card"
              onClick={() => router.push(`/explore/${s.slug}`)}
              aria-label={`Open: ${s.title}`}
            >
              <div className="story-icon" style={{ background: s.theme.accent }}>
                <Icon size={52} color="#fff" strokeWidth={2.2} />
              </div>
              <h2 className="story-title">{s.title}</h2>
              <p className="story-q">{s.question}</p>
              <p className="story-blurb">{s.blurb}</p>
              <div className="story-meta">
                <span className="wh-chip" style={{ background: s.theme.tint }}>
                  <Footprints size={18} /> {s.steps.length} steps
                </span>
                <span className="wh-chip">Tap to open <ArrowRight size={18} /></span>
              </div>
            </button>
          );
        })}
      </section>

      <section className="ask-band">
        <div className="ask-card">
          <h2>Curious about something else?</h2>
          <p>Type it here and I will make a brand-new story, just for you.</p>
          <div className="ask-row">
            <input
              className="ask-input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask(q)}
              placeholder="How does a volcano work?"
              aria-label="What do you want to learn about?"
            />
            <button className="wh-btn" style={{ background: "#8E6FC8", color: "#fff" }} onClick={() => ask(q)}>
              <Sparkles size={26} /> <span style={{ color: "#fff" }}>Explain it!</span>
            </button>
          </div>
          <div className="ask-chips">
            {TRY_THESE.map((t) => (
              <button key={t} onClick={() => ask(`how does ${t} work`)}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      <footer className="home-foot">
        Made for little wonderers and the grown-ups who read with them.
      </footer>
    </div>
  );
}
