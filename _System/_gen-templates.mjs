#!/usr/bin/env node
// _System/_gen-templates.mjs — one-shot scaffold (like _gen-ontology.mjs).
// Writes the canonical templates aligned to CLAUDE.md §6. Re-run only to
// reset templates to schema baseline; do not run blindly over edits.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const ROOT = new URL("..", import.meta.url).pathname;
const T = join(ROOT, "Templates");
for (const d of ["Sources", "Brain", "Essays"]) mkdirSync(join(T, d), { recursive: true });

const files = {
"Sources/Lyrics.md": `---
type: lyrics
citable: true
verified_against: []        # URLs cross-checked against
---
# <SONG TITLE> — Lyrics (Source)

Verbatim. **No interpretation here** — analysis lives in Brain/ and Essays/.

## Source
- Title / Artist / Released / Label / Album+track / Length / Writers / Credits

### Citable as
- [Apple Music]() · [Spotify]() · [YouTube]()

## Lyrics
\\\`\\\`\\\`
[Section]
...
\\\`\\\`\\\`

## Structural Notes
(Form-level only. No meaning claims.)

## Notable Phrases (Index Only)
(Flat cross-reference list. No interpretation.)

## Maintenance
- Source of truth for what is *in* the song. Brain/Essays cite back here.
`,
"Sources/Transcript.md": `---
type: transcript
citable: true
verified_against: []
---
# <EPISODE / VIDEO TITLE> — Transcript (Source)

Cleaned public excerpt. Timestamped. **No interpretation.**

## Source
- Series / Episode / Released / URL

## Transcript
> [00:00] ...

## Maintenance
- Cite the public episode, never a private doc.
`,
"Sources/Quote.md": `---
type: quote
citable: true
verified_against: []
---
# <QUOTE SET / PERSON> — Curated Quotes (Source)

Roy's publicly curated quotes, by original publication. **No interpretation.**

## Quotes
1. "<quote>" — <attribution>, <original publication>
`,
"Brain/Song.md": `---
id: SONG-<PascalCase>          # MUST exist in _System/Ontology.md
type: song
status: draft                  # draft|stable|stale|replaced
confidence: medium             # high|medium|low
source_quality: primary-source
sources: [Sources/Lyrics/<Song>.md]
related: [<3-5 curated entity IDs>]
connections:
  grounded:    []
  strong_read: []
  resonance:   []
referenced_by: []              # AUTO — backlink.mjs; never hand-edit
review_date: <YYYY-MM-DD>
---
# <Song Title>

Terse, structural. No literary voice. Markers: [W] synthesis · [P] Jen · [?] uncertain · (none) public-source.

## Voicing
Voiced / Inspired / Mentioned —

## Loaded Phrases
- "" → CONCEPT-

## Moves
- theological / mythological / structural

## Open Questions
- [ ]
`,
"Brain/Concept.md": `---
id: CONCEPT-<PascalCase>
type: concept
status: draft
confidence: medium
source_quality: secondary
sources: []
related: [<3-5 curated entity IDs>]
connections:
  grounded:    []
  strong_read: []
  resonance:   []
referenced_by: []
review_date: <YYYY-MM-DD>
---
# <Concept>

## Definition
[W]

## In the Project
- SONG- / CHAR-

## Open Questions
- [ ]

## Counterarguments / Alternate Reads
-
`,
"Brain/Character.md": `---
id: CHAR-<PascalCase>
type: character
status: draft
confidence: medium
source_quality: secondary
sources: []
related: [<3-5 curated entity IDs>]
connections:
  grounded:    []
  strong_read: []
  resonance:   []
referenced_by: []
review_date: <YYYY-MM-DD>
---
# <Character>

## Definition
[W]

## Voicings / Appearances
- SONG-

## Open Questions
- [ ]

## Counterarguments / Alternate Reads
-
`,
"Brain/Album.md": `---
id: ALBUM-<PascalCase>
type: album
status: draft
confidence: medium
source_quality: primary-source
sources: []
related: [<3-5 curated entity IDs>]
connections:
  grounded:    []
  strong_read: []
  resonance:   []
referenced_by: []
review_date: <YYYY-MM-DD>
---
# <Album> (album)

## Release
- Artist / Date / Label / Tracklist

## Arc (terse)
-

## Open Questions
- [ ]
`,
"Essays/Song.md": `---
type: song
status: draft               # draft|stable|stale|replaced
publish: false
entry_points: []            # symbols/themes that route here in the labyrinth
related: [<3-5 curated entity IDs>]
---
# <Song Title>

> Lyrics transcluded from the canonical Source — never paste a copy.

![[Sources/Lyrics/<Song>]]

## Grounded
Facts, credits, release, visible video content.

## Strong Read
Hedged (*reads as, likely*). ≥2 public anchors per claim.

## Resonances
Attributed correspondences. Not authorial intent.

## Open Questions
-

## Counterarguments / Alternate Reads
-

## Sources
### Song & Official Release
### Visual Lore Series
### Frameworks Drawn On
`,
"Essays/Concept.md": `---
type: concept
status: draft
publish: false
entry_points: []
related: [<3-5 curated entity IDs>]
---
# <Concept>

## Grounded

## Strong Read

## Resonances

## Open Questions

## Counterarguments / Alternate Reads

## Sources
`,
"Essays/Character.md": `---
type: character
status: draft
publish: false
entry_points: []
related: [<3-5 curated entity IDs>]
---
# <Character>

## Grounded

## Strong Read

## Resonances

## Open Questions

## Counterarguments / Alternate Reads

## Sources
`,
"Essays/Arc.md": `---
type: arc
status: draft
publish: false
entry_points: []
related: [<3-5 curated entity IDs>]
---
# <Album / Narrative Arc>

Album-level narrative essay — the arc across songs, not the sum of song pages.

## The Arc

## Open Questions

## Counterarguments / Alternate Reads

## Sources
`,
};

let n = 0;
for (const [rel, content] of Object.entries(files)) {
  writeFileSync(join(T, rel), content);
  n++;
}
console.log(`Wrote ${n} templates under Templates/{Sources,Brain,Essays}/`);
