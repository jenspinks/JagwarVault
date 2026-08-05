# Concepts Taxonomy Plan (2026-08-05) — PROPOSAL, awaiting Jen

> **Provenance:** proposed by ChatGPT (relayed by Jen 2026-08-05, verbatim in §6) after her call that the concept count itself is the overwhelm; verified and corrected against the live public vault by Claude Code the same day. **Nothing executed.** This page is classification and presentation planning only: no page bodies change, no files move, no URLs break.

## §1 Corrected inventory (verified against the vault, 2026-08-05)

The Concepts wing holds 88 files: 48 at the root (including the hub), 5 in The Sacred Truths (including its hub), 35 Deep End companions. GPT's headline counts are exact: **51 standalone entries** excluding the two hubs, **35 companions**.

But 3 of the 51 are already merged pointer stubs, executed 2026-07-13 (The Mouth → The Voice, The Flip and the Distorting Mirror → The Mirror, The Veil → The Mask). So the live standalone count is **48**, and GPT's 22-item reclassification list contains one stub (The Veil), making the effective reclass list **21**.

**Corrected arithmetic: 48 live entries − 21 reclassified = 27 conceptual entries = 5 foundations + 21 shelved supporting concepts + The Divide** (live but unshelved: its merge into Sir Rabbit is approved and deferred until Sir Rabbit's own pass). The Wheel is a Symbols page, not a Concepts page; its approved merge into The Loop and the Circle is still unexecuted and would trim the Symbols shelf, not this count. The 35 companions stay shelved in The Deep End and are untouched by this plan.

## §2 Corrections to the proposal

1. **Merge state was stale.** Mouth, Flip, and Veil are already stubs; the plan's "reduce 29 to 27 via those mergers" step is already done. Family listings below reference the live pages (The Voice, not The Mouth; the mirror family is The Empty Mirror + The Relational Mirror, with The Mirror itself a Symbols page reached cross-wing).
2. **Wing doors route to existing structures; no new basements.** The Deep End is already the basement. "Older Maps" is a door on the Concepts hub routing into the existing Sacred Truths hub and the Deep End's older-currents shelf; "How We Read" routes to the existing Source and Interpretation Policy + How to Read This Site; "Archive & Project History" is a drawer/door on the hub listing existing pages. New hub pages get minted only if a real gap shows after the reshuffle.
3. **Letters of Creation reshelvies with a rule attached:** the page carries the known angles/angels provenance over-claim (the public vault currently contradicts itself; source-side repair authorized 2026-07-16, still pending). Reshelve it without repeating any provenance claim in new hub copy.
4. **Classification is not a claim.** The metadata layer (§3) asserts nothing about the work; page bodies do not change in this pass, so no brain claims-audit is triggered by T1/T2. Any copy written for the hub (question cards, drawer glosses) does get the normal register check.

## §3 Adopted structure (with corrections applied)

**Frontmatter schema** added to each page in the wing (values: `kind: concept | framework | artifact | project-history | research-tool`; one primary `family` even where cross-links exist):

```yaml
kind: concept
family: source-reflection
subgroup: copies-and-digital-selves
depth: support
parent: Source vs Reflection
```

**The five families and their shelved children (21):**

| Foundation | Children |
|---|---|
| **Heart and Mind** | The Protector · The Voice |
| **Duality** | (bridge foundation; its "stories of the double" shelf lives in Older Maps: The Divided Self, Jacob and Esau, JT and Harry Potter) |
| **The Loop and the Circle** | The Pattern · Inversion · The Abyss · The House and the Vessel · Music as Pattern and Identity (+ cross-wing: The Wheel, until its approved merge executes) |
| **The Circus** | The Algorithm · Machine vs Human · The Audience · Consumption · Communion vs Spectacle · The Aquarium · The Labyrinth |
| **Source vs Reflection** | The Empty Mirror · The Relational Mirror · Witnessing vs Surveillance · Flattened Identity · The Digital Double · The Upload · The Jaguar (placement flag, §5) |

**The three wings (21 reclassified):**
- **Older Maps (13):** Kabbalah · Gnosticism · Hermeticism · Theosophy · Keilim · Nigredo · The Labors of Hercules · The Dweller on the Threshold · Jacob and Esau · The Divided Self · Jagwar Twin and Harry Potter · The Light-Bearer · Letters of Creation
- **Archive & Project History (5):** The I'm 33 Board · The Manifesto Cards · The Visual Canon Throughline · Gatekeeper Saga · The Realm
- **Reading Tools (3):** Inherited Substrate · The Speaker Problem · Pronoun Audit (I-You)

**The rebuilt Concepts hub, top to bottom:** the four orienting questions (Who is speaking? / What went wrong? / What keeps it running? / What might bring it home?) → the five foundations → five collapsed family drawers (the proven `[!feed]-` callout mechanism) → three wing doors → an All pages A–Z link. The questions teach; the five organize. Nothing becomes unfindable: drawers, A–Z, The Map, and search all remain (the Moon lesson).

**The four tests for any new standalone concept page (adopted verbatim):** states a distinct proposition; recurs across more than one song, era, or artifact; performs explanatory work its parent does not; its difference from its nearest sibling fits in one plain sentence. Fails → it becomes a section, example, artifact page, framework page, or research note.

**Grouped-not-merged pairs and the further-merge candidates** (Speaker Problem + Pronoun Audit; Music as Pattern → The Pattern; JT and Harry Potter; Keilim + House and Vessel; Communion vs Spectacle → The Audience; Flattened Identity): run LATER as a per-pair audit, grouping before merging, each fold individually gated by Jen with the normal claims check.

## §4 Implementation phases (on Jen's adopt)

- **T1:** metadata layer on the wing's pages (script-assisted, frontmatter only, zero visible change, validated).
- **T2:** hub rebuild per §3 (the only new visible copy: question cards + drawer glosses, register-checked).
- **T3:** re-run the two-door audit (Phase 3/4 tooling), refresh The Map, add the A–Z. Sidebar CSS untouched: the 9-row cap already holds.
- **T4:** the merge-audit queue, per-pair, open-ended.

T1+T2 ≈ one session; T3 quick.

## §5 Decision flags for Jen

1. Adopt the plan overall (yes / adjust)?
2. The Jaguar's primary family: Source vs Reflection ("ways of seeing") or kept beside the Characters frame as the project emblem?
3. Execute the approved Wheel → Loop and the Circle merge during this pass, or leave for later?
4. Wing door names: "Older Maps" / "Archive & Project History" / "How We Read the Work" (naming taste; all provisional).

## §6 GPT proposal (relayed 2026-08-05, verbatim)

Yes. I touched only the top-level presentation problem, not the deeper taxonomic problem. You are right that the number itself is excessive.
The public Concepts tree currently contains 51 standalone entries, excluding its two hubs, plus 35 Deep End companion pages. More importantly, many of those 51 are not actually concepts. They include artifacts, research methods, project history, comparative myths, and philosophical frameworks. Calling all of them "concepts" makes the project appear to require an enormous private vocabulary.
I would reduce the newcomer's mental model to five foundations, group the genuine concepts underneath them, and move everything else into clearly different kinds of shelves.

[Proposed taxonomy table: five roots (Heart and Mind / The Loop and the Circle / The Circus / Source vs Reflection / Duality) with subgroups and children; visitor-facing tree CORE IDEAS → five foundations with sub-branches, BELOW THE CORE → Older Maps, Artifacts and Project History, Reading Tools.]

The four plain-language questions we discussed would sit above this taxonomy as orientation. They would not replace the approved five:
- **Who is speaking?** → Heart and Mind + Duality
- **What went wrong?** → Protector + the divided self
- **What keeps it running?** → Circus + Loop
- **What might bring it home?** → Circle + Source vs Reflection

The questions teach. The five foundations organize.

**Remove non-concepts from the concept count.** I would reclassify 22 of the 51 entries without deleting or moving their files. Older Maps and mythic parallels (lenses used to interpret Jagwar Twin, not additional pieces of Jagwar Twin vocabulary): Kabbalah, Gnosticism, Hermeticism, Theosophy, Keilim, Nigredo, The Labors of Hercules, The Dweller on the Threshold, Jacob and Esau, The Divided Self, Jagwar Twin and Harry Potter, The Light-Bearer, Letters of Creation, The Veil. They should live under one **Older Maps** entrance with subgroups such as traditions, transformation maps, and stories of the divided self. The existing Sacred Truths hub already provides the beginning of this structure. Artifacts and project history (evidence-bearing objects or historical narratives, not concepts): The I'm 33 Board, The Manifesto Cards, The Visual Canon Throughline, Gatekeeper Saga, The Realm. These belong under something like **Archive and Project History**. Reading and research tools (how the guide performs its analysis): Inherited Substrate, The Speaker Problem, Pronoun Audit. They belong under **How We Read the Work** or Source & Structure. That classification alone changes the honest count from 51 purported concepts to approximately 29 actual conceptual entries.

**Then reduce the 29 through controlled consolidation.** The existing Master Plan has already approved the safest mergers: The Mouth → The Voice; The Flip and the Distorting Mirror → The Mirror; The Veil → The Mask; The Wheel → The Loop and the Circle; The Divide → Sir Rabbit, deferred until the Sir Rabbit page is ready. [Corrected in §1–§2: the first three are already executed stubs.] That means the site can move from "51 concepts" to: **5 foundations, about 21 supporting concepts, 3 separate research/archive/framework wings.** That is already a dramatic reduction without losing any analysis.

**Further merge candidates worth auditing** (not automatic): The Speaker Problem + Pronoun Audit (one question and its empirical appendix); Music as Pattern and Identity → The Pattern; Jagwar Twin and Harry Potter → The Divided Self / Gatekeeper Saga; Keilim + House and Vessel; Communion vs Spectacle → possibly a child of The Audience; Flattened Identity → potentially the outcome section of Machine vs Human or Witnessing vs Surveillance. Grouping should be attempted before merging. If two pages perform distinct explanatory jobs after being given a clear parent, they should remain separate. If the child page merely repeats the parent with a new set of examples, it should become a section or Deep End appendix.

**Pages that should be grouped but not merged:** Heart and Mind / Duality; Circus / Algorithm / Machine vs Human; Audience / Consumption / Communion vs Spectacle; Aquarium / Labyrinth; Source vs Reflection / Empty Mirror / Relational Mirror; Digital Double / Upload; Pattern / Inversion. The taxonomy solves their apparent redundancy by teaching their relationship.

**How to implement it without breaking URLs:** build this as a virtual taxonomy first. Do not physically move files or rename URLs. Each page can receive internal classification metadata (`kind` / `family` / `subgroup` / `depth` / `parent`; kinds: concept, framework, artifact, project-history, research-tool). Every entry should have one primary family, even if it has several cross-links. The public Concepts hub would then show: four orienting questions; the five foundations; five collapsed family drawers; three separate doors (Older Maps, Archive and History, How We Read); a small **All pages A–Z** link. That preserves the Moon lesson: nothing becomes unfindable.

**A rule to prevent the ontology growing back:** a new standalone concept page must (1) state a distinct proposition, not merely name an object or source; (2) recur across more than one song, era, or public artifact; (3) perform explanatory work its parent does not already perform; (4) have its difference from its nearest sibling explainable in one plain sentence. If it fails those tests, it becomes a section, example, artifact page, framework page, or research note.

The key realization is that the site does not truly have 51 concepts. It has roughly five foundations, around twenty supporting concepts, and a large body of frameworks, evidence, history, and analytical tools currently wearing the wrong shelf label.
