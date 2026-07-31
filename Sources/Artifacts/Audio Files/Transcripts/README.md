---
type: transcription-index
citable: false
status: reviewed
created: "2026-07-30"
updated: "2026-07-31"
ear_checked: true
ear_checked_by: "Jen"
source_directory: "/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files"
---
# HoM audio artifact transcripts — 2026-07-30

These are private working transcripts of the fourteen audio files in the adjacent folder. They are deliberately marked `citable: false`: even the strongest drafts are ear-reviewed transcriptions of music, demos, and low-fidelity recordings, not artist-supplied lyric sheets. Cite the preserved source audio rather than these working pages.

## Method

Every source was hashed and preserved unchanged. Each recording was decoded three ways: the original full mix with MLX Whisper large-v3, a vocal stem produced by Demucs `htdemucs_ft` with MLX Whisper large-v3, and the same vocal stem with MLX Whisper large-v3-turbo. Difficult files received an additional filtered large-v3 check. The drafts were then compared with Claude's earlier full-mix large-v3 and large-v3-turbo run in `/Users/jenniferspinks/Claude/Code/JagWeb/recovered/hom-audio-transcription`; see [[Comparison with recovered Claude run - 2026-07-30]]. Jen then listened to every recording and corrected the reconciled drafts by ear. Each transcript begins with that ear-reviewed draft and a current confidence note, while the complete raw passes, timestamps, and model confidence values remain below it so disagreements are auditable.

Obvious model artifacts were not promoted into the reconciled text. In particular, “Thank you,” “Thanks for watching,” and “© transcript Emily Beynon” appeared in no-speech or music-only conditions and were rejected unless independently supported by the recording.

## Results

> ✅ **FULL LISTENING PASS COMPLETE (Jen, 2026-07-30/31).** Every recording was heard; ear-corrections are applied in the per-file reconciled drafts, and the status and confidence markers now reflect that review. The ear-verdict column below supersedes the machine confidence where they differ.

| Recording | Machine result | Ear verdict (Jen) |
|---|---|---|
| [[Room 1 - Logos]] | Medium — birthday song recovered | ✅ verified; the addressee is the sung word **"Someone"** |
| [[Room 2 - An Aged Aged Man]] | Unavailable — no reliable words | ✅ identified: **Lewis Carroll's "An Aged Aged Man" played in reverse**; the reversal explains the failed forward ASR |
| [[Room 3 - 33 (The Death Of Me)]] | High | ✅ verified in full; the disputed word is **"That said"** |
| [[Room 4 - O (444demo)]] | High — complete lyric draft | ✅ identified: **The Circle, the released version** |
| [[Room 6 - Western Woods]] | Low — fragment map only | heard; no corrections securable — stays low |
| [[Room 12 - Creation w_Aubs]] | Medium-high | ✅ confirmed **AW2H, different version, acoustic**; "Process and time"; "I was still I" |
| [[Room 17 - Devil In The Mirror]] | No transcriptable words | ✅ **instrumental** |
| [[Room 36 - Grandmas Song]] | Mixed | ✅ substantially resolved: **"Restore the plan on Earth"**; voicemail likely references **the 2014-07-27 Venice Beach lightning strike**, but the call date is unresolved; ✅ **chant confirmed = the Lord's Prayer**; "Floating in space" section recovered; child's line remains open |
| [[Room 60 - The Future (2010 demo)]] | High; father/farther unresolved | passed unadjusted (father/farther likely permanently undecidable) |
| [[Room 73 - Song Of The Ring (Voice Memo)]] | High | ✅ verified; coda repeats **"ring," never "rain"**; verse order corrected by timestamps |
| [[Room 109 - Antarctica (Lost Song)]] | Medium-high | ✅ adjusted: "and some kind of person"; **"Send my signal home"** added |
| [[Room 116 - Everybodys Going To Space Now]] | High for substance | passed unadjusted (astronauts/Astrobots still bracketed) |
| [[Room 136 - House Of Spells (Cuz_idea)]] | Medium — bridge unclear | ✅ resolved: **"fire escape / from the house of spells"**; owl hooting + children's chorus noted |
| [[The Song of the Sun & the Moon (33 Demo)]] | High | ✅ adjusted: **"So live your dreams…"**; full double-chorus ending |

## Preserved work products

The `_transcription_work` folder beside this index contains the SHA-256 manifest, all raw JSON passes, timestamped segments, Demucs vocal stems, targeted QC outputs, and processing logs. These are working derivatives; the original audio files were not modified.
