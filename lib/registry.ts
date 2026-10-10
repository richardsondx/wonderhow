import { ExplainerDef, EXPLAINER_ORDER } from "./explainers";
import { car } from "./explainers/car";
import { fireTruck } from "./explainers/firetruck";
import { waterCycle } from "./explainers/watercycle";
import { plant } from "./explainers/plant";
import CarScene from "../components/scenes/CarScene";
import FireTruckScene from "../components/scenes/FireTruckScene";
import WaterCycleScene from "../components/scenes/WaterCycleScene";
import PlantScene from "../components/scenes/PlantScene";
import type { ComponentType } from "react";

const DEFS: Record<string, ExplainerDef> = {
  car,
  "fire-truck": fireTruck,
  "water-cycle": waterCycle,
  plant,
};

const SCENES: Record<string, ComponentType<{ step: number }>> = {
  car: CarScene,
  "fire-truck": FireTruckScene,
  "water-cycle": WaterCycleScene,
  plant: PlantScene,
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
