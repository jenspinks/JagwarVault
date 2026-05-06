# Log

Chronological, append-only record of vault operations. Each entry begins with `## [YYYY-MM-DD]` followed by an action type and brief description. This makes the log greppable.

Action types:
- `ingest` — new source added; wiki updated
- `query` — significant analytical question answered; if filed back, link to new page
- `lint` — health check of vault; flag findings
- `restructure` — folder/file reorganization
- `boundary` — change to public/private rules
- `note` — administrative or process note

For schema, see [[Claude.md]]. For content catalog, see [[index]].

---

## [2026-05-05] restructure | LLM Wiki schema rebuild

Major schema overhaul implementing the Karpathy LLM Wiki pattern:

- Rewrote [[Claude.md]] from generic Karpathy template to encode all negotiated conventions: three-layer architecture (Raw / Processed / Wiki), interpretation tiers (Grounded / Strong Read / Resonances), source-attribution rules, Secret Document boundary, citation pattern (Option C with Option A inflection), naming conventions, speaker attribution rules, DM caution, Ingest/Query/Lint workflows, anti-patterns.
- Created `Sources/` directory.
- Created [[Sources/Master Source List]] — canonical catalog of all public sources with URLs, organized by category (Music, Theatrical, Music Videos, Press, Roy's Curated Quotes, Frameworks, Social Media, Inner Circle, Reception, Private Acknowledgement).
- Created [[Sources/Boundaries]] — explicit public/private rules; Secret Document boundary made unmistakable.
- Created [[index]] — master content catalog reflecting current vault state.
- Created this log.

Pending:
- [ ] Folder restructure (Wiki/Concepts, Wiki/Characters, Wiki/Songs, Wiki/Albums, Wiki/Theatrical; move Media/ to Raw/Media/; create Processed/ structure)
- [ ] Build per-song lyric files in `Processed/Lyrics/`
- [ ] Build episode transcript pages in `Processed/Episode Transcripts/`
- [ ] Apply citation pattern (Option C + Option A) to Sir Lucius, Lucius Lullaby (album), Mary, The Dweller on the Threshold, The Labors of Hercules
- [ ] Process [[Context Store 1]] and [[Mirror sessions Context]] — extract content into proper Wiki/Processed pages, retire originals

## [2026-05-05] ingest | Welcome to the Circus.md fully rebuilt

Source-scrubbed and rebuilt [[Welcome to the Circus]] from scratch using the three-tier framework. Cited public sources only:
- *The Interview EP 3 (welcome to the circus)*
- *sir lucius takes over the "lucius lullaby" premiere (EP 5)*
- *"lucius lullaby" ROY's listening party (EP 7)*
- antiMusic press article on the LOOP → Not Your Homie → WTTC chain framing

Removed all references to internal Google Doc filenames (Interview 4, Interview 5, Transcript 6, Context Store 1). Added complete Sources section at bottom (Option C citation pattern). Added [[The Labors of Hercules]] integration where the Leo / un-tamed lion reading lands.

## [2026-05-05] ingest | The Labors of Hercules concept page created

Built [[The Labors of Hercules]] as a foundational concept page. Anchors:
- Roy's three publicly curated Bailey quotes (establishes Bailey-as-influence without overreach)
- *Not Your Homie* lyric "if you choose to tame The Beast / you've got to prove yourself to be / a champion" (specific symbolic cluster: tame + Beast + champion)
- *#1 Champion (la Conquistadora)* title and album placement
- Universal: Greek myth, Bailey's 1974 book, the Strength card

Page structure includes Counterarguments / Alternate Reads section as structural defense against retrospective totalization. Five honest objections treated seriously.

## [2026-05-05] ingest | Source-scrub refactor of older files

Scrubbed internal-document references from:
- [[Sir Lucius]] — removed "Per the synthesis materials" attributions; reframed transcript references to public YouTube series language; rewrote "I Like to Party" section with confirmed visual evidence (cake-feeding video stills, properly cited as the public 2022 music video)
- [[Mary]] — removed `(per [[Lucius Lullaby]])` and `Per [[Roy]]` attributions
- [[Lucius Lullaby (album)]] — killed `[[Context Store 1]]` reference; rephrased "Per the existing framework"; expanded YouTube series notes with proper episode citations
- [[The Dweller on the Threshold]] — removed "synthesis materials" attribution; restructured Notes line that read as if the framework came from a different person

## [2026-05-05] ingest | Media Index built and populated

Created [[Media Index]] with naming conventions and tables organized by media type (screenshots, videos, quotes, images, audio). Cataloged five staged images:
- `still-good-time-facepaint-empty-mirror-2023.png` — confirms 2023 visual identity of Lucius mask + Empty Mirror tattoo
- `still-i-like-to-party-cake-2022.png` + cake-restraint + cake-smeared — the force-feeding sequence (cake before the Circus mechanism)
- `still-roy-bound-three-masked-figures.png` — the three-masked-figures kidnapping image (date and source pending verification)

User to drop the staged image files into `Media/images/` (will move to `Raw/Media/images/` after restructure).

---

## How to add entries

When adding a new entry:

1. **Header**: `## [YYYY-MM-DD] action-type | brief description`
2. **Body**: 1–5 sentences on what happened. Link to affected pages with `[[wikilinks]]`. Note any tensions, contradictions, or follow-ups.
3. **Append to top** so the newest entry is most visible.

Greppable patterns:
- `^## \[` — every entry header
- `\| ingest \|` — all ingests
- `\| query \|` — all queries
- `\| lint \|` — all lint passes

---
