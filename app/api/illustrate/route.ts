import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import { createHash } from "crypto";
import { existsSync, mkdirSync } from "fs";
import path from "path";

const MODEL = "gpt-image-2.5-flare";
const STYLE =
  "Children's book illustration for ages 6 to 10. Flat vector style, bold thick dark outlines, " +
  "bright saturated colors, simple clear shapes, cheerful and dramatic, absolutely no text, " +
  "no words, no letters, no numbers.";

function illustrate(prompt: string, out: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const full = `${STYLE} Scene: ${prompt}`;
    const p = execFile(
      "python3",
      [
        "/home/hatch/workspace/skills/openai/bin/oai_images.py",
        "generate",
        "--model", MODEL,
        "--prompt", full,
        "--out", out,
        "--size", "1536x1024",
      ],
      { timeout: 240000, maxBuffer: 16 * 1024 * 1024 },
      (err, stdout) => (err ? reject(err) : resolve(String(stdout).trim()))
    );
    p.on("error", reject);
  });
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const clean = String(prompt ?? "").trim().slice(0, 400);
    if (clean.length < 4) return NextResponse.json({ error: "nothing to draw" }, { status: 400 });

    const hash = createHash("sha256").update(clean).digest("hex").slice(0, 16);
    const dir = path.join(process.cwd(), "public", "illustrations");
    const file = path.join(dir, `${hash}.png`);
    if (!existsSync(file)) {
      mkdirSync(dir, { recursive: true });
      await illustrate(clean, file);
    }
    return NextResponse.json({ url: `/illustrations/${hash}.png` });
  } catch (e) {
    console.error("illustrate failed", e);
    return NextResponse.json({ error: "drawing trouble" }, { status: 500 });
  }
}
