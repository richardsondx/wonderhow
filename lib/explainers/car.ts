import type { ExplainerDef } from "../explainers.ts";

export const car: ExplainerDef = {
  slug: "car",
  title: "How a Car Goes",
  question: "How does a car go vroom?",
  blurb: "Peek inside the engine and watch tiny pushes turn into zoom!",
  icon: "Car",
  theme: {
    bg: "#FFF4E8",
    scene: "#DFF3FF",
    accent: "#FF5A5A",
    deep: "#B23232",
    tint: "#FFE3D6",
  },
  steps: [
    {
      title: "Meet the car!",
      sayIt:
        "This is a car! It has four round wheels, a cozy seat for you, and a strong heart called an engine. The engine is what makes the car GO. Let us peek inside and see how it works!",
      grownUp:
        "A car's engine turns fuel into motion. Most family cars have 4 or 6 pistons, and the engine sits under the front hood.",
      voiceText:
        "This is a car! It has four round wheels, a cozy seat for you, and a strong heart called an engine. The engine is what makes the car GO. Let us peek inside and see how it works!",
    },
    {
      title: "Drink up, car!",
      sayIt:
        "First, the car drinks! A special juice called gasoline flows into its tummy, the fuel tank. Little pipes carry the gasoline up to the engine, just like a straw carries your juice box!",
      grownUp:
        "Gasoline is stored in the fuel tank (usually at the back of the car) and a fuel pump pushes it to the engine through fuel lines.",
      voiceText:
        "First, the car drinks! A special juice called gasoline flows into its tummy, the fuel tank. Little pipes carry the gasoline up to the engine, just like a straw carries your juice box!",
    },
    {
      title: "Breathe in!",
      sayIt:
        "The engine takes a big breath of air, just like you do! Air rushes in through the front. The engine mixes the air and the gasoline together, like stirring chocolate milk!",
      grownUp:
        "Engines need oxygen to burn fuel. The air intake and filter clean the air before it mixes with gasoline in the cylinders.",
      voiceText:
        "The engine takes a big breath of air, just like you do! Air rushes in through the front. The engine mixes the air and the gasoline together, like stirring chocolate milk!",
    },
    {
      title: "Tiny pushes!",
      sayIt:
        "Now the magic part! A teeny spark lights the mix, POOF! The tiny push shoves strong legs called pistons down, down, down. This happens hundreds of times every single second! Push, push, push!",
      grownUp:
        "Each spark plug fires a tiny controlled explosion that drives a piston down. At highway speed a piston can pump up and down about 100 times per second.",
      voiceText:
        "Now the magic part! A teeny spark lights the mix, POOF! The tiny push shoves strong legs called pistons down, down, down. This happens hundreds of times every single second! Push, push, push!",
    },
    {
      title: "Vroom, we go!",
      sayIt:
        "All those tiny pushes join together and spin the wheels round and round! The wheels grip the road, and off we go! Vroom vroom! You just learned how a car works. High five!",
      grownUp:
        "The pistons turn a crankshaft, the gears in the transmission carry that spin to the wheels, and the tires grip the road to move the car forward.",
      voiceText:
        "All those tiny pushes join together and spin the wheels round and round! The wheels grip the road, and off we go! Vroom vroom! You just learned how a car works. High five!",
    },
  ],
};
