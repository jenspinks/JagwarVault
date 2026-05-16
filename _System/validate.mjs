#!/usr/bin/env node
// _System/validate.mjs — pre-commit linter (CLAUDE.md §8).
// Exits 1 on ERROR (blocks commit), 0 on warnings/clean.
// Run: node _System/validate.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { readFrontmatter, outRefs } from "./lib-frontmatter.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const errors = [];
const warns = [];
const infos = [];

// 1. Load canonical IDs from Ontology.md (every `BACKTICK-id-BACKTICK` in tables)
const onto = readFileSync(join(ROOT, "_System/Ontology.md"), "utf8");
const ids = new Set([...onto.matchAll(/`([A-Z]+-[A-Za-z0-9]+)`/g)].map((m) => m[1]));
const pageless = new Set(
  onto.split("Declared — pageless")[1]
    ? [...onto.split("Declared — pageless")[1].matchAll(/`([A-Z]+-[A-Za-z0-9]+)`/g)].map((m) => m[1])
    : []
);
if (ids.size === 0) errors.push("Ontology.md: no entity IDs parsed — check format.");

// 2. Walk Brain/ and Essays/ for content pages
function walk(dir) {
  const abs = join(ROOT, dir);
  let out = [];
  let entries;
  try { entries = readdirSync(abs); } catch { return out; }
  for (const e of entries) {
    if (e.startsWith(".")) continue;
    const p = join(abs, e);
    if (statSync(p).isDirectory()) out = out.concat(walk(join(dir, e)));
    else if (extname(e) === ".md") out.push(join(dir, e));
  }
  return out;
}
const pages = [...walk("Brain"), ...walk("Essays")];
const seenIds = new Map();

for (const rel of pages) {
  const { fm, body } = readFrontmatter(join(ROOT, rel));
  if (!fm) { warns.push(`${rel}: no frontmatter.`); continue; }

  // 2a. id: REQUIRED + canonical for Brain (machine memory). Essays have no
  //     id by schema (CLAUDE.md §6) — skip id checks there.
  const isBrain = rel.startsWith("Brain/");
  if (isBrain) {
    if (!fm.id) errors.push(`${rel}: missing 'id' (required for Brain).`);
    else {
      if (!ids.has(fm.id)) errors.push(`${rel}: id '${fm.id}' not in Ontology.`);
      if (seenIds.has(fm.id)) errors.push(`${rel}: id '${fm.id}' duplicates ${seenIds.get(fm.id)}.`);
      else seenIds.set(fm.id, rel);
    }
  } else if (fm.id) {
    warns.push(`${rel}: Essays pages should not carry 'id' (CLAUDE.md §6).`);
  }

  // 2b. every related/connections ref resolves to Ontology
  for (const ref of outRefs(fm)) {
    if (!ids.has(ref)) errors.push(`${rel}: reference '${ref}' not in Ontology (typo or undeclared entity).`);
  }

  // 2c. related is 3–5 curated neighbors (CLAUDE.md §6)
  if (Array.isArray(fm.related) && (fm.related.length < 3 || fm.related.length > 5))
    warns.push(`${rel}: 'related' has ${fm.related.length} (CLAUDE.md §6 wants 3–5 curated).`);

  // 2d. stale review_date
  if (fm.review_date && /^\d{4}-\d{2}-\d{2}$/.test(fm.review_date) && new Date(fm.review_date) < new Date())
    warns.push(`${rel}: review_date ${fm.review_date} is past — review/refresh 'status'.`);

  // 2e. broken wikilinks (lenient: resolve by Ontology display-name OR existing file basename)
  for (const lm of body.matchAll(/\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/g)) {
    const target = lm[1].trim();
    const fileExists = pages.some((p) => p.split("/").pop().replace(/\.md$/, "") === target)
      || target === "CLAUDE" || target.startsWith("Sources/") || target.startsWith("_System/");
    const nameKnown = onto.includes(`| ${target} |`);
    if (!fileExists && !nameKnown) infos.push(`${rel}: wikilink [[${target}]] unresolved (page not yet written?).`);
  }
}

// 3. Pageless Ontology entries that now HAVE a page → should be promoted
for (const id of pageless) {
  if (seenIds.has(id)) warns.push(`Ontology: '${id}' is in 'Declared — pageless' but a page exists — promote it.`);
}

// 4. Thin-source check — DEFERRED (v2). Requires parsing each page's public
//    anchors against _System/Master Source List.md. Documented TODO so the
//    rule in CLAUDE.md §8 is not silently unimplemented.
infos.push("[TODO v2] thin-source check (Strong Read <2 public anchors) not yet enforced — manual review until implemented.");

// Report
const tag = (a, l) => a.forEach((m) => console.log(`${l} ${m}`));
tag(infos, "·");
tag(warns, "⚠");
tag(errors, "✗");
console.log(`\nvalidate: ${pages.length} pages · ${ids.size} ontology IDs · ${errors.length} errors · ${warns.length} warnings`);
process.exit(errors.length ? 1 : 0);
