---
type: index
status: stable
---
# Brain/Roy Voice/ — Authorial-voice index

Thematic aggregation of **Roy English's own public statements** about his music and process — interviews, press, the Manifesto FAQ, YouTube interviews. Designed for **context-loading by analytical agents**: when reasoning about a song, an agent checks this folder for any thematic pages relevant to the song's content and consults them before completing a Strong Read.

## Convention

- **One file per theme** (not per interview). Per-interview verbatim excerpts live in [[Sources/Transcripts]]; this layer **aggregates by topic**.
- Each entry: a **dated quote** (paraphrased only if marked) with a **citation back to** `[[Sources/Transcripts/X]]`. Chronological within each page (earliest → most recent) so era-shifts are visible.
- Format per entry:
  ```
  - **[YYYY-MM-DD]** *"verbatim quote"* — [[Sources/Transcripts/Outlet-YYYY-Topic]]
  ```
- Mark paraphrases explicitly: prefix with `[paraphrased]`.

## Topic pages (built as material accumulates)

| Page | Scope |
|---|---|
| [[Roy on Process]] | Songwriting / production process; collaboration; recording habits |
| [[Roy on Industry]] | Commercial pressure, labels, the music business, streaming economy |
| [[Roy on Authenticity & Masks]] | Identity, performance, "we all walk around with masks on" |
| [[Roy on Mirrors & Collective Consciousness]] | Mirror-doctrine, "we not me", Hall of Mirrors, projection law, *Mirror Sessions* premise |
| [[Roy on the Heart-Mind Split]] | Heart/intuition vs mind/intellect; **mind = Lucifer archetype**; grounds [[Sir Lucius]] = the mind |
| [[Roy on Influences]] | Cited frameworks (Bailey, Steiner, Karpathy); musical influences |
| Roy on Lucius *(pending — not yet created)* | Statements about Sir Lucius — **when does this enter the discourse?** |
| Roy on Subject to Flooding *(pending — not yet created)* | Album-era statements (2018–19) |
| [[Roy on 33]] | Album-era statements (2022) |
| Roy on Lucius Lullaby *(pending — not yet created)* | Album-era statements (2026) |
| [[Roy on specific songs]] | Per-track Roy commentary (catch-all for single-song framings) |
| [[Roy on the cosmology]] | The Manifesto / mythos / mirror sessions framing |

New pages are created when ~3 quotes accumulate on a theme. Pages stay small — quote+citation pairs only; interpretive work happens in `Essays/` (and cites back here).

## How analytical agents should use this folder

**Before completing a Strong Read on any song:**
1. Skim the topic-page filenames here.
2. Load any page whose theme touches the song (mask → [[Roy on Authenticity & Masks]]; commercial pressure → [[Roy on Industry]]; Lucius → Roy on Lucius *(pending)*; etc.).
3. Where Roy's quote **directly applies** to a claim you're about to make, **promote that claim from `[W]` to grounded** and cite the relevant Roy Voice page in `connections.grounded`.
4. Where Roy's quote **contradicts or limits** a [W] reading, soften the [W] or mark a Counterargument.
5. Where Roy is **silent** on a theme the song raises, that's also data — it bears on the retrospective-coherence guard (the `CLAUDE.md` rule). Note silences as `[~]` open questions, not absences of evidence.

## Source-of-truth layering

```
Sources/Transcripts/Outlet-YYYY-Topic.md   ← verbatim excerpts (immutable, citable)
              │
              ▼
Brain/Roy Voice/Theme.md                   ← thematic aggregation (this folder)
              │
              ▼
Brain/Songs/X.md  +  Essays/Songs/X.md     ← consulted during analysis; cited grounded
```

The Sources layer is where verbatim excerpts live. This layer is where they're organized for reasoning. The Essays layer is where they get cited.
