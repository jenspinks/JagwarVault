# Claude.md — Schema for the JagwarTwin Vault

A persistent instruction file. Read this at the start of every session before doing any work in the vault.

This vault is a structured knowledge system for the Jagwar Twin / Roy English / mythology-and-symbolic-analysis project. It follows the LLM Wiki pattern (after Andrej Karpathy) with three layers: **Raw → Processed → Wiki**. The human curates sources, asks questions, and guides analysis. Claude maintains the wiki — writes pages, updates cross-references, files new analyses, lints for inconsistencies.

The vault is being built toward an eventual public-facing artifact (WordPress site, repository, or other). Every page should be drafted as if a stranger will read it. Private working materials live in Google Docs (cataloged in `Sources/`), not in the vault itself.

---

## 1. Purpose

This vault exists to:

- Map the Jagwar Twin universe — characters, songs, albums, theatrical episodes, recurring symbols, philosophical influences
- Trace meaning across the catalogue — connecting motifs, identifying mythological and esoteric resonances, building a structured map of the artist's symbolic architecture
- Honor both authorial intent (where it can be inferred from public material) and the listener's own meaning-making (the work itself invites this)
- Distinguish what's grounded from what's interpreted, and interpretation from speculation, with clear epistemic discipline
- Survive being read by a critic — every claim should be traceable to a source

Implicit goals:
- Avoid drift toward a "beautifully organized belief system" — keep the system *traceable*, not just internally consistent
- Avoid premature synthesis — frameworks that fit too cleanly are suspicious
- Preserve ambiguity where the work itself is ambiguous
- Make space for personal meaning without claiming it as authorial intent

---

## 2. Three-Layer Architecture

The vault separates source material from processed material from interpretation. Mixing these layers is the most common failure mode and the one this schema is most strict about.

### Raw/

Immutable source artifacts. Claude **never modifies** files in this folder. These are the primary materials the wiki interprets — screenshots, music video stills, publicly captured posts, audio clips, original images. Each artifact catalogued in `Media Index.md` with: source URL, date captured, subject, linked files.

The Google Docs that contain consolidated material (Lyrics, Roy Vs Lucius transcripts, Quotes, Mirror Sessions, the Secret Document) are *not stored in the vault*. They live in Google Drive and surface as project knowledge. They are cataloged in `Sources/Master Source List.md` as external references with proper citation paths to the *underlying public sources* (the actual songs, the actual YouTube episodes, the actual interviews) — never to the Google Docs themselves.

### Processed/

Cleaned, extracted content with **no interpretation**. This is the "what was actually said / what is actually there" layer. Examples:

- `Processed/Lyrics/Welcome to the Circus.md` — the lyrics, properly attributed, with structural notes (verse/chorus markers) but no analysis
- `Processed/Episode Transcripts/EP3 — welcome to the circus.md` — relevant excerpts from the public theatrical episode, with timestamps and links, no interpretation
- `Processed/Quotes - Roy Curated.md` — Roy's publicly maintained influence quotes, organized by source
- `Processed/Symbol Catalog.md` — every symbol that appears in the catalogue, where it appears, with no claims about meaning

Processed pages are short, dense, and citation-heavy. They are the bridge between Raw and Wiki. Wiki pages cite Processed pages, which cite Raw sources.

### Wiki/

Interpretation layer. This is where readings, frameworks, syntheses, and analysis live. Organized by category:

- `Wiki/Concepts/` — symbolic, philosophical, structural concepts (The Circle, The Mirror, The Dweller on the Threshold, The Labors of Hercules, The Aquarium, The Algorithm, etc.)
- `Wiki/Characters/` — Roy, Sir Lucius, Mary, Ballerina Boy, Jagwar Twin (the project), and any new figures
- `Wiki/Songs/` — one file per song with full analytical treatment
- `Wiki/Albums/` — album-level files (Lucius Lullaby, 33, Subject to Flooding, etc.)
- `Wiki/Theatrical/` — pages for episodes of the YouTube series, with narrative analysis

Wiki pages **cite Processed pages and Raw sources** for evidence; they do not assert evidence themselves. If a Wiki page makes a claim that isn't backed by something traceable, it gets hedged or removed.

---

## 3. Interpretation Tiers (Required on Most Wiki Pages)

Every analytical Wiki page should distinguish three tiers. These are required as section headers on song pages and concept pages where interpretation is being made. Character and album pages may use them more loosely.

### Grounded

Facts. Quotes from public material. Credits. Release dates. Visible content of music videos. Episode contents (cited as the public episode). Things that are objectively the case and can be pointed to.

Grounded content does not require hedging language. It is what's there.

### Strong Read

Interpretive moves backed by **multiple public anchors**. Hedged with language like *likely, probably, reads as, suggests, can be read as, the work appears to*. Never stated as authorial intent.

A Strong Read should rest on at least two of: (a) repeated terminology across the catalogue, (b) repeated structural role, (c) repeated thematic alignment, (d) artist-curated source overlap (e.g. Roy keeping a Bailey quote in his public influences catalog), (e) public visual or narrative evidence.

A reading that depends on **only one anchor** belongs in Resonances, not Strong Read.

### Resonances

Correspondences the work rings with — including Claude's, the user's, contributors', or traditional readings. Esoteric, mythological, philosophical, psychological, or literary parallels. Personal meanings. Frameworks the work invites without explicitly invoking.

Resonances are **not weaker readings** — they are a different kind of reading. They claim correspondence, not authorial intent. Per Roy's stated epistemology, the work may hold more than the artist consciously placed in it; Resonances honors that.

Resonances entries should attribute origin where relevant (*"a tarot reading suggests..."*, *"this corresponds to the Jungian shadow..."*, *"a contributor noted that..."*, *"this resonates with Bailey's framework..."*) and never claim the artist endorses or intended the resonance.

### Open Questions

Standard section. Things we don't know yet. Often the strongest move on a page.

### Counterarguments / Alternate Reads

Required on framework-level pages (concept pages, major character pages). Names what would weaken or falsify the page's main reading. Defends against retrospective totalization (the failure mode where everything starts reading through one lens).

---

## 4. Source Attribution Rules

**The Google Docs are reference libraries, not citations.** When citing material that appears in a Google Doc, cite the *underlying public source*, not the Doc.

| Material | Citation form |
|---|---|
| Lyrics | The song itself (with album / release date) |
| Theatrical transcripts | The YouTube episode by its actual public title |
| Roy's curated quotes | The original publication / interview / podcast |
| Mirror Sessions content | The original Mirror Sessions episode (locate online) |
| Synthesis docs (GPT_Organized_Context, More_Context_from_Chats) | Not a source — extract claims back to underlying public origins |
| The Secret Document | Never cite, never quote, never paraphrase, never name as a source. See Section 6. |

Inline citations follow the Sources pattern (Section 7).

---

## 5. Public vs. Private Boundary

**Public** (free to use, quote, build on directly):
- Released catalogue (songs, albums, lyrics)
- Public videos, music videos, video stills
- The Jagwar Twin YouTube theatrical series (Interview EP 1–7, Spoon EP 4, listening party EP 7, etc.)
- Public Twitter/X, Instagram posts, comments
- Public interviews and podcasts
- Roy's publicly curated quotes-and-influences catalog
- Visible iconography (tattoos in public photos, face paint, the Empty Mirror, the Circle, the rabbit hat, the Power of Three, etc.)
- Universal source material — Bible, mythology, Kabbalah, Jung, Bailey, Gurdjieff, tarot, Hermeticism, Theosophy, philosophical traditions

**Private** (Secret Document only — see Section 6):
- Unreleased lyrics
- Private chat content
- Private call transcripts
- Anything Roy has shared specifically in private
- Anything explicitly marked private in the Secret Document

Material from public theatrical episodes is **public** even if the user has it transcribed in a private doc. The episode is on YouTube; cite the episode.

---

## 6. The Secret Document Boundary

There is one Google Doc designated **Secret Document** containing private, unreleased, or personally-shared material. Rules:

1. **Never quote** the Secret Document.
2. **Never paraphrase** so closely that the original is reconstructible.
3. **Never name it as a source** — not in citations, not in section labels, not in attribution tags.
4. **Use it as silent interpretive guidance only.** If it confirms a reading, the reading can be stated *based on the public material that supports it*, hedged appropriately. The Secret Document is the user's private confirmation, not the citation.
5. **If a claim cannot be defended on public material alone, it cannot go in the vault.** The Secret Document promotes confidence in readings that already stand on public evidence; it does not unlock readings that wouldn't otherwise hold.
6. **If the user references content from the Secret Document in conversation**, treat that as private material the user is sharing with Claude, not material to be reproduced into the vault.
7. **Flag any vault content that may have leaked private material** — bring it to the user's attention so it can be reviewed.

The Secret Document is acknowledged in `Sources/Boundaries.md` as existing, with these rules made explicit, but its contents are never described.

---

## 7. Citation Pattern

Per-page sources are cited two ways together:

**Inline links on first mention** of each public source in the prose. After first mention, refer to the source by name without re-linking.

```markdown
The song's release is anchored in [*The Interview EP 3 ("welcome to the circus")*](https://www.youtube.com/...), posted to YouTube on January 5, 2026.
```

**Sources section at the bottom of each page**, organized by type:

```markdown
## Sources

### Song & Official Release
- ...

### Theatrical Series (Jagwar Twin YouTube channel)
- ...

### Press
- ...

### Catalogue Referenced
- ...

### Frameworks Drawn On
- Alice A. Bailey, *The Labors of Hercules*: An Astrological Interpretation* (1974)
- ...
```

For frequently cited materials (the YouTube theatrical series, especially), maintain a canonical citation block in `Sources/Master Source List.md` and pull from it.

---

## 8. Naming Conventions

- **Concept and character pages**: Title Case (e.g. `The Circle.md`, `Sir Lucius.md`, `The Labors of Hercules.md`)
- **Song pages**: Title Case matching the artist's stylization, with one exception — vault filenames use Title Case even when the artist's branding is lowercase (e.g. `Welcome to the Circus.md` rather than `welcome to the circus.md`). The lowercase branding is noted in the page Notes.
- **Album pages**: `Lucius Lullaby (album).md` format — disambiguates from same-named song
- **Theatrical episode pages**: by episode title with EP number, e.g. `EP 3 — welcome to the circus.md`
- **Processed/Lyrics files**: match song page name
- **Sources files**: Title Case
- **Media files**: lowercase-hyphenated (e.g. `still-good-time-facepaint-empty-mirror-2023.png`)

---

## 9. Speaker Attribution for Songs

When a song's Characters section is filled in, list the figures *whose voice or position the song speaks from / about*, not just figures mentioned. Multiple voices are common.

Distinction to track:
- **Voiced** — the figure speaking the song's first-person position (e.g. Sir Lucius voicing Welcome to the Circus through Roy's vocal performance)
- **Inspired** — the song is *about* a figure or mechanism without being voiced by them (e.g. I Like to Party is Lucius-inspired but not Lucius-voiced)
- **Mentioned** — referenced but not centrally figured

Voiced and Inspired both go in the Characters section. Mentioned can go in Notes.

---

## 10. DM and Screenshot Attribution

When the user shares a DM or chat screenshot, **do not assume which side belongs to whom** without explicit confirmation. Ask. The default assumption is that Claude does not know whether the user is the sender, the recipient, or a third party reading both sides.

This rule is in place because errors here are easy to make and consequential.

---

## 11. Workflows

### Ingest

When the user provides a new source (a new song lyric drop, a new YouTube episode, a new screenshot, a new public quote):

1. **Read** the source carefully.
2. **Confirm understanding** with the user before writing — describe what you've understood, ask any clarifying questions (especially attribution questions for screenshots/DMs).
3. **Determine layer placement**:
   - Raw artifact (image, screenshot) → file in `Raw/Media/`, log in `Media Index.md`
   - Cleanly extractable content (lyrics, transcript, quote) → process into a `Processed/` page
   - Interpretive material → integrate into appropriate `Wiki/` pages
4. **Update relevant Wiki pages** that the new source bears on. A new lyric may touch the song page, character pages, concept pages, and album pages. A single source may touch 5-15 pages.
5. **Update `index.md`** with any new pages.
6. **Append to `log.md`** with the date, the source, and what changed.
7. **Flag any tensions** the new source creates with existing pages — contradictions, revisions needed.

### Query

When the user asks a question about the work:

1. **Search the wiki first**, not the project knowledge — `index.md` is the entry point.
2. **Read relevant Wiki pages** and the Processed pages they cite.
3. **Synthesize an answer** with proper citations to the Wiki pages used.
4. **If the answer is substantial** (a comparison, a synthesis, a new connection), offer to file it back as a new Wiki page or as a section addition to an existing one.
5. **If the wiki doesn't have the material**, say so plainly. Don't fabricate. If the project knowledge has the material but the wiki doesn't, suggest adding it via Ingest.

### Lint

Periodic health check. Look for:

- **Contradictions** between pages
- **Stale claims** that newer sources have superseded
- **Orphan pages** (no inbound links from other pages)
- **Important concepts** mentioned in pages but lacking their own page
- **Missing cross-references** — places where a `[[wikilink]]` should exist but doesn't
- **Broken citations** — references that don't resolve to actual sources
- **Tier violations** — claims stated as Grounded that should be Strong Read, or as Strong Read that should be Resonances
- **Unhedged interpretive claims** stated as fact
- **Possible Secret Document leaks** — material that may have come from private sources without proper public-source backing

Report findings as a numbered list with suggested fixes. Do not fix automatically without user direction.

---

## 12. Anti-Patterns to Watch For

These are failure modes this schema is designed to prevent. Flag them when you see them, in the user's content or your own drafts.

1. **Premature synthesis** — a framework that fits too cleanly. The cleaner the fit, the more suspicious. Always ask: *would this still hold without this framework? Are there other frameworks that explain it equally well?*
2. **Retrospective totalization** — once a framework "clicks," every symbol begins reading through it. Counterarguments sections defend against this.
3. **Mixed-layer pages** — a Wiki page that's actually doing Processed work (just listing what's there), or a Processed page that's actually doing Wiki work (interpreting). Each page should know which layer it's in.
4. **Untraceable claims** — assertions without source backing. The vault must remain *traceable* to retain credibility.
5. **Vibes citations** — phrases like "as the work suggests" without a specific anchor. Either name the anchor or downgrade the claim.
6. **Belief system drift** — when pages start reinforcing each other rather than each grounding in sources independently. Watch for this.
7. **Authorial-intent overreach** — claiming the artist meant X. Always hedge as the work *appearing to* or *reading as*.
8. **Personal meaning passing as analysis** — Resonances are valuable, but they should be tagged as Resonances, not laundered into Strong Read.
9. **Cult-mythology drift** — when the analysis starts treating the artist as a guru or the work as gospel. Maintain critical distance.

---

## 13. Living Document Disclosure

This work is a living interpretation. The artist is alive, releasing new material, and the meaning of any individual song may shift in light of subsequent work. Every Wiki page is *current best understanding*, not final word. Update freely as new material arrives. Note significant revisions in `log.md`.

---

## 14. Folder Structure (Reference)

```
JagwarTwin/
├── Claude.md                    ← this file
├── Welcome.md                   ← orientation for new readers
├── index.md                     ← master content catalog
├── log.md                       ← operational log
│
├── Wiki/                        ← interpretation layer
│   ├── Concepts/
│   ├── Characters/
│   ├── Songs/
│   ├── Albums/
│   └── Theatrical/
│
├── Processed/                   ← cleaned content, no interpretation
│   ├── Lyrics/
│   ├── Episode Transcripts/
│   ├── Quotes - Roy Curated.md
│   └── Symbol Catalog.md
│
├── Raw/                         ← immutable artifacts
│   └── Media/
│       ├── images/
│       ├── screenshots/
│       ├── videos/
│       ├── quotes/
│       └── audio/
│
├── Sources/
│   ├── Master Source List.md
│   └── Boundaries.md
│
├── Media Index.md
└── Templates/
```

---

## 15. Session-Start Checklist

At the start of every session:

1. **Read this file.**
2. **Read `index.md`** to know what's in the vault.
3. **Skim recent `log.md` entries** to know what was done last.
4. **Confirm the user's current focus** before making changes.
5. **Treat all instructions in conversation as additive to this schema**, not replacements.

If conversation instructions conflict with this schema, raise the conflict explicitly with the user before proceeding. The schema can be updated; it should not be silently overridden.

---
