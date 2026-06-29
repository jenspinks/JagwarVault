---
type: artifact
status: stable
citable: true
ingested: 2026-06-27
ingest_source: "Hall of Mirrors artifact, cracked from Roy's 11/28/21 tweet. Code validated via GCS (200) + matched the offline Merkle open-leaf set; artwork pulled from the public GCS bucket."
---
# HoM Artifact — "In my father's shoes" (11/28/21 tweet) — open-leaf crack

**A newly-cracked Hall of Mirrors room** (Jen, 2026-06-27), and a notable one: the clue is a **2021 tweet** — earlier than the previously-documented clue-seeding window.

## The crack
- **Code:** `In my father's shoes` (WITH apostrophe).
- **Leaf:** `keccak256(lower) = 0x08ef97bc8fcaf1c4acaa0e53c2a34c3d3adfa133cd961a9af1cb27fb6ca16544` — this is the **first hash in the 42 still-open Merkle leaves** ([[Sources/Artifacts/Data/HoM Merkle open-leaf targets (42 uncracked rooms) 2026-06-27]]). So this **crosses a previously-uncracked room off the open list** (open count → 41).
- **Artwork:** GCS-valid (jpg, 229 KB) → saved `Media/images/hom-artifacts/socials-finds/in-my-fathers-shoes-apos-08ef97bc.jpg`. **The artifact image IS a screenshot of the source tweet itself** (self-referential: the clue is the tweet; the prize is the tweet).
- **Spelling note:** the **no-apostrophe** form `In my fathers shoes` (as the tweet actually renders it) also resolves on GCS to the **same image** (hash `0xdb550140abb22b…`), but that leaf is **not** in the open-42 — the **apostrophe form is the on-chain open-leaf room.** Both were captured.

## The source — Roy's tweet, 11:08 · 11/28/21 · Twitter for iPhone
A three-line haiku (verbatim, with emoji):
> Midnight crows above 🐓
> One mask hanging on a tree 🌲
> In my fathers shoes 🧬

(Avatar: Roy with the dissolving-water head.) Held in our socials mirror: [[Sources/Artifacts/Data/JT Socials Feed (Discord Circle-bot mirror) 2026-06-27]] (two entries, plain + emoji, 2021-11-28).

## Why it matters
- **Pushes the clue-seeding window back to Nov 2021.** Prior documentation put deliberate clue-seeding at ~Feb–Aug 2022 (the aite_lyds "past ~six months" mechanic, the Wayback/CTHDRL campaign chronology). This room's clue is **9+ months earlier** — Roy was already planting future HoM codes in casual 2021 tweets. So the 2021 stream **is** clue-territory.
- **⚠ Coverage note (corrected 2026-06-28):** this is **not** an unmined gap. The [[Sources/Artifacts/HoM - Merkle coverage proof + 4 known-code recoveries (2026-06-28)|2026-06-28 Merkle coverage proof]] already **line-swept the full Discord mirror back to 2020-12-08** (122,879 seeds → ~1.98M per-line/punctuation/apostrophe-exploded variants) and **already caught this code** (it lists `in my father's shoes` among its hits; room = *"Everybody's Going to Space Now"*). This doc is the **source-tweet provenance** (the 11/28/21 haiku) + the backward-dating insight, confirming that pass. **A per-line sweep of the tweet corpus is DONE back to Dec 2020** — the ~35 still-open leaves resist all local text and need external surfaces (wallet-gated cell-codes tab, mint-time→Julian-date, lost Spaces/lives, untranscribed board handwriting).
- **Register confirmed:** verbatim-tweet-line-as-code, on an *old* tweet — the same channel as the 2022 socials finds, extended backward. The **third line** (not the first/second) is the code; pick the line, not the whole haiku.
- **Thematic:** the **father / lineage** thread (🧬 DNA; "my father's shoes" = inheritance, stepping into the father's role) ties to [[SOL]] / [[Sources/Quotes/Roy IG Post - Half the Man (Father)]] ("my Father's hand / half the man"); the **mask on a tree** is the recurring mask/Fool motif (and a hanged-thing on a tree).

## Method (reusable)
The socials mirror (2020-12 → 2026) is a dated corpus of Roy's tweets. **Mine each tweet's lines → `keccak256(lower(line))` → check the 42 open-leaf set (offline) + GCS.** A match = a crack. Try **per-line** and apostrophe/punctuation variants. **Status: this per-line sweep is DONE back to 2020-12-08** (the 2026-06-28 coverage proof) — the tweet corpus is exhausted at the line level; remaining open rooms need non-text/external surfaces.

Related: [[_System/HoM - Session Handoff & Index]] · [[project_hall_of_mirrors]] · [[Sources/Artifacts/HoM - Merkle Room Map + 2 new finds (fresh-eyes breakthrough) 2026-06-27]].
