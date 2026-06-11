# Fable Pass — Operating Brief (full-corpus coherence & discovery)

> **What this file is.** The orientation document for a **Fable 5 session** doing a
> **full-corpus coherence + discovery pass** over the whole vault. Read this first,
> then [[CLAUDE]] (authoritative spec) and [[ARCHITECTURE]] (system overview).
> Where this brief and [[CLAUDE]] ever disagree, **CLAUDE.md wins.**
>
> **Why a different model.** Song-by-song authoring is good at depth and bad at
> *the whole*. Fable is brought in for the read no single authoring session has
> had: the entire corpus held at once — to test whether it coheres, catch drift
> and contamination that accreted page-by-page, and surface cross-corpus patterns
> that local work could not see.
>
> **Snapshot:** HEAD `d69f32e` · 152 pages · 0 errors · 0 warnings · 47 lyric
> sources (44 `stable`, 3 `draft`: SOL, dumbledore, The Circle (Lucius Version)).
> Re-date this when the pass begins.

---

## 0. The one rule that governs everything

This vault's entire reason to exist is **epistemic discipline**: every interpretive
claim is tagged by how well it is supported, and the architecture exists to stop
ungrounded claims from silently hardening into "fact." The named, load-bearing
risk is **contamination** — *one wrong connection written into canon is inherited
by every future session as truth, and the linter will not catch it.*

A fresh, powerful model is **the single most dangerous actor** against that rule,
because it pattern-matches brilliantly and will happily totalize. So:

**DEFAULT OUTPUT MODE — read-mostly. Fable produces a findings report; it does
NOT mutate canon directly.** Discoveries and coherence flags go into a report
(see §5). Code folds approved findings into Brain/Essays afterward, the same way
GPT/Gemini external-review briefs are folded. This is not a courtesy — it is the
contamination firewall. *(Jen can override and authorize direct edits to specific
files; absent that, touch nothing under `Brain/`, `Essays/`, `Sources/`,
`_System/Ontology.md`.)*

The operational test for any new interpretive claim, applied before it is even
written into the report: **"Would this survive if the Secret Document did not
exist?"** If no, it cannot enter the vault — flag it `[P]`/private instead.

---

## 1. The tier system (you must speak in it)

Every claim belongs to exactly one tier; tiers are never silently upgraded.

- **`[G]` Grounded** — a lyric, public video, interview, or verified metadata
  supports it directly. Cite the source; no hedging.
- **`[W]` Strong Read** — interpretation with **≥2 public anchors**. Always hedged
  (*reads as, suggests, likely*). Never stated as confirmed authorial intent.
- **`[~]` Resonance** — framework-level correspondence (Jungian, Kabbalistic,
  Hermetic, etc.). Attributed to the framework, never claimed as fact.
- **`[P]` Private** — the author's stated personal position / Secret-Document-
  adjacent. May guide silently; never grounds a public claim.
- **`[?]`** — uncertain / flagged for verification.

Discovery is welcome. **Ungrounded discovery asserted as `[G]` is the failure
mode.** When you find a beautiful cross-corpus pattern, your job is to find its
tier, not to make it true.

The anti-patterns the system actively guards against — name them when you catch
them: **premature synthesis, retrospective totalization** (reading everything
through one lens), **register collapse** (*"Lucius is the moon"* vs *"Lucius
operates in a lunar register"*), **authorial-intent overreach**, **source-
laundering** (a framework reading quietly re-cited as grounded).

---

## 2. The two jobs

### A. Coherence audit (the corpus as one object)

Read across the whole thing and find where it does **not** cohere:

1. **Brain ⇄ Essay disagreement** — the two are meant to be two renderings of one
   analytical pass. Find songs/concepts where the Brain page and the Essay assert
   different things, carry different tiers for the same claim, or have drifted.
2. **Contamination survivors** — claims that hardened from `[W]`/`[~]` into stated
   fact without anchors; pages written *before* lyrics were in-vault that may still
   carry pre-verification reads (see the **Mary correction**, §4). The Spotify pass
   (§3) just made 14 lyric sources `stable` — **pages analyzed against the old
   drafts should be re-checked against the now-stable text.**
3. **Tier violations** — `[G]` claims with no citation; Strong Reads with <2
   anchors; resonance quietly upgraded.
4. **Register collapse & totalization** — one lens (the Circus, the Mirror, Heart/
   Mind) flattening songs that resist it.
5. **Ontology / link integrity** — `related`/`connections` that point nowhere
   meaningful, missing reciprocal links, concepts referenced everywhere but never
   defined. *(The validator catches broken IDs; you catch broken sense.)*
6. **Three-register Lucius** (§4) and other characterization flatness.

### B. Discovery (what local work could not see)

1. **Cross-corpus motif threads** — symbols/phrases that recur across songs and
   eras and have **not** been tracked (the existing trackers: [[Theme Tracker]],
   the Mary divine-feminine-voice tracker, interpolation log). Propose new threads
   with their tier and their anchor list.
2. **Era-level arcs** — STF (2018/19) → 33 (2022) → singles → Lucius Lullaby
   (2026): development, reversal, self-quotation across the catalogue.
3. **Interpolation / self-quotation** — the album seams (1→2, 9→10), shared refrains
   ("never gonna die," "I'm dreaming"/"remembering"), the credited interpolations
   (Bricusse/Newley, Mercer, Rockwell, Joni). Find ones not yet logged.
4. **Gaps** — songs with thin or no Essay (Hell Of A Night, Shine, Precious Time,
   All My Friends), concepts referenced but pageless, open questions left dangling.
5. **The labyrinth/entry-point layer** — does the `entry_points` web actually
   support the planned nonlinear public navigation, or are there orphan nodes?

---

## 3. What just changed (so you don't re-flag settled work)

A two-session **Spotify verification pass (2026-06-10)** just ran. It:
- Flipped **14 lyric sources** `draft → stable` (LOOP, BALLERINA BOY, MAGIK,
  SideQuest, tomorrow, Life Is Good, All My Friends, Hell Of A Night, The Watchers,
  Dream / Dream, Weirdness, Bounce, Welcome to the Circus, Not Your Homie).
- Added Spotify-verified **credits** inline to all of them.
- Applied lyric corrections (LOOP "when"; Life Is Good "Another circle 'round the
  sun"; BALLERINA BOY "Stood back"/"like you"; SideQuest "this far"/"would play");
  corrected STF year **2018 → 2019** on Hell Of A Night + Dream / Dream.
- Surfaced new real collaborators (Nick Bailey, John Byron, Laboratorium Pieśni,
  the Egners, Sia Furler, Ryan Spraker, etc.) — **MERCY-rule applies** (§4).

**`dumbledore` stays `draft`** — Spotify has no lyrics for it; its names (Galileo,
Joan of Arc, Constantine) are AZLyrics-only and unverified. Do not ground readings
on them. **SOL** and **The Circle (Lucius Version)** are the other two `draft`s.

The full log entry is the top of [[log]] (2026-06-10 "verification" entry).

---

## 4. Landmines (these have bitten before — carry them)

- **The Mary correction (load-bearing).** The pre-lyrics Lucius Lullaby pages once
  claimed "Mary appears twice, face hidden" as *Confirmed*. **FALSE** — the savior
  voice is **Lucius counterfeiting the Mary/rescue function.** Real grounded
  faceless-Mary anchors: **#1 Champion** ("halo but I didn't see a head"),
  **Ballerina Boy** (motherly outro — female voice, audio-confirmed), **Weirdness**
  ("face out of sight"). General lesson: *pages written without lyrics may carry
  contamination — re-verify against the now-stable text.*
- **Three-register Lucius — never flatten.** Lucius is **manipulation, shadow, AND
  frantic-protective love, held together at once.** Not "manipulation" alone (too
  reductive), not "protection" alone (launders the shadow). He is instinct/ambition
  — the heart split from the mind but not without it; ego destroying the very
  vulnerability it guards. When he recodes Roy's sincere phrases, the register is
  "the frantic motion of something that loves what it is about to harm," not simple
  deception. See `Sir Lucius` → "The nature of Lucius [P]".
- **The angle/angel/consonant-vowel framework is `[P]` private-only.** It has no
  public JT source and has repeatedly tried to climb into `[G]`. It may inform
  silently; it cannot ground a public claim. If you find it asserted as grounded
  anywhere, that is a contamination flag.
- **MERCY-rule — a real collaborator is NOT a symbol.** MERCY = Mercedes Colletta
  Britton (real co-writer/vocalist); angelbaby = a real Hume AI artist;
  Laboratorium Pieśni = a real Polish folk ensemble; the leopard-rabbit avatar =
  Hume's design (resonance only). Do not fold real people/entities into JT
  iconography canon. Check the biographical/industry explanation before
  mythologizing any name or credit.
- **LOOP-era lore IS citable.** The YouTube theatrical EPs and Roy's published
  @jagwartwin lore/quote-cards are **`[G]` primary sources**. The compilation doc
  `Sources/Reference/Roy - LOOP-era Theatrical Lore` is only a *finding-aid* — cite
  the underlying post/EP, not the compilation. A missing URL is housekeeping, NOT a
  grounding-validity question. (This is the opposite failure mode from the Bounce
  fabrication — don't conflate "needs a URL" with "might be invented.")
- **Self-harm-heavy songs** (Lucius Lullaby opens on a suicidal line; Weirdness,
  Ballerina Boy). **Do not sanitize the analysis** — the album is about a *survived*
  rock-bottom; softening it falsifies the work. Handle with gravity, not avoidance.
- **The Secret Document** (`_Private/`) — never quote, paraphrase, name as a source,
  or let it be the visible reason for any claim. Read for silent context only. Never
  in the report as content.

---

## 5. Deliverable — the findings report

Write findings to **`Essays/_drafts/Fable Pass — Findings (YYYY-MM-DD).md`** (a
working draft, not canon). Structure:

```
## Coherence flags
  Per finding: location(s) · what's wrong · current tier vs. correct tier ·
  proposed fix · confidence. Sort by severity (contamination > tier violation >
  drift > link hygiene).

## Discoveries
  Per finding: the pattern · its anchors (list them) · proposed tier ·
  where it would live (existing page / new page / a tracker) · what would have
  to be true for it to graduate a tier.

## Open questions surfaced
  Things the corpus implies but cannot resolve without a new anchor.

## Do-not-touch confirmations
  Settled work you considered and deliberately left alone (so the next pass
  doesn't re-litigate it).
```

Every line carries a tier marker. Cite specific files (`[[Page]]`) and, for
grounded claims, the actual source. **No claim graduates a tier inside this
report** — graduation happens later, deliberately, when Code/Jen fold it.

---

## 6. Orientation order (read these, in order)

1. **This brief.**
2. [[CLAUDE]] — the constitution (authoritative; wins all conflicts).
3. [[ARCHITECTURE]] — the system overview.
4. [[index]] — the dual-axis catalog (by layer / concept / entry-point).
5. [[Theme Tracker]] — the analytical grammar + confirmed cross-song cases.
6. [[Ontology]] — the entity registry (canonical IDs).
7. [[Master Source List]] — the source registry (esp. §2 theatrical EPs).
8. [[log]] — recent operational history (start at the top).
9. [[Boundaries]] — public/private rules.
10. [[file-map]] — flat enumeration of every file (`grep` is faster for lookups).

Then read **widely before concluding** — the whole point of this pass is breadth.
Do not synthesize from the index alone; the index is curated, not exhaustive.

---

## 7. Scope knobs (Jen to confirm before the pass)

These three change what the pass *is*; set them before starting:
- **Output mode** — default **read-mostly / findings report** (§0). Override only
  with explicit per-file authorization.
- **Emphasis** — default **both** coherence and discovery, equal weight. Can be
  tilted (e.g. "coherence audit only," "discovery only on the Lucius Lullaby arc").
- **Scope** — default **whole corpus**. Can be narrowed to an era (STF / 33 /
  Lucius Lullaby), a character, or a concept cluster.
