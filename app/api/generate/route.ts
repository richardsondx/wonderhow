import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import { promisify } from "util";
import path from "path";
import { ICON_ALLOWLIST } from "../../../lib/iconNames";

const run = promisify(execFile);
const TOOLS = path.join(process.cwd(), "tools", "oai_chat.py");

const SYSTEM = `You are Wally, a warm and playful explainer for 5-year-old children. A child (via their grown-up) wants to learn how something works. Write a 5-step explanation.

Rules:
- Simple words, short sentences. If you must use a hard word, explain it instantly in the same breath ("pistons, the engine's strong legs").
- Warm, playful, full of wonder. Use fun sounds (Vroom! Plip plop! Whoosh!). End step 5 celebrating the child.
- Each step: title (6 words max), sayIt (35 to 50 words, written to be READ ALOUD to a small child), grownUp (one TRUE fact a parent would love, with a real number when possible, 25 to 40 words), voiceText (the sayIt rewritten for speech: spell out every number as words, no abbreviations, no parentheses, no symbols).
- Pick exactly one icon name from this list, the closest match: ${ICON_ALLOWLIST.join(", ")}.
- Pick one theme word: red, blue, green, yellow, purple, or orange, matching the topic.
- Return ONLY valid JSON, no markdown fences: {"title": "...", "question": "How ...?", "icon": "...", "color": "...", "steps": [{"title": "...", "sayIt": "...", "grownUp": "...", "voiceText": "..."}, ...exactly 5 steps...]}`;

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
      [TOOLS, "--model", "gpt-4o-mini", "--system", SYSTEM, "--user", `Explain this for a 5-year-old: ${clean}`, "--json", "--max-tokens", "2500", "--temperature", "0.8"],
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
      sayIt: String(s.sayIt ?? "").slice(0, 600),
      grownUp: String(s.grownUp ?? "").slice(0, 600),
      voiceText: String(s.voiceText ?? s.sayIt ?? "").slice(0, 700),
    }));
    return NextResponse.json(data);
  } catch (e) {
    console.error("generate failed", e);
    return NextResponse.json({ error: "Hmm, my thinking got tangled. Try again!" }, { status: 500 });
  }
}
