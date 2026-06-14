---
type: index
status: reference
audit_date: 2026-06-13
---
# Vault Audit — 2026-06-13

Full-vault health pass (6-dimension parallel audit + adversarial verification of the epistemic findings). This is the persistent punch-list: ✅ = done this session, ☐ = open for Jen. Overall the vault is in strong health — the problems are concentrated, not systemic.

> Scope covered: git/safety · validator/ontology/links · frontmatter/status/schema · epistemic integrity/contamination · drafts backlog/coherence · coupled tooling (saravi + vault-brain).

## ✅ Fixed this session

- **Backup** — pushed the 6 unpushed commits + committed the uncommitted Fable-pass working tree (drafts, deep-dives, LL Vetting Dossiers, new song/Sources pages, ~35 canon edits) as a checkpoint and pushed. Nothing is left only on local disk. *(was the #1 risk: realized single-point-of-failure)*
- **Validator → 0 errors · 0 warnings** (was 1/2):
  - [The Empty Mirror.md](Brain/Concepts/The%20Empty%20Mirror.md) — `related` typo `CONCEPT-TheWatchers` → `SONG-TheWatchers`, trimmed 8 → 5 curated.
  - [Ontology.md](_System/Ontology.md) — promoted `CONCEPT-TheEmptyMirror` from "Declared — pageless" into the Concepts table with a real gloss.
- **Live contamination fixed** — [Weirdness.md:165](Essays/Concepts/Songs/Weirdness.md:165) still asserted *"Mary appears twice (face hidden)"* as fact (the retracted 2026-06-06 claim), contradicting its own line 58. Reframed to the Lucius-counterfeits-Mary correction. This was the lone survivor of the K2 fold; the named contamination is now fully remediated vault-wide.
- **Link fixes** — `[[Pay Attention]]` → `[[Pay Attention (feat. little luna)|Pay Attention]]` in both City of Angels pages (Brain + Essays, 4 links).
- **Hygiene** — deleted 4 empty stray Obsidian-accident files at root (`2026-06-11.md`, `Untitled.canvas`, `Untitled 1.canvas`, `Untitled.base`); stopped tracking machine-local UI state (`.obsidian/graph.json`, `backlink.json`, `image-converter-image-alignments.json`) that re-dirtied the tree every launch.
- **vault-brain privacy** — tightened `config.py` so nested `Essays/_drafts` is physically excluded and `_drafts`/`_legacy`/`log.md` are pruned from the VAULT MAP; documented that it's local-research-only (saravi is the public path). *(see Code/JagWeb/vault-brain)*

## ☐ Open — judgment calls (yours)

**Medium**
- **Status reconciliation** — ~44 developed Brain pages are still `status: draft` (all 30 Brain/Concepts, ~10 songs, STF + 33 album pages, Mary). Genuine stubs are correctly draft, so it's selective drift. Pure-metadata pass; zero tooling risk (nothing compares `status`). Also delete the literal `*Stub — to be developed*` trailer lines on fully-built pages (e.g. [The Circus.md](Brain/Concepts/The%20Circus.md)).
- **Fold-to-canon backlog** (≈184KB, 7 findings drafts) — only the contamination class was folded. Highest-value single fold: the LL whole-album arc into the empty stubs at [Essays/Arcs/Lucius Lullaby.md:59](Essays/Arcs/Lucius%20Lullaby.md:59) (`§Album Arc` / `§Kabbalistic Mapping` / `§Themes` are `To be filled in`), from [LL Album Deep Dive (2026-06-13)](Essays/_drafts/Lucius%20Lullaby%20—%20Album%20Deep%20Dive%20(2026-06-13).md). Then Fable Pass C4–C20, STF/33 deep-dives.
- **STF label drift** — 18 track/essay pages flatten to "(2018, Atlantic)"; MSL + Credits + the album page correctly say *2018 independent → 2019 Atlantic redistribution*. Standardize the parenthetical to "(2018, independent; 2019 Atlantic)" or just "(2018)". *(verify against MusicBrainz first)*
- **"Counterarguments / Alternate Reads" missing from ~96%** of concept/character/song pages — the template mandates it as the anti-totalization defense. Start with high-traffic pages (Sir Lucius, Mary, Roy, The Thread, The Digital Double). Consider a validate.mjs warning.
- **Brain/Song template drift** — [Templates/Brain/Song.md](Templates/Brain/Song.md) is missing all 8 "Standard Tracking Fields" (CLAUDE.md §6), so new pages are born non-conformant.

**Low / cleanup**
- **`Life Is Good`** has a developed Essay but no Brain page / `SONG-LifeIsGood` page — its Essay frontmatter dangles SONG- refs. Create the Brain skeleton or confirm Essay-only.
- **3 fully-folded drafts** archivable to `_System/_legacy/` (~44KB): STF Integration Handoff (DONE; its one TODO now exists), Moths + Watchers briefs (already `folded-to-canon`).
- **Central open-questions register** — 563 open questions across 128 pages; recurring cross-page items (SARAVI = Sir Lucius?, Mirror Sessions BB episode URL) tracked in parallel. A `_System/Open Questions.md` would stop N-page drift.
- **Two developed Brain outliers** have truncated frontmatter (no connections/related): [Subject to Flooding (album).md](Brain/Albums/Subject%20to%20Flooding%20(album).md), [Jagwar Twin.md](Brain/Characters/Jagwar%20Twin.md).
- **Stale nav cluster** — dead `[[Songs]]`/`[[Characters]]`/`[[Theatrical]]`/`[[Symbol Index]]` footer links in [Essays/Arcs/Lucius Lullaby.md](Essays/Arcs/Lucius%20Lullaby.md) (deleted index stubs).
- **lib-frontmatter.mjs** doesn't strip inline `# comments` from scalar values — harmless now (no consumer compares `status`), latent if a publish-gate ever filters draft/stable.

## ☐ Open — deferred infra (needs discussion)
- **`.git` bloat** — 27M, ~18MB of committed Obsidian plugin binaries (excalidraw 8.4M, copilot 5.5M, quickadd 4.3M). History rewrite (`git filter-repo`) reclaims most but rewrites SHAs — discuss before doing. Going forward, consider gitignoring `.obsidian/plugins/*/main.js`.
- **saravi staleness** — the condensed oracle-source already drifts from canon (Soul Is A Star edited after the 2026-06-13 build); re-sync is fully manual. Add a shard-vs-source mtime staleness check to `compile.mjs`.
- **vault-brain role** — overlaps saravi (shared SARAVI persona + corpus). Decide: keep as local-only research tool (now scoped that way) or deprecate. saravi is the curated public path.

## ✅ Verified healthy (no action)
Secrets clean; `_Private/` correctly gitignored **and** untracked; no API keys in the vault repo. saravi privacy curation holds (zero `_Private`/draft/tier leakage into the oracle blob). Both `.env` keys can't leak (no git repo at saravi/vault-brain). MERCY-rule discipline holds; Secret-Document boundary honored; no thin-source Strong Reads in sample; no duplicate-entity collisions (Shine merge held); the contamination *defense* worked (caught the original error, propagated to 6/7 pages — Weirdness was the straggler, now fixed).
