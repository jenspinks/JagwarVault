# HoM Merkle coverage — misses summary (2026-06-28)

## Validator
keccak256(lower(code)) ∈ 42 open Merkle leaves (offline, all room types). Live oracle + GCS used only to confirm/capture hits.

## Candidate volume tested (reproducible)
- VERBATIM corpus pass: local seeds=122879; unique variants tested=1976475; open-leaf hits=1
- DERIVATION pass (8 blind-spot lanes + critic + round2): 716732 unique candidates.
- **Combined: ~2.7M unique candidate-variants hashed and tested offline.**

## Result: 5 of 42 open leaves cracked
**Genuinely UNMINTED (new openable rooms) — 2:**
- `in my father's shoes` (straight apostrophe) → 0x08ef97bc — a SEPARATE room from the minted no-apostrophe `in my fathers shoes` (room 111). Opened live (confirmed unminted). Art: tweet-haiku screenshot.
- `no thing creates another thing` → 0x0f738f84 — extracted from an UNSOLVED 2023 symbol-hunt clue ("In a chain of events, no thing creates another thing", Toyah 2023-03-07). Art: "I'm 33" notebook page.

**Already MINTED (reconstruction-gap fills, not new) — 3:**
- `there are things behind things` → Wheels (room 117) · `genesis tree code` → Another Way II Heaven (139) · `the great jagwar` → The Circle (141). Their leaves were "open" only because the reconstruction's code-list lacked the exact form (e.g. typo "behing").

## Failures by category (lanes that returned 0 new)
origin-language/translation (Greek/Latin/Hebrew/Sanskrit of all maxims), Hebrew-letter architecture (beth/lev/babel/bilingual families), architectural/container × four-fates grammar, transformation operators (reverse/mirror/opposite/inward-outward on all known names), body-part × animal matrix (full), ciphers/glyph/special-char/Julian-date, exact-quote beyond the one clue, and the critic's round-2 families — **all 0 new.**

## Conclusion (coverage claim, with receipts)
The **36 remaining open leaves are not reachable by any text-derivation from local corpora** — not verbatim, not translated, not transformed, not architectural, not body-part, not cipher. Consistent with the prior finding: they require an **authenticated/external surface** — the live wallet-gated "I'm 33" sheet cell-codes, the mint-time→Julian-Date derivation, or surfaces not yet reached. Artifacts: candidate_list (lanes/*.txt), tested_hashes_local.csv, hits.csv, known_fills_open.json, normalization_rules.md, this file.
