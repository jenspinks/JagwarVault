# Index — Dual-Axis Navigation

Master catalog for the JagwarTwin vault. Navigate three ways: **by layer**,
**by concept**, **by entry-point**. The entry-point axis is the seed of the
fan-site labyrinth (CLAUDE.md §12). See [[log]] for history, [[CLAUDE]] for
schema, [[Ontology]] for the canonical entity registry.

Legend: ✦ developed · ◦ skeleton/scaffold (Brain page, Essay pending) · ⬚ pageless (declared in Ontology)

---

## Finding things — read this first

> This index is **curated** (it explains what things *mean*); it does **not** list every file. To locate a specific file, use one of these — in order:
>
> 0. **[[AI Quickstart]]** — the operational **first-pass fetch workflow** (for a song/concept/character, which files in what order). **[[entity-map]]** — canonical **ID → exact file paths** for every entity (no filename guessing; Brain song pages are album-nested). Start here for "give me everything on X."
> 1. **`grep -rli "term" .`** from the vault root — fastest, and **always current**. (e.g. `grep -rli "honey pop" Sources/Transcripts/`.) Always authoritative; prefer it over inferring a file exists from this catalog.
> 2. **[[file-map]]** (`_System/file-map.md`) — a **flat, complete enumeration of every `.md` file by folder.** Use when you can't grep or want to see everything at a glance. (Snapshot — regenerate with `python3 _System/gen-file-map.py`.)
> 3. **The registries below** — for sourced material with URLs/status.
>
> **Where things live (folder cheat-sheet):**
> | Looking for… | Folder | Full registry |
> |---|---|---|
> | An **interview / podcast transcript** | `Sources/Transcripts/` (`Outlet-YYYY-Topic.md`; see its [[Sources/Transcripts/README\|README]]) | [[Master Source List]] §11 (interviews) + §2 (Mirror Sessions) |
> | **Song lyrics** | `Sources/Lyrics/` (one file per song) | — |
> | **Composer credits** | `Sources/Credits/` (one file per album) | — |
> | **Roy's public quotes / IG posts** | `Sources/Quotes/` | [[Master Source List]] §4 |
> | **Reference substrate** (Bailey, Joni, influences) | `Sources/Reference/` | [[Sources/Reference/Joni Mitchell (index)]] |
> | **Primary Roy artifacts** (the "I'm 33" board) | `Sources/Artifacts/` | — |
> | A **concept / character / album / song ontology page** | `Brain/` (Concepts, Characters, Albums, Songs) | [[Ontology]] (canonical ID registry) |
> | An **essay** (human-facing prose) | `Essays/` (Concepts, Concepts/Songs, Characters, Arcs) | Axis 1 below |
> | **What an entity ID means** | — | [[Ontology]] |
>
> **Don't conclude a file doesn't exist** because it isn't named in this index — grep or check [[file-map]] first.

---

## Infrastructure (`_System/`)

| Page | Purpose |
|---|---|
| [[CLAUDE]] | Schema — layers, tiers, source rules, frontmatter, workflows |
| [[ARCHITECTURE]] | **Portable system overview** — how the vault is structured/indexed/navigated/built; written to be shared with an external reader or AI (keep in sync with [[CLAUDE]]) |
| [[GEMINI]] | Drafting guide for the Gemini collaborator (root file) — division of labor, tiers, boundaries, output template, fact-verification hand-off |
| [[index]] | This file — dual-axis catalog |
| [[file-map]] | **Flat enumeration of every `.md` file by folder** — the "what exists & where" map (regen: `gen-file-map.py`) |
| [[AI Quickstart]] | **Operational first-pass workflow** — per-task fetch recipes (song/concept/character), source-reliability matrix, tier ladder, speaker + boundary guards. Shorter than [[CLAUDE]], more procedural than [[GPT]]. |
| [[entity-map]] | **Canonical ID → file paths** (machine-readable) — every Ontology entity resolved to its Brain/Lyric/Essay/Credits files + status; a per-song "packet" table (regen: `gen-entity-map.py`) |
| [[Claim Ledger]] | **Contested-claim register** — load-bearing / struck / ruled-out / private-only claims with status, tier, source path, falsifier. Check before asserting a contested reading (stops struck claims resurrecting) |
| [[Framework Registry]] | **Lens register** — its sibling: the Ledger tracks *claims*, this tracks *frameworks*. One row per lens with its Roy-side anchor, the differential run against its competitors, verdict, and falsifier. **Check before adopting or applying any interpretive framework** (stops "found a fit and stopped"). Carries Roy's own named-tradition syllabus + his level-schemas by count. |
| [[log]] | Chronological operational log |
| [[lessons-learned]] | Drift & process register |
| [[Ontology]] | Canonical entity registry (IDs) — run `validate.mjs` for the live ID count |
| [[Theme Tracker]] | Master analytical framework (10 sections + Standard Tracking Fields) |
| [[Boundaries]] | Public/private rules; Secret Document boundary |
| [[Master Source List]] | Canonical public-source registry (Roy's *own* material) |
| [[Parallel Works Index]] | **By-external-work axis** — interpolations / influences / board-list / resonances / ruled-out registry (the external works the catalogue draws on or rhymes with) |
| [[Media Index]] | Raw media catalog |
| `validate.mjs` · `backlink.mjs` | Pre-commit linter · graph back-propagation |
| `_legacy/` | Pre-restructure synthesis files, awaiting triage |

---

## Axis 1 — By Layer

**Sources/** (external evidence, immutable)
- `Sources/Lyrics/` — all catalogue songs ingested; **verified-stable** after the 2026-06-10 Spotify pass: LOOP, BALLERINA BOY, MAGIK, SideQuest, tomorrow, Life Is Good, All My Friends, Hell Of A Night, The Watchers, Dream / Dream, Weirdness, Bounce, Welcome to the Circus, Not Your Homie — plus earlier batch (Long Time Coming, Superhuman Interlude, Loser, Good Day, No Fake Friends, Hell Pt. 2, and others). **dumbledore** remains `draft` (no Spotify lyrics available).
- `Sources/Credits/` — [[Sources/Credits/Subject to Flooding|Subject to Flooding]] composer-credit record (per-track Apple/Spotify verified) · **[[Sources/Credits/33|33]]** (Big Loud; started 2026-05-30 with It's Your Time)
- `Sources/Reference/` — external reference substrate. [[Sources/Reference/Bailey - The Labours of Hercules (reference)]] (12-labour↔sign table). **JONI MITCHELL CLUSTER (2026-06-02) — start here: [[Sources/Reference/Joni Mitchell (index)]]** (map-of-content linking all Joni files by tier): [[Sources/Reference/Joni Mitchell - Ladies of the Canyon (reference)]] (full LotC lyrics + 33-dialogue table, `citable`); [[Sources/Reference/Joni Mitchell — source index]] (indexed public articles, `citable`; all read); [[Sources/Reference/Joni Mitchell — JT-relevant analysis (research dossiers)]] (LLM dossiers, **`citable:false` — leads**); + [[Sources/Reference/Roy's Stated Influences (research dossier)]] (`citable:false`); + **[[Sources/Reference/Subject to Flooding — context & sources (research dossier)]]** (2026-06-05, `citable:false` — corroborates [[Sources/Credits/Subject to Flooding]]; maps the Essex / Sarah-Vaughan / collaborator-gap open items)
- `Sources/Artifacts/` — **NEW (2026-06-01):** primary Roy artifacts. [[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]] — Roy's own cosmology board (Kybalion/Bailey/Russell/Kabbalah/Jung/Plato; the "Tracks" concept-album; "Statue of Roy"; Soul-Is-A-Star "Sun" draft); hub concept = [[The Pattern]] · **HoM ARG map:** [[_System/HoM - Session Handoff & Index]]
- `Sources/Quotes/` — [[Sources/Quotes/Roy IG Story - Bailey Labour VII]] (Roy's annotated Bailey page) + IG posts (Half the Man / El Roy / Everyone's a Guru / Sir Lucius One Hit Wonder)
- `Sources/Transcripts/` — Verbatim interview/podcast/series excerpts, one file per source (`Outlet-YYYY-Topic.md`); see [[Sources/Transcripts/README]] for the convention. **THEATRICAL CANON (the Roy vs Sir Lucius spine): [[Sources/Transcripts/The Interview (Roy vs Sir Lucius, theatrical EP1-7)]]** — full verbatim dialogue for all 7 EPs (*The War Begins* → *ROY's listening party*); the most-cited primary source in the vault. Also: the **Mirror Sessions** (`MirrorSessions-*.md`, *separate & biographical* — Roy interviewing other artists, NOT lore), the named-interview transcripts (Atwood, Strife, Knockturnal, Masquerade, etc.), **[[Sources/Transcripts/Roy IG Live - Bailey 12 Labours of Hercules]]**, and **[[Sources/Transcripts/Eye Alaska Interview - 2010]]** (Brandon/Roy, pre-JT). **For the complete enumerated list:** [[file-map]] (or `ls Sources/Transcripts/`); **for URLs + status:** [[Master Source List]] §2 (theatrical + Mirror Sessions) + §11 (press interviews). Aggregated by theme into Brain/Roy Voice.

**Brain/** (machine semantic memory — terse, frontmatter, tiered connections)
- `Brain/Songs/` — one page per catalogue song; the essay-filed songs carry full frontmatter, the rest are scaffolds ◦
- `Brain/Concepts/` — **all with frontmatter ✦** (incl. [[Nigredo]], [[Duality]], [[Witnessing vs Surveillance]]; [[The Pattern]] `CONCEPT-ThePattern`; **2026-06-05: [[Brain/Concepts/The Circle|The Circle]]** `CONCEPT-TheCircle` — keystone doctrine, 2019 date-floor; **+ [[Brain/Concepts/Source vs Reflection]]** `CONCEPT-SourceVsReflection` — the master-key meta-frame above Machine-vs-Human; **2026-06-09: [[Brain/Concepts/The Digital Double]]** `CONCEPT-TheDigitalDouble` — the AI/digital-double thread, sibling to The Upload)
- `Brain/Characters/` — Roy ✦, Sir Lucius ✦, Mary ◦, Jagwar Twin ◦
- `Brain/Albums/` — Lucius Lullaby ✦, 33 ◦, Subject to Flooding ◦ (substantially developed page; tracklist + composer credits + Flood frame)
- `Brain/Roy Voice/` — **NEW (2026-05-28):** authorial-voice index — thematic aggregation of Roy's public statements, designed for context-loading during song analysis. See [[Brain/Roy Voice/README]]. Sources/Transcripts/ holds verbatim per-interview excerpts; Brain/Roy Voice/ holds the by-theme aggregation. Registered in [[Master Source List]] §11 (interviews queued for ingestion). **Updated 2026-05-29:** The Mirror Sessions aggregated in; new page [[Roy on the Heart-Mind Split]] added (Roy equates the rational mind with the Lucifer archetype — grounds [[Sir Lucius]] = the mind).

**Essays/** (human creative project → fan site; verbose, tiered prose)
- `Essays/Songs/` — [[Essays/Concepts/Songs/Welcome to the Circus]] · [[Essays/Concepts/Songs/Lucius Lullaby]] · [[Essays/Concepts/Songs/Ballerina Boy]] · [[Essays/Concepts/Songs/Not Your Homie]] · [[Essays/Concepts/Songs/Weirdness]] (pre-session) + [[Essays/Concepts/Songs/Long Time Coming]] · [[Essays/Concepts/Songs/Dream - Dream]] · [[Essays/Concepts/Songs/Superhuman (Interlude)]] · [[Essays/Concepts/Songs/Loser]] · [[Essays/Concepts/Songs/Good Day]] · [[Essays/Concepts/Songs/No Fake Friends]] · [[Essays/Concepts/Songs/Hell of a Night Pt. 2 (The Hallelujah Stickup)]] (this session)
- `Essays/Characters/` — [[Roy]] ✦ · [[Sir Lucius]] ✦
- `Essays/Concepts/` — [[The Labors of Hercules]] ✦ · [[The Dweller on the Threshold]] ✦ · [[Jacob & Esau]] ◦ (Roy/Lucius as the divided-blessing twins; `CONCEPT-JacobEsau`)
- `Essays/Concepts/Songs/` — **33-album essays (2026-05–06):** [[Essays/Concepts/Songs/Online]] · [[Essays/Concepts/Songs/It's Your Time]] · [[Essays/Concepts/Songs/Soul Is A Star]] (the big Joni/Woodstock essay — read its Verification Ledger) · [[Essays/Concepts/Songs/Pay Attention (feat. little luna)]] (Attention-as-deity; Lucius-function prototype) · [[Essays/Concepts/Songs/I Like to Party]] (simulated participation; the kingdom-within interrupted) · [[Essays/Concepts/Songs/Down to You]] (the inward correction; heart/mind stated; bread-not-cake refusal) · [[Essays/Concepts/Songs/Another Way II Heaven]] (**the creation myth — lyric = Roy's board cosmogonic poem; One-become-Two; grounds [[The Pattern]]**) · [[Essays/Concepts/Songs/Imagine A World]] (imagination-as-authorship; the designed/OZ god; Eden-within) · [[Essays/Concepts/Songs/The Circle]] (**the closer / foundational Jagwar myth; origin of [[The Thread]]; "inside of the inside"; the album's mythic cure**) · **[[Essays/Concepts/Songs/Happy Face]]** (2026-06-05 — *the last 33 essay*; the algorithm's product / Lucius-claimed; the Loop keystone: *what you get when the Circle doesn't stream*). *(Plus the STF song essays listed under Essays/Songs above.)* **33 credits verified ([[Sources/Credits/33]]); all its song essays now built.**
- `Essays/Concepts/Songs/` — **Lucius Lullaby + Singles essays (2026-06-10 batch):** [[Essays/Concepts/Songs/Playing to the Gods]] (the survival-mantra / counterfeit immortality; seams into City of Angels) · [[Essays/Concepts/Songs/SOL]] (**the wordless closer / "Song of Love"; the song Lucius can't metabolize**; breath-substrate read held `[P]`/`[~]`) · [[Essays/Concepts/Songs/Bounce]] (panic-evasion / "don't stop"; the regression cluster — *prior fabricated I-Like-to-Party callback struck*) · [[Essays/Concepts/Songs/LOOP]] (the trap named from the light side; Circle-vs-Loop; "my mind must serve my heart") · [[Essays/Concepts/Songs/SideQuest]] (comic breakup / false-centrality; deflationary Jaguar — *no Lucius mapping*) · [[Essays/Concepts/Songs/dumbledore]] (persecuted-magician vs "go dumb"; martyr roll-call AZLyrics-gated) · [[Essays/Concepts/Songs/tomorrow (ANGLE OF ETERNITY)]] (JT × lovelytheband; remembrance/anamnesis + "I AM"; surrender-inversion of Playing to the Gods; **angle/angel struck from `[G]` — private-only**). · [[Essays/Concepts/Songs/Life Is Good]] (JT × angelbaby, 2023; joy-as-*decision* — the integrated step past Happy Face; the AI-collaborator meta-layer). · [[Essays/Concepts/Songs/MAGIK]] (the pure **witnessing** song — restorative seeing / the blessing-voice cluster; anti-Circus tender counter-pole). · [[Essays/Concepts/Songs/Good Time (1-08)]] (**the song where Sir Lucius is born** — Roy's TikTok dream-origin: the clown-rabbit passenger, the truth-that-manipulates; grounds the Lucius dynamic to 2023). · [[Essays/Concepts/Songs/The Circle (Lucius Version)]] (the album opener — **appropriation-not-deletion**: the keystone myth's name kept, the Lullaby refrain swapped in; "I'm dreaming" replaces "remembering"; music-box = Thread-as-clockwork; brackets the album with [[Essays/Concepts/Songs/SOL]]). *(Still no essay: Hell Of A Night, Shine, Precious Time, All My Friends.)*
- `Essays/Arcs/` — [[Brain/Songs/Lucius Lullaby]] (album arc) ✦ · [[Machine vs Human]] ✦ (**new 2026-05-28**)
- `Essays/_drafts/` — **NOT empty:** external-review briefs + 33/STF/LL Vetting Dossiers (folded into canon, some unstamped). Fold status at a glance → [[Drafts Fold-Status]].

---

## Axis 2 — By Concept

Each links the Brain entry (always) and the Essay (if written ✦).

**Load-bearing**
- [[Brain/Concepts/Source vs Reflection]] ✦ — `CONCEPT-SourceVsReflection`; **the master-key meta-frame**: *does a reflection return you to the source, or trap you in the image?* The genus above Machine-vs-Human, Witnessing-vs-Surveillance, Circle-vs-Loop, and Sun-vs-Moon.
- [[Brain/Concepts/The Circle]] ✦ — `CONCEPT-TheCircle`; **the keystone doctrine**: no beginning/end, song-hidden-within, remembrance, "the inside of the inside"; first documented 2019 (date-floor), formalized as the *33* closer 2022. The figure every other concept serves or inverts.
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
- [[Kabbalah - The Tree of Life]] ✦ — `CONCEPT-TreeOfLife`; the sefirot/pillars **backbone** (Sun=Tiferet / Moon=Roy / Morning-Star=Lucius); homes the pageless sefirot as anchors; the *structure* whose fracture is [[Keilim - The Breaking of the Vessels]]
- **Joni Mitchell thread** (inherited-influence, confirmed via the Soul Is A Star co-write) → map-of-content: [[Sources/Reference/Joni Mitchell (index)]]
- **Digital Age cluster** (the digital/AI territory — two strands) →
  - *Digital selves / AI personhood:* [[The Digital Double]] ✦ `CONCEPT-TheDigitalDouble` (SARAVI, the angelbaby AI-collab, the clone-fear, Lucius-as-double) · [[The Upload]] ✦ (the self→net→Eye *operation*) · [[Brain/Roy Voice/Roy on the cosmology (Manifesto)]] (Hall of Mirrors / SARAVI, Roy's stated framework)
  - *Digital system / environment:* [[The Algorithm]] · [[The Aquarium]] · [[The Spectacle]] · [[The Audience]] · [[Witnessing vs Surveillance]] · [[Communion vs Spectacle]]
  - *Released instantiations:* [[Online]] (the upload/clone song) · [[The Watchers]] (the net-as-Eye + clone-fear)

**Secondary** ◦
The Mask · The Mouth · The Voice · The Audience · The Light-Bearer · The Spectacle · Consumption · Fire · The Wheel · The Veil · The Aquarium · Panem et Circenses

**Pageless** ⬚ (declared in [[Ontology]], referenced, no page yet — live source: [[entity-map]] §Pageless / [[Ontology]] "Declared — pageless")
The Moon · Yesod · Malkhut · Tiferet · Binah · Shekhinah · Netzach · Hod · Geburah · Albedo · Rubedo · Orbit / Return · Anima/Animus · Alchemical Transmutation · The Loop · The Abyss · Objective Art · Somatic Captivity · Collective Amnesia · The Twice-Voiced Blessing · Tsimtsum · Tikkun Olam · Liminal Spaces · Sacred Geometry · Cosmic Cycles · Sleep / Wake Up · Ballerina Boy · Leif · BMRC (Black Magic Rainbow Circus; "Boss" = Lucius)

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

## Status & Known Gaps

> Live status lives in the tools, not here (curated counts rot): run `node _System/validate.mjs` for page / ID / warning totals, and see [[entity-map]] for per-entity status. The historical 2026-06-02 / 06-28 snapshot was moved to [[log]] (the 2026-07-01 AI entry-layer unfork entry).

---

## Recent restructure (2026-05-28)

The iCloud-synced pre-restructure vault (`~/Library/Mobile Documents/iCloud~md~obsidian/Documents/JagwarTwin`) — Karpathy three-layer Raw/Processed/Wiki schema, lowercase `Claude.md` — has been **decommissioned**. Moved to iCloud Trash; Claude Desktop's `obsidian` MCP path corrected to point only at this live vault. The current architecture is `Sources/Brain/Essays/_System` (per [[CLAUDE]]). See [[log]] entry 2026-05-28 restructure for details.

---

## Maintenance
Update this file when pages are created/promoted. Re-run `backlink.mjs`
then `validate.mjs` before every commit. Pageless ⬚ entries promote to
Axis 2 proper when a page is written. Record restructures in [[log]].
