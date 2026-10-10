import type { ExplainerDef } from "../explainers.ts";

export const fireTruck: ExplainerDef = {
  slug: "fire-truck",
  title: "How a Fire Truck Works",
  question: "How does a fire truck beat a fire?",
  blurb: "Two thousand liters of water, a super pump, and the tallest ladder.",
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
      title: "When the alarm rings",
      sayIt:
        "When a fire alarm rings at the station, everything moves fast. Firefighters pull on heat-proof gear, climb aboard, and the truck roars out with lights flashing and siren wailing. The flashing lights are a signal to every driver: clear the road, we are coming to help.",
      grownUp:
        "A fire crew is typically 3 to 6 firefighters. In many cities the goal is to arrive within about 4 minutes of the call.",
      voiceText:
        "When a fire alarm rings at the station, everything moves fast. Firefighters pull on heat-proof gear, climb aboard, and the truck roars out with lights flashing and siren wailing. The flashing lights are a signal to every driver: clear the road, we are coming to help.",
    },
    {
      title: "Two thousand liters on board",
      sayIt:
        "Inside the truck hides a giant tank holding about two thousand liters of water. That is as much as twenty full bathtubs. The truck carries its own water so firefighters can start spraying the moment they arrive, before they even connect to a hydrant.",
      grownUp:
        "A standard pumper carries around 2,000 liters (about 500 gallons). Larger tankers in rural areas can carry four times that.",
      voiceText:
        "Inside the truck hides a giant tank holding about two thousand liters of water. That is as much as twenty full bathtubs. The truck carries its own water so firefighters can start spraying the moment they arrive, before they even connect to a hydrant.",
    },
    {
      title: "The pump builds pressure",
      sayIt:
        "Water sitting in a tank has no force on its own. That is the pump's job. Driven by the truck's engine, the pump squeezes the water and builds pressure, like squeezing a water pistol a thousand times harder. Pressure is what lets water fly far and climb all the way up to high windows.",
      grownUp:
        "Fire pumps can push water at over 10 bar of pressure, enough to send a jet tens of meters into the air.",
      voiceText:
        "Water sitting in a tank has no force on its own. That is the pump's job. Driven by the truck's engine, the pump squeezes the water and builds pressure, like squeezing a water pistol a thousand times harder. Pressure is what lets water fly far and climb all the way up to high windows.",
    },
    {
      title: "The hose attacks the fire",
      sayIt:
        "Firefighters aim the hose and open the nozzle. Water shoots out in a powerful arc and crashes onto the flames. Water wins in two ways: it cools the burning material below the temperature where fire can survive, and it flashes into steam that smothers the flames.",
      grownUp:
        "Water absorbs enormous heat as it turns to steam, which is why a relatively small amount can knock down a large fire.",
      voiceText:
        "Firefighters aim the hose and open the nozzle. Water shoots out in a powerful arc and crashes onto the flames. Water wins in two ways: it cools the burning material below the temperature where fire can survive, and it flashes into steam that smothers the flames.",
    },
    {
      title: "The ladder reaches the sky",
      sayIt:
        "Some trucks carry an aerial ladder that extends over thirty meters, about as long as three school buses end to end. Firefighters climb it to rescue people from high floors and to spray water down onto the fire from above. Tank, pump, hose, ladder: now you know the whole machine.",
      grownUp:
        "Aerial ladders typically reach 30 to 40 meters. The turntable at the base lets the ladder rotate a full circle.",
      voiceText:
        "Some trucks carry an aerial ladder that extends over thirty meters, about as long as three school buses end to end. Firefighters climb it to rescue people from high floors and to spray water down onto the fire from above. Tank, pump, hose, ladder: now you know the whole machine.",
    },
  ],
};
