import type { ExplainerDef } from "../explainers.ts";

export const plant: ExplainerDef = {
  slug: "plant",
  title: "How a Plant Grows",
  question: "How does a tiny seed become a flower?",
  blurb: "Plant a seed and watch it stretch toward the sun!",
  icon: "Sprout",
  theme: {
    bg: "#F0F9E8",
    scene: "#E4F5DC",
    accent: "#3FA34D",
    deep: "#20602C",
    tint: "#D9EFC9",
  },
  steps: [
    {
      title: "A tiny seed!",
      sayIt:
        "This little seed is sleeping in the soil. Inside it hides a whole plant, curled up like you in your blanket! It is waiting for three special things. Let us find out what they are!",
      grownUp:
        "A seed contains a tiny embryo plant plus stored food, wrapped in a protective coat. It stays dormant until conditions are right.",
      voiceText:
        "This little seed is sleeping in the soil. Inside it hides a whole plant, curled up like you in your blanket! It is waiting for three special things. Let us find out what they are!",
    },
    {
      title: "Drink, seed, drink!",
      sayIt:
        "First, water! Plip plop, rain soaks the soil. The seed drinks it all up and wakes up. Good morning, little seed! Water is special thing number one.",
      grownUp:
        "Water softens the seed coat and wakes the embryo. This first step is called germination, and it needs moisture, warmth, and air.",
      voiceText:
        "First, water! Plip plop, rain soaks the soil. The seed drinks it all up and wakes up. Good morning, little seed! Water is special thing number one.",
    },
    {
      title: "Hello, sunshine!",
      sayIt:
        "Next, sunshine! The warm sun hugs the soil. The seed feels cozy and starts to stretch. Something pointy pokes out. A root! It grows down, down to hold on tight. That is special thing number two!",
      grownUp:
        "The first root (radicle) grows downward, anchoring the plant and drinking water from the soil. Roots grow toward gravity and moisture.",
      voiceText:
        "Next, sunshine! The warm sun hugs the soil. The seed feels cozy and starts to stretch. Something pointy pokes out. A root! It grows down, down to hold on tight. That is special thing number two!",
    },
    {
      title: "Up it sprouts!",
      sayIt:
        "Up, up, up! A green sprout pushes through the soil toward the light. It opens two tiny leaves, like little hands waving hello to the sun! The leaves catch sunshine to make food. That is special thing number three!",
      grownUp:
        "Leaves capture sunlight for photosynthesis, turning light, water, and air into sugar (food) for the plant. This is why plants grow toward light.",
      voiceText:
        "Up, up, up! A green sprout pushes through the soil toward the light. It opens two tiny leaves, like little hands waving hello to the sun! The leaves catch sunshine to make food. That is special thing number three!",
    },
    {
      title: "A flower blooms!",
      sayIt:
        "The stem grows taller and taller, and POP! A beautiful flower opens! Buzzing bees come to visit. And inside the flower, brand new seeds are growing. The circle starts all over again!",
      grownUp:
        "Flowers attract pollinators like bees; pollination lets the plant make seeds. A sunflower can grow taller than a grown-up in a single summer.",
      voiceText:
        "The stem grows taller and taller, and POP! A beautiful flower opens! Buzzing bees come to visit. And inside the flower, brand new seeds are growing. The circle starts all over again!",
    },
  ],
};
