---
id: MEDIA-<PascalCase>          # MUST exist in _System/Ontology.md (## Media section)
type: media
media_kind: image              # image | tweet | drawing | object-photo | video | audio | board
source_type: HoM               # REQUIRED provenance type — HoM | Twitter/X | Instagram | YouTube | TikTok | Discord | board | gallery
source_note: ""                # OPTIONAL quoted wiki-link to the capture/source page, e.g. "[[Sources/Artifacts/…]]"  (MUST be quoted in YAML)
artifact: false                # true if it is a HoM/ARG artifact
hom_leaf: ""                   # "0x…" leaf hash, if HoM (quote it)
hom_room: ""                   # catalog #/room, if known
hom_status: ""                 # open | cracked | catalog
asset: ""                      # quoted path to the raw file, e.g. "Media/images/…"
captured: <YYYY-MM-DD>
status: draft                  # draft|stable  (stable REQUIRES the Counterarguments section)
tier: mixed                    # page-level max interpretive strength: grounded | mixed | resonance — so a page isn't read as fully [G] just because its ID is
confidence: medium             # high|medium|low
source_quality: primary-source
aliases: []
related: [<3-5 curated entity IDs>]
grounded: []                   # FLAT (not nested) — Obsidian-friendly; validator reads flat for media
strong_read: []
resonance: []
referenced_by: []              # AUTO — backlink.mjs; never hand-edit
review_date: <YYYY-MM-DD>
---
# <Title>

> **Source:** <type> · **Artifact:** <leaf/room or —> · **Asset:** <file>
> Markers: [G] public-source · [W] strong read · [P] Jen / private-only · [~] resonance · [?] open.

<!-- ADMISSION RULE: a Brain/Media/ page is warranted ONLY when the object has interpretive weight, HoM/ARG artifact status, public-canon relevance, or recurring cross-catalogue links. Otherwise a raw asset in Media/ + a catalog row is enough. MEDIA- is not a dumping ground for every image. -->

## What it is — `[G]` (observable)
Literal description, verified against the asset. State exactly what is depicted/written and what the **authorial content** actually is (a caption? a full text? a found image?).

## Provenance — `[G]`
Who posted/made it, when, where; HoM leaf/room/code if applicable; relation to the catalog; where the raw asset lives.

## Identification / Correction History — `[G]`
- **Current ID:** <what it is, with confidence>
- **Former / rejected ID:** <prior misattribution, if any — else "none">
- **Why changed:** <reverse-image / source / local-leaf verification that settled it>
<!-- Image IDs can change after verification. Preserve the learning here; never silently overwrite a prior ID. -->

## HoM code status — `[G]`   (omit for non-HoM media)
- **Known code:** <the room's unlock code, if cracked — else "uncracked">
- **Own-leaf diagnostic:** <does the visible text hash to its own leaf? reveal-art vs text-page>
- **Cross-room seeding:** <is a visible string another room's code?>
- **Do-not-retry:** <exhausted vectors — keep code mechanics separate from symbolic reading>

## The reading — tiered
The full enrichment analysis. **This must not collapse into metadata.** Tier every move ([W]/[P]/[~]/[?]); never inflate resonance to grounding.

### Core thesis — `[W]`
The main interpretive claim.

### Canon connections — `[W]/[~]`
Songs, concepts, characters — and *why*, each tiered.

## Cross-catalogue connections
| Node | Relation | Tier |
|---|---|---|
| [[…]] | … | `[~]` |

## Counterarguments / Alternate Reads
<!-- Required before status: stable. What flatter reading fits? How much is authorial vs vault synthesis? -->
- 

## Open Questions
- [ ]
