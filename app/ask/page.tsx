"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import ExplainerPlayer, { type PlayerStep } from "../../components/ExplainerPlayer";
import StoryStage from "../../components/StoryStage";
import Mascot from "../../components/Mascot";
import type { Theme } from "../../lib/explainers";

const THEMES: Record<string, Theme> = {
  red:    { bg: "#FFF1EC", scene: "#FFE9E4", accent: "#F43F2E", deep: "#A8231A", tint: "#FFDCD2" },
  blue:   { bg: "#EDF7FF", scene: "#DFF0FF", accent: "#2E9BF0", deep: "#1463A8", tint: "#D3E9FC" },
  green:  { bg: "#F0F9E8", scene: "#E4F5DC", accent: "#3FA34D", deep: "#20602C", tint: "#D9EFC9" },
  yellow: { bg: "#FFFBEB", scene: "#FFF3D6", accent: "#E8A100", deep: "#8A5F00", tint: "#FFE9A8" },
  purple: { bg: "#F5EEFF", scene: "#EAE0FF", accent: "#8E6FC8", deep: "#4E3486", tint: "#DCCFF7" },
  orange: { bg: "#FFF4E8", scene: "#FFE8D2", accent: "#F08A24", deep: "#9A5210", tint: "#FFDDB8" },
};

type Generated = {
  title: string;
  question: string;
  icon: string;
  color: string;
  steps: (PlayerStep & { art: string })[];
};

function AskInner() {
  const router = useRouter();
  const search = useSearchParams();
  const initial = search.get("q") ?? "";
  const [topic, setTopic] = useState(initial);
  const [state, setState] = useState<"idle" | "thinking" | "ready" | "error">("idle");
  const [gen, setGen] = useState<Generated | null>(null);
  const [images, setImages] = useState<(string | null)[]>([]);
  const [error, setError] = useState("");
  const ranFor = useRef<string>("");

  const drawPictures = useCallback((steps: { art: string }[]) => {
    setImages(new Array(steps.length).fill(null));
    steps.forEach((s, i) => {
      if (!s.art) return;
      fetch("/api/illustrate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: s.art }),
      })
        .then((r) => r.json())
        .then((d) => {
          if (d.url) {
            setImages((prev) => {
              const next = [...prev];
              next[i] = d.url as string;
              return next;
            });
          }
        })
        .catch(() => {});
    });
  }, []);

  const explain = useCallback(async (t: string) => {
    const clean = t.trim();
    if (!clean) return;
    setState("thinking");
    setGen(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: clean }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "failed");
      setGen(data);
      setState("ready");
      drawPictures(data.steps);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setState("error");
    }
  }, [drawPictures]);

  useEffect(() => {
    if (initial && ranFor.current !== initial) {
      ranFor.current = initial;
      explain(initial);
    }
  }, [initial, explain]);

  if (state === "ready" && gen) {
    const theme = THEMES[gen.color] ?? THEMES.purple;
    const Scene = ({ step }: { step: number }) => (
      <StoryStage step={step} icon={gen.icon} tint={theme.scene} image={images[step] ?? null} />
    );
    return (
      <ExplainerPlayer
        title={gen.title}
        question={gen.question}
        theme={theme}
        icon={gen.icon}
        steps={gen.steps}
        Scene={Scene}
        audioFor={() => null}
        onExit={() => router.push("/")}
        badge="Made just for you"
      />
    );
  }

  return (
    <div className="ask-page">
      <div className="ask-wrap">
        <button className="wh-btn wh-btn-ghost" onClick={() => router.push("/")}>
          <ArrowLeft size={26} /> <span>Stories</span>
        </button>
        <div className="ask-card" style={{ marginTop: 24 }}>
          <h2>What are you curious about?</h2>
          <p>I will build a story about it, step by step, with pictures and my voice.</p>
          <div className="ask-row">
            <input
              className="ask-input"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && explain(topic)}
              placeholder="How does a volcano work?"
              aria-label="What do you want to learn about?"
            />
            <button
              className="wh-btn"
              style={{ background: "#8E6FC8", color: "#fff" }}
              onClick={() => explain(topic)}
              disabled={state === "thinking"}
            >
              <Sparkles size={26} /> <span style={{ color: "#fff" }}>Explain it!</span>
            </button>
          </div>
        </div>

        {state === "thinking" && (
          <div className="ask-thinking">
            <div className="think-owl"><Mascot size={110} /></div>
            <h2>Building your story...</h2>
            <p>I am drawing pictures and thinking of the perfect words. One moment!</p>
          </div>
        )}
        {state === "error" && (
          <div className="ask-error">
            {error || "Hmm, my thinking got tangled."}{" "}
            <button className="wh-btn" style={{ marginTop: 12 }} onClick={() => explain(topic)}>
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AskPage() {
  return (
    <Suspense>
      <AskInner />
    </Suspense>
  );
}
