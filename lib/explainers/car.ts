import type { ExplainerDef } from "../explainers.ts";

export const car: ExplainerDef = {
  slug: "car",
  title: "How a Car Goes",
  question: "How does a car turn fuel into motion?",
  blurb: "Peek inside the engine and watch tiny explosions become vroom.",
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
      title: "The engine is the muscle",
      sayIt:
        "A car looks simple from the outside: four wheels, doors, windows. But under the front hood hides the engine, the car's muscle. The engine has one job: turning liquid fuel into spinning motion. Here is exactly how it does it, step by step.",
      grownUp:
        "Most family cars burn gasoline in an internal combustion engine, usually with 4 or 6 cylinders. Electric cars skip all of this and use a battery plus motor instead.",
      voiceText:
        "A car looks simple from the outside: four wheels, doors, windows. But under the front hood hides the engine, the car's muscle. The engine has one job: turning liquid fuel into spinning motion. Here is exactly how it does it, step by step.",
    },
    {
      title: "Gasoline, the car's food",
      sayIt:
        "Everything starts with gasoline, a liquid fuel made from ancient oil deep underground. It waits in the fuel tank at the back of the car. When the driver presses the gas pedal, a pump pushes gasoline through thin pipes called fuel lines, all the way forward to the engine.",
      grownUp:
        "A typical fuel tank holds 40 to 60 liters. The fuel pump pressurizes the lines so gasoline arrives at the engine as a fine, even spray.",
      voiceText:
        "Everything starts with gasoline, a liquid fuel made from ancient oil deep underground. It waits in the fuel tank at the back of the car. When the driver presses the gas pedal, a pump pushes gasoline through thin pipes called fuel lines, all the way forward to the engine.",
    },
    {
      title: "Air, the invisible ingredient",
      sayIt:
        "An engine cannot burn fuel alone. It needs oxygen, and oxygen is in the air. The car breathes in through the grille at the front. The air gets cleaned by a filter, then mixed with the gasoline into a fine mist, like an incredibly thin fog, ready to burn.",
      grownUp:
        "Engines mix roughly 14 parts air to 1 part fuel by weight. The air filter traps dust that would otherwise scratch the cylinders.",
      voiceText:
        "An engine cannot burn fuel alone. It needs oxygen, and oxygen is in the air. The car breathes in through the grille at the front. The air gets cleaned by a filter, then mixed with the gasoline into a fine mist, like an incredibly thin fog, ready to burn.",
    },
    {
      title: "Tiny explosions, hundreds per second",
      sayIt:
        "Here is the clever part. The mist flows into small tubes called cylinders. A spark plug fires an electric spark, and the mist explodes. Not a big explosion, a tiny controlled one. The blast shoves down a piston, a sliding plug of metal. Each piston can pump up and down about one hundred times every second.",
      grownUp:
        "The four strokes are intake, compression, power, and exhaust. At highway speed the crankshaft spins around 2,000 to 3,000 times per minute.",
      voiceText:
        "Here is the clever part. The mist flows into small tubes called cylinders. A spark plug fires an electric spark, and the mist explodes. Not a big explosion, a tiny controlled one. The blast shoves down a piston, a sliding plug of metal. Each piston can pump up and down about one hundred times every second.",
    },
    {
      title: "From pushes to vroom",
      sayIt:
        "All those tiny pushes add up. They turn a rod called the crankshaft, gears pass the spin along through the transmission, and finally the wheels turn. The tires grip the road and push the car forward. Hundreds of tiny explosions every second, and you feel it as one smooth vroom. Now you know.",
      grownUp:
        "The transmission trades speed for force using different gear ratios, which is why the engine sounds different when the car shifts.",
      voiceText:
        "All those tiny pushes add up. They turn a rod called the crankshaft, gears pass the spin along through the transmission, and finally the wheels turn. The tires grip the road and push the car forward. Hundreds of tiny explosions every second, and you feel it as one smooth vroom. Now you know.",
    },
  ],
};
