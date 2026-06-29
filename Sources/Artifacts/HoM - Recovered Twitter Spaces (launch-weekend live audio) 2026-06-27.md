---
type: artifact
citable: true
status: draft
captured: 2026-06-27
verified_against: ["Live recovery from X (x.com) via Jen's authenticated session, 2026-06-27. Space IDs sourced from the #hall-of-mirrors Discord community archive. Replays were STILL hosted on X ~4 years later; captured the periscope-replay HLS playlist (prod-fastly-*.video.pscp.tv/.../audio-space/playlist_*.m3u8?type=replay) off the network panel after clicking 'Play recording', muxed with ffmpeg -c copy. Audio verified (AAC 48kHz stereo, speech-level volume)."]
ingest_source: "Two Aug-2022 launch-weekend Twitter/X Spaces in which Roy English spoke — the 'lost' live-clue layer, recovered."
---
# Hall of Mirrors — Recovered Twitter Spaces (launch-weekend live audio)

The community said Roy *"dropped clues"* in **Twitter Spaces** during the Aug-2022 launch, and treated that audio as ephemeral/lost (one confirmed clue — *"truth is a sphere"* → the **Enlightened Being** artifact — was caught live from a space, per brittaney 2022-08-16). The two space IDs surfaced in the [[Sources/Artifacts/HoM Discord - Live events, lost content & unsolved leads (community archive) 2026-06-27|Discord community archive]]. **Both replays were still live on X four years later and are now captured locally** (the decaying-ARG clock had not yet run out on these). Audio: `Media/audio/hom-spaces/`.

## Space 1 — `1RDGlgzOramKL` · 2022-08-15 · 70 min · 150 listeners
- **Title:** "Come and check the new DoinGud product releases"
- **Host:** DoinGud (@DoinGudHQ) · **Co-host:** SDR (@0xSDR)
- **Speakers:** **Jagwar Twin (@JagwarTwin)**, Flowtonik (@flowtonikstudio), Haitham (@haithamengad), Nvak Collective (@NvakCollective), Robert Botto (@robertbotto_)
- **File:** `JT Twitter Space 2022-08-15 DoinGud (Roy + SDR) 1RDGlgzOramKL.m4a` (50 MB, AAC 48kHz stereo, 70:01)
- This is the one Aite_Lyds re-shared 08-16 (*"For those who didn't get a chance to join the recent space"*) and the one she *"relistened"* to for clue-mining.

## Space 2 — `1ZkJzbYlwOvJv` · 2022-08-16 · 72 min · 106 listeners
- **Title:** "The Listening Room w/ @JagwarTwin & @JHubberman"
- **Host:** annika rose (@AnnikaRoseSings)
- **Speakers:** **Jagwar Twin (@JagwarTwin)**, SDR (@0xSDR), Josh Hubberman (@jhubberman), Jannis (@DANCINGPHNXART), Maddie Laine (@thisismaddie)
- **File:** `JT Twitter Space 2022-08-16 The Listening Room (Roy + Annika Rose) 1ZkJzbYlwOvJv.m4a` (48 MB, AAC 48kHz stereo, 71:48)
- This is the one SDR linked (*"Good convos here with Roy and Annika Rose"*).

## ✅ TRANSCRIBED + clue-mined (2026-06-27) — verified accurate, 0 new codes
Both transcribed locally via **mlx-whisper / large-v3-turbo** (Apple-Silicon GPU; ~3 min each) → `Sources/Transcripts/Discord-HoM-Twitter-Space-2022-08-15-DoinGud-Roy-SDR.md` + `…2022-08-16-Listening-Room-Roy-Annika.md` (timestamped) + `.plain.txt`. **Transcription verified:** Space 2 @ 00:58:53 captures Roy verbatim — *"the truth is a sphere and we're all going to see our different perspectives"* = the clue brittaney caught live on 08-16 → the **Enlightened Being** artifact (`THE TRUTH IS A SPHERE`, already cracked). So the STT is good enough to catch real spoken codes.
**Clue-mine result = 0 new.** Generated **239,976** 1–7-word phrase-variants across both transcripts → `keccak256(lower)` leaves checked against the **42 open Merkle leaves** (the offline all-types validator) → **0 matches.** Reason: **these two are music/listening sessions, not clue-drop spaces** — "music" appears 58×/46×, "Hall of Mirrors" only 4× each; Roy *explains* the HoM (crowns, attention-over-money, "pieces of myself," Saravi's world) but speaks only the one already-known clue. **Caveats:** STT can mis-hear an exact code, and most space clues are *spoken hints* (derive, don't match) — but a manual read of the HoM passages surfaced no unconverted lead.
**Archival value stands:** ~2.3 hrs of primary-source Roy describing the HoM philosophy in his own words (citable). **The likely clue-drop space is a DIFFERENT one** — Roy's 08-11 *"tune into the Twitter space at 1pm PST… I might drop some clues"* (announced in Discord); its ID was never posted in-channel. **Open follow-up:** hunt Roy's other Aug-2022 hosted/guested Spaces (esp. 08-11→13 launch days) for a clue-dense one with a surviving replay.

## Recovery method (reusable)
1. Get the space ID from any reference (`x.com/i/spaces/{ID}`).
2. In a logged-in X session: navigate `…/i/spaces/{ID}/peek` → if state = ENDED with a **"Play recording"** control, the replay still exists.
3. Click "Play recording"; capture the `prod-fastly-*.video.pscp.tv/Transcoding/.../audio-space/playlist_*.m3u8?type=replay` URL from the network panel (the `AudioSpaceById` GraphQL gives the metadata + `media_key`; `live_video_stream/status/{media_key}` issues the signed playlist).
4. `ffmpeg -i "<m3u8>" -c copy out.m4a` promptly (the path token is time-limited).
- ⚠ A **Wayback** snapshot of the space page exists for `1RDGlgzOramKL` but is a **React shell** — feature-flags only, **no audio/metadata** (don't rely on Wayback for Spaces). The live X replay is the real source.

## Cross-references
- [[Sources/Artifacts/HoM Discord - Live events, lost content & unsolved leads (community archive) 2026-06-27]] — where the space IDs + the "truth is a sphere" capture were found.
- [[Sources/Artifacts/HoM - 2022 Twitter & Campaign (Wayback recovery) 2026-06-26]] — sibling recovered-campaign doc.
- `_System/HoM - Session Handoff & Index.md`
