---
type: artifact
citable: true
status: draft
captured: 2026-06-27
verified_against: ["getMintProof Merkle-proof reconstruction of the full HoM allowlist tree (root 0x88f65411…, height 8, 196 leaves); 2 new codes confirmed live via getMintProof (non-empty proof) AND captured from GCS; sister-site Prismic repos (33-upload/itsyourtime33/33-online/33-bodyparts) line-tested against the open-leaf set."]
ingest_source: "Fresh-eyes multi-agent infrastructure mine (workflow wx5yahwqy, 6 agents) + follow-on seedbank line-test by Code."
---
# Hall of Mirrors — the Merkle Room Map, + 2 new frontier finds (#9, #10)

This is the single biggest structural advance on the HoM since the archive was built. A fresh-eyes infrastructure pass **reconstructed the maze's entire allowlist tree from the inside**, and a follow-on test of a newly-found source layer **cracked two more rooms**.

## ★ HEADLINE — the maze is 196 rooms, not ~160. We now hold the exact hash of every undiscovered room.

`getMintProof` doesn't just say yes/no — it returns the **full Merkle membership proof** for a valid code. Collecting proofs for all 144 known codes lets you **reconstruct the whole tree offline**:
- **Merkle root:** `0x88f65411abb975c30a8abd4711d9edee40777dd2da72adac62b012d158dfd0f4`
- **Leaf formula:** `keccak256(lowercase(code))`, OpenZeppelin sorted-pair internal hashing, **tree height 8**.
- **196 genuine leaves** (rooms). 144 cracked; the rest had no known code.

**This is a permanent, network-free validator.** A candidate code is valid **iff** `keccak256(lower(code))` is a leaf under that root — testable at unlimited scale with zero rate-limit. It survives total infra decay (the root is a constant). It also **covers ALL artifact types** (image/video/audio/mint) — curing the old GCS blind spot (GCS only had images).

**Self-proving:** the reconstruction independently predicted a room at leaf `0xfd0a87e2…f41add55` with no known code. A parallel session then cracked that exact leaf as **`Gnothi Seauton`** (artifact #8). Two methods converged on the same hash — the tree math is real, not inferred. `[G]`

## ★ Two NEW frontier finds cracked this session (#9, #10) `[G]`

The fresh-eyes pass surfaced a **whole new source layer**: four sister-site Prismic CMS repos never in the old playbook — **33-online, itsyourtime33, 33-upload, 33-bodyparts** (the realm-portal mini-sites). `33-upload`'s settings doc holds a master clue-index — a `consciousness_link6.bin` terminal block of ~156 seeded phrases (the literal "ingredients of SARAVI's upload": body-parts, archives, traits, links). Most lines are **already-known codes** (Stardust, Ra-link, Sa-link, VI link, TT283, 167 Octa, L578, C884, Left hip of a dove, Cranium of a swan…). Testing **every line** of all four repos against the open-leaf set + getMintProof cracked two that had fallen through prior sweeps:

1. **`Stomach of a cat + 9 lives`** → leaf `0xe0c8f894…554af7c1f` · getMintProof **proof_len 7** · **not in catalog** · image (PNG) → `Media/images/hom-artifacts/stomach-of-a-cat-9-lives-0xe0c8f894.png`.
   - **The art:** a hand-drawn Roy notebook sketch — a cat's head under a crescent moon, captioned **"Gabriel the Willow CAT (standing on the moon)"**, labelled "9 years" and "sandals." Cat + nine lives + moon. A sibling to the body-part/"Concealed Generations" (`unseen`) family but rendered as a character.
2. **`Ryan Flemming_early archives`** → leaf `0xaebcbd27…82a8aef8c` · getMintProof **proof_len 8** · **not in catalog** · image (JPG) → `Media/images/hom-artifacts/ryan-flemming-early-archives-0xaebcbd27.jpg`.
   - **The art:** an early-era photograph of two long-haired young men against a stormy sky/sea, one pointing at the lens — an "early archives" duo promo from Roy's pre-Jagwar band history (the list is dense with `…_archive`/`…_files`/`_complete` early-career entries: Eye Alaska, Chain Reaction, B.W. original master, Atlantic A&R notes, Fearless/Republic Records).

**Why both fell through the cracks:** the chain-link agent's exhaustive offline sweep never had the sister-site repos in its corpus (only 33-universe); the adversarial agent had the list but only spot-tested a few lines (the link/number/special-char ones), not the body-part/archive family. A clean line-by-line test of the full master index caught them.

### Reconciliation (not a new find)
- **`Pituitary gland of an owl`** validates (proof_len 8) and sits on open-leaf `0xc982…deb07`, **but it is already in the catalogue.** The reconstruction agent had tested it as *"Pituitary **glad** of an owl"* (a typo → empty proof) and wrongly bucketed its leaf as "open." It was never undiscovered — just mis-spelled in one test. (Lesson: a handful of the "46 open" leaves may be known artifacts the agent mis-parsed; verify novelty against the manifest, as done here.)

## Corrected validator mechanics (supersedes parts of the old handoff) `[G]`
- **GCS-by-keccak is NOT dead.** Three agents reported "403 for everything" — but they used the **wrong URL form** (`/artifacts/0x{hash}{ext}` or single-dot). The correct **double-dot** path still returns **200** for image artifacts: `storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{leaf}..{ext}`. (Re-confirmed 200 this session on board-label hashes AND both new finds.) GCS images remain **pre-uploaded** (catches undiscovered image codes); its only blind spot is still **mint-type** rooms.
- **getMintProof is live** — but the **local DNS resolver SERVFAILs** the function host. Reach it with `curl --resolve us-central1-jagwar-twin-33.cloudfunctions.net:443:216.239.36.54`. Signal: **non-empty `proof` = real**, `[]` = fake (`success:true` is returned for everything, so it is NOT the discriminator). Keep ≤1 req/5s.
- **Best validator now = the offline leaf-set.** No network, no throttle, all types. Use getMintProof only to *confirm* a fresh hit.

## The 42 still-open rooms (target list) `[G]`
Of the reconstruction's 46 "open" leaves: −3 now cracked (Gnothi #8, Stomach #9, Ryan #10), −1 reconciled (Pituitary, already known) ⇒ **42 confirmed-existing rooms whose codes are still unknown.** Machine-readable: [[Sources/Artifacts/Data/HoM Merkle open-leaf targets (42 uncracked rooms) 2026-06-27]]. Any future clue corpus can be tested against these instantly (`keccak256(lower(x)) ∈ set`).

```
0x08ef97bc8fcaf1c4acaa0e53c2a34c3d3adfa133cd961a9af1cb27fb6ca16544   0x0d83fc8ad339c56a172c49eb32ae0300cb79669a9adad4163afd4fec31e8f6b3
0x0da54f73a42dae5dc1942f7856d6ca7dbcb5927afbab5e4c48edb938d3dc7d97   0x0f738f8476afaa7e7e30287f5dbc513b5faa27ae87ed35e6fc2e4e74c4dc3495
0x14a59d492b4072cb147ff4ef85cd2413a467d2f0e0452856ff4be2c138041477   0x18c56a31f5e3c46aebf77c15b674c6c23d5b93fc6d3a5a6860e6e240d839b45d
0x1fd015c49b6ed9cca56425279813c458badab5ca37c7587de8d19c58538a7954   0x2dbd72fe2902c9a682c650d24f8f05686ff1d2c64975da7b2b0c7a20dfac77b4
0x3252cfd9b25b3689a77b666e1398635a0ccabf445c235acd94c0620a88eb28e5   0x442795f9f776aa7cc558db168eab94beaadf5b731f5fbdc21c184825302993c8
0x4b240a5ed39beed56c834c6004a6768a665511d226144682f8a55d0fcda7bcd1   0x4d3780341d67bc3068de11983cb1ab8a2de2c5fdcd18cca5a4e69464bc75d2fc
0x51f28bfcfda3b51406f62a37563c55c183d19edf4b4bc914535fb7f3f939932c   0x53d191a03cbbb914ec3f6bb0e23d7b409c49e6990c897546f20b3cb6bef32d0a
0x5ae904bccf70e5292458765f422629f7ca1e6ea12de1b890af2753770f89fe4d   0x665a8e1b3a29ee0c386b7ffc0f7a261de22432d5cd7d379c2787f215230f3fd3
0x68c9b388ba19a64d11ef0a70f507744cee5b4ce2ceff71b67ba50e9b5ca2d5db   0x6d687a8d0c915f6d37c2dc8bc12f063efdc554daae3366090d1b8d01b2ab5388
0x6ed41c56617941cf75cf6d438f882d3063cf5aa5e4185cf1cc049435e3844861   0x768e70682bd40f357a257e7c49818d281da38c521f930d881ccf22b194e86bc4
0x7ceb39539bad72b2f6c2e2a7285bb55f76444f341e9e95b067356e0c246f332c   0x7d7a9392bd67e87c70e5b8d7fd1148dbd1dfade4419de1ff1b2bdbec4feb0d56
0x80e7c0ff92854e549c657338f29ce599c499efd5825d872797a10b254838ab9d   0x83ff23ddec17d7593d0fbd3bd3d52c472fd08f74f332849627bdc9b8b0495d45
0x854e7070544f339eed639d61ad53c8f7dda8c94d5542d150f0e72b65cdf8c32b   0x8740ff84ed3e2d48b19c39f5dc1223c601a6248a139d03f3357c08f1e61a9ed0
0x8cbe4d1de5623190bfa5b4a7fc80b9594835ea9b42d9e33ed6acc9010e8205d8   0x93918ddc41dd33678bd49a39dc945fa4bbec424f0535888183c320b2f4676766
0x99996623416ad886ae8c3930b5846346aec5d6190cf746d2def1292d0a8523e4   0x99f4ee192b44838a02686bb58026294105924787cdfb143891cfb025197e4064
0x9b785fc05ef6de1d6a959f8f3858fde00b5497691e2ce5c4fb15a2a2eec170c6   0xac9f2eb2401875e22837d494811b38df27d81045fb7d66466e68768f781ef4d5
0xd72324e351776ee5840e3b87bb987c14606ed3b8aeeaa487168f806be43c3a36   0xd8db3530120bf6473c0036f47e2fe1fe75a3ea9817d7761ff057e488c50be5f4
0xda3b774d9bc2b19c222a4b16aa1383d348a462529a077a0af41934bbcbf239f5   0xdd5b5bd45cdd9729dee20566a90d5ef19dc4af12a82dea2678564f40a01fd919
0xdd61bc935fe631e6f7ffb4fac4e82691aaf90cef79711283ddff6bd8d3536148   0xde26172bd48b6d7d6ba9b52019f1ed7b21c2240c77d8d5d615dcaa6b63e63340
0xe163466b4452ac1ef0ede8ddf1e2d0f1b3586c338781430def634c8ee73ec567   0xe338a9c6ddf07478ba6de129461f84bbbc4c3183f8e1cc9d40c3ac57a3de4bb1
0xe87d384acd435e06d9244b8ca9236ca5848cf26d0d104c28647286a82c56d175   0xf112c376c671da3d8e73e7178cd67e62aadebbbbb1b338fb0acf214d7bdc7ac9
```

## What's exhausted vs. still open `[W]`
**Exhausted (0 new beyond #9/#10):** every locally-reachable text corpus — all sister-repo phrases + n-grams (8,475 candidates), the full consciousness_link master list, corrected-form / other-language retries (Delphic maxims, El Roi forms, tell-a-vision, summation-bird), the Mac option-key cipher (`ß†ƒ`="stf"=Subject To Flooding; `Çå¨†ˆø˜ ®ø¥`="caution roy" — neither a code). The 42 open codes are **not verbatim in any reachable corpus** — they need a *derivation* or an *authenticated/external surface*.

**Still-open veins (require Jen / a human action), in priority order:**
1. **Wallet-gated "I'm 33" spreadsheet hidden tab** — the Journey CMS doc states verbatim *"Connecting a wallet unlocked a new tab in the spreadsheet."* Needs Crown #67 in an authenticated browser session; can't be fetched anonymously. This is the literal *"…and also themselves"* answer-space (books, childhood memories, mythology, texts from friends, previous bands). **Top human-gated lead.**
2. **Mint-timestamp → Julian Date → code.** itsyourtime33 copy: *"note the time you minted, this may provide valuable information"*; 33-upload links the NASA Julian Date Converter as a *solver tool*; the live "Who Will Come" sheet logs exact per-wallet mint timestamps. A documented, never-tried derivation.
3. **The itsyourtime33 "Thoughts" sheet combinatorial decode** — an explicit AI-musical-scale (F C D E F F# G A A# B → stages 1–10) + 10-stage trait tables; the *note-sequence → stage → trait* mapping is untried (raw trait words already miss).
4. **On-chain `tokenURI` enumeration** of the artifact contract `0x84F8…92` (mainnet, anonymous) — tells which of the 42 open leaves were *actually minted* vs. reserved/unused allowlist entries, before investing human effort.
5. **Live-upload VOD frame-sweep** (5/16–5/18 desktop streams, 6/11 SARAVI Genesis) — the Journey doc says codes were seeded in on-screen desktop folders / un-emptied Trash. A video-frame register, if the VODs survive.
6. **Recover dead `darkness.jagwartwin.com`** (NXDOMAIN, zero Wayback) via archive.today / the local 2022 archive — a whole lost realm portal.

## Honest verdict `[W]`
The frontier was **not exhausted** — it was *undercounted*. We went from "~160 rooms, ≈7 finds, near-done" to "**196 rooms, 42 confirmed-open, a permanent offline validator, and +2 fresh finds this session.**" But every *anonymous automated* method now returns 0 — the remaining 42 are gated behind **derivations or Jen's authenticated actions** (esp. the wallet-gated sheet), not behind more clever scraping.

## Cross-references
- [[_System/HoM - Session Handoff & Index]] — frontier now 10; mechanics corrected here.
- [[Sources/Artifacts/HoM Discord - Live events, lost content & unsolved leads (community archive) 2026-06-27]] — the Gnothi Seauton #8 sibling find + the community-leads method.
- [[Sources/Artifacts/Data/HoM Merkle open-leaf targets (42 uncracked rooms) 2026-06-27]] — the machine-readable target set.
- [[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]] — the wallet-gated hidden tab (lead #1) lives here.
- [[feedback_hom_is_meant_to_be_solved]] — still curated-pool solving, not answer-key extraction.
