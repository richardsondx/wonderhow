import type { ExplainerDef } from "../explainers.ts";

export const waterCycle: ExplainerDef = {
  slug: "water-cycle",
  title: "The Water Cycle",
  question: "Where does rain come from, and where does it go?",
  blurb: "Follow one drop of water on the greatest round trip on Earth.",
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
      title: "It starts with the sun",
      sayIt:
        "Almost all of Earth's water sits in the oceans, and it would just sit there forever if not for the sun. The sun's heat is the engine of the entire water cycle. Watch what sunlight does to the surface of the sea, because that is where every raindrop's journey begins.",
      grownUp:
        "About 97 percent of Earth's water is in the oceans. The sun evaporates roughly 500,000 cubic kilometers of ocean water every year.",
      voiceText:
        "Almost all of Earth's water sits in the oceans, and it would just sit there forever if not for the sun. The sun's heat is the engine of the entire water cycle. Watch what sunlight does to the surface of the sea, because that is where every raindrop's journey begins.",
    },
    {
      title: "Water learns to fly",
      sayIt:
        "Heat gives water molecules energy, and the fastest ones break free into the air as an invisible gas called water vapor. This is evaporation. You cannot see it happening, but on a hot day a swimming pool can lose several centimeters of water straight into the sky.",
      grownUp:
        "Evaporation is why wet pavement dries and why puddles vanish. Plants also release vapor through their leaves, called transpiration.",
      voiceText:
        "Heat gives water molecules energy, and the fastest ones break free into the air as an invisible gas called water vapor. This is evaporation. You cannot see it happening, but on a hot day a swimming pool can lose several centimeters of water straight into the sky.",
    },
    {
      title: "Clouds are built drop by drop",
      sayIt:
        "High up, the air is cold. The vapor cools and clings to microscopic dust particles, turning back into liquid, millions of droplets too small to see alone. A cloud is exactly that: a floating crowd of tiny water droplets, each one too light to fall.",
      grownUp:
        "This step is called condensation. Cloud droplets are about 100 times smaller than a raindrop, which is why they can float.",
      voiceText:
        "High up, the air is cold. The vapor cools and clings to microscopic dust particles, turning back into liquid, millions of droplets too small to see alone. A cloud is exactly that: a floating crowd of tiny water droplets, each one too light to fall.",
    },
    {
      title: "When clouds get heavy",
      sayIt:
        "Droplets keep colliding and merging inside the cloud until they grow too heavy to float. Then gravity wins, and they fall as rain. Scientists call this precipitation, and it includes snow, sleet, and hail: the same trip, just with the water frozen.",
      grownUp:
        "A raindrop falls at roughly 20 kilometers per hour. A single thunderstorm can drop billions of liters of water.",
      voiceText:
        "Droplets keep colliding and merging inside the cloud until they grow too heavy to float. Then gravity wins, and they fall as rain. Scientists call this precipitation, and it includes snow, sleet, and hail: the same trip, just with the water frozen.",
    },
    {
      title: "Round and round, forever",
      sayIt:
        "Rain lands on mountains and gathers into streams, then rivers, then flows all the way back to the ocean, where the sun starts the journey again. The water in your glass is billions of years old. It has made this trip more times than anyone could ever count.",
      grownUp:
        "This final step is collection. Some rain soaks into groundwater and may stay underground for thousands of years before returning.",
      voiceText:
        "Rain lands on mountains and gathers into streams, then rivers, then flows all the way back to the ocean, where the sun starts the journey again. The water in your glass is billions of years old. It has made this trip more times than anyone could ever count.",
    },
  ],
};
