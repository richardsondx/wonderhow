import type { ExplainerDef } from "../explainers.ts";

export const plant: ExplainerDef = {
  slug: "plant",
  title: "How a Plant Grows",
  question: "How does a tiny seed become a flower?",
  blurb: "From a sleeping seed to a blooming flower, powered by sunlight.",
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
      title: "A plant in a package",
      sayIt:
        "A seed is a survival package: a tiny baby plant called an embryo, packed with stored food, wrapped in a tough protective coat. It can wait months or even years, completely still, until three conditions arrive: water, warmth, and air.",
      grownUp:
        "Seeds stay dormant thanks to hormones that block growth. Some desert seeds wait decades for a single good rain.",
      voiceText:
        "A seed is a survival package: a tiny baby plant called an embryo, packed with stored food, wrapped in a tough protective coat. It can wait months or even years, completely still, until three conditions arrive: water, warmth, and air.",
    },
    {
      title: "Water wakes it up",
      sayIt:
        "Rain soaks through the seed coat and the embryo wakes. Scientists call this germination. The seed swells as it drinks, and it burns through its packed lunch of stored food for energy, because it cannot make its own food yet.",
      grownUp:
        "The first visible sign of germination is the root tip breaking through the coat, usually within days for most garden seeds.",
      voiceText:
        "Rain soaks through the seed coat and the embryo wakes. Scientists call this germination. The seed swells as it drinks, and it burns through its packed lunch of stored food for energy, because it cannot make its own food yet.",
    },
    {
      title: "Roots go down first",
      sayIt:
        "The first thing out of the seed is the root, and it always grows downward, pulled by gravity. Roots do two jobs at once: they anchor the plant so wind cannot topple it, and they drink water and minerals from the soil.",
      grownUp:
        "Roots can sense gravity using tiny starch grains that settle to the bottom of their cells, like a built-in level.",
      voiceText:
        "The first thing out of the seed is the root, and it always grows downward, pulled by gravity. Roots do two jobs at once: they anchor the plant so wind cannot topple it, and they drink water and minerals from the soil.",
    },
    {
      title: "The shoot chases the light",
      sayIt:
        "Next, a shoot pushes upward toward the light and unfolds its first leaves. Leaves are solar panels. Using sunlight, water, and air, they cook up sugar, which is the plant's food. This sunlight cooking has a name: photosynthesis.",
      grownUp:
        "Photosynthesis also releases the oxygen we breathe. A large tree can produce enough oxygen for two people for a year.",
      voiceText:
        "Next, a shoot pushes upward toward the light and unfolds its first leaves. Leaves are solar panels. Using sunlight, water, and air, they cook up sugar, which is the plant's food. This sunlight cooking has a name: photosynthesis.",
    },
    {
      title: "Flowers make more seeds",
      sayIt:
        "A grown plant flowers to reproduce. Bright petals and sweet nectar attract bees, which carry a golden dust called pollen between flowers. After pollination, the flower grows fruit with brand-new seeds inside. And then the whole cycle begins again, with you knowing exactly how.",
      grownUp:
        "A sunflower can grow over 3 meters tall in a single summer, and one flower head can hold up to 2,000 seeds.",
      voiceText:
        "A grown plant flowers to reproduce. Bright petals and sweet nectar attract bees, which carry a golden dust called pollen between flowers. After pollination, the flower grows fruit with brand-new seeds inside. And then the whole cycle begins again, with you knowing exactly how.",
    },
  ],
};
