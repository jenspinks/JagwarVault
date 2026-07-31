---
type: transcription-comparison
citable: false
status: superseded
created: "2026-07-30"
updated: "2026-07-31"
comparison_source: "/Users/jenniferspinks/Claude/Code/JagWeb/recovered/hom-audio-transcription"
---
# Comparison with the recovered Claude transcription run

> [!warning] Superseded machine-only assessment
> This comparison predates Jen's complete listening pass of 2026-07-30/31. It remains as an audit of the two machine workflows, but its file-level verdicts are superseded by [[README]] and the ear-reviewed reconciled drafts.

The recovered run used the same fourteen source files and decoded each original full mix with MLX Whisper large-v3 and large-v3-turbo. The newer run adds Demucs `htdemucs_ft` vocal isolation, repeats large-v3 and turbo on that vocal stem, and uses targeted filtering on the most difficult recordings. The recovered work is therefore useful as a fourth acoustic treatment, but it is not an independent human witness: all passes belong to the Whisper model family and share many of the same priors and hallucinations.

The recovered run's strongest contribution is its null-control work. It demonstrated that “Thank you,” “you,” and “© transcript Emily Beynon” can be generated from silence, noise, or music. Those phrases were excluded from the reviewed drafts unless other evidence supported them. Its original claim that only two files were worth reading was too conservative, however. That conclusion relied heavily on repetition-adjusted word counts and type-token ratios. Those measures correctly exposed loops, but they also downgraded coherent, strongly convergent lyrics in *O*, *The Future*, *Song of the Ring*, *The Death of Me*, *Creation*, and *The Song of the Sun & the Moon*. Vocal separation makes that difference visible.

Claude subsequently retracted that verdict in the recovered README and replaced it with segment-level loop detection, temporal chorus detection, and cross-pass sequence agreement. The corrected scoring now identifies *O* at 1.00 agreement, *The Death of Me* at 0.96, *Song of the Ring* at 0.90, and *The Future* as 389 retained words with no loops or known hallucination segments. It preserves the failure decisions for *An Aged Aged Man* and *Devil in the Mirror* and has begun its own Demucs pass.

## File-by-file comparison

| Recording | Recovered-run contribution | Effect on reviewed draft |
|---|---|---|
| [[Room 1 - Logos]] | Full-mix turbo hears the complete birthday song; the addressee remains “someone”/unclear | Raises the song itself to medium-high confidence; name remains withheld |
| [[Room 2 - An Aged Aged Man]] | Produces “Bye,” long “Ivor/I” loops, and incoherent pseudo-sentences | Confirms that no trustworthy verbal transcript is available |
| [[Room 3 - 33 (The Death Of Me)]] | Closely matches the verse; its refrain collapses into token loops | Confirms the verse; the separated stem supplies the recoverable refrain |
| [[Room 4 - O (444demo)]] | Both full-mix models closely match the newer full-mix and vocal-stem passes | Confirms the complete draft at high confidence |
| [[Room 6 - Western Woods]] | Repeats the same stable fragments and the same unstable, semantically broken lines | No promotion; remains a low-confidence fragment map |
| [[Room 12 - Creation w_Aubs]] | Confirms the principal verses and chorus, including the weak “processing time” region | Supports medium-high confidence while leaving the disputed phrases bracketed |
| [[Room 17 - Devil In The Mirror]] | Returns only known hallucination patterns | Confirms that no transcriptable words were recovered |
| [[Room 36 - Grandmas Song]] | Confirms the clear voicemail closing and “out there” passage; does not resolve the voicemail middle | No promotion of the unclear sentences; filtered pass adds the apparent Aramaic prayer |
| [[Room 60 - The Future (2010 demo)]] | Closely matches the newer passes throughout | Confirms the complete draft; “Father/farther” remains an acoustic homophone |
| [[Room 73 - Song Of The Ring (Voice Memo)]] | Near-verbatim agreement with the newer passes; large-v3 supports “song of the rain” near the ending | Confirms the complete draft at high confidence |
| [[Room 109 - Antarctica (Lost Song)]] | Confirms the full narrative, threat, chorus, and signal ending; repeats the same nonsensical crashed-ship phrase | Confirms medium-high confidence but does not solve the bracketed line |
| [[Room 116 - Everybodys Going To Space Now]] | Closely matches the conversation; hears “Astrobots” where isolated-vocal passes hear “astronauts” | Adds one explicit uncertainty marker; otherwise confirms the draft |
| [[Room 136 - House Of Spells (Cuz_idea)]] | Confirms the spell/moon verse, elevator refrain, and “you're all I need”; bridge renderings conflict | Core remains medium confidence; both bridge lines are now bracketed together |
| [[The Song of the Sun & the Moon (33 Demo)]] | Large-v3 closely matches the newer passes from beginning to end | Confirms the complete draft at high confidence |

## Net result

The comparison changes no major narrative or song-level finding. It strengthens the birthday-song identification in *Logos*, adds caution around “astronauts” in *Everybody's Going to Space Now*, and prevents an overconfident reconstruction of the short bridge in *House of Spells*. It also independently reproduces the failure verdicts for *An Aged Aged Man* and *Devil in the Mirror*. The raw recovered reports remain untouched in the `recovered/hom-audio-transcription` folder.
