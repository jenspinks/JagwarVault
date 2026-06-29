---
type: artifact
citable: true
status: living
captured: 2026-06-29
verified_against: ["Offline Merkle open-leaf set (34 still-open leaves = the 42 targets minus 8 cracked). GCS artwork pulled by leaf-hash (storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{leaf}..{ext}, double-dot). Candidates = visible marks ONLY; validated by keccak256(lower)∈open-set; live getMintProof confirms a hit. ★ First crack: 'A secret order everywhere' → 0x5ae904bc (proof_len 8, NOT in catalog = genuinely new)."]
ingest_source: "The open-leaf image reading bench — Jen's directive 2026-06-28: stop candidate universes, read the remaining artwork forensically, generate variants only from visible marks, validate, report hits."
---
# HoM — Open-leaf artwork reading bench (the 34 still-open rooms)

**The strategy is forensic, not interpretive** (Jen, 2026-06-28): *"What is visibly written on the remaining rooms that we are misreading by one character?"* Pull each open leaf's pre-uploaded GCS image, read it like **manuscript work** (every word gets a confidence score; multiple passes — contrast/grayscale/invert/zoom/crop; the code may be an ordinary line, not the title), generate variants **only from visible marks** (apostrophe/punctuation/case/homophone/numeral), validate against the 34 open leaves, **report hits immediately.** No candidate universes.

> **📁 Artwork stored in-vault:** `Media/images/hom-artifacts/open-leaf-bench-2026-06-29/` — all **33 open-leaf artifacts** (32 images + 1 audio `e163466b.mp3`), named by **leaf-short hash** (e.g. `5ae904bc.png` = the `A secret order everywhere` room) to match the table below + `_manifest.json`. *(`7d7a9392` = mint-type, has no GCS media.)* Decay-proof: these GCS images can vanish if the bucket lapses, so this is the permanent local copy.

## ★ CRACKS (2026-06-29) — 2 from the bench
**1. `A secret order everywhere`** — leaf **`0x5ae904bccf70…`** · art = **Coronation of the Virgin** (Mary crowned by Christ) with a typed **"Rome" poem** overlaid. The code is a line from the poem's **second stanza** — **not the title.** proof_len 8; not in catalog → genuinely new. Room `/rooms/0x5ae904bccf70…993932c… ` (full hash `0x5ae904bccf70e5292458765f422629f7ca1e6ea12de1b890af2753770f89fe4d`). Poem is canon-rich (Rome / Bethlehem / Jerusalem / *"frogs keep coming up from underground"* / *"who are you looking for?"*) — worth a full zoomed transcription.

**2. `3132514932`** — leaf **`0xd72324e351…`** · art = **"ARE YOU CONTENT?" poster** (313 = Detroit). The code is the poster's phone number **(313)-251-4932 with formatting stripped → digits only.** proof_len 8; not in catalog → genuinely new. Room `/rooms/0xd72324e351776ee5840e3b87bb987c14606ed3b8aeeaa487168f806be43c3a36`. **★ Cross-room seeding:** the number is *displayed* on the sibling poster `854e7070` but *opens* `d72324e3` — so visible text on one room's art can be **another** open room's code.

> **★ Method nuance learned (2026-06-29):** an own-leaf diagnostic (does a page's best-guess line hash to *its own* leaf?) matched for `5ae904bc` but **failed** for the clean printed tweet `1fd015c4` ("My favorite color is information" → does NOT hash to its room), the two ladders, the Notes poems, the Looking-Glass page, the master cosmology page, and the Tetragrammaton. So **most rooms' codes are NOT the text visible on their own artwork** (the art is the *reveal*; the code was seeded elsewhere) — deeper OCR won't crack those. **BUT** visible text can be **another** open room's code (the `3132514932` cross-hit). ⇒ **The productive rule: read every page, test every visible string against ALL 32 open leaves (not just the page's own), with formatting/punctuation/digit variants.** Both 2026-06-29 cracks came this way (a poem mid-line; a digits-only phone number).

## Pass-1 read log + conclusion (2026-06-29)
**~22 of 34 leaves read forensically; 2 cracked** (`A secret order everywhere`, `3132514932`). The decisive pattern:
- **The bench cracks the text-page subset** where a visible string equals an *open-room* code — often **cross-room** (the code is a line/number on the art that opens *that or another* open room). Both cracks are this shape.
- **Reveal-art rooms don't yield to OCR.** Confirmed by the own-leaf diagnostic + by reading: the 2021 tweets (`1fd015c4` "My favorite color is information", `dd61bc93` "Egg"), the illustrations (third-eye `d8db3530`, Apple-monitor `e87d384a`, rooster `f112c376`, the near-blank color swatches `6ed41c56`/`768e7068` — equalized, no hidden text), and the **Horus** cell (`83ff23dd`, already a known code) all have visible text/imagery that is **not** an open-room code. Their codes were seeded elsewhere.
- **Master-cosmology pages** (`8740ff84` Noah's-Ark/Flaming-Sword maze, `e338a9c6` "How to Live Forever?", `de26172b` "Coding Consciousness") are **code concordances** — each line is a *different* room's code, and most lines tested are already-known/catalog rooms, not open ones.
- **Sir Rabbit poem** (`665a8e1b`+`93918ddc`+`dd5b5bd4`) and the two **ladders** (`4d378034` "AI musical scale", `14a59d49` "One become Two") + **Looking-Glass p.211** (`6d687a8d`): all lines tested → 0 open hits. Either already-known codes or codes not on the page.
- **The 7 image-clue illustrations — READ 2026-06-29, all confirmed text-free:** `0da54f73` grey rabbit (on black) **[UPDATE: now ★CRACKED — its code `standing at the Gate of the World` lives on the ladder `4d378034`, not the rabbit image; cross-room concordance, found via the GPT/Jen batch]** · `2dbd72fe` 1990s class photo (no placard) · `3252cfd9` alien/cat figure + rainbow halo + star medallion · `8cbe4d1d` woman gardening (family photo) · `99996623` boy in knight costume on a pony (young Roy; the "Sir"/knight theme) · `99f4ee19` WWI biplane (RAF roundels; aviation/father theme, ties to the lighter) · `9b785fc0` pencil star-creature flying to a moon (Stardust theme). **Zero readable code on any** → all reveal-art / seeded-clue rooms.
- **Non-OCR:** `e163466b` (audio mp3 — code is a sung/spoken phrase) + `7d7a9392` (no GCS media — mint-type, needs an external code).

**★ LORE CAPTURED (2026-06-29) — the dead codes still fed the vault (Jen: "don't waste the effort"):** even though these rooms' codes are seeded-elsewhere, their *content* is public canon and is now folded:
- The **Sir Rabbit poem** screenshots (`665a8e1b`/`93918ddc`/`dd5b5bd4`) = source-image pages of the already-canonical [[Sources/Artifacts/HoM Room 51 - Sir Rabbit (poem)]] — wired in there (incl. the **Spider companion** = the cracked `the answers in a name` room, and the **child-knight** `99996623` as a `[W]` armored-self/proto-Lucius anchor).
- The **Looking-Glass p.211** page (`6d687a8d`) → new note [[Sources/Artifacts/HoM - The Name of the Song Problem (Looking-Glass p211)]] (the naming-doctrine behind `Know how to spell the name of the song` + `the answers in a name`).
- The **"Violet Moon was a machine"** → folded into [[Brain/Concepts/Source vs Reflection]] (reflection-become-mechanism).
- The **child-knight** (`99996623`) → anchored to **[[Brain/Concepts/The Protector]]** as its **biographical genesis** (young Roy in toy armor = the survival-self before it calcifies into Lucius). *(Correction 2026-06-29: I first mis-flagged `CONCEPT-TheProtector` as "confabulated" off a narrow filename search — WRONG. The Protector is a real central Lucius pillar [Ballerina Boy wound → Loser/Good Day/No Fake Friends armor → Sir Lucius]; it simply lacked a dedicated note, now created.)* *(The GPT proposal to create a fresh "Game of Many Things" fable note WAS redundant — that fable IS Room 51, already transcribed.)*

**✅ ALL 34 OPEN LEAVES ACCOUNTED (2026-06-29):** 32 images read + 1 audio + 1 no-media. **Bottom line:** the forensic bench is real and productive (**2 cracks**: `A secret order everywhere`, `3132514932`), but its yield is **bounded to the text-page subset, which is now fully mined.** The remaining ~30 open rooms are **reveal-art** (illustrations / photos / tweets / color-swatches / master-page concordances of already-known codes) whose codes were **seeded elsewhere, not on the art** — so they need a **seeded-clue hunt** (which 2021-era tweet/board line opens them), **not** more image-reading. The frontier is **partly forensic (mined) and partly a seeded-clue gap.**

## The bench — 34 open leaves
**Read** = image pulled + first-pass transcribed. **Status:** ★CRACKED · tested-0 (visible lines validated, no hit — needs deeper multi-pass) · unread · audio/no-media.

| Leaf | Media | Subject (first pass) | Status |
|---|---|---|---|
| `5ae904bc` | png | Coronation of the Virgin + "Rome" poem | **★ CRACKED `A secret order everywhere`** |
| `4d378034` | png | Spreadsheet ladder **"AI musical scale… Stages 1-10 (Ascending)"** — 10 animal-stage lines | **★ CODE-CONCORDANCE** — its stage-10/rabbit line *"…standing at the Gate of the World"* keys the **grey-rabbit room** `0da54f73` (cracked). Each animal-stage line may key that animal's image-room. |
| `0da54f73` | jpg | grey rabbit (on black) | **★ CRACKED `standing at the Gate of the World`** (sub-phrase of the ladder's rabbit line; cross-room) |
| `14a59d49` | png | Spreadsheet ladder **"One become Two"** — 10 lines (point with no beginning / wheel inside a wheel / Half a crown in my hand / The Moon Machine keeping time / I woke up in my shadow) | tested-0 (all 10 lines) — needs deeper read |
| `665a8e1b` | png | iPhone Notes — **Sir Rabbit poem** (The Violet Moon "was a machine" / welcome to the moon / the Cat / Seals & candles) | tested-0 — needs deeper read |
| `93918ddc` | png | iPhone Notes — **"The Game of Many Things"** (Fox & Rabbit; "the key is hidden in yourself / just listen for the knock") | tested-0 — needs deeper read |
| `dd5b5bd4` | png | iPhone Notes — Fox & Rabbit poem (same doc, another screen) | unread (read with 665a8e1b/93918ddc) |
| `6d687a8d` | jpeg | *Through the Looking-Glass* **p.211** — the Knight's "name of the song" (Haddocks' Eyes / The Aged Aged Man / Ways and Means / A-sitting On A Gate) | tested-0 (4 names + apostrophe variants) — try line-forms |
| `8740ff84` | jpg | **NOAH'S ARK** notebook page (per prior map; holds known codes Flaming Sword/Higher Resolve/A River) | unread this pass |
| `68c9b388` | jpg | hand-drawn **NOAH'S ARK as a body** (small window / 11 sections / 3 stories Heaven Man Earth / 32 / main door where animals come in) | tested-0 (annotations) — needs deeper read |
| `4b240a5e` | jpg | **USAF Test Pilot School** lighter (Edwards AFB, California) | tested-0 (Test Pilot School/Edwards AFB) |
| `da3b774d` | jpg | Test Pilot School lighter (likely related to 4b240a5e) | unread this pass |
| `1fd015c4` | jpg | tweet **"My favorite color is information"** | unread this pass |
| `854e7070` | jpg | poster **"ARE YOU CONTENT? (313)-251-4932 CALL NOW"** — *displays* the number that opens d72324e3 | read; own code still unknown (tested "Are you content?" → 0) |
| `d72324e3` | jpg | "ARE YOU CONTENT?" poster (sibling) | **★ CRACKED `3132514932`** (digits-only) |
| `7ceb3953` | jpg | **Dead Letter Drive** CD | unread this pass |
| `83ff23dd` | jpg | **Eye of Horus** (labeled "Horus") — El-Roi-themed | unread this pass |
| `d8db3530` | jpg | third-eye face + roses + JT logo — El-Roi-themed | unread this pass |
| `18c56a31` | jpg | **Tetragrammaton YHVH = 26** gematria page — El-Roi-themed | unread this pass |
| `2dbd72fe` | jpg | 1990s class photo | unread |
| `3252cfd9` | jpg | alien/cat figure + cross + rainbow halo | unread |
| `99996623` | jpeg | knight-child photo | unread |
| `99f4ee19` | jpg | WWI biplane | unread |
| `9b785fc0` | jpeg | pencil cat-eared **star-creature** (star on chest, comet-tail, flying to a ringed moon, small shapes orbiting) — Jen's `image_a15af8.jpg` | **title-distillation EXHAUSTED 2026-06-29**: 130 candidates / 1,243 variants (cat × star/space/Saturn/comet/ghost/spirit/Felis/Pleiades/Gabriel/Willow + soul-is-a-star + space/hyphen/concat/article/number/+/& forms) → **0** vs all 32 open leaves. ⇒ seeded-clue room, code not derivable from subject. **Don't re-run cat/star titles.** |
| `8cbe4d1d` | jpg | garden woman | unread |
| `6ed41c56` | jpg | near-blank mint-green | unread (likely image-clue) |
| `768e7068` | jpg | near-blank cyan | unread (likely image-clue) |
| `51f28bfc` | ? | unread (not in prior map) | unread |
| `53d191a0` | ? | unread (not in prior map) | unread |
| `ac9f2eb2` | ? | unread | unread |
| `dd61bc93` | jpg | unread (~1 MB) | unread |
| `de26172b` | jpg | unread | unread |
| `e338a9c6` | jpg | unread (~1 MB) | unread |
| `e87d384a` | jpg | unread | unread |
| `f112c376` | jpg | unread | unread |
| `e163466b` | **mp3** | AUDIO artifact — code likely a sung/spoken phrase, not OCR-able | audio (defer) |
| `7d7a9392` | — | **no GCS media** (mint-type room) | no-media (needs external code) |

## Next-pass protocol (the manuscript work)
1. **Deeper multi-pass on the tested-0 text pages** (the ladders, the Notes poems, Looking-Glass, Noah's-Ark-body): contrast/grayscale/invert/zoom/crop-by-text-block via PIL → re-Read each processed crop; independent re-transcription; try **every** line + title + line+number + the small/marginal text I summarized past. The 5ae904bc crack proves the code can be a mid-poem line — so **no line is skippable.**
2. **Read the ~23 unread images** (above) first-pass, then deep-pass the text-bearing ones.
3. **Exactness variants** on every candidate: apostrophe (straight/curly/none), punctuation kept/stripped, case (no-op for hash but track), homophone, numeral↔word, separators. *(`father's`≠`fathers`, `genes`≠`jeans` — exactness is the game.)*
4. **Per-artifact verify every hit** before minting: `meta.jagwartwin.com/artifacts/{id}` / OpenSea — a hit on an already-minted artwork is a dup, not a find (the `in my father's shoes` lesson).
5. Audio `e163466b` + no-media `7d7a9392` are **not** OCR targets — defer to audio-transcription / external clue.

## Connections
- [[_System/HoM - Finds Ledger (all cracks + status)]] — `A secret order everywhere` logged there (#16 frontier).
- [[Sources/Artifacts/HoM - Artwork-read method, I'm the Spider, El Roi investigation (2026-06-28)]] — the method this operationalizes.
- [[Sources/Artifacts/Data/HoM Merkle open-leaf targets (42 uncracked rooms) 2026-06-27.json]] — the leaf set.
- `_System/HoM - Session Handoff & Index.md` — frontier count.
