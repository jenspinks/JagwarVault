---
type: artifact
citable: true
status: draft
captured: 2026-06-28
verified_against: ["Offline Merkle open-leaf set (root 0x88f65411…, the 42→still-open leaves) + live getMintProof (proof-len) confirmation, via curl --resolve …:216.239.36.54. Open-room artworks captured from GCS by leaf-hash (storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{leaf}..{ext}). `the answers in a name` confirmed proof_len 8 + room opened live (I'M THE SPIDER)."]
ingest_source: "HoM code-hunt session 2026-06-28 — the artwork-read breakthrough + an exhaustive El Roi attack + Jen's 2015-provenance research."
---
# HoM — the artwork-read method, "I'm the Spider," and the El Roi investigation

Three things from the 2026-06-28 session: a **reusable method** that cracks open rooms, **one new frontier find** (#15), and an **exhaustively-documented dead-end** (El Roi) so no one re-runs ~26 vectors from scratch.

## ★ THE METHOD — open-room codes live ON the GCS artwork (no wallet) `[G]`
The undiscovered rooms' artwork is **pre-uploaded to GCS by leaf-hash**, and for the **text-pages the unlock code is a phrase written on the image itself.** So you can crack rooms by *reading their pictures* — no wallet-gated board needed.
- **Capture:** for each open leaf hash `h`, `GET storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{h}..{ext}` (ext ∈ jpg/png/jpeg/gif/webp; double-dot). Most still-open leaves returned an image; a handful are video/audio/mint-type with no readable text-page.
- **Read + test:** extract every legible phrase verbatim → keccak(lower) → membership in the open-leaf set → getMintProof-confirm. **Exactness is everything** (a single wrong character/apostrophe = no hash match), so OCR must be precise — this is the limiting factor (agent OCR re-found known codes but only cracked the one below cleanly).
- **Why it matters (complements, doesn't contradict, the sibling pass):** [[Sources/Artifacts/HoM - Merkle coverage proof + 4 known-code recoveries (2026-06-28)]] drove the *live wallet-gated board* page-by-page and found its **typed/transcribed text exhausted** (0 new). This is the cleaner path to the **same handwritten pages** — they **are** the room artworks, sitting on GCS, capturable by leaf-hash with **no wallet** — and a sharper read of one of them is what cracked the find below. So the open codes live in the *handwriting* (the images), and GCS is the un-gated way to read them.

## ★ NEW FRONTIER FIND #15 — "I'M THE SPIDER" `[G]`
- **Code:** `the answers in a name` (read off the artwork; proof_len 8; **Jen opened the room live**).
- **Leaf:** `0x0d83fc8ad339…` · **Type/realm:** IMAGE / INFINITY · Art: a two-column lyric/poem page on a moon/ocean field (*"It's time the code was taught to you… The clue I give is 'nature' / The answers in a name… I'm the spider… 33… the universal Game"*). The code is the meta-clue line, **not** the title — a recurring pattern (the artifact's *name* and its *code* are different lines on the page).

## The open-room artwork map (what the still-open rooms depict) `[G]`
Captured + read 2026-06-28 — a target map for future precise reads (~34 leaves remain open of the original 42; this covers the readable image-pages among them). **Text-pages** (code likely readable on them): the **"One become Two"** cosmology poem (`14a59d49`), the **Fox & Rabbit "Game of Many Things"** poem (`93918ddc` + `dd5b5bd4`), **NOAH'S ARK** notebook page (`8740ff84`; holds known codes Flaming Sword/Higher Resolve/A River), the *Through the Looking-Glass* **p.211** song-naming page (`6d687a8d`; Haddocks' Eyes / Ways and Means — tested 0), the tweet **"My favorite color is information"** (`1fd015c4`), **"ARE YOU CONTENT? (313)-251-4932 CALL NOW"** poster (`854e7070` + `d72324e3`), **Dead Letter Drive** CD (`7ceb3953`). **Image-clues** (need derivation): grey **rabbit** (`0da54f73`), 1990s **class photo** (`2dbd72fe`), **knight-child** photo (`99996623`), WWI **biplane** (`99f4ee19`), **garden woman** (`8cbe4d1d`), **Test Pilot School** lighter (`da3b774d`), alien/cat + rainbow halo (`3252cfd9`), pencil cat-eared star-creature (`9b785fc0`). **★ El Roi-themed** (eye/seeing/Hebrew — see below): the **Eye of Horus** (`83ff23dd`, labeled "Horus"), a **third-eye face** + roses + JT logo (`d8db3530`), the **Tetragrammaton YHVH=26** gematria page (`18c56a31`). *(One batch of 6 images was content-filter-blocked and not yet read: `4b240a5e`, `4d378034`, `5ae904bc`, `665a8e1b`, `68c9b388`.)*

## El Roi — the investigation (exhaustively ruled out) `[W]`/`[G]`
**The clue (Roy-seeded, 2023 symbol-hunt):** *"The God Who sees Me with 'Y' instead of 'I' in 2015 ▵▢◑."* Decode: **"the God who sees me" = El Roi** (Genesis 16:13, Hagar names God; Hebrew אל ראי; Roy signs **"El Roy"**; the tattoo on [[Sir Lucius]]'s throat). The 2023 community got this far, then confirmed **`el roi`/`el roy` are NOT codes** ("devastating"). Best later reads (Jen): **El Roi is the *instruction*, not the answer** — find a 2015 source, swap **I→Y** (also **eye→why**, **me→roy**); and **"2015"** may be the year *Roy English became publicly visible* (the seer/seen pun).

**Vector ledger — 14 families (~26 distinct attacks), all `proof 0`** (so a future session starts at the frontier, not zero):
| # | Vector | Result |
|---|---|---|
| 1 | `el roi`/`el roy`/`el roy 2015`/`R-581` | 0 (community-confirmed dead) |
| 2 | All 2015 song **titles** + I↔Y mutations | 0 (`Cool`,`Can't Lie` = *known* codes) |
| 3 | **Full 2015 lyric corpus** (Wasted Youth, Hotel Pools, Cool, Tongue Tied July, Oxy, Can't Lie, Julianne) + I→Y/eye→why/me→roy | 0 |
| 4 | **2015 provenance/credit** strings ("Introducing Roy English", "feat. Roy English", "I had actually seen Roy", "the mysterious Roy English", "he does not appear", "Music Video 2015") + transforms | 0 |
| 5 | **Beer-lahai-roi → roy** full transliteration family + "the living one who sees roy/why" | 0 |
| 6 | **eye→why** family ("the eye/why that sees me/roy", "Horus sees me") | 0 |
| 7 | **Yahweh / YHWH / Tetragrammaton / the Name** (the Y-name) | 0 |
| 8 | **"the God who sees why" / "ask the question"** (the Y-tattoo gloss, grounded "you've gotta ask the question") + the question-corpus | 0 |
| 9 | **Coordinate/column geometry** — `Y2015`, cell-content (the board has **no row 2015**: 26 cols × ~159 gviz rows; column-Y values Rabbit/The Fool/Treasure all 0) | 0 |
| 10 | **Hebrew script** אֵל רֳאִי exact + variants | 0 |
| 11 | **`▵▢◑` symbol cipher** appended + translated (triangle/square/half-moon, play/stop) | 0 |
| 12 | **Literal instruction** strings ("el roy in 2015", "the god who sees me with y instead of i in 2015") | 0 |
| 13 | **Handle/slug** guesses + **Wayback** real-slug dive (rate-limited; surfaced only unrelated "elroy*" accounts) | 0 |
| 14 | Lana Del Rey **"I Can Fly" → "Y Can Fly"** (first "became seen" credit, 2014) | 0 |

**Why it's a genuine dead-end, not a near-miss:** the two strongest corpora (full lyrics + sourced provenance) were the *right* places and were executed *right*; both came back empty, and the **2023 community had the *live* ARG with Roy dropping hints and still couldn't crack it.** Verdict: the code is **not recoverable from any buildable corpus** — it needs a fact outside everything reachable (a verbatim un-archived string, a non-obvious decode, or Roy's answer-key). Two genuinely-open leads remain: (a) a specific verbatim 2015 **metadata** string we couldn't pull (the original Pigeons & Planes "Julianne" premiere headline is de-indexed); (b) a **non-obvious decode** no one has guessed.

## Jen's 2015 provenance research (sourced canon — useful beyond the code) `[G]`/`[W]`
2015 is when **Brandon Roy Wronski → "Roy English"** was *minted as a visible name*, via three anchors: **"Julianne"** (solo debut, premiered Pigeons & Planes Jan 22; SoundCloud upload Jan 18; store date Jan 26), **Alesso's "Cool"** (premiered Pete Tong/BBC Radio 1 Feb 13; UK No.10 / Dance No.3), **"Tongue Tied July"** w/ Michaël Brun (Aug 7). **The documented "visibility paradox":** Roy is *credited everywhere yet pictured nowhere* — Gulf Times (May 11 2015) calls him a *"MYSTERY MAN"* whose site held *"nothing but the video for Cool, in which he does not appear,"* and Alesso says *"I had actually **seen Roy** singing his own songs."* → **the seer/seen inversion made literal** (credited-as-seen yet unseen) — the exact *El Roi* structure, and a strong corroboration of the [[Witnessing vs Surveillance]] / being-seen axis at the moment "Roy English" is born. *(El Roi seer/seen reading = `[W]` interpretive; the 2015 facts are `[G]` sourced.)*

## Connections
- [[Sources/Artifacts/HoM - Merkle coverage proof + 4 known-code recoveries (2026-06-28)]] — the **sibling pass** from this same day (board scan + 4 known-code recoveries); this note is its artwork-side complement, +1 new crack.
- [[Sources/Artifacts/HoM - Merkle Room Map + 2 new finds (fresh-eyes breakthrough) 2026-06-27]] — the open-leaf set this builds on; frontier now **15**.
- [[Sources/Artifacts/Data/HoM Merkle open-leaf targets (42 uncracked rooms) 2026-06-27.json]] — the target hashes (minus the cracks).
- [[Brain/Concepts/Witnessing vs Surveillance]] — the **El Roi** concept (being seen vs surveilled); the 2015 visibility-paradox is a fresh receipt for it.
- [[Brain/Characters/Sir Lucius]] — the El Roi (אל ראי) throat tattoo; [[Brain/Concepts/Kabbalah - The Tree of Life]] — the Tetragrammaton/Yahweh + Eye-of-Horus open-room imagery.
- [[Sources/Artifacts/HoM Discord - Live events, lost content & unsolved leads (community archive) 2026-06-27]] — where the El Roi clue + the community's "not a code" verdict are logged.
- `_System/HoM - Session Handoff & Index.md` — frontier count + the artwork-read method.
