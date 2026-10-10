"use client";

import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import {
  ArrowLeft, ArrowRight, BookOpen, Pause, Play, RotateCcw, Sparkles, Volume2,
} from "lucide-react";
import type { Theme } from "../lib/explainers";
import { iconFor } from "./icons";

export type PlayerStep = {
  title: string;
  sayIt: string;
  grownUp: string;
  voiceText: string;
};

type Props = {
  title: string;
  question: string;
  theme: Theme;
  icon: string;
  steps: PlayerStep[];
  Scene: ComponentType<{ step: number }>;
  /** Direct audio URL for a step, or null to synthesize on demand. */
  audioFor: (index: number) => string | null;
  onExit: () => void;
  badge?: string;
};

type Mode = "story" | "parent";

export default function ExplainerPlayer({ title, question, theme, icon, steps, Scene, audioFor, onExit, badge }: Props) {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<Mode>("story");
  const [playing, setPlaying] = useState(false);
  const [loadingVoice, setLoadingVoice] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cacheRef = useRef<Record<number, string>>({});
  const Icon = iconFor(icon);

  const stopAudio = useCallback(() => {
    const a = audioRef.current;
    if (a) { a.pause(); a.currentTime = 0; }
    setPlaying(false);
  }, []);

  const playStep = useCallback(async (i: number) => {
    if (mode !== "story") return;
    stopAudio();
    setLoadingVoice(true);
    try {
      let url = cacheRef.current[i] ?? audioFor(i);
      if (!url) {
        const res = await fetch("/api/narrate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: steps[i].voiceText }),
        });
        const data = await res.json();
        if (!data.url) throw new Error("no url");
        url = data.url as string;
      }
      cacheRef.current[i] = url;
      const a = audioRef.current;
      if (a) {
        a.src = url;
        await a.play();
        setPlaying(true);
      }
    } catch {
      setPlaying(false);
    } finally {
      setLoadingVoice(false);
    }
  }, [mode, audioFor, steps, stopAudio]);

  // autoplay on step change in story mode
  useEffect(() => {
    if (mode === "story") playStep(step);
    else stopAudio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, mode]);

  useEffect(() => () => stopAudio(), [stopAudio]);

  const go = (d: number) => setStep((s) => Math.min(steps.length - 1, Math.max(0, s + d)));
  const s = steps[step];

  return (
    <div className="player" style={{ background: theme.bg }}>
      <audio ref={audioRef} onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} preload="auto" />

      <header className="player-top">
        <button className="wh-btn wh-btn-ghost" onClick={() => { stopAudio(); onExit(); }}>
          <ArrowLeft size={26} /> <span>Stories</span>
        </button>
        <div className="mode-toggle" role="tablist" aria-label="Reading mode">
          <button
            role="tab" aria-selected={mode === "story"}
            className={`mode-btn ${mode === "story" ? "on" : ""}`}
            style={mode === "story" ? { background: theme.accent, borderColor: "#3A2E2A" } : undefined}
            onClick={() => setMode("story")}
          >
            <Volume2 size={24} /> <span>Storyteller</span>
          </button>
          <button
            role="tab" aria-selected={mode === "parent"}
            className={`mode-btn ${mode === "parent" ? "on" : ""}`}
            style={mode === "parent" ? { background: theme.accent, borderColor: "#3A2E2A" } : undefined}
            onClick={() => setMode("parent")}
          >
            <BookOpen size={24} /> <span>Grown-up reads</span>
          </button>
        </div>
      </header>

      <div className="player-head">
        <div className="player-icon" style={{ background: theme.accent }}>
          <Icon size={44} color="#fff" strokeWidth={2.4} />
        </div>
        <div>
          <h1 className="player-title">{title}</h1>
          <p className="player-question">{question}</p>
          {badge && <span className="wh-chip"><Sparkles size={18} /> {badge}</span>}
        </div>
      </div>

      <main className="player-main">
        <section className="scene-card" style={{ background: theme.scene }} aria-label={`Picture for step ${step + 1}`}>
          <Scene step={step} />
        </section>

        <section className="step-card">
          <div className="step-row">
            <span className="wh-chip" style={{ background: theme.tint }}>Step {step + 1} of {steps.length}</span>
            {mode === "story" && (
              <span className="wh-chip voice-chip">
                {loadingVoice ? "Getting Wally's voice ready..." : playing ? "Wally is telling the story" : "Tap play to hear it"}
              </span>
            )}
          </div>

          <h2 className="step-title">{s.title}</h2>
          <p className="step-say">{s.sayIt}</p>

          <div className={`grownup ${mode === "parent" ? "big" : ""}`}>
            <span className="grownup-label">{mode === "parent" ? "Read this part:" : "Grown-up corner"}</span>
            <p>{mode === "parent" ? s.sayIt : s.grownUp}</p>
            {mode === "parent" && <p className="grownup-fact"><strong>True fact:</strong> {s.grownUp}</p>}
          </div>

          {mode === "story" && (
            <div className="audio-row">
              <button
                className="wh-btn wh-btn-audio"
                style={{ background: theme.accent }}
                onClick={() => {
                  const a = audioRef.current;
                  if (playing && a) { a.pause(); setPlaying(false); }
                  else if (a && a.src) { a.play(); setPlaying(true); }
                  else playStep(step);
                }}
                aria-label={playing ? "Pause story" : "Play story"}
              >
                {playing ? <Pause size={30} /> : <Play size={30} />}
              </button>
              <button className="wh-btn wh-btn-ghost" onClick={() => playStep(step)} aria-label="Hear it again">
                <RotateCcw size={24} /> <span>Again!</span>
              </button>
            </div>
          )}

          <div className="dots" aria-label="Steps">
            {steps.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === step ? "on" : ""} ${i < step ? "done" : ""}`}
                style={i === step ? { background: theme.accent } : undefined}
                onClick={() => setStep(i)}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          <div className="nav-row">
            <button className="wh-btn wh-btn-nav" onClick={() => go(-1)} disabled={step === 0}>
              <ArrowLeft size={30} /> <span>Back</span>
            </button>
            {step < steps.length - 1 ? (
              <button className="wh-btn wh-btn-nav wh-btn-next" style={{ background: theme.accent }} onClick={() => go(1)}>
                <span>Next</span> <ArrowRight size={30} />
              </button>
            ) : (
              <button className="wh-btn wh-btn-nav wh-btn-next" style={{ background: theme.accent }} onClick={onExit}>
                <span>All done!</span> <Sparkles size={30} />
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
