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
