---
type: transcript
citable: true
status: stable
created: "2026-07-30"
updated: "2026-07-31"
ear_checked: true
ear_checked_by: "Jen"
identification_confidence: "100% (instrumental; no lyrics)"
citation_basis: "Jen's complete ear review of the preserved source audio"
source_audio: "/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/Room 17 - Devil In The Mirror.mp3"
source_sha256: "7092173d3ba391c998d1fd7c040efa85d700f18f62630e8692372b80f19c7ec1"
transcription_method: "Demucs htdemucs_ft vocal separation + MLX Whisper large-v3 and large-v3-turbo comparison"
---
# Room 17 - Devil In The Mirror

**Duration:** 0.74 minutes.

> [!note] Ear-reviewed identification with machine audit trail
> Jen checked this recording by ear on 2026-07-30/31 and confirmed that it is instrumental. The raw machine sections remain only to document the rejected Whisper hallucinations.

## Ear-reviewed identification

**Ear verdict:** Verified instrumental. There are no lyrics to transcribe; every phrase returned by the models is rejected.

```text
[Instrumental]
```

“© transcript Emily Beynon” and “Thank you” were rejected as fabricated boilerplate.

### `fullmix_large_v3`

- Model: `mlx-community/whisper-large-v3-mlx`
- Input: `/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/Room 17 - Devil In The Mirror.mp3`
- Runtime: 3.396 seconds

#### Continuous text

© transcript Emily Beynon

#### Timestamped segments

- **[00:40.90–00:43.78]** © transcript Emily Beynon `[avg_logprob=-0.229; no_speech=0.585]`

### `vocals_large_v3`

- Model: `mlx-community/whisper-large-v3-mlx`
- Input: `/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/_transcription_work/separated/htdemucs_ft/Room 17 - Devil In The Mirror/vocals.wav`
- Runtime: 2.252 seconds

#### Continuous text

Thank you. Thank you.

#### Timestamped segments

- **[00:19.64–00:20.48]** Thank you. `[avg_logprob=-0.340; no_speech=0.795]`
- **[00:36.06–00:36.84]** Thank you. `[avg_logprob=-0.239; no_speech=0.735]`

### `vocals_large_v3_turbo`

- Model: `mlx-community/whisper-large-v3-turbo`
- Input: `/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/_transcription_work/separated/htdemucs_ft/Room 17 - Devil In The Mirror/vocals.wav`
- Runtime: 2.417 seconds

#### Continuous text

Thank you. Thank you.

#### Timestamped segments

- **[00:03.94–00:04.24]** Thank you. `[avg_logprob=-0.236; no_speech=0.000]`
- **[00:30.30–00:31.42]** Thank you. `[avg_logprob=-0.225; no_speech=0.000]`
