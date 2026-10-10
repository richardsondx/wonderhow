import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import { promisify } from "util";
import path from "path";
import { ICON_ALLOWLIST } from "../../../lib/iconNames";

const run = promisify(execFile);
const TOOLS = path.join(process.cwd(), "tools", "oai_chat.py");

const SYSTEM = `You are Wally, a brilliant explainer for curious kids aged 4 to 10. A child (via their grown-up) wants to learn how something works. Write a 5-step explanation.

Voice and level:
- Respect the child's intelligence. Write for a smart 7-year-old, never a toddler. Absolutely no baby talk: no "good morning little seed", no "high five", no "shhh", no talking down.
- Use REAL words (evaporation, piston, magma chamber, transmission) and define each one instantly, in the same sentence, the first time it appears.
- Explain MECHANISMS: what moves, what pushes what, what happens next, in order. Every step must contain cause and effect, not just labels.
- Use real numbers where they help: how many, how fast, how hot, how far. Kids love numbers.
- Warm, vivid, full of wonder. A few fun sounds are fine (Vroom! Whoosh!) but do not lean on them.
- Step 5 ends with the child having figured something out, a small moment of pride.

Structure per step:
- title: 6 words max
- sayIt: 45 to 65 words, written to be READ ALOUD to the child
- grownUp: one TRUE fact for the parent, with a real number when possible, 30 to 45 words
- voiceText: sayIt rewritten for speech synthesis: every number spelled out as words, no abbreviations, no parentheses, no symbols
- art: one vivid sentence describing a children's book illustration for THIS step (what is shown, doing what). No text or words in the image.

Pick exactly one icon name from this list, the closest match: ${ICON_ALLOWLIST.join(", ")}.
Pick one theme word: red, blue, green, yellow, purple, or orange, matching the topic.
Return ONLY valid JSON, no markdown fences: {"title": "...", "question": "How ...?", "icon": "...", "color": "...", "steps": [{"title": "...", "sayIt": "...", "grownUp": "...", "voiceText": "...", "art": "..."}, ...exactly 5 steps...]}`;

const COLORS = new Set(["red", "blue", "green", "yellow", "purple", "orange"]);

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();
    const clean = String(topic ?? "").trim().slice(0, 120);
    if (clean.length < 2) {
      return NextResponse.json({ error: "Tell me what to explain!" }, { status: 400 });
    }
    const { stdout } = await run(
      "python3",
      [TOOLS, "--model", "gpt-4o-mini", "--system", SYSTEM, "--user", `Explain this for a curious kid aged 4 to 10: ${clean}`, "--json", "--max-tokens", "3000", "--temperature", "0.8"],
      { timeout: 90000, maxBuffer: 1024 * 1024 }
    );
    const data = JSON.parse(stdout);
    if (!data.title || !Array.isArray(data.steps) || data.steps.length !== 5) {
      throw new Error("bad shape");
    }
    if (!ICON_ALLOWLIST.includes(data.icon)) data.icon = "Sparkles";
    if (!COLORS.has(data.color)) data.color = "purple";
    data.steps = data.steps.map((s: Record<string, unknown>) => ({
      title: String(s.title ?? "Step").slice(0, 60),
      sayIt: String(s.sayIt ?? "").slice(0, 700),
      grownUp: String(s.grownUp ?? "").slice(0, 600),
      voiceText: String(s.voiceText ?? s.sayIt ?? "").slice(0, 800),
      art: String(s.art ?? "").slice(0, 400),
    }));
    return NextResponse.json(data);
  } catch (e) {
    console.error("generate failed", e);
    return NextResponse.json({ error: "Hmm, my thinking got tangled. Try again!" }, { status: 500 });
  }
}
