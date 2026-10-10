// Generate narrator MP3s for every sample explainer step.
// Run: node tools/gen_audio.mjs   (skips files that already exist)
import { execFile } from "child_process";
import { existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const { car } = await import("../lib/explainers/car.ts");
const { fireTruck } = await import("../lib/explainers/firetruck.ts");
const { waterCycle } = await import("../lib/explainers/watercycle.ts");
const { plant } = await import("../lib/explainers/plant.ts");

const DEFS = [car, fireTruck, waterCycle, plant];
const VOICE = "avocado_v2:Vanessa";

function speak(text, out) {
  return new Promise((resolve, reject) => {
    const p = execFile(
      "/opt/hatch/bin/tts",
      ["speak", "--voice", VOICE, "--output", out, "--text-stdin", "--timeout-secs", "120"],
      { timeout: 150000, maxBuffer: 1024 * 1024 },
      (err, stdout) => (err ? reject(err) : resolve(stdout.trim()))
    );
    p.stdin.write(text);
    p.stdin.end();
  });
}

let made = 0, skipped = 0, failed = 0;
for (const def of DEFS) {
  const dir = path.join(root, "public", "audio", def.slug);
  mkdirSync(dir, { recursive: true });
  for (let i = 0; i < def.steps.length; i++) {
    const out = path.join(dir, `${i + 1}.mp3`);
    if (existsSync(out) && !process.argv.includes("--redo")) { skipped++; continue; }
    try {
      console.log(`[${def.slug} ${i + 1}/${def.steps.length}] synthesizing...`);
      const res = await speak(def.steps[i].voiceText, out);
      console.log("   ", res);
      made++;
    } catch (e) {
      console.log("    FAILED:", String(e.message || e).slice(0, 120));
      failed++;
    }
  }
}
console.log(`done: ${made} generated, ${skipped} skipped, ${failed} failed`);
