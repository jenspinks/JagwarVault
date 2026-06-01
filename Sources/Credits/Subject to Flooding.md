---
type: credits
citable: true
status: stable
album: ALBUM-SubjectToFlooding
verified_against: ["Apple Music track metadata — composer field, per-track (checked by Jen, 2026-05-27)", "Spotify Credits view, per-track (Jen, 2026-05-28 & 2026-05-30: N.F.F., Hell Pt. 2, Move To You, Roy Voice Memo, Precious Time) + Apple Details/Lyrics (Superhuman, 2026-05-30)"]
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
| 7 | Move To You | Composition & Lyrics (Spotify): **Roy English, S1** | verified 2026-05-30 (Jen Spotify Credits). Confirms the Apple composer field. Full production: **Roy English & Michael Morgan & S1** (Producers), **S1** (Executive Producer), **Chris Gehringer** (Masterer), **Jeff Ellis** (Mixer). |
| 6 | Superhuman | Composer (Apple Details + Lyrics-tab Written By): **Jeff Bhasker, Matt Pauling & Roy English** | verified 2026-05-30 (Jen screenshots). Confirms the AZLyrics writer list; Bhasker also on the Interlude (5). Track 6 of 13. |
| 9 | Roy Voice Memo: S1 Arrowhead | Composition & Lyrics (Spotify): **Roy English, S1** | verified 2026-05-30 (Jen Spotify Credits). Confirms the Apple composer field. Production: Roy English (Producer), S1 (Executive Producer), Chris Gehringer (Masterer), Jeff Ellis (Mixer) — no third producer. |
| 8 | N.F.F. (No Fake Friends) | Composition & Lyrics (Spotify): **Roy English, Matt Pauling, S1** | verified 2026-05-28 (Jen Spotify Credits screenshot). Matches AZLyrics writer list (no conflict on this track). Full production team: Roy English/Matt Pauling/S1 (Producers), S1 (Executive Producer), Chris Gehringer (Masterer), Jeff Ellis (Mixer). |
| 12 | Precious Time | Composition & Lyrics (Spotify): **Roy English, Matt Pauling, Sarah Vaughan** | verified 2026-05-30 (Jen Spotify Credits). **Sarah Vaughan writer credit → probable jazz-standard interpolation** (cf. Dream/Dream, track 2, which also credits Vaughan + Mercer) — inherited-substrate flag; identify the sampled standard `[?]`. Production: Roy English / Matt Pauling (Producers), **Adam Hawkins (Mixer — note: *not* Jeff Ellis on this track)**, Chris Gehringer (Masterer), S1 (Executive Producer). |
| 11 | Hell of a Night Pt. 2 (The Hallelujah Stickup) | Composition & Lyrics (Spotify, confirms Apple): **Roy English, Michael Morgan** | verified 2026-05-28 (Jen Spotify Credits). Full production: Roy English/Michael Morgan/Matt Pauling (Producers), S1 (Executive Producer), Chris Gehringer (Masterer), Jeff Ellis (Mixer). **AZLyrics' "Matt Pauling as Writer" was a Producer↔Writer conflation** — Pauling is a Producer, not a Writer on this track. |

### Album-wide engineering team (Spotify Credits, observed across tracks)
- **Chris Gehringer** — Masterer (on every track screenshotted so far)
- **Jeff Ellis** — Mixer (most tracks screenshotted so far). **Exception: Precious Time (12) is mixed by Adam Hawkins** — Ellis is recurring, not universal.
- **S1 (Larry Darnell Griffin Jr.)** — Executive Producer (recurring across tracks; also writer on Good Day, N.F.F.)
- **Matt Pauling** — Producer (recurring; also writer on Loser, N.F.F.)
- **Michael Morgan** — Producer (Hell of a Night Pt. 2, Move To You; also a *writer* on Hell Pt. 2)

**Important correction:** an earlier inference in this file claimed that the tracks not on Jen's first-pass "non-JT" list (1 / 3 / 6 / 8 / 10 / 12 / 13) showed composer = **"Jagwar Twin" only**. The Loser screenshot proves that inference wrong (Loser = Pauling & English). Jen's first pass was flagging only **external/third-party** names (Mercer, Chaplin, S1, Morgan); the unlisted tracks may carry the core Pauling/English credit (or others) and need their own per-track Apple Music screenshots. Do not treat "Jagwar Twin only" as established for any track without its own screenshot.

## Inherited-substrate flags (provenance axis → `CONCEPT-InheritedSubstrate`)

Two confirmed external composers reveal interpolated cultural material — the second and (so far) clearest evidence for the provenance axis:

- **Track 2 — Dream / Dream** ← Johnny Mercer, "Dream (When You're Feeling Blue)" (1944); recorded by Sarah Vaughan. Confirmed.
- **Track 12 — Precious Time** ← **Sarah Vaughan** writer credit (Spotify, 2026-05-30). **Refined 2026-05-30:** the lyrics are now verified ([[Sources/Lyrics/Precious Time]]) and are **original** (Roy/Pauling) — *not* a Vaughan-standard's words. So unlike *Dream / Dream* (lyrical interpolation of Mercer's standard), the Vaughan credit here most likely flags a **musical sample of a Vaughan recording** (vocal/instrumental), which wouldn't surface in the lyric. `[?]` source recording unidentified. **Third inherited-substrate candidate on the album** — identify the sample before asserting. (Sarah Vaughan = jazz vocalist, not a writer; the "writer" credit is the sample-clearance artifact.)
- **Track 5 — Superhuman (Interlude)** ← Charles Chaplin, *The Great Dictator* (1940) closing speech. **Confirmed (grounded), three ways:** (1) Apple Music lyrics are verbatim the speech ("The kingdom of God is within man… you, the people, have the power… let us all unite"); (2) Apple Music composer field credits Charles Chaplin; (3) pre-existing vault note. Thematically exact for "Superhuman": the people's power to "create machines" vs. "make this life free and beautiful." Note: the Apple Music **"Written By"** line omits Chaplin (lists only Bhasker, Pauling, Roy English) — a composer-field/Written-By metadata inconsistency, but the verbatim text settles it.

## Conflicts with prior AZLyrics writer lists

Apple Music composer field is authoritative **where populated**. Where it shows only "Jagwar Twin," AZLyrics-added co-writers are **`[?]` unconfirmed — not disproven** (Apple composer metadata is frequently incomplete). To reconcile in `Sources/Lyrics/`:

- **Long Time Coming** (1): AZLyrics "Travis L. Barker, Matthew Pauling, Roy English"; Apple composer **not yet screenshot-verified** (earlier "Jagwar Twin only" was an inference now in doubt — see correction above). Travis Barker = confirmed album *contributor* (blink-182); his composer status is `[?]` pending screenshot.
- **Superhuman** (6): **RESOLVED 2026-05-30** — Apple Music Details composer field = **Jeff Bhasker, Matt Pauling & Roy English** (+ Lyrics-tab "Written By" identical; Jen screenshots). Confirms the AZLyrics writer list (Bhasker confirmed on the interlude, track 5). No longer `[?]`.
- **Good Day** (4): AZLyrics "Terry Knight, Roy English, Larry Darnell Griffin Jr." — **confirmed wrong** (2026-05-28). Apple Music **Details composer is blank**; Apple Music **Lyrics-tab Written By = "Essex, Roy English, S1"**. "Terry Knight" was a phantom credit (wrong-song scrape); "Essex" is the actual co-writer (unidentified, `[?]` — possible interpolation source); S1 = LDG Jr. (matches).
- **Hell of a Night Pt. 2** (11): **RESOLVED 2026-05-28** — AZLyrics' "Matt Pauling" listed under Writer was a Producer↔Writer conflation. Spotify Credits + Apple Music: Pauling is a **Producer** on this track, not a Writer. Writers = Roy English, Michael Morgan only.

## Maintenance
- Ingested 2026-05-27 from Apple Music Get Info (composer field), per-track verification by Jen.
- **Establishes Apple Music composer field as the album's authoritative songwriting-credit source.** AZLyrics writer lists downgraded to draft-tier — documented errors so far: *Dream / Dream* dropped Johnny Mercer + misspelled Vaughan; *Long Time Coming* "framers" → "famous"; *Good Day* / *Hell Pt. 2* phantom co-writers.
