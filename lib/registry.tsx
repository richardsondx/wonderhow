import { ExplainerDef, EXPLAINER_ORDER } from "./explainers";
import { car } from "./explainers/car";
import { fireTruck } from "./explainers/firetruck";
import { waterCycle } from "./explainers/watercycle";
import { plant } from "./explainers/plant";
import SampleArt from "../components/SampleArt";
import type { ComponentType } from "react";

const DEFS: Record<string, ExplainerDef> = {
  car,
  "fire-truck": fireTruck,
  "water-cycle": waterCycle,
  plant,
};

// Sample stories use pre-generated Bluey-style paintings per step.
// (The hand-built SVG scenes live on in components/scenes/, retired for now.)
const SCENES: Record<string, ComponentType<{ step: number }>> = {
  car: ({ step }) => <SampleArt slug="car" step={step} />,
  "fire-truck": ({ step }) => <SampleArt slug="fire-truck" step={step} />,
  "water-cycle": ({ step }) => <SampleArt slug="water-cycle" step={step} />,
  plant: ({ step }) => <SampleArt slug="plant" step={step} />,
};

export function getExplainer(slug: string): ExplainerDef | null {
  return DEFS[slug] ?? null;
}

export function getScene(slug: string): ComponentType<{ step: number }> | null {
  return SCENES[slug] ?? null;
}

export function listExplainers(): ExplainerDef[] {
  return EXPLAINER_ORDER.map((s) => DEFS[s]);
}

export function audioUrl(slug: string, stepIndex: number): string {
  return `/audio/${slug}/${stepIndex + 1}.mp3`;
}
