---
type: artifact
citable: true
status: stable
captured: 2026-06-27
ingest_source: "The Jagwar Twin Discord #🐦socials channel — an automated 'Circle' bot mirror of every @JagwarTwin Twitter/X, YouTube, Instagram, and Twitch post, 2020-12-08 → 2026-06-27. Pulled in full via the Discord channel-messages API in Jen's logged-in browser session. The bot embeds preserve each post's text AT POST TIME, so they survive deletion from the source — making this the durable archive of Roy's (largely deleted) Twitter record."
---
# JT Socials Feed — Discord `#🐦socials` Circle-bot mirror

**The durable archive of @JagwarTwin's social posts.** The Jagwar Twin Discord (`#🐦socials`, channel `785690058476617768`) runs an automated bot named **"Circle"** that mirrors every Twitter/X, YouTube, Instagram, and Twitch post into Discord as a rich embed. Because Discord stores the embed (author, title, **full post text**, url, timestamp) **at the moment of posting**, these survive deletion from the source. Roy's live X record is largely **deleted** — so for ~2,400 tweets, **this is the only durable copy.**

- **Raw data:** `Sources/Artifacts/Data/JT Socials Feed (Discord Circle-bot mirror) 2026-06-27.json` — **3,770 records**, one per mirrored post. Fields: `id` (Discord msg id), `ts` (ISO timestamp), `h` (host), `a` (embed author), `t` (title), `d` (description = the post text), `u` (url, protocol-stripped).
- **Span:** **2020-12-08 → 2026-06-27.**
- **Breakdown:** **2,413 Twitter/X · 644 YouTube · 640 Instagram · 19 Twitch · 54 other.**
- **By year (tweets):** 2020 ×18 · 2021 ×384 · 2022 ×645 · 2023 ×381 · 2024 ×300 · 2025 ×581 · 2026 ×104.

## Why this is a big deal
1. **Recovers the "unrecoverable" 2022 campaign window.** **341 tweets from Feb–Aug 2022** are here — the exact HoM clue-seeding window I'd previously logged as *lost* (deleted from X, gone from Wayback's React-shell era; see [[Sources/Artifacts/HoM - 2022 Twitter & Campaign (Wayback recovery) 2026-06-26]], which recovered only 2 of 6 target tweets). The mirror has the whole period in clean text.
2. **It's a live HoM discovery engine.** Harvesting verbatim tweets from this archive and validating them against the maze oracle **immediately surfaced 3 previously-uncaptured artifacts** (`Know how to spell the name of the song`, `I want to be a bridge between worlds`, `Were you raised in a barn?` — all 2022 tweet-codes) → [[Sources/Artifacts/HoM Artifacts - 3 frontier finds from the Discord socials mirror (2026-06-27)]]. The [[Sources/Artifacts/HoM - Steganographic Cipher Sweep (4-lens) 2026-06-27|cipher sweep]] found 0 new artifacts from lyrics/known-tweets; the *deleted tweets* found 3.
3. **Full social provenance for canon** — every aphorism, lyric-preview, lore-drop, and release announcement Roy posted across six years, timestamped, in one file (incl. the `ELEPHANT TORTISE EAGLE ATLAS` riddle, "Riddle for your noodle: how do you reverse a mirror?", "The answer is in all of your reflections," and the SARAVI "scattered clues… plant seeds… happy hunting" invitations).

## Validation pass (2026-06-27)
Extracted **5,087 unique candidate phrases** (full texts + lines + sentences of all 2,413 tweets) and validated every one against `getMintProof`: **23 valid** — **20 already-known** HoM codes (confirming the durable archive holds the real clue-tweets verbatim) + **3 new** (the frontier finds above). Confirms the **verbatim-phrase-as-code** channel and the archive's recall.

## Method (reusable)
Discord channel-messages API in Jen's logged-in browser (Chrome MCP): grab the auth token via webpack module scan (`m.exports.default.getToken()` → the string token; the right module is the one returning a **string**, not an object), then paginate `GET /api/v9/channels/{ch}/messages?limit=100&before={lastId}` (handle 429 via `retry_after`). Extract `embeds[0]` per message. Strip `https://` from returned text so the browser-tool privacy guard doesn't scrub URLs. Export the full set via a single in-page blob download → `mv` from `~/Downloads` into the vault. **The same bot also mirrors YouTube + Instagram + Twitch** — those embeds carry video titles, full descriptions (incl. lyrics), and IG captions, all durable too.

## Riddle-hunt — COMPLETE (2026-06-27, 5-agent workflow + mechanical sweeps)
Swept the full tweet corpus across every cipher channel; **0 additional new artifacts** beyond the 3 verbatim finds. Verdicts:
- **Reversal / mirror** (the big lead — "how do you reverse a mirror?", "the answer is in all your reflections", "think backwards", "Google backwards is El Goog", etc.): **0 new.** Mechanically reversed every word/phrase/known-name (~5,982 + ~1,200 candidates) → only re-found known codes. **`Rorrim Ehtni Lived` ("Devil in the Mirror" reversed) is the LONE canonical reversal code** — the reversal motif is a **meta-instruction to read *existing* artifact text backwards** (cf. community solving "Alice 211" as backwards-speak), NOT a generator of fresh codes. Roy's reversal obsession is philosophical, not a live word-cipher.
- **Question-riddles** ("what is the center of the universe? is there a point?", "what is the point?", "what is the White House?"): **0 new.** Mechanical insight — the trailing **`?` is significant**: `WHAT IS IT THAT YOU SEEK?` validates, `WHAT IS IT THAT YOU SEEK` (no ?) does not. Question-codes are **verbatim-exact** (punctuation included).
- **Numbered riddle + spell-the-song** (2025 "4 lessons"; `Know how to spell the name of the song` → SOL / song-title spellings): **0 new.** The "4 words → ELEPHANT TORTISE EAGLE ATLAS" pattern (2023-02-09) is the only solved numbered-riddle; no song-name spelling validated.
- **Glyph (Option-key)**: **0 new** — re-confirmed the known glyph codes (`µå®∂¨˚`=MARDUK, `∆∑†`, `霊的な愛`); the maze stores the **raw glyph string**, not the decode.
- **SARAVI clue-lore** ("scattered clues / planting seeds" + the "UNLOCKED Artifact N {code: X}" announcement tweets): **0 new** — the announcement tweets just re-confirm codes Roy posted publicly.

**Net:** the **only** new-artifact-producing channel in the social corpus is **verbatim deleted-tweet text** (→ the 3 finds). The riddle channels confirm mechanics but are fully harvested.

## Full-corpus cipher sweep — COMPLETE (2026-06-27, all platforms + all lenses)
Re-ran the cipher suite over the **entire corpus** (all 3,770 posts, incl. the previously-unchecked **1,284 Instagram + YouTube** posts), **6,794 candidates** validated against the oracle (0 errors) with verbatim + line + sentence + **acrostic** + **capitalization** lenses. Result: **22 valid = 19 known codes re-confirmed + the same 3 frontier finds (all from tweets); 0 genuinely new.** **The Instagram + YouTube posts produced ZERO codes**, and the acrostic/capitalization lenses produced nothing. **Conclusion: the socials are exhausted as a code source — every validatable code traces to a 2022-era *tweet*; the IG/YouTube content and the recent 2025–26 aphorisms are philosophy, not clue-seeds.**

## Open leads (remaining)
- **Instagram Stories gap:** the Circle bot mirrors only IG **feed posts** (`/p/`) — confirmed all 640 are feed, **zero Stories**. If Roy "posts daily," those are Stories (ephemeral, 24h), NOT captured here. Recover via his IG **Highlights** (saved Stories) if wanted — separate capture method.
- The YouTube/IG **descriptions** carry lore/lyrics (not codes) — uncrawled for *content* (vs codes).

## Cross-references
- [[Sources/Artifacts/HoM Artifacts - 3 frontier finds from the Discord socials mirror (2026-06-27)]] · [[Sources/Artifacts/HoM - Steganographic Cipher Sweep (4-lens) 2026-06-27]] · [[Sources/Artifacts/HoM - 2022 Twitter & Campaign (Wayback recovery) 2026-06-26]] · [[project_discord_ingestion]] (the by-author Discord crawl; this is the by-channel feed mirror).
