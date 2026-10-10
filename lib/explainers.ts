// Shared types for WonderHow explainers.
// Every explainer is a sequence of steps. Each step has one read-aloud script
// ("sayIt"), one true-fact note for grown-ups, and a spoken-form voice script.

export type Step = {
  title: string;
  /** Read-aloud script, written to be spoken to a 5-year-old. */
  sayIt: string;
  /** True facts for the grown-up reading along. */
  grownUp: string;
  /** Spoken form for TTS: numbers spelled out, no abbreviations. */
  voiceText: string;
};

export type Theme = {
  /** page background wash */
  bg: string;
  /** scene card background */
  scene: string;
  /** primary accent (buttons, highlights) */
  accent: string;
  /** darker shade for text on accent */
  deep: string;
  /** soft tint for chips */
  tint: string;
};

export type ExplainerDef = {
  slug: string;
  title: string;
  question: string;
  blurb: string;
  /** lucide-react icon name */
  icon: string;
  theme: Theme;
  steps: Step[];
};

export const EXPLAINER_ORDER = ["car", "fire-truck", "water-cycle", "plant"] as const;
