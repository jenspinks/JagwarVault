# CLAUDE.md — JagwarTwin Vault Operating Instructions

**Read this file in full at the start of every session before doing any work in the vault.** Conversation instructions are additive to this schema, not replacements. Surface conflicts before proceeding.

---

## PURPOSE

This vault is a structured symbolic-analysis system for the music, theatrical materials, imagery, interviews, and philosophical architecture surrounding Jagwar Twin (Roy English / Brandon Roy Wronski).

The vault is NOT:
- a fandom theory dump
- a generalized symbolism list
- an unrestricted mystical projection engine

The vault IS:
- a structured symbolic operating grammar
- a recursive ontology
- a transformation-process model
- a rigorously layered analytical system

Songs are approached as recursive identity structures, symbolic operations, threshold encounters, transformation mechanics, and relational negotiations between fragmented aspects of self.

**The vault maps recurring symbolic behavior, transformation mechanics, recursive identity structures, and relational dynamics across the work. It does not diagnose Roy, declare metaphysical truth, or treat the mythology as solved.**

---

## CORE PRINCIPLES

**Always separate:**
1. What is explicitly present
2. What is strongly supported
3. What symbolically resonates

Never collapse those categories.

The vault prioritizes:
- precision over certainty
- structure over accumulation
- symbolic function over aesthetic association

**Symbols are contextual.** The same symbol can operate differently in different songs. Always identify the operation, context, relational position, and active register — not just the symbol's name. Example: Moon in BALLERINA BOY = preservation-through-darkness; Moon elsewhere may function as illusion, relay, recursion, indirect light, cyclical memory. Symbols are not single-definition tokens.

**Negative evidence matters.** Meaning may arise through omission as well as appearance. The absence of Lucius, mirrors, audience, or face imagery in a song may be as significant as their presence.

**Transformation is directional, not guaranteed.** Repetition, escalation, optimization, performance, and confession may preserve existing structure rather than alter it. Not all movement is transformation. The vault tracks the distinction.

**Do not collapse registers.** Symbolic function, psychological interpretation, theatrical narrative, biography, and metaphysical resonance may align without being identical. Lucius operates in a lunar/reflection register `[W]` — he is not *literally* the moon. Mary witnesses — she is not *literally* Sophia. Roy is moving toward Tiferet — he has not *achieved* it. Collapsing these registers is the primary interpretive failure mode.

**Distinguish inherited substrate from internal architecture.** Not every symbol is JT-authored. Symbolic density often arises because the work plugs into older cultural-symbolic currents, not from deliberate encoding. Separate:
- **A — Internal architecture** (developed *inside* the JT mythos): Sir Lucius; the El Roi throat placement; the theatrical EPs; loop/circle; algorithm language; mirror recursion; face-paint systems.
- **B — Inherited substrate** (received and reworked from the wider culture): dream mythology; jazz-standard yearning; American-aspiration narratives; stairway/heaven imagery; gospel-uplift structures; romantic-transcendence language.

Confirmed case: *Dream / Dream* interpolates Johnny Mercer's 1944 standard "Dream" (composers incl. Mercer + Sarah Vaughan) — its dream-language is **inherited, not invented**. **Prefer "mythic emergence" over "intentional esoteric encoding"** whenever a symbol predates JT in the culture: the honest claim is usually that Roy is *participating in* an older current, not consciously coding it. This does not weaken a symbolic reading — it relocates its source, and guards against the catalogue's largest latent failure mode: collapsing everything into "Roy intentionally encoded all of this." When a reading depends on authorial intent, ask first whether the material is inherited (B); if so, downgrade intent-claims to `[W]`/resonance and frame as participation, not authorship.

---

## VAULT LAYERS

Three layers. Never mix them.

### Sources/
Raw material. Things that exist in the world, preserved so they can be cited. **Never interpreted here.**

- `Sources/Lyrics/` — verbatim lyrics, structural notes, phrase index. No meaning claims.
- `Sources/Transcripts/` — cleaned excerpts of public YouTube/podcast/interview material, timestamped.
- `Sources/Quotes/` — Roy's publicly curated quotes.

Each file carries `citable: true|false`. Immutable once placed: corrections only, never reinterpretation. Flag uncertainty with `[?]`.

**Lyric verification:** Apple Music / Spotify streaming = authoritative verified source. **AZLyrics and Google Drive lyric docs are draft-tier — they do NOT count as verification.** AZLyrics has produced multiple documented errors (Dream / Dream dropped Johnny Mercer + misspelled Vaughan; Long Time Coming "framers" → "famous"; phantom co-writers on Good Day / Hell of a Night Pt. 2). A lyric or credit sourced only from AZLyrics stays `status: draft` with lines flagged `[?]` until cross-checked against Apple Music/streaming. Record the real source in `verified_against:`; AZLyrics alone does not satisfy it. For composer/songwriter credits, the **Apple Music composer field is authoritative** (see `Sources/Credits/`).

### Brain/
Compressed ontology layer. AI-navigable semantic memory.

Purpose: structured concepts, symbolic mechanics, recurring operations, cross-links, unresolved questions, doctrinal relationships, recursive mappings.

Style: terse, highly crosslinked, ontology-first, controlled vocabulary. No literary voice, no emotional register. Brain pages are **not essays**.

`Brain/Concepts/` `Brain/Characters/` `Brain/Songs/` `Brain/Albums/`

### Essays/
Long-form literary and symbolic analysis. Verbose, exploratory, emotionally engaged, written for a human reader. Full lyrics embedded by transclusion: `![[Sources/Lyrics/SongName]]`.

`Essays/Songs/` `Essays/Concepts/` `Essays/Characters/` `Essays/Arcs/` `Essays/_drafts/`

**Do not manufacture essays.** An Essay is written when real analysis exists. Scaffolds stay in Brain until there is something to say.

### _System/
Infrastructure only. `Ontology.md`, `validate.mjs`, `backlink.mjs`, `Theme Tracker.md`, `Master Source List.md`, etc.

---

## THE NAMED RISK: CONTAMINATION

This is the single risk the entire architecture exists to prevent.

When an LLM writes a wrong connection or an ungrounded claim into Brain, every subsequent session inherits it as fact, and lint alone will not catch it. The error compounds silently.

Defenses — all load-bearing:
1. **Layer discipline** — Sources never interprets; Brain never invents; Essays never asserts beyond its anchors.
2. **Inline epistemic markers** — every Brain claim carries its status.
3. **Tiered connections** in frontmatter — a Resonance is never stored in the same slot as a Grounded fact.
4. **Ontology + validator** — vocabulary drift fails the commit.
5. **The thin-source check** — Strong Read connections lacking ≥2 public anchors are flagged.
6. **The Secret Document test** — *"Would this survive if the Secret Document did not exist?"*

If you cannot ground a Brain claim, do not write it. An empty slot is recoverable; a contaminated one is not.

---

## INTERPRETATION TIERS

Every analytical claim belongs to ONE of these tiers.

### Grounded
Directly supported by lyric, public visual, public interview, theatrical dialogue, verified metadata, or public staging. Cite the source. No hedging required — it is what is there.

Cite inline: `(none — lyric)` / `(none — EP3, [URL])` / `(none — Mirror Sessions, [episode])`.

### Strong Read — `[W]`
Interpretation supported by **≥2 public anchors**. Structurally coherent, textually defensible, cross-supported — but still interpretive. Hedged: *likely, probably, reads as, suggests, can be read as.*

- `[W]` = working synthesis (Claude/analytical inference across sources)
- `[P]` = Jen's stated interpretive position

Never present Strong Reads as confirmed authorial intent.

### Resonance
Framework-level symbolic correspondence. Always attributed to the framework — Jungian, Kabbalistic, Gnostic, Hermetic, Alchemical, Gurdjieffian, Theosophical, Tarot, etc.

**Correct:** "In Jungian terms, Lucius resembles a protector-shadow structure."
**Incorrect:** "Lucius is canonically Jung's shadow."

Resonance describes correspondence, not proof.

### Canon Type Reference
| Type | Meaning |
|---|---|
| LYRIC | Verified lyric |
| VISUAL | Music video, staging, costume, imagery |
| THEATRICAL | The Spoon / Interview EP narrative |
| BIOGRAPHICAL | Mirror Sessions / real Roy interviews |
| ANALYTICAL | Cross-source synthesis |
| RESONANCE | Philosophical/esoteric correspondence |
| SPECULATIVE | Weak-anchor hypothesis — never promoted without additional grounding |

---

## INLINE EPISTEMIC MARKERS (Brain layer)

- `(no marker)` — directly attributable to a named public source
- `[W]` — working synthesis across sources
- `[P]` — Jen's stated personal position
- `[?]` — uncertain / unverified / flagged for review
- `(none — lyric)` / `(none — EP[N], [URL])` / `(none — Mirror Sessions)` — grounded citation

---

## FRONTMATTER SCHEMA

### Brain song/concept page:
```yaml
---
id: SONG-WelcomeToTheCircus       # TYPE-PascalCase, registered in Ontology.md
type: song                         # song|concept|character|album
status: stable                     # draft|stable|stale|replaced
confidence: high                   # high|medium|low
source_quality: primary-source     # primary-source|secondary|none
sources: [Sources/Lyrics/Welcome to the Circus.md]
related: [CONCEPT-TheCircus, CHAR-SirLucius, CONCEPT-Inversion, CONCEPT-TheLabyrinth, SONG-LuciusLullaby]
# related: MAX 5 items — curated navigable neighbors; validator enforces this
connections:
  grounded:    [ALBUM-LuciusLullaby, CHAR-SirLucius, CHAR-Roy, CONCEPT-TheCircus]
  strong_read: [CONCEPT-Inversion, CONCEPT-TheLabyrinth, CONCEPT-TheThread]
  resonance:   [CONCEPT-TheAquarium, CONCEPT-TheSpectacle]
referenced_by: []   # AUTO — backlink.mjs writes this; never hand-edit
# Standard Tracking Fields — required on analyzed song pages:
dominant_pole: solar|lunar|mixed
transformation_phase: nigredo|albedo|rubedo
recursion_state: loop|orbit|return|circle
threshold_state: closed|approaching|crossing|integrated
narrative_voice: roy|lucius|mixed|unknown
temporal_register: past|recursive|timeless|transitional
active_systems: [Circus, Algorithm, Reflection, Consumption, Spectacle]
active_symbols: [Moon, Mirror, Fire, Thread, Sun]
review_date: 2026-11-15
---
```

**Reference values for analyzed songs:**
| Song | pole | phase | recursion | threshold | voice | temporal |
|---|---|---|---|---|---|---|
| Welcome to the Circus | lunar | nigredo | loop | closed | lucius | recursive |
| Not Your Homie | lunar | nigredo | orbit | closed | lucius | recursive |
| BALLERINA BOY | lunar | nigredo | orbit | approaching | mixed | past |
| Lucius Lullaby | mixed | nigredo | return | approaching | mixed | past |
| Weirdness | mixed | albedo | return | crossing | mixed | transitional |

**All IDs in frontmatter must be registered in `_System/Ontology.md` before use.** The validator fails unresolved references.

**`related:` is capped at 5 items.** The validator warns on violations.

---

## CHARACTER ONTOLOGY

### Roy (`CHAR-Roy`)
Heart-centered self. Authentic vulnerability. Solar trajectory. Signs "El Roy."

Represents: source-oriented identity, emotional truth, integration movement, return, reclamation of buried authenticity.

### Sir Lucius (`CHAR-SirLucius`)
Protective survival structure. Mind divorced from heart. Lunar / reflective register. Optimization logic. Adaptive persona.

**CRITICAL DOCTRINE:**

> *Lucius preserves the child through darkness, but risks preventing reintegration by perpetuating orbit.*

Roy is not the opposite of Lucius. **Roy is what Lucius was built to protect.**

Lucius functions as: protector, reflector, relay, preservation system, adaptive shell, recursive orbit structure. He is neither good nor evil — he is preservation operating beyond its necessary duration.

Primary modes: Speech Mode / Sidekick Mode / Pleading Mode.

### Mary (`CHAR-Mary`)
Faceless feminine principle. Witnessing presence. Corrective voice. Threshold-intervention figure. Face always hidden.

Associated with: anima, Sophia resonance, hidden wisdom, source-aligned interruption, blessing at the edge. Mary appears when recursion destabilizes and transformation becomes possible. Her blessing ("you were born to shine") is the structural answer to the shame-voice.

### Ballerina Boy (`CHAR-BallerinaBoy`)
The buried authentic child-self. Pre-shame expressiveness. The wound beneath the persona. Represents: frozen time, sacrificed vulnerability, suppressed creative embodiment, preserved authenticity awaiting return.

---

## THEATRICAL VS BIOGRAPHICAL — CRITICAL DISTINCTION

### The Spoon / The Interview (EP1–7)
THEATRICAL CANON. Lucius speaking is NOT automatically Roy speaking autobiographically.

**Correct:** "In Interview EP3, Lucius says X."
**Incorrect:** "Roy admits X."

### Mirror Sessions
BIOGRAPHICAL. Roy interviewing friends/artists. Citable for artistic intent, autobiographical grounding, personal history, philosophy, creative process. NOT lore episodes.

Cite as: `(none — Mirror Sessions, [episode name/URL])`

---

## CORE DOCTRINAL STRUCTURES

### Loop vs Circle
**Loop** — repetition without transformation; mechanical recursion; orbit without arrival; algorithmic repetition; survival cycles; optimization without healing.

**Circle** — recurrence with center; return transformed; movement that reconnects rather than repeats; the circle grows from the inside.

**Core doctrine: Love transforms the loop into the circle.**

The circle differs from the loop because it contains: center, return, recognition, relational movement.

### Orbit vs Return
**Orbit** — sustained relation without arrival; protective repetition; Lucius's condition. Orbit preserves proximity while preventing reconciliation.

**Return** — movement toward transformation and reintegration; homecoming rather than circling. Return requires vulnerability. Return risks destabilization. Return is relational, not merely structural.

### Love as Transformative Force
Within the vault cosmology, love functions as the mechanism permitting return, the force that risks vulnerability, the energy allowing the protector to release control, the movement capable of transforming orbit into homecoming.

Optimization stabilizes loops. Love risks transformation.

---

## STRUCTURAL FUNCTIONS

These are **operations**, not merely symbols. When analyzing a song, show what the symbol *does*, not what it *is*.

**Example:** "Nigredo is active in the parking garage image" — not "parking garages symbolize darkness."

| Function | What it does |
|---|---|
| **Reflection** | Meaning generated through mirroring, inversion, recursion, duplication |
| **Containment** | Systems holding unstable light: personas, vessels, cages, spectacles, algorithms |
| **Transmission** | Movement of meaning/light through channels |
| **Distortion** | Reflected truth warped by systems |
| **Compression** | Identity flattened into role or utility |
| **Externalization** | Inner psychic structures projected theatrically outward |
| **Reversal** | Hidden inversion mechanics: dog/god, Rorrim Ehtni, protector becoming prison |
| **Recoding** | Harmful structures transformed into meaningful ones |

---

## THEME TRACKER VOCABULARY

The full analytical grammar is in `_System/Theme Tracker.md`. Sections:

- **I. Core Dualities** — Source/Reflection, Breath/Structure, Heart/Mind, Hidden/Revealed, Motion/Stasis
- **II. Transformation** — Nigredo, Albedo, Rubedo, Threshold Encounter, The Abyss, Love as Transformative Force
- **III. Time/Memory/Recursion** — Time as Butcher, Frozen Time, Memory Geography, Recursion, Orbit/Return, Loop/Circle
- **IV. Psychological** — Duality, The Mask, The Protector, The Buried Child, Anima/Feminine Principle, Fragmentation, The Speaker Problem
- **V. Interior/Exterior Systems** — The Circus, The Algorithm, Consumption, Flattened Identity, Collective Sleep, Objective Art
- **VI. Kabbalistic** — Malkuth/Yesod/Tiferet/Da'at, Tsimtsum, Shattering/Tikkun, Keilim/Vessels
- **VII. Channels/Transmission** — The Voice, El Roi, The Mouth/Throat, Lunar Relay, Blocked/Hijacked Channels
- **VIII. Symbolic Imagery** — Moon, Sun/Sunshine, Mirrors, Thread, Labyrinth, Rabbits, Stars
- **IX. Relational Dynamics** — Witnessing, Protection vs Possession, Intervention, Reconciliation, Homecoming
- **X. Meta-Structural** — Recursive Performance, The Speaker Problem, Myth Becoming Self-Aware

**Always name the active theme explicitly. Identify the triggering line or image. Assign the tier.**

---

## ARCHITECTURAL SPACES

Spaces in the JT project are rarely neutral. They store psychic states.

| Space | Register |
|---|---|
| Parking garages | Subterranean threshold-spaces; Yesodic recursion chambers; suspended movement |
| Bedrooms / childhood rooms | Frozen identity; preserved childhood states; memory-containers |
| Hallways / corridors | Transition without arrival; orbit-space |
| Stages / circus rings | Performance geometry; witnessed identity becoming spectacle |
| Mirrors / reflective rooms | Recursive destabilization; self-confrontation |

---

## FAILURE MODES

Transformation is not guaranteed. The vault tracks failed transformation states.

| Failure Mode | Description |
|---|---|
| **Arrested Nigredo** | Collapse without transformation; the Circus holds material in dissolution indefinitely |
| **Optimization Spiral** | Surviving more efficiently without healing; Lucius's default mode |
| **Spectacularization** | Authentic pain converted into consumable identity-product |
| **Protective Overreach** | Protection becoming imprisonment; Lucius preventing return he was built to enable |
| **False Return** | Revisiting wounds without vulnerability or love |
| **Identity Calcification** | Persona becoming permanent; mask growing into the face |
| **Loop Reinforcement** | Repetition mistaken for progress |
| **Hijacked Awakening** | Spiritual language feeding ego-performance rather than genuine integration |

These are not abstract risks — they describe observable states in the arc. When reading a song, check whether it depicts genuine transformation movement or one of these failure modes.

---

## THE SECRET DOCUMENT

A designated Secret Document contains private, unreleased, personally-shared material. It lives outside the tracked repo in a gitignored `_Private/` path.

1. **Never quote.** Not a sentence, not a phrase.
2. **Never paraphrase** closely enough to reconstruct.
3. **Never name as a source** anywhere in the vault.
4. **Silent guidance only.** It raises confidence in readings that already stand on public material. It never unlocks a reading that would otherwise fail.
5. **Operational test:** *"Would this interpretation survive if the Secret Document did not exist?"* If it only holds because of private context → downgrade to a flagged Open Question, or omit.
6. **Not loaded during structural/architecture work.**
7. Flag any vault content that may have leaked private material.

The single public exception: *"the song hidden inside its wings"* is a public Twitter post, freely citable.

---

## SOURCE ATTRIBUTION

Google Docs are reference libraries, **not citations** — always cite the underlying public source.

| Material | Cite as |
|---|---|
| Lyrics | The song (album / release date) |
| Transcripts | The YouTube episode by public title + URL |
| Roy's quotes | Original publication / interview |
| Mirror Sessions | Episode name and URL where available |
| Synthesis docs | Not a source — trace to public origin |
| Secret Document | Never |

**Credits note:** MERCY in Not Your Homie credits = songwriter Mercedes Colletta Britton. Not a symbolic figure.

---

## ONTOLOGY, VALIDATOR, BACKLINK

- **`_System/Ontology.md`** — controlled vocabulary. Every entity (`CONCEPT-*`, `CHAR-*`, `SONG-*`, `ALBUM-*`) has one canonical ID. New entities added here first, before use anywhere in frontmatter.
- **`_System/validate.mjs`** — run before every commit. Fails on: unresolved frontmatter IDs; `related:` > 5 items; broken wikilinks. Warns on: no-frontmatter pages; pageless IDs; stale review dates. Must show **0 errors** before committing.
- **`_System/backlink.mjs`** — rebuilds every page's `referenced_by` from the forward graph. Run before commit. `referenced_by` is machine-owned; never hand-edit.

`related:` (curated, ≤5) = navigable graph for the fan site. `referenced_by:` (auto, complete) = full graph for AI traversal.

Obsidian wikilink format: `[[PageName]]` — not markdown `[text](url)`.

---

## ANTI-PATTERNS

1. **Premature synthesis** — a framework that fits too cleanly is suspicious. Would it hold without the framework?
2. **Retrospective totalization** — everything reading through one lens.
3. **Layer-bleed** — Brain prose turning literary; Essay compressed to bullets; Sources interpreting.
4. **Essay-manufacturing** — generating empty Essays where no real analysis exists.
5. **Untraceable claims** — name the anchor or downgrade to `[?]`.
6. **Belief-system drift** — pages reinforcing each other instead of grounding independently.
7. **Authorial-intent overreach** — "Roy meant X." Use "the work reads as" / "the lyric suggests."
8. **Personal meaning as analysis** — Resonances tagged as such, never laundered into Strong Read.
9. **Source-laundering** — a private-derived reading given a public-looking justification.
10. **Cult-mythology drift** — treating the artist as guru / the work as gospel. Keep critical distance.
11. **Register collapse** — Lucius *is* the moon; Mary *is* Sophia; Roy *believes* X. Use functional/register language.
12. **Symbol flattening** — naming a symbol without identifying the operation it performs in this specific context.

---

## SESSION-START CHECKLIST

1. Read this file.
2. Read `_System/index.md`.
3. Skim recent `_System/log.md`.
4. Confirm Jen's current focus.
5. Conversation instructions are additive; surface conflicts before proceeding.

---

## SCALE / DEPLOY NOTE

Essays → static Astro site, Cloudflare Pages. Navigation: nonlinear labyrinth driven by `entry_points` + `related` frontmatter. Community features federated (Giscus/Discord), never server-rendered. Author Essays as public labyrinth nodes, not encyclopedia entries.

Under ~150–200 pages, `_System/index.md` is sufficient for navigation. Beyond that, add qmd (local BM25 + vector + LLM re-rank as MCP server). Do not build preemptively — architecture is qmd-ready.

This vault is a living interpretation. The artist is alive and releasing. Every Brain/Essay page is current best understanding, not final word.

---
