---
type: transcription-index
citable: false
status: draft
created: "2026-07-30"
source_directory: "/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files"
---
# HoM audio artifact transcripts — 2026-07-30

These are private working transcripts of the fourteen audio files in the adjacent folder. They are deliberately marked `citable: false`: even the strongest drafts are machine-supported reconstructions of music, demos, and low-fidelity recordings, not artist-supplied lyric sheets.

## Method

Every source was hashed and preserved unchanged. Each recording was decoded three ways: the original full mix with MLX Whisper large-v3, a vocal stem produced by Demucs `htdemucs_ft` with MLX Whisper large-v3, and the same vocal stem with MLX Whisper large-v3-turbo. Difficult files received an additional filtered large-v3 check. The drafts were then compared with Claude's earlier full-mix large-v3 and large-v3-turbo run in `/Users/jenniferspinks/Claude/Code/JagWeb/recovered/hom-audio-transcription`; see [[Comparison with recovered Claude run - 2026-07-30]]. Each transcript begins with a reconciled draft and confidence note, while the complete local raw passes, timestamps, and model confidence values remain below it so disagreements are auditable.

Obvious model artifacts were not promoted into the reconciled text. In particular, “Thank you,” “Thanks for watching,” and “© transcript Emily Beynon” appeared in no-speech or music-only conditions and were rejected unless independently supported by the recording.

## Results

| Recording | Result |
|---|---|
| [[Room 1 - Logos]] | Medium — birthday song recovered; addressee's name unclear |
| [[Room 2 - An Aged Aged Man]] | Unavailable — no reliable words recovered |
| [[Room 3 - 33 (The Death Of Me)]] | High — close three-pass agreement |
| [[Room 4 - O (444demo)]] | High — complete lyric draft |
| [[Room 6 - Western Woods]] | Low — fragment map only |
| [[Room 12 - Creation w_Aubs]] | Medium-high — nearly complete, with several bracketed alternatives |
| [[Room 17 - Devil In The Mirror]] | No transcriptable words detected |
| [[Room 36 - Grandmas Song]] | Mixed — voicemail fragments, sung lines, and an apparent Aramaic prayer |
| [[Room 60 - The Future (2010 demo)]] | High — complete lyric draft with one homophone unresolved |
| [[Room 73 - Song Of The Ring (Voice Memo)]] | High — complete lyric draft |
| [[Room 109 - Antarctica (Lost Song)]] | Medium-high — complete narrative with one unresolved phrase |
| [[Room 116 - Everybodys Going To Space Now]] | High for substance — conversational filler lightly punctuated |
| [[Room 136 - House Of Spells (Cuz_idea)]] | Medium — core lyric recovered; short bridge remains unclear |
| [[The Song of the Sun & the Moon (33 Demo)]] | High — complete lyric draft |

## Preserved work products

The `_transcription_work` folder beside this index contains the SHA-256 manifest, all raw JSON passes, timestamped segments, Demucs vocal stems, targeted QC outputs, and processing logs. These are working derivatives; the original audio files were not modified.
