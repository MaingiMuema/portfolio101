// Exports the CV content as JSON so the PDF/Word builders share one source of
// truth with the /resume route.
//
// Usage: node scripts/export-cv.mjs

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cv } from "../content/resume.ts";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../.cv-build/resume.json");

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(cv, null, 2), "utf8");

console.log(`Wrote ${out}`);
