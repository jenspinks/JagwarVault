---
type: credits
citable: true
status: stable
album: ALBUM-SubjectToFlooding
verified_against: ["Apple Music track metadata — composer field, per-track (checked by Jen, 2026-05-27)"]
recording_owner: "Atlantic Recording Corporation / WEA International Inc."
ingested: 2026-05-27
ingest_source: "Apple Music Get Info — composer field, per-track (Jen)"
---
# Subject to Flooding — Composer Credits (Source)

Verbatim composer-field metadata from Apple Music, verified track-by-track by Jen (2026-05-27). **This is the authoritative songwriting-credit reference for the album**, superseding AZLyrics-derived writer lists (which have produced multiple documented errors — see Maintenance).

Recording owner (℗-line): Atlantic Recording Corporation / WEA International Inc. Apple Music metadata release date shows **2019-04-26** (redistribution; album first released **2018-09-21** per MusicBrainz). Per-track "year" alternates 2018/2019 in the metadata, consistent with a 2019 Atlantic redistribution.

## Tracks with composer field beyond "Jagwar Twin"

| # | Title | Composer field (Apple Music) | Note |
|---|---|---|---|
| 2 | Dream / Dream | Johnny Mercer, Matthew Pauling, Roy English, Sarah Vaughan | interpolates Mercer's 1944 standard "Dream" — **inherited substrate** |
| 4 | Good Day | *(blank / not listed)* | composer field empty |
| 5 | Superhuman (Interlude) | Charles Chaplin, Jeff Bhasker, Matthew Pauling, Roy English | **Charles Chaplin credit** → samples *The Great Dictator* (1940) closing speech — **inherited substrate**; corroborates pre-existing vault note |
| 7 | Move To You | Roy English, S1 | S1 = Larry Darnell Griffin Jr. |
| 9 | Roy Voice Memo: S1 Arrowhead | Roy English, S1 | matches existing vault credit |
| 11 | Hell of a Night Pt. 2 (The Hallelujah Stickup) | Michael Morgan, Roy English | AZLyrics also listed Matthew Pauling — not in Apple composer field |

### Per-track screenshot verification (in progress)

| # | Title | Composer field (Apple Music — verified screenshot) | Note |
|---|---|---|---|
| 3 | Loser | Matthew Pauling & Roy English | verified 2026-05-27 (Jen screenshot) |
| 4 | Good Day | Details: **BLANK**. Lyrics-tab Written By: **Essex, Roy English, S1** | verified 2026-05-28 (Jen screenshots). "Essex" unidentified — possible interpolation source `[?]`. AZLyrics' "Terry Knight" was a phantom (wrong-song scrape). |

**Important correction:** an earlier inference in this file claimed that the tracks not on Jen's first-pass "non-JT" list (1 / 3 / 6 / 8 / 10 / 12 / 13) showed composer = **"Jagwar Twin" only**. The Loser screenshot proves that inference wrong (Loser = Pauling & English). Jen's first pass was flagging only **external/third-party** names (Mercer, Chaplin, S1, Morgan); the unlisted tracks may carry the core Pauling/English credit (or others) and need their own per-track Apple Music screenshots. Do not treat "Jagwar Twin only" as established for any track without its own screenshot.

## Inherited-substrate flags (provenance axis → `CONCEPT-InheritedSubstrate`)

Two confirmed external composers reveal interpolated cultural material — the second and (so far) clearest evidence for the provenance axis:

- **Track 2 — Dream / Dream** ← Johnny Mercer, "Dream (When You're Feeling Blue)" (1944); recorded by Sarah Vaughan. Confirmed.
- **Track 5 — Superhuman (Interlude)** ← Charles Chaplin, *The Great Dictator* (1940) closing speech. **Confirmed (grounded), three ways:** (1) Apple Music lyrics are verbatim the speech ("The kingdom of God is within man… you, the people, have the power… let us all unite"); (2) Apple Music composer field credits Charles Chaplin; (3) pre-existing vault note. Thematically exact for "Superhuman": the people's power to "create machines" vs. "make this life free and beautiful." Note: the Apple Music **"Written By"** line omits Chaplin (lists only Bhasker, Pauling, Roy English) — a composer-field/Written-By metadata inconsistency, but the verbatim text settles it.

## Conflicts with prior AZLyrics writer lists

Apple Music composer field is authoritative **where populated**. Where it shows only "Jagwar Twin," AZLyrics-added co-writers are **`[?]` unconfirmed — not disproven** (Apple composer metadata is frequently incomplete). To reconcile in `Sources/Lyrics/`:

- **Long Time Coming** (1): AZLyrics "Travis L. Barker, Matthew Pauling, Roy English"; Apple composer **not yet screenshot-verified** (earlier "Jagwar Twin only" was an inference now in doubt — see correction above). Travis Barker = confirmed album *contributor* (blink-182); his composer status is `[?]` pending screenshot.
- **Superhuman** (6): AZLyrics "Jeffrey Nath Bhasker, Matthew Pauling, Roy English"; Apple composer **not yet screenshot-verified**. Bhasker confirmed on the interlude (track 5), so plausible — but `[?]`.
- **Good Day** (4): AZLyrics "Terry Knight, Roy English, Larry Darnell Griffin Jr." — **confirmed wrong** (2026-05-28). Apple Music **Details composer is blank**; Apple Music **Lyrics-tab Written By = "Essex, Roy English, S1"**. "Terry Knight" was a phantom credit (wrong-song scrape); "Essex" is the actual co-writer (unidentified, `[?]` — possible interpolation source); S1 = LDG Jr. (matches).
- **Hell of a Night Pt. 2** (11): AZLyrics added "Matthew Pauling"; Apple composer = "Michael Morgan, Roy English" only.

## Maintenance
- Ingested 2026-05-27 from Apple Music Get Info (composer field), per-track verification by Jen.
- **Establishes Apple Music composer field as the album's authoritative songwriting-credit source.** AZLyrics writer lists downgraded to draft-tier — documented errors so far: *Dream / Dream* dropped Johnny Mercer + misspelled Vaughan; *Long Time Coming* "framers" → "famous"; *Good Day* / *Hell Pt. 2* phantom co-writers.
