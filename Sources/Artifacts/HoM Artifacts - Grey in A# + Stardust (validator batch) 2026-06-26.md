---
type: artifact
citable: true
status: draft
captured: 2026-06-26
verified_against: ["Found 2026-06-26 by validating the artifact-NAME + board-LABEL pool against the maze's getMintProof endpoint; both returned non-empty Merkle proofs = real codes. Artifact hash derived as keccak256(lowercase code) (rule confirmed on two known code→hash pairs), then pulled from the public GCS bucket. Neither was among our prior captures."]
ingest_source: "Two previously-uncaptured Hall of Mirrors artifacts, surfaced by the automated name/label validation pass."
---
# HoM Artifacts — "Grey in A#" + "Stardust" (validator batch)

Two new frontier artifacts, both unlocked by **artifact-name chain-link codes** (a name that is itself a valid code for a *different* room).

## `GREY IN A#` → a dove on a chalice `[G]`
- **Code:** `GREY IN A#` (the title of artifact #53, whose own code is `PITUITARY GLAND OF AN OWL` — so the name is a chain-link to this separate room). Validated (8-hash proof).
- **Hash / media:** `0xd47582489cfe…ddb13510..jpg` → `Media/images/hom-artifacts/grey-in-a-sharp-d4758248.jpg` (JPEG, 4019×5408).
- **The image:** a fine-art photograph — a **white dove** perched on the rim of an ornate **Tibetan ritual chalice / butter-lamp**, against pure black. **Dove + grail/cup.**
- **`[~]` reading:** the **dove** (peace / the Spirit / Venus — cf. `VENUS IS A DOVE` #25, `LEFT HIP OF A DOVE` #75) atop the **sacred vessel** (the grail / communion cup / "I'm just a vessel for God" — the Keilim vessel). Spirit resting on the vessel; A# = a musical key (the artifact's "grey in A-sharp"). → [[Keilim - The Breaking of the Vessels]] · [[Mary]] (dove/feminine-spirit).

## `STARDUST` → a star-creature sketch `[G]`
- **Code:** `STARDUST` (the title of artifact #98, whose own code is `VIBES` — again a chain-link to a separate room). Validated (8-hash proof).
- **Hash / media:** `0x7e1c58dd3c…9274f8ee..jpeg` → `Media/images/hom-artifacts/stardust-7e1c58dd.jpeg` (JPEG, photo of a notebook page).
- **The image:** a **childlike pen sketch** — a **cat-faced "star creature"**, star-shaped body/limbs, flower-tipped paws, a sparkle on its chest. Same hand/register as the *RAPhael the Christmas Spider* and the angle/animal sketches.
- **`[~]` reading:** the **soul-as-star** made a literal little being (`SOUL IS A STAR`, `EVERY HUMAN BEING IS A STAR`, `AHEAD OF STARDUST`). The catalogue's star-doctrine drawn as a creature. → [[Soul Is A Star]].

## Method (reusable — the validator + hash derivation)
1. **`getMintProof?code=<CODE>`** (cloud function) = instant code validator: empty `proof:[]` = invalid, non-empty = **valid** (crown-free, public GET).
2. **Artifact hash = `keccak256(lowercase code)`** — *confirmed* on two independent code→hash pairs. So any valid code → its GCS object directly: `storage.googleapis.com/jagwar-twin-33.appspot.com/artifacts/0x{keccak(lower(code))}..{jpg|png|mp4}`.
3. **The productive candidate pools are artifact NAMES (chain-links) and board hidden-text LABELS** — validating all 147 names + 158 labels surfaced 4 valid codes (2 already known: Bridge=Grandma-VI, Pleiades=RAphael; 2 new: these). The 177 aphorism/lyric/tweet candidates returned **0** — that register does not hit.
- ⚠ This validates a *curated pool* (the maze's own vocabulary = the launch crew's method); it cannot enumerate the answer key. Stays on the "playing the game" side of [[feedback-hom-is-meant-to-be-solved]].

## Cross-references
- [[Sources/Artifacts/HoM - Master Brute-Force Candidates (2026-06-26)]] · [[Sources/Artifacts/HoM Artifact - Grandma VI hospital (code A Bridge Between Worlds) 2026-06-26]] · [[Sources/Artifacts/HoM Artifact - RAPhael the Christmas Spider (Pleiades Honey Bee) 2026-06-26]]
