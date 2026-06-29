# Jagwar Twin Vault — System Architecture (portable overview)

> **What this file is.** A self-contained description of how this vault is
> structured, indexed, navigated, and built — written so an external reader
> (a person, or an AI such as a claude.ai chat) can understand the whole system
> *without the vault in front of them.*
>
> **Authority.** [[CLAUDE]] is the authoritative operating spec; this file is the
> shareable explainer derived from it. Where they ever disagree, CLAUDE.md wins
> and this file is stale — fix it.
>
> **Maintenance.** Keep this in sync. When the layer structure, frontmatter
> schema, Ontology conventions, tooling (`validate` / `backlink` / `gen-file-map`),
> navigation, or commit workflow changes, update this file in the **same pass**,
> re-date the snapshot below, and re-run `gen-file-map.py`. **Must stay
> public-safe** (no private content, no Secret-Document material) — it is meant to
> be shared.
>
> **Snapshot date:** 2026-06-06.

---

## 1. What it is

A structured **symbolic-analysis system** for the music, visual, and
philosophical world of the artist Jagwar Twin (Roy English). It is an **Obsidian
vault** — a folder of plain Markdown files with YAML frontmatter, version-
controlled in git — engineered so that **both a human reader and an AI can
navigate it without the interpretive layers contaminating each other.**

It is explicitly *not* a fandom theory dump. The governing idea is a **recursive
ontology with epistemic discipline**: every interpretive claim is tagged by how
well it is supported, and the architecture's entire purpose is to stop ungrounded
claims from silently hardening into "fact" over time.

## 2. Architecture: three content layers + two system layers

The core design decision is **one vault, three layers, separation enforced by
folder + frontmatter** (not by separate vaults):

| Layer | Role | Voice |
|---|---|---|
| **`Sources/`** | Raw, citable material that exists in the world — lyrics, interview transcripts, quotes, artifacts. **Never interpreted here.** Immutable once placed (corrections only). | None — verbatim |
| **`Brain/`** | Compressed, machine-navigable semantic memory — concepts, characters, songs, albums as terse, heavily cross-linked ontology pages. | Terse, structural, no prose |
| **`Essays/`** | Long-form, human-facing literary analysis. Full lyrics embedded by transclusion. The eventual public artifact. | Verbose, literary |

Plus two non-content layers:

- **`_System/`** — infrastructure: the controlled vocabulary, validators,
  indexes, the master source registry, the operational log, this file.
- **`_Private/`** — gitignored; holds the "Secret Document" (private / unreleased
  material). Readable for understanding, **never** quoted, named, described, or
  used to ground a claim. Excluded from all tooling and from git.

The hard rule binding the layers: **Sources never interprets; Brain never
invents; Essays never asserts beyond its anchors.**

## 3. On-disk structure

```
JagwarTwin/
├── CLAUDE.md              # the authoritative operating spec / constitution
├── GEMINI.md             # drafting guide for the Gemini collaborator
├── Sources/
│   ├── Lyrics/  Transcripts/  Quotes/  Credits/  Reference/  Artifacts/
├── Brain/
│   ├── Concepts/  Characters/  Songs/  Albums/  Roy Voice/
├── Essays/
│   ├── Concepts/  Concepts/Songs/  Characters/  Arcs/  _drafts/
├── _System/
│   ├── Ontology.md  index.md  file-map.md  log.md  ARCHITECTURE.md
│   ├── Theme Tracker.md  Master Source List.md  Boundaries.md
│   ├── validate.mjs  backlink.mjs  lib-frontmatter.mjs  gen-file-map.py
│   └── _legacy/          # untriaged pre-restructure files
├── Templates/
└── _Private/             # gitignored — the Secret Document
```

## 4. The epistemic model (the heart of the system)

Every analytical claim belongs to exactly one **tier**, and the tier is never
silently upgraded:

1. **Grounded** — directly supported by a lyric, public video, interview, or
   verified metadata. Cite the source; no hedging.
2. **Strong Read** — interpretation with **≥2 public anchors**. Always hedged
   (*likely, reads as, suggests*). Never presented as confirmed authorial intent.
3. **Resonance** — framework-level correspondence (Jungian, Kabbalistic,
   Hermetic, etc.). Attributed to the framework, never claimed as fact.

In the **Brain** layer these are carried as **inline markers** so they are
machine-readable:

- `(no marker)` — attributable to a named public source
- `[W]` — working synthesis (AI inference across sources)
- `[P]` — the author's stated personal position
- `[?]` / `[~]` — uncertain / flagged
- `(none — lyric)` / `(none — EP3, [URL])` — grounded citation form

**The named risk the whole architecture exists to prevent: contamination.** If an
AI writes one wrong connection into Brain, every future session inherits it as
fact and lint will not catch it. The defenses are all load-bearing: layer
discipline, inline markers, tiered frontmatter slots, the Ontology + validator,
a thin-source check, and the operational test *"Would this survive if the Secret
Document did not exist?"*

Anti-patterns the system actively guards against: premature synthesis,
retrospective totalization (reading everything through one lens), register
collapse (*"Lucius is the moon"* vs *"Lucius operates in a lunar register"*),
authorial-intent overreach, and source-laundering.

## 5. The privacy / boundary model

A separate spec ([[Boundaries]]) governs public vs. private. The single rule:
**if a claim cannot be defended on public material alone, it cannot go in the
vault.** Public = released songs, official videos, the theatrical YouTube series,
public interviews, visible iconography, universal source traditions. Private =
unreleased lyrics, DMs, private calls, the Secret Document, paid-community member
content. Private material may *guide* analysis but never *substitute* for public
evidence. This matters because the vault is built toward eventual publication —
the boundary protects the artist.

## 6. How it is indexed

**The controlled vocabulary ([[Ontology]]).** Every entity has one permanent
canonical ID of the form `TYPE-PascalCase` (TYPE ∈ `CONCEPT`, `CHAR`, `SONG`,
`ALBUM`), e.g. `CHAR-SirLucius`, `SONG-WelcomeToTheCircus`, `CONCEPT-TheCircle`.
IDs are registered here *before* any page uses them. Entities referenced but not
yet written get a "Declared — pageless" entry. **Display names can be renamed;
IDs never change.**

**Frontmatter schema.** Brain pages carry rich machine-readable frontmatter — the
key part being **tiered connection slots**, so a speculative link is never stored
in the same place as a grounded one:

```yaml
id: SONG-WelcomeToTheCircus
type: song
status: stable            # draft|stable|stale|replaced
related: [CONCEPT-TheCircus, CHAR-SirLucius, ...]   # ≤5 curated neighbors
connections:
  grounded:    [ALBUM-LuciusLullaby, CHAR-SirLucius]
  strong_read: [CONCEPT-Inversion, CONCEPT-TheThread]
  resonance:   [CONCEPT-TheAquarium]
referenced_by: []         # AUTO-generated by backlink.mjs; never hand-edited
# plus tracking fields: dominant_pole, transformation_phase, recursion_state,
# threshold_state, narrative_voice, temporal_register, active_systems,
# active_symbols, review_date ...
```

**Essays** use a lighter frontmatter (`type`, `status`, `publish:`,
`entry_points`, `related`) — notably **no `id`** (that is Brain-only, and the
validator enforces the distinction).

## 7. How it is navigated (six ways, in order of use)

0. **[[AI Quickstart]] + [[entity-map]]** — the operational entry. The Quickstart
   (`_System/AI Quickstart.md`) gives per-task **fetch recipes** (a song → Brain →
   Lyric → Essay → Credits → anchors), the source-reliability matrix, and the
   tier/speaker/boundary guards. The entity-map (`_System/entity-map.md`, regen
   `gen-entity-map.py`) resolves every **canonical ID → its exact file paths**
   across layers (Brain song pages are album-nested and casing varies, so this
   removes filename-guessing). Use these before searching when you know the entity.
1. **`grep`** — the fastest, always-current find method (`grep -rli "term" .`).
2. **[[file-map]]** (`_System/file-map.md`) — a flat, complete enumeration of
   every file by folder (regenerated by `gen-file-map.py`).
3. **[[index]]** (`_System/index.md`) — a *curated, dual-axis* catalog: **by
   layer**, **by concept**, and **by entry-point**. Explains what things *mean*;
   deliberately not exhaustive.
4. **The graph** — two distinct graphs: `related:` (≤5 curated neighbors, for
   human / labyrinth navigation) and `referenced_by:` (the complete
   auto-generated reverse graph, for AI traversal).
5. **Wikilinks** — Obsidian `[[PageName]]` resolve across the whole vault by full
   path or basename, case-insensitively.

The **entry-point axis** is special: it is the seed of a planned nonlinear
"**labyrinth**" navigation for the eventual public site — readers enter through a
symbol (*circus*, *the mirror*, *el-roy*) rather than a table of contents.

## 8. Tooling and the commit workflow

Three scripts (Node ES modules + Python), run before every commit:

- **`validate.mjs`** — the pre-commit linter. Loads canonical IDs from the
  Ontology, walks `Brain/` + `Essays/`, and **fails the commit (exit 1)** on: a
  Brain page missing / duplicating an `id`; any `related` / `connections` ref not
  in the Ontology. Warns on: `related` outside 3–5 items, stale `review_date`,
  no-frontmatter scaffolds, broken wikilinks. *(The "thin-source" check —
  flagging Strong Reads with <2 anchors — is specified but deferred to v2.)*
- **`backlink.mjs`** — rebuilds every page's `referenced_by:` from the forward
  graph (`id` → `related` + `connections.*`). Idempotent, machine-owned. **Only
  pages with an `id` participate**, so the back-prop graph is effectively
  Brain-only.
- **`gen-file-map.py`** — regenerates `file-map.md`; skips `_Private/` so secret
  filenames cannot leak.
- **`gen-entity-map.py`** — regenerates `entity-map.md` (canonical ID → resolved
  file paths + status, by frontmatter-`id` then normalized-name match); skips
  `_Private/`. Run after adding/moving/renaming pages.

**Workflow:** `backlink` → `validate` (must show 0 errors) → `git commit` → push
to a **private GitHub repo** (`jenspinks/JagwarVault`).

**Count relationships** an external reader will notice (snapshot 2026-06-06;
numbers drift):

- **~251** total `.md` files (whole vault, minus `_Private/` and `.git/`)
- **122** "pages" — what the validator counts = everything under `Brain/` +
  `Essays/`
- **118** registered Ontology IDs
- **~50** Brain pages that actually carry an `id` and form the machine back-prop
  graph (the rest are bare scaffolds — ~39 carry no frontmatter yet, a deliberate
  "do not manufacture content" stance)
- Latest health: **0 errors, 39 warnings** (the warnings are the bare scaffolds)

## 9. How it was built

It began as an iCloud Obsidian vault on a Karpathy-style "LLM wiki" model
(Raw / Processed / Wiki) but drifted by conflating machine-memory with human
essays. A 2026-05 architectural review reset it: a survey of public LLM-wiki
implementations → adopt the emerging standard (raw + LLM-layer + a `CLAUDE.md`
spec + index + log + git + validators + tiered frontmatter). Then: move out of
iCloud → local → git → **private GitHub**; a preservation commit; a multi-
checkpoint restructure into the three-layer schema; generate the Ontology +
validators; scaffold the song/concept pages; and surgically split the already-
deep pages into a Brain skeleton + an Essay. Since then it has grown
song-by-song. **qmd** (local BM25 + vector + rerank as an MCP server) is
documented as the *future* semantic-search escape hatch — deliberately not built
yet; the architecture is designed to drop it in past ~150–200 pages.

**Stack:** Obsidian (authoring, wikilinks) · Markdown + YAML · git + GitHub
(private) · Node.js (validators) · Python (file-map, the read-only agent).

## 10. How it is used — the human loop and the AI consumers

**Authoring loop (one analytical pass, written twice):** verify a song's lyrics
against streaming → write the **Brain** skeleton (terse, tiered, marked) → write
the **Essay** (literary expansion, transcluding the source) → `backlink` +
`validate` → commit. The analytical thinking happens once; Brain and Essay are
two renderings of it.

Three AI consumers, by role:

- **Claude Code** — does the *writing / structural* work inside the vault:
  ingests sources, authors pages, runs the tooling, commits. Reads [[CLAUDE]]
  first every session.
- **Gemini** — a *drafting collaborator* (per [[GEMINI]]), with a defined
  division of labor and a fact-verification hand-off.
- **Saravi** — a **read-only oracle** (lives in a separate `vault-brain/`
  project, outside the vault). An OpenAI model given the vault via an MCP
  filesystem server, sandboxed to the content folders **minus `_Private/`**, with
  only read tools exposed. It answers questions in an in-character "oracle" voice
  but is bound to actually read the relevant notes first. It can never mutate the
  vault. *(A future public web version on Vercel has been discussed but is not
  built.)*

---

*See also: [[CLAUDE]] (authoritative spec) · [[Boundaries]] (public/private
rules) · [[index]] (dual-axis catalog) · [[Ontology]] (entity registry) ·
[[Theme Tracker]] (analytical grammar) · [[Master Source List]] (source
registry) · [[log]] (operational history).*
