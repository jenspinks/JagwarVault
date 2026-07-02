---
type: index
citable: true
status: draft
tags: [artifact, media-evaluation]
created: 2026-07-01
---
# Media Evaluation — Artifacts (grouped + tagged hub)

The working index for evaluating the vault's **artifact media** against the lore. One place to see every *discovered* Hall of Mirrors artifact, what it is, which media file holds it, and where it ties into the canon. Items are **grouped, not given a page each**; overlapping tags let one item surface in several views.

## Scope (hard rules)
- **Discovered artifacts with known codes ONLY.** The ~149 artifacts already unlocked in the gallery (see master table). **Never add undiscovered / uncracked rooms** — the maze is meant to be solved, not spoiled.
- **Social-media screenshots count only if the screenshot IS an artifact** (a minted post — e.g. `#49 Attention Tweet`, `#111 In My Father's Shoes`, `#126 Incoming Text (JB)`). All *other* social images are out of scope here (a separate pass owns general socials). Tag these `#social-artifact`.
- **Focus on lore ties.** Obvious trash is dropped (not listed); uncertain items are kept but tagged `#possibly-trash` with a one-line reason. Nothing lore-bearing is silently discarded.

## Sources of truth
- **Master table** (names · codes · discoverers · dates): [[Hall of Mirrors - Artifact Gallery (catalog) 2026-06-25]] — 149 rows, gallery order.
- **The media files:** `Media/images/hom-artifacts/complete/` — every file named `{#}-{NAME}-{hash}.{ext}`, so the leading number = the gallery row (audio `.mp3`, video `.mp4`, images `.png/.jpg`). `_manifest.json` there holds the hash↔name↔code map. **148 local files** (row `#11 Happy Face` is a MINT-room, no file).
- **Deep-dives already written** (don't duplicate — link): [[HoM Artifact - Walking the Edge of a Knife (poem) 2026-06-25|Walking the Edge of a Knife]] · [[HoM Room 51 - Sir Rabbit (poem)|Sir Rabbit]] · [[HoM Artifact - Grandma VI hospital (code A Bridge Between Worlds) 2026-06-26|Grandma VI]] · [[HoM Artifact - RAPhael the Christmas Spider (Pleiades Honey Bee) 2026-06-26|RAPhael / Christmas Spider]] · [[HoM - Audio Artifacts (NFT metadata + IPFS) 2026-06-26|Audio artifacts]] · [[HoM Artifacts - Grey in A# + Stardust (validator batch) 2026-06-26|Grey in A# / Stardust]] · [[HoM Artifact - In my fathers shoes (11-28-21 tweet, open-leaf crack) 2026-06-27|In My Father's Shoes]] · [[HoM - Complete Artifact Archive (code-derived) 2026-06-26|Complete Artifact Archive]].

## The tag scheme (overlapping — an item can carry several)
Every entry carries `#artifact` plus one or more content tags, so any tag is a "group." With Dataview / Bases installed these become **live views** (an *Artifacts* view = `#artifact`; a *Drawings* view = `#drawing`; etc.).

| Tag | Meaning |
|---|---|
| `#artifact` | every discovered, coded artifact (the universe) |
| `#drawing` | hand-drawn by Roy — sketches, diagrams, portraits, maps |
| `#poem` · `#story` · `#diary` | text artifacts (handwritten or typed) |
| `#song-demo` | audio: demos, lost songs, voice memos |
| `#mint-song` | on-chain MINT-room song releases |
| `#video-clip` | video artifacts (home video, performance, animation) |
| `#photo` | photographs (family, studio, stage) |
| `#cipher` | part of a coded series (Flood glyphs, body-part codes, SA-RA-VI links, numeric IDs) |
| `#concept-code` | the unlock code IS a vault concept (fold into that page) |
| `#personal-family` | family / father / childhood material |
| `#social-artifact` | a minted screenshot of a post/message (the only socials in scope) |
| `#possibly-trash` | low-signal or unclear; kept but flagged, with a reason |

## Groups
**Standard format (all groups):** clickable **GCS thumbnail** (his image, opens full-size) · deep analysis · **adversarially-verified song ties** as `[[links]]` (only grounded strong/moderate survive) · reciprocal Artifact section on each tied song page · gallery backlink. Videos evaluated via extracted frames; audio from metadata (flagged *not auditioned*).
- [[Artifacts - Drawings and Sketches]] — hand-drawn sketches, cosmology maps, portraits, the **planetary bestiary**. **✅ complete (25, deep format)**
- [[Artifacts - Poems, Texts and Social Posts]] — poems, diaries, aphorisms + the 3 minted social posts. *(in progress)*
- [[Artifacts - Songs, Demos and Mints]] — audio demos, lost songs, early-band videos, the MINT-room releases. *(in progress)*
- [[Artifacts - Family, Friends and Moments]] — grandma / dad / childhood / pets / live-moment photos & videos. *(in progress)*
- [[Artifacts - Ciphers and Code-Series]] — Flood glyphs, numeric IDs, the SA-RA-VI / True-Voice / gate chains. *(in progress)*
- [[Artifacts - Concept Images and Emblems]] — images & clips whose code or content IS canon-concept material. *(in progress)*

## Migration (public site)
Once all groups are deep-format, the artifact layer migrates to **The Jagwar Files** as a `06 Artifacts/` section (index + one page per group), with the reciprocal Artifact sections added to the public song pages. Light by design: text + hotlinked GCS images travel; local media stays here as archival backup.

## The "I'm 33" board (separate enrichment track)
Roy's own spreadsheet is already captured as **one consolidated doc**: [[Roy - I'm 33 this year (spreadsheet)]] (decode: [[The Im 33 Board - Decoded (Roy's upload cosmology)]]). So this track is **enrichment, not capture** — weave the board's concepts into the relevant song/concept pages, each pointing *back* to that board doc.

> **★ Finding (Drawings pass):** many HoM drawing-artifacts *are the board's own diagrams*, minted individually — the Eye-of-Horus fractions (#71/#84), Platonic Lambda (#45), "A Head of Adam" (#86), "Tree thinking / Abyss" (#15), "suggestion of apex — 6 sides" (#26), the Lightning-Flash (#125). So the artifact pass and this enrichment track feed each other: the board decodes the artifacts, and the artifacts are the board's cosmology made collectible. Its own "Connections" section already lists the target pages ([[The Labors of Hercules]], [[It's Your Time]], [[Sir Lucius]], [[33 (album)]], [[Soul Is A Star]], [[Online]], [[The Pattern]]…) — that list is the enrichment worklist.

## Method notes
- **Evaluation = look at the item, then place it.** Entries here are sourced from the existing catalog analysis and the standout-visuals notes; where an item hasn't been visually confirmed it's marked *(to verify)* rather than asserted.
- File references use Obsidian wikilinks to the `complete/` filename (unique per artifact). Switch to `![[…]]` embeds if a thumbnail gallery is preferred.
