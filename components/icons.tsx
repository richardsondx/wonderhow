"use client";

import {
  Apple, Bike, Bird, Bone, Brain, Brush, Building, Bus, Cake, Camera, Car, Cat,
  Cloud, CloudRain, Clover, Dog, Droplets, Ear, Eye, Fish, Flame, Flower2,
  Heart, House, Lightbulb, Moon, Mountain, Music, Palette, Plane, Pizza, Rainbow,
  Rocket, Ship, Snowflake, Sparkles, Sprout, Star, Sun, Tornado, Tractor, Train,
  TreePine, Truck, Waves, Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import { ICON_ALLOWLIST } from "../lib/iconNames";

type IconProps = { size?: number; color?: string; strokeWidth?: number; className?: string };

const MAP: Record<string, ComponentType<IconProps>> = {
  Apple, Bike, Bird, Bone, Brain, Brush, Building, Bus, Cake, Camera, Car, Cat,
  Cloud, CloudRain, Clover, Dog, Droplets, Ear, Eye, Fish, Flame, Flower2,
  Heart, House, Lightbulb, Moon, Mountain, Music, Palette, Plane, Pizza, Rainbow,
  Rocket, Ship, Snowflake, Sparkles, Sprout, Star, Sun, Tornado, Tractor, Train,
  TreePine, Truck, Waves, Zap,
};

/** Resolve a lucide icon name to a component, falling back to Sparkles. */
export function iconFor(name: string): ComponentType<IconProps> {
  return MAP[name] ?? Sparkles;
}

/** Names the generator is allowed to pick from. */
export { ICON_ALLOWLIST };
