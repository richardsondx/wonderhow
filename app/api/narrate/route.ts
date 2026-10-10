import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import { createHash } from "crypto";
import { existsSync, mkdirSync } from "fs";
import path from "path";

const VOICE = "avocado_v2:Vanessa";

function speak(text: string, out: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const p = execFile(
      "/opt/hatch/bin/tts",
      ["speak", "--voice", VOICE, "--output", out, "--text-stdin", "--timeout-secs", "120"],
      { timeout: 150000, maxBuffer: 1024 * 1024 },
      (err, stdout) => (err ? reject(err) : resolve(String(stdout).trim()))
    );
    // NOTE: pass text via explicit stdin write+end; the promisified `input`
    // option hangs with this CLI.
    p.stdin?.write(text);
    p.stdin?.end();
  });
}

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const clean = String(text ?? "").trim().slice(0, 800);
    if (clean.length < 2) return NextResponse.json({ error: "nothing to say" }, { status: 400 });

    const hash = createHash("sha256").update(clean).digest("hex").slice(0, 16);
    const dir = path.join(process.cwd(), "public", "audio", "gen");
    const file = path.join(dir, `${hash}.mp3`);
    if (!existsSync(file)) {
      mkdirSync(dir, { recursive: true });
      await speak(clean, file);
    }
    return NextResponse.json({ url: `/audio/gen/${hash}.mp3` });
  } catch (e) {
    console.error("narrate failed", e);
    return NextResponse.json({ error: "voice trouble" }, { status: 500 });
  }
}
