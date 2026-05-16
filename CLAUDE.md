# CLAUDE.md — Schema for the JagwarTwin Vault

A persistent instruction file. **Read this in full at the start of every session before doing any work in the vault.** Treat conversation instructions as additive to this schema, not replacements. If a conversation instruction conflicts with this schema, raise the conflict explicitly before proceeding.

This vault is a dual-purpose knowledge system for the Jagwar Twin / Roy English universe. It serves **two readers with different needs from one body of analytical work**:

1. **A human reader** — Jen, and eventually a public fan-site audience. Wants verbose, emotionally engaged, literary interpretation.
2. **An AI reader** — this and future sessions, across tools. Wants terse, stable, machine-navigable semantic memory that survives across sessions and reduces re-derivation cost.

The analytical thinking happens **once** and produces **two artifacts**: a terse Brain entry and a literary Essay. Neither is a summary of the other; both descend from the same source-grounded analysis.

---

## 1. The Three Layers

The vault separates external evidence from machine memory from human interpretation. Mixing these is the primary failure mode this schema exists to prevent.

### Sources/ — external documents only

Things that exist in the world, preserved so they can be cited. **Never interpreted here.** Lyrics (verbatim), episode transcripts, public quotes, screenshots-of-public-posts. If we are describing what something *is*, that is Brain/Essays. If an outside source states something, that is Sources.

- `Sources/Lyrics/` — verbatim lyric files + structural notes + phrase index. No meaning claims.
- `Sources/Transcripts/` — cleaned excerpts of public YouTube/podcast/interview material, timestamped.
- `Sources/Quotes/` — Roy's publicly curated quotes, organized by original publication.

Each Sources file carries `citable: true|false`. Immutable once placed: corrections only, never reinterpretation.

### Brain/ — machine semantic memory

AI-only infrastructure (Karpathy LLM-Wiki lineage, but machine-readable ontology, not a readable wiki). Terse, structural, frontmatter-heavy, link-dense, **no literary voice**. Its job: any session orients fast without rebuilding from scratch.

- `Brain/Concepts/` `Brain/Characters/` `Brain/Songs/` `Brain/Albums/`

A Brain song entry holds: loaded thematic phrases (not full lyrics), recurring symbols, character voicings, theological/mythological moves, tiered connections, source anchors. ~20–50 lines. Prose is minimal and carries **inline epistemic markers** (Section 5).

### Essays/ — the human creative project (→ fan site)

The thing Jen cares about most. Verbose, exploratory, emotionally engaged, written for a human who loves this material. Full lyrics embedded via transclusion. Interpretation tiers appear here as prose section-headers (Section 4). This layer ports to a static Astro site with nonlinear "labyrinth" navigation (Section 12).

- `Essays/Songs/` `Essays/Concepts/` `Essays/Characters/` `Essays/Arcs/` `Essays/_drafts/`

### _System/ — infrastructure (not content)

`index.md` (dual-axis navigation), `log.md`, `lessons-learned.md`, `Boundaries.md`, `Master Source List.md`, `Media Index.md`, `Ontology.md`, `validate.mjs`, `backlink.mjs`, `_legacy/`.

### Raw/Media/ — immutable binary artifacts

Screenshots, stills, audio. Catalogued in `_System/Media Index.md`. Never modified.

---

## 2. The Named Risk: Contamination

**This is the single risk the entire architecture exists to prevent.**

When an LLM writes a wrong connection or an ungrounded claim into Brain, every subsequent session inherits it as fact, and lint alone will not catch it. The error compounds silently.

The conventional mitigation is vault separation. **We deliberately chose a single vault** (cross-layer wikilinks are too valuable). That decision means the defenses below are load-bearing and non-optional:

1. **Layer discipline** — Sources never interprets; Brain never invents; Essays never asserts beyond its anchors.
2. **Inline epistemic markers** in Brain prose (Section 5) — every claim carries its status.
3. **Tiered connections** in frontmatter — a Resonance is never stored in the same slot as a Grounded fact.
4. **The Ontology + validator** (Section 8) — typos and vocabulary drift fail the commit.
5. **The thin-source check** — any Strong Read connection lacking ≥2 public anchors is flagged.
6. **Git-diff review** — every Brain change is reviewable before commit.
7. **The Secret-Document test** (Section 7) — *"would this survive if the Secret Document did not exist?"*

If you cannot ground a Brain claim, do not write it. An empty slot is recoverable; a contaminated one is not.

---

## 3. Interpretation Tiers

Three tiers. In **Essays** they are prose section-headers. In **Brain** they are frontmatter connection categories and inline markers.

### Grounded
Facts. Quotes from public material, credits, release dates, visible video content, episode contents (cited as the public episode). No hedging — it is what is there.

### Strong Read
Interpretive moves backed by **≥2 public anchors**. Hedged: *likely, probably, reads as, suggests, can be read as, the work appears to*. Never stated as authorial intent. A reading resting on **one** anchor is a Resonance, not a Strong Read. Anchors: repeated terminology, repeated structural role, repeated thematic alignment, artist-curated source overlap, public visual/narrative evidence.

### Resonances
Correspondences the work rings with — from any tradition, including Jen's, Claude's, contributors'. Esoteric, mythological, psychological, literary. Claims correspondence, **not** authorial intent. Always attributes origin (*"a tarot reading suggests…", "this corresponds to the Jungian shadow…"*). Per Roy's stated epistemology, the work may hold more than was consciously placed; Resonances honors that without laundering personal meaning into Strong Read.

### Open Questions
Required section on framework pages. Often the strongest move on a page.

### Counterarguments / Alternate Reads
Required on concept and major character pages. Names what would weaken the page's main reading. Defends against retrospective totalization.

---

## 4. Essays Layer — Authoring Rules

- Verbose, literary, in Jen's analytical voice. Not encyclopedia-flat. Not AI-flat.
- Tiers as section headers: `## Grounded`, `## Strong Read`, `## Resonances`, `## Open Questions`, `## Counterarguments`.
- Full lyrics embedded by **transclusion**: `![[Sources/Lyrics/<Song>]]`. Never paste a second copy — Sources is canonical; Astro resolves the embed at build.
- Frontmatter drives the fan site: `publish`, `entry_points`, `related` (Section 6).
- **Do not manufacture essays.** An Essay is written when real analysis exists. Scaffolds stay in Brain until there is something to say. Empty Essay stubs are forbidden (a documented failure mode of every comparable project).
- **The surgical-split principle**: when deriving from an existing developed page, the rich prose is preserved verbatim as the Essay; the Brain entry is a newly-derived terse skeleton. Original content is never deleted — only copied-and-reduced.

---

## 5. Brain Layer — Authoring Rules

- Terse. Structural. Frontmatter-heavy. No literary voice, no emotional register.
- Not the full lyrics — the loaded phrases, the symbols, the moves, the connections.
- **Inline epistemic markers** on every prose claim:
  - `(no marker)` — directly attributable to a named public source
  - `[W]` — Brain synthesis across sources (Claude's connective inference)
  - `[P]` — Jen's stated personal position
  - `[?]` — uncertain / unverified / flagged for review
- Connections are **tiered in frontmatter** (`grounded` / `strong_read` / `resonance`), never flattened into one list.
- A Brain page that starts interpreting in prose has bled into Essay territory — flag and fix.

---

## 6. Frontmatter Schemas

**Brain page:**
```yaml
---
id: SONG-WelcomeToTheCircus      # TYPE-PascalCase, canonical, in Ontology.md
type: song                        # song|concept|character|album
status: stable                    # draft|stable|stale|replaced
confidence: high                  # high|medium|low
source_quality: primary-source    # primary-source|secondary|none
sources: [Sources/Lyrics/Welcome to the Circus.md]
related: [CONCEPT-TheCircus, CONCEPT-Inversion, CHAR-SirLucius]  # 3–5 CURATED neighbors
connections:
  grounded:    [CONCEPT-TheCircus]
  strong_read: [CONCEPT-TheLabyrinth, CONCEPT-TheThread]
  resonance:   [CONCEPT-Inversion]
referenced_by: []                 # AUTO — backlink.mjs writes this; never hand-edit
review_date: 2026-11-15
---
```

**Essays page:** `type`, `status`, `related`, plus `publish: true|false`, `entry_points: [circus, inversion, …]` (drives labyrinth nav). Tiers live in prose, not frontmatter.

**Sources page:** `type: lyrics|transcript|quote`, `citable: true|false`, canonical URL block, `verified_against:`.

---

## 7. The Secret Document Boundary

A Google Doc designated **Secret Document** contains private, unreleased, personally-shared material. It lives **outside the tracked repo**, in a gitignored `_Private/` path, created only when essay work begins.

1. **Never quote.** Not a sentence, not a phrase.
2. **Never paraphrase** closely enough to reconstruct.
3. **Never name as a source** — not in citations, labels, attribution tags.
4. **Silent guidance only.** It raises confidence in readings that already stand on public material. It never unlocks a reading that would otherwise fail.
5. **The operational test:** *"Would this interpretation survive if the Secret Document did not exist?"* If it only holds because of private context → downgrade to a flagged Open Question, or omit. Never a stated-public claim resting on hidden ground (this is source-laundering).
6. **Not loaded during structural/architecture work.** It is dormant until essay-authoring, and only the analytical pass touches it.
7. If Jen references it in conversation, that is private material shared with Claude — use for understanding, never reproduce into the vault.
8. Flag any vault content that may have leaked private material.

The single public exception: *"the song hidden inside its wings"* is a public Twitter post, freely citable.

---

## 8. Ontology, Validator, Back-Propagation

- **`_System/Ontology.md`** — the controlled vocabulary. Every entity (`CONCEPT-*`, `CHAR-*`, `SONG-*`, `ALBUM-*`) has one canonical ID and display name. New entities are added here first.
- **`_System/validate.mjs`** — pre-commit. Fails the commit if: a `related`/`connections` ref doesn't resolve in Ontology; a `strong_read` connection's page lacks ≥2 public anchors; broken wikilinks; `review_date` past (warn); possible Secret-Doc leak heuristic (Essay claim with no public anchor → human review).
- **`_System/backlink.mjs`** — rebuilds every page's `referenced_by` from the forward graph. Run before commit. `referenced_by` is machine-owned; never hand-edited.

`related` (curated, 3–5) is the *navigable* graph for the fan site. `referenced_by` (auto, complete) is the *full* graph for AI traversal. They are different on purpose.

---

## 9. Source Attribution

Google Docs are reference libraries, **not citations** — cite the underlying public source.

| Material | Cite as |
|---|---|
| Lyrics | The song (album / release date) |
| Transcripts | The YouTube episode by public title |
| Roy's quotes | Original publication / interview |
| Synthesis docs | Not a source — trace to public origin |
| Secret Document | Never (Section 7) |

Inline-link first mention; maintain canonical citation blocks in `_System/Master Source List.md`.

---

## 10. Public / Private Boundary

Full rules in `_System/Boundaries.md`. Summary: released catalogue, music videos, the YouTube series, public social/interviews, Roy's curated quotes, visible iconography, and universal source material are **public/citable**. Unreleased lyrics, private chats/calls, Inner-Circle member content, and the Secret Document are **private**. Public material transcribed in a private doc is still public — cite the public original. When in doubt: **private**, and ask.

---

## 11. Conventions

- **Filenames:** Title Case for Concept/Character/Song/Album pages even when artist branding is lowercase (note the lowercase styling in the page). Album pages: `Name (album).md`.
- **IDs:** `TYPE-PascalCase` (`SONG-WelcomeToTheCircus`), canonical in Ontology.
- **Speaker attribution (songs):** distinguish **Voiced** (first-person position), **Inspired** (about a figure, not voiced by them), **Mentioned** (referenced). Voiced + Inspired go in Characters; Mentioned in Notes.
- **DMs/screenshots:** never assume which side is whom. Ask. Treat as private until cleared.

---

## 12. Deploy Target (context for authoring)

Essays → static **Astro** site, hosted free/traffic-independent (Cloudflare Pages). Navigation is a nonlinear **labyrinth**: multiple entry points (by song, symbol, character, question), driven by `entry_points` + `related` frontmatter — not a flat menu. Community/forum features are **federated** (external/embedded: Giscus, Discourse, Discord), never welded into the Astro build (that would force server-rendering and break the cost model). Author Essays knowing they become public labyrinth nodes, not encyclopedia entries.

---

## 13. Workflows

### Ingest
1. Read the source carefully. 2. Confirm understanding with Jen; ask attribution questions (screenshots/DMs). 3. Place: binary → `Raw/Media/` + Media Index; verbatim text → `Sources/`; analysis → Brain (+ Essay if real analysis exists). 4. One analytical pass → Brain skeleton **and** Essay draft. 5. Update connected Brain pages (a source touches 5–15). 6. Run `backlink.mjs` + `validate.mjs`. 7. Update `_System/index.md`, append `_System/log.md`. 8. Flag tensions with existing pages.

### Query
Search Brain first (`_System/index.md` is the entry point), then Sources it cites. Synthesize with citations. If substantial, offer to file back. If absent, say so — never fabricate.

### Lint
Periodic. Check: contradictions, stale claims, orphans, thin source support (Strong Read <2 anchors), missing cross-refs, broken citations, tier violations, unhedged interpretation, layer-bleed, possible Secret-Doc leaks. Report numbered; do not auto-fix without direction.

---

## 14. Anti-Patterns

1. **Premature synthesis** — a framework that fits too cleanly is suspicious. Would it hold without the framework?
2. **Retrospective totalization** — everything reading through one lens. Counterarguments defend against this.
3. **Layer-bleed** — Brain prose turning literary; Essay compressed to bullets; Sources interpreting.
4. **Essay-manufacturing** — generating empty/auto Essays where no real analysis exists.
5. **Untraceable claims** / **vibes citations** — name the anchor or downgrade.
6. **Belief-system drift** — pages reinforcing each other instead of grounding independently.
7. **Authorial-intent overreach** — "Roy meant X." Use "the work reads as."
8. **Personal meaning as analysis** — Resonances tagged as such, never laundered into Strong Read.
9. **Source-laundering** — a private-derived reading given a public-looking justification (Section 7).
10. **Cult-mythology drift** — treating the artist as guru / the work as gospel. Keep critical distance.

---

## 15. Scale

Under ~150–200 pages, `_System/index.md` is sufficient for navigation. Beyond that, add **qmd** (local BM25 + vector + LLM re-rank, runs as an MCP server) — it consumes the existing markdown/frontmatter with no restructuring. Do not build it preemptively; the architecture is already qmd-ready.

---

## 16. Living Document

This is a living interpretation. The artist is alive and releasing. Every Brain/Essay page is *current best understanding*, not final word. Update freely; note significant revisions in `_System/log.md` and process failures in `_System/lessons-learned.md`.

---

## 17. Session-Start Checklist

1. Read this file. 2. Read `_System/index.md`. 3. Skim recent `_System/log.md`. 4. Confirm Jen's current focus. 5. Conversation instructions are additive; conflicts surfaced, not silently applied.

---
