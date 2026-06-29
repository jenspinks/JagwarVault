---
type: artifact
citable: true
status: draft
captured: 2026-06-28
verified_against: ["Offline Merkle leaf-set validation (root 0x88f65411…, leaf=keccak256(lower(code)), the 42 still-open leaves from 'HoM Merkle open-leaf targets … 2026-06-27.json'). 4 hits independently confirmed VALID on the live getMintProof oracle (proof length 8 each, via curl --resolve …:216.239.36.54) and artwork captured from GCS. Reproducibility artifacts (candidate lists, tested-hash CSVs, normalization rules) generated; method per the 'prove coverage' directive."]
ingest_source: "Systematic coverage pass over the 42 uncracked Merkle leaves — extraction-first, reproducible generators, offline validation."
---
# Hall of Mirrors — Merkle coverage proof + 4 known-code recoveries

Per the directive: stop "I searched a lot," prove coverage with **reproducible candidate generators + an offline Merkle test**, and lead with **extraction + validated hits**, not interpretation. Validator = `keccak256(lower(code)) ∈ the 42 open leaves` (catches ALL room types incl. mint-types, unlike GCS). The live `getMintProof` oracle + GCS are used only to *confirm + capture* a Merkle hit.

> ## ⚠️ CORRECTION (Jen, 2026-06-28) — the "partition rule" below was WRONG; one "find" demoted
> **`in my father's shoes` (apostrophe) is NOT a genuinely-new room.** It's an alternate-spelling **alias-leaf** for the **already-catalogued, already-minted "Everybody's Going to Space Now"** (catalog #111/#112 = token #115; ivabeth.eth 08-14-22; canonical code = no-apostrophe `In My Fathers Shoes`; proof: [meta.jagwartwin.com/artifacts/115](https://meta.jagwartwin.com/artifacts/115)). The maze tracks discovery **per code-SPELLING**, but the **artifact/artwork is SHARED** across spelling-leaves — so an alias leaf opens "fresh" even though its artifact is minted. **⇒ The exact-code partition rule is INSUFFICIENT. The correct test: does the cracked leaf's ARTIFACT (name/artwork) already exist in the catalog-149 or as a minted token? Cross-check every hit against the catalog + `meta.jagwartwin.com/artifacts/{id}` / OpenSea before calling it new.** This pass's genuinely-new openables drop **4 → 3** (`no thing creates another thing`, `a bullet in her genes`, `the way to Heaven`). The rest of this note's mechanics (board scan, normalization, derivation coverage) stand; only the in-my-father's-shoes classification + the partition rule are corrected. Canonical status: [[_System/HoM - Finds Ledger (all cracks + status)]].

## ★ HEADLINE — 5 open leaves cracked; **2 are genuinely UNMINTED new rooms**
The validator-membership hits split into two kinds (the distinction matters — see the partition rule below):

**★ Genuinely UNMINTED / openable (NEW rooms) — ~~4~~ 3** (`in my father's shoes` struck — see CORRECTION banner above; it's an alias of the minted "Everybody's Going to Space Now"):
| Code (exact) | Leaf | Source | Art |
|---|---|---|---|
| ~~`in my father's shoes`~~ ❌ **NOT NEW** | `0x08ef97bc…` | ~~apostrophe-variant of a known code~~ → **alias of minted "Everybody's Going to Space Now" #115** | (demoted 2026-06-28) |
| `no thing creates another thing` | `0x0f738f84…` | an **UNSOLVED 2023 symbol-hunt clue** (Toyah 2023-03-07: *"In a chain of events, no thing creates another thing"*) | "I'm 33" notebook page (*"Man devours God…"*) → room **CURRENT-SEA** — **Jen opened it** |
| `a bullet in her genes` | `0x442795f9…` | the live **"I'm 33" board** typed text (Jen shared the wallet-gated sheet via its-your-time.jagwartwin.com) | **AUDIO (mp3, 500 KB)** — a song/voice-memo (genes/jeans pun; "her jeans" misses, code is "genes") |
| `the way to Heaven` | `0x80e7c0ff…` | the **"I'm 33" board** (vault transcription) | "I'm 33" notebook page (*"Matter — 2 main electrical qualities… the way to Heaven lies through Hell, but it is a commonplace pathway."*) |

**✅ VISUAL BOARD SCAN COMPLETE (2026-06-28):** drove the live board page-by-page (rows 1–253, cols A–V, ~236 floating images via Name-Box jumps + zoom), transcribed every legible handwritten/typed phrase (92 distinct) → variant-tested → **0 new beyond the 3 board codes.** So the board's text is now covered three independent ways (gviz typed cells + the vault transcription + this visual pass), all agreeing. Most images are pasted science/diagram material (brain scans, EM-spectrum, sperm+egg, torus, continued-fractions, Greek isopsephy, the Pattern-in-Movies list, DM screenshots) — not code-bearing. **The board's code vein is now exhausted for text.**

**Session tally: 7 of 42 open leaves cracked** — **3 genuinely new unminted** (no thing creates another thing, a bullet in her genes, the way to Heaven) + **4 already-minted** (`in my father's shoes`=Everybody's-Going-to-Space-Now alias + the 3 reconstruction-gap fills). **35 open leaves remain** — they resist all text from local corpora + the live board, so they need the **wallet-gated cell-codes tab** (if one exists beyond gid=0), the **mint-time→Julian-Date** derivation, or unreached surfaces.

**The board is the live vein:** the "I'm 33" board (`docs.google.com/…/1OQQrj7…`, tab "How to upload myself to the internet") holds **236 floating images** — handwritten cosmology notebook pages — plus typed cells. Each undiscovered notebook-page room's code is **a phrase written on that page** (proven: `gnothi seauton`, `no thing creates another thing`, `the way to Heaven`). The board's *typed* text (gviz) + its *handwriting* (vault transcription `Roy - I'm 33 this year (spreadsheet)`) each yielded one new code; **the remaining gap = handwriting in board images not yet transcribed** (needs a visual page-by-page read) + the wallet-gated cell-codes tab + the mint-time→Julian-Date derivation (the `1iZdcy1…` WHO/WHEN log).

**Already MINTED (reconstruction-gap fills, NOT new) — 3:** `there are things behind things` → Wheels (room 117); `genesis tree code` → Another Way II Heaven (139); `the great jagwar` → The Circle (141). Their leaves sat in the "open" set only because the reconstruction's code-list lacked the **exact** form (e.g. the typo `behing`). Entering them live returns "already minted."

**The partition rule (CORRECTED 2026-06-28 — see the banner up top):** ~~an open-leaf hit is a genuinely-new room iff its exact code is NOT in the gallery-149~~ — **this was WRONG.** Apostrophe/punctuation variants produce **distinct Merkle leaves** (true: `in my father's shoes`=`0x08ef97bc` ≠ `in my fathers shoes`=`0xdb550140`), but **both leaves can point at the SAME artifact** — here, the already-minted catalog artifact "Everybody's Going to Space Now" (#111/#115). So a distinct leaf ≠ a distinct room. **The right test is per-ARTIFACT, not per-code:** resolve the cracked leaf's artwork/name and check it against the catalog-149 + a minted-token lookup (`meta.jagwartwin.com/artifacts/{id}` / OpenSea). Variant-spelling leaves are real (worth *trying*), but a hit on one only counts as new if its **artifact** is uncatalogued and unminted.

**Normalization:** `father's` (U+0027) ≠ `father’s` (curly) ≠ `fathers` — only the exact one hits. Trailing punctuation significant. **Case is a no-op** (formula lowercases). Art → `Media/images/hom-artifacts/{in-my-fathers-shoes, no-thing-creates-another-thing, …}-*.{jpg,mp4}`.

## Coverage proof (reproducible, ~2.7M candidates)
- **Verbatim pass:** consolidated ALL local corpora (4 Prismic repos + full Discord archive + both recovered Space transcripts + IG/TikTok captions) = 122,879 seeds → **1,976,475** unique candidate variants → only the known-code hits.
- **Derivation pass:** 8 blind-spot lanes + completeness critic + round-2 = **716,732** unique candidates: origin-language/translation (Greek/Latin/Hebrew/Sanskrit of every maxim), Hebrew-letter architecture (beth/lev/babel/bilingual), architectural/container × four-fates grammar, transformation operators (reverse/mirror/opposite/inward-outward on all known names), body-part × animal matrix, ciphers/glyph/special-char/Julian-date, exact-quote, El-Roi/2015 enumeration → **0 new** beyond the 2 above.
- **→ The 36 remaining open leaves are not reachable by any text derivation** (verbatim / translated / transformed / architectural / body-part / cipher). They require an **authenticated/external surface** (the live wallet-gated "I'm 33" sheet cell-codes, the mint-time→Julian-Date derivation, or surfaces not reached). Artifacts: `Sources/Artifacts/Data/merkle-coverage-2026-06-28/` (candidate lists, hits.csv, normalization_rules.md, misses_summary.md, harness).

## Reproducibility artifacts (scratch `/private/tmp/merkle/artifacts/`)
`tested_hashes_local.csv` (1.98M rows) · `hits.csv` · `known_fills_open.json` · `candidate_count_local.txt` · `normalization_rules.md` · `misses_summary.md`. Harness: `harness.py` (validator + deterministic separator/punctuation/apostrophe exploder), `test_codes.py` (line tester).

## Cross-references
- [[Sources/Artifacts/HoM - Artwork-read method, I'm the Spider, El Roi investigation (2026-06-28)]] — **sibling pass, same day:** reads the *same* handwritten pages off **GCS by leaf-hash (no wallet)**, +1 new crack (`the answers in a name` → I'M THE SPIDER), the open-room artwork map, and the exhaustive El Roi ledger. (Updates this note's "board text exhausted" line: the un-gated artwork path found one more.)
- [[Sources/Artifacts/HoM - Merkle Room Map + 2 new finds (fresh-eyes breakthrough) 2026-06-27]] — the reconstruction this builds on.
- [[Sources/Artifacts/Data/HoM Merkle open-leaf targets (42 uncracked rooms) 2026-06-27]] — the 42 target hashes.
- `_System/HoM - Session Handoff & Index.md` — frontier count.
