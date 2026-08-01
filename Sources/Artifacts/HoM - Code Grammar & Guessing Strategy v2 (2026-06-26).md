---
type: worksheet
citable: false
captured: 2026-06-26
ingest_source: "Empirical analysis of all ~149 known HoM unlock codes (from the gallery catalog + Deep Dive board) to derive the code-grammar and a grounded guessing strategy. Supersedes the refuted Tier-1 image-mining worksheet."
---
# HoM — Code Grammar & Guessing Strategy v2

**Supersedes** [[Sources/Artifacts/HoM - Candidate Codes (Tier-1 image mining) 2026-06-25]] (the refuted artwork-phrase-mining). Built by analyzing the **~149 correct codes** for what actually makes a code, so we generate guesses that *fit the proven patterns*.

## Two corrections that reset the problem (Jen, 2026-06-26)
1. **The 147 rooms are the DISCOVERED ones, not the total.** There is a real undiscovered frontier — Jen opened a **new** room with a random word. So guessing genuinely opens rooms. *(Corrects the old "nothing truly-undiscovered" note in the room-map source.)*
2. **`REBIRTH` worked** — Jen guessed it for *Family Portrait* purely from the subject-matter. So thematic guessing **does** work; the trick is doing it the way Roy's codes actually behave.

## Why my earlier phrases failed but REBIRTH didn't — the reconciliation
The failed Tier-1 guesses (`MAN DEVOURS GOD GOD DEVOURS MAN`, `IMAGES FORMED IN MIND`, `ABYSS IN/OUT`) are all **literally on Roy's "I'm 33" board** — yet they're not codes. `REBIRTH` is a short word tied to an artifact's *subject* — and it is. The rule that separates them:

> **A phrase is a code only if Roy made an ARTIFACT for it.** The board / his vocabulary is a *candidate pool*, not a code list. **Short + thematic + tied to a real artifact's subject = guessable. Long + invented + dense-esoteric = noise.** Sentence-length codes exist, but they're **harvested verbatim** from his tweets/lyrics — never invented.

## The format taxonomy of the ~149 codes
| Type | ~Count | Examples | How to get it |
|---|---|---|---|
| **Self-referential** (= the artifact's own displayed name) | ~15 | `I'M NOT HERE`, `TREE THINKING`, `THOUGHT FORMS`, `FLAMING SWORD`, `IMAGINE A WORLD` | **Try the title itself, uppercased** (highest-yield trick) |
| **Single evocative word** | ~20 | `REBIRTH`, `CAKE`, `LADDER`, `ENSO`, `ATOMS`, `VIBES`, `SENSE` | Short thematic word for the subject |
| **Short phrase (2–4 w)** | ~40 | `INSIDE OF THE INSIDE`, `THE PATTERN`, `JOSHUA TREE`, `BUILD A BRIDGE`, `HIGHER RESOLVE`, `LET GO` | Roy's vocabulary, subject-tied |
| **Full sentence / aphorism** | ~20 | `WE ANTHROPOMORPHIZE EVERYTHING`, `EVERY HUMAN BEING IS A STAR`, `THE GAME IS TO REVEAL THE GAME` | **Harvest verbatim** from tweets/lyrics — don't invent |
| **Cell-code** `{Letter}{Number}` | ~25 | `J403`, `B1035`, `X672`, `Q763`, `G228`, `D637` | **from the separate "Spreadsheet Map" ARG drop (NOT this board, NOT coordinates) — see §A** |
| **Animal/body mirror-coordinate** | 6 catalog + 1 later find | `LEFT HIP OF A DOVE`, `TEETH OF A WHALE`, `CRANIUM OF A SWAN`, `Stomach of a cat + 9 lives` | **= fixed complementary addresses, not a free cross-product — see §B** |
| **Glyph-cipher** | ~12 | the Flood glyphs, `ÇÅ¨†ˆØ˜®Ø¥`=CAUTIONROY | macOS Option-key cipher — decode/encode |
| **Number** | ~8 | `26`, `51.843`, `167`, `0`, `1941` | gematria / board-numbers (`26`=יהוה) |
| **Chain-link** (= a neighbor artifact's name) | ~15 | the SARAVI / Ros-Tau / Gate loops | Try adjacent artifacts' names |

## §A. Cell-codes = Sheet coordinates — ⏸ RE-OPENED (my disproof was on bad data)
**Retraction (2026-06-26):** I first declared this dead after a gviz CSV pull showed only 159 rows with the codes "out of range." **That was wrong — the gviz endpoint STRIPS empty rows**, compacting the real ~1,080-row sheet down to 159 (the poem really at rows 731–764 appeared at rows 13–44). So that test used *fake* row numbers. Jen's screenshots show the sheet genuinely extends past row 1080, so coordinates like `Q763`, `X672`, `B1035` ARE in range.
- **And there's a partial MATCH at the true coordinates:** `J763` = **"10"** = stage 10 = **"The World"** (the board's 0–10 emanation list) ↔ the code `J763` unlocks **"The Gate of the World."** `Q763` holds an **animal** image ↔ code `Q763` = **"Sir Rabbit."** Tantalizing, not yet confirmed.
- **The definitive test (pending):** in the live Sheet, Name-Box-jump to `Q763` / `X672` / `B1035` and check whether each cell holds its matching artifact. OR get the **File→Download CSV** (preserves true rows, unlike gviz) and test all coordinates at once.
- **⚠ Note:** the gviz CSV (used for §A-bis below) is reliable for *content* but NOT for coordinates (rows compacted). My earlier "codes live in a separate Spreadsheet Map" guess is also un-asserted — they may be coordinates in THIS sheet.

## §A-bis. The "I'm 33" board IS a validated PHRASE-code source ✅
Scanning the same gviz pull, the board contains these **known codes verbatim** — proof it's a real source: `We Fall Down As Seeds On The Ground`, `Logos`, `East Is Everywhere`, `Marduk`, `The Lightning Flash`, `True Voice`, `Roy's Tomb`, `Rorrim Ehtni Lived`, `Everybody's Going To Space Now`, `Let Them Eat Cake`→CAKE, `Joshua`→Joshua Tree, and *"the inside of the inside"*. So its short label-cells are real candidates (→ §Board-label candidates).

## §B. Body-part codes = fixed inverse addresses across one ten-station map `[G]` inputs / `[W]` rule
**Correction, 2026-07-31.** The direct board crops `4d378034` and `14a59d49` supply the missing animal index: **Swan 1 · Owl 2 · Whale 3 · Dolphin 4 · Horse 5 · Spider 6 · Dove 7 · Fox 8 · Cat 9 · Rabbit 10**. The separate "Body Part Stages" count runs from the other end: **1** feet/base-of-spine · **2** lungs/stomach/sexual organs · **3** right arm/right hip · **4** left arm/left hip · **5** heart · **6** right shoulder/throat · **7** left shoulder/throat · **8** right side of head/forehead · **9** left side of head/forehead · **10** crown.

Seven extant phrases consistently pair complementary addresses: `CRANIUM OF A SWAN` (animal 1 + body 10) · `PITUITARY GLAND OF AN OWL` (2+9) · `TEETH OF A WHALE` (3+8) · `LEFT SHOULDER OF A DOLPHIN` (4+7) · `RIGHT SHOULDER OF A HORSE` (5+6) · `LEFT HIP OF A DOVE` (7+4) · `Stomach of a cat + 9 lives` (9+2). The animal numbers, body-stage labels, and literal phrases are `[G]` separately; the exact organ-to-stage assignments and conclusion that each phrase names **one station from opposite ends, summing to 11**, are a high-confidence `[W]` reconstruction.

**Operational correction:** do **not** generate an arbitrary body-part × animal cross-product. The full 5,527-candidate matrix was later run against the open leaves and produced zero new hits. The map predicts the uninstantiated complements **Spider 6↔Heart 5 · Fox 8↔Right hip 3 · Rabbit 10↔Feet 1**, but those are structural predictions, **not known codes**. Rabbit 10 is the animal/Tree address of the World/Malkuth threshold; Feet 1 is its body/return address. The two numbers are complementary, not contradictory.

## The guess playbook (ranked, for any field you face)
1. **The artifact's own name**, uppercased (self-referential — the single best trick).
2. **A short thematic word** for its subject, from Roy's vocabulary (`REBIRTH`-type).
3. **Neighbor artifacts' names** (chain-link logic).
4. **Cell coordinate** if it's a code-type artifact (read the Sheet — §A).
5. **Recognize a fixed animal/body concordance** if the artifact supplies one of the mapped creatures (§B); do not cross-product parts and animals.
6. **Option-key decode/encode** if it's a Flood/glyph artifact.
7. **Harvested tweet/lyric lines** — short, verbatim (the tweet-mining list, pending → will append here).

## ⚖ HIT RATE — LOW (Jen tested 2026-06-26)
Of the board-label + hidden-text candidates Jen entered, **only `Pleiades Honey Bee` hit**; the rest (`RA`, `Alien Experiment`, `Mom's Song`, `Im an egg`, `Flip the stove`, `Portal`, etc.) returned **nothing**. Confirms the board is a **low-yield POOL, not a code list** — codes are arbitrary curated answers, NOT reliably guessable. **The definitive source of the *undiscovered* codes is Roy's own master key** (he made them; community records only hold the 147 discovered). Combined with the dead crown (unlocks don't persist), the highest-leverage move is **asking Roy directly** — for the master list AND to re-enable crown minting. Casual guessing can continue (capture any hits from GCS), but expect a long-odds hit rate.

## ⭐ HIDDEN-TEXT mechanic (Jen, 2026-06-26)
**Roy hid text in cells BEHIND the images.** The Google-Sheets **formula bar** reveals it one cell at a time (Jen: cell `B1035` shows `RA` behind a picture; `Q763`'s rabbit hides nothing). **gviz reveals ALL of it at once** (it reads cell *values*, not images) — so the gviz pull of the "I'm 33" board already contains the full hidden-text layer = the candidate pool. Expanded candidate set extracted 2026-06-26: **`RA` · `Sun of God` · `Dissolution` · `The Fall into Matter` · `xWebx` · `Im an egg` · `What is my story now?` · `Mars? Mars? Mars?` · `Christo`** (+ the board-labels below). NB `RA` sits at `B1035` (a known cell-code location) and the first frontier hit was **RA**phael — RA is a load-bearing key. (Most hidden text is the cosmogonic poem + the Kybalion 7 Principles laid into cells — lore doubling as a code stash.)

## Board-label candidates (from the "I'm 33" sheet, 2026-06-26)
Short, distinctive labels found on the board that are **not** known codes. The board is a validated source (§A-bis), so these are real candidates — but it's a *pool*, not a guarantee (≈half of its short labels ARE known codes, so the hit-rate is partial). Try:
- ✅ **`Pleiades Honey Bee` — CONFIRMED HIT (2026-06-26):** unlocked a **NEW, undiscovered** artifact — *"RAPhael the Christmas Spider"* ([[Sources/Artifacts/HoM Artifact - RAPhael the Christmas Spider (Pleiades Honey Bee) 2026-06-26]]). The method's first frontier discovery → the rest of this list just got much more credible.
- `Alien Experiment` · `Mom's Song` · `October 13` · `Do You Know Who You Are?` · `The Pattern Man` · `Perspective Is A Water Droplet` · `Flip The Stove` · `Portal` · `Christo` · `Alchemy`
- *(Confirmed-present, already codes — for reference: `3233` = Western Woods · `Roy's Tomb` · `Rorrim Ehtni Lived` · `Everybody's Going To Space Now`.)*

## Harvested tweet candidates — top fresh picks to try (2026-06-26)
From the ~982 recovered 2022 @jagwartwin tweets, scored by code-likeness. **Method validated:** a blind scorer independently surfaced 8 known codes near the top — `Reality is the child of illusion` at #1, `we anthropomorphize everything` #2, `there are things behind things` #3, `every human being is a star` #4 — so the register filter is correctly tuned. **The fresh, not-yet-known candidates — try these first** (verbatim, dated):
- `There is only one Mind` (2022-03-22) — "there is only X" absolute
- `Everything is connected` (2022-04-28)
- `be like water` (2022-06-07) — short imperative
- `Empower Thyself` (2022-04-23) — archaic-imperative coinage
- `Flip the switch` (2022-03-30) — **posted on the "Going Dark" drop date** (possible direct clue)
- `The pattern is the pattern` (2022-05-13) — koan-tautology, mirrors `the game is to reveal the game`
- `Ideas are dangerous creatures` (2022-04-26)
- `You are it` (2022-05-02) — the you-are-it doctrine ([[Brain/Concepts/The Circle]] §you-are-it) as a 3-word koan
- `You are 100 percent an egg` (2022-03-21) — ties to the Sound.xyz **Golden Egg** unlock mechanic
- `Where are the keys to the vault?` (2022-05-17) · `How does one unlock a gate?` (2022-04-24) — explicit puzzle/unlock questions
- secondary: `From out of the Darkness, Light` (2022-03-31) · `This is the way` (2022-06-21) · `It's everything` (2022-05-10) · `Turning nothing into something` (2022-04-11)
- Caveat: some archived tweets carry a trailing `…` (title truncation) — the leading clause shown is the quotable unit; if a guess fails, the full tweet may add words.

## Don'ts (the refutation, kept as a guardrail)
- **Don't invent long dense esoteric sentences** — every one failed.
- **Don't assume a board phrase is a code** — the board is *substrate*, not a code list; only board phrases Roy turned into artifacts are codes.

## ⭐ NEW VECTOR — wallet-gated SHEET TABS (2026-06-26)
The ARG hides content in **wallet-gated tabs of Google Sheets.** Discovered via `its-your-time.jagwartwin.com`: connecting a wallet there unlocks a **third sheet-tab** ("It's your time" — tabs are `Thoughts` · `Who will come with me?` · `It's your time`) holding the *Tree-thinking* pyramid (Abyss In→Out, 1–10 ascent, same as the "I'm 33" board) + the **It's Your Time Song NFT** (Edition 33, 0.1 ETH, sold out). **Implication for the cell-codes:** the public gviz export of the "I'm 33" sheet only returned ONE tab (gid 0) — the letter-number codes (`J763` etc.) may live in a **hidden/gated tab** I never saw, which would **re-open the coordinate theory** (it was tested only against gid 0). **Action:** on the "I'm 33" sheet, click the **≡ "All sheets"** menu (bottom-left) to list hidden tabs; each tab's gid → fetch via gviz (`/gviz/tq?tqx=out:csv&gid=<N>`). Likely home of the cell-code map / undiscovered artifacts.

### Result of the gated-tab pull (2026-06-26)
`its-your-time.jagwartwin.com` (wallet-connected) embeds **3 Google Sheets**, pulled via gviz: **(1)** `1OQQrj7…` = the known "I'm 33" board ("Thoughts" tab); **(2)** `1iZdcy1nOchO5OisOwPiwftaL-NUulsZ8qEbnI5Ya364` = the **"Who will come with me?" participant roster** — ~177 wallet addresses + join timestamps (Jen `0x86eA…634F` is the newest, 06-25 4:41pm); **(3)** `1krMuszTz_Ni00SLQbnRENb5YpCmhUDrYh7rZJyv2xR4` = the **It's Your Time Song NFT** card (Edition 33, 0 available) + Tree-thinking image. **⚠ None contained cell-codes or a new artifact map** — this gated layer is the song-experience + community ledger, not the code map. (The other song subdomains likely embed the same board + roster + their own song-NFT sheet — low expected yield for codes.) **Cell-codes still unresolved**; the proven artifact-finding method remains the board-label / tweet candidates (see §Board-label, §Harvested — confirmed by the `Pleiades Honey Bee` → RAPhael hit).

## Pending inputs (folding in as they land)
- ✅ **Tweet corpus mine — DONE** (2026-06-26): the ~982 tweets scored by code-likeness → see §Harvested tweet candidates above (method validated: blind scorer surfaced 8 known codes near the top).
- **The live Sheet** (Jen): would convert §A from inference to a direct cell-code list.
- **Body Parts auction (5/2/22)** material — recover for provenance and campaign context. The fixed §B map is now supplied by the direct board crops and code corpus; the auction is no longer needed to invent or extend combinations.

## Sources
- The ~149 codes: [[Sources/Artifacts/Hall of Mirrors - Artifact Gallery (catalog) 2026-06-25]] + [[Sources/Artifacts/HoM - Deep Dive board (room #→ name → code) 2026-06-26]].
- The cell-grid + somatic map + gematria: [[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]].
- Provenance (which medium each code came from): [[Sources/Artifacts/HoM - Clue Origins (provenance index) 2026-06-26]].
