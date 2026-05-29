# Log

Chronological, append-only record of vault operations. Each entry begins with `## [YYYY-MM-DD]` followed by an action type and brief description. This makes the log greppable.

Action types:
- `ingest` — new source added; wiki updated
- `query` — significant analytical question answered; if filed back, link to new page
- `lint` — health check of vault; flag findings
- `restructure` — folder/file reorganization
- `boundary` — change to public/private rules
- `note` — administrative or process note

For schema, see [[CLAUDE]]. For content catalog, see [[index]].

---

## [2026-05-29] ingest — The Mirror Sessions (12 episodes) transcribed, aggregated, and registered

Ingested all 12 cleaned, speaker-attributed episodes of **The Mirror Sessions** (Roy's own interview series) from two Jen-maintained Google Docs (working references, not citations — per [[Boundaries]]). Filed full cleaned transcripts at `Sources/Transcripts/MirrorSessions-*.md` (`status: draft` pending listen-through of flagged attribution calls). **Resolved the long-standing open thread** ("does the series name come from the mirror-doctrine, and when did it begin?"): yes — Roy restates the *be-a-mirror / get-out-of-the-way* premise across ≥4 episodes and names the metaverse "the Hall of Mirrors" inside a Mirror Session; **series start = 2022-11-30** (Calum Hood "Comfortable in Silence," episode 1).

Aggregated Roy's load-bearing statements into [[Roy on Mirrors & Collective Consciousness]], [[Roy on Process]], [[Roy on the cosmology (Manifesto)]], and [[Roy on Authenticity & Masks]]; created one new page, **[[Roy on the Heart-Mind Split]]** (≥6-quote cluster), anchored by the episode's most load-bearing beat — Roy, unprompted, equating **the rational mind with the Lucifer archetype** ([[MirrorSessions-S1-HearGodsVoice]]), which grounds the vault's [[Sir Lucius]] = the-mind reading. Other cornerstones surfaced: Roy naming the project *"a modern mythology approach"* with Mali-Koa confirming *"the Jaguar's twin mythology"* ([[MirrorSessions-MaliKoa-SoloToARCO]]); the Mercury/Hermes-as-higher-self Hermeticism beat; the chaos→order (gendered feminine) mechanism-of-art beat.

Resolved 11 of 12 YouTube URLs (registered in [[Master Source List]] §2). **Follow-ups:** (1) episode 10 (AlmondMilkHunni "Overcoming Self-Doubt") URL unconfirmed — candidate `eDVg4xdk2GQ`, verify by ear; (2) several publish dates resolve only to year; (3) a separate **little luna** Mirror Session exists, not yet ingested; (4) the Bohnes "Power of Music" whale/tattoo/proposal/"Josephine" closing sequence has an unresolved speaker-attribution call (Roy vs. Bohnes) that determines whose biography it is — **must be confirmed by ear before any of it enters a character note.**

---

## [2026-05-28] restructure — iCloud vault decommissioned; Claude Desktop MCP path corrected

Discovered a second JagwarTwin vault on disk at `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/JagwarTwin` — the **pre-restructure** vault (Raw/Processed/Wiki layout, lowercase `Claude.md`, Karpathy three-layer schema). Claude Desktop's `obsidian` MCP server was pointed only at the iCloud copy, so a parallel chat session was operating on the stale vault while Code worked on the live one (`~/Vaults/JagwarTwin/`). Moved iCloud vault to iCloud Trash (recoverable ~30 days); rewrote `~/Library/Application Support/Claude/claude_desktop_config.json` so the `obsidian` MCP points only at the live vault. Backup: `claude_desktop_config.json.bak-2026-05-28`. Claude Desktop restart required.

---

## [2026-05-28] lint — AZLyrics downgraded to draft-tier; Spotify ≥ Apple Music rule codified

[[CLAUDE]] lyric-verification rule updated. **AZLyrics + Google Drive lyric docs are draft-tier only** — they do NOT count as verification. Apple Music + Spotify streaming = authoritative. Documented AZLyrics errors this session: *Dream / Dream* dropped Johnny Mercer + misspelled Vaughan; *Long Time Coming* "framers" → "famous"; *Good Day* phantom "Terry Knight"; *Hell Pt. 2* Producer↔Writer conflation (Matt Pauling listed as Writer when he is a Producer). Further rule: **Spotify ≥ Apple Music on lyric completeness** — Apple's synced-lyrics pane has repeatedly proved less complete (four confirmed omissions: *Loser* closing bridge "I think the world's gone insane", *Not Your Homie* "(sucker, it's a vibe)" ad-lib, *Superhuman (Interlude)* line-break corrections, *Hell Pt. 2* the entire restructured pre-chorus + "Red wine shoelace no body found" crime-scene image). When the two diverge, prefer the more complete reading. Composer-credit note added: Apple Music *Lyrics-tab "Written By"* line can fill in when *Details composer* field is blank (Good Day pattern); Spotify Credits view is the most complete (Composition & Lyrics + full production team).

---

## [2026-05-28] lint — Subject to Flooding tracklist corrected to 13 (was 11)

[[Subject to Flooding (album)]] is **13 tracks**, not 11, verified via MusicBrainz. Track positions 1–11 in the existing Brain stubs were all correct; the vault was simply incomplete. Created stub Brain pages for the missing tracks: **Precious Time (12)** and **Shine (13)**. Updated 9 stub pages' denominators ("Track N of 11" → "Track N of 13"). Album page tracklist extended; "Shine = standalone single" claim corrected (it's the album closer, also a 2020 Live In Studio single). Two pre-existing open questions ("Are there bonus tracks?", "Where does Shine fit?") resolved. [[Ontology]] entries for `SONG-PreciousTime` and `SONG-Shine` revised from misleading "reissue track" notes to "standard album track 12/13 per MusicBrainz."

---

## [2026-05-28] ingest — Sources/Credits/Subject to Flooding (new): per-track composer verification

New subfolder `Sources/Credits/` with authoritative composer-credit record for [[Subject to Flooding (album)]]. Built from Jen's per-track Apple Music + Spotify Credits screenshots. Records: tracks with composer field beyond "Jagwar Twin" (Dream / Dream, Good Day, Superhuman Interlude, Move To You, Roy Voice Memo, Hell Pt. 2); per-track verified entries (Loser, Good Day, N.F.F., Hell Pt. 2); album-wide production team (S1 Executive Producer, Matt Pauling Producer, Chris Gehringer Masterer, Jeff Ellis Mixer — recurring across tracks); flagged conflicts with prior AZLyrics writer lists (now mostly resolved). **Establishes Apple Music composer field / Spotify Credits view as the album's authoritative songwriting-credit source**, with AZLyrics downgraded. ℗ Atlantic Recording Corporation / WEA International Inc.; Apple metadata release date 2019-04-26 (redistribution; album first released 2018-09-21).

---

## [2026-05-28] ingest — Subject to Flooding essays + Brain pages: 7 of 13 tracks fully verified

Verify-then-build campaign across [[Subject to Flooding (album)]]: each track's lyrics + composer screenshot-verified by Jen against Apple Music / Spotify, source files reconciled against Google-Drive / AZLyrics drafts, then full Brain page + Essay filed. **Done (7/13):** [[Long Time Coming]] · [[Dream - Dream]] (Dream / Dream) · [[Superhuman (Interlude)]] · [[Loser]] · [[Good Day]] · [[No Fake Friends]] (N.F.F.) · [[Hell Of A Night Pt. 2 (The Hallelujah Stickup)|Hell of a Night Pt. 2]]. **Stubs remaining:** Superhuman (partial — visible portion Spotify-verified, scroll-down + Details pending), Move To You, Roy Voice Memo, Hell of a Night (Pt. 1), Precious Time, Shine. Each filed essay matches vault convention (essay-style frontmatter, filename wikilinks, tier markers preserved); Brain pages carry full frontmatter including Standard Tracking Fields. Multiple Jen "convergence-point" essay drafts (ChatGPT-generated) were converted to vault conventions and integrated — Loser, Good Day, Hell Pt. 2, N.F.F. essays each incorporate her sharpenings (e.g. Loser's "brightness ≠ emergence" correction; Good Day's "orbit as travel itinerary" + "untouchable = unreachable"; N.F.F.'s "stars flattened into sidewalks" + "recovers altitude, not trust").

---

## [2026-05-28] query — inherited-substrate practice confirmed on Subject to Flooding

Three documented external composer/cultural credits on a single album establish a relay/curation practice at multiple register-levels — central to the new provenance-axis doctrine (`CONCEPT-InheritedSubstrate`). **Licensed interpolation:** [[Dream - Dream]] (track 2) interpolates **Johnny Mercer's 1944 jazz standard "Dream (When You're Feeling Blue)"** (recorded by Sarah Vaughan); composer credit: Mercer, Pauling, Roy English, Vaughan. **Licensed sample:** [[Superhuman (Interlude)]] (track 5) is verbatim **Charlie Chaplin's *The Great Dictator* (1940) closing speech** ("kingdom of God is within man… you the people have the power… let us all unite"); composer credit includes Charles Chaplin; corroborated by pre-existing vault note + Apple Music verbatim lyrics. **Unlicensed allusion:** [[Loser]] (track 3) echoes Beck's "Loser" (1993); no Beck composer credit → allusion-tier, not interpolation. Open question: a fourth credit, *"Essex"* on [[Good Day]] (track 4), remains **unidentified** — possibly another interpolation source (Discogs gated; web search inconclusive; needs ASCAP/BMI or audio sample-spotting).

---

## [2026-05-28] query — Machine vs Human arc; Witnessing vs Surveillance doctrine

New thread spine for the catalogue: [[Machine vs Human]] (`Essays/Arcs/`, `CONCEPT-MachineVsHuman`). Traces 1940 Chaplin (abstract/external/authoritarian machine, in [[Superhuman (Interlude)]]) → 33-era 2022 (ambient/intimate machine: "Online", "Pay Attention") → 2026 Lucius (personified machine: the Algorithm, the Circus). Critical guardrails: **the machine is NOT the antagonist** — the antagonist is the *severing of structure from heart* (Tiferet-guided structure vs Yesod severed from Tiferet). **The Flood frame** [P]: *Subject to Flooding* names the biblical Flood (Genesis 6–9) — extinction event; immersion, not explosion; the digital deluge is the stake. Sibling doctrine: [[Witnessing vs Surveillance]] (`CONCEPT-WitnessingVsSurveillance`) — two modes of being-seen: **witnessing transforms** (El Roi, "the God who sees"; relational presence); **surveillance shapes** (the Algorithm; extractive prediction). *"The algorithm does not know you — it knows how to shape you."* Lucius wears `אל ראי` on his throat (the El Roi tattoo) — carries "the God who sees" on the very organ that says *"you don't know me."* Anchored in [[Online]] (newly built Brain page).

---

## [2026-05-28] query — The Protector concept; STF Protector triad cross-track reading

Registered `CONCEPT-TheProtector` — adaptive psychic-defense architecture; *"if humiliation is inevitable, control the humiliation yourself"*; precursor to [[Sir Lucius]] (**Lucius = The Protector crystallized into theatrical identity**). Cross-track reading established: **STF Protector triad** — [[Loser]] (shame-preemption: claim the label first) / [[Good Day]] (vibe-protection: armor the mood-state) / [[No Fake Friends]] (social filtration: list-keeping, exclusion as policy). Three faces of the same architecture. Bridge to Lucius confirmed via cross-catalogue *"vibe"* vocabulary: Good Day's *"Can't kill my vibe / Won't kill my vibe"* (pre-Lucius armor) + Not Your Homie's *"don't kill my vibe"* (bridge) + *"sucker, it's a vibe"* (Spotify-only ad-lib added this session). Same armor-word evolving; Lucius = what Good Day's vibe-defense becomes when it acquires a face.

---

## [2026-05-28] note — CLAUDE.md CORE PRINCIPLES expanded (3 additions)

Added to [[CLAUDE]] CORE PRINCIPLES section, alongside existing "Symbols are contextual" / "Negative evidence matters" / "Transformation is directional" / "Do not collapse registers":
1. **Distinguish inherited substrate from internal architecture** — provenance axis. Symbols built *inside* the JT mythos (Lucius, El Roi placement, theatrical EPs, loop/circle, algorithm language, mirror recursion, face-paint) vs. **received and reworked** from the wider culture (dream mythology, jazz-standard yearning, gospel uplift, stairway/heaven, anti-fascist speech). Prefer "mythic emergence" over "intentional esoteric encoding" when material predates JT in the culture; downgrade intent-claims to `[W]`/resonance and frame as participation, not authorship. See `CONCEPT-InheritedSubstrate`.
2. **Retrospective coherence ≠ original intentional encoding** — guard against back-dating doctrine into early songs. The early catalogue likely holds genuine sincerity, straightforward rebellion, ordinary pop craft. A song joins a thread only on its own anchors. Use `[W]` / `[P]` / Open Questions aggressively.
3. **Spotify ≥ Apple Music on lyric completeness** (see paired lint entry above).

---

## [2026-05-28] note — Standard Tracking Fields + [[Theme Tracker]] + concept-page infrastructure

Earlier in session, established the analytical-tracking layer that later song pages depend on:
- **[[Theme Tracker]]** created in `_System/` — 10-section master symbolic grammar (Core Dualities, Transformation/Initiation, Time/Memory/Recursion, Psychological Architecture, Interior/Exterior Systems, Kabbalistic Architecture, Channels/Transmission, Symbolic Imagery, Relational Dynamics, Meta-Structural) + the **Standard Tracking Fields** reference table.
- **Standard Tracking Fields** added to [[CLAUDE]] frontmatter schema with enum values: `dominant_pole` (solar/lunar/mixed), `transformation_phase` (nigredo/albedo/rubedo), `recursion_state` (loop/orbit/return/circle), `threshold_state` (closed/approaching/crossing/integrated), `narrative_voice` (roy/lucius/mixed/unknown), `temporal_register` (past/recursive/timeless/transitional), `active_systems` (list), `active_symbols` (list).
- **17 concept-page YAML frontmatter retrofitted**: The Algorithm, The Spectacle, The Audience, The Mask, The Thread, Consumption, Inversion, Panem et Circenses, The Circus, The Labyrinth, Fire, The Aquarium, The Light-Bearer, The Veil, The Wheel, The Voice, The Mouth — all now in [[Ontology]] with connections.
- **New concept pages:** [[Nigredo]], [[Duality]], [[Witnessing vs Surveillance]] (`CONCEPT-WitnessingVsSurveillance`).
- **CLAUDE.md** itself was replaced this session with a merged canonical version that preserves Secret-Document boundary, contamination model, validator/backlink workflow, and adds: Theatrical-vs-Biographical, Loop/Circle, Orbit/Return, Love-as-transformative-force, Structural Functions, Failure Modes, Architectural Spaces, the three new CORE PRINCIPLES above. MERCY reference kept small (Mercedes Colletta Britton = the Not Your Homie songwriter, not a Mary-cipher) per Jen's preference.

---

## [2026-05-28] note — pre-2026-05-15 TODOs partially superseded by restructure outcome

The "Folder restructure (Wiki/Concepts, Wiki/Characters, Wiki/Songs, Wiki/Albums, Wiki/Theatrical; move Media/ to Raw/Media/; create Processed/ structure)" checkbox in the 2026-05-05 entry below is **obsolete**. The restructure happened, but to a different target architecture: the live vault now uses `Sources/Brain/Essays/_System` (per current [[CLAUDE]]) — not Wiki/Raw/Processed. The Processed/Lyrics + Processed/Episode Transcripts TODOs are also moot in this layer: lyric files live in `Sources/Lyrics/` (47 files ingested) and transcript work happens under `Sources/Transcripts/` when ingested. Older log references to specific pages (Sir Lucius, Lucius Lullaby (album), Mary, The Dweller on the Threshold, The Labors of Hercules, Welcome to the Circus, Media Index) still point at the right entities — the file paths just live in the current layer structure now. (See [[index]] for current count by layer.)

---

## [2026-05-16] ingest — gap lyrics (AZLyrics, pasted) + EP-name cleanup

Filled all remaining Source gaps via Jen pasting AZLyrics pages. **Sources/Lyrics now covers all 47 catalogue songs.** New this pass: Dream-Dream, Good Day, Hell Of A Night, Hell Of A Night Pt. 2, Superhuman, No Fake Friends, Roy Voice Memo (spoken), Long Time Coming, Superhuman (Interlude) (spoken — Chaplin *Great Dictator* sample), Another Way II Heaven (completes *33*), LOOP, The Watchers, dumbledore, tomorrow (ANGLE OF ETERNITY). Replaced Precious Time + Shine drafts with better-sourced AZLyrics versions (both confirmed STF reissue tracks, not singles).

AZLyrics paste carries writer credits + album confirmation → these are better-sourced than the Drive bulk (verified_against: AZLyrics/MusixMatch). Still `status: draft` (single-source; flip to stable on cross-check vs official release).

Cleanup: dropped wrong " EP" suffix — `MAGIK EP`→`MAGIK`, `SideQuest EP`→`SideQuest`, `dumbledore EP`→`dumbledore` across Ontology IDs, Sources files, and Brain scaffolds. (Safe: no frontmatter referenced the old IDs.)

---

## [2026-05-16] ingest — bulk lyrics → Sources/Lyrics/

Bulk-ingested lyrics from Jen's two Google Drive docs into `Sources/Lyrics/`. 33 files total (18 from doc 2: 33/STF/singles; 13 from doc 1: Lucius Lullaby album tracks; + Welcome to the Circus and Soul Is A Star pre-existing/pilot). All `status: draft`, `verified_against: []` — transcriptions NOT yet verified against streaming. Verification is per-song at analysis time (cross-check Apple/Spotify/Letras/Shazam → record URLs → flip status to stable). Genius + Letras block Claude's fetcher; use WebSearch or manual.

Added 3 new Ontology entities: SONG-PreciousTime, SONG-AllMyFriends, SONG-LifeIsGood (all Singles & EPs).

Specials: The Circle (Lucius Version), Playing to the Gods, SOL = instrumental markers; Moths to the Flame = spoken text ("Civilization has been a mistake…"). SOL also carries the public video-shorts poem (URL pending).

**Sources still PENDING (no lyrics in either doc — fetch later):** Another Way II Heaven; LOOP; The Watchers; dumbledore EP; tomorrow (ANGLE OF ETERNITY); Subject to Flooding tracks — Dream-Dream, Good Day, Hell Of A Night, Hell Of A Night Pt. 2, Long Time Coming, No Fake Friends, Roy Voice Memo - S1 Arrowhead, Superhuman, Superhuman (Interlude).

Generators kept as one-shot scaffolds: `_System/_gen-sources-lyrics.mjs`, `_System/_gen-sources-doc1.mjs`.

---

## [2026-05-06] restructure | Full folder restructure executed + discography populated

**Completed this session:**
- Created: Wiki/Characters/, Wiki/Albums/, Wiki/Songs/, Wiki/Songs/Lucius Lullaby (2026)/, Wiki/Songs/33 (2022)/, Wiki/Songs/Subject to Flooding (2018)/, Wiki/Songs/Singles & EPs/, Wiki/Theatrical/, Raw/, Raw/Media/, Processed/Episode Transcripts/
- Moved: Roy, Sir Lucius, Mary, Jagwar Twin → Wiki/Characters/
- Moved: The Dweller on the Threshold, The Labors of Hercules, The Path → Wiki/Concepts/
- Moved: Lucius Lullaby (album) → Wiki/Albums/
- Moved: All 14 Lucius Lullaby songs → Wiki/Songs/Lucius Lullaby (2026)/
- Created: 11 stubs for Subject to Flooding (2018) in Wiki/Songs/Subject to Flooding (2018)/
- Created: 10 stubs for 33 (2022) in Wiki/Songs/33 (2022)/ — with analytical notes seeded on high-priority tracks
- Created: Wiki/Albums/Subject to Flooding (album).md and Wiki/Albums/33 (album).md
- Created: Wiki/Songs/Singles & EPs/ with Singles Index + 9 stub pages (LOOP, BALLERINA BOY, The Watchers, MAGIK EP, SideQuest EP, dumbledore EP, Good Time (1:08), Shine, tomorrow [ANGLE OF ETERNITY])
- Stubs still needed: All My Friends, The Circle: The Great Jagwar Myth, life is good
- index.md: needs updating to reflect new paths (pending)
- Songs/ folder at root is now empty — can be deleted or kept as archive

**Discography confirmed (public sources):**
- Subject to Flooding (2018): 11 tracks confirmed via Alt Press; Deezer shows 13 — possible deluxe. Shine and possibly one other track unaccounted for.
- 33 (2022): 10 tracks confirmed
- Lucius Lullaby (2026): 14 tracks (in vault)
- Between-album singles/EPs: Shine, Good Time (1:08), All My Friends, The Circle: The Great Jagwar Myth, life is good, The Watchers (Oct 2024), tomorrow [ANGLE OF ETERNITY] (2024), dumbledore EP (2025), MAGIK EP (2025), SideQuest EP (2025), BALLERINA BOY (2025), LOOP (2025)

**Analytically seeded (check stubs before working on these):**
- Another Way II Heaven — framework-dense, priority
- The Circle (33 version) — cosmological map, compare to Lucius Version
- Hell Of A Night Pt. 2 — Hallelujah Stickup subtitle: early Inversion instance
- BALLERINA BOY — suppressed voice, Algorithm-resistant, kept off album
- LOOP — closed-system concept made explicit
- MAGIK EP — possible Crowley/esoteric spelling; check
- tomorrow [ANGLE OF ETERNITY] — angles/angels framework in title
- dumbledore EP — mentor/guide archetype or Algorithm flattening sacred into IP?

---

## [2026-05-06] note | Session handoff logged — Claude picks up here

This entry covers the GPT session (2026-05-05 to 05-06) and establishes the current vault state for session pickup. Full session detail in [[SESSION_SUMMARY]] (vault root) — to be retired once log is current.

**Terminology change (permanent, going forward):** "theatrical" / "theatrical series" → **"visual lore"** / **"visual YouTube series"**. The YouTube framing is fine to keep; "theatrical" is retired. Applied to [[Welcome to the Circus]] this session. All future pages should use the new terms.

**Built this session (GPT):**
- 17 concept pages in `Wiki/Concepts/`: The Circus, The Labyrinth, The Thread, Inversion, The Algorithm (load-bearing); The Mask, The Mouth, The Audience, The Light-Bearer, The Spectacle, Fire, The Wheel, The Veil, Consumption, The Voice, Panem et Circenses, The Aquarium (secondary)
- `Processed/Lyrics/welcome to the circus.md` — full cleaned lyrics + comprehensive phrase index (no interpretation); model for all future lyric files
- `Wiki/Songs/Welcome to the Circus.md` — full analysis with Grounded/Strong Read/Resonances tiers; visual lore citations updated

**Key analytical frameworks established:**
- *Welcome to the Circus* performs systematic inversion at literal/sensory, symbolic, and theological levels. Christ-speech forms ("step right up" / "come unto me"; "I'll chew you up" / "this is my body") with predatory content. Jonah (consumed and transformed) vs. WTTC (consumed and discarded).
- *Jacob/Esau reframing*: Lucius = Esau (exiled twin); Roy = Jacob (wrestling self, wounded at Peniel). The Lucius Lullaby arc = can these twins integrate rather than perpetually war? Connects to the Hidden Name reading.
- *The Thread* is the most load-bearing concept in the vault. World tied on a string; Ariadne's thread; feeling as the animating principle (vowel/consonant structure; angels/angles); the Circus's primary function is severing the thread by making people sacrifice it themselves. The Thread page exists but needs expansion.

**Pending — Immediate:**
- [ ] Execute folder restructure: move Songs/ (14 files) → Wiki/Songs/; Roy, Sir Lucius, Mary, Jagwar Twin → Wiki/Characters/; The Circle, The Mirror, The Dweller on the Threshold, The Labors of Hercules → Wiki/Concepts/; Lucius Lullaby (album) → Wiki/Albums/; Media/ → Raw/Media/. Create missing subfolders: Wiki/Characters/, Wiki/Songs/, Wiki/Albums/, Wiki/Theatrical/, Processed/Episode Transcripts/
- [ ] Determine: organize Songs/ by album + Singles folder? (question open at end of GPT session)
- [ ] Fold detailed WTTC analysis into [[Welcome to the Circus]] wiki page (in progress)
- [ ] Build `Processed/Episode Transcripts/` files from public visual YouTube series
- [ ] Build `Processed/Quotes - Roy Curated.md`
- [ ] Retire [[SESSION_SUMMARY]] once log reflects full state

**Pending — Song Analysis:**
- [ ] SOL (track 14) — Song of Love; what Lucius cannot metabolize
- [ ] Not Your Homie — "tame the Beast / champion" lyric; Strong Read anchor
- [ ] Ballerina Boy — suppressed voice; Algorithm-resistant song
- [ ] Earlier catalogue: 33 (album), Subject to Flooding (album), LOOP, Good Time (1:08), Happy Face, I Like to Party

**Pending — Research:**
- [ ] Trace Rachel Kanner (background vocals on WTTC) across catalogue; possible Mary-voice marker
- [ ] Identify "The Boss" figure (who Lucius reports to)
- [ ] Earlier catalogue scan for Hercules / Bailey anchors
- [ ] Verify Processed/Lyrics transcriptions against official releases

**Pending — Concept pages to build:**
- Yesod, Malkhut, Tiferet (Kabbalistic sephiroth)
- The Garage, The Moon, The Empty Mirror, The Angel/Angle
- The Minotaur, Ariadne, The Twins (Jacob/Esau dedicated page)

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
