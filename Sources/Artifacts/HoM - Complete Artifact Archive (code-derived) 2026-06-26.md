---
type: artifact
citable: true
status: stable
captured: 2026-06-26
ingest_source: "The complete Hall of Mirrors artifact archive — every catalog artifact pulled directly from GCS by deriving its hash from its code. Crown-free, mint-status-independent, decay-proof."
---
# HoM — Complete Artifact Archive (code-derived)

**Every artifact in the Hall of Mirrors, preserved locally.** Built by the derivation cracked 2026-06-26: an artifact's GCS object name = **`keccak256(lowercase unlock-code)`**, so each of the 149 catalog codes resolves directly to its media file — no crown, no minting, no room-opening, independent of "already minted" status.

- **Folder:** `Media/images/hom-artifacts/complete/` — **148 files, 523 MB**, code-indexed as `room#-NAME-hash.ext`.
  - 89 images (jpg/jpeg/png) · 49 videos (mp4) · 10 audio (mp3).
- **Manifest:** `Media/images/hom-artifacts/complete/_manifest.json` (room · name · code · hash · ext · ctype · bytes).
- **The 1 gap:** room 11 **Happy Face (Mint Room)** (code `WORLD GONE MAD`) — `keccak(lower(code))` does not resolve on GCS; it's a **MINT-type** room (the launch's first mint room of 33 Happy Face NFTs), stored differently. The only catalog artifact not captured this way.

## The reusable method
```
artifact media = storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{keccak256(lowercase code)}..{jpg|png|jpeg|mp4|mp3}
```
Validate any candidate code with `getMintProof?code=<CODE>` (non-empty `proof` = valid), then derive + fetch. **Confirmed across all media types** (incl. the audio artifacts, which are on GCS this way as well as IPFS).

## Beyond the 149 — the frontier (undiscovered/available) finds
Artifacts whose codes are **valid but were NOT already minted** (genuine discoveries, found by validating the artifact-name + board-label pools):
- **RAPhael the Christmas Spider** (`PLEIADES HONEY BEE`) → [[Sources/Artifacts/HoM Artifact - RAPhael the Christmas Spider (Pleiades Honey Bee) 2026-06-26]]
- **Grandma VI hospital** (`A BRIDGE BETWEEN WORLDS`) → [[Sources/Artifacts/HoM Artifact - Grandma VI hospital (code A Bridge Between Worlds) 2026-06-26]]
- **Grey in A# (dove + chalice)** + **Stardust (star-creature)** → [[Sources/Artifacts/HoM Artifacts - Grey in A# + Stardust (validator batch) 2026-06-26]]

## Notes
- The `complete/` folder is the **canonical** code-indexed set; the earlier scattered captures (`Media/images/hom-artifacts/*`, `Media/video/hom-artifacts/*`, `Sources/Artifacts/Audio Files/*`) are now redundant supersets and can be pruned at leisure.
- Crown/mint remains broken (contract `0x69e8e86…14D0`, "Minting is no longer available"), but it is **irrelevant to preservation** — this archive needed none of it.

## Cross-references
- [[Sources/Artifacts/Hall of Mirrors - Artifact Gallery (catalog) 2026-06-25]] (the 149 codes) · [[Sources/Artifacts/HoM - Master Brute-Force Candidates (2026-06-26)]] (the validator + derivation).
