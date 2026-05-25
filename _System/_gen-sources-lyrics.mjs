#!/usr/bin/env node
// _System/_gen-sources-lyrics.mjs — ONE-SHOT bulk-ingest scaffold.
// Reads /tmp/jt-doc2.md (decoded Drive doc) and emits Sources/Lyrics/<Title>.md
// per song-section, using the WTTC template shape. Does NOT touch existing
// files (skip-if-exists). Doc 1's 14 songs are handled by hand-written files
// because each needs special handling (instrumental, speech, etc.).
// Pass --pilot <title> to write only the named song (dry-run preview).
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DOC2 = "/tmp/jt-doc2.md";
const TODAY = new Date().toISOString().slice(0, 10);

// Songs in doc 2 to SKIP because doc 1 (album doc) is canonical for them.
// Lucius Lullaby album tracks → handled by the doc-1 generator (album doc is
// authoritative). "The Circle" (33 version) is NOT an LL track — parser keeps it.
const SKIP_DOC1_WINS = new Set([
  "not your homie",
  "welcome to the circus",
  "Welcome to the circus",      // already in Sources from earlier migration
  "Great Time To Be Human",
  "Bad Feeling",
]);

// Doc 2 title (after stripping surrounding "" and trim) -> canonical Ontology display name.
// Only mapped if different; pass-through otherwise.
const TITLE_MAP = new Map([
  ["BALLERINA BOY",   "BALLERINA BOY"],          // already matches Ontology
  ["Ballerina Boy",   "BALLERINA BOY"],          // doc 2 used Title Case; Ontology has uppercase
  ["HAPPY FACE",      "Happy Face"],             // Ontology display normalizes
  ["Good Time",       "Good Time (1-08)"],
  ["Soul is a Star",  "Soul Is A Star"],
  ["Move to You",     "Move To You"],
  ["Pay Attention",   "Pay Attention (feat. little luna)"],
  ["I Like To Party", "I Like to Party"],
  ["MAGIK",           "MAGIK EP"],
  ["SideQuest",       "SideQuest EP"],
  // life is good: filename gets Title Case per CLAUDE.md §11 even though branding is lowercase
  ["life is good",    "Life Is Good"],
]);

// Parse decoded doc 2 into [{title, body}] song sections. Treats both ^# and ^##
// as section starts (doc has one rogue H1 for "Loser"); skips empty/whitespace titles.
function parseDoc(text) {
  const lines = text.split(/\r?\n/);
  const sections = [];
  let current = null;
  for (const line of lines) {
    const m = line.match(/^#{1,2}\s+(.+?)\s*$/);
    if (m) {
      // Skip the doc-title H1 ("# LYRICS")
      if (/^LYRICS$/i.test(m[1].trim())) continue;
      if (current) sections.push(current);
      // strip surrounding straight or smart quotes
      const title = m[1].replace(/^["“'']+|["”'']+$/g, "").trim();
      if (!title) { current = null; continue; }
      current = { title, body: [] };
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current) sections.push(current);
  // trim leading/trailing blank lines in each body
  for (const s of sections) {
    while (s.body.length && !s.body[0].trim()) s.body.shift();
    while (s.body.length && !s.body[s.body.length - 1].trim()) s.body.pop();
  }
  return sections;
}

function fileFor(title) {
  return join(ROOT, "Sources/Lyrics", `${title}.md`);
}

function tmpl(title, body) {
  // Stripped of Genius hyperlinks (they're sometimes embedded in the Drive doc).
  const cleaned = body
    .replace(/\[(.+?)\]\(https?:\/\/genius\.com[^)]+\)/g, "$1")
    .replace(/\\\[/g, "[")    // unescape \[Verse\] markers from Drive markdown
    .replace(/\\\]/g, "]")
    .replace(/\\\*/g, "*")
    .replace(/^[\\_\-—\s]{4,}$/gm, "")   // strip doc separator rules (___, ---)
    .replace(/[ \t]+$/gm, "")                  // trailing whitespace
    .replace(/\n{3,}/g, "\n\n")                // collapse blank runs
    .trim();
  return `---
type: lyrics
citable: true
status: draft
verified_against: []
ingested: ${TODAY}
ingest_source: "Google Drive (Jen's lyrics doc 2)"
---
# ${title} — Lyrics (Source)

Verbatim ingest. **No interpretation here** — analysis lives in Brain/ and Essays/.

## Source
- (release metadata pending — Apple Music / Spotify / Genius URLs to add at verification time)

### Citable as
- [release links pending]

## Lyrics

\`\`\`
${cleaned}
\`\`\`

## Maintenance
- Bulk-ingested ${TODAY} from Google Drive lyrics doc.
- **Not yet verified** against streaming release. Verification target → cross-check on Apple Music, Spotify, Letras, or Shazam; record URLs in \`verified_against\`; flip \`status\` to \`stable\`.
- If transcription diverges from official release, official wins.
`;
}

const text = readFileSync(DOC2, "utf8");
const sections = parseDoc(text);

const pilotFlag = process.argv.indexOf("--pilot");
const pilotTitle = pilotFlag !== -1 ? process.argv[pilotFlag + 1] : null;

mkdirSync(join(ROOT, "Sources/Lyrics"), { recursive: true });

let wrote = 0, skipped_dup = 0, skipped_exist = 0, skipped_empty = 0;
const log = [];

for (const { title, body } of sections) {
  if (!body.length) { skipped_empty++; log.push(`SKIP(empty): "${title}"`); continue; }
  if (SKIP_DOC1_WINS.has(title)) { skipped_dup++; log.push(`SKIP(doc1-wins): "${title}"`); continue; }
  const canonical = TITLE_MAP.get(title) || title;
  if (pilotTitle && canonical !== pilotTitle) continue;
  const path = fileFor(canonical);
  if (existsSync(path)) { skipped_exist++; log.push(`SKIP(exists): "${canonical}"`); continue; }
  writeFileSync(path, tmpl(canonical, body.join("\n")));
  wrote++;
  log.push(`WROTE: Sources/Lyrics/${canonical}.md  <- "${title}" (${body.length} lines)`);
}

console.log(log.join("\n"));
console.log(`\ngen-sources-lyrics: wrote=${wrote} dup-skip=${skipped_dup} exists-skip=${skipped_exist} empty-skip=${skipped_empty}`);
