# Concepts Taxonomy Plan (2026-08-05, rev. b) — PROPOSAL, awaiting Jen

> **Provenance:** proposed by ChatGPT (relayed by Jen 2026-08-05, verbatim in §6) after her call that the concept count itself is the overwhelm; verified and corrected against the live public vault by Claude Code the same day. **Rev. b (same day):** amended after a second ChatGPT review round (verbatim in §7) whose central factual correction was verified against the vault and git. **Nothing executed.** This page is classification and presentation planning only: no page bodies change, no files move, no URLs break.

## §1 Corrected inventory (verified against the vault and git, 2026-08-05)

The Concepts wing holds 88 files: 48 at the root (including the hub), 5 in The Sacred Truths (including its hub), 35 Deep End companions. The headline counts are exact: **51 standalone entries** excluding the two hubs, **35 companions**.

**Four of the 51 are merged pointer stubs**, all executed 2026-07-13: The Mouth → The Voice, The Flip and the Distorting Mirror → The Mirror, The Veil → The Mask, and **The Divide → The Abyss** (git: the 07-13 01:48 commit shrank it from 16.9 KB to a 394-byte stub). ⚠ The Divide's frontmatter says `status: draft`, not `status: merged` like its three siblings, which is why status-field greps undercount the stubs; T1 aligns it.

**Governance note on the fourth stub:** the executed target (The Abyss) differs from the Master Plan's approved instruction (Divide → Sir Rabbit, deferred). The executed state is content-correct: The Abyss verifiably holds the Great Divide material, including the Sir Rabbit poem's crossing, and the stub explains the routing. Recommendation: accept the executed state rather than reopen it (flag §5.4).

**Arithmetic, base:** 51 − 4 stubs = **47 live entries**; − 21 reclassified = **26 = 5 foundations + 21 supporting**.

**Arithmetic, recommended:** after the §2 relationship re-checks, The Light-Bearer and The Realm stay concepts, so 19 reclassify and the count is **28 = 5 foundations + 23 supporting**, with wings of 12 + 4 + 3. The range (26–28) turns on the two §5 placement flags. Principle, from the review itself: **the count follows the classification, never the reverse.**

## §2 Corrections and principles

1. **Merge state.** Four stubs, not the two mergers GPT's original planned to perform and not the three the first draft of this plan counted; already executed, per §1. Family listings reference the live pages (The Voice, not The Mouth; the mirror family is The Empty Mirror + The Relational Mirror, with The Mirror itself a Symbols page reached cross-wing).
2. **Wing doors route to existing structures; no new basements.** The Deep End is already the basement. "Older Maps" routes into the existing Sacred Truths hub and the Deep End's older-currents shelf; "How We Read" routes to the existing Source and Interpretation Policy + How to Read This Site; the archive wing is a drawer/door listing existing pages. New hub pages get minted only if a real gap shows.
3. **Letters of Creation reshelvies with a rule attached:** the page carries the known angles/angels provenance over-claim (source-side repair authorized 2026-07-16, still pending). Reshelve it without repeating any provenance claim in new hub copy.
4. **Classification carries meaning** *(supersedes rev. a's "classification is not a claim," withdrawn on review)*. Declaring one idea a child of another is an interpretive assertion about how the work is structured. Every placement therefore passes a lightweight **relationship audit**: does the proposed parent, family, or kind reflect the project, page-stated where possible, brain-checked where not? Sentence-level page audits are not triggered; contested placements go to Jen. Hub copy (compass lines, card glosses) additionally gets the normal register check.
5. **Placement re-checks already run under that audit:**
   - **The Light-Bearer is not an external lens.** Its own lore drawer names Roy's public statement (the intellect as "the highest angel in God's kingdom… the most potential to fall… that's kind of like the mind") as "the warrant for this entire page," and adds that the material "isn't a clever overlay laid on top of Lucius. It's the structure Roy reached for to describe him." Recommended: `kind: concept`, family Heart and Mind, subgroup the distorted intellect. Alternative (§5.2): `kind: framework` cross-shelved visibly from Heart and Mind + Sir Lucius. Either way it is not buried to lower the count.
   - **The Realm is an active project-world structure, not history.** The page states the pairing itself: "Where The Circus is the blockade, the Realm is the route around it." Recommended: `kind: concept`, family The Circus, subgroup the route around the machine. Alternative (§5.3): keep it in the archive wing and rename the wing "Archive, Project World & History."
   - **The Jaguar: resolved to Source vs Reflection** as primary family (the page's grounded core is Roy's reciprocal-seeing explanation and "humans are mirrors for each other"), with prominent doors kept from the Jagwar Twin and Characters pages. No separate emblem family needed.
   - **The Visual Canon Throughline:** archive wing by default; Reading Tools is defensible (minor, §5.7).

## §3 Adopted structure (rev. b)

**Frontmatter schema** (new fields; `kind` is the semantic taxonomy; the existing `type:` field stays untouched as the old presentation field until separately audited; no collisions, `kind:` is unused vault-wide):

```yaml
kind: hub | concept | framework | artifact | project-history | research-tool | redirect | deep-companion
family:      # one primary family, even where cross-links exist
subgroup:
depth: foundation | support | deep
parent:
canonical:   # redirects only: the destination page
```

The 4 stubs get `kind: redirect` + `canonical:` (and The Divide's status aligned to its siblings). The 35 companions get `kind: deep-companion` with `parent:` pointing to their surface page. The two hubs get `kind: hub`.

**The rebuilt Concepts hub, top to bottom** (consolidated per the §7 review: the foundation cards ARE the expandable units; no separate drawer tier):

1. **Four-line compass** (compact, non-clickable orientation): Who is speaking? · What went wrong? · What keeps it running? · What might bring it home?
2. **Five foundation cards**, each carrying its summary plus its children inside one collapsed `[!shelf]-` drawer:

| Foundation card | Inside its drawer |
|---|---|
| **Heart and Mind** | The Protector · The Voice · The Light-Bearer |
| **Duality** | (bridge foundation, no child list) one door: Stories of the Double → Older Maps |
| **The Loop and the Circle** | The Pattern · Inversion · The Abyss · The House and the Vessel · Music as Pattern and Identity (+ cross-wing: The Wheel, until its approved merge executes) |
| **The Circus** | The Algorithm · Machine vs Human · The Audience · Consumption · Communion vs Spectacle · The Aquarium · The Labyrinth · The Realm |
| **Source vs Reflection** | The Empty Mirror · The Relational Mirror · Witnessing vs Surveillance · Flattened Identity · The Digital Double · The Upload · The Jaguar |

3. **Below the core:** three wing doors, routing per §2.2: **Older Maps (12):** Kabbalah · Gnosticism · Hermeticism · Theosophy · Keilim · Nigredo · The Labors of Hercules · The Dweller on the Threshold · Jacob and Esau · The Divided Self · Jagwar Twin and Harry Potter · Letters of Creation. **Archive & Project History (4):** The I'm 33 Board · The Manifesto Cards · The Visual Canon Throughline · Gatekeeper Saga. **Reading Tools (3):** Inherited Substrate · The Speaker Problem · Pronoun Audit (I-You).
4. **Utility:** All pages A–Z, excluding the redirects from the primary count; the four stub titles sit in a small "Former titles and merged pages" sub-list so they stay discoverable without inflating the ontology.

**Callout identity:** mint `[!shelf]-` for the taxonomy drawers (CSS in publish.css after the one-color-menu block, mirrored to field-guide.css). Not `[!feed]` (means "Read next") and not `[!map]` (already an in-page device on The Realm, Nigredo, The Light-Bearer, The Jaguar, The Algorithm, Inherited Substrate, and others).

**The four tests for any new standalone concept page (adopted verbatim):** states a distinct proposition; recurs across more than one song, era, or artifact; performs explanatory work its parent does not; its difference from its nearest sibling fits in one plain sentence. Fails → it becomes a section, example, artifact page, framework page, or research note.

**Grouped-not-merged pairs and the further-merge candidates** (Speaker Problem + Pronoun Audit; Music as Pattern → The Pattern; JT and Harry Potter; Keilim + House and Vessel; Communion vs Spectacle → The Audience; Flattened Identity): run LATER as a per-pair audit, grouping before merging, each fold individually gated by Jen with the normal claims check.

## §4 Implementation phases (on Jen's adopt)

- **T0 — relationship audit:** one-line justification per placement (page-stated where possible, brain-checked where not); contested placements to Jen. §2.5 already covers the four the review flagged.
- **T1 — metadata, piloted then mechanical:** pilot the schema on six representative pages (one foundation, one support, one framework, one artifact, one redirect, one deep-companion) → validate rendering and metadata → apply mechanically across the wing by script → review the complete diff. Includes aligning The Divide's stub status.
- **T2 — hub rebuild** per §3, drafted separately from the mechanical work; the only new visible copy (compass lines, card glosses) is register-checked. `[!shelf]` CSS lands here.
- **T3 —** re-run the two-door audit (Phase 3/4 tooling), refresh The Map, add the A–Z.
- **T4 —** the per-pair merge queue, open-ended.

## §5 Decision flags for Jen

1. Adopt rev. b overall (yes / adjust)?
2. **The Light-Bearer:** (a) concept under Heart and Mind [recommended] or (b) framework cross-shelved from Heart and Mind + Sir Lucius. (a) is part of the 5 + 23 count; (b) makes it 5 + 22 with Older Maps at 13.
3. **The Realm:** (a) Circus child, "the route around the machine" [recommended] or (b) archive wing renamed "Archive, Project World & History."
4. **Accept the executed Divide → Abyss placement** (it differs from the approved deferred Sir Rabbit target)? [recommended: accept]
5. Execute the approved **Wheel → Loop and the Circle** merge during this pass, or later?
6. **Wing door names** (all provisional): Older Maps / Archive & Project History / How We Read the Work.
7. Minor: **Visual Canon Throughline** in the archive wing [default] or Reading Tools.

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

**Then reduce the 29 through controlled consolidation.** The existing Master Plan has already approved the safest mergers: The Mouth → The Voice; The Flip and the Distorting Mirror → The Mirror; The Veil → The Mask; The Wheel → The Loop and the Circle; The Divide → Sir Rabbit, deferred until the Sir Rabbit page is ready. [Corrected in §1–§2: the first three, plus Divide → Abyss, are already executed stubs.] That means the site can move from "51 concepts" to: **5 foundations, about 21 supporting concepts, 3 separate research/archive/framework wings.** That is already a dramatic reduction without losing any analysis.

**Further merge candidates worth auditing** (not automatic): The Speaker Problem + Pronoun Audit (one question and its empirical appendix); Music as Pattern and Identity → The Pattern; Jagwar Twin and Harry Potter → The Divided Self / Gatekeeper Saga; Keilim + House and Vessel; Communion vs Spectacle → possibly a child of The Audience; Flattened Identity → potentially the outcome section of Machine vs Human or Witnessing vs Surveillance. Grouping should be attempted before merging. If two pages perform distinct explanatory jobs after being given a clear parent, they should remain separate. If the child page merely repeats the parent with a new set of examples, it should become a section or Deep End appendix.

**Pages that should be grouped but not merged:** Heart and Mind / Duality; Circus / Algorithm / Machine vs Human; Audience / Consumption / Communion vs Spectacle; Aquarium / Labyrinth; Source vs Reflection / Empty Mirror / Relational Mirror; Digital Double / Upload; Pattern / Inversion. The taxonomy solves their apparent redundancy by teaching their relationship.

**How to implement it without breaking URLs:** build this as a virtual taxonomy first. Do not physically move files or rename URLs. Each page can receive internal classification metadata (`kind` / `family` / `subgroup` / `depth` / `parent`; kinds: concept, framework, artifact, project-history, research-tool). Every entry should have one primary family, even if it has several cross-links. The public Concepts hub would then show: four orienting questions; the five foundations; five collapsed family drawers; three separate doors (Older Maps, Archive and History, How We Read); a small **All pages A–Z** link. That preserves the Moon lesson: nothing becomes unfindable.

**A rule to prevent the ontology growing back:** a new standalone concept page must (1) state a distinct proposition, not merely name an object or source; (2) recur across more than one song, era, or public artifact; (3) perform explanatory work its parent does not already perform; (4) have its difference from its nearest sibling explainable in one plain sentence. If it fails those tests, it becomes a section, example, artifact page, framework page, or research note.

The key realization is that the site does not truly have 51 concepts. It has roughly five foundations, around twenty supporting concepts, and a large body of frameworks, evidence, history, and analytical tools currently wearing the wrong shelf label.

## §7 Review round 2 (relayed 2026-08-05, verbatim) + disposition

**Disposition (Claude Code, 2026-08-05):** ADOPTED after verification: the fourth stub and corrected arithmetic (git-confirmed: The Divide folded 07-13, 01:48 commit, 16.9 KB → 394 B; its `status: draft` frontmatter explains the earlier three-stub count); the consolidated hub layout (compass + foundation cards as the drawers; Duality's honest single door); the expanded metadata schema with `canonical` and the A–Z redirect handling; the withdrawal of "classification is not a claim" in favor of the relationship audit; the piloted T1 split; the non-burial of The Light-Bearer and The Realm; the Jaguar resolution. ADJUSTED: `[!map]` is unavailable for drawers (already an in-page device on six-plus pages), so the drawer callout is `[!shelf]-`; and the Light-Bearer / Realm re-checks are taken one step further than the review's minimum (recommended as concept placements with page-stated warrants, with the count effect stated openly: the range is 26–28 and the count follows the classification). The review's verdict arithmetic (26 = 5 + 21) is the base case; the recommended case is 28 = 5 + 23.

[Review text, verbatim:]

The plan is very close, but I would not approve it unchanged. The taxonomy itself is strong; the remaining issues are one factual count error, one structural duplication problem, and several classifications that may be optimizing the number at the expense of accuracy.
**Critical factual correction:** There are four merged pointer stubs, not three: The Mouth → The Voice; The Flip and the Distorting Mirror → The Mirror; The Veil → The Mask; The Divide → The Abyss. The Divide was already folded into The Abyss on July 13. Its live page says precisely that, and The Abyss contains the Great Divide material. This conflicts with the older Master Plan instruction that deferred Divide → Sir Rabbit, but the executed public state is unambiguous. The corrected arithmetic is therefore: 51 entries excluding the two hubs, minus 4 pointer stubs, equals 47 live content entries, minus 21 reclassified non-concepts, equals 26 actual concept pages, which is exactly 5 foundations + 21 supporting concepts. There is no unshelved Divide and no future reduction from merging it unless you decide to reverse the already-executed Abyss placement. I would accept the live Abyss merge and correct the plan rather than reopen it.
**Do not show questions, foundations, and drawers as three separate layers.** The proposed hub currently implies: four question-cards, five foundation cards, five family drawers, three wing doors, A–Z. That is potentially eighteen visible instructional devices. It would be a well-organized version of the same overwhelm. The four questions should be a compact, non-clickable compass. The five foundations should themselves be the expandable family units, combining the foundation summary and its children. There should not be another independent set of five drawers beneath them. [Layout sketch: FOUR-LINE COMPASS → FIVE FOUNDATION CARDS with children inline (Duality → Stories of the Double [Older Maps door]) → BELOW THE CORE: Older Maps · Archive/Project World · How We Read → UTILITY: All Pages A–Z.] Duality exposes another issue in the current plan: it is called one of "five families" but has no children in its drawer. It is a foundation and bridge, not a populated family. Giving its card one door to the "Stories of the Double" subgroup solves that honestly.
**The metadata schema needs more kinds.** The proposed fields do not currently collide with existing public-vault metadata, which is good. But the allowed `kind` values cannot classify all 88 files the plan says it will modify. At minimum: kind: hub | concept | framework | artifact | project-history | research-tool | redirect | deep-companion; family; subgroup; depth: foundation | support | deep; parent; canonical. The four pointer stubs need `kind: redirect` and a `canonical` destination. The 35 Deep End pages need `kind: deep-companion`, not `concept`, and should point to their surface parent. The Concepts and Sacred Truths hubs need `kind: hub`. The existing `type: concept` can remain temporarily if CSS or templates depend on it. The plan should explicitly say that `kind` is the new semantic taxonomy while `type` remains the old presentation field until audited. The A–Z list should exclude redirect stubs from its primary count. Those titles can appear in a small "Former titles and merged pages" section so they remain discoverable without making the ontology look larger.
**Classification does carry meaning.** I disagree with §2.4 saying classification is not a claim. It does not alter a page's evidence, but declaring that one idea is a child of another is an interpretive assertion about how the work is structured. This does not require re-auditing every page body. It does require a lighter relationship audit against the brain, especially for contested or structurally important placements. The audit should ask whether the proposed parent-child relationship accurately reflects the project, not whether every sentence on the page remains sourced.
**Three placements deserve another look.** The Light-Bearer should not quietly become only an Older Map. Its live surface page explicitly says the reading is warranted by Roy's own Lucifer/intellect analogy and that the framework is not merely imposed from outside. The Master Plan also treated it as one-click support from Lucius. I would classify it as either `kind: concept`, family Heart and Mind, subgroup protective/distorted intellect; or `kind: framework`, but cross-shelved visibly from Heart and Mind and Sir Lucius. Do not bury it solely to lower the count. The Realm is not merely project history. Gatekeeper Saga clearly is history; the Realm is an active project-world term, community structure, and proposed alternative to the Circus. Rename that wing Archive, Project World & History, or retain The Realm as a Circus child under "routes around the machine." The Jaguar is defensible under Source vs Reflection. Its page's grounded core is Roy's explanation of the jaguar as reciprocal seeing and humans as mirrors. I would make Source vs Reflection its primary conceptual family while preserving prominent doors from the Jagwar Twin and Characters pages. The placement flag can therefore be resolved without creating a separate emblem family. Visual Canon Throughline may fit better under Reading Tools than Project History, but that is a minor classification choice.
**Callout and execution refinements.** The plan should reuse the collapsed-callout behavior without using `[!feed]` for taxonomy drawers. `feed` already means "Read next." A `[!map]-` or dedicated `[!shelf]-` identity would preserve the site's semantic design language. I would also split the claimed one-session T1+T2 execution: pilot the schema on one foundation, one support page, one framework, one artifact, one redirect, and one Deep End companion; validate rendering and metadata; apply the schema mechanically across the wing; review the complete diff; draft the hub separately. That makes an 88-file metadata operation safer and keeps mechanical classification separate from visible editorial writing.
**Verdict.** Approve the underlying taxonomy after these amendments. Its strongest and most important conclusion survives intact: the site does not have 51 live concepts; it currently has 26 concept-bearing pages, four redirects, and 21 pages that belong to other intellectual kinds. That is the simplifying truth the public hub should teach. Five foundations organize the conceptual world, twenty-one supporting concepts sit beneath them, and the frameworks, artifacts, history, and research tools are available through separate doors rather than presented as additional things a newcomer must learn.
No files were changed in this review.
