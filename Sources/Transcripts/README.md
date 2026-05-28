# Sources/Transcripts/ — Verbatim excerpts from public interviews & podcasts

Per [[CLAUDE]]: "cleaned excerpts of public YouTube/podcast/interview material, timestamped." **Citable, immutable, no interpretation.** Interpretive aggregation happens in [[Brain/Roy Voice/README|Brain/Roy Voice/]]; interpretation happens in `Essays/`.

## Convention

- **One file per interview/source.** Filename: `Outlet-YYYY-Topic.md` (e.g. `Atwood-2018-Loser.md`, `AltPress-2022-33.md`, `Manifesto-FAQ.md`).
- Selected verbatim excerpts only — **not full transcripts** unless the source is short. Pick what's analytically relevant; leave what isn't.
- Frontmatter records: outlet, URL, publication date, ingest date, status. Body records: brief metadata + verbatim quotes with timestamps if from audio/video.
- Quotes are **immutable once ingested**. Corrections only (e.g. fixing a transcription error against the original) — never reinterpretation. Flag uncertainty inline with `[?]`.

## Frontmatter template

```yaml
---
type: transcript
citable: true
status: stable
outlet: "Atwood Magazine"
url: "https://atwoodmagazine.com/jagwar-twin-loser-interview-subject-to-flooding-2018/"
published: 2018-MM-DD
ingested: 2026-MM-DD
ingest_source: "WebFetch | Jen paste | YouTube transcript | etc."
---
```

## What goes in the body

1. **Brief contextual header** — what the interview is about, what era, what's promoted.
2. **Selected verbatim excerpts** — quoted with attribution to speaker if multi-speaker. Use ellipses (`…`) for elided material; never paraphrase silently.
3. **Pulled into Brain/Roy Voice/** — running list of which thematic pages cite this source, so it's easy to see what's been processed.

## Master registry

All interview URLs are registered in [[Master Source List]] §4 (Press) and §11 (Interviews). Add new interviews there first, then create the transcript file here, then aggregate in `Brain/Roy Voice/`.
