#!/usr/bin/env node
// _System/backlink.mjs — back-propagation (CLAUDE.md §8).
// Rebuilds every Brain/Essays page's `referenced_by:` from the forward graph
// (related + connections.*). Idempotent. `referenced_by` is machine-owned;
// never hand-edit. Run before commit: node _System/backlink.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { readFrontmatter, outRefs } from "./lib-frontmatter.mjs";

const ROOT = new URL("..", import.meta.url).pathname;

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
const byId = new Map();   // id -> relpath
const fwd = new Map();    // id -> Set(targetId)

for (const rel of pages) {
  const { fm } = readFrontmatter(join(ROOT, rel));
  if (!fm || !fm.id) continue;
  byId.set(fm.id, rel);
  fwd.set(fm.id, new Set(outRefs(fm)));
}

// reverse map: target -> Set(sourceId)
const rev = new Map();
for (const [src, targets] of fwd) {
  for (const t of targets) {
    if (!rev.has(t)) rev.set(t, new Set());
    rev.get(t).add(src);
  }
}

let changed = 0;
for (const [id, rel] of byId) {
  const abs = join(ROOT, rel);
  const raw = readFileSync(abs, "utf8");
  const inbound = [...(rev.get(id) || [])].sort();
  const line = `referenced_by: [${inbound.join(", ")}]`;
  let next;
  if (/^referenced_by:.*$/m.test(raw)) {
    next = raw.replace(/^referenced_by:.*$/m, line);
  } else {
    // insert before closing --- of frontmatter
    next = raw.replace(/^---\r?\n([\s\S]*?)\r?\n---/, (full, inner) =>
      `---\n${inner}\n${line}\n---`);
  }
  if (next !== raw) { writeFileSync(abs, next); changed++; }
}

console.log(`backlink: ${byId.size} pages indexed · ${rev.size} targets referenced · ${changed} files updated`);
