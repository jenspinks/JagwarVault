#!/usr/bin/env node
// Build the "Vault Review Context" for external AI vetting (ChatGPT Project / Gemini Gem).
// Gives a reviewer the vault's ACTUAL CONTENT — songs, interpretations, themes, ideas —
// consolidated per entity, WITH tier markers intact, so they can check claims against the
// real material. NOT the SARAVI oracle context: tiers PRESERVED, fidelity over compression,
// and PRIVATE (never enters the public saravi repo).
//
// Outputs BOTH:
//   _System/Vault Review Context.md            — one whole file (Gemini paste / long-context)
//   _System/Vault Review Context/NN-*.md       — split into <=10 self-contained parts
//                                                (fits a Gemini Gem's 10-file cap; easy to edit)
//
// Privacy: only public layers read (Brain, Essays minus _drafts, Sources/Lyrics). Asides that
// name the private corpus (Secret-Doc / _Private / private calls) are sentence-level redacted;
// every redaction logged to "Vault Review Context — redactions.md".
//
// Usage:  node _System/build-review-context.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, rmSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const VAULT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(VAULT, '_System', 'Vault Review Context.md');
const PARTDIR = join(VAULT, '_System', 'Vault Review Context');
const est = s => Math.round(s.length / 4);
const MAXPART = 120000; // tokens — only split a part if it exceeds this (keeps one file per album/layer;
                        // today nothing does, so you get 8 clean parts. Safety valve for future growth.)

// match the same song across Brain/Essay/Lyric: strip only a year suffix + leading article
const norm = s => basename(s).replace(/\.md$/i, '').toLowerCase()
  .replace(/\((?:19|20)\d{2}\)/g, '').replace(/^the\s+/, '').replace(/[^a-z0-9]+/g, '');
const stripFm = t => t.replace(/^﻿?---\r?\n[\s\S]*?\r?\n---\r?\n?/, '').trim();
// demote embedded headings 3 levels so each part nests cleanly: ##=entity, ###=layer, ####+=its content
// (keeps retrieved chunks unambiguous about which song/layer they belong to)
const demote = t => t.replace(/^(#{1,6})(\s)/gm, (m, h, sp) => '#'.repeat(Math.min(h.length + 3, 6)) + sp);

// --- PRIVACY SCRUB (sentence-level; \b so "Secret Doctrine" (Blavatsky, public) is NOT matched) ---
const PRIVATE = /secret[\s-]doc(ument)?\b|\[\[_private|\b_private\b|private calls?|paid\s*\/\s*private|pre-?natal/i;
const redactions = [];
const SENT = /(?<=[.!?;])\s+(?=[A-Z*\[`>(])/;
function redactSentences(text, f) {
  const kept = [];
  for (const s of text.split(SENT)) {
    if (PRIVATE.test(s)) { redactions.push({ file: basename(f), text: s.trim() }); continue; }
    kept.push(s);
  }
  return kept.join(' ').trim();
}
function scrub(body, f) {
  return body.split('\n').map(line => {
    let l = line.replace(/(\*?)\(([^()]*)\)(\*?)/g, (m, pre, inner, post) => {
      if (!PRIVATE.test(inner)) return m;
      const cleaned = redactSentences(inner, f);
      return cleaned ? `${pre}(${cleaned})${post}` : '';
    });
    if (PRIVATE.test(l)) l = redactSentences(l, f);
    return l;
  }).join('\n').replace(/[ \t]+$/gm, '');
}

function walk(dir, ok = () => true) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p, ok));
    else if (e.name.endsWith('.md') && ok(p)) out.push(p);
  }
  return out;
}
const titleOf = (t, f) => {
  let name = t.match(/^#\s+(.+)$/m)?.[1]?.trim();                    // first real H1
  if (!name || /\(none\)/i.test(name)) name = basename(f).replace(/\.md$/i, ''); // fallback to filename
  return name.replace(/\s*[—-]\s*Lyrics\s*\(.*?\)\s*$/i, '').trim(); // drop "— Lyrics (Source)" suffix
};
function catOf(p) {
  if (/\/(Brain|Essays)\/Characters\//.test(p)) return 'CHARACTERS';
  if (/\/(Brain|Essays)\/Concepts\//.test(p) && !/\/Concepts\/Songs\//.test(p)) return 'CONCEPTS';
  if (/\/Brain\/Albums\//.test(p) || /\/Essays\/Arcs\//.test(p)) return 'ALBUMS & ARCS';
  if (/\/Brain\/Roy Voice\//.test(p)) return "ROY'S VOICE";
  return 'SONGS';
}
// which album-part a song/album belongs to
function albumOf(p, title = '') {
  const hay = p + ' ' + title;
  if (/Subject to Flooding/i.test(hay)) return 'stf';
  if (/\b33\b|33 \(2022\)|33 \(album/i.test(hay)) return '33';
  if (/Lucius Lullaby/i.test(hay)) return 'll';
  return 'singles';
}

// --- collect + merge ---
const layers = {
  lyric: walk(join(VAULT, 'Sources', 'Lyrics')),
  brain: walk(join(VAULT, 'Brain')),
  essay: walk(join(VAULT, 'Essays'), p => !p.includes('/_drafts/')),
};
const ents = new Map();
const add = (kind, files) => {
  for (const f of files) {
    const k = norm(f);
    if (!ents.has(k)) ents.set(k, { key: k, cat: null, title: null, lyric: '', brain: '', essay: '', paths: {} });
    const e = ents.get(k);
    e[kind] = scrub(stripFm(readFileSync(f, 'utf8')), f);
    e.paths[kind] = f;
    if (kind === 'brain' || !e.cat) e.cat = catOf(f);
    if (kind === 'brain' || !e.title) e.title = titleOf(e[kind], f);
  }
};
add('lyric', layers.lyric); add('brain', layers.brain); add('essay', layers.essay);

// --- assign each entity to a PART bucket ---
function bucketFor(e) {
  if (e.cat === 'CHARACTERS') return 'characters';
  if (e.cat === 'CONCEPTS') return 'concepts';
  if (e.cat === "ROY'S VOICE") return 'roy-voice';
  if (e.cat === 'ALBUMS & ARCS') {
    if (/machine vs human/i.test(e.title)) return 'frameworks';
    return albumOf(e.paths.brain || e.paths.essay || '', e.title);
  }
  return albumOf(e.paths.brain || e.paths.essay || e.paths.lyric || '', e.title);
}
for (const e of ents.values()) e.bucket = bucketFor(e);

const PARTS = [
  { key: 'frameworks', slug: '00-frameworks-and-themes',        title: 'Frameworks, Tiers & Themes' },
  { key: 'characters', slug: '01-characters',                   title: 'Characters' },
  { key: 'concepts',   slug: '02-concepts',                     title: 'Concepts' },
  { key: 'roy-voice',  slug: '03-roy-voice',                    title: "Roy's Voice (distilled)" },
  { key: 'stf',        slug: '04-album-subject-to-flooding',    title: 'Album — Subject to Flooding (2018)' },
  { key: '33',         slug: '05-album-33',                     title: 'Album — 33 (2022)' },
  { key: 'll',         slug: '06-album-lucius-lullaby',         title: 'Album — Lucius Lullaby (2026)' },
  { key: 'singles',    slug: '07-singles-and-eps',              title: 'Singles & EPs' },
];

const LEGEND = `## Tier markers (preserved inline — a claim is only as strong as its marker)
- **[G]** grounded — named public source (lyric / interview / credit / official text)
- **[W]** strong read — interpretation on 2+ anchors, not a bare fact
- **[P]** personal position — the analyst's reading; weigh as argued
- **[~]** resonance — suggestive harmonic, held loosely
- **[?]** open / uncertain
When vetting: flag tier inflation ([W]/[P] treated as [G]), missing anchors, and contradictions against the lyrics/interviews reproduced here.`;

const sysRead = f => { const p = join(VAULT, '_System', f); return existsSync(p) ? scrub(stripFm(readFileSync(p, 'utf8')), p) : ''; };
const stamp = new Date().toISOString().slice(0, 10);

// render one entity (grouped layers)
function renderEnt(e) {
  let s = `\n\n## ${e.title}\n`;
  if (e.lyric) s += `\n### Lyric / source text\n\n${demote(e.lyric)}\n`;
  if (e.brain) s += `\n### Brain — structured, tiered claims + anchors\n\n${demote(e.brain)}\n`;
  if (e.essay) s += `\n### Essay — full interpretation\n\n${demote(e.essay)}\n`;
  return s;
}
// entities of a part, album/arc record first, then alphabetical
function entsOf(key) {
  return [...ents.values()].filter(e => e.bucket === key)
    .sort((a, b) => (a.cat === 'ALBUMS & ARCS' ? 0 : 1) - (b.cat === 'ALBUMS & ARCS' ? 0 : 1) || a.title.localeCompare(b.title));
}

// --- cross-file CANON INDEX (which part holds what) ---
let index = '# CANON INDEX — which part holds each entity\n';
for (const part of PARTS) {
  const es = entsOf(part.key);
  if (!es.length) continue;
  index += `\n### ${part.slug}.md — ${part.title}\n`;
  for (const e of es) {
    const have = ['lyric', 'brain', 'essay'].filter(k => e[k]).join('+');
    index += `- ${e.title}  _(${have})_\n`;
  }
}

// --- write the PARTS folder ---
if (existsSync(PARTDIR)) rmSync(PARTDIR, { recursive: true, force: true });
mkdirSync(PARTDIR, { recursive: true });
const partHeader = (title, extra = '') => `# JAGWAR TWIN — VAULT REVIEW CONTEXT — ${title}  (compiled ${stamp})

> For external review (ChatGPT / Gemini). You already hold the vetting protocol; this is the vault's
> actual content, so you can check claims against the real material. One of several parts — see
> \`00-frameworks-and-themes.md\` for the full index.

${LEGEND}
${extra}`;

const written = [];
function writePart(slug, title, body, extra = '') {
  const full = partHeader(title, extra) + '\n\n---\n' + body + '\n';
  writeFileSync(join(PARTDIR, slug + '.md'), full);
  written.push({ slug, title, tok: est(full) });
}
function writePartChunked(part) {
  const es = entsOf(part.key);
  const total = est(es.map(renderEnt).join(''));
  if (total <= MAXPART || es.length <= 1) { writePart(part.slug, part.title, es.map(renderEnt).join('')); return; }
  // balanced N-way split (even sizes, no tiny orphan tail)
  const N = Math.ceil(total / MAXPART), target = total / N;
  let chunks = [[]], size = 0;
  for (const e of es) {
    if (size >= target && chunks.length < N) { chunks.push([]); size = 0; }
    chunks[chunks.length - 1].push(e); size += est(renderEnt(e));
  }
  chunks.forEach((ch, i) => writePart(`${part.slug}-${i + 1}`, `${part.title} (${i + 1}/${chunks.length})`,
    ch.map(renderEnt).join('')));
}

for (const part of PARTS) {
  if (part.key === 'frameworks') {
    const fw = '\n## Theme Tracker\n\n' + (sysRead('Theme Tracker.md') || '') +
               '\n\n## Ontology (entity map)\n\n' + (sysRead('Ontology.md') || '') +
               entsOf('frameworks').map(renderEnt).join('') +
               '\n\n---\n\n' + index;
    writePart(part.slug, part.title, fw);
  } else {
    if (entsOf(part.key).length) writePartChunked(part);
  }
}

// --- also write the SINGLE whole file (Gemini paste / long-context) ---
let whole = partHeader('FULL').replace('One of several parts — see', 'The whole corpus in one file; for parts see') + '\n\n---\n\n' + index;
for (const part of PARTS) {
  const es = entsOf(part.key);
  if (!es.length) continue;
  whole += `\n\n\n# ${part.title.toUpperCase()}\n`;
  if (part.key === 'frameworks') whole += '\n## Theme Tracker\n\n' + (sysRead('Theme Tracker.md') || '') + '\n\n## Ontology\n\n' + (sysRead('Ontology.md') || '') + '\n';
  whole += es.map(renderEnt).join('');
}
writeFileSync(OUT, whole);

// --- privacy audit log ---
const LOG = join(VAULT, '_System', 'Vault Review Context — redactions.md');
let log = `# Privacy redactions — Vault Review Context (${stamp})\n\n${redactions.length} aside(s) redacted (named the private corpus). Review; if any removed a PUBLIC clause you want kept, split it at the source note.\n\n`;
for (const r of redactions) log += `- **${r.file}** — ${r.text}\n`;
writeFileSync(LOG, log);

// --- report ---
console.log(`compiled ${stamp}`);
console.log(`  whole file: ~${est(whole)} tok (~${(whole.length / 1024 / 1024).toFixed(2)} MB) → _System/Vault Review Context.md`);
console.log(`  parts (${written.length}, fits Gemini's 10-file cap) → _System/Vault Review Context/`);
for (const w of written) console.log(`    ${w.slug.padEnd(34)} ~${String(w.tok).padStart(6)} tok`);
console.log(`  PRIVACY: ${redactions.length} aside(s) redacted → Vault Review Context — redactions.md`);
