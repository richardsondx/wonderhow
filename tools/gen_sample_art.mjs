// Pre-generate Bluey-style illustrations for every sample story step.
// Run: node tools/gen_sample_art.mjs   (skips files that already exist)
// Images land in public/illustrations/samples/<slug>/<n>.png
import { execFile } from "child_process";
import { existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const { SAMPLE_ART } = await import("../lib/explainers/art.ts");

const MODEL = "gpt-image-2.5-flare";
const STYLE =
  "Warm high-quality children's cartoon illustration in the style of modern Australian kids' TV animation " +
  "(think Bluey): soft rounded organic shapes, gentle hand-drawn warmth, expressive simple characters with " +
  "kind faces, clean uncluttered cinematic compositions, warm natural color palette with soft painterly " +
  "shading and subtle gradients, cozy backgrounds with depth, never flat clip-art, never neon, " +
  "absolutely no text, no words, no letters, no numbers.";

const CONCURRENCY = 3;

function illustrate(prompt, out) {
  return new Promise((resolve, reject) => {
    const p = execFile(
      "python3",
      [
        "/home/hatch/workspace/skills/openai/bin/oai_images.py",
        "generate",
        "--model", MODEL,
        "--prompt", `${STYLE} Scene: ${prompt}`,
        "--out", out,
        "--size", "1536x1024",
      ],
      { timeout: 240000, maxBuffer: 16 * 1024 * 1024 },
      (err, stdout) => (err ? reject(err) : resolve(String(stdout).trim()))
    );
    p.on("error", reject);
  });
}

const jobs = [];
for (const [slug, prompts] of Object.entries(SAMPLE_ART)) {
  const dir = path.join(root, "public", "illustrations", "samples", slug);
  mkdirSync(dir, { recursive: true });
  prompts.forEach((prompt, i) => {
    const out = path.join(dir, `${i + 1}.png`);
    if (existsSync(out) && !process.argv.includes("--redo")) {
      console.log(`[${slug} ${i + 1}] exists, skipping`);
      return;
    }
    jobs.push({ slug, i, prompt, out });
  });
}

let done = 0, failed = 0;
async function worker() {
  while (jobs.length) {
    const job = jobs.shift();
    if (!job) return;
    try {
      console.log(`[${job.slug} ${job.i + 1}] drawing...`);
      await illustrate(job.prompt, job.out);
      done++;
      console.log(`[${job.slug} ${job.i + 1}] saved (${done}/${done + failed + jobs.length})`);
    } catch (e) {
      failed++;
      console.log(`[${job.slug} ${job.i + 1}] FAILED: ${String(e.message || e).slice(0, 120)}`);
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
console.log(`done: ${done} drawn, ${failed} failed`);
