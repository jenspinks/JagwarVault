---
type: transcription-index
citable: true
status: stable
created: "2026-07-30"
updated: "2026-07-31"
ear_checked: true
ear_checked_by: "Jen"
transcript_confidence: "99% overall; 100% on load-bearing lines"
confidence_scope: "the fourteen transcripts in this index only; remaining uncertainties are explicitly bracketed"
citation_basis: "machine-assisted transcription fully reviewed and corrected by Jen by ear"
source_directory: "/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files"
---
# HoM audio artifact transcripts — 2026-07-30

These fourteen transcripts are clean, stable, and citable. The machine transcription was remarkably accurate, and Jen listened to every recording, corrected the remaining words by ear, and reviewed the complete reconciled set. Confidence is approximately **99% across the full text and 100% for the load-bearing lines used in analysis**. Remaining acoustic uncertainties are preserved explicitly in brackets rather than silently resolved.

This status applies only to the fourteen recordings indexed here; it does not automatically extend to other machine transcripts Jen has not reviewed. These pages may be cited as Jen's ear-reviewed transcriptions, with the preserved source audio and timestamps retained as the audit trail. A lack of artist-supplied lyric sheets is not treated as a citation barrier for this set.

Textual accuracy and speaker attribution are separate questions. A transcript may be clean even when the identity of a speaker remains open. Room 116, for example, begins with an unknown man in conversation with Roy before Roy says, *"It was that exact drive of wanting people to think I was great…"* Room 2 is an unknown woman's reading of Lewis Carroll played in reverse; Roy is not the reader. Mixed or uncertain speakers are labeled inline and do not lower confidence in the words themselves.

## Method

Every source was hashed and preserved unchanged. Each recording was decoded three ways: the original full mix with MLX Whisper large-v3, a vocal stem produced by Demucs `htdemucs_ft` with MLX Whisper large-v3, and the same vocal stem with MLX Whisper large-v3-turbo. Difficult files received an additional filtered large-v3 check. The drafts were then compared with Claude's earlier full-mix large-v3 and large-v3-turbo run in `/Users/jenniferspinks/Claude/Code/JagWeb/recovered/hom-audio-transcription`; see [[Comparison with recovered Claude run - 2026-07-30]]. Jen then listened to every recording and corrected the reconciled drafts by ear. Each transcript begins with that ear-reviewed draft and a current confidence note, while the complete raw passes, timestamps, and model confidence values remain below it so disagreements are auditable.

Obvious model artifacts were not promoted into the reconciled text. In particular, “Thank you,” “Thanks for watching,” and “© transcript Emily Beynon” appeared in no-speech or music-only conditions and were rejected unless independently supported by the recording.

## Results

> ✅ **FULL LISTENING PASS COMPLETE (Jen, 2026-07-30/31).** Every recording was heard; ear-corrections are applied in the per-file reconciled transcripts, and all fourteen pages are stable and citable. Overall textual confidence is 99%; load-bearing lines are accepted at 100%. The ear-verdict column below supersedes the machine confidence where they differ, while speaker-attribution uncertainty remains separately marked.

| Recording | Machine result | Ear verdict (Jen) |
|---|---|---|
| [[Room 1 - Logos]] | Medium — birthday song recovered | ✅ verified; the addressee is the sung word **"Someone"** |
| [[Room 2 - An Aged Aged Man]] | Unavailable — no reliable words | ✅ identified: **an unknown woman's reading of Lewis Carroll's "An Aged Aged Man" played in reverse**; Roy is not the reader; the reversal explains the failed forward ASR |
| [[Room 3 - 33 (The Death Of Me)]] | High | ✅ verified in full; the disputed word is **"That said"** |
| [[Room 4 - O (444demo)]] | High — complete lyric draft | ✅ identified: **The Circle, the released version** |
| [[Room 6 - Western Woods]] | Low — fragment map only | ✅ citable fragment map; unbracketed text is secure, while bracketed wording remains unresolved |
| [[Room 12 - Creation w_Aubs]] | Medium-high | ✅ confirmed **AW2H, different version, acoustic**; "Process and time"; "I was still I" |
| [[Room 17 - Devil In The Mirror]] | No transcriptable words | ✅ **instrumental** |
| [[Room 36 - Grandmas Song]] | Mixed | ✅ text confirmed: **"Restore the plan on Earth"**; child's **"That was so fun!"**; voicemail likely references **the 2014-07-27 Venice Beach lightning strike**, but the call date is unresolved; ✅ **chant confirmed = the Lord's Prayer**; "Floating in space" section recovered; specific supporting-voice identities remain open |
| [[Room 60 - The Future (2010 demo)]] | High; father/farther unresolved | passed unadjusted (father/farther likely permanently undecidable) |
| [[Room 73 - Song Of The Ring (Voice Memo)]] | High | ✅ verified; coda repeats **"ring," never "rain"**; verse order corrected by timestamps |
| [[Room 109 - Antarctica (Lost Song)]] | Medium-high | ✅ adjusted: "and some kind of person"; **"Send my signal home"** added |
| [[Room 116 - Everybodys Going To Space Now]] | High for substance | ✅ text confirmed; opening speaker is an unknown man, followed by Roy's first-person response; astronauts/Astrobots remains bracketed |
| [[Room 136 - House Of Spells (Cuz_idea)]] | Medium — bridge unclear | ✅ resolved: **"fire escape / from the house of spells"**; owl hooting + children's chorus noted |
| [[The Song of the Sun & the Moon (33 Demo)]] | High | ✅ adjusted: **"So live your dreams…"**; full double-chorus ending |

## ⚠ Two later transcripts — NOT part of the set above, NOT ear-checked

Added **2026-08-01**, closing the last two audio gaps in the corpus. **The 99%/citable status above does not extend to these.** Both are `citable: false`, machine-only, three-pass; each carries its own ear-gate questions.

| Recording | Machine result | Status |
|---|---|---|
| [[442795f9 - a bullet in her genes (Soul Is A Star draft)]] | A **working draft of the *Soul Is A Star* girl-verse**, aligning near line-for-line against the released lyric — with **two lines that never reached the record**: a "Bang bang" hook after the bullet line, and "cut talk" ×3 sitting exactly where *"She wanted Love / But she got Fame"* was later written | ⏳ ear gate open — is "Bang bang" really there? Is "cut talk" a sung placeholder or an actual studio instruction? |
| [[e163466b - the Water Song (uncracked room)]] | A male voice paraphrases the water-descent passage from **Hannah Hurnard's *Hinds' Feet on High Places* (1955)**, sings a quatrain **recombined out of sequence** from her "Water Song," then: *"melody just came to me… I didn't have to work at it."* | ⏳ ear gate open — **speaker unconfirmed**; line 3 unresolved (*urge* / *earth* / *hill* / *moon*). Room **still uncracked** |

With these, **every recording in the corpus has a transcript.** Speaker attribution on `e163466b` stays open under the rule stated above: textual accuracy and speaker identity are separate questions.

## Preserved work products

The `_transcription_work` folder beside this index contains the SHA-256 manifest, all raw JSON passes, timestamped segments, Demucs vocal stems, targeted QC outputs, and processing logs. These are working derivatives; the original audio files were not modified.
