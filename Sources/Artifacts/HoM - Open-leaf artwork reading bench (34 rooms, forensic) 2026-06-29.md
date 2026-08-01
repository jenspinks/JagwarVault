---
type: artifact
citable: true
status: living
captured: 2026-06-29
verified_against: ["Offline Merkle open-leaf set (34 still-open leaves = the 42 targets minus 8 cracked). GCS artwork pulled by leaf-hash (storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{leaf}..{ext}, double-dot). Candidates = visible marks ONLY; validated by keccak256(lower)∈open-set; live getMintProof confirms a hit. ★ First crack: 'A secret order everywhere' → 0x5ae904bc (proof_len 8, NOT in catalog = genuinely new)."]
ingest_source: "The open-leaf image reading bench — Jen's directive 2026-06-28: stop candidate universes, read the remaining artwork forensically, generate variants only from visible marks, validate, report hits."
---
# HoM — Open-leaf artwork reading bench (the 34 still-open rooms)

> [!important] ★★★ **SCOPE CORRECTION (Jen, 2026-07-29) — this file's whole premise was too narrow.**
> *"I don't need codes. These artifacts are the source code to the whole project. Every one of them should be considered a direct statement and invaluable in the interpretation of the project. It is an attempt to download his own consciousness, the same one that built the project, wrote the songs, and created the JT cosmos. We are not looking for codes. We are using the artifacts to understand the project as the keys that they are."*
>
> **What this file got wrong.** It is a *code* bench, and it let code-yield decide an artifact's worth. Its verdict vocabulary (`reveal-art`, `tested-0`, *"don't yield to OCR"*, *"codes seeded elsewhere"*) is entirely about crackability, and its conclusion told successors the frontier needed **"not more image-reading."** Under the correct framing, **the ~30 rooms it filed as null results are ~30 direct statements from the author.** A childhood photograph, his father's lighter, an unreleased demo and a handwritten gematria page are not "reveal-art"; they are the project's source.
>
> **The rule going forward: code-status and interpretive-status are two independent fields.** A room can be permanently uncrackable and still be among the most important artifacts in the corpus. Nothing in this file should be read as *"this artifact has been dealt with."*
>
> **Where interpretation lives:** `Brain/Media/`, one page per artifact, observable-first and tiered (exemplar: [[Brain/Media/Third-eye watcher (El Roi, roses)]]). This file stays the **code / provenance** record only. Jen had already flagged this once in the margin here (§LORE CAPTURED, *"don't waste the effort"*) and the framing still did not change; hence this block.

**The code-side strategy was forensic, not interpretive** (Jen, 2026-06-28): *"What is visibly written on the remaining rooms that we are misreading by one character?"* Pull each open leaf's pre-uploaded GCS image, read it like **manuscript work** (every word gets a confidence score; multiple passes — contrast/grayscale/invert/zoom/crop; the code may be an ordinary line, not the title), generate variants **only from visible marks** (apostrophe/punctuation/case/homophone/numeral), validate against the 34 open leaves, **report hits immediately.** No candidate universes.

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
- The **"Egg" tweet** (`dd61bc93`, JT 10/2/21). **`[G]` (observable):** Roy captioned **one word — "Egg" — over Vladimir Kush's *Sunrise by the Ocean*** (a cracked world-egg, the sun rising between its shell-halves over the ocean, scaffolding tending the shell). That is the whole grounded fact; the caption is the only authorial content. **`[~]` resonance (framework correspondence — NOT Roy's stated intent; he wrote one word):** an egg cracking to release the **sun over water** *rhymes with* the JT solar-birth-out-of-water — [[SOL]] (*sol* = sun), *Shine* (“the sun is coming out”), the **Flood** ([[Brain/Albums/Subject to Flooding (album)|Subject to Flooding]]); and with the vessel-that-must-crack-to-hatch (the egg→chicken on the "I'm 33" board → [[Brain/Concepts/The House & the Vessel — Container Imagery (hold, open, shatter, hatch)|House & Vessel]]). These are *our* correspondences, held at resonance; don't promote them without an independent anchor that this image is about those songs. ⚠ **Provenance note:** a 2026-06-29 oracle study mis-identified the painting as **Dalí's *Geopoliticus Child Watching the Birth of the New Man*** — checked against the local leaf image, it is unmistakably **Kush, not Dalí** (Kush's metaphorical-realism is often confused with Dalí). The egg→birth *instinct* was right; the painting was wrong.
- The **child-knight** (`99996623`) → anchored to **[[Brain/Concepts/The Protector]]** as its **biographical genesis** (young Roy in toy armor = the survival-self before it calcifies into Lucius). *(Correction 2026-06-29: I first mis-flagged `CONCEPT-TheProtector` as "confabulated" off a narrow filename search — WRONG. The Protector is a real central Lucius pillar [Ballerina Boy wound → Loser/Good Day/No Fake Friends armor → Sir Lucius]; it simply lacked a dedicated note, now created.)* *(The GPT proposal to create a fresh "Game of Many Things" fable note WAS redundant — that fable IS Room 51, already transcribed.)*

> [!note] **⚠ The table's `Status` column is STALE, and it misleads in the alarming direction. Read this before trusting it.**
> The table below still says `unread` on **22 rows**, but **§Pass-1 read log above already records 12 of those as read on 2026-06-29** — the prose was updated and the table never was. Five more were read afterwards via `Brain/Media/` pages (`8740ff84`, `da3b774d`, `d8db3530`, `de26172b`, `e338a9c6`).
> **Only 4 were ever genuinely unexamined:** `7ceb3953` (now read, see below) and `51f28bfc` / `53d191a0` / `ac9f2eb2`, **which were never pulled from GCS and still have no local copy.**
> *(Recorded because a 2026-07-29 pass initially read the stale table as ground truth and concluded ~17 rooms were unread. That was wrong. **In a file where prose and table disagree, reconcile them rather than believing either — and fix the column.**)*
> ✅ **A fresh independent read of 14 locally-held images ran 2026-07-29 anyway. It was worth it: it corrected a title, corrected a "text-free" verdict, and added marks the first pass missed.** Details in §Reading pass below.

## ✅ Reading pass 2026-07-29 — an independent second read of 14 locally-held images

**Not a first read.** Pass-1 (2026-06-29) had already looked at 12 of these 14; only `7ceb3953` and `18c56a31` were fresh. This was run as a **second, independent read** — and the case for doing it is what it found: **a wrong title, a wrong "text-free" verdict, and marks the first pass did not record.** Transcriptions are not self-verifying.

Method as specified: open each image directly, transcribe **visible marks only**, crop/mirror/upscale where the source is low-res, then test **every string against all 42 open leaves** (cross-room, not own-leaf). Validator rebuilt offline (`keccak256(lower(code))` vs `still_open_leaf_hashes`), **self-tested against the three known cracks, which it reproduces**, plus a control that correctly misses. Saved for reuse: `Sources/Artifacts/Data/merkle-coverage-2026-06-28/hom_validate_2026-07-29.py`.

**Code result: 1,481 distinct variants from 128 visible-mark seeds → 0 new hits.** This corroborates Pass-1's conclusion that these are seeded-clue rooms, now on an independent read rather than a single one.

⚠ **That is a fact about this pass, not a verdict on these rooms.** The strings tested are what is *legible*; two pages have text I could not resolve (below). **Do not read it as "these rooms are closed."**

### Corrections this second read produced
- ★★ **`7ceb3953` is "Dead Letter Diaries", NOT "Dead Letter Drive" — and the artifact is ALREADY FULLY ANALYSED ELSEWHERE IN THE VAULT.** The disc is mirrored by the 3D scan; flipped and upscaled 5× it reads **Dead Letter Diaries** cleanly.
  **What the one-word error cost.** *Dead Letter Diaries* is **Roy's documented first band** (high-school years, ~2003–2006, pre-Eye Alaska), grounded in three independent in-vault sources: [[Sources/Transcripts/Wikipedia]] §Early bands, [[Sources/Transcripts/Atwood-2018-Loser]] §"On previous bands", and [[Sources/Transcripts/Bringin-It-Backwards-Podcast]]. The object is **catalog artifact #12 `DEAD LETTER DIARIES`** in [[Sources/Artifacts/Artifacts - Poems, Texts and Social Posts]], with a full reading already written (PHANTOMS realm; *"a ghost of the pre-Jagwar self"*; a **dead letter** = mail that can never be delivered, so the band name already frames a teenager's diaries as *messages sent to no one*; song tie → [[Loser]] strong). That entry **even records the mirror-flip**. Its code is the artifact's own name, `DEAD LETTER DIARIES`, and it is **already minted**.
  ⇒ **A single mis-transcribed word severed an artifact from its own complete, grounded analysis** and left it filed here as an unidentified CD. This is the sharpest possible demonstration of Jen's 2026-07-29 point: the artifact *is* the source code, and losing its name loses the source.
  ⇒ **No `Brain/Media/` page was created for it** — the analysis has a home already, and a second one would be the two-ledger failure. **`7ceb3953` is an alias leaf; treat it as closed, interpretively.**
- ★★ **`99f4ee19` is catalog artifact #147 `GRANDFATHER'S PLANE`, code `HEIMDALL`, already minted.** The catalog describes exactly what is on this leaf: *"a single military biplane floating against pure black, slowly rotating so its upper wing shows a concentric blue-white-red roundel with a red center bar."* It is read there as **a memorial to Roy's grandfather** (likely the **William Rudolph** of adjacent artifact #148 *WILLIAM RUDOLPH 1941*), part of the aviation-father cluster with the [[Brain/Media/Test Pilot School lighter (aviation-father artifact)|Test Pilot School lighter]]. ⚠ **Correcting my own read: I called it WWI; the catalog's WWII / c.1941 dating is better grounded** (that roundel pattern spans both wars, and #148 fixes the year). Another alias leaf, another artifact this file listed as unidentified.
- **`83ff23dd` is not a standalone illustration, it is a cell on the "I'm 33" board** — spreadsheet gridlines, the label **"Horus"** in a yellow-filled cell, a red-filled cell lower right, and a cropped stone-relief photo (legs/feet) top right. Concrete confirmation of the established *"the spreadsheet is the HoM's source-quarry"* relation, at cell level.
- ★ **`3252cfd9` carries a small `+` on the forehead**, which Pass-1 did not record (it logged "alien/cat figure + rainbow halo + star medallion"). That is the same mark as Roy's chest tattoo, his own gloss *"I am at the center… it represents Christ… and the 4 worlds"* → [[Brain/Concepts/The Rose Cross]]. It also makes the figure a **sibling of `9b785fc0`**, not an unrelated illustration: same white cat-eared creature, **star on the chest** (here a gold star in a rainbow-ringed medallion, on a black starfield). Since `9b785fc0`'s title-distillation is already **exhausted**, treat the two as **one series** and do not re-distil titles for either.
- ⚠ **`8cbe4d1d` is NOT "confirmed text-free"** as Pass-1's §"7 image-clue illustrations" states. There is a **stencilled wooden planter box** in frame carrying real lettering. It is illegible at source resolution, which is a different fact from absent, and it is a live lead (below). It is also a **video frame**, not a family photo.

### Per-image reads (all `[G]` observable)
| Leaf | What is actually on it | Text? |
|---|---|---|
| `dd5b5bd4` | iPhone Notes, **Sir Rabbit poem, 3rd screen**. Full transcription below | yes, transcribed |
| `1fd015c4` | @JagwarTwin tweet *"My favorite color is information"*, **17:08 · 9/29/21** | yes |
| `18c56a31` | Handwritten **Tetragrammaton build**: י=10 · יה=15 · יהו=21 · **יהוה=10+5+6+5=26** | numerals + Hebrew |
| `83ff23dd` | **Board cell**: Eye of Horus glyph, yellow cell labelled **"Horus"** | "Horus" |
| `7ceb3953` | 3D scan, CD in a case nailed to grey fence boards; insert photo of a figure on a road | ★ **Dead Letter Diaries** |
| `e87d384a` | Pencil sketch of an **Apple monitor** with the Apple logo | none |
| `f112c376` | 3D scan, **framed oil painting of a rooster**, taped to a wall | none |
| `3252cfd9` | White cat-eared figure, **`+` on forehead**, rainbow halo, gold-star medallion | none |
| `2dbd72fe` | **1990s class photo**, ~22 children + teacher, outdoor school bench | only clothing graphics |
| `99996623` | ★ **Child in plastic knight armour on a pony** — helmet, breastplate and shield each bearing a **gold crowned dragon** | none |
| `99f4ee19` | 3D scan, **WWI biplane model**, RAF roundels on both wings + fuselage, hex panel | no serial visible |
| `8cbe4d1d` | **Video frame** (not a photo): woman in sun hat and pink gardening gloves in a backyard garden, succulents, shovel, butterfly flag | ⚠ a stencilled wooden planter box, **illegible at source res** |
| `6ed41c56` | Near-blank paper texture. Dominant **`#d3e8df`** (pale mint) | none |
| `768e7068` | Near-blank gradient. Dominant **`#78cde1`** (cyan/turquoise) | none |

**`dd5b5bd4` full transcription** (faded head/foot lines are behind the Notes chrome, marked `…`):
> `…The Rabbit thought he had been tricked / The Fox was ever cunning / And so he sat. That's all he did` · Till something he heard drumming ⁋ A voice from on the other side / Said Rabbit you've been trapped / Now you must use your other mind / Dear Rabbit, it's been mapped ⁋ If quietly you listen for the beat behind the wall / Then surely you wont miss it if you listen to its call ⁋ The Rabbit waited silent in the center of the box / And then he heard it faintly like a heartbeat he forgot ⁋ Over the spot he heard the sound / Sir Rabbit gently knocked / And then a door appeared and when he checked it was unlocked ⁋ A Dove was waiting for him in an emerald garden tree / He held a lamp before him so Sir Rabbit he could see ⁋ `…much as … company … must be on your way / Sir Rabbit …`

*(Pass-1 reported the Sir Rabbit poem's lines as "all tested → 0 open hits" while the table marked this screen `unread` — the prose was right and the table stale. The transcription above is independent, and it agrees: 0 open hits.)*

### What this pass leaves open (leads, not dead ends)
- **`8cbe4d1d`'s planter-box stencil** is real text at unreadable resolution. A higher-res pull of that video, or the original GCS asset at full size, could yield it.
- **`7ceb3953`'s case insert and the curved micro-text around the disc hub** are still unresolved. The insert carries at least 3 lines.
- **The two colour swatches may encode a colour, not a word.** `#d3e8df` and `#78cde1` were tested as hex and as common colour names; a *named* shade from the vault's own [[Brain/Concepts/The Im 33 Board - Decoded (Roy's upload cosmology)|Queen-scale ladder]] vocabulary has **not** been tried and is the obvious next angle.
- ✅ ~~**`51f28bfc`, `53d191a0`, `ac9f2eb2` were never pulled from GCS.**~~ **PULLED + READ 2026-07-29** (archived to the bench folder; manifest now 37 entries): `53d191a0` = **the veils drawing** (Ring Pass-Not/Chaos/Cosmos — the artwork minted **#117 WHEELS** reproduces; alias-leaf class; ⚠ corrects #117's "ADN"→**AIN**) · `51f28bfc` = **4:28 video, rotating point-cloud bust of a woman's head, WITH AUDIO, never heard** · `ac9f2eb2` = **3:53 video, wireframe glyph over frozen-sea footage (the Antarctica register), WITH AUDIO, never heard**. Full reads: [[Board - The Artifact Overlap (crops, rooms, subjects)]] §C3.

### Content observations worth folding (separate from code-cracking)
- ★ **`99996623` (child-knight) may be the biographical seed of the whole knight register** — "**Sir** Lucius", the 2025 *"loyal servants of The Realm ⚔️"* campaign, the sword/shield staging. This file already routes it to [[Brain/Concepts/The Protector]]; the **Realm-campaign** link is the part not yet drawn. `[W]` at most: a childhood costume photo is not proof of a 2025 naming choice.
- **`8cbe4d1d` (garden woman)** sits with the **mother-as-first-transmission-channel** `[W]` on [[Brain/Roy Voice/Roy on Influences]] and the "Grandmas Song" audio room. ⚠ Identity **not** established — do not name her from a face. `[?]`

---

## ★ Board join (2026-07-29)
**Six-plus of these open rooms are "I'm 33"-board content** (two literal spreadsheet screenshots: the Tetragrammaton column `18c56a31`, the "Horus" cell `83ff23dd`), and a further set share their *subject* with board cells. The full map, with grades and the interpretive payload: [[Board - The Artifact Overlap (crops, rooms, subjects)]]. The board's "never-minted" panels are not un-uploaded — several are open rooms in the maze.

## The bench — 34 open leaves
**Read** = image pulled + first-pass transcribed. **Status:** ★CRACKED · tested-0 (visible lines validated, no hit — needs deeper multi-pass) · unread · audio/no-media.
⚠ **The `unread` markers below are the 2026-06-29 state. See §Reading pass 2026-07-29 above for current status;** everything held locally has since been read.

| Leaf | Media | Subject (first pass) | Status |
|---|---|---|---|
| `5ae904bc` | png | Coronation of the Virgin + "Rome" poem | **★ CRACKED `A secret order everywhere`** |
| `4d378034` | png | Spreadsheet ladder **"AI musical scale… Stages 1-10 (Ascending)"** — 10 numbered animal lines | **★ CODE-CONCORDANCE** — its printed Rabbit-10 line *"…standing at the Gate of the World"* keys the **grey-rabbit room** `0da54f73` (cracked). Direction guard: the animal/Tree count runs Swan 1 → Rabbit 10 (source to World), while the body's return count runs Feet 1 → Crown 10; “stage 10” alone does not mean the spiritual summit. `[G]` source header/numbers · `[W]` direction/station reconstruction. |
| `0da54f73` | jpg | grey rabbit (on black) | **★ CRACKED `standing at the Gate of the World`** (sub-phrase of the ladder's rabbit line; cross-room) |
| `14a59d49` | png | Spreadsheet **"One become Two"** field — the same Swan 1 → Rabbit 10 sequence laid across the cosmogonic poem, plus an unnumbered vulture between Whale 3 and Dolphin 4 | tested-0 (all 10 lines); **deep read complete 2026-07-31**. The vulture's placement is observable; reading that unnumbered 3↔4 interval as Da'at/the Abyss remains `[W]`, not a label Roy wrote. |
| `665a8e1b` | png | iPhone Notes — **Sir Rabbit poem** (The Violet Moon "was a machine" / welcome to the moon / the Cat / Seals & candles) | tested-0 — needs deeper read |
| `93918ddc` | png | iPhone Notes — **"The Game of Many Things"** (Fox & Rabbit; "the key is hidden in yourself / just listen for the knock") | tested-0 — needs deeper read |
| `dd5b5bd4` | png | iPhone Notes — Fox & Rabbit poem (same doc, another screen) | unread (read with 665a8e1b/93918ddc) |
| `6d687a8d` | jpeg | *Through the Looking-Glass* **p.211** — the Knight's "name of the song" (Haddocks' Eyes / The Aged Aged Man / Ways and Means / A-sitting On A Gate) | tested-0 (4 names + apostrophe variants) — try line-forms |
| `8740ff84` | jpg | Full **NOAH'S ARK** notebook page containing the body-Ark plus the Flaming-Sword maze and other notes (holds known codes Flaming Sword/Higher Resolve/A River) | **deep read complete 2026-07-31**; full-page instantiation of the close crop below |
| `68c9b388` | jpg | close crop of hand-drawn **NOAH'S ARK as a body** (small window / 11 sections / 3 stories Heaven Man Earth / 32 / **main door — where animals come in**) | tested-0 (annotations); **deep read complete 2026-07-31**. `[W]` the human-shaped Ark as an ingress/preservation vessel for the board's bestiary; the inscription itself is `[G]`. |
| `4b240a5e` | jpg | **USAF Test Pilot School** lighter (Edwards AFB, California) | tested-0 (Test Pilot School/Edwards AFB) |
| `da3b774d` | jpg | Test Pilot School lighter (likely related to 4b240a5e) | unread this pass |
| `1fd015c4` | jpg | tweet **"My favorite color is information"** | unread this pass |
| `854e7070` | jpg | poster **"ARE YOU CONTENT? (313)-251-4932 CALL NOW"** — *displays* the number that opens d72324e3 | read; own code still unknown (tested "Are you content?" → 0) |
| `d72324e3` | jpg | "ARE YOU CONTENT?" poster (sibling) | **★ CRACKED `3132514932`** (digits-only) |
| `7ceb3953` | jpg | ★ **Dead Letter Diaries** CD (⚠ was recorded "Dead Letter Drive" — corrected 2026-07-29 by mirroring the scan) | **read 2026-07-29**, tested-0 |
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
| `dd61bc93` | jpg | 2021 tweet **"Egg"** (JT, 10/2/21 10:53) over **Vladimir Kush, *Sunrise by the Ocean*** — twin egg-shell halves crack open and the **sun is born between them over the ocean**; scaffolding + tiny figures build/tend the shell. ⚠ **NOT** Dalí's *Geopoliticus Child* (an oracle misread — corrected against this local image 2026-06-29). | reveal-art (code seeded elsewhere) — read 2026-06-29 |
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
