import type { ExplainerDef } from "../explainers.ts";

export const fireTruck: ExplainerDef = {
  slug: "fire-truck",
  title: "How a Fire Truck Works",
  question: "How does a fire truck stop fires?",
  blurb: "Flashing lights, a giant water tank, and the tallest ladder!",
  icon: "Flame",
  theme: {
    bg: "#FFF1EC",
    scene: "#E8F4FF",
    accent: "#F43F2E",
    deep: "#A8231A",
    tint: "#FFDCD2",
  },
  steps: [
    {
      title: "Here come the heroes!",
      sayIt:
        "Hear that? Wee-oo, wee-oo! The fire truck is rushing to help! It carries brave firefighters, a giant ladder, and lots and lots of water. The flashing lights tell every car: please move aside!",
      grownUp:
        "Fire trucks (pumpers and ladder trucks) carry a crew of 3 to 6 firefighters plus tools, hoses, ladders, and water to the scene.",
      voiceText:
        "Hear that? Wee-oo, wee-oo! The fire truck is rushing to help! It carries brave firefighters, a giant ladder, and lots and lots of water. The flashing lights tell every car: please move aside!",
    },
    {
      title: "A swimming pool inside!",
      sayIt:
        "Inside the truck hides a giant water tank. It holds enough water to fill twenty bathtubs! All that water is sitting there, waiting quietly, ready for a fire.",
      grownUp:
        "A typical pumper truck carries about 2,000 liters of water (around 500 gallons), enough to start fighting a fire before connecting to a hydrant.",
      voiceText:
        "Inside the truck hides a giant water tank. It holds enough water to fill twenty bathtubs! All that water is sitting there, waiting quietly, ready for a fire.",
    },
    {
      title: "The super pump!",
      sayIt:
        "Firefighters hook up a big hose. Then the truck's super pump wakes up! It squeezes the water super, super hard. Like when you squeeze your water pistol, but one thousand times stronger!",
      grownUp:
        "The pump pressurizes water so it can travel hundreds of meters through hoses and still spray with force, even up to high windows.",
      voiceText:
        "Firefighters hook up a big hose. Then the truck's super pump wakes up! It squeezes the water super, super hard. Like when you squeeze your water pistol, but one thousand times stronger!",
    },
    {
      title: "Whoosh, water flies!",
      sayIt:
        "Whoosh! Water zooms out of the hose in a giant arc, all the way to the fire! The water cools the flames down until they get sleepy and go out. Bye-bye, fire!",
      grownUp:
        "Water puts out most fires by cooling the burning material below its ignition temperature and by smothering it with steam.",
      voiceText:
        "Whoosh! Water zooms out of the hose in a giant arc, all the way to the fire! The water cools the flames down until they get sleepy and go out. Bye-bye, fire!",
    },
    {
      title: "Up, up goes the ladder!",
      sayIt:
        "Look at that ladder stretch! Up, up, up it goes, as tall as a giraffe standing on a house! Firefighters climb up to rescue people and spray water from the sky. Hooray for firefighters!",
      grownUp:
        "Aerial ladders on ladder trucks can extend over 30 meters (100 feet), reaching the upper floors of tall buildings.",
      voiceText:
        "Look at that ladder stretch! Up, up, up it goes, as tall as a giraffe standing on a house! Firefighters climb up to rescue people and spray water from the sky. Hooray for firefighters!",
    },
  ],
};
