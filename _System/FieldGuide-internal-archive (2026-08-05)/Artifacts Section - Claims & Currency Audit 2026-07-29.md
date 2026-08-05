---
title: Artifacts Section — Claims & Currency Audit
type: internal
status: audit
created: 2026-07-29
scope: "Hall of Mirrors/Artifacts* (hub + 4 galleries + 6 group pages + The I'm 33 Board), 149 artifacts"
---
# Artifacts Section — Claims & Currency Audit (2026-07-29)

*Private (`_internal/`, not published). Audits the public artifact wing against **both** vaults per the Accuracy-First gate. Nothing has been changed in the artifact pages: this is findings only.*

## What was audited, and how

**Corpus.** `Hall of Mirrors/Artifacts.md` (hub) · 4 gallery pages (149 cards + 149 full readings, ~22,300 words) · 6 thematic group pages · `The I'm 33 Board.md`.

**Checked against.** `JagwarTwin/` = `Sources/Artifacts/` (the 6 media-evaluation originals these were rewritten from, plus the board captures, catalog, Finds Ledger, Session Handoff & Index), `Brain/Concepts/`, `_System/` (Claim Ledger, Cross-Vault Fold Status, Framework Registry, log), and the public vault's own `Concepts/` `Symbols/` `Influences/`.

**Method, honestly stated.** Three passes, and they do not carry equal weight:
1. **Mechanical, all 149** — link resolution, room-number integrity, intra-corpus cross-references, filing/realm coverage, per-artifact content diff against the source-vault original (aligned by GCS leaf-hash; 140 of 149 matched), forbidden-string safety sweep.
2. **Hand-verified against the brain, ~40 artifacts** — the ones where a vault finding dated after the readings were written applies, plus every case the mechanical diff flagged as losing a named entity, citation, or date.
3. **Not done** — a full brain retrieval per artifact. Where a row below is a *lead* rather than a finding, it says so.

## Verdict in one paragraph

The readings are **good prose and accurate description**, and the *"what it is"* layer is genuinely strong: these were written from the actual media, not from titles. The main problem with them as a body is currency. **They are frozen at 2026-07-02/13 and the brain has moved substantially since** — the Rose Cross complex, the board image-decode, the Amun-Ra/Hathor find, the Mozart node, the angles/angels clearance all post-date them, and none is reflected. On the three questions: *what it is* → strong; *why Roy included it* → thin, because the maze's own filing (the realm each artifact sits in, which is Roy's placement choice) is named on only 24 of 149; *how it affects the project* → uneven, strongest on the cosmology sketches and weakest on the biographical rooms, 17 of which dead-end on `[[Roy]]` / `[[Hall of Mirrors]]` and say nothing about the work.

> ⚠ **This audit's own largest finding (A1) was wrong, and is retracted.** I claimed the board-coordinate reading was a retracted theory; it is a **proven mechanic**, and the public pages state it correctly. Jen caught it, 2026-07-29. The correction runs the other way: two `_System/` files in the brain carry the stale negative and need fixing. Read A1 before acting on anything else here, because it changes what "accurate" means in this report: **on the artifacts' central code-mechanic, PUBLIC was right and SOURCE was wrong.**

---

## A. Accuracy — must fix

### A1 ~~The board-cell-coordinate reading is wrong on 12 artifacts~~ ❌ **RETRACTED 2026-07-29 — the PUBLIC pages are CORRECT. The error was mine, and the fix runs the other way.**

**Jen, 2026-07-29:** *"It is correct here. those do in fact correspond to that spreadsheet."* Confirmed against the vault, and she is right.

**The proof was already in the vault, filed the same day as the statement I relied on.** `Sources/Artifacts/HoM - Cell Tracksheet DECODED (cell-code master index) 2026-06-28.md`, `status: stable`:

> "Resolves the long-open 'cell-codes = board coordinates' theory: **the Tracksheet IS the master index of which 'I'm 33' board cells are codes. Decode rule proven**."
> "A YES at spreadsheet cell `(col C, row R)` → the unlock code is `{letter(C−1)}{R}` (the sheet has a one-column leading offset). This is the **cell-code = board-coordinate mechanic, finally pinned.**"

15 of the 20 YES cells map exactly onto known-valid catalog codes, including **K403→J403 · B749→A749 · Y672→X672 · H228→G228 · G316→F316 · E637→D637 · B565→A565 · L737 · K763+R763→J763+Q763 · D876+W876→C876+W876 · C1034/C1035→B1034/B1035**. Those are the very codes the public readings gloss. The readings are right.

**What I did wrong.** I retrieved one sentence from `_System/HoM - Session Handoff & Index.md` §Open leads 1 (*"the `J403`-style codes remain only an artifact-ID theory; not borne out by the live board"*) and treated it as a global retraction, without retrieving against the positive finding filed the same day that resolves it. That is the "guarding too hard" failure recorded in [[feedback_check_tradition_before_guarding]], and the counter-read-is-a-claim rule from the 2026-07-28 pass: **a counter-read must be retrieved-against like any other claim.** One negative statement is a fact about that search, not about the world.

**The narrower thing that Handoff sentence was actually about** is the code-hunting frontier: there is no separate cell-codes *tab* inside the wallet-gated board workbook, and the board holds no *undiscovered* codes. Both true, and neither touches the mechanic. The Tracksheet's own verdict says the same: the coordinate layer is **fully solved** (all 21 YES coordinates → 0 hits on open leaves), which is a statement about where new cracks can come from, not about whether the mechanic exists.

**⇒ Two BRAIN-side corrections now owed (the public pages need no change):**
1. `_System/HoM - Session Handoff & Index.md` §Open leads 1 — the "not borne out by the live board" sentence contradicts a `status: stable` decode filed the same day. Re-scope it to the frontier claim it actually supports.
2. `_System/Cross-Vault Fold Status.md` **row T** — "PUBLIC's board-coordinate claim is wrong… Correct the PUBLIC page" is itself wrong, and it is a live instruction to a future session to damage correct public pages. **Retract or invert it.** Its sibling instruction (don't import the retracted "159 rows / out of range" argument from `log.md:154`) still stands.

**★ A gain the public pages could take from the Tracksheet.** Its single `"YES"` legend marker sits at **C33** — and `C33` is the unlock code of **#132 ROY'S LADDER**. The code that opens that room is the legend cell of the index that governs the whole code family, self-referentially. #132's reading currently gets only as far as "C33 keys to the *I'm 33* board and the album *33*." Also worth adding somewhere in the group pages: this family is a **closed, fully-indexed set**, which is a real fact about the maze's architecture and exactly the kind of thing #24's line (*"The catalog isn't storing the cipher. The catalog **is** the cipher"*) was reaching for. That line is **supported**, not undermined.

### A2 Tier inflation in the source → public rewrite

The source originals carried inline `[~]` / *likely* markers that the public rewrite dropped, converting framework correspondence into flat statement. Measured across the corpus, hedge density fell from 2.4 to 2.1 per 1,000 words; the individual cases matter more than the average.

| # | SOURCE | PUBLIC | Effect |
|---|---|---|---|
| 19 | "The title 'ARTIFACT 187' **likely** borrows the California penal code for murder `[~]`" | "The title *'ARTIFACT 187'* **borrows** the California penal code for murder" | `[~]` → asserted |
| 42 | "the strip **plausibly** copies that namesake's name/titles `[~]`" | (dropped entirely) | hedge and claim both gone |

Per the public-vault voice spec, a `[~]` should surface as *"reads as" / "in the tradition"*, not as a bare verb. Worth a targeted sweep of the 128 artifacts whose source original carried inline markers.

### A3 An unflagged transcription conflict on #121 WHEELS

The source artifact file records the drawing's own third ring as **"Ring Cosmos (ADN)"**; the board capture (`Roy - I'm 33 this year (spreadsheet).md:240`) records **"Ring Cosmos (Ain)"**. The public reading quotes the artifact's first two rings verbatim, silently **drops the third's parenthetical**, then attributes "(Ain)" to the board. Either "ADN" is a misreading of the artifact, or the artifact and the board genuinely differ. Neither is resolved; the page shows no seam. Small, but it is a primary-datum discrepancy smoothed away, the same shape as the 2026-07-27 Korea drift lesson.

### A4 The angles/angels framing is inconsistent across the site, and the artifacts hold a third version

- Artifacts say **"Roy's private angle-equals-angel pun"** (#103), "the recurring angel-as-angle pun" (#82) — an intent claim, flatly stated.
- `Concepts/Letters of Creation.md` says the opposite: *"the frame **this guide** reads it through"*, "the reading is this guide's".
- The settled position (memory `feedback_lyrics_and_angles_cleared`, and the Cross-Vault audit's own "already in source" rejection list) is **angles/angels IS Roy's method, `[G via relay]`**, via a cleared Inner Circle conversation — with the standing warning that the public vault "contradicts itself 3 ways and over-claims."

The artifacts are one of the three contradicting voices. Whatever wording is settled on, all four artifact instances (#21, #80, #82, #103) need to match it. Note also the queued-not-done action: *"set the angles free in the source"* (15 source files + the Claim Ledger row).

---

## B. Currency — the vault has moved since these were written

Public artifact pages last touched **2026-07-11 / 07-13**. Everything below post-dates them and is not reflected anywhere in the artifact wing.

### B1 ★ The Rose Cross — a minted concept whose channel #3 *is* an artifact

`Brain/Concepts/The Rose Cross.md` was minted **2026-07-28** as Framework Registry row A12, verdict `deliberate-confluence`, seven grounded channels 2021→2026. **Channel 3 is HoM #37** ("a two-panel sketch of an ankh-figure *becoming* a Rose Cross; unlock code `I AM CHRISTMAS`, Roy-confirmed").

The public #37 reading is *individually* good — it names ROSE (cross), I.H.S., the Pearl of Great Price, VI–Love–Sacrifice. What it cannot do is what the brain page now does: connect the drawing to the **`+` / `ROSE ESOR` chest tattoo** and Roy's own gloss, to **VITRIOL** (pinned 2026-07-29: YT Shorts `pjNv1dFAdZg`, 2026-01-14 PT, set to *welcome to the circus*), and to *"the rose blooms in the center of the cross"* (2026-05-22). The public vault has **no Rose Cross page at all** — `Symbols/The Rose.md` exists, the emblem-complex does not.

Also unconnected on the same emblem: **#79 Venus the Dove** carries "a labelled **rose at her chest**" and a glyph "also legible as an **ankh**" — the rose-at-the-centre and the ankh, on one figure, never joined to #37 or to the complex. Treat as a **lead**, and mind the brain's own guard: *"The rose is not Mary, and not the divine feminine by default."*

### B2 ★ Amun-**Ra** and Hathor — a truncation that severs three threads

The board placard reads: *"Roy, a well-known high priest of **Amun-Ra** in Thebes … Ramesside period … cult of **Hathor**."* Three artifact readings (#33, #42, #43) render it **"High Priest of Amun"** — dropping *Ra* and Hathor entirely. Consequences, all documented in the brain and none present publicly:

- **Ra** is what wires the priest-namesake to **SOL / the "Sun of God" thread** (`The Im 33 Board - Decoded` §6) — and to **#85 RA-LINK**, whose public reading treats "RA" purely as a syllable in the SARAVI loop. The name is doing double work; only one half is on the page.
- **Hathor** (cow-eared, in Mut's temple) is recorded 2026-07-08 as grounding **the recurring cow-skull imagery**, and on `Brain/Characters/Roy.md:56` as reading toward *service to the divine feminine* `[~]`. That connects #33/#42/#43 to **#19 ARTIFACT 187** (its "backlit grid of cattle skulls") and to the **#8 / #58 Holstein cow**. Not one of those five readings mentions another.

### B3 The board is a *tracklist* the maze was quarried from, and three artifacts sit on it

`The Im 33 Board - Decoded` §7 records an unreleased concept-album tracklist in Roy's hand: *xWebx · The Fall into Matter · **Marduk** · **Let Them Eat Cake** · Sun of God · Dissolution · As Above so Below · **Genesis** · The All Is Mind · **O***, with the note: **"Marduk, Let-Them-Eat-Cake(→CAKE), and O are live HoM codes, so this list literally seeded the maze."**

- **#5 HELLO, ATTENTION (µå®∂¨˚)** — the source original said *"Marduk also appearing as **track 4 of the board's Hermetic concept-album tracklist**"*. The public rewrite **dropped that sentence.** It is a straight regression, not an omission of something new.
- **#55 CAUTION, ALL KINGS END** — reads the CAKE acrostic well, never mentions that *Let Them Eat Cake* is a title on that tracklist.
- **#4 O (444DEMO)** and **#32 O** — the list closes on *O*; unmentioned.
- **#26 / #150** — the disc is labelled *"Genesis underground"*; *Genesis* is on the list. A **lead**, not a claim.

This is the single best answer available to *"why did Roy include it?"* for these rooms, and it is absent.

### B4 Two board influences the artifacts describe without naming

Both recorded in the 2026-07-08 image decode:

- **#124 ASHIM** — "Ashim / **Consciousness of an Atom** / Degrees of Being alive." The reading calls this "a raw cosmological jotting" and glosses it panpsychist. *The Consciousness of the Atom* is **Annie Besant's book title**, and it is on the board.
- **#59 Thought Forms** — the source original credited **Besant & Leadbeater, 1901** and named Roy's move a **Feuerbach inversion**. The public dropped both, leaving "the old Theosophical doctrine."

Same author, two artifacts, one unnamed influence. The public vault has an `Influences/` folder; neither reading links into it. Nor does **#53 GREY IN A#**, which cites Alice Bailey's pituitary/"cave in the head" reading while `Influences/Alice Bailey.md` sits unlinked — same for **#44 THE ANCIENT CHILD** and `Influences/Gurdjieff.md`.

### B5 Mozart, and the "greatest song ever written"

`Brain/Concepts/Mozart.md` was built 2026-07-13. **#13 I652** and **#30 KHAWAH** both quote the board's *"Happy birthday to you / to Mozart"* → *"the greatest Song ever written: HBD"*; **#128 ROY HBD** is the birthday artifact itself; **#70 THE CITY OF PYRAMIDS** carries the HBD melody-contour cell. Four artifacts on the node, zero links to it (`Influences/Mozart.md` exists publicly and is unlinked from all four).

### B6 The bestiary is one ladder, and the readings treat it as scattered coordinates

The body-part codes are handled artifact by artifact: "the dolphin's-shoulder member of the body-part cipher" (#27), "this creature is the hip of the one cosmic anatomy" (#79), "the cranium coordinate" (#80), "a right shoulder, stage six of the board's body-part ladder" (#81).

The brain has the whole object: the board's **"Body Part Stages"** somatic ladder (1 Feet → 5 Heart → 6 Right shoulder/throat → 10 Crown) is **one of ≥6 encodings of a single 10-stage ascent** (tone · colour · virtue/vice · somatic · Japanese soul-planes · 0–10 emanation · hopscotch), and the six solved codes are a **closed, fully-mined set**: LEFT HIP OF A DOVE · RIGHT SHOULDER OF A HORSE · TEETH OF A WHALE · LEFT SHOULDER OF A DOLPHIN · CRANIUM OF A SWAN · PITUITARY GLAND OF AN OWL. Six artifacts, one system, never presented as one.

Related and also missing: the board's ladders are labelled *"Backwards and forwards"* `[G]` (ascending music/colour vs descending Japanese soul-planes — **one ladder read two ways**), which is the frame **#108 A#**'s note-to-colour equation belongs in, and the `[~]` structural note that **the two ladders disagree on where the Heart sits**.

### B7 The colour system

The 2026-07-08 grounded finding — the board's ten-rung ladder ≈ the Golden Dawn **Queen-scale** ladder, four colour keys by domain, Tiphareth gold = Sun/Heart — is `⬜ pending` as Cross-Vault row M and absent from **#108 A#**, whose reading stops at "an ascending note row paired with color swatches (…black, grey…)". `Symbols/The Colors.md` exists publicly and is unlinked.

### B8 Two anchors dropped that the brain treats as load-bearing

- **#130 INCOMING TEXT (JB)** — the source carried the LOOP caption *"'My mind must serve my heart', Roy repeated incessantly as he **stepped through the gate**"* `[G]` (2025-08-14). The public reading argues the gate motif with **no anchor at all**. This is the strongest available grounding for the whole gate/threshold cluster (#76, #99, #110, #130, #151) and it is on none of them.
- **#84 David Star** — the poem's own phrase **"The Kingdom Of The Shells"** was dropped. That is the Qliphoth by name, in Roy's text, which is the best anchor the Keilim link will ever get; the reading now links `[[Keilim]]` on paraphrase alone.

### B9 Collaborator credits dropped

**#96 SUBJECT TO FLOODING BTS** — source identified **Matt Pauling** and **Symbolyc One** in the room (and Dave Smith as the OB-6's designer); public says "five men lounging." **#97** also dropped Matt Pauling. Meanwhile **#148 MATT AND ROY LOSER** builds its whole reading on Matthew Pauling as the *Loser* co-writer. The same collaborator is named in one room and anonymised in two others that show him.

---

## C. Structural defects — ✅ **ALL FIXED 2026-07-29** (28 edits across 13 pages)

> Applied after a second, exhaustive sweep (Jen: *"Is that all of them or are there more"*). The first pass used too narrow a regex and found four; the full sweep found **nine** stale pointers plus the range/ordering problems. Backup of all 13 pages before the edit: session scratchpad `art/HoM_backup/`.
>
> **Post-edit verification, all green:** every GCS media URL byte-identical to the backup (0 mangled hashes) · 149 readings, 149 distinct room numbers, gaps still exactly {3, 6, 12, 75} · **0 broken wikilinks vault-wide** · all 25 remaining numeric pointers resolve to the correct artifact · all four galleries now agree across frontmatter `title` = H1 = intro line = actual content range.
>
> ⚠ **Still outstanding, Jen's call:** the four gallery **filenames** still read `(1-37)`, `(38-74)`, `(75-112)`, `(113-149)`. Renaming changes the Publish URLs and requires updating the hub links in the same pass. Say the word and it is a five-minute job.
>
> **Deliberately not changed:** `Artifacts - Drawings and Sketches.md` runs in **thematic** order, not numeric (34, 79, 81, 7, 78, 80, 82, 103, 21…) — the bestiary sits together, the maps sit together. That is a choice, not a defect, and re-sorting would destroy it. It is also why the positional pointers on that page were fragile; naming the room numbers fixes them permanently.

### What was corrected

| Reading | Was | Now | Why |
|---|---|---|---|
| #21 Religious Organism | "the cat-organism from **#99**" | **#103** | old discovery number; #99 today is GATE OF THE WORLD, a stone rabbit |
| #25 Venus is a Dove | "the sketch (**#75**)" | **#79** | #75 is one of four unused room numbers |
| #69 Blinking (1/2) | "paired with **#42**" | **#45** | #42 today is R1045 |
| #150 Genesis Underground | "the disc from **room 23**" | **room 26** | #23 today is ROY DIARY 2014 |
| #26 Rorrim Ehtni Lived | "the audio **two rooms up**" | **in room 17** | nine rooms up by room number, one entry up on the group page; true in neither reading |
| #61 The Truth Is a Sphere | "mirror-pair with **the next artifact**" | **with #63** | #62 sits between them in the gallery |
| #63 Enlightened Being | "reciprocal of **the previous room**" | **of #61** | same, from the other side |
| #103 Aubrey's Angle | "in *Religious Organism* (**below**)" | **(#21)** | true on the group page, false in the gallery, where #21 is on an earlier page |
| #105 VI-LINK | "titles **a neighboring room**" | **room #113** | eight rooms apart, not neighbouring |
| ★ Drawings group page | bullets `#22 · Venus is a Dove`, `#24 · Home at Sea` | **#25**, **#27** | a **"Photos (cross-listed)"** section whose bullet-form headings the 07-04 remap missed entirely, because it only rewrote `### #N` headings. #22 today is COACHELLA SEA, #24 is B1034. **New find in the second sweep.** |
| ★ #138 + Ciphers intro | "each code is the ***next*** artifact's encoded name" | ***previous*** | **not a numbering artifact, a factual error.** Verified from the card data: 8 of 9 resolvable Flood links point to a **lower** room (127→39, 134→133, 135→54, 137→131, 138→134, 139→137, 140→139, 141→140). #138's sentence also contradicted itself, calling the chain "backward-threaded" and then "next." |
| 4 gallery H1s + intro lines + 4 hub aliases | old discovery ranges | room ranges | the H1 is what a reader sees at the top of the page |
| 4 gallery intros + hub | "in the order they were unlocked in the maze" / "in the order the maze gave them up" | "in Hall of Mirrors room order" | the cards were re-sorted to room order on 2026-07-04; unlock order and room order are different sequences |
| 4 gallery intros | "*(Room deep-links are pending a live browser check.)*" | removed | **verified live 2026-07-29** — Jen opened `mirrors.jagwartwin.com/rooms/21` and got the correct artifact |
| Gallery 2 (#49) | `[[Artifacts/The I'm 33 Board]]` | `[[Hall of Mirrors/The I'm 33 Board]]` | the only broken wikilink in the wing |

### ★ New finding kept from the Flood-chain check

The chain is **not strictly monotonic**. Room **133**'s code (`∆∑†`) names room **138**, which runs *forward* while every other resolvable link runs backward. Three Flood rooms (#39, #54, #131) carry codes that are not Flood names at all (`B1034`, `L737`, `LET GO`), so they are entry points rather than links. The pages now describe the dominant rule correctly; the exception is recorded here rather than papered over. Worth a look, since a single forward link in a deliberately backward chain is the kind of asymmetry this maze tends to mean.

### Original findings table (retained for the record)

| # | Defect | Detail |
|---|---|---|
| C1 | **Four stale numbers written inside the prose.** Not a link or navigation problem: every heading, card, and room URL is correctly numbered, and clicking artifact #21 correctly goes to room 21. The 2026-07-04 remap rewrote the **headings** from discovery-order to room numbers but did **not** rewrite numbers typed inside sentences, so four readings still cite the old discovery number. Mechanism confirmed against the source file, where the old numbers are still visible. | **#21** prose: *"the same cat-organism from **#99**"* — old-#99 was Aubrey's Angle, which is now **#103**; today #99 is GATE OF THE WORLD, a stone rabbit · **#25**: *"the Venus the Dove sketch (**#75**)"* — old-#75, now **#79**; today #75 is one of four unused room numbers (3, 6, 12, 75) · **#69**: *"paired with **#42**"* — old-#42 was Blinking (2/2), now **#45**; today #42 is R1045 · **#150**: *"the disc from **room 23**"* — old-#23 was RORRIM EHTNI LIVED, now **#26**; today #23 is ROY DIARY 2014 |
| C2 | **Three stale relative references** | #26 "the audio **two rooms up**" → #17, nine rooms up · #61 "a mirror-pair with **the next artifact**" → #63, two later · #103 "*Religious Organism* (**below**)" → #21, above, and on a different gallery page |
| C3 | **Every gallery page displays the wrong range in its H1** | Frontmatter `title:` carries the correct room ranges (#1–40, #41–78, #79–116, #117–153); the **H1 heading and the filename** both still carry the retired discovery-order ranges (1-37, 38-74, 75-112, 113-149). The H1 is what the reader sees. Flagged as loose end (a) on 2026-07-04, still open. |
| C4 | **One broken wikilink** | `[[Artifacts/The I'm 33 Board]]` in `Artifacts - Gallery 2` (#49). Correct target: `[[Hall of Mirrors/The I'm 33 Board]]`. Everything else resolves: 0 other broken links across all 12 pages. |
| C5 | **Duplicate board pages** | `Concepts/The I'm 33 Board.md` and `Hall of Mirrors/The I'm 33 Board.md` both exist. Confirm which is canonical. |
| C6 | Safety sweep | ✅ **clean.** No private-crack code strings, no "196", no solving-mechanics, no wallet/mint metadata, no discoverer handles in prose. ⚠ One judgement call for Jen: the string `GREY IN A#` appears as artifact **#53's own title** (it is a public gallery name), while the same string is a live private-crack code for an unminted room. Almost certainly fine, since the name is public on the gallery, but worth an explicit decision rather than an accident. |

---

## D. Completeness against the three questions

Measured across all 149 readings (avg 130 words, 3.5 outbound links).

**"What it is" — strong.** These were written from the media. Frame counts, colours, the mesh holes, the flipped scan, the sticker price on the CD. This layer needs no work.

**"Why Roy included it" — the weakest layer.** The maze's own filing is *Roy's placement choice* and the readings that use it are the best ones in the corpus (#14 *Happy Face* "filed, with real nerve, in the realm the Hall calls BURIED"; #73 "one of only two rooms in the *Genesis Formula* realm"). **Only 24 of 149 name a realm or collection at all.** The source originals carry this for far more (DARKNESS, IMAGE BURIED, VIDEO PHANTOMS, VIDEO INFINITY, AUDIO TIME, Unseen Things/Concealed Generations, Seen Things/Illumination). Restoring the filing line is the single highest-yield edit available, and it is nearly free — the data is already in the source vault.

**"How it affects the project" — uneven.** Strong on the cosmology sketches (#87 Undefined Map, #91 51.843, #70 City of Pyramids). Weak-to-absent on the biographical rooms:

- **17 readings dead-end** on only `[[Roy]]` / `[[Hall of Mirrors]]` / `[[The Pattern]]`: #8, #35, #40, #60, #66, #67, #71, #77, #93, #100, #107, #109, #116, #120, #123, #147, #152. Several of these are genuinely "charming debris" and the hub explicitly licenses that ("Not every banana is a sacrament") — but #77 ROY ARTIFACT F316 is a working key in the maze, #120 FIBONACCI RABBITS is a board sketch, and #93 FORBIDDEN CITY is Plato's Lambda. Those three are not debris and should reach the concepts they illustrate.
- **13 readings under 90 words**, two of them stubs: **#27 Home at Sea** (16 words) and **#25 Venus is a Dove** (28 words). Both are members of documented systems — #27 of the six-code somatic ladder, #25 the photographic realisation of #79 — and both are one sentence long.
- **The "Connects to →" line lost its reasons.** The source graded every tie *(strong / moderate)* **and stated why**: #59's link to *Imagine A World* was justified as *"its closing 'Is there a God you designed?' restates 'gods are Images formed in mind'"*. The public keeps the bare link and drops the justification and the grade. A reader gets an assertion list where the source had an argument. This is systemic, not per-artifact.

---

## E. The reverse gap — the artifacts give nothing back

Worth stating plainly because it bears on *"those artifacts were added for a reason and should be used to understand the other material."*

**They are barely used.** Only **12** `Brain/` or `Essays/` pages reference HoM artifacts at all. `Cross-Vault Fold Status.md` tracks 27 PUBLIC→SOURCE divergences (rows A–T) and contains **exactly one artifact row** — row S, the ROMA→AMOR reversal pun, `⬜ pending` — plus row T, which is the correction *to* the artifacts, not *from* them.

So 22,300 words of interpretation, written from direct viewing of 149 pieces of media, sit outside the analytical master. The traffic has been one-way: the artifacts consumed the brain as of early July and returned almost nothing. Candidate back-ports visible from this pass, offered as **leads**:

1. **#79 Venus the Dove** (winged feminine · rose at the chest · lamp · ♀-legible-as-ankh) against the brain's live open question, *"the white feminine ankh-jaguar is unplaced `[?]`"* (`Brain/Concepts/The Jaguar.md:47`), whose candidate list is Bastet/Sekhmet, the whole-self icon, or SARAVI/Wise One/Mary. #79 is not on that list and arguably should be evaluated. ⚠ The Rose Cross page's guard applies: do not route the rose to Mary without independent anchors.
2. **The cow cluster** — #8 Grandma VI's Cow, #58 A Storm in the Child's Fountain (same scanned model, different title), #19's cattle-skull grid — against the Hathor/cow-skull find. The *"same model, two titles"* observation is a public-born reading with no source counterpart.
3. **#33's three-step closed loop** (TRUE VOICE → R1045 → ROMA CALLED ROY → TRUE VOICE) read as "a self that outlives its own death by remembering its filing number" — a public-born formulation of the immortality fork.

---

## F. Recommended order of work

1. **A1, inverted** — nothing to fix on the public site. Fix the **brain**: re-scope `HoM - Session Handoff & Index` §Open leads 1, and retract/invert Cross-Vault **row T** before some future session acts on it and breaks correct pages. Optionally add the C33-legend gain to #132.
2. **C1–C4** — the four stale prose numbers, gallery H1s, the broken link. Mechanical, an hour.
3. **D** — restore the realm/filing line from the source originals across the corpus. Highest yield per unit effort for *"why Roy included it."*
4. **B1–B3** — Rose Cross (#37, #79), Amun-Ra/Hathor (#33, #42, #43, #19, #8, #58), the board tracklist (#5, #55, #4, #32). These are the connections that make the artifacts *explain* the other material.
5. **B4–B9** — the named-influence restorations, Mozart, the bestiary-as-one-ladder, colour, the two dropped anchors, the collaborator credits.
6. **A2** — the `[~]` hedge sweep across the 128 diffed readings.
7. **E** — open artifact rows in `Cross-Vault Fold Status.md` so this wing stops being a one-way street.

## See also
`Sources/Artifacts/HoM - Cell Tracksheet DECODED (cell-code master index) 2026-06-28.md` (the proof behind the A1 retraction) · `_System/Cross-Vault Fold Status.md` rows **S** and **T** (**T is wrong, see A1**) · `_System/HoM - Session Handoff & Index.md` §Open leads 1 (**stale, see A1**) · `Brain/Concepts/The Rose Cross.md` · `Brain/Concepts/The Im 33 Board - Decoded (Roy's upload cosmology).md` §1 §6 §7 · `Essays/_drafts/Image Decode - Spreadsheet BMRC and Social - findings 2026-07-08.md` §98 · `_internal/Artifacts Consolidation - Session Handoff.md`

---

## Appendix — per-artifact register (all 149)

Mechanical pass only, generated 2026-07-29. **w** = words in the full reading (corpus avg 130). **out-links** = wikilinks on its `Connects to →` line (avg 3.5). **filing named** = does the reading say which realm/collection the maze filed it in. **src-content dropped** = named entities, works, or people present in the `JagwarTwin/Sources/Artifacts/` original and absent from the public rewrite (aligned by GCS leaf-hash; ID/metadata tokens filtered out; 140 of 149 matched, the 9 unmatched are audio/mint rooms whose cards use a poster image). A dropped name is a flag to look at, not automatically an error, and several were dropped correctly under the ARG safety filter.

| Rm | Artifact | w | out-links | filing named | src-content dropped |
|---:|---|---:|---:|:--:|---|
| 1 | LOGOS | 143 | 3 | yes | Trash Google Doc |
| 2 | AN AGED AGED MAN | 161 | 4 | yes | Seen Things |
| 4 | O (444DEMO) | 117 | 4 | yes | Audio Addiction, Its Time Garden |
| 5 | HELLO, ATTENTION (µå®∂¨˚) | 108 | 5 | — | — |
| 7 | Jupiter the Blue Dolphin | 95 | 4 | — | — |
| 8 | GRANDMA VI'S COW | 109 | 2 | — | Bridge Between Worlds |
| 9 | I'M NOT HERE | 146 | 4 | — | Santa Maria |
| 10 | "Walking the Edge of a Knife" (poem) | 102 | 3 | — | — |
| 11 | Roman Calculus | 70 | 2 | — | — |
| 13 | I652 | 214 | 4 | — | Happy Birthday |
| 14 | HAPPY FACE (MINT ROOM) | 132 | 4 | yes | — |
| 15 | DEAD LETTER DIARIES | 158 | 4 | yes | — |
| 16 | THE EMPTY ROOM | 148 | 7 | — | — |
| 17 | DEVIL IN THE MIRROR | 153 | 5 | yes | Brandon Wronski, Distorting Mirror, The Flip |
| 18 | Tree Thinking | 76 | 3 | — | From One |
| 19 | ARTIFACT 187 | 156 | 4 | — | Happy Face Experiment |
| 20 | 2014 Self Portrait | 122 | 4 | — | — |
| 21 | Religious Organism (rejected album art) | 78 | 4 | — | Undefined Map |
| 22 | COACHELLA SEA | 118 | 5 | — | Roma Called Roy, Roy Diary, Self Portrait |
| 23 | ROY DIARY 2014 | 146 | 3 | yes | Twin Roy English |
| 24 | B1034 | 142 | 4 | — | Flood Artifact, Roy Diary, Self Portrait |
| 25 | Venus is a Dove | 28 | 2 | — | — |
| 26 | RORRIM EHTNI LIVED | 145 | 5 | — | — |
| 27 | Home at Sea | 16 | 2 | — | — |
| 28 | LITTLE LUNA EXPLAINING NFTS | 130 | 4 | — | — |
| 29 | Suggestion of Apex | 84 | 3 | — | — |
| 30 | KHAWAH | 151 | 5 | — | Platonic Lambda, Timaeus World, World Soul |
| 31 | IF THE SEA HAS ENOUGH WILL | 130 | 4 | — | — |
| 32 | O | 141 | 4 | — | — |
| 33 | ROMA CALLED ROY | 194 | 3 | — | — |
| 34 | Michael the Fox | 107 | 3 | — | — |
| 35 | YELLOW & ELEPHANT 2 | 114 | 2 | — | — |
| 36 | GRANDMA'S SONG | 132 | 4 | yes | Bridge Between Worlds, Unseen Things |
| 37 | I AM CHRITMAS | 154 | 3 | — | — |
| 38 | GRANDFATHER MASKS | 155 | 5 | — | Distorting Mirror, Family Portrait, Grandma Vi, The Flip |
| 39 | FLOOD ARTIFACT (霊的な愛) | 138 | 4 | — | — |
| 40 | POTATO CHIP | 116 | 1 | — | Grandfather Masks |
| 41 | PERSPECTIVE | 136 | 2 | — | — |
| 42 | R1045 | 160 | 4 | — | — |
| 43 | TRUE VOICE | 173 | 4 | — | — |
| 44 | THE ANCIENT CHILD | 109 | 3 | — | An Aged Aged Man, Saturn Magic |
| 45 | BLINKING (2/2) | 142 | 3 | — | Flow Forth, Middle Way |
| 46 | FLOW FORTH AS A THIRD | 142 | 3 | — | Grandfather Masks, Potato Chip |
| 47 | DAD'S CLOCK 4 BB ROY | 146 | 4 | — | Wooden Horse |
| 48 | Lambdoma (Platonic Lambda) | 99 | 4 | — | — |
| 49 | CHUCKSTER'S MUMMY 2 (228) | 154 | 6 | — | Sir Rabbit, The Im, The Spectacle |
| 50 | BUDDHAS, SHAMANS, AND MICROTUBULES | 149 | 4 | — | Hameroff Orch |
| 51 | ROY STORY "SIR RABBIT | 193 | 6 | — | Ballerina Boy, The Labyrinth |
| 52 | ATTENTION TWEET | 117 | 4 | yes | — |
| 53 | GREY IN A# | 111 | 2 | — | — |
| 54 | FLOOD ARTIFACT (¬ø©øß) | 146 | 3 | — | Flood Artifact, No Fake Friends |
| 55 | CAUTION, ALL KINGS END | 161 | 3 | — | — |
| 56 | ROY STRINGS | 125 | 3 | — | Fundamental Freq, Fundamental Frequency, Kybalion Vibration |
| 57 | VENUS | 124 | 5 | — | El Roy |
| 58 | A STORM IN THE CHILD'S FOUNTAIN | 112 | 2 | — | — |
| 59 | Thought Forms | 76 | 4 | — | Another Way, Roman Calculus, Soul Is, The Angels, The Breaking, The Digital Double |
| 60 | THE FUTURE (2010 DEMO) | 99 | 2 | yes | Unseen Things |
| 61 | THE TRUTH IS A SPHERE | 163 | 3 | — | Listening Room Twitter Space |
| 62 | 21 CANDLES | 153 | 4 | — | Dead Letter Diaries, Roma Called Roy, Roy Diary, Twin Roy |
| 63 | ENLIGHTENED BEING | 132 | 3 | — | Life Is Good |
| 64 | SEEDS ON THE GROUND | 161 | 3 | — | — |
| 65 | BASICALLY & POTENTIALLY | 135 | 5 | — | Flood Artifacts |
| 66 | RIP OSCAR | 129 | 2 | yes | — |
| 67 | SLEEPING ON CARROT JUICE | 155 | 2 | — | Wooden Horse |
| 68 | LIST OF ROY'S FAVORITE THING'S | 141 | 3 | — | Josh Hubberman, The Audition |
| 69 | BLINKING (1/2) | 142 | 4 | — | Wooden Horse |
| 70 | THE CITY OF PYRAMIDS | 194 | 3 | yes | Enlightened Being, Happy Birthday, Lewis Carroll, Nothing Becomes |
| 71 | DAD'S WOODEN HORSE | 140 | 2 | yes | Favorite Things, Trojan Horse Program |
| 72 | The "Unidentified" Sketch — the mindscape | 97 | 3 | — | The All |
| 73 | SONG OF THE RING (VOICE MEMO) | 129 | 3 | yes | Song Of The Ring, Voice Memo |
| 74 | Horus (Eye-of-Horus fractions) | 93 | 5 | — | — |
| 76 | THE GATE OF THE WORLD | 112 | 3 | — | — |
| 77 | ROY ARTIFACT F316 | 131 | 2 | — | Family Portrait |
| 78 | Queen Binah (the whale) | 111 | 5 | — | Ballerina Boy, El Roi, Mary Malkhut |
| 79 | Venus the Dove (w/ Lamp) | 100 | 3 | — | Christian Spirit |
| 80 | Enoch the imaginary Swan | 100 | 3 | — | — |
| 81 | Cinnamon the Horse (Trojan Horse Program) | 119 | 4 | — | Audio Addiction, Body Part Stages, Tigers Eye |
| 82 | Bird ∆ (angel) | 81 | 3 | — | — |
| 83 | FATHER_MIRROR | 112 | 4 | — | Distorting Mirror, The Flip, Wooden Horse |
| 84 | David Star — "Where The World Was Crossed" | 136 | 4 | — | The Kingdom Of The Shells |
| 85 | RA-LINK | 147 | 4 | — | — |
| 86 | D637 | 155 | 3 | — | Dead Letter Diaries, Roma Called Roy, Roy Diary |
| 87 | The "Undefined Map" | 187 | 5 | — | — |
| 88 | Complete Upload Recipe | 108 | 4 | — | — |
| 89 | SUPERFICIAL CONCLUSIONS | 145 | 5 | — | The Spectacle, Undefined Map |
| 90 | Head of Atom ("A Head of Adam") | 81 | 3 | — | Lurianic Kabbalah |
| 91 | 51.843 | 153 | 4 | — | — |
| 92 | ROS TAU | 125 | 3 | — | — |
| 93 | FORBIDDEN CITY | 135 | 2 | — | Great Pyramid |
| 94 | THE VENUS CONNECTION | 148 | 4 | — | — |
| 95 | SENSE HIERARCHY | 112 | 6 | — | — |
| 96 | SUBJECT TO FLOODING BTS | 130 | 3 | — | Dave Smith, Matt Pauling, Symbolyc One |
| 97 | SUBJECT TO FLOODING BTS | 144 | 3 | — | Eye Alaska, Matt Pauling |
| 98 | STARDUST | 114 | 2 | — | — |
| 99 | GATE OF THE WORLD | 84 | 3 | — | — |
| 100 | COACHELLA SEEDLING | 127 | 2 | — | Previous Face, Roma Called Roy, Roy Diary |
| 101 | MOTHER_MIRROR | 146 | 4 | yes | Masquerade Atlanta |
| 102 | EDEN CUBE | 148 | 3 | — | — |
| 103 | "Aubrey's Angle" — the white organism | 80 | 4 | — | — |
| 104 | HAMMY VI | 148 | 3 | — | — |
| 105 | VI-LINK | 140 | 4 | — | — |
| 106 | ROY @ MSG | 149 | 3 | — | Enlightened Being, Mirrors Twitter Space, The Falkor |
| 107 | DUKE @ HOME | 115 | 2 | — | — |
| 108 | A# | 146 | 3 | — | — |
| 109 | ANTARCTICA (LOST SONG) | 106 | 2 | yes | The Future, Unseen Things |
| 110 | GATED | 137 | 2 | yes | — |
| 111 | LUNA_COACHELLA 2015 | 143 | 4 | — | Little Luna, Lucius Lullaby |
| 112 | SATURN MAGIC | 137 | 3 | — | Lewis Carroll |
| 113 | EVERYONE LOVES THE INTERNET | 120 | 5 | — | — |
| 114 | SA-LINK | 152 | 4 | — | — |
| 115 | EVERYBODY'S GOING TO SPACE NOW | 127 | 3 | — | — |
| 116 | EVERYBODY'S GOING TO SPACE NOW | 79 | 2 | yes | Everybodys Going To Space Now, Space Now, The Future, Unseen Things |
| 117 | ATTENTION'S GATE | 123 | 4 | — | — |
| 118 | PREVIOUS FACE | 132 | 4 | — | — |
| 119 | HOPSCOTCH | 110 | 3 | — | The Truth |
| 120 | FIBONACCI RABBITS | 127 | 2 | — | Fibonacci Daisy |
| 121 | WHEELS | 140 | 3 | — | Modern Archeology |
| 122 | THE HOUSE CHANGES TO WATER | 125 | 2 | — | — |
| 123 | ANOTHER LIFE | 109 | 2 | yes | — |
| 124 | ASHIM | 124 | 3 | — | — |
| 125 | THE SERPENT MUST TAKE FLIGHT | 132 | 4 | — | — |
| 126 | A BRIDGE BETWEEN WORLDS | 127 | 4 | yes | — |
| 127 | FLOOD ARTIFACT (˜ƒƒ) | 141 | 3 | — | — |
| 128 | ROY HBD | 130 | 4 | yes | — |
| 129 | Flaming Sword (the Lightning Flash) | 89 | 2 | — | The Kabbalistic |
| 130 | INCOMING TEXT (JB) | 120 | 4 | — | The Threshold, Within Jagwar Twin |
| 131 | FLOOD ARTIFACT (©øø∂∂å†) | 135 | 3 | — | Flood Artifact, The Flood, Video Phantom |
| 132 | ROY'S LADDER | 140 | 4 | — | — |
| 133 | FLOOD ARTIFACT (R100) | 155 | 3 | — | All Rights Reserved, The Flood Artifacts |
| 134 | FLOOD ARTIFACT (ƒˆß˙) | 113 | 3 | — | Flood Artifact |
| 135 | FLOOD ARTIFACT (µø√´†ø¥ø¨) | 148 | 3 | — | The Flood |
| 136 | HOUSE OF SPELLS (CUZ_IDEA) | 90 | 3 | yes | The Future, Unseen Things |
| 137 | FLOOD ARTIFACT (∂®´åµ) | 114 | 3 | — | — |
| 138 | FLOOD ARTIFACT (∆∑†) | 153 | 4 | — | Flood Artifact |
| 139 | FLOOD ARTIFACT (H101) | 157 | 3 | — | Collective Sleep, Flood Artifacts, Mirrors Flood |
| 140 | FLOOD ARTIFACT (Vi†ruvian) | 121 | 3 | — | Flood Artifact |
| 141 | FLOOD ARTIFACT (˙´¬¬) | 132 | 4 | — | Da Vinci |
| 142 | DOWN TO YOU | 159 | 5 | — | — |
| 143 | ANOTHER WAY II HEAVEN | 166 | 4 | — | — |
| 144 | IMAGINE A WORLD | 137 | 4 | — | — |
| 145 | THE CIRCLE | 134 | 4 | — | — |
| 146 | LOGOS (RATIO) | 126 | 4 | — | Undefined Map |
| 147 | CAN'T LIE (EARLY ROY) | 133 | 3 | — | — |
| 148 | MATT AND ROY LOSER | 162 | 4 | — | — |
| 149 | COOL MEXICO | 126 | 4 | — | — |
| 150 | GENESIS UNDERGROUND | 158 | 5 | yes | — |
| 151 | GRANDFATHER'S PLANE | 137 | 4 | yes | — |
| 152 | WILLIAM RUDOLPH 1941 | 122 | 3 | — | Grandma Vi, William Rudolph, Within Hall |
| 153 | FAMILY PORTRAIT | 128 | 6 | — | Camel Trophy Kalimantan, Family Portrait |
