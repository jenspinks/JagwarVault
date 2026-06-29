---
type: artifact
citable: true
status: draft
captured: 2026-06-26
verified_against: ["Unlocked 2026-06-26 by Jen entering the code `A BRIDGE BETWEEN WORLDS` (validated via the maze's getMintProof cloud function — returned a non-empty 8-hash Merkle proof = a REAL code). Room 0x5640402ea6efb88db35d187a69630aaa8f154ac1f1710d3897733ca31f6a7f16; image pulled from the public GCS bucket. NOT among our 134 prior captures — newly surfaced."]
ingest_source: "A previously-uncaptured Hall of Mirrors artifact — a personal photograph, unlocked via the v2/master candidate list."
---
# HoM Artifact — Grandma VI in the hospital (code: A Bridge Between Worlds)

**A tender, personal photograph** (iPhone 6, dated **2015-05-09**): **Roy** — in a cap and plaid — bent over an elderly woman in a **hospital bed**, holding her hand. She is **Grandma VI** (the recurring family figure: *Grandma VI's Cow* #6, *Grandma's Song* #36, *Hammy VI* #100). A near-end-of-life moment.

- **Code:** `A BRIDGE BETWEEN WORLDS` — validated via the maze's `getMintProof` endpoint (non-empty Merkle proof = a real code). **NB:** this is the *title* of catalog artifact #122 (a different room, whose code is `B1030`), so `A BRIDGE BETWEEN WORLDS` is a **chain-link-style code** pointing to *this* Grandma-VI photo, not to #122.
- **Room:** `mirrors.jagwartwin.com/rooms/0x5640402ea6…f6a7f16`
- **Media (public GCS, JPEG 3264×2448):** `…/artifacts/0x5640402ea6…f6a7f16..jpg` → saved local: `Media/images/hom-artifacts/bridge-between-worlds-0x5640402e.jpg`

## Reading (tiered)
- **`[G]` the image:** Roy at his grandmother's hospital bedside, holding her hand, May 2015. *(This same photo appears on Roy's "I'm 33" board — the personal-memory layer.)*
- **`[W]` the code as meaning:** *"A bridge between worlds"* = the **threshold of life and death** — a grandmother near the end, the living holding the hand of the dying across the bridge. The maze pairs the most public-sounding phrase with its most private image. Ties the **death/rebirth** motif (the catalogue's spine) to a literal, intimate instance.
- **`[~]`** the Grandma VI / matrilineal-source thread (the divine-feminine-as-origin register; cf. [[Roy on Influences]] the mother-channel, [[Mary]]).

## Mechanic confirmed (this unlock)
The unlock **succeeded without the crown / without any on-chain transaction:** `getMintProof` validated the code → `updateArtifactsEP` returned `{"success":true}` (the discovery is **recorded in Firestore**) → the room opened → the media loaded from GCS. The on-screen **"error" was a cosmetic `404` on a malformed background-image URL** (`/rooms/&w=1920&h=1920`), NOT the unlock failing. **Only the final mint-TO-OWN (the NFT) needs the crown** — opening/recording/viewing a room does not. So discovery + archival work crown-free.

## Cross-references
- [[Sources/Artifacts/HoM - Master Brute-Force Candidates (2026-06-26)]] — the list that produced the code.
- [[Sources/Artifacts/HoM Artifact - RAPhael the Christmas Spider (Pleiades Honey Bee) 2026-06-26]] — the other frontier find.
- [[Roy on Influences]] · [[Mary]] — the Grandma-VI / feminine-source thread.
