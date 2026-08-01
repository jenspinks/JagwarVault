---
type: artifact
citable: true
status: stable
captured: 2026-06-27
ingest_source: "A 19-agent, four-lens steganographic sweep (capitalization/acrostic, tweet-metadata, image-anomaly, code-list) across 33-era + post-rush JagwarTwin material. EVERY candidate the lenses generated (238 unique) was validated against the live Hall of Mirrors getMintProof oracle and classified new/known/invalid by keccak-hash. Method-defining negative + positive results; 0 new artifacts."
---
# HoM — Steganographic Cipher Sweep (4-lens)

Jen asked to run four specific cipher lenses over the corpus — **(1) capitalization cipher + acrostic/telestic, (2) tweet metadata (char-count→date, timestamp→track, word-count, typos, glyphs), (3) image anomalies (hidden/shadow text, recurring-symbol counts, font-weight), (4) cross-reference to themes/dates/tracklist** — focused on *33* but extended through the **post-rush 2023–2026 socials** (the project was never finished, so Roy may have kept seeding hints).

**Scope:** all 10 *33* tracks + post-rush lyrics (SOL, Lucius Lullaby, The Circle Lucius Version) · the 2022 HoM-campaign tweets + 2023 + June-2026 X posts + the 2025–26 IG reels / Sir Lucius posts / MAGIK ARG · **all 89 local artifact images** (read visually) · the full 149-code answer-set as its own cipher layer. **238 unique candidates** generated, **every one validated** against `getMintProof` and hash-classified.

## Bottom line
- **0 new/undiscovered artifacts.** Of 238 candidates, **57 validated** — *all already known/captured*; **177 invalid**; 4 "new-vs-image-manifest" were audio/frontier artifacts **already in the vault** (C884 = *Creation w/Aubs* Room 12; TT283 = *33 (The Death of Me)* Room 3; STARDUST = the angle-sketch image). The cipher lenses did **not** crack open a new room.
- **The value is the verdict on each channel** — which of Jen's lenses are *real* Roy techniques and which are noise — plus **one important lead** (below).

## The lens verdict (validated, not guessed)

| Lens | Verdict | Evidence |
|---|---|---|
| **Verbatim phrase-as-code** | ✅ **REAL** (dominant) | A specific verbatim lyric line / tweet / artifact-name *is* the code. Confirmed live: **"Everyone loves the internet"** (Online line 2), **"we fall down as seeds on the ground"** (Soul Is A Star), **"death of my generation"** (Happy Face), **"inside of the inside"** (The Circle), + tweet codes (*We anthropomorphize everything*, *There are things behind things*, *The Pattern*, *The Great Jagwar*, *I Am Christmas*) + dozens of artifact names/captions. **But sparse & deliberate** — only *specific* lines hit (Online's "Everyone loves the internet" works; its other chorus lines don't; "Pay Attention"/"Are you paying attention?" do **not** validate despite Attention being a core theme). |
| **Riddle-construction** | ✅ **REAL** (rare) | The 2023-02-09 X post is a 4-part numbered riddle whose answers concatenate to the known code **`ELEPHANT TORTISE EAGLE ATLAS`**. Its second clue explicitly says *"Tortoise can [be] misspelled as Tortise,"* so `TORTISE` is deliberate **within this riddle/code**. The board/artifact itself is correctly transcribed **Elephant, Tortoise / Eagle, Atlas**; do not transfer the riddle's altered spelling back into the source image. This proves that Roy sometimes builds codes as multi-part answer-chains, but one instructed spelling change is not a general misspelling generator. |
| **Glyph (Option-key) cipher** | ✅ **REAL**, with a twist | The 4/24/22 tweet `Πå¥ å††´˜†ˆø˜` decodes via the macOS Option-key map to **PAY ATTENTION**. *Mechanic detail:* the maze stores the **raw glyph string** as the code, **not** the decoded plaintext (CAUTIONROY / DREAM / HELL / VITRUVIAN all invalid; the literal glyph rooms are valid). |
| **Lyric acrostic** (first letters of lines) | ❌ **DEAD** | No plaintext in any of the 10 tracks. Online = `CEAYTAATBABJ…`, It's Your Time = `OCAAWYTBIYO…`, Pay Attention = `HIAOTSTBYY…` — runs are just repeated-refrain artifacts. First-word and first-letter-of-stanza variants: nothing. |
| **Lyric telestic** (last letters) | ❌ **DEAD** | `etedeepnyek…` etc. — only end-rhyme regularity, no word. |
| **Capitalization cipher** (strip-to-capitals) | ❌ **DEAD** (but the casing is *meaningful*) | The .md files **deliberately preserve** Spotify's stylized mid-line capitals (high-confidence original) — but they are **thematic emphasis** (Fool, Eye, Self, Truth, Belt, Attention, Empires, Stars, Born, Light, Mind, MaMa), **not** a strip-to-capitals acrostic. None validated as codes. Across the 149-code set, **only one** code carries anomalous casing (`Vi†ruvian`), so a cross-code capital-acrostic is structurally impossible (the API caps-standardizes everything). |
| **Code-list meta-acrostic / telestic** | ❌ **DEAD** | First letters of all 149 codes, in **room order** *and* **discovery-date order**, spell nothing (`EAEMLIIHWDRRTDD…`). No hidden message threaded across the answer-set. |
| **Character-count → date / track** | ❌ **DEAD** | e.g. "We anthropomorphize everything" = 30 chars / 3 words; "There are things behind things" = 30 chars / 5 words — none map to 9/30, the album, or track #s in any validating way. |
| **Numeric / coordinate codes** | ⚠️ **Index, not cipher** | The 24 alpha+number codes (J403, B1035, G228, R1063, C876, Q763, X672…) are **spreadsheet coordinates** (the catalogue-index family, "Spreadsheet"-tagged on the Deep Dive board), not gematria/dates. Pure numbers (167, 9360, 26, 1941) form no sequence/date pattern. |
| **Timestamp → tracklist** | ⚠️ **One suggestive alignment, unconfirmed** | "There are things behind things" (the Wheels code) was posted 21:27 PT → read as 9:27 → track 9 (*Imagine A World*), and `IMAGINE A WORLD` *is* a valid code. **But** this is a *single* instance, the target is an already-known track-title code, and that tweet is *already itself* a code (Wheels) — so a second cipher pointing elsewhere is almost certainly **overfit/coincidence**. Not established as a channel. |
| **Image: hidden/shadow text, recurring symbols, font-weight** | ❌ **No hidden layer found** | Reading all 89 images surfaced only the artifacts' own **names + visible captions** (themselves the known chain-link codes); no steganographic text in shadows/backgrounds, no recurring-symbol count that resolved to a code, no font-weight cipher. |

## The lead worth chasing
Roy's **2023 X posts explicitly name the mechanic and confirm undiscovered codes remain**:
- *"SARAVI appears to have scattered clues to undiscovered Artifact codes throughout … the internet and Jagwar Twin-related social media platforms"* (02-10 / 02-20).
- *"corrupt Artifact codes … revise the corrupt codes by 'planting seeds' across [the socials]"* (02-07).
- *"There are always things behind things and those who wish to uncover these secret codes will find success when enough attention is paid … Happy hunting — El Roy ▵▢◑"* (02-10).

So the **post-rush socials are the right frontier** (Jen's instinct confirmed), and the productive technique there is **riddle-construction** (the ELEPHANT-TORTISE-EAGLE-ATLAS pattern), *not* verbatim-aphorism harvesting (~150 distinct 2023 aphorisms tested → **0** valid). **Open next step:** scan the 2023–2026 corpus specifically for *other* numbered/multi-part riddles ("4 words / 1… 2… 3… 4…") and concatenate-the-answers constructions — that is the channel that actually produced a code.

## Method (reusable)
19-agent Workflow (`hom-cipher-sweep`): 5 lyric agents · 3 tweet agents · 9 image agents (visual Read of all 89 images) · 1 code-list agent → barrier → cross-reference. Each candidate validated by the orchestrator with `getMintProof` (non-empty `proof` = valid), then `keccak256(lowercase)` hash checked against the 149-artifact manifest to classify **new vs known**, and any new hash pulled from GCS. *(The in-workflow cross-reference agent failed — returned placeholder output — so the synthesis above was done by the orchestrator against the validated results, which is the authoritative method anyway.)*

## Cross-references
- [[Sources/Artifacts/HoM - Master Brute-Force Candidates (2026-06-26)]] — the candidate pool + oracle/derivation mechanic (now annotated with these confirmed/dead channels).
- [[Sources/Artifacts/HoM - Complete Artifact Archive (code-derived) 2026-06-26]] · [[Sources/Artifacts/HoM Artifact - RAPhael the Christmas Spider (Pleiades Honey Bee) 2026-06-26]] (the "decipher→distill→validate" companion finding).
- [[Sources/Artifacts/HoM - 2022 Twitter & Campaign (Wayback recovery) 2026-06-26]] · [[Sources/Quotes/Roy X Posts - 2023 (Jan-Apr) DRAFT]] (the riddle + "scattered clues" tweets).
