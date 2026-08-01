---
citable: false
source: "ChatGPT/Codex Work session (transcript-audit-2026-07-29), recovered 2026-07-31 via Jen's paste from the Codex workspace — no local copy existed before this"
role: finding-aid / QA report over the Google Doc TRANSCRIPTS_handcorrected vs fresh audio; never cite this file — route corrections through the ear-check queue and cite the source videos
---

> **Recovery & status note (Claude, 2026-07-31).** Body below is verbatim as recovered. Two rows are already **superseded by stronger evidence** and must not re-enter circulation from here: **t11** — the audit's "beaming, just gonna be love today" was later overturned by the published caption + Jen's ear: **"demons gonna be loved today"** (ChatGPT itself conceded this in-session Wednesday 11:52 PM; [[Session Fold Inbox]] row `20260729-676a-2`). **t21** — the audit's "Blame Game / Blame King" uncertainty was later resolved by reading the gratitude run in full as **"the bling king"** (row `20260729-676a-5`); still ear-gated, but the audit's candidates are not the live ones. Names throughout remain gated per the names/numbers rule.

---

# Transcript Accuracy Audit — 2026-07-29

## Scope and method

This audit checks the Google Doc `TRANSCRIPTS_handcorrected.md` against the audio in all 25 TikToks and all 21 YouTube videos. The YouTube Shorts and the beginning of y09 through the `<<<<<<<<<<<<<<<<<<END>>>>>>>>>>>>>>>>>>>>>>>` marker were treated as the human-corrected control set; the TikToks and everything after the marker were treated as uncorrected.

Every source video was downloaded using YouTube format 18 where applicable. Full coverage was transcribed with MLX Whisper large-v3-turbo using `condition_on_previous_text=False` and silence-hallucination controls. The corrected control set and selected ambiguous passages were checked again with full OpenAI Whisper large-v3. Proper names and claims were reconciled against the supplied context and, where useful, public sources. The Google Doc was not edited.

The approximate long-form “coverage” figures below compare document words with source-pass words after stripping speaker labels and punctuation. They are not formal word-error rates, but the corrected y09 control is nearly one-to-one in length, so the roughly 38–59% figures in the uncorrected material are strong evidence of missing speech rather than stylistic variation.

## Overall verdict

The human-corrected control is substantially better than the original Whisper-small draft. It is complete enough to use as calibration, although y01 and y05 still need material repairs and several other Shorts need small wording or proper-name fixes. The corrected portion of y09 is complete and usable; it needs normal verbatim cleanup, not reconstruction.

The TikTok section is mixed. Two entries, t09 and t16, are near-empty and need full replacement. Several others contain meaning-changing errors or badly damaged proper names. A substantial group is already close enough for targeted correction.

The long-form YouTube material after the marker is not reliable as a transcript set. Twelve of the thirteen entries preserve only about 38–72% of the speech; y17 is the exception at roughly 91%, but even it drops a closing exchange and contains several garbles. The defensible action is to retranscribe the entire post-marker long-form section rather than patch it sentence by sentence.

## TikTok audit

| Entry | Verdict | Necessary correction or finding |
|---|---|---|
| t01 | Minor correction | `mind mythology` → **Mayan mythology**. Keep the brand spelling **Jagwar Twin**, even though generic ASR repeatedly normalizes it to “Jaguar.” |
| t02 | Minor correction | `loyal servant of the wrap` → **loyal servant of the Realm**. The last sentence is approximately, “You’ve got to be a loyal servant of the Realm.” |
| t03 | Usable with light cleanup | Essentially complete. Use **Jagwar Twin**, **Happy Face**, and **The Song of Love**; “well, this twin element” is closer than `or this twin element`. |
| t04 | Material correction | The damaged phrases are **“a fucking deficit,” “a fucking superpower,”** and approximately **“cut people’s fucking ass off.”** The current `fuck deficit` / `fucker power` wording changes the meaning. |
| t05 | Minor correction | Final word `again` → **I guess**. |
| t06 | Minor correction | Add the spoken final **“Thank you.”** |
| t07 | Material correction | `Jaguar King` → **Jagwar Twin**; add **“this rock”** after “the symbolism of.” The rest is mostly usable. |
| t08 | Minor but important | Opening is **“When it comes to your soul, a no is a no. When you ask…”**, not `a know is a know`. |
| t09 | Full replacement | The document has only 17 words; the source has about 159. It begins **“This life is such a blessing. It’s such a blessing to be here…”** and ends **“What dream are you dreaming?”** |
| t10 | Usable with a careful proofread | Broadly complete. Small function words and repeated `within` phrases vary, but there is no major lost section. Preserve the passage about love, personality, surrender, and being reborn at the soul level. |
| t11 | Material line edits | `something times` → **so many times**; `Beeman’s gonna be loved today` → approximately **“beaming, just gonna be love today.”** Several smaller bank/grocery-store phrases need rechecking. |
| t12 | Accurate / near-verbatim | No material error found. A few filler words and one `I promise` vary, but the meaning and coverage are intact. |
| t13 | Minor correction | `continues to eternally` → **continues to eternity**. |
| t14 | Accurate with one small repair | Add **“What? Anything.”** around “What happens when you break the loop?” Both large models hear Roy say **“8-29-2005”** even though the post context is 2025; preserve the spoken wording or flag it with `[sic]` rather than silently correcting it. The repeated closing instruction is present in the audio. |
| t15 | Material correction | Repair **Matt Wallace, Jagwar Twin, Eye Alaska, Songs About Jane, Faith No More, O.A.R., Sound City, GarageBand, Fearless Records**, and **chorus**, plus several dropped clauses. The entry is broadly complete but not trustworthy as written. |
| t16 | Full replacement | The document has only 28 words; the source has about 620. The opening identifies **Crystal Lee Lauderdale Clifford** and continues for the full four-minute gratitude story. The exact multi-part surname should receive a final human listen because it is not easily corroborated publicly. |
| t17 | Usable with line edits | Broadly complete. Preserve **Jade**, **Joni Mitchell**, **Janet Jackson**, **Jagwar Twin**, and “in my mind.” Remove ASR corruption around the briefly sung Joni line. |
| t18 | Usable with corrections | **Jeff Bhasker**, not `Basker`; **North Node** and **South Node**, not `note`. Add the spoken closing **“and that’s my gratitude.”** |
| t19 | Material correction | The final name is **Andy Serrao**, not `Andy Soraya`; repair **Chain Reaction, Eye Alaska, Fearless Records, Hot Topic**, and multiple dropped transitions. Fearless identifies Andy as its president, and public profiles identify Andy Serrao as Chain Reaction’s owner. |
| t20 | Material correction | **Linkin Park**, not `Lincoln Park`; **races of aliens**, not `racist availences`; preserve **Mercedes Coletta / Mercy** and repair several dropped relationship clauses. Public song credits independently connect Mercedes Colletta Britton with MERCY and Jagwar Twin. |
| t21 | Usable with proper-name cleanup | Use **Josh Huberman, Hubs, L. Ron Huberman, Eye Alaska,** and **Jagwar Twin**. The band/name phrase after “I met Josh” remains acoustically uncertain—models disagree between variants such as “The Blame Game” and “The Blame King”—so it needs a direct human listen. |
| t22 | Minor correction | `ANR` → **A&R**. Otherwise close. |
| t23 | Minor correction | `by houses` → **buying houses**. Repair “remember, the spark in you is so beautiful” and the final self-sabotage sentence. |
| t24 | Material correction | Opening is **“We’re antennas at all times.”** Repair **Victoria Asher, Peter Asher, produced the Beatles, Ringo Starr,** and **the Wonka estate**; several clauses are currently syntactically broken. |
| t25 | Minor/proper-name correction | **Rick Nowels** and **Jeff Bhasker**. Restore “some of your stuff” and a few fillers if strict verbatim accuracy is wanted. Remove the accidentally absorbed `YouTube Shorts` section heading from the transcript. |

## Human-corrected YouTube control

| Entry | Verdict | Necessary correction or finding |
|---|---|---|
| y01 | Material correction still needed | The current text remains garbled. Repairs include **“fun sing-along,” “my favorite item in my closet is my Beanie Baby collection from when I was a kid,” “someone living—probably Pharrell,” “Thirty Seconds to Mars,”** and **“Jagwar Twin is going to be dropping a bunch of music this year.”** The brief phrase after “make sure my socks are on tight” remains acoustically uncertain; it sounds closer to “and stretch” than the current repeated `and`. |
| y02 | Minor correction | Add **YUNGBLUD** between Avril Lavigne and Twenty One Pilots; use **Gorillaz, Twenty One Pilots,** and **Jagwar Twin**. |
| y03 | Accurate | Complete and faithful apart from punctuation. |
| y04 | Usable with light cleanup | No material omission detected. The syntax and punctuation can be cleaned; the human-added “the answer is yes” is not clear in either ASR pass and deserves a direct listen if exact verbatim status matters. |
| y05 | Material correction | `recorded my mom singing in` → **singing it**; **“by Miss Jeannie and the Grasshopper Kids”**; **“Give me a cue.”** The lyric is **“There’s a little grasshopper sitting on a stick / rubbing his legs to make them click / Will he jump high? Will he jump low? / Jump, Mr. Grasshopper. Ready?”** |
| y06 | Accurate | Roy’s spoken portion is complete. Keep the preceding “Can you spot…” line distinguished as the embedded video prompt rather than Roy’s speech. |
| y07 | Accurate | Complete apart from punctuation and the music cue. |
| y08 | Accurate / near-verbatim | Complete. Minor wording is closer to **“songs on there,” “yeah, okay, maybe,”** and **“open up your heart.”** |
| y09 through END marker | Complete and usable | The control passage is essentially one-to-one in length with the source and contains no major omitted block. It still needs ordinary verbatim cleanup, punctuation, and proper-name normalization, but it should not be replaced wholesale. |

## YouTube long-form after the END marker

| Entry | Document words | Source-pass words | Approx. coverage | Verdict |
|---|---:|---:|---:|---|
| y09 remainder | 3,987 | 7,754 | 51% | Full replacement |
| y10 | 2,123 | 4,112 | 52% | Full replacement |
| y11 | 465 | 1,237 | 38% | Full replacement; most severely truncated |
| y12 | 1,804 | 3,457 | 52% | Full replacement |
| y13 | 3,624 | 7,130 | 51% | Full replacement |
| y14 | 1,231 | 2,157 | 57% | Full replacement |
| y15 | 2,566 | 4,964 | 52% | Full replacement |
| y16 | 738 | 1,717 | 43% | Full replacement |
| y17 | 552 | 609 | 91% | Closest, but still replace or heavily repair |
| y18 | 3,923 | 6,673 | 59% | Full replacement |
| y19 | 299 | 489 | 61% | Full replacement |
| y20 | 3,627 | 6,234 | 58% | Full replacement |
| y21 | 421 | 581 | 72% | Full replacement |

y17 is the only post-marker entry that is close to complete. It nevertheless garbles the Ireland/Joshua Tree section and omits a closing exchange about Travis doing the drum part in one take, so treating it as reliable without repair would still be unsafe.

## Recommended disposition

Keep y03, y06, y07, y08, y09 through the marker, t03, t10, t12, t14, t17, t18, and t21 as the base text, then apply the corrections above. Replace t09 and t16 completely. Correct the remaining TikToks from the source pass, with t04, t07, t11, t15, t19, t20, and t24 receiving the most attention.

Replace the entire long-form section after the END marker from a fresh transcript. Patching the current text would conceal major omitted exchanges, and speaker labels should be rebuilt after the verbatim text is restored rather than inherited from the incomplete draft.
