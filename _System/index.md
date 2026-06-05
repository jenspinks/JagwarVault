# Index — Dual-Axis Navigation

Master catalog for the JagwarTwin vault. Navigate three ways: **by layer**,
**by concept**, **by entry-point**. The entry-point axis is the seed of the
fan-site labyrinth (CLAUDE.md §12). See [[log]] for history, [[CLAUDE]] for
schema, [[Ontology]] for the canonical entity registry.

Legend: ✦ developed · ◦ skeleton/scaffold (Brain page, Essay pending) · ⬚ pageless (declared in Ontology)

---

## Infrastructure (`_System/`)

| Page | Purpose |
|---|---|
| [[CLAUDE]] | Schema — layers, tiers, source rules, frontmatter, workflows |
| [[GEMINI]] | Drafting guide for the Gemini collaborator (root file) — division of labor, tiers, boundaries, output template, fact-verification hand-off |
| [[index]] | This file — dual-axis catalog |
| [[log]] | Chronological operational log |
| [[lessons-learned]] | Drift & process register |
| [[Ontology]] | Canonical entity registry (IDs) — currently 117 |
| [[Theme Tracker]] | Master analytical framework (10 sections + Standard Tracking Fields) |
| [[Boundaries]] | Public/private rules; Secret Document boundary |
| [[Master Source List]] | Canonical public-source registry |
| [[Media Index]] | Raw media catalog |
| `validate.mjs` · `backlink.mjs` | Pre-commit linter · graph back-propagation |
| `_legacy/` | Pre-restructure synthesis files, awaiting triage |

---

## Axis 1 — By Layer

**Sources/** (external evidence, immutable)
- `Sources/Lyrics/` — 47 files (all catalogue songs ingested); 6 verified-stable (Long Time Coming, Dream / Dream, Superhuman Interlude, Loser, Good Day, No Fake Friends, Hell Pt. 2 + Welcome to the Circus); rest `status: draft` pending streaming verification
- `Sources/Credits/` — [[Sources/Credits/Subject to Flooding|Subject to Flooding]] composer-credit record (per-track Apple/Spotify verified) · **[[Sources/Credits/33|33]]** (Big Loud; started 2026-05-30 with It's Your Time)
- `Sources/Reference/` — external reference substrate. [[Sources/Reference/Bailey - The Labours of Hercules (reference)]] (12-labour↔sign table). **JONI MITCHELL CLUSTER (2026-06-02) — start here: [[Sources/Reference/Joni Mitchell (index)]]** (map-of-content linking all Joni files by tier): [[Sources/Reference/Joni Mitchell - Ladies of the Canyon (reference)]] (full LotC lyrics + 33-dialogue table, `citable`); [[Sources/Reference/Joni Mitchell — source index]] (13 indexed public articles, `citable`; all read); [[Sources/Reference/Joni Mitchell — JT-relevant analysis (research dossiers)]] (3 LLM dossiers, **`citable:false` — leads**); + [[Sources/Reference/Roy's Stated Influences (research dossier)]] (`citable:false`)
- `Sources/Artifacts/` — **NEW (2026-06-01):** primary Roy artifacts. [[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]] — Roy's own cosmology board (Kybalion/Bailey/Russell/Kabbalah/Jung/Plato; the "Tracks" concept-album; "Statue of Roy"; Soul-Is-A-Star "Sun" draft); hub concept = [[The Pattern]]
- `Sources/Quotes/` — [[Sources/Quotes/Roy IG Story - Bailey Labour VII]] (Roy's annotated Bailey page) + IG posts (Half the Man / El Roy / Everyone's a Guru / Sir Lucius One Hit Wonder)
- `Sources/Transcripts/` — 12 **The Mirror Sessions** episodes ingested; **+ [[Sources/Transcripts/Roy IG Live - Bailey 12 Labours of Hercules]]** (2026-05-30; Roy names the Bailey book + states his reading on IG Live; `status: draft` pending listen-through) (`MirrorSessions-*.md`, full cleaned/attributed transcripts, `status: draft` pending listen-through). Registered in [[Master Source List]] §2; aggregated into Brain/Roy Voice. · `Sources/Quotes/` — **1 file (2026-05-29):** [[Sources/Quotes/Roy IG Story - Bailey Labour VII]] (Roy's annotated Bailey page, IG Story)

**Brain/** (machine semantic memory — terse, frontmatter, tiered connections)
- `Brain/Songs/` — **47** files; 13 with full frontmatter (the 7 STF essay-filed + 6 from Lucius Lullaby / Singles area); rest scaffolds ◦
- `Brain/Concepts/` — **23** files, **all with frontmatter ✦** (incl. [[Nigredo]], [[Duality]], [[Witnessing vs Surveillance]]; **new 2026-06-01: [[The Pattern]]** `CONCEPT-ThePattern` — hub for Roy's "I'm 33" board)
- `Brain/Characters/` — 4 (Roy ✦, Sir Lucius ✦, Mary ◦, Jagwar Twin ◦)
- `Brain/Albums/` — 3 (Lucius Lullaby ✦, 33 ◦, Subject to Flooding ◦ — substantially developed page; tracklist + composer credits + Flood frame)
- `Brain/Roy Voice/` — **NEW (2026-05-28):** authorial-voice index — thematic aggregation of Roy's public statements, designed for context-loading during song analysis. See [[Brain/Roy Voice/README]]. Sources/Transcripts/ holds verbatim per-interview excerpts; Brain/Roy Voice/ holds the by-theme aggregation. Registered in [[Master Source List]] §11 (27 interviews queued for ingestion). **Updated 2026-05-29:** The Mirror Sessions aggregated in; new page [[Roy on the Heart-Mind Split]] added (Roy equates the rational mind with the Lucifer archetype — grounds [[Sir Lucius]] = the mind).

**Essays/** (human creative project → fan site; verbose, tiered prose)
- `Essays/Songs/` — **12:** [[Brain/Songs/Welcome to the Circus]] · [[Brain/Songs/Lucius Lullaby]] · [[Essays/Concepts/Songs/Ballerina Boy]] · [[Essays/Concepts/Songs/Not Your Homie]] · [[Essays/Concepts/Songs/Weirdness]] (pre-session) + [[Essays/Concepts/Songs/Long Time Coming]] · [[Essays/Concepts/Songs/Dream - Dream]] · [[Essays/Concepts/Songs/Superhuman (Interlude)]] · [[Essays/Concepts/Songs/Loser]] · [[Essays/Concepts/Songs/Good Day]] · [[Essays/Concepts/Songs/No Fake Friends]] · [[Essays/Concepts/Songs/Hell of a Night Pt. 2 (The Hallelujah Stickup)]] (this session)
- `Essays/Characters/` — [[Roy]] ✦ · [[Sir Lucius]] ✦
- `Essays/Concepts/` — [[The Labors of Hercules]] ✦ · [[The Dweller on the Threshold]] ✦ · [[Jacob & Esau]] ◦ (Roy/Lucius as the divided-blessing twins; `CONCEPT-JacobEsau`)
- `Essays/Concepts/Songs/` — **33-album essays (2026-05–06):** [[Essays/Concepts/Songs/Online]] · [[Essays/Concepts/Songs/It's Your Time]] · [[Essays/Concepts/Songs/Soul Is A Star]] (the big Joni/Woodstock essay — read its Verification Ledger) · [[Essays/Concepts/Songs/Pay Attention (feat. little luna)]] (Attention-as-deity; Lucius-function prototype) · [[Essays/Concepts/Songs/I Like to Party]] (simulated participation; the kingdom-within interrupted) · [[Essays/Concepts/Songs/Down to You]] (the inward correction; heart/mind stated; bread-not-cake refusal) · [[Essays/Concepts/Songs/Another Way II Heaven]] (**the creation myth — lyric = Roy's board cosmogonic poem; One-become-Two; grounds [[The Pattern]]**) · [[Essays/Concepts/Songs/Imagine A World]] (imagination-as-authorship; the designed/OZ god; Eden-within) · [[Essays/Concepts/Songs/The Circle]] (**the closer / foundational Jagwar myth; origin of [[The Thread]]; "inside of the inside"; the album's mythic cure**). *(Plus the STF song essays listed under Essays/Songs above.)* **33 credits: all 10 tracks verified ([[Sources/Credits/33]]).** Remaining 33 essay to build: **Happy Face (6) — last one.**
- `Essays/Arcs/` — [[Brain/Songs/Lucius Lullaby]] (album arc) ✦ · [[Machine vs Human]] ✦ (**new 2026-05-28**)
- `Essays/_drafts/` — empty

---

## Axis 2 — By Concept

Each links the Brain entry (always) and the Essay (if written ✦).

**Load-bearing**
- The Thread ◦ — world tied on a string; Ariadne; feeling as the labyrinth's solution
- The Circus ◦ — the Circle inverted; spectacle at social scale
- The Labyrinth ◦ — maze without exit; requires the thread
- Inversion ◦ — same structure, opposite function; Christ-speech inverted
- The Algorithm ◦ — invisible engine of the Circus ("the algorithm baby")
- [[The Labors of Hercules]] ✦ — Bailey/Leo; tame-the-Beast; champion as initiate
- [[The Dweller on the Threshold]] ✦ — accumulated unintegrated material; Lucius-as-Dweller
- [[Machine vs Human]] ✦ (arc) — core duality (heart vs optimization severed from heart); `CONCEPT-MachineVsHuman`; the antagonist is the *severing*, not the machine
- [[Witnessing vs Surveillance]] ✦ — `CONCEPT-WitnessingVsSurveillance`; two modes of being-seen: witnessing transforms (El Roi), surveillance shapes (the Algorithm)
- `CONCEPT-InheritedSubstrate` ⬚ — provenance axis: built-inside-mythos vs received-from-culture; prefer mythic emergence over intentional encoding
- `CONCEPT-TheProtector` ⬚ — adaptive psychic-defense architecture; precursor to Sir Lucius (Lucius = Protector crystallized into theatrical identity)
- [[Nigredo]] ✦ — alchemical blackening; the three nigredo events (age-7 burial, age-35 collapse, Lucius as externalized nigredo); the Circus as perpetual nigredo
- [[Duality]] ✦ — root structure of the project (Roy/Lucius heart-mind split); correct ordering not elimination
- [[The Pattern]] ✦ — `CONCEPT-ThePattern`; Roy's own term for the one fractal law (As Above So Below), the unified system on his "I'm 33" board (Bailey + Walter Russell + Kybalion + Kabbalah + Jung + Plato); hub for [[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]]
- **Joni Mitchell thread** (inherited-influence, confirmed via the Soul Is A Star co-write) → map-of-content: [[Sources/Reference/Joni Mitchell (index)]]

**Secondary** ◦
The Mask · The Mouth · The Voice · The Audience · The Light-Bearer · The Spectacle · Consumption · Fire · The Wheel · The Veil · The Aquarium · Panem et Circenses

**Pageless** ⬚ (declared in [[Ontology]], referenced, no page yet)
The Circle · The Mirror · The Moon · Yesod · Malkhut · Tiferet · The Empty Mirror · The Angle/Angel · Ballerina Boy · Leif · The Boss/BMRC · The Loop · The Abyss · Objective Art · Somatic Captivity · Collective Amnesia · The Twice-Voiced Blessing · Tsimtsum · Tikkun Olam · Keilim/Vessels · Liminal Spaces · Sacred Geometry · Cosmic Cycles · Sleep / Wake Up · Albedo · Rubedo · Orbit / Return · The Speaker Problem · Flattened Identity · Anima/Animus · Alchemical Transmutation

**Characters**
[[Roy]] ✦ · [[Sir Lucius]] ✦ · Mary ◦ · Jagwar Twin ◦ · Ballerina Boy ⬚

---

## Axis 3 — By Entry Point (labyrinth seed)

Symbols/themes that route a reader into the work. Sourced from Essays
`entry_points` frontmatter; grows as Essays are written.

- **circus / spectacle** → [[Brain/Songs/Welcome to the Circus]]
- **inversion / upside-down** → [[Brain/Songs/Welcome to the Circus]]
- **consumption / chew you up** → [[Brain/Songs/Welcome to the Circus]]
- **labyrinth / no exit** → [[Brain/Songs/Welcome to the Circus]]
- **the final boss** → [[Brain/Songs/Welcome to the Circus]] · [[Sir Lucius]]
- **the deal** → [[Brain/Songs/Lucius Lullaby]] · [[Roy]]
- **the mirror / Rorrim Ehtni** → [[Sir Lucius]] · [[The Dweller on the Threshold]]
- **the dweller / shadow / threshold** → [[The Dweller on the Threshold]] · [[Sir Lucius]]
- **three modes / the boss** → [[Sir Lucius]]
- **el-roy / ballerina boy** → [[Roy]] · [[Essays/Concepts/Songs/Ballerina Boy]]
- **mind serve heart** → [[Roy]]
- **hercules / the beast / leo / champion / bailey** → [[The Labors of Hercules]]
- **descent and return / malkhut / sol** → [[Brain/Songs/Lucius Lullaby]] (arc) · [[Brain/Songs/Lucius Lullaby]] (song)
- **childhood bedroom** → [[Brain/Songs/Lucius Lullaby]]
- **machine vs human / the algorithm / digital age** → [[Machine vs Human]] · [[Online]]
- **the flood / extinction event / subject to flooding** → [[Machine vs Human]] · [[Subject to Flooding (album)]]
- **witnessing vs surveillance / el roi / counterfeit seeing** → [[Witnessing vs Surveillance]] · [[Essays/Concepts/Songs/Not Your Homie]]
- **the protector / proto-lucius / survival armor** → [[Essays/Concepts/Songs/Loser]] · [[Essays/Concepts/Songs/Good Day]] · [[Essays/Concepts/Songs/No Fake Friends]] · [[Sir Lucius]]
- **vibe-defense / shame-preemption / social filtration** → [[Essays/Concepts/Songs/Loser]] · [[Essays/Concepts/Songs/Good Day]] · [[Essays/Concepts/Songs/No Fake Friends]]
- **inherited substrate / interpolation / relay** → [[Essays/Concepts/Songs/Dream - Dream]] (Mercer) · [[Essays/Concepts/Songs/Superhuman (Interlude)]] (Chaplin) · [[Essays/Concepts/Songs/Loser]] (Beck echo) · `CONCEPT-InheritedSubstrate`
- **the clown / clown-before-the-circus** → [[Essays/Concepts/Songs/Superhuman (Interlude)]] · [[Brain/Songs/Welcome to the Circus]]
- **outlaw seizure / sacred-as-heist** → [[Essays/Concepts/Songs/Hell of a Night Pt. 2 (The Hallelujah Stickup)]]
- **stars flattened into sidewalks / hollywood walk of fame** → [[Essays/Concepts/Songs/No Fake Friends]]
- **the borrowed dream / dream-as-inherited** → [[Essays/Concepts/Songs/Dream - Dream]] · [[Machine vs Human]]

---

## Status & Known Gaps (current as of 2026-06-02)

- **Session additions 2026-05-30 → 2026-06-02 (catalog was stale before this):** **33 album** — lyrics stable for all 10 tracks, [[Sources/Credits/33]] credits, essays for Online / It's Your Time / Soul Is A Star. **Joni Mitchell thread** — LotC reference + source index (11 articles) + 3 `citable:false` dossiers, all behind [[Sources/Reference/Joni Mitchell (index)]]; Joni confirmed influence via the Soul Is A Star co-write. **[[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]]** (Roy's cosmology board, citable) + its hub concept [[The Pattern]] (`CONCEPT-ThePattern`). Bailey **upgraded to grounded** across Story + Live + board. Boundary refinement (Roy-exposed material citable; Jen's own DMs private) in [[Boundaries]], now referenced from [[CLAUDE]]. Ontology 116 → 117.
- **Earlier baseline —**
- **Pages fully developed:** 12 Essays/Songs + 2 Essays/Characters + 2 Essays/Concepts + 2 Essays/Arcs. 13 Brain/Songs with frontmatter; 22 Brain/Concepts (all with frontmatter); 4 Brain/Characters; 3 Brain/Albums.
- **Sources/Lyrics:** all 47 catalogue songs ingested; **6 verified-stable** via Apple Music / Spotify (Long Time Coming, Dream / Dream, Superhuman Interlude, Loser, Good Day, No Fake Friends, Hell Pt. 2 — plus WTTC from earlier work). The other ~40 remain `status: draft` (AZLyrics or Google-Drive sourced) pending verification.
- **Sources/Credits:** new subfolder; one record so far ([[Sources/Credits/Subject to Flooding]]). Future albums get their own credits files as verified.
- **`validate.mjs`** reports the remaining unconverted scaffolds as "no frontmatter" warnings (37 currently; non-blocking) — fewer than at session start as STF tracks were built out.
- **Active analytical thread:** [[Machine vs Human]] arc + [[Witnessing vs Surveillance]] doctrine + the Protector triad. Strong cross-track linkages now in place (Good Day ↔ Not Your Homie via "vibe"; Loser/Good Day/N.F.F. as STF Protector triad; Dream/Dream/Superhuman-Interlude/Loser as the album's three-register inherited-substrate practice).
- **Next STF priorities** (verify-then-build loop continuing): Superhuman (scroll-down + Details pending), Move To You, Roy Voice Memo, Hell of a Night (Pt. 1), Precious Time, Shine.
- **Next catalogue priorities** (deferred until STF complete, per Jen): the *33* album — Online has its Brain page (built as the Machine vs Human pivot); Pay Attention is the obvious next anchor; the rest of 33 is uncatalogued.
- **Standing open questions** (composer): identity of *"Essex"* on [[Essays/Concepts/Songs/Good Day]] (possible interpolation source); Apple Details composer for N.F.F. (Spotify Credits shows three writers; Apple Details unknown). The Loser bridge "I think the world's gone insane" is **resolved as audible** via Spotify (Apple omitted).

---

## Recent restructure (2026-05-28)

The iCloud-synced pre-restructure vault (`~/Library/Mobile Documents/iCloud~md~obsidian/Documents/JagwarTwin`) — Karpathy three-layer Raw/Processed/Wiki schema, lowercase `Claude.md` — has been **decommissioned**. Moved to iCloud Trash; Claude Desktop's `obsidian` MCP path corrected to point only at this live vault. The current architecture is `Sources/Brain/Essays/_System` (per [[CLAUDE]]). See [[log]] entry 2026-05-28 restructure for details.

---

## Maintenance
Update this file when pages are created/promoted. Re-run `backlink.mjs`
then `validate.mjs` before every commit. Pageless ⬚ entries promote to
Axis 2 proper when a page is written. Record restructures in [[log]].
