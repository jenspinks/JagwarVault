---
id: MEDIA-<PascalCase>          # MUST exist in _System/Ontology.md (## Media section)
type: media
media_kind: image              # image | tweet | drawing | object-photo | video | audio | board
source: <Source>               # REQUIRED provenance tag — HoM | Twitter/X | Instagram | YouTube | TikTok | Discord | board | gallery | …
artifact: false                # true if it is a HoM/ARG artifact
hom_leaf: ""                   # 0x… leaf hash, if HoM (else omit)
hom_status: ""                 # open | cracked | catalog (if HoM)
asset: Media/…                 # path to the raw file in Media/
captured: <YYYY-MM-DD>
status: draft                  # draft|stable  (stable REQUIRES Counterarguments below)
confidence: medium             # high|medium|low
source_quality: primary-source
sources: []                    # underlying public-source citations (tweet, painting, episode…)
related: [<3-5 curated entity IDs>]
connections:
  grounded:    []
  strong_read: []
  resonance:   []
referenced_by: []              # AUTO — backlink.mjs; never hand-edit
review_date: <YYYY-MM-DD>
---
# <Title>

> **Source:** <tag> · **Artifact:** <leaf/room or —> · **Asset:** <file>
> Markers: [G] public-source · [W] strong read · [P] Jen · [~] resonance · [?] open.

## What it is — `[G]` (observable)
Literal description, verified against the asset. State exactly what is depicted/written and what the **authorial content** actually is (a caption? a full text? a found image?).

## Provenance — `[G]`
Who posted/made it, when, where; HoM leaf/room/code if applicable; where the raw asset lives.

## The reading (tiered)
The analysis — and **all cross-catalogue connections**. Tier every move ([W]/[P]/[~]/[?]); never inflate resonance to grounding. This is the section that must NOT be dropped to a one-line fact.

### <thesis> `[tier]`
…link to [[songs]] / [[concepts]] / [[characters]]…

## Cross-catalogue connections
| Node | Relation | Tier |
|---|---|---|
| [[…]] | … | `[~]` |

## Counterarguments / Alternate Reads
<!-- Required before status: stable (anti-totalization). What flatter reading fits? How much is authorial vs ours? -->
- 

## Open Questions
- [ ]
