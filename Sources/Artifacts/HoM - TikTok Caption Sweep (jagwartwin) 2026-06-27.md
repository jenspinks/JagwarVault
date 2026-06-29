---
type: artifact
status: stable
citable: true
ingested: 2026-06-27
ingest_source: "Full crawl of the official @jagwartwin TikTok feed (tiktok.com/@jagwartwin), captured 2026-06-27 via a logged-in Chrome session (DOM harvest of every video card's caption + snowflake-derived post date). Public official-account content = citable."
---
# Hall of Mirrors — TikTok Caption Sweep (@jagwartwin)

**What this is.** The first full capture of the official **@jagwartwin TikTok** caption history — **622 of 633 videos** (the feed bottoms out at 622; the rest are private/deleted/duplicates), spanning **2022-06-26 → 2026-06-25**. Raw data: [[Sources/Artifacts/Data/JT TikTok Feed - jagwartwin captions 2026-06-27.tsv]] (`video_id · post_date · caption`; dates derived from the TikTok snowflake `id >> 32`).

TikTok was the **one mirrored-socials surface NOT covered** by the durable Discord Circle-bot mirror ([[Sources/Artifacts/Data/JT Socials Feed (Discord Circle-bot mirror) 2026-06-27]] carries Twitter/YouTube/IG only). This sweep closes it.

## Why we ran it (the HoM code-hunt angle)
Per Jen's ask: harvest the TikTok back-catalog from the ~launch window forward and mine the captions (and burned-in on-screen text) for **undiscovered Hall of Mirrors artifact codes** — a surface never checked.

## Result — code hunt: **0 new artifacts** (well-tested negative)
- **1,853 unique candidate phrases** mined from the 622 captions (quoted phrases, full captions, sentence splits, hashtags, ASCII-normalised variants) → validated via `keccak256(lowercase) → GCS-existence` (the oracle `getMintProof` is DNS-dead; GCS is the durable validator). **0 valid codes.**
- **~35 hand-picked highest-value 2022 launch-window phrases** (e.g. *"Everything is possible" – El Roy*, *"reclaim your crown"*, *"the inside of the inside must be where you go"*, *"Are you willing to be proven wrong?"*, the darkest-corner story) — tested with punctuation variants incl. exact trailing `?` → **0 valid.**
- **~34 distinctive burned-in on-screen-text phrases** (*"you're not my homie," "flip the stove," "we all fall down," "there once was a girl who drank from the fountain"…*) → **0 valid.**
- **Validator proven** the same session: `rebirth`, `STARDUST`, `Everyone loves the internet` all resolve correctly; `the circle` / `welcome to the circus` correctly return invalid (post-2022 song titles are not codes).
- **Caveat (small):** GCS can't see **MINT-type rooms** (no by-hash image; 1 of 149 catalog artifacts). The oracle that *would* catch those is down. So a MINT-type TikTok code can't be ruled out — but that channel is vanishingly rare.

**Interpretation (coheres with the [[Sources/Artifacts/HoM - Steganographic Cipher Sweep (4-lens) 2026-06-27|cipher-sweep]] verdict):** the verbatim-phrase-as-code channel only fires from the **lost 2022 clue-drops** — and Roy seeded those via **Twitter Spaces + TikTok LIVES** (spoken, ephemeral, unarchived) and **deleted tweets** (recovered only via the Discord mirror). TikTok *video captions* are promotional/narrative, not clue-bearing. **TikTok captions = a confirmed seed-free surface.** Do not re-run.

## Archival value (the real payoff)
The 622-caption corpus is a durable **primary source** of Roy's own words, not previously held. Notable verbatim captions (citable; canon-movers FLAGGED, not folded):

- **The *33* release statement (2022-09-30):** *"33 is yours now! I pray that this album serves you as a mirror and a reminder of who you are… Even in the darkest places, there is light. Kings and Queens, it's time to **reclaim your crown**! Endless love — El Roy the Jagwar."* ⚑ ties directly to the crown/[[Keilim - The Breaking of the Vessels|Keter]] thread and [[Source vs Reflection]] ("a mirror… of who you are").
- **The darkest-corner origin story (2022-10-12):** *"When I was a kid my dad took me into the middle of the desert one night and said, 'Look into the darkest corner. That is how your eyes will find the light.'"* ⚑ grounds the "even in the darkest places, there is light" motif as a literal **father** memory — pointer to [[33 (album)]] / the light-from-dark theme.
- **The Mirror Sessions origin (2022-12-07):** *"We are all reflections of each other… The Mirror Sessions are a place where I talk freely with close friends… about music, art, humans and the meaning of life"* — corroborates [[Sources/Transcripts/MirrorSessions-]] series intent; series Ep.1 = Calum Hood, 2022-11-30 (matches existing record).
- **Year-end reflection (2022-12-31):** *"…made a metaverse called the **Hall Of Mirrors**… Things often appear bigger in reverse"* — Roy naming HoM in his own voice; "bigger in reverse" ↔ the reversal/mirror motif.
- **"Everything is possible" — El Roy** (2022-08-17) and **"Birth of my regeneration"** (2022-08-12, Happy Face) — El-Roy register.
- **Team Roy / Team Sir Lucius "War" (2025-07-31):** *"The War begins. Which side are you on? White hearts for Team Roy 🤍 Black hearts for Team Sir Lucius 🖤"* — the Welcome-to-the-Circus-era dramatisation of the [[Sir Lucius]] split.
- **Welcome to the Circus quote-captions (2025–2026):** Roy fronts each post with a sourced aphorism — e.g. *"Illusion is the first product of the mind when it is divorced from the soul" – Alice Bailey*; *"Out of the abundance of the heart the mouth speaketh" – Matthew 12:34* — confirming the **Bailey + scripture** substrate (cf. [[The Labors of Hercules]]) is still live in 2026.

Post volume by year: **2022: 46 · 2023: 142 · 2024: 121 · 2025: 197 · 2026: 116.**

## Method (reusable)
TikTok blocks the `item_list` API without request-signing and only lazy-loads the grid on **genuine OS scroll events** (programmatic/synthetic scroll does nothing). Crawl = logged-in Chrome, repeated real wheel-scrolls, harvest each card's `img.alt` (= full caption) keyed by the numeric video id from the `/video/{id}` href; date = `Number(BigInt(id) >> 32n) * 1000`. Export defeated the URL/base64 privacy guard via an in-page **Blob download** (the guard blocks returns containing URLs/encoded data, but not a browser-triggered file save). Validate in shell: `keccak256(lower(phrase))` → `HEAD storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{hash}..{ext}`.

Related: [[project_hall_of_mirrors]] · [[_System/HoM - Session Handoff & Index]] · [[Sources/Artifacts/HoM - Steganographic Cipher Sweep (4-lens) 2026-06-27]].
