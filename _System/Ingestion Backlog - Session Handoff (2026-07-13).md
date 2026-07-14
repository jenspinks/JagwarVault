---
title: Ingestion Backlog - Session Handoff
type: handoff
created: 2026-07-13
status: queued (Jen will start a fresh session on this)
---
# Ingestion Backlog — Session Handoff (2026-07-13)

**Purpose.** A fresh session should be able to read THIS file + [[CLAUDE]] and run the audit of *un-ingested / parked* material in the brain — the risk the Mozart thread exposed — then produce a **Source Ingestion Ledger** and fold the genuine deltas at proper tier. Read-only recon was done 2026-07-13; **nothing is folded yet.**

## READ FIRST
- [[CLAUDE]] §source rules + §"Compilation ≠ citation" (the `citable: false` / finding-aid doctrine — both halves).
- Memory: `feedback_accuracy_first`, `project_mozart_divided_self` (the **worked example** of correct handling: how the Mozart doc was lost, and how [[Mozart]] + [[The Divided Self]] were rebuilt from anchors, properly tiered).
- The existing trackers (below) — **do not rebuild them**; extend them.

## The failure mode (the Mozart smoking gun)
The Mozart synthesis lived in an **external doc** — *"Themes, Parallels, and Similarities between Mozart and JT"* — that was **never ingested** (it is not a file in the vault; it survives only as a *mention* inside [[Essays/_drafts/Moths to the Flame — analysis brief (external review)]]). The finding-aid discipline worked exactly as designed: the Moths brief flagged the doc `citable: false`, noted its **one** delta relevant to *Moths* (Queen-of-the-Night), and moved on. What never happened: **"so what ELSE is in that Mozart doc?"** — the Amadeus / Freemason / divine-vessel synthesis, unrelated to Moths, just sat there and vanished.

**The precise gap:** a lead **nested one level deep inside a finding-aid**, whose payload is *unrelated to the page that referenced it*. The fold-status trackers track drafts and pages — **not docs-mentioned-inside-drafts** — so these leads fall through.

**The nature of the interference:** **incompleteness, not corruption.** `citable: false` stops these from leaking in as *false* — the vault is not *wrong* because of them. The risk is **under-reading** (missing threads like Mozart), never mis-reading. Fix the blank spots; the map is not in error.

## What's already in place (extend, don't rebuild)
- [[_System/Drafts Fold-Status]] — draft → fold status.
- [[_System/Cross-Vault Fold Status]] — public ↔ brain fold status.
- [[_System/Master Source List]] · [[_System/Claim Ledger]] (425 harvested claims) · [[_System/open-questions]] · [[_System/Parallel Works Index]].
- The **proven differential-mining method**: [[Essays/_drafts/Old-Chats Mining — Fable findings (2026-06-13)]] — 8 parallel agents diffed a 264K-char external Google Doc against the vault, surfaced 5 genuine deltas, folded them. **Re-use this method per dossier.**

## Scope (2026-07-13 recon — read-only)
- **~55 `citable: false` files**, but most are *meant* to be. Categories:
  - **Meta / by-design (SKIP):** CLAUDE.md, GEMINI.md, `_System/` (AI Quickstart, Claim Ledger, Master Source List, entity-map, file-map, index, log, open-questions).
  - **Folded pages that merely CITE finding-aids (SKIP — the product, not the backlog):** Brain/Concepts/The Empty Mirror, Brain/Concepts/The Thread, Brain/Songs/33/The Circle, Brain/Songs/STF/Superhuman, Essays/Concepts/Songs/Soul Is A Star, Essays/Concepts/Songs/The Circle.
  - **★ GENUINE PARKED-SYNTHESIS CANDIDATES (~30 — THE BACKLOG TO AUDIT):**
    - **Research dossiers:** `Sources/Reference/` → Bailey - Labours of Hercules (AI research dossier); Bailey - The Labours of Hercules (reference); Joni Mitchell — JT-relevant analysis (research dossiers) (+ Joni index, Joni source index); **Roy's Stated Influences (research dossier)** (holds the un-mined influences roster — Bowie, Radiohead, Wonka, etc.; Mozart just graduated out of it); Subject to Flooding — context & sources (research dossier).
    - **Vetting dossiers (~24):** `Essays/_drafts/33 Vetting Dossiers/00–03`, `LL Vetting Dossiers/00–08`, `STF Vetting Dossiers/00–07`. **Check each against [[_System/Drafts Fold-Status]] first** — many may already be folded; only the un-folded ones need mining.
    - **Draft briefs:** Fable Pass — Findings (C4–C14, C16–C20, §3-bis explicitly "not yet folded"); Lucius Lullaby — Album Deep Dive; The Crowd Sings It Back; **Information anchors — UNVERIFIED leads (need public sourcing)**; Old-Chats Mining (mostly mined; confirm the "whole-2022 sweep" gap it names).
    - **HoM puzzle finding-aids** (`Sources/Artifacts/HoM - Candidate Codes / Code Grammar / Master Brute-Force`) — a **separate track** (ARG-solving, not "understanding the work"); lower priority here, note but don't fold into analytical canon.
- **81 explicit "not yet folded / finding-aid / leads only / verification backlog" flags** across the vault — the triage list. (Many are the vault correctly documenting its own discipline; the subset that says *"still a gap / not yet folded / separate task"* is the real queue.)
- **★ Highest-risk = external docs that are NOT files at all** (the Mozart pattern). Known so far: the **Mozart doc** (now handled); the **"Inside of the Inside" NotebookLM artifact** (named on Essays/Concepts/Songs/The Circle — an AI Audio-Overview, `citable:false`, may hold un-traced Joni/Wise-One synthesis); the **old-chats Google Doc** (raw deleted after mining — retained only in a past session's tool-results). These can't be differentially mined without **Jen retrieving the original**, or reconstructing from anchors (as Mozart was).

## The work — three passes
1. **Enumerate + cross-check (cheap — DO THIS FIRST, report before committing further).** Take the ~30 candidates above; for each, check whether its ingestion status is recorded in [[_System/Drafts Fold-Status]] / [[_System/Cross-Vault Fold Status]]. Anything not listed = a blind spot. Output: a first-cut status per file (folded / partial / parked / unknown). This tells us whether it's a handful of Mozart-sized holes or a real backlog.
2. **Hunt dangling external-doc leads.** Grep every reference to a doc that *isn't a file in the vault* (finding-aids naming other docs, NotebookLM/AI artifacts, external chats). Each becomes a ledger row; flag the ones needing Jen to retrieve the original.
3. **Differential-mine** each genuinely un-folded dossier against the brain (the Old-Chats 8-agent method): read it, diff its content vs existing nodes, surface **every** delta (not just the one that prompted its mention), triage.

## The deliverable
- **`_System/Source Ingestion Ledger.md`** (or fold into Master Source List / Drafts Fold-Status): a complete register — every input (dossier, draft, external doc, NotebookLM, old-chat, research pass) with a status: **fully-folded / partial-with-listed-deltas / parked-by-design / external-and-never-retrieved.**
- **One new standing rule** (would have caught Mozart outright): *a finding-aid that names another external doc must give that doc its own ledger row, not a passing mention.*
- The genuine deltas folded at proper tier (`[G]`/`[W]`/`[~]`/`[?]`), each traced to a primary before it can lift tier.

## Discipline / guards (hard — accuracy is law)
- **Keep the `citable: false` doctrine intact:** extract the **insight**, keep the **source** uncitable; a concept in a finding-aid is validated + cited **through the primary it references**, never the doc itself. Trace-to-primary before folding; if no public primary, it stays a `[~]`/`[?]` reading, not grounded.
- **Tier everything;** never fabricate; never framework→plot-fact; respect `threshold_state`.
- **Boundaries:** several finding-aids may reference `_Private/` material or the Secret Doc — never fold private content or cite it; watch for circular/private citations (the NotebookLM upload-set caution).
- The **Mozart node + The Divided Self** are the reference implementation of doing this right — mirror that handling.

## Recommended first move
Run **Pass 1 only** (enumerate + tracker cross-check), report the true size, then let Jen decide the depth of Passes 2–3.

## Recon commands (re-runnable, read-only; from vault root)
```
# 1. citable:false inventory
grep -rliE "citable:? *false|citable-false" . --include='*.md' | grep -v "/_Private/" | sort
# 2. fold-gap / un-ingested flags
grep -rinE "not yet folded|flagged,? not folded|never ingested|verification backlog|finding[- ]aid|leads only|un-?ingested|pending.*fold|still a gap|separate task" . --include='*.md' | grep -v "/_Private/"
# 3. external-doc leads (docs referenced that may not be files)
grep -rinE "external (review|chat|research|doc)|old.?chats|research dossier|(doc|document) (named|titled|called)|NotebookLM|google doc" . --include='*.md' | grep -v "/_Private/"
```
