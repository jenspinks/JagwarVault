---
type: artifact
citable: true
status: stable
captured: 2026-06-27
ingest_source: "An exhaustive multi-angle code-hunt + analysis pass on the Hall of Mirrors per Jen's standing directive to 'keep hammering.' Covers: the spreadsheet↔HoM alignment, which spreadsheet images have/haven't become artifacts, Joni + 33-theme + gematria candidate sweeps, the 4 official Instagram accounts, and the validator state. Every candidate validated by GCS-artifact-existence (the getMintProof oracle was DNS-down)."
---
# HoM — Hammer Pass (exhaustive sweep + spreadsheet alignment + IG accounts)

A full multi-angle pass per Jen's directive to keep hammering the HoM. **Net result: 0 new artifacts** — every systematic pool now converges on the **same 7 frontier artifacts** beyond the 149 catalog, and the spreadsheet/Joni/33/gematria angles yield none. This documents the methods, the **spreadsheet↔HoM alignment** (Jen's specific ask), the **IG account map**, and the validator fallback.

## ⚠ Validator state (2026-06-27)
**The `getMintProof` cloud function is DOWN** — `us-central1-jagwar-twin-33.cloudfunctions.net` no longer resolves in DNS (HTTP 000; every other host resolves fine). Likely the decaying CTHDRL backend. **Fallback validator (reliable):** derive `keccak256(lowercase code)` and HEAD-check `storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{hash}..{ext}` — if the media exists (200), the code is real; if not, invalid. Controls: 10/12 known codes resolve (the 2 misses — "There must be a Link", "Let Them Eat Cake" — are genuinely *not* standalone codes, they're spreadsheet phrases/pointers). This is actually a better validator: it confirms the artifact **and** captures it in one step. **GCS is up; the oracle is not.**

## The 7 frontier artifacts (the complete beyond-catalog set, re-confirmed)
1. RAPhael the Christmas Spider (`Pleiades Honey Bee`) · 2. Grandma VI hospital (`A Bridge Between Worlds`) · 3. Grey in A# dove-on-chalice (`GREY IN A#`) · 4. Stardust star-creature (`STARDUST`) · 5. Tree-of-Life ladder (`Know how to spell the name of the song`) · 6. IHS/VI/"there must be a Link" (`I want to be a bridge between worlds`) · 7. Barn painting (`Were you raised in a barn?`). **No 8th surfaced from any pool below.**

## Pools swept this pass (all 0 new)
| Angle | Candidates | Result |
|---|---|---|
| Spreadsheet **Tracks** (Fall into Matter, Sun of God, Dissolution, As Above So Below, Genesis, The All Is Mind…) | ~12 | 0 new (Marduk/CAKE/O already known) |
| **Kybalion** 7 principles, **cosmogonic poem**, **Hero's Journey** labels, **0–10 emanation**, **aphorism cells** | ~70 | 0 new |
| Spreadsheet **images** (Torus, Vitruvian, Creation of Adam, Jacob's Ladder, Monolith, Ouroboros, Kangaroo, Eye of Horus, Lo Shu, Statue of Roy…) tested as codes | ~30 | 0 new |
| **Joni Mitchell** (Woodstock, Ladies of the Canyon, Circle Game, "we are stardust/golden", "back to the garden", Both Sides Now…) | ~28 | 0 new |
| **33 song themes** (per-track key phrases) | ~13 | 0 new |
| **Japanese stage-labels**, gematria/**numerology numbers** (Greek isopsephy 353/612/1061…, YHWH partials, golden-ratio) | ~50 | 0 new (8/26/167/1941/9360 already known) |
| **Artifact-name chain-links** (all 147 names) + **board labels** + spreadsheet phrases | ~206 | re-finds the 4 known frontier only; 0 new |

**Conclusion: the discoverable code frontier is exhausted via systematic guessing.** Consistent with the established grammar — codes are *specific seeded phrases* (2022 tweets / artifact-name chain-links / board hidden-text), NOT thematic concepts, song themes, Joni references, gematria, or image names. None of those registers hit.

## Spreadsheet ↔ HoM alignment (Jen's ask)
The "I'm 33" spreadsheet ([[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]]) and the HoM are tightly coupled — **many spreadsheet items ARE HoM artifacts:**

**Images/items that DID become artifacts:** Tree-thinking pyramid → `TREE THINKING`; neon Vitruvian-man → `FLOOD ARTIFACT (Vi†ruvian)`; "A Head of Adam / Atom" → `HEAD OF ATOM`; Eye-of-Horus fractions → `HORUS`; "Rabbits in the key of F" → `FIBONACCI RABBITS`; ouroboros/Star-of-David → `DAVID STAR` / `THE SERPENT MUST TAKE FLIGHT`; childhood home "3233" → Western Woods (`3233 Western Woods Dr.`); "alice 211 song mirror" → `AN AGED AGED MAN`; Platonic Lambda → `LAMBDOMA`; Lo Shu (Saturn square) → `SATURN MAGIC`; ENSO → `O`; "East Is Everywhere", "Marduk", "Let Them Eat Cake"→`CAKE`, "Logos", "suggestion of apex", "the essence of man", "Thought-Form"→`THOUGHT FORMS`, "VI – Love – Sacrifice"→the bridge artifact, "Element/Tortoise/Eagle/Atlas"→`ELEPHANT TORTISE EAGLE ATLAS`, the gematria "26", Soul-Is-A-Star "seeds on the ground". **The spreadsheet is the HoM's source-quarry.**

### Spreadsheet images that have NOT yet appeared in the HoM (the future frontier)
These spreadsheet images/items have **no matching HoM artifact** — they're where *undiscovered* rooms most likely live (but their codes are NOT the image names — those were all tested and fail; the codes would be specific seeded phrases yet to be recovered):
- **Science/math:** Torus/donut vortex · EM-spectrum chart · continued fractions · geometric-halving triangle · Apollonian conics · LHC · brain-waves (Gamma→Delta) chart · the **Walter Russell** cosmology suite (a major board influence — entirely absent from HoM)
- **Photos/images:** the **sun (Hα disk)** as its own image · twin-lobe **nebula** · accretion/diffraction disks · **mushroom cloud** · **tardigrades** · diatom/cell micrographs · **lotus** · the **monolith** in desert (2001) · **Creation of Adam** (Michelangelo) · inverted **golden tree** · **kangaroo in a hoodie**
- **Cultural/biographical:** *LIFE* **"JESUS"** cover · *Harry Potter* **"25 Years of Magic"** cover · the **EYE ALASKA** poster (his pre-JT band) · the **"Statue of Roy"** placard (Roy = high priest of Amun-Ra) · the **Jung psyche map** · the Egyptian **hieroglyph** strip
- **Esoteric:** Kabbalah **veils** (Ring Pass-Not / Ain Soph / Ain) · the Greek **isopsephy** circle-diagrams (353/612/1061…)

*These are the highest-value leads for genuinely-new rooms — but cracking them needs the **seeded clue**, not deduction.* The likeliest place those clues hide: the **live "I'm 33" sheet's cell-codes** (J403/B1035-style coordinates — untested at true coordinates; needs a Name-Box jump or File→Download CSV) and the **lost 2022 Twitter Spaces / TikTok lives** (ephemeral, unarchived).

## The 4 official Instagram accounts (checked)
- **@royenglish** — Roy's **personal** account (162 posts, last Oct 2023): the "Modern Archeology" art series ("True of Voice", "Jacob's Ladder", "There's A Heart Next To Orion"), the Lana Del Rey "Say Yes To Heaven" credit. **NOT in the Discord mirror** (which only carries the official @jagwartwin). **96 posts captured** → `Sources/Artifacts/Data/JT Instagram accounts (royenglish + fan pages) 2026-06-27.json`. **0 codes** (validated) — the ARG ran on @jagwartwin, not here.
- **@jagwartwin** — official verified (221k); feed already archived. Has Story Highlights including an **inner-circle "Exclusive" set** — that content is **held privately** (see `_Private/`), not in this public archive.
- **@jagwartwindaily** — **dead** (only active May–June 2020, 19 posts).
- **@jagwartwinhq** — tiny fan page, brief 2025 activity (~56 posts).

**Instagram Stories gap (unresolved):** the Discord Circle-bot mirrors only IG **feed posts** — Roy's daily **Stories** are never captured. The only persistent copy is his **Story Highlights**, the substantive one being **inner-circle "Exclusive"** content — **held privately** (details in `_Private/jt-ig-exclusive-highlight-inner-circle-2026-06-27`), NOT in this public archive. **Harvesting the images is BLOCKED** (Chrome blocked the site's repeated auto-downloads; IG throttles the API) — needs Jen to allow downloads in Chrome. It's the one unreviewed HoM surface left, and any harvested media must stay in `_Private/`.

## Cross-references
- [[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]] (the source-quarry) · [[Sources/Artifacts/Data/JT Socials Feed (Discord Circle-bot mirror) 2026-06-27]] · [[Sources/Artifacts/HoM - Steganographic Cipher Sweep (4-lens) 2026-06-27]] · [[Sources/Artifacts/HoM - Master Brute-Force Candidates (2026-06-26)]] · [[Sources/Artifacts/HoM - Complete Artifact Archive (code-derived) 2026-06-26]].
- **Concept layer:** [[Brain/Concepts/The Im 33 Board - Decoded (Roy's upload cosmology)]] · [[The Pattern]] — the board's decoded cosmology this sweep aligns against.
