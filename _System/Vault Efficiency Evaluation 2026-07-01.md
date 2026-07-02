# Vault Efficiency Evaluation, 2026-07-01

**What this is:** A full sprawl/redundancy/efficiency audit of the vault, run by a 26-agent adversarially-verified sweep (8 area auditors, 17 high-severity findings independently re-verified against file content, plus a completeness critic on the physical substrate: git, media, sync config). Every claim below was checked with hard evidence (sizes, dates, MD5s, grep counts); where the verifier corrected an auditor's overstatement, the corrected number is used.

**Bottom line:** The intellectual architecture is healthy. The three-layer contract (Sources = evidence, Brain = distilled, Essays = prose) is real and mostly working, link resolution is ~97% (13,741 wikilinks), frontmatter coverage is 100% in Brain/Essays and ~97% in Sources, and validate.mjs runs clean. The problems are: (0) two privacy/safety exposures in the substrate, (1) ~3.5 GB-scale physical redundancy that is 90% deletable in an afternoon, (2) layer-contract drift concentrated in Brain/Songs, and (3) an AI entry layer that has forked, so the best navigation tools are hidden from the agent that needs them most.

---

## Phase 0 — Privacy & data safety (do first; two items need Jen)

### 0.1 Gitignore bypass: excluded files are on GitHub ⚠ — ✅ FIXED 2026-07-01 (history decision still open)
`.gitignore` explicitly excludes `Vault Review Context.md`, its split folder, and the redactions log, with the comment that the redactions log aggregates private-referencing text and must never be committed. The files were later **moved into `_System/_archive/`**, where the path-exact ignore rules no longer match. All 10 files (~3 MB) were tracked and pushed to the GitHub mirror (first in commit `b37c4a3`), including the redactions log. Repo confirmed **private**, so exposure = GitHub + any AI/tool granted repo access.
**Done (2026-07-01):** monolith + 8-part split deleted (regenerable via `node _System/build-review-context.mjs`); redactions log quarantined to `_Private/`; `.gitignore` switched to path-independent patterns (`**/Vault Review Context*`), verified via `git check-ignore --no-index` against every location variant; `validate.mjs` gained check #6, which ERRORS on any tracked-but-gitignored file (tested); rule recorded in `lessons-learned.md` (2026-07-01 entry) and CLAUDE.md anti-pattern 13. Deletions left for Obsidian Git autosync to commit (no manual push).
**Still Jen's call:** whether the redactions log warrants rewriting pushed history (it remains readable in old commits until then). Options in the 2026-07-01 session notes.

### 0.2 `_Private/` has no backup at all ⚠
Git (the vault's only declared backup) correctly excludes `_Private/`, but nothing else covers it. It holds ~212 KB of irreplaceable capture work across 5 files. If the disk fails, that content is gone.
**Fix (Jen):** give `_Private/` an explicit channel: a separate private repo, an encrypted cloud archive, or a verified Remotely Save target. Document which channel owns it in `Boundaries.md`. Also: `_Private/media-ig-highlights/` is an empty dir created 2026-06-27, referenced nowhere; fill it or delete it.

### 0.3 Two sync systems are enabled simultaneously ⚠
Both `obsidian-git` (the known autosync) and `remotely-save` (installed 2026-06-15, loading at every launch) are enabled. Remotely Save's config is stored encrypted, so from disk it is impossible to tell whether it has an active cloud target. If it does, it is uploading the whole vault **including `_Private/`** (gitignore does not apply to it) to an unaudited destination. If it doesn't, it is dead weight.
**Fix (Jen, 2 minutes):** open Settings → Remotely Save once; either uninstall it or document its target and ignore rules. Add one line to ARCHITECTURE.md naming the canonical sync system.

### 0.4 The 2026-06-30 bulk fold-stamping corrupted YAML in 19 draft files — ✅ FIXED 2026-07-01
The stamping pass glued `folded: 2026-06-30` to the next key (producing `folded: 2026-06-30publish: false`), silently destroying the `publish:`/`audience:` field in 19 files (21 occurrences) under `Essays/_drafts/`. validate.mjs reported 0 errors on this, so it was invisible to the lint.
**Done (2026-07-01):** all 21 occurrences split back into two lines; validate.mjs gained check #7 (glued-frontmatter lint, ERROR on a date/bool value with a key concatenated onto it), self-tested to fire on glue and stay quiet on clean files.

---

## Phase 1 — Mass deletion (the afternoon that removes ~90% of the redundancy)

### 1.1 The corpus exists in triplicate: delete both `_archive` compilations
`_System/_archive/` holds the entire compiled analytical corpus **twice**: the 1.5 MB `Vault Review Context.md` monolith AND its 1.5 MB 8-part split, both compiled 2026-06-18 and both stale. Together they are 2.9 MB, 81% of `_System`'s markdown bytes, and **larger than live Brain + Essays combined**. They are the #1 retrieval-pollution source: any vault-wide grep or embedding pass hits stale copies of every analysis. Fully regenerable on demand.
**Fix:** delete both (this also completes 0.1). Add one line to CLAUDE.md and AI Quickstart: "`_System/_archive/` holds stale generated snapshots; exclude it from content greps."

### 1.2 319 MB of byte-identical duplicate video
All 44 mp4s in `Media/video/hom-artifacts/` are MD5-identical to files in `Media/images/hom-artifacts/complete/`. That is 29% of the 1.1 GB media tree. Also, 52 of 96 vault mp4s live under `Media/images/`, so the video/images split is already broken.
**Fix:** keep `complete/` (it carries catalog row numbers), record the leaf-hash alias in the Media Index, delete `video/hom-artifacts/`.

### 1.3 Archive the 22 folded drafts (222 KB)
`Essays/_drafts/` is 40% of the Essays folder. 22 of its 37 files are stamped folded-to-canon (fold status spot-checked and verified honest: the content really is in the live notes). Two archive moves were already sanctioned in Drafts Fold-Status but never executed. NOT wholesale-archivable: ~9 items (~150 KB, incl. the LL Deep Dive and vetting dossiers awaiting fold) are still pending, per the ledger.
**Fix:** after 0.4's YAML repair, move the 22 folded drafts to an archive location outside grep/embedding scope, leave the pending ones, and update Drafts Fold-Status.

### 1.4 Rotate `log.md` (313 KB, 178 entries)
It is append-only, in every AI session's startup path per CLAUDE.md ("skim recent log.md"), and holds 201 of the vault's 396 broken links (with `_archive/`), all outside validator coverage.
**Fix:** keep the newest month in `log.md`, move the rest to `log-2026-05-06.md` (or `_archive`), and change CLAUDE.md's instruction to "read the top ~3 entries (newest first); do not read the whole file."

### 1.5 Git substrate hygiene
`.git` is 707 MB with 4,011 loose objects (697 MiB loose vs 9.9 MiB packed); Obsidian Git never runs gc and the auto-gc threshold hasn't fired. One media file exceeds GitHub's 50 MB warning line and a second sits just under. Every fresh clone (the AI-share use case) pays ~700 MB.
**Fix:** run `git gc` once now. **Jen decides** the media policy before the archive crosses ~1 GB: binaries in git as-is, Git LFS, or untrack Media/ with its own backup.

### 1.6 Junk sweep (one pass, all confirmed trivial)
Root strays (`Untitled.base`, `Untitled 1.base`, two `.canvas`, empty `2026-06-30.md`) plus 8 junk files already swept into `_archive` and git-tracked, `.plain.txt` twins of the two Twitter-Space transcripts (content fully contained in the .md versions), the empty 0-byte `Sources/Lyrics.md` (which silently absorbs 6 links intended for the lyrics folder), `.DS_Store` files, and stale `.gitkeep`s.
**Root cause fixed too:** daily-notes core plugin has no folder configured (defaults to vault root) and bases/canvas defaults create Untitled files. Set a daily-notes folder or disable the plugin (no non-empty daily note exists anywhere), and disable bases/canvas if unused. Without the config fix the strays will keep coming back.

---

## Phase 2 — Mechanical link & metadata repair (one focused session)

### 2.1 Rename the link-hostile filenames — ✅ #1 Champion DONE 2026-07-01; other renames still open
- ✅ `#1 Champion (la Conquistadora)` renamed to `No. 1 Champion (la Conquistadora)` across all 4 files (Brain + Essay + Lyrics + drafts brief); 44 link/path references rewritten vault-wide; true title kept via `aliases:`; gen-entity-map.py now resolves frontmatter aliases so the SONG row resolves all layers.
- 7 files total contain `#` or `[ ]`; 12 Sources filenames use em-dash or `&` (violating the standing link-friendly naming rule). Rename, then add `#/[/]/^/|` to the filename rule in CLAUDE.md.

### 2.2 Finish the sefirot registry migration
No file named Tiferet/Yesod/Malkhut/The Moon exists; ~89 links to these pageless ontology names render broken in Obsidian (validate.mjs suppresses them via a display-name escape hatch, which also masks real breakage). The Ontology itself already anticipates the fix.
**Fix:** bulk-rewrite to heading links (`[[Kabbalah - The Tree of Life#Tiferet|Tiferet]]`), then remove the escape hatch from the validator.

### 2.3 Remaining broken-link classes (all bounded)
56 links point at Claude-memory files that live outside the vault (permanently broken in Obsidian; rewrite as plain text or move the referenced content in). ~45 links point at old paths/near-miss names of files that exist (incl. 4 in `Brain/Concepts/Hall of Mirrors.md` from the HoM handoff's move into `_System`). 30 folder-path links can never resolve. 9 raw CONCEPT-id links.

### 2.4 Basename collisions
`Lucius Lullaby.md` exists 5 times vault-wide (two inside Essays alone); 107 bare `[[Lucius Lullaby]]` links are ambiguous. Rename to distinguish album page / song essay / lyrics (e.g. suffix conventions already used elsewhere), keep aliases. Also: 2 LL tracks stranded at `Brain/Songs/` root instead of the album folder; `Essays/Concepts/Songs/` is misnamed (song essays are not concepts); `Life Is Good` has an essay but no Brain note.

### 2.5 Metadata normalization (quick, scriptable)
- Ontology.md: duplicate MEDIA-HowToLiveForever row; stale header omitting the MEDIA id type.
- `type:` sprawl: 12 values in Essays (8 used ≤4 times), one-off `source`/`interview` in Quotes. Collapse to the ontology set.
- `tier:` runs two incompatible value systems (numeric vs categorical); pick one.
- `[P]` defined two different ways across legends; 29/123 Brain files lack `confidence`/`review_date`, 14 lack `id`; the 8-field song state vector is on only 27/45 song pages; `referenced_by: []` is misleading on 23 files that have real backlinks (either populate via backlink.mjs or delete the field).
- Tag pane polluted by ~40 quoted social-caption hashtags; 2 orphan `tags:` keys.
- Templates have drifted from reality: Sources templates miss the 3 most-used fields (`status`/`ingest_source`/`ingested`), the Brain Song template ships an outdated 4-mark tier legend, and the two largest note classes (Sources/Artifacts, Essays notes) have no template at all. Template drift self-propagates because agents copy templates. One refresh pass fixes all of it.

---

## Phase 3 — Layer-contract repairs (the real analytical debt; multi-session)

### 3.1 Brain/Songs has drifted into essays (the largest single win) — ✅ DONE 2026-07-01
~10 Brain song notes (LL-era + The Watchers) have swollen into essay-length prose, several now LARGER than their Essays twins, violating the vault's own "Brain pages are not essays" rule. Verified nuance: this is parallel restatement (8-14% shingle overlap), not copy-paste, which is arguably worse: two divergent tellings of the same analysis that can rot independently.
**Fix:** re-distill to terse cards (thesis line, tiered claim list, connections, open questions, "Full reading:" link), matching the healthy ~5 KB 33-era pattern. Adopt a size budget (<6 KB) and let the validator warn on it.
**Done (2026-07-01):** all 10 re-distilled to <6 KB bodies with "Full reading" pointers; frontmatter untouched; tiers never upgraded; 9 card-vs-essay discrepancies flagged as `[?] Discrepancy (2026-07-01 re-distill)` open questions rather than silently resolved (grep that string to work them). validate.mjs now warns on Brain/Songs bodies >6 KB; 10 legacy dense-but-card-shaped StF/33-era cards (6.2–8.5 KB) warn today, left for a future pass. See log.md.

### 3.2 Brain stubs that lie — ✅ DONE 2026-07-01
4 Brain song stubs (Good Time, Superhuman, SOL, Bounce) still say "not yet analyzed" while 8-20 KB finished analyses sit in Essays; 5 songs total remain in the captured-but-not-connected gap (verifier corrected: Move To You is NOT empty, it has a filled Grounded section). SOL is the priority (album closer, 10 inbound references, emptiest note in the folder). Also: 4 Brain notes have malformed "Full essay" links pointing at themselves.
**Done (2026-07-01):** SOL, Good Time, Superhuman, Bounce rebuilt as real distilled cards, plus tomorrow (ANGLE OF ETERNITY) and LOOP (both met the same size/essay-gap criterion); Move To You's false status line corrected, its real content untouched. Zero "not yet analyzed" strings remain in Brain/Songs. Self-pointing "Full essay" links were 5, not 4 (Superhuman (Interlude) too); all repointed to the Essays twins. Bonus: the missing Life Is Good Brain card created (closes §2.4's pending item; its essay §Open Questions pointer-ized per §3.5).

### 3.3 Character layer inverted
The two Character essays are smaller and 19 days staler than their supposedly-distilled Brain twins, with duplicated sections and no cross-pointer. Labors of Hercules essay contradicts its Brain twin on Bailey's evidence tier. Decide direction per pair and add cross-pointers.

### 3.4 Single-home the concept mappings (this unblocks the Lucius/Roy planet-map fix)
The planet/sefirot map is restated locally on 4-6 pages, and the drift is proven: the STRUCK "Lucius = Yesod moon" frame still stands on two live essays (Ballerina Boy, Not Your Homie) two weeks after correction.
**Fix:** make `Brain/Concepts/Kabbalah - The Tree of Life.md` the single home; trim local restatements (Source vs Reflection, Sir Lucius, The Light-Bearer) to a 1-line gloss + link; then apply Roy's corrected mapping to the two stale essays. This closes the blocked planet-map action item.

### 3.5 Single-home open questions — ✅ DONE 2026-07-01
Open questions lived in up to 4 places per song: near-duplicate phrasings on BOTH the Brain page and the Essay page, then both copies re-listed in the generated aggregate.
**Done (2026-07-01):** Brain card = the single home. All 44 essay §Open Questions sections replaced with a pointer to the Brain card's section; of 193 essay items, 104 dropped as verified near-dupes/resolved and 89 unique items migrated to their Brain cards; `open-questions.md` regenerated with `--date` (84.5→74.2 KB, `{{date}}` stamped). Convention going forward: song questions land on the Brain card only; essays link. (Life Is Good pending its Brain card, §2.4.)

### 3.6 Single-home the HoM tallies — ✅ COUNTS DONE 2026-07-01; artifact-folder tidy still open
**Done (2026-07-01):** Ledger's internal contradiction fixed (stale "8/42 → 34 open" tail removed; reconciled live numbers = 16 frontier, 11/42 cracked, 31 open, stated ONLY in §Frontier total); a Counts rule added at the Ledger top (tallies live there alone, other docs link); the Session Handoff's three stale count sites pointer-ized; the Brain HoM page's 4 pre-move links repointed to `_System/`. Dated tallies inside Sources/ session artifacts left as historical snapshots (evidence-layer discipline).
**Still open:** ~7 dead-end sweep worksheets among the `HoM -` Artifacts files belong in a `superseded/` subfolder; 53 MB of audio + a Python harness sit inside the evidence tree (move to Media/ and _System respectively).

---

## Phase 4 — AI entry layer: unfork it (highest leverage per hour)

The vault's best navigation tools (AI Quickstart's fetch recipes, entity-map, Claim Ledger) are prescribed to the external GPT, while **CLAUDE.md, the file the primary writing agent auto-loads, never mentions any of them** and instead mandates a ~72 KB reading chain plus a 313 KB log skim. Meanwhile the rules are restated in 8 files with measured drift.

1. **Slim CLAUDE.md (33.8 KB):** ~20% duplicates Brain/Theme-Tracker doctrine, ~10% is case history that belongs in referenced docs. Target: lean always-loaded core (rules, boundaries, session checklist) + pointers.
2. **Fix the marker-grammar drift:** CLAUDE.md's epistemic-marker section omits `[G]` and `[~]` even though canon uses `[G]` 736 times; GEMINI.md defines `[~]` contradictorily. Unify on the 5-mark ladder everywhere (CLAUDE.md, GEMINI.md, GPT.md, AI Quickstart, Song template legend).
3. **Point CLAUDE.md at the fast layer:** add AI Quickstart, entity-map, and Claim Ledger to the session-start checklist; make the fetch recipes the stated first move for song/concept/character tasks.
4. **Refresh the misrouting indexes:** index.md lists 4+ minted concept pages (incl. the stable Mirror page) as "pageless," has a duplicated line and three mutually contradictory counts; ARCHITECTURE.md's snapshot counts are off by ~80%. Delete ALL hardcoded counts from curated prose (they are guaranteed to rot); point at validate.mjs/entity-map for live numbers.
5. **Add size + exclusion signals:** no index warns that a link target is 60-635 KB. Add size flags to gen-file-map.py output and publish an embedding-exclusion list (`_System/_archive/`, `_System/_legacy/`, `Essays/_drafts/` folded set, `log.md` history, the 634 KB Discord transcript gets a summary header).
6. **Media Index rebuild:** covers 24 of 353 files, predates the Twitter-Space captures. Bigger gap: 81% of media is referenced by no note, and 100 GCS hotlinks across 28 notes have no mapping to the local mirror, so if the fragile bucket dies there is no in-vault recovery path. Extend the index (or the HoM catalog) with a room/leaf-hash → local-path column; new embeds carry the local path alongside the GCS URL.
7. **Consider merging GEMINI.md/GPT.md** into thin per-agent shims over one shared rules doc, so drift can't recur.
8. **Status-mark the one-time artifacts** in `_System/` (Fable Pass Brief, Vault Audit punch-list, Drafts Fold-Status) vs living infra: a one-line `status:` header or an `_archive` move on completion. `_legacy/` (3 files, retired since May) is blocked by exactly one live Brain citation; repoint it and delete.

---

## What is healthy (do not "fix")
- Quotes/ vs Brain/Roy Voice layering: modest, by-design duplication; the contract is working.
- Lyrics: verbatim corpus lives once in Sources; Brain/Essays quote lines with attribution. Clean.
- Live corpus verbatim duplication: a full paragraph-dedup scan found only 2 duplicated paragraphs, both benign.
- file-map/entity-map generation pipeline: accurate (0 dead entries; only files created after the last regen are missing).
- Sources frontmatter tiering (`type`/`citable`/`status` ~97% coverage) and the PUBLIC/_Private Discord firewall (zero channel-ID overlap, verified).
- Concepts/ genus/species discipline and the pageless-concept registry idea (it just needs the sefirot migration finished, §2.2).

## Open items that need Jen specifically
1. §0.1 history-rewrite decision (redactions log on GitHub).
2. §0.2 pick a `_Private/` backup channel.
3. §0.3 open Remotely Save settings once; keep or kill.
4. §1.5 media-in-git policy (LFS / untrack / status quo) before ~1 GB.
5. The two 2023 X-post DRAFT archives have been awaiting curation since 2026-06-09.
6. §1.2 confirm which HoM video naming scheme to keep before deleting the duplicate set.

*Generated 2026-07-01 by the vault-efficiency audit workflow (26 agents; high-severity findings adversarially verified). Read-only pass: nothing in the vault was modified except the creation of this file.*
