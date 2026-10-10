# WonderHow

**How things work, for little wonderers.** A visual-first, step-by-step explainer for kids (ages 4-7), with a friendly voice-over.

Pick a story (how a car goes, how a fire truck works, the water cycle, how a plant grows) and Wally the owl walks a child through it in 5 big, visual steps. Or type *anything* ("how does a volcano work?") and WonderHow writes, illustrates, and narrates a brand-new story on the spot.

## What it does

- **Visual first.** Every step has a big animated picture. The hand-built scenes (car, fire truck, water cycle, plant) are chunky SVG with x-ray peeks inside the machines; generated topics get a storybook illustration stage.
- **Steps at the kid's pace.** Giant Back/Next buttons, tappable progress dots, no timers. The child (or parent) drives.
- **Voice-over.** Every sample story ships with pre-generated narration in a warm, bright voice (20 MP3s in `public/audio/`). Generated stories narrate on demand with caching.
- **Two modes.** *Storyteller* plays the narration automatically; *Grown-up reads* turns the voice off and shows the read-aloud script big, plus a "true fact" per step for the parent.
- **Ask anything.** A generator writes a 5-step explanation for any topic: simple words, short sentences, fun sounds, one true fact per step for grown-ups. Prompt-tested for nature, biology, machines, and cycles.
- **Kid-first design.** Fredoka + Nunito, huge type (29px+ body), chunky sticker-style buttons, bright per-story color themes, Lucide icons throughout.

## How it works

```
app/page.tsx                  home: story grid + ask box
app/explore/[slug]/page.tsx    sample story player
app/ask/page.tsx              ask-anything flow
app/api/generate/route.ts     topic -> 5-step story (OpenAI, strict JSON)
app/api/narrate/route.ts      text -> cached MP3 narration (TTS)
components/ExplainerPlayer.tsx  the step engine: scenes, modes, audio, nav
components/scenes/*.tsx       hand-built animated SVG scenes
components/StoryStage.tsx      illustration stage for generated topics
lib/explainers/*.ts           story content: sayIt / grownUp / voiceText
tools/gen_audio.mjs            regenerates all sample narration MP3s
tools/oai_chat.py              OpenAI chat helper (stored credential)
```

One content model drives everything: each step's `sayIt` (read-aloud script), `grownUp` (true facts), and `voiceText` (spoken form) feed the picture captions, the parent panel, and the narration, so they can never disagree. (Inspired by the shared-model discipline of [Anatomy's](https://skills.wheresryan.sh/anatomy) skill, MIT-licensed; this project is an original kid-focused take, not a fork.)

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Regenerate the sample voice-overs:

```bash
node tools/gen_audio.mjs
```

The generator and on-demand narration call out to OpenAI and a TTS backend from server routes; they are wired for local use and need production hardening (auth, rate limits, key management) before any public deploy.

## Author

Built by **Richardson Dackam** ([X @richardsondx](https://x.com/richardsondx) - [GitHub @richardsondx](https://github.com/richardsondx))
