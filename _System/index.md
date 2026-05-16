# Index — Dual-Axis Navigation

Master catalog for the JagwarTwin vault. Navigate three ways: **by layer**,
**by concept**, **by entry-point**. The entry-point axis is the seed of the
fan-site labyrinth (CLAUDE.md §12). See [[log]] for history, [[CLAUDE]] for
schema, [[Ontology]] for the canonical entity registry.

Legend: ✦ developed · ◦ skeleton/scaffold (Brain page, Essay pending) · ⬚ pageless (declared in Ontology)

---

## Infrastructure (`_System/`)

| Page | Purpose |
|---|---|
| [[CLAUDE]] | Schema — layers, tiers, source rules, frontmatter, workflows |
| [[index]] | This file — dual-axis catalog |
| [[log]] | Chronological operational log |
| [[lessons-learned]] | Drift & process register |
| [[Ontology]] | Canonical entity registry (IDs) |
| [[Boundaries]] | Public/private rules; Secret Document boundary |
| [[Master Source List]] | Canonical public-source registry |
| [[Media Index]] | Raw media catalog |
| `validate.mjs` · `backlink.mjs` | Pre-commit linter · graph back-propagation |
| `_legacy/` | Pre-restructure synthesis files, awaiting triage |

---

## Axis 1 — By Layer

**Sources/** (external evidence, immutable)
- `Sources/Lyrics/` — [[Welcome to the Circus]] ✦ · (~75 more to ingest over time)
- `Sources/Transcripts/` · `Sources/Quotes/` — empty, pending ingestion

**Brain/** (machine semantic memory — terse, frontmatter, tiered connections)
- `Brain/Songs/` — 44 (7 framed ✦/◦, rest scaffolds ◦)
- `Brain/Concepts/` — 19 (2 derived ✦, 17 scaffolds ◦)
- `Brain/Characters/` — 4 (Roy ✦, Sir Lucius ✦, Mary ◦, Jagwar Twin ◦)
- `Brain/Albums/` — 3 (Lucius Lullaby ✦, 33 ◦, Subject to Flooding ◦)

**Essays/** (human creative project → fan site; verbose, tiered prose)
- `Essays/Songs/` — [[Welcome to the Circus]] ✦ · [[Lucius Lullaby]] ✦
- `Essays/Characters/` — [[Roy]] ✦ · [[Sir Lucius]] ✦
- `Essays/Concepts/` — [[The Labors of Hercules]] ✦ · [[The Dweller on the Threshold]] ✦
- `Essays/Arcs/` — [[Lucius Lullaby]] (album arc) ✦
- `Essays/_drafts/` — empty

---

## Axis 2 — By Concept

Each links the Brain entry (always) and the Essay (if written ✦).

**Load-bearing**
- The Thread ◦ — world tied on a string; Ariadne; feeling as the labyrinth's solution
- The Circus ◦ — the Circle inverted; spectacle at social scale
- The Labyrinth ◦ — maze without exit; requires the thread
- Inversion ◦ — same structure, opposite function; Christ-speech inverted
- The Algorithm ◦ — invisible engine of the Circus ("the algorithm baby")
- [[The Labors of Hercules]] ✦ — Bailey/Leo; tame-the-Beast; champion as initiate
- [[The Dweller on the Threshold]] ✦ — accumulated unintegrated material; Lucius-as-Dweller

**Secondary** ◦
The Mask · The Mouth · The Voice · The Audience · The Light-Bearer · The Spectacle · Consumption · Fire · The Wheel · The Veil · The Aquarium · Panem et Circenses

**Pageless** ⬚ (declared in [[Ontology]], referenced, no page yet)
The Circle · The Mirror · The Moon · Yesod · Malkhut · Tiferet · The Empty Mirror · The Angle/Angel · Ballerina Boy · Leif · The Boss/BMRC

**Characters**
[[Roy]] ✦ · [[Sir Lucius]] ✦ · Mary ◦ · Jagwar Twin ◦ · Ballerina Boy ⬚

---

## Axis 3 — By Entry Point (labyrinth seed)

Symbols/themes that route a reader into the work. Sourced from Essays
`entry_points` frontmatter; grows as Essays are written.

- **circus / spectacle** → [[Welcome to the Circus]]
- **inversion / upside-down** → [[Welcome to the Circus]]
- **consumption / chew you up** → [[Welcome to the Circus]]
- **labyrinth / no exit** → [[Welcome to the Circus]]
- **the final boss** → [[Welcome to the Circus]] · [[Sir Lucius]]
- **the deal** → [[Lucius Lullaby]] · [[Roy]]
- **the mirror / Rorrim Ehtni** → [[Sir Lucius]] · [[The Dweller on the Threshold]]
- **the dweller / shadow / threshold** → [[The Dweller on the Threshold]] · [[Sir Lucius]]
- **three modes / the boss** → [[Sir Lucius]]
- **el-roy / ballerina boy** → [[Roy]]
- **mind serve heart** → [[Roy]]
- **hercules / the beast / leo / champion / bailey** → [[The Labors of Hercules]]
- **descent and return / malkhut / sol** → [[Lucius Lullaby]] (arc) · [[Lucius Lullaby]] (song)
- **childhood bedroom** → [[Lucius Lullaby]]

---

## Status & Known Gaps

- 7 pages fully developed (split Essay ✦ + derived Brain). 57 Brain scaffolds carry no frontmatter yet — intentional; frontmatter + Essays added as real analysis happens (no manufactured content, CLAUDE.md §4).
- Sources: only Welcome to the Circus lyrics ingested. ~75 lyric/transcript sources pending.
- `validate.mjs` reports the 57 scaffolds as "no frontmatter" warnings (non-blocking) until each is worked.
- Next analytical priorities (from prior planning): SOL, Not Your Homie, Ballerina Boy, then earlier catalogue.

---

## Maintenance
Update this file when pages are created/promoted. Re-run `backlink.mjs`
then `validate.mjs` before every commit. Pageless ⬚ entries promote to
Axis 2 proper when a page is written. Record restructures in [[log]].
