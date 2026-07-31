---
tier: 1
source_type: on-chain NFT metadata (ERC-721) + IPFS
captured: 2026-06-26
---

# Hall of Mirrors — Audio Artifacts (NFT metadata + IPFS files)

The 13 **audio**-type artifacts in the Hall of Mirrors, captured 2026-06-26 by resolving the on-chain NFTs rather than the (crown-gated) gallery. The gallery cards expose **no** audio — only a generic room backdrop. The real, durable source is the NFT layer:

- **Contract:** `0x84F89f7bAcb20970073Be33F22847e58fbe78992` on **Ethereum mainnet** — `name() = "Jagwar Twin - 33 [Artifacts]"`.
- **tokenURI** → `https://meta.jagwartwin.com/artifacts/{tokenId}` (public ERC-721 metadata JSON).
- Each metadata's `audio_url` / `animation_url` is an **IPFS CID** — the actual audio file, content-addressed and permanent (survives the decaying mirrors.jagwartwin.com backend).
- Fetch any file via a public gateway: `https://ipfs.io/ipfs/{CID}` (or `https://{CID}.ipfs.dweb.link`, or `https://cloudflare-ipfs.com/ipfs/{CID}`).

The metadata `description` field carries each artifact's **unlock code** and **"File under"** realm — a primary-source corroboration of the community [[HoM - Deep Dive board (room #→ name → code) 2026-06-26]] codes.

| Room | Title | Type/realm | Unlock code (from NFT desc) | File under | IPFS CID (audio) |
|---:|---|---|---|---|---|
| 1 | Logos | audio/darkness | East is Everywhere | From Darkness | `bafybeiad4vp4itrubtupbhm53jtzfec7ao6es4wi5mmec7fdtubrsetdau` |
| 2 | An Aged Aged Man | audio/seen | Alice 211 | Seen Things/Illumination | `bafybeicpcmlkvkf66sth7qoae3r5beyaegh3w66q4t5pduwwi2c2abbkwu` |
| 3 | 33 (The Death Of Me) | audio/appearance | TT283 | Window Of Appearance | `bafybeidz4n5lse3iz2vkhppmprxvnysdtxpqm2m7s7eyczl4h63porhqci` |
| 4 | O (444demo) | audio/time | Enso | Time Garden (22:1) | `bafybeidaz4diuuhkway7qbes2hjagvoxxsovv3dy2lhr25kwmckm44tevm` |
| 6 | Western Woods | audio/phantoms | 3233 Western Woods Dr | Phantoms of the Past | `bafybeicenzrbovwwoagfwl3c43oi7gkycrz75crto3zhjx653srbk5f6sq` |
| 12 | Creation w_Aubs | audio/phantoms | C884 | Phantoms of the Past | `bafybeidx3e4uaaavfxb23rqjsnkkwopzequvbpbclrgiozpipiotaplrxq` |
| 17 | Devil In The Mirror | audio/phantoms | Rorrim Ehtni Lived | Phantoms of the Past | `bafybeifak73jxx3afbybdisrz74mnyj6o2guhhhdsdpem6ygg2h44eqjwa` |
| 36 | Grandma's Song | audio/unseen | The Lightning Flash | Unseen Things/Concealed Generations | `bafybeiaztcgj5dxpzmzvs5tfz5hfbohannglz5e46hvch7fogdmbst4ewq` |
| 60 | The Future (2010 demo) | audio/unseen | FearLove | Unseen Things/Concealed Generations | `bafybeibwhmbeye2gg5e6eab2lgial3rlp73dx4o35rgvlw6iw5rxyrjozq` |
| 73 | Song Of The Ring (Voice Memo)🐆🧬 | audio/genesis | 0 | Genesis Formula | `bafybeighytvvtxfa4koghv4iyms267vwytqaxms2fap5odv3w27dhcbouu` |
| 109 | Antarctica (Lost Song) | audio/unseen | çå¨†ˆø˜®ø¥ | Unseen Things/Concealed Generations | `bafybeigbz34gex4k5drahoanutc6quarejfmnfwfwzgop25icjal2iei2q` |
| 116 | Everybody's Going To Space Now | audio/unseen | Everybody's Going To Space Now | Unseen Things/Concealed Generations | `bafybeih33rljbe2mpend27yi7imwzteaxapzdvvxf4ww4s7r2qbaoi66si` |
| 136 | House Of Spells (Cuz_idea) | audio/unseen | House Of Spells | Unseen Things/Concealed Generations | `bafybeibxsbhqtev4wh5xovoc3hkxxuhms6qorvzb2eextroi7gxydrjmtm` |

## Notable

- **Room 6 "Western Woods" code = `3233 Western Woods Dr.`** — resolves the cell left **blank** on the Deep Dive board, and refines the handoff's tentative "Western Wood Dr." These are minted NFTs (tokens 3 & 6 exist on-chain), so the two "genuinely-new" artifacts from the 06-26 handoff are in fact part of the minted set — they were simply absent from the 06-25 gallery-DOM crawl.
- **Room 3 "33 (The Death Of Me)" code = `TT283`** — confirms the Deep Dive board.
- **Room 109 "Antarctica (Lost Song)" code = `çå¨†ˆø˜®ø¥`** — the Option-glyph cipher, matching the Deep Dive board's `ÇÄ✝\`0"®¥` (transcription variants of the same glyph string).
- Several are **unreleased Roy demos**: *The Future (2010 demo)*, *Grandma's Song*, *O (444demo)*, *Song of the Ring (voice memo)*, *Antarctica (Lost Song)*, *Creation w_Aubs*, *House of Spells (Cuz_idea)* — archival priority given the ARG's decay.

## Audio files — DOWNLOADED ✅ (2026-06-26)

All 13 files pulled from IPFS (via the `gateway.pinata.cloud` gateway) into `Sources/Artifacts/Audio Files/`, named `Room {N} - {Title}.mp3`. Total ~48 MB; all verified as real MP3 (ID3 v2.2/2.4). The CIDs above are permanent, so the files can be re-pulled from any IPFS gateway if ever lost.

| Room | File | Size |
|---:|---|---:|
| 1 | Room 1 - Logos.mp3 | 0.74 MB |
| 2 | Room 2 - An Aged Aged Man.mp3 | 6.6 MB |
| 3 | Room 3 - 33 (The Death Of Me).mp3 | 2.4 MB |
| 4 | Room 4 - O (444demo).mp3 | 6.6 MB |
| 6 | Room 6 - Western Woods.mp3 | 2.7 MB |
| 12 | Room 12 - Creation w_Aubs.mp3 | 5.7 MB |
| 17 | Room 17 - Devil In The Mirror.mp3 | 1.2 MB |
| 36 | Room 36 - Grandmas Song.mp3 | 3.3 MB |
| 60 | Room 60 - The Future (2010 demo).mp3 | 6.6 MB |
| 73 | Room 73 - Song Of The Ring (Voice Memo).mp3 | 2.6 MB |
| 109 | Room 109 - Antarctica (Lost Song).mp3 | 4.0 MB |
| 116 | Room 116 - Everybodys Going To Space Now.mp3 | 4.1 MB |
| 136 | Room 136 - House Of Spells (Cuz_idea).mp3 | 3.6 MB |

## Transcripts + ear-review ✅ (2026-07-30/31)
All 13 room files + the Sound.xyz Sun & Moon demo are **transcribed** (3-pass Whisper + Demucs vocal isolation, with a Parakeet cross-architecture check on Room 36) and **ear-reviewed in full by Jen** — per-file reconciled drafts + a machine-vs-ear verdict table live in `Sources/Artifacts/Audio Files/Transcripts/` (`citable: false`: cite the room audio, never the transcript). Adjudicated source pages: [[HoM Audio - The Circle, four states (Rooms 4 + 73) 2026-07-31]] · [[HoM Audio - 33 (The Death Of Me) (Room 3) 2026-07-31]] · [[HoM Audio - Grandmas Song, the four-prayer stack (Room 36) 2026-07-31]]; synthesis: [[Brain/Media/The vocal autobiography (the audio stratum)]].
