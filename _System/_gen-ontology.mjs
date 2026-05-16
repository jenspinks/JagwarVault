#!/usr/bin/env node
// _System/_gen-ontology.mjs
// SCAFFOLD GENERATOR — produces the INITIAL Ontology.md from current folder
// content. After first generation, Ontology.md is HAND-MAINTAINED (CLAUDE.md
// §8: new entities are added there first). Do NOT re-run blindly — it will
// overwrite manual curation. Kept as a one-shot bootstrap / audit aid.

import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;

function pascal(name) {
  return name
    .replace(/[#&/().,'-]/g, " ")
    .replace(/\bfeat\b/gi, "feat")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function listMd(dir) {
  try {
    return readdirSync(join(ROOT, dir))
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

const concepts = listMd("Wiki/Concepts");
const characters = listMd("Wiki/Characters");
const albums = listMd("Wiki/Albums");

const songDirs = ["Subject to Flooding (2018)", "33 (2022)", "Lucius Lullaby (2026)", "Singles & EPs"];
const songs = [];
for (const d of songDirs) {
  for (const s of listMd(`Wiki/Songs/${d}`)) {
    if (s === "Singles Index") continue; // navigation page, not an entity
    songs.push({ name: s, era: d });
  }
}

const rows = [];
const seen = new Set();
function add(type, prefix, name, note = "") {
  let id = `${prefix}-${pascal(name)}`;
  let n = 2;
  const base = id;
  while (seen.has(id)) id = `${base}${n++}`;
  seen.add(id);
  rows.push({ type, id, name, note });
  return id;
}

concepts.forEach((c) => add("concept", "CONCEPT", c));
characters.forEach((c) => add("character", "CHAR", c));
albums.forEach((a) => add("album", "ALBUM", a.replace(/\s*\(album\)$/, ""), a));
songs.forEach((s) => add("song", "SONG", s.name, s.era));

// Declared-but-pageless: heavily referenced in wikilinks, no page yet.
// Listed so forward-references validate; flagged pageless by validate.mjs.
const pageless = [
  ["CONCEPT-TheCircle", "The Circle", "foundational mythos; referenced everywhere, no page yet"],
  ["CONCEPT-TheMirror", "The Mirror", "Lucius anchor; referenced, no page yet"],
  ["CONCEPT-TheMoon", "The Moon", "lunar/Yesod register; pending"],
  ["CONCEPT-Yesod", "Yesod", "Kabbalah reflection sphere; pending"],
  ["CONCEPT-Malkhut", "Malkhut", "Kabbalah kingdom; pending"],
  ["CONCEPT-Tiferet", "Tiferet", "Kabbalah beauty/center; pending"],
  ["CONCEPT-TheEmptyMirror", "The Empty Mirror", "Lucius hand tattoo; pending"],
  ["CONCEPT-TheAngleAngel", "The Angle/Angel", "vowel/consonant, spirit/structure; pending"],
  ["CHAR-BallerinaBoy", "Ballerina Boy", "buried child self; referenced, no page yet"],
  ["CHAR-Leif", "Leif", "Lucius sidekick mode; pending"],
  ["CHAR-TheBoss", "The Boss / BMRC", "whom Lucius reports to; pending"],
];

const types = ["concept", "character", "album", "song"];
const labels = { concept: "Concepts", character: "Characters", album: "Albums", song: "Songs" };

let md = `# Ontology — Controlled Vocabulary

The canonical entity registry for the JagwarTwin vault. Per [[CLAUDE]] §8,
every \`id\`, \`related\`, and \`connections\` reference in Brain/Essays frontmatter
MUST resolve to an ID listed here. New entities are added HERE FIRST, then
pages are created. \`_System/validate.mjs\` fails any commit with an
unresolved reference.

ID form: \`TYPE-PascalCase\` (TYPE ∈ CONCEPT, CHAR, SONG, ALBUM). IDs are
permanent once assigned — rename the display name, never the ID.

Generated initial scaffold ${new Date().toISOString().slice(0, 10)} from Wiki/ content;
hand-maintained thereafter.

---
`;

for (const t of types) {
  md += `\n## ${labels[t]}\n\n| ID | Display name | Note |\n|---|---|---|\n`;
  for (const r of rows.filter((r) => r.type === t)) {
    md += `| \`${r.id}\` | ${r.name} | ${r.note} |\n`;
  }
}

md += `\n---\n\n## Declared — pageless (forward-referenced, no page yet)\n\nThese resolve for validation but have no page. \`validate.mjs\` reports them\nas pageless (warning, not error). Promote to a section above when a page is written.\n\n| ID | Display name | Note |\n|---|---|---|\n`;
for (const [id, name, note] of pageless) md += `| \`${id}\` | ${name} | ${note} |\n`;

md += `\n---\n\n## Classification notes\n\n- EPs (\`SONG-MagikEp\`, \`SONG-SidequestEp\`, \`SONG-DumbledoreEp\`) are releases, typed \`song\` for schema simplicity; refine if EP-level analysis grows.\n- Two distinct "The Circle" song entities: \`SONG-TheCircle\` (33, 2022) and \`SONG-TheCircleLuciusVersion\` (Lucius Lullaby, 2026). \`CONCEPT-TheCircle\` is the foundational mythos (pageless), separate from both songs.\n- "Roy Voice Memo - S1 Arrowhead" retained as a song-type artifact.\n- "Singles Index" is a navigation page, not an entity — excluded.\n\n---\n`;

writeFileSync(join(ROOT, "_System/Ontology.md"), md);
console.log(`Wrote _System/Ontology.md`);
console.log(`Entities: ${rows.filter(r=>r.type==='concept').length} concept, ${rows.filter(r=>r.type==='character').length} character, ${rows.filter(r=>r.type==='album').length} album, ${rows.filter(r=>r.type==='song').length} song; ${pageless.length} pageless`);
console.log("\nSample IDs:");
for (const r of [rows[0], rows.find(r=>r.type==='character'), rows.find(r=>r.type==='album'), ...rows.filter(r=>r.type==='song').slice(0,6)]) console.log(`  ${r.id}  <- ${r.name}`);
