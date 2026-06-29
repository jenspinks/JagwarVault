---
type: reference
citable: false
status: stable
---
# AI Quickstart — the first-pass workflow

**Read this before working; it's the operational layer.** [[GPT]] tells you *how to behave* (tiers, boundaries); [[CLAUDE]] is the full constitution; this turns both into **repeatable fetch recipes** so you stop searching and start reading the right files in the right order. When a recipe names "the map," it means [[entity-map]] (canonical ID → exact paths); when in doubt about whether a file exists, `grep -rli "term" .` is always authoritative over any snapshot.

## 30-second orientation
- The vault analyzes the music of **Jagwar Twin / Roy English** and his theatrical shadow-self **Sir Lucius**. Four layers: **`Sources/`** (immutable evidence — never interpret here), **`Brain/`** (terse canonical nodes with frontmatter IDs + a tiered connection graph), **`Essays/`** (long-form human-facing readings), **`_System/`** (this registry).
- **Verify, don't guess.** Every fact-claim (lyric, credit, date, who-said-a-line, an ID, "Bailey says…") is one fetch away — open the file. Brakes **off** for interpretation, **on** for facts.
- **Two hard guards, always live:** the **tier ladder** (below) and the **public-only boundary** (you cannot see `_Private/`; every reading must stand on repo-public sources alone — never write "private material confirms").

## First-pass recipes (fetch in this order)

**A song** → look up the row in [[entity-map]] §Songs, then fetch:
1. **Brain page** `Brain/Songs/{Era}/{Song}.md` — the settled reading + the `connections` graph + `## Open Questions`. *(Album-NESTED — don't guess the path, use the map.)*
2. **Lyric** `Sources/Lyrics/{Song}.md` — verbatim; **check its `status`** (`stable` = Apple/Spotify-verified; `draft` = AZLyrics/Drive, treat as draft-tier).
3. **Essay** `Essays/Concepts/Songs/{Song}.md` — the long read (if one exists; the map shows `—` if not).
4. **Credits** `Sources/Credits/{Album}.md` — per-track writers/producers.
5. **Anchors** → [[Master Source List]] (§2 theatrical EPs / Mirror Sessions, §11 interviews) + `grep Sources/Transcripts/` for spoken anchors.
6. **Before asserting anything contested** → check [[Claim Ledger]] (is this claim grounded, struck, or private-only?).

**A concept** → [[Ontology]] for the `CONCEPT-…` ID → [[entity-map]] §Concepts → `Brain/Concepts/{X}.md` (✦ has frontmatter) → `Essays/Concepts/{X}.md` if written → [[Theme Tracker]] for the analytical vocabulary. Many concepts are **pageless** (declared in Ontology, homed as anchor-sections of a hub — the map's pageless table shows which are now minted).

**A character** → `Brain/Characters/{X}.md` → `Essays/Characters/{X}.md` → `Brain/Roy Voice/` (by-theme aggregation of Roy's public statements).

**"Who said / did Roy say X?"** → `Sources/Transcripts/` (one file per source, `Outlet-YYYY-Topic.md`) → **apply speaker discipline** (below) → cite via [[Master Source List]] §2/§11. Aggregations live in `Brain/Roy Voice/`.

**"Does the vault already hold X / where does X live?"** → `grep -rli "X" .` first; then [[file-map]] (flat enumeration); then [[index]] (curated meaning). **Don't conclude a file is absent from the index alone** — grep.

## Source-reliability matrix
| Source | Treat as | Note |
|---|---|---|
| `Sources/Lyrics/` `status: stable` (Apple/Spotify) | **verified lyric** `[G]` | the authority; where Spotify/Apple diverge, cross-check & note |
| `Sources/Lyrics/` `status: draft` (AZLyrics / Google-Drive doc) | **draft lyric** | flag uncertainty; don't build a fine reading on a single word |
| `Sources/Credits/` (Apple/Qobuz/Spotify-verified) | **verified credit** `[G]` | per-track; cite the file |
| `Sources/Transcripts/` | **public, but speaker-check** | verbatim; *who* speaks is not automatic (see below) |
| `Sources/Quotes/` (Roy IG/X, Roy-exposed) | **grounded quote** `[G]` | Roy's own public material |
| `Sources/Reference/` `citable:false` (research dossiers) | **lead, not citation** | corroborates; never the sole support for a published claim |
| `Sources/Artifacts/` (the "I'm 33" board, HoM) | **primary, citable** | Roy's own; the board is the *source-quarry*, not a generator of new claims |
| `Essays/` | **interpretation, not source** | a reading; never cite an essay *as evidence* for a fact |
| `Brain/` | **settled reading + index** | carries its own tiers in the connection graph |
| anything in `_Private/` | **invisible & unusable** | you cannot see it; never invoke it |

## Tier every interpretive claim (tag inline)
`[G]` grounded (named public source — cite it) · `[W]` strong read (≥2 public anchors — "reads as") · `[P]` a stated position (attribute it) · `[~]` resonance (framework correspondence — attribute to the framework, **never** "Roy meant") · `[?]` unverified leap (flag, never smuggle). **Never let a `[W]` pass as `[G]`.** Negative evidence counts: the *absence* of Lucius / mirrors / audience / face-imagery can be meaningful — note it.

## Speaker discipline (high-error zone)
In the theatrical **Interview EPs** and **Mirror Sessions**, **Lucius speaking ≠ Roy speaking**; in press interviews, a line may be the host's or a guest's. Before writing *"Roy says…"*, confirm the speaker from the transcript. The layered "who is speaking?" (Brandon / Roy / Jagwar Twin / Lucius / the lyrical-I) is itself a concept — [[Brain/Concepts/The Speaker Problem]].

## The three interpretive guards (don't skip)
1. **Inherited Substrate is the law** ([[Brain/Concepts/Inherited Substrate]]): *not all resemblance is reference.* Credited→`[G]`; strong breadcrumb→`[W]`; shared tradition→`[~]`; similarity alone→`[?]`; failed source-pin→ruled out.
2. **Stream discipline:** Lurianic (redeem) ≠ Gnostic (escape) ≠ Hermetic (correspondence) — mark which stream a framework claim is in; never silently merge them.
3. **No master key:** a powerful lens *organizes*, it does not *explain everything*; a clean fit is evidence for design **and** for projection — anchors decide, not neatness.

## Before you finish
- Tier every interpretive claim; cite a repo path for every grounded one.
- Re-check contested phrasings against [[Claim Ledger]] (so struck claims don't resurrect).
- End drafts with a **"TO VERIFY"** list — every fact-claim you couldn't pin to a file. That converts uncertainty into a checklist instead of an error.

## The system files, one line each
[[entity-map]] ID→paths · [[file-map]] what exists · [[index]] what it means · [[Ontology]] the IDs · [[Theme Tracker]] the vocabulary · [[Master Source List]] the sources · [[Boundaries]] public/private · [[Claim Ledger]] contested-claim status · [[CLAUDE]] the full schema · [[GPT]] external-reader behavior.
