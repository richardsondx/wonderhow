import type { ExplainerDef } from "../explainers.ts";

export const waterCycle: ExplainerDef = {
  slug: "water-cycle",
  title: "The Water Cycle",
  question: "Where does rain come from?",
  blurb: "Follow a tiny drop on the greatest round trip ever!",
  icon: "CloudRain",
  theme: {
    bg: "#EDF7FF",
    scene: "#DFF0FF",
    accent: "#2E9BF0",
    deep: "#1463A8",
    tint: "#D3E9FC",
  },
  steps: [
    {
      title: "Hello, ocean!",
      sayIt:
        "Down below is the big blue ocean. Up above shines the warm sun. Watch what the sunshine does to the water. It is the start of the greatest round trip ever!",
      grownUp:
        "About 97 percent of Earth's water is in the oceans. The sun's heat powers the entire water cycle.",
      voiceText:
        "Down below is the big blue ocean. Up above shines the warm sun. Watch what the sunshine does to the water. It is the start of the greatest round trip ever!",
    },
    {
      title: "Up, up they float!",
      sayIt:
        "The sun warms the water, and teeny tiny drops float up, up, up into the sky. They are too small to see! This is called evaporation. Can you say it? E-vap-o-ra-tion!",
      grownUp:
        "Evaporation: heat turns liquid water into invisible water vapor that rises into the air. Warm oceans evaporate enormous amounts every day.",
      voiceText:
        "The sun warms the water, and teeny tiny drops float up, up, up into the sky. They are too small to see! This is called evaporation. Can you say it? E-vap-o-ra-tion!",
    },
    {
      title: "Clouds are born!",
      sayIt:
        "High in the sky, the tiny drops get cold and huddle together. They make a fluffy cloud! A cloud is just a crowd of tiny water drops holding hands.",
      grownUp:
        "Condensation: high up, vapor cools and condenses onto tiny dust particles, forming the droplets that make clouds.",
      voiceText:
        "High in the sky, the tiny drops get cold and huddle together. They make a fluffy cloud! A cloud is just a crowd of tiny water drops holding hands.",
    },
    {
      title: "Plip, plop, rain!",
      sayIt:
        "The cloud gets too full and heavy. Plip! Plop! The drops fall back down as rain. Hold out your hand. Can you feel the raindrops?",
      grownUp:
        "Precipitation: when cloud droplets grow heavy enough, gravity pulls them down as rain (or snow, sleet, or hail).",
      voiceText:
        "The cloud gets too full and heavy. Plip! Plop! The drops fall back down as rain. Hold out your hand. Can you feel the raindrops?",
    },
    {
      title: "Round and round!",
      sayIt:
        "The rain splashes into rivers that run all the way back to the ocean. And then the sun starts it all over again! The water goes round and round, forever and ever. You did it!",
      grownUp:
        "Collection: rain gathers in rivers, lakes, and groundwater, flowing back to the sea. The water in your glass is billions of years old and has made this trip countless times.",
      voiceText:
        "The rain splashes into rivers that run all the way back to the ocean. And then the sun starts it all over again! The water goes round and round, forever and ever. You did it!",
    },
  ],
};
