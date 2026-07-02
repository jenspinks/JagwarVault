#!/usr/bin/env node
// _System/validate.mjs — pre-commit linter (CLAUDE.md §8).
// Exits 1 on ERROR (blocks commit), 0 on warnings/clean.
// Run: node _System/validate.mjs
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import { execSync } from "node:child_process";
import { readFrontmatter, outRefs } from "./lib-frontmatter.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const errors = [];
const warns = [];
const infos = [];

// 1. Load canonical IDs from Ontology.md (every `BACKTICK-id-BACKTICK` in tables)
const onto = readFileSync(join(ROOT, "_System/Ontology.md"), "utf8");
const ids = new Set([...onto.matchAll(/`([A-Z]+-[A-Za-z0-9]+)`/g)].map((m) => m[1]));
// Pageless = IDs in the "Declared — pageless" section ONLY. Bound the region at
// the next "## " heading so later sections (e.g. "Classification notes") that
// mention paged IDs in prose don't get mis-read as pageless declarations.
const pagelessRegion = (onto.split("Declared — pageless")[1] || "").split(/\n## /)[0];
const pageless = new Set(
  [...pagelessRegion.matchAll(/`([A-Z]+-[A-Za-z0-9]+)`/g)].map((m) => m[1])
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
// For wikilink resolution, mirror Obsidian: any .md anywhere in the vault is a
// valid target, by full vault-relative path OR by basename. (Frontmatter/id
// checks below still apply only to `pages` = Brain/ + Essays/.)
const linkTargets = [...pages, ...walk("Sources"), ...walk("_System")];
// Lowercased — Obsidian resolves wikilinks case-insensitively.
const linkPathSet = new Set(linkTargets.map((p) => p.replace(/\.md$/, "").toLowerCase()));
const linkBaseSet = new Set(linkTargets.map((p) => p.split("/").pop().replace(/\.md$/, "").toLowerCase()));
const seenIds = new Map();

for (const rel of pages) {
  const { fm, body } = readFrontmatter(join(ROOT, rel));
  if (!fm) { warns.push(`${rel}: no frontmatter.`); continue; }

  // 2a. id: REQUIRED + canonical for Brain (machine memory). Essays have no
  //     id by schema (CLAUDE.md §6) — skip id checks there. `type: index`
  //     Brain pages (README / folder indexes / thematic Roy-Voice aggregations)
  //     are navigation aids, not ontology entities — they carry no id.
  const isBrain = rel.startsWith("Brain/");
  if (isBrain && fm.type !== "index") {
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

  // 2f. anti-totalization: a Brain content page can't be 'stable' without a
  //     Counterarguments / Alternate Reads section (CLAUDE.md ANTI-PATTERNS #1/#2).
  //     Activates at promotion time; the template now seeds the section for new pages.
  if (isBrain && fm.status === "stable" && ["song", "concept", "character", "album"].includes(fm.type)
      && !/^#{1,6}\s+.*(counterargument|alternate read)/im.test(body))
    warns.push(`${rel}: status: stable but no '## Counterarguments / Alternate Reads' section (anti-totalization).`);

  // 2g. size budget: Brain song cards are distilled indexes, not essays
  //     (layer contract; 2026-07-01 efficiency pass §3.1). Warn past ~6 KB body —
  //     re-distill toward the ~5 KB 33-era card shape; the Essays twin is the prose home.
  if (rel.startsWith("Brain/Songs/") && fm.type === "song" && Buffer.byteLength(body, "utf8") > 6144)
    warns.push(`${rel}: song card body is ${(Buffer.byteLength(body, "utf8") / 1024).toFixed(1)} KB (>6 KB budget, §3.1) — re-distill; the essay is the prose home.`);

  // 2e. broken wikilinks (lenient: resolve by Ontology display-name OR existing file basename)
  //     Strip code (fenced blocks + inline spans) first: a `[[link]]` inside backticks
  //     is documentation of a link (e.g. a provenance note recording a fix), not a live
  //     link — Obsidian renders it as code. Don't lint it.
  const scanBody = body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`\n]*`/g, "");
  for (const lm of scanBody.matchAll(/\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/g)) {
    // Strip a trailing backslash left by an escaped pipe (`\|alias` in table cells).
    const target = lm[1].trim().replace(/\\$/, "");
    const t = target.toLowerCase();
    // Resolve like Obsidian: any vault .md by full vault-relative path OR basename, case-insensitive.
    const fileExists = linkPathSet.has(t) || linkBaseSet.has(t)
      || t === "claude" || t === "gemini";
    const nameKnown = onto.toLowerCase().includes(`| ${t} |`);
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

// 5. file-map.md freshness — warn if a present _System/*.md is absent from the map
//    (catches stale-snapshot drift: new generated/system files not re-mapped).
try {
  const fileMap = readFileSync(join(ROOT, "_System/file-map.md"), "utf8");
  const sysMd = readdirSync(join(ROOT, "_System")).filter((f) => f.endsWith(".md"));
  const missing = sysMd.filter((f) => !fileMap.includes(f) && !fileMap.includes(f.replace(/\.md$/, "")));
  if (missing.length)
    warns.push(`file-map.md omits ${missing.length} present _System/ file(s): ${missing.join(", ")} — re-run gen-file-map.py.`);
} catch { /* file-map.md absent — skip */ }

// 6. Privacy-leak guard — ERROR if a file matching .gitignore is git-TRACKED.
//    (The 2026-06 Vault Review Context leak: gitignored files were MOVED to
//    _System/_archive/, escaped the path-exact rules, and got pushed. Rules are
//    now pattern-based, and this check catches any future bypass: a rename, a
//    new gitignore gap, or an accidental force-add.)
//    Files deleted-but-not-yet-committed are skipped (existsSync) so the check
//    stays quiet while an autosync removal is in flight.
try {
  const trackedIgnored = execSync("git ls-files -ci --exclude-standard -z", { cwd: ROOT })
    .toString().split("\0").filter(Boolean)
    .filter((f) => existsSync(join(ROOT, f)));
  for (const f of trackedIgnored)
    errors.push(`${f}: matches .gitignore but is git-TRACKED (privacy leak — git rm --cached it before it syncs).`);
} catch { infos.push("privacy-leak guard skipped (git unavailable)."); }

// 7. Glued-frontmatter lint — ERROR on a value with a key concatenated onto it
//    (e.g. `folded: 2026-06-30publish: false`). A 2026-06-30 bulk stamping pass
//    did exactly this to 19 drafts, silently destroying the next field, and the
//    validator saw nothing. Narrow patterns (date/bool glued to a key) so URLs
//    and colons inside quoted values can't false-positive.
for (const rel of pages) {
  const raw = readFileSync(join(ROOT, rel), "utf8");
  const fmBlock = raw.startsWith("---\n") ? raw.slice(4, raw.indexOf("\n---", 4)) : "";
  for (const line of fmBlock.split("\n")) {
    if (/\d{4}-\d{2}-\d{2}[a-z_]+\s*:/.test(line) || /\b(?:true|false)[a-z_]+\s*:/.test(line))
      errors.push(`${rel}: glued frontmatter line ('${line.trim().slice(0, 60)}') — a bulk edit dropped a newline; split it.`);
  }
}

// Report
const tag = (a, l) => a.forEach((m) => console.log(`${l} ${m}`));
tag(infos, "·");
tag(warns, "⚠");
tag(errors, "✗");
console.log(`\nvalidate: ${pages.length} pages · ${ids.size} ontology IDs · ${errors.length} errors · ${warns.length} warnings`);
process.exit(errors.length ? 1 : 0);
