---
type: transcript
citable: false
status: draft
created: "2026-07-30"
source_audio: "/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/Room 1 - Logos.mp3"
source_sha256: "e6095a5a52826cdda7582f5e01d6f9408d0f0edf1758feed6d0656996dbdbf68"
transcription_method: "Demucs htdemucs_ft vocal separation + MLX Whisper large-v3 and large-v3-turbo comparison"
---
# Room 1 - Logos

**Duration:** 0.56 minutes.

> [!warning] Machine comparison, not final verbatim authority
> This recording is music, not clean speech. The sections below preserve three
> machine views so disagreements remain visible. Full-mix and separated-vocal
> passes are two treatments of the same source, not independent witnesses.
> Any line intended for quotation still needs an ear-check against the audio.

## Best machine-supported draft

**Confidence:** Medium-high. Two isolated-vocal passes and the earlier full-mix turbo run agree on the birthday song, but the name after “dear” is not intelligible enough to supply.

```text
Happy birthday to you
Happy birthday to you
Happy birthday, dear [name unclear]
Happy birthday to you
```

The full-mix model's “Thanks for watching” and the separated-vocal model's final “Thank you” were rejected as silence/music hallucinations.

### `fullmix_large_v3`

- Model: `mlx-community/whisper-large-v3-mlx`
- Input: `/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/Room 1 - Logos.mp3`
- Runtime: 5.882 seconds

#### Continuous text

Happy Birthday to You Thanks for watching!

#### Timestamped segments

- **[00:04.06–00:08.46]** Happy Birthday to You `[avg_logprob=-0.950; no_speech=0.516]`
- **[00:30.00–00:31.50]** Thanks for watching! `[avg_logprob=-0.548; no_speech=0.787]`

### `vocals_large_v3`

- Model: `mlx-community/whisper-large-v3-mlx`
- Input: `/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/_transcription_work/separated/htdemucs_ft/Room 1 - Logos/vocals.wav`
- Runtime: 2.676 seconds

#### Continuous text

Happy Birthday to You Happy birthday to you Happy birthday to you Happy birthday dear someone Happy Birthday to you

#### Timestamped segments

- **[00:04.06–00:08.46]** Happy Birthday to You `[avg_logprob=-0.400; no_speech=0.453]`
- **[00:08.46–00:14.04]** Happy birthday to you `[avg_logprob=-0.400; no_speech=0.453]`
- **[00:14.04–00:19.70]** Happy birthday to you `[avg_logprob=-0.400; no_speech=0.453]`
- **[00:19.70–00:20.56]** Happy birthday dear someone `[avg_logprob=-0.400; no_speech=0.453]`
- **[00:22.92–00:27.78]** Happy Birthday to you `[avg_logprob=-0.930; no_speech=0.565]`

### `vocals_large_v3_turbo`

- Model: `mlx-community/whisper-large-v3-turbo`
- Input: `/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files/_transcription_work/separated/htdemucs_ft/Room 1 - Logos/vocals.wav`
- Runtime: 2.89 seconds

#### Continuous text

Happy Birthday to you Happy Birthday to you Happy Birthday dear someone Happy Birthday to you Thank you.

#### Timestamped segments

- **[00:04.24–00:08.62]** Happy Birthday to you `[avg_logprob=-0.449; no_speech=0.000]`
- **[00:08.62–00:14.20]** Happy Birthday to you `[avg_logprob=-0.449; no_speech=0.000]`
- **[00:15.70–00:21.24]** Happy Birthday dear someone `[avg_logprob=-0.449; no_speech=0.000]`
- **[00:23.08–00:28.08]** Happy Birthday to you `[avg_logprob=-0.449; no_speech=0.000]`
- **[00:31.48–00:32.92]** Thank you. `[avg_logprob=-0.229; no_speech=0.000]`
