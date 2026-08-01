---
type: transcript
citable: false
status: draft
created: "2026-08-01"
updated: "2026-08-01"
ear_checked: false
ear_checked_by: ""
identification_confidence: "high (content) / machine-only (wording)"
citation_basis: "NOT YET CITABLE — machine transcription only, no ear review. Gate every line below before quoting."
source_audio: "/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/_transcription_work/gap-fill-2026-08-01/442795f9.mp3"
source_sha256: "229ea22d04f0c88d12a1d8d133318d3d5bf55369044994ca32511322c9bc4041"
transcription_method: "Demucs htdemucs_ft vocal separation + MLX Whisper large-v3 and large-v3-turbo comparison (3 passes)"
---
# `442795f9` — *a bullet in her genes* (Soul Is A Star, working draft)

**Duration:** 35.1 s (sung material ends ~27 s; the remainder is a wordless *oh* tail).
**HoM leaf:** `0x442795f9f776aa7cc558db168eab94beaadf5b731f5fbdc21c184825302993c8`
**Code:** `a bullet in her genes` — recovered 2026-06-28 from the live "I'm 33" board's typed text. genes/jeans pun; *"her jeans"* misses.

> [!warning] NOT ear-checked — do not quote
> This is a **machine-only** transcription (three passes, two models, separated + full mix). Under the standing rule that **engine agreement on a word is not correctness**, nothing here is citable until Jen's ear passes it. The named-entity risk is normal; the specific risk here is that the models are being **pulled toward the released lyric they already know**.

## What this is `[G]`

The room holds a **working draft of the second verse of [[Essays/Concepts/Songs/Soul Is A Star]]** (*33*, 2022, track 5) — the "girl" verse whose released text is in [[Sources/Lyrics/Soul Is A Star]]. The alignment is near line-for-line, which makes the two **divergences** the interesting part: the draft contains material that did not survive to the record.

### Draft vs release, aligned

| # | Room audio (machine, ungated) | Released lyric | Note |
|---|---|---|---|
| 1 | "I met a girl who was **dumb** / with a bullet in her **jeans**" | "I met a girl / Who was **a gun** / **Kept** a bullet in her **genes**" | *dumb* ≈ **a gun**; the models collapse three short lines into one |
| 2 | **"Bang bang"** | — | ⚠ **NOT IN THE RELEASE.** A two-beat hook after the bullet line |
| 3 | "**Sh[im/em]baba** / **Shin Papa** was a sinner / playing God behind the scenes" | "**She said Papa** was a sinner / Playing God behind the scenes" | *She said Papa* is near-certain; second half is verbatim |
| 4 | "I'm **Pavel** from the **Thebes**" / "I'm **powerful** from the **themes**" | "And **Power** from **The Thieves**" | high-confidence decode; the garble is the models missing a known phrase |
| 5 | **"Cut talk, cut talk, cut talk"** ×3 | — (release has "She wanted Love / But she got Fame" here) | ⚠ **NOT IN THE RELEASE**, and occupies the slot where the wanted-Love couplet lands |
| 6 | "There's always something bigger / when the world and what it seems" | "There's always something bigger / When The World ain't what it seems" | the *ain't* is what the models lose |
| 7 | "You know / your soul is a star" | "You know / Your soul is a Star" | the chorus-turn arrives |

**Two things in the draft that are not on the record** — flagged, not interpreted:

1. **"Bang bang"** — a percussive hook following *"a bullet in her genes."* If real, the draft made the gun literal for one beat and the release removed it, which is the same **de-literalising** edit direction seen elsewhere in the corpus. `[?]` pending ear.
2. **"Cut talk"** ×3 — sits exactly where *"She wanted Love / But she got Fame"* was later written. Read it two ways and keep both: (a) a **scratch placeholder** syllable holding the meter until the real couplet arrived, or (b) an actual **studio instruction** ("cut talk") captured in the take. `[?]` — the ear will separate these instantly, machines cannot.

> [!question] For Jen's ear
> 1. Line 1 — is it *"who was a gun, kept a bullet in her genes"*?
> 2. **Is "Bang bang" really there** (≈ 4–5 s)?
> 3. **What is "cut talk" (≈ 11–14 s)?** Sung placeholder, or someone actually speaking?
> 4. Line 4 — confirm *"and power from the thieves"*.
> 5. Does the *oh* tail (27–35 s) carry any words?

## Reconciled draft text (ungated)

```text
I met a girl who was [a gun?]
[Kept?] a bullet in her genes
[Bang bang]                      ← not in the release
[She said] Papa was a sinner
Playing God behind the scenes
[And power from the thieves]
[Cut talk, cut talk, cut talk]   ← not in the release
There's always something bigger
When the world [ain't] what it seems
You know
Your soul is a star
(oh — oh — oh …)
```

## Why it matters

The board's typed cell *a bullet in her genes* is a **code that opens the room containing that line's own first draft.** The board does not merely quote the finished song — it points at the workbench. Wire to [[Brain/Media/The vocal autobiography (the audio stratum)]] and [[Sources/Artifacts/Board - The Artifact Overlap (crops, rooms, subjects)]].

---

## Raw machine passes

### `fullmix_large_v3`
- Model: `mlx-community/whisper-large-v3-mlx` · Input: `442795f9.mp3`

- **[00:00–00:04]** I met a girl who was dumb with a bullet in her jeans `[lp=-0.445; ns=0.300]`
- **[00:04–00:05]** Bang bang
- **[00:05–00:09]** Shembaba was a sinner playing God behind the scenes
- **[00:09–00:11]** I'm Pavel from the Thebes
- **[00:11–00:14]** Cut talk, cut talk, cut talk
- **[00:14–00:18]** There's always something bigger when the world and what it sees
- **[00:18–00:21]** You know, when the world and what it sees
- **[00:21–00:24]** You know, your soul is a star
- **[00:24–00:27]** You know, you're a star
- **[00:27–00:35]** *(repeated "oh")*

### `vocals_large_v3`
- Model: `mlx-community/whisper-large-v3-mlx` · Input: `sep/htdemucs_ft/442795f9/vocals.wav`

- **[00:00–00:04]** I met a girl who was dumb with a bullet in her jeans `[lp=-0.371; ns=0.398]`
- **[00:04–00:05]** Bang bang
- **[00:05–00:09]** Shimbaba was a sinner playing God behind the scenes
- **[00:09–00:11]** I'm Pavel from the Themes
- **[00:11–00:14]** Cut talk, cut talk, cut talk
- **[00:14–00:18]** There's always something bigger in the world than what it seems
- **[00:18–00:21]** You know, in the world than what it seems
- **[00:21–00:25]** You know, your songs, your stars, your clouds
- **[00:25–00:35]** *(repeated "I just")* — rejected as hallucinated loop

### `vocals_large_v3_turbo`
- Model: `mlx-community/whisper-large-v3-turbo` · Input: `sep/htdemucs_ft/442795f9/vocals.wav`

- **[00:00–00:05]** I met a girl who was dumb with a bullet in her jeans. Bang bang! `[lp=-0.405; ns=0.000]`
- **[00:05–00:09]** Shin Papa was a sinner, a playing guy behind the scenes.
- **[00:09–00:14]** I'm powerful from the themes. Cut talk. Cut talk. Cut talk.
- **[00:14–00:19]** There's always something bigger when the world and what it seems, you know.
- **[00:19–00:22]** When the world and what it seems, you know.
- **[00:22–00:25]** Your song, your stars, your eyes.
- **[00:25–00:35]** *(repeated "oh")*

**Cross-pass agreement:** all three independently produce *"Bang bang"* and *"Cut talk"* ×3 — the two lines absent from the release. Agreement raises the odds that **something** is there; it does not establish **what**. Ear gate stands.
