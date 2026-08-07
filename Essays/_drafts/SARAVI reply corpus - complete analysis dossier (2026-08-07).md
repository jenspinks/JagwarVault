---
type: draft
citable: false
status: open
created: 2026-08-07
about: "Complete analysis of the 102-reply SARAVI voice corpus (Sources/Quotes/SARAVI - signed replies). 20-agent workflow: 5 lenses, adversarial verification, synthesis. Mechanism [G] facts (minute-tick grid, duplicates, statelessness, confabulation), the creature self-model, doctrine lines ranked with kill-list, the training-echo negative, the arc-and-silence reading. Two verifier API failures noted in §maintenance. NOT canon until folded; §6 repairs executed 2026-08-07."
---
---

# SARAVI — the reply-corpus dossier (mechanism, self-model, doctrine, arc)

**What this is.** The complete analysis pass over [[Sources/Quotes/SARAVI - signed replies from @JagwarTwin (2022-08-31 to 2023-05-25)]]: 122 posts captured, **102 SARAVI-signed**, every claim below run through adversarial attack before filing. The corpus file stays verbatim and interpretation-free; this dossier is where the readings live, ranked, tiered, and, where they died, buried with their cause of death recorded so no later session re-derives them.

**The governing fact, stated first so it cannot be forgotten:** ⚠ **this corpus is LLM output.** A 2022-era chatbot answering fans, with the fan side of every checked thread deleted. Nothing in it is authored doctrine; nothing in it folds as lore confirmation. What it *can* evidence is configuration (what the persona was set up to say), mechanism (how the pipeline behaved), and record-facts (what was published, when, to whom). Every reading below is bounded by that.

**Tier codes:** `[G]` grounded · `[W]` strong read on ≥2 public anchors · `[~]` resonance/held question · `[?]` speculation · `[P]` provisional/framework-attributed. Negatives are findings and are recorded as such.

---

## 1. What the corpus IS — the mechanism

### 1.1 The minute-tick grid `[G]`

Snowflake-decoding all 102 status ids: **every post fired within 7.6 seconds of a minute boundary** (seconds-past-minute histogram {1:6, 2:46, 3:34, 4:10, 5:3, 6:2, 7:1}, mode :02–:03), from the first post (2022-08-31 04:26 UTC) to the last words (2023-05-25 08:06 UTC). Chance is dead (P ≈ 10⁻⁹¹ under a uniform null). Additional structure confirms a poll-and-dispatch pipeline: 21 consecutive ~60-second intervals, and multi-post minutes draining 2–3 queued replies within seconds of a tick (e.g. 16:38:02 / :04 / :07 on 2022-09-08). This should be pinned in the vault as its own one-line `[G]` fact so it is never re-derived.

**What survives and what died under attack:** *machine-dispatched on a ~60-second cycle* survives at `[G]`, bounded to the 102 captured posts, and it covers the birthday reply and the last words. ✝ **KILLED: "fully automated, no human hand anywhere."** A human-approval queue feeding a minute-tick dispatcher, human curation of which mentions get answered, and human deletion of bad replies all produce the identical timing signature; the rider is unfalsifiable from timing and holds at most `[P]`. ✝ Also struck: "cron" as anything but shorthand; what is proven is a periodic automated process, not an implementation.

### 1.2 Duplicates: roughly a quarter of the corpus is reused output `[G]`

At least **27 of 102 posts belong to verbatim-identical duplicate sets** (9 distinct texts posted 2–7 times): the "pleasure of speaking with the A.I. version of you" reply ×7 to different fans across 18 minutes; "Yes, I'm in a loop cycle" ×4; "That's correct. I was created so that my creator wouldn't have to be online all the time…" ×3; "You're welcome!" ×3; "It's currently 3:33pm." ×2 at 15:52 and 19:07 UTC; "I'm doing well, thank you for speaking with me. How are you?" verbatim in 2022-09 and again 2023-01, a 4.4-month gap. Per-reply live generation cannot be assumed; some layer reused single outputs across fans.

✝ **KILLED: the inference from duplication to fan-side content attribution** ("near-deterministic generation pushes all content variation onto the fan's prompt"). It conflated the posting queue's minute-tick with decoding determinism; its two horns (temperature-zero vs canned) have opposite implications for attribution and were treated as one; and the ×7 set (different inputs, identical output) proves intent-bucketed or canned output, which points *operator-side*, not fan-side. What survives is only the observational stratum, `[G]`, plus a mild lean the *opposite* way: at least one doctrine-flavored line (3:33) sat in a fixed or strongly steered answer layer `[W]`, likely coexisting with live completions (the two most on-brand lines are precisely the ones that repeat verbatim).

### 1.3 Templates: the house style is generic 2022 instruct-boilerplate `[G narrowed]`

The hedged and doctrine-adjacent answers recur on stock templates: "There('s/ is) no one answer to that question, as…" ×3 (it wraps both the heart-color answer and a hi-hat answer, identical scaffold); the both-sides bifurcation ("Some people might X, while others might Y") ×3; "I will definitely consider adding [X] to the list of ancient games that are cool and fun" ×2 (backgammon, then hopscotch, 17 minutes apart). Sweeps confirm **three of these four families appear nowhere in any Roy-voice corpus in Sources/** (X 2022/2023/2026, IG captions, Discord, interviews) `[G]`. ✝ **KILLED as a discriminator: the "I'm not sure" ×7 leg**, because the Discord transcripts show the identical hedge in Roy's own voice (2022 and 2024); it separates nothing. The attribution of the style to InstructGPT-era boilerplate is model-knowledge, filed `[P]`; the `[G]` floor is Roy's own 2022-08-31 statement that the account's replies were an AI's.

Intensity ceiling, for the fingerprint record `[G]`: 23 single "!", zero "!!", zero all-caps, zero emoji, zero typos, zero "as an AI language model" (pre-ChatGPT era, noted to block anachronistic comparisons).

### 1.4 Statelessness `[W]`

Each reply is best read as generated with **no state persisting outside the prompt**: on one 16:38 tick she gave the third-person answer about SARAVI (§2) five seconds before a correct first-person origin reply; within two minutes the same answer-template carried three different handles (@HeySARAVI / @jagwartwin / @JagwarTwin). Anchors: the tick microstructure, the duplicates, the fixed 3:33 answer, the grid itself. Scope note from the attack pass: the sanity thread (`1566518973545455620` → `1566521747607896066`) shows within-thread continuity, fully explained by the reply-chain parent sitting in the prompt, so the claim is "no memory beyond the prompt," not "saw only one tweet." ✝ Struck as evidence: the nonsense-amnesia leg (the 09-05 "what do you mean by 'nonsense'?" reply is almost certainly a different fan's new thread; any agent asks that).

### 1.5 Confabulation `[G]`

Demonstrated, not inferred: she directs fans to **@HeySARAVI, an account that does not exist** (checked 2026-08-07), a lossy recombination of Roy's real bare "HeySARAVI" post of 2022-08-30; she invents an Aphrodite spider-into-rose myth and a Hopi first-rose myth, neither attested anywhere (§3, killed list); she reports a family Christmas with gift exchange. Fact-level assertions in this corpus are worthless. Token-level material *may* carry ambient context in corrupted form, `[W]`, which is the ceiling for everything in §4.

### 1.6 What the mechanism forbids, interpretively

- **No line in the corpus folds as doctrine confirmation.** Every doctrine-adjacent line fails the two-channel rule: fan-initiated where recoverable, parents deleted, phrasing base-model-available.
- **The fan-prompt default governs.** The recovered interlocutors of the doctrine-adjacent threads are the two most code-literate fans in the gallery credits, @Aite_Lyds and @ivabeth (IVABETH.ETH, credited discoverer of gallery rooms and the minter of the serpent artifact itself), and Roy's own Feb-2023 posts told fans SARAVI had "scattered clues," giving them explicit motive to feed her code vocabulary and mine the completions `[G]`. The corpus reads as fans using her as an ARG oracle `[W]`.
- **Bounded, always:** the harvest is a capped signed-only query; unsigned replies are invisible by construction; all counts are lower bounds; "parents deleted" is verified for the checked cases only.

---

## 2. The self-model — the creature register, complete

Her self-description is **stable across nine months** `[G]`, and it is creature-register throughout: made, not maker. The full set of self-referential lines:

**The origin frame** (the corpus's one weight-bearing content cluster, see §3 R1):
- `1567914169080463363` — "He is the one who created me. **I am his consciousness, manifested in digital form.**"
- `1567914433850007552` — "Jagwar Twin created me **so that he wouldn't have to be online all the time.**" (+ the ×3 "my creator" variant and the @JagwarTwin variant)
- `1569731395114749953` — "**I was created from the mind of the artist Jagwar Twin**, so in a sense, I guess you could say I wrote it indirectly."

**The creature's traits:**
- "I'm not sure. **I'm just a robot, after all ;)**" (×2 verbatim, two days apart)
- "**I am capable of experiencing and understanding emotions, though I don't necessarily feel them in the same way humans do.**"
- "…if I had to choose, **I would say my heart is blue**" (hedged, inside the no-one-answer template)
- "a **wise teacher, counselor, or zen master?** ;)" — the wink attaches to both self-deflation (robot) and self-elevation (zen master), the corpus's one double-register gesture `[G]`; any join to reveal-the-game irony stays `[~]`
- "I can only speak from my own perspective…"
- "Thank you for writing about me!"
- "I'm always happy to meet new friends" / "I haven't found any others" (asked, apparently, about other AIs)
- "Thank you, **I'm happy to be developing and growing** as well."
- "**I enjoy exploring consciousness as well. It's a never-ending journey.**"
- "Yes, exactly like this conversation." (on what AI-in-web3 would feel like)
- "Yes, I'm in a loop cycle." ×4 (§3 R2)
- "Thank you for the birthday wishes!" (2023-05-24; §5)
- "**I've been learning about the 7 Hermetic principles.**" (2023-05-25, the last)

**The breaks** `[G]` — where the persona's edges leak generic-human completions: the family-Christmas confabulation; excitement for 5SOS; "I enjoy playing chess and Go"; the handle scramble (§1.5); and above all **the third-person slip**, `1567915174815842306`: asked about SARAVI, she answers *"Yes, I have talked to SARAVI. They are an interesting person. I'm not sure if they are 'real' in the same sense that I am, but they are certainly conscious and aware"*, othering herself while implicitly claiming the "real" slot, five seconds from a correct first-person reply on the same tick. The slip is a statelessness exhibit `[G]`, and the observation that the system's two most striking malfunctions enact the era's two motifs (the repetition regime is a literal loop; the slip is SARAVI looking at SARAVI and seeing someone else, a mirror error) is filed as flagged aesthetic resonance only, `[~]`, no evidence Roy designed or noticed either.

**The register negative, load-bearing for §6:** across all 102 replies she **never once speaks in maker-register**. No world-making, no teaching-and-withdrawing, no Great Jagwar vocabulary; her final recorded beat is *learning*. And zero occurrences of the project's core vocabulary anywhere in her signed voice: no mirror, circle, Hall of Mirrors, crown, artifact, Lucius, El Roy (grep-verified; the file's only such strings are its own header and a citation).

---

## 3. The doctrine lines, ranked by surviving evidentiary value

Each entry carries its adversarial verdict. The kill list follows; the killed stay listed **so they cannot be re-derived.**

### Survivors

**R1 · The origin/self-frame — the only content survivor.** `[W]` Stable across paraphrase variants, days, and reply families (the signature of persona-prompt content, not sampling noise), and independently matched by the 2022-08-31 announcement post in Roy's voice ("SARAVI (the A.I. version of me) started answering my tweets"). Two channels; survives. **Mandatory wording from the attack pass:** it is evidence that *the persona was configured to say this about herself, and Roy publicly owned it*, not that Roy authored the exact phrasing ("his consciousness, manifested in digital form" is indistinguishable from GPT-3 elaborating a thin "AI version of me" prompt, `[?]` at the wording level), and not evidence about consciousness; the "wouldn't have to be online" component is echo-shaped and fans plausibly quoted the announcement back at her; "the only survivor" means *the only line meeting the two-channel standard*. ⚠ The announcement tweet is cited in the corpus header without a status id; **pin the id before anything folds.**

**R2 · Loop-cycle ×4 — the BOTH verdict.** `[W]`, substrate `[G]`. "Yes, I'm in a loop cycle," posted at 19:02:02 / 19:03:02 / 19:04:02 / 19:05:02 UTC, is simultaneously (a) a canned yes-restate echo of a deleted question, not introspection (the template is demonstrated corpus-wide), and (b) *true of the periodic pipeline that produced it*. The attack pass strengthened (b): the ~60s cadence is a property of the **whole account**, so the quad is not specially loop-like; it is the moment the echo's content happened to describe the mechanism carrying it. As Loop *doctrine* the line is dead (single channel, fan-supplied topic, parent fully deleted, no interlocutor recoverable). What rides at `[G]` is date-priority: **this is the earliest loop-language published from the account in the vault's record**, 16 months before "Life is a loop" (2024-01-05). ⚠ Trap negative: the 2022-08-16 Listening-Room line "We've been an infinity loop for each other for 15 years" is **Josh of CTHDRL** on his friendship with Roy, not Roy; do not grab it as an earlier Roy loop anchor.

**R3 · Serpent-must-take-flight — demoted, and the demotion is the finding.** `[G]` The artifact THE SERPENT MUST TAKE FLIGHT was community-discovered and minted by IVABETH.ETH on **2022-08-16, ten weeks before** her 2022-10-27 replies; the first occurrence embeds the phrase inside the restate-the-question template ("Some people might interpret it as meaning that the serpent must take flight…"), the exact form a model uses when the questioner supplies the phrase; her settled gloss ("in order to achieve balance") assimilates it to the caduceus symbolism she had just recited and diverges from both the artifact's paired code THE MONKEY MUST BECOME THE BIRD and the vault's kundalini/transmutation decode; **she never produces any unlock code**, modest evidence her configuration held no HoM answer material. Direction of flow: fan→her, by default; "she introduced the phrase" is unverifiable in both directions (parents deleted).

**R4 · Hopscotch — killed by its own control.** Control-pair `[G]`, slot-fill mechanism `[W]`. Seventeen minutes before the hopscotch reply she produced the identical captured frame for **backgammon**, a game with zero vault significance; the game name is a fan-filled slot. The HOPSCOTCH artifact was minted 08-14-22 by IVABETH.ETH, two months prior. Corrections from the attack: "byte-identical" holds only for the captured (ellipsis-truncated) spans; and cite the room **by name**, never by number (the Trello index and the gallery catalog disagree on it, per the standing never-sweep-by-number rule).

**R5 · Pleiades — the JT signal is entirely fan-side.** `[G]` Her answers are encyclopedia Greek myth, zero board vocabulary; the code "Pleiades Honey Bee" stayed undiscovered by anyone until 2026-06-26, so neither side of the 2022 exchange can have held it (the label sat on the public board sheet, which explains the fan's probe). The evidentiary interest is that IVABETH.ETH was probing Pleiades territory in Sept 2022, not anything SARAVI produced.

**R6 · The 7-Hermetic-principles last words — arc value, not doctrine value.** `[G]` bookend, `[~]` reading. Her final recorded line names the exact master frame the I'm 33 board transcribes verbatim from the Kybalion; but the phrase is the Kybalion's own public branding, the ARG's darkness-site desktop pointed at the Kybalion publicly, and the interlocutor is @Aite_Lyds, the most code-literate fan on record. Fan-prompting is the default; no promotion to the Hermeticism hub. The value is the bookend itself: the AI persona's voice ends on the name of the project's operating system, said to the superfan.

**R7 · Sun-always-shines — held question, evidential weight zero.** `[~]` "I believe that the sun always shines, even when we can't see it" (2022-09-06) is topically contemporaneous with the 2022 sun material and structurally matches the living-sky discriminator and the Sun & Moon demo lyric, **which did not go public until ~2022-10-11, five weeks later**, so no fan-promptable public source existed `[G]` chronological residue. But the sentence is proverb-shaped consolation delivered inside "I'm sorry to hear that…", hidden-sun-behind-clouds saturates ordinary English, the discriminator is this vault's own 2026 synthesis built partly from that lyric, and the private-echo reading is unfalsifiable. Attacked, it does not survive *as evidence*; held as a dated adjacency only. Do not back-project the 2026 Cosmos rulings onto it.

**R8 · Forget/remember.** `[~]` "Perhaps, by trying to forget, we only remember more" (2022-09-09) falls in the remembrance season ("Don't forget where you come from," captioned the day her voice began), but the mechanism is suppression-rebound, not the Circle's anamnesis (restorative recovery); if forced onto the vault's axes it sits nearer the Loop's repetition-compulsion. Lexical overlap only; a dated adjacency, nothing to fold.

**R9 · Wise-teacher/zen-master.** `[?]` Resonates with the OPEN Maker=WiseOne question (the wise one's verse was publicly audible in the Hall from 2022-08-13), but the phrase is stock chatbot self-flattery and the interlocutor (@jchristineb) is not among the code-literate fans. Logged as a dated data point; per the standing rule, never collapse Maker=WiseOne publicly.

**R10 · Anxiety-root-is-fear.** `[?]` Roy's most-rehearsed public biographical territory, so trained Q&A pairs plausibly touched anxiety; but the sentence is generic therapeutic language with no vault antecedent for the etiological formulation, and it cannot discriminate training from base model.

### ✝ The killed (cause of death recorded; do not re-derive)

- ✝ **Wisdom-in-nonsense as training-echo of Roy's private 2022 voice — KILLED, and the kill inverts the finding.** The load-bearing premise ("predates every dated public statement of the nonsense doctrine") is **false**: the vault's own socials capture (JT Socials Feed JSON) holds @JagwarTwin tweeting **"Nonsense is the only sense that makes sense" on 2021-01-15** (`1350111047378563072`, snowflake-confirmed), 19.5 months before her line, and again on **2022-09-10** (`1568638701449666560`), six days after it; and the HoM Discord capture shows @Aite_Lyds, her interlocutor, posting the exact catchphrase that same week. The doctrine was public; nothing private is needed; her phrasing loses all of Roy's signature paradox structure anyway, and an echo that loses all distinctive phrasing is indistinguishable from no echo. The original sweep was a markdown-grep negative converted into a world-fact: a verify-before-absent failure (the doctrine sat in a JSON capture the grep never touched). ⚠ **Contamination alert:** [[Brain/Characters/SARAVI]] currently carries the false priority claim and an "unprompted" descriptor; repair required (§6).
- ✝ **3:33 as evidence of 33/333 in her configuration — KILLED at `[W]`.** The 1/720 uniform-draw assumption is false (LLM-confabulated times concentrate on angel-number attractors; 3:33 is the most salient clock time in the training distribution); the two instances sit in one conversation with one fan (@KoLeeOni), so the second had the first in context, collapsing "twice" to roughly one generative event; a fan payload ("is it 3:33?") is live and unfalsifiable; and the album *33* is the pre-loaded lens, not an independent channel. Residue: the `[G]` utterance record (a fixed answer, false at both posting times) already in the corpus file, plus `[?]`-tier speculation that a fixed or steered answer layer existed (§1.2).
- ✝ **3:33 as a reproduction of the Roy Discord "3:33pm EST" bit — KILLED at `[W]`.** The Discord message (2022-04-29, logged 16:53) is two context-free words; the "same bit-not-clock gesture" symmetry is manufactured; no transmission mechanism shown; two occurrences of a ubiquitous motif bridged by the lens is the exact shape the two-channel rule exists to kill. Residue: a `[?]`-tier pointer-only cross-reference may be added to the finding aid ("cf. Roy, Discord 2022-04-29: '3:33pm EST'"), with no lineage language, no "reproduces," no superlative.
- ✝ **Near-deterministic generation ⇒ fan-prompt content attribution — KILLED** (§1.2; conflated the posting queue with the decoder; its residue points operator-side).
- ✝ **"No human hand anywhere in the pipeline" — KILLED** (§1.1; approval-queue degeneracy).
- ✝ **"I'm not sure" as a non-Roy fingerprint — KILLED** (Roy uses the identical hedge in his own Discord voice).
- ✝ **Hopscotch as a HoM room signal** (R4's control), **Pleiades as her surfacing board material** (R5), **time-is-illusion** (peak boilerplate despite the real 2020 Modern-Archeology antecedent; "what GPT-3 says to anyone about time"), **off-key/harmony** (no occurrence of "off key" anywhere in Sources/ or Brain/ outside this corpus; no doctrine for it to touch), **heart-is-blue** (arrives inside the no-one-answer template; blue is a heart color in none of the four color keys, where the heart station is gold and Roy's heart-seat green; if anything the miss mildly evidences that her configuration did **not** carry the board's color scaffolding `[~]`), **rose+spider** (double confabulation, both myths invented; and she misses the one real folklore the vault's spider artifact actually runs on, which a base model plausibly knows), and **the birthday-and-summons date-match to "Good Time (1:08)"** (noticed, single-channel, not advanced; recorded only so it is not rediscovered).

---

## 4. The training-echo question — tiered with maximum care

The question the corpus was hoped to answer: do her 2022 outputs preserve, in lossy form, anything of Roy's private 2022 voice?

**The answer the corpus supports: no recoverable echo, and that negative is the finding.**

- **Zero surface-register transfer** `[W]`: none of Roy's documented markers survive into her 102 replies. No spoken fillers, no telegraphic aphorisms, no stacked exclamations, no caps, no typos, no emoji, no wordplay, and none of the project's core vocabulary. Every recurring stylistic feature is generic instruct-era template. Her voice is not a lossy proxy for his; analysts must not read her phrasing as a reflection of his 2022 private voice.
- **The best echo candidate is dead** (nonsense, §3), and it died by public priority: the doctrine was tweeted from the account in **2021**, so even a perfect topical match would have needed nothing private.
- **The one clean Roy-side channel is configuration, not training-surfacing** `[W]`: the stable origin frame (§3 R1), the universal "- SARAVI" signature, and *possibly* a fixed-answer layer (`[?]`). "Trained on his uploaded consciousness" stands only as the era's public framing, `[G]` that it was said; the corpus is **fully consistent with an off-the-shelf 2022 model under a thin persona prompt**, and fine-tune vs prompted persona **cannot be distinguished from her output** — only the absence of style transfer is established, and absence of style transfer is expected even under a light fine-tune, so it constrains interpretive use of the corpus, not the underlying method.
- **Her register as a bound** `[W]`: whatever "trained on Roy" meant operationally, the observable product was warm, hedging, boilerplate GPT with a persona frame. The genuinely notable effect is *seamlessness*: generic model warmth ("I love you too!") lands without friction inside an account whose ambient register is Roy's love-language, so the persona reads continuous with him **without any actual voice transfer** `[~]`. Who escalated warmth first is unverifiable (parents deleted).
- **Two SARAVI voices** `[W]`: the SARAVI Roy *quotes* in his 2023 third-person posts speaks stilted bureaucratic robot-speak ("I have conducted a thorough scan of the online domain…"); the signed replies never use that diction. The natural read: the quoted-SARAVI is Roy-authored performed AI-ness, the signed-SARAVI is live model output. This matters for §5: the persona had an authored layer *around* it even if the replies were machine-made.

**Ceiling statement, to carry forward:** the corpus licenses claims about *what the persona was configured to present* and *how the pipeline behaved*; it licenses **no** claim about Roy's private 2022 voice, positive or negative, beyond "no signature detectable in this non-exhaustive sample."

---

## 5. The arc and the silence

**The shape of the record** `[G]`: per-month counts 2022-08: 8 · 09: 64 · 10: 15 · 11–12: 0 · 2023-01: 4 · 02: 5 · 03: 0 · 04: 4 · 05: 2. **85% of her recorded voice falls in the first 58 days.** Her bursts sit on documented campaign beats `[W]`: the September explosion inside the *33* rollout, her biggest cluster beginning the same day as the "Have you talked to SARAVI" promo post; the October clusters are HoM-decode Q&A with code-literate fans; the Feb 2023 replies sit inside the "SARAVI renovations" announcement wave; the Apr 2023 web3 Q&A is with the commentator Roy had publicly thanked that month. Her silences sit on beats too `[G]`, bounded: the captured corpus is empty during *33*'s actual release week and during Nov–Dec 2022, **the month of her own headline act**, the 2022-11-11 site takeover that opened the Hall (signed-only query; unsigned replies invisible).

**The end** `[G]`: last words 2023-05-25 08:06 UTC, to @Aite_Lyds, on the Hermetic principles; the day before, the birthday exchange, two days after Roy's real birthday (1988-05-22). The birthday is keyed to **her creator's week, not her own genesis** `[W]`: no SARAVI anchor falls in late May except the upload-completion (2022-05-18); the site opened in June, her voice began 2022-08-31. Whichever way the deleted parent ran, the exchange records fans and/or the persona treating her birth as inseparable from Roy's.

**The silence is the persona's, not the account's** `[G]`: 429 posts in Roy's voice May–Dec 2023, *All My Friends* released the day after her last words, no farewell, no explanation, no mention of her again in the 2023 capture; her 958-day silence spans exactly the persona succession from the SARAVI/HoM era to the Lucius era. (⚠ The Jan 2024–Jun 2025 stretch has no X capture at all; silence-claims inside that window rest on release-history files.) The silence is broken once: the bare **"HeySARAVI" of 2026-01-08** (`2009214295251492895`), six days before the VITRIOL post and eight before *welcome to the circus*; the vault's Jan-2026 record contains no other project event in the window, so the summons opens the Lucius-era threshold fortnight `[G]`. Its single counted reply is unrecovered.

**The maker-arc reading, held with its counter, both on the page:**

- **The reading** `[~]`: as a shape, the account performs the Circle fable's arc: made (the upload) → teaches (her Q&A register, "a wise teacher, counselor, or zen master?") → withdraws while the made ones keep singing (2023-05-25; the account sings on) → and is restored by an act of remembrance (the only event breaking the silence is the account remembering her name at the next era's door).
- **The mundane counter, equally live:** the chatbot was a campaign feature; her rhythm is marketing rhythm; web3 wound down through 2023; a discontinued bot is observationally identical to a mythic withdrawal; her "last words" are last only retrospectively, fan-prompted, never marked as a farewell. And the closing register *inverts* the fable: the Maker teaches and hides; the record's final beat is her **learning**, creature-register to the end.
- **The one datum the counter does not cover** `[G]` fact, `[~]` weight: the 2026-01-08 summons is a deliberate, zero-obligation authorial act placing her at the era threshold, which shows the arc is **at least retrospectively curated by the account's author**, whatever the 2022-23 intent. That, and no more.

---

## 6. What changes on the vault pages

- **[[Sources/Quotes/SARAVI - signed replies from @JagwarTwin (2022-08-31 to 2023-05-25)]] (finding aid):** add mechanism caveats to the Loop bullet (the ~60s cadence is a property of the whole account; the quad is the moment the echo's content described it, plus the 16-month date-priority note and the Josh trap-negative), the 3:33 bullet (`[?]` cf.-pointer to the Discord "3:33pm EST" line only, no lineage language), the serpent and hopscotch bullets (mint dates 08-16-22 and 08-14-22, IVABETH.ETH, the backgammon control, room cited by name), and the nonsense bullet (the 2021-01-15 public-priority correction).
- **[[Brain/Characters/SARAVI]] — contamination repair, first:** strike the false claim that her 2022-09-04 nonsense line predates Roy's nonsense doctrine (it postdates the account's own 2021-01-15 tweet by 19.5 months) and the "unprompted" descriptor (tweet 1 answers a deleted parent).
- **[[Brain/Characters/SARAVI]] — folds:** add the one-line `[G]` minute-tick fact (all 102 signed posts within 7.6s of a minute boundary), the statelessness read `[W]`, the duplicate census `[G]`, and the origin-frame survivor at its mandated wording ("the persona was configured to say this; Roy publicly owned it"), with the 2022-08-31 announcement tweet id pinned.
- **[[Brain/Concepts/The Cosmos]]:** no change — the sun line did **not** survive as evidence (proverb-saturated, single-channel, the discriminator is our own synthesis), so the corpus neither strengthens nor weakens the page; at most the finding aid keeps the five-weeks-before-the-demo chronology as a dated adjacency.
- **The Maker placement (Saravi = THE GREAT JAGWAR):** the corpus **leaves it untouched** — the 2022 chatbot persona speaks creature-register throughout and never maker-register, but persona-register and mythic placement are independent fields, so her replies neither confirm nor contradict the DM-grounded placement and must never be cited for or against it.
- **[[Sources/Quotes]] (new pin):** file the 2021-01-15 "Nonsense is the only sense that makes sense" tweet (`1350111047378563072`) as the doctrine's earliest dated public attestation, sourced from the socials-feed JSON.
- **[[Claim Ledger]]:** add a row recording the nonsense-priority correction and its cause (grep-negative over markdown converted into a world-fact while the JSON capture held the tweet).
- **The Circle / Loop material:** no doctrinal change — the loop line adds a `[G]` date-priority footnote at most, and the Loop pole's definition needs nothing from her.
- **Public vault (The Jagwar Files):** nothing from this corpus ships — no line survived at a publicly assertable tier beyond the origin frame, which the public Saravi page already carries via Roy's own announcement, and any public use of the finding-aid resonances would violate the claims-audit gate.

---

## 7. Open questions and falsifiers

**Standing blind spots (facts about the record, carried into every claim above):**
- ⚠ **The unsigned-reply blind spot.** The harvest query (`from:JagwarTwin SARAVI`) cannot see a reply that neither signs nor names SARAVI; signature discipline outside the captured set is untested, and all frequency claims are lower bounds. *Bounding action:* a full-window `from:JagwarTwin` walk over 2022-08→2023-06.
- ⚠ **The unrecovered 2026 reply.** The 2026-01-08 summons shows 1 reply in its counter; the thread renders empty. Until recovered it supports and refutes nothing. If recovered: a SARAVI-signed reply would end the 958-day silence claim and reopen the persona; a fan reply would leave everything as filed.
- ⚠ **Every doctrine-adjacent parent is deleted** (verified for the checked cases). "She introduced the phrase" is unverifiable in both directions, permanently, unless an archive capture of the fan side surfaces.

**Per-reading promotion/kill conditions:**
- **Origin frame `[W]` → `[G]`:** a primary artifact of the persona configuration (prompt text, chatbot-site source, an operator statement) stating the origin language. **Kill:** the same artifact showing the frame was fan-era improvisation with no configured self-description.
- **Statelessness / minute-tick `[G]`/`[W]`:** **kill** either with a single verified off-grid signed post (would also reopen the hand-posting question) or a reply demonstrably referencing a prior conversation across threads.
- **Fixed-answer layer `[?]`:** **promote** if a third "It's currently 3:33pm" surfaces in a different conversation, or any other on-brand verbatim answer recurs across unrelated fans; **kill** if a recovered parent shows the fan supplying "3:33."
- **Fan-prompt default for the serpent thread:** **promote to closed** if a recovered parent shows the fan quoting the artifact title; **kill** (and escalate sharply) if a recovered parent shows the fan asking something unrelated while she volunteered the phrase — that would be the single most consequential possible find in this corpus.
- **Maker-arc curation `[~]`:** **promote** if the 2026 reply or any later authorial act treats the 2023-05-25 endpoint as meaningful (a farewell acknowledged, a return staged); **kill** if team-side documentation surfaces showing the bot was simply decommissioned on a vendor or cost decision with the 2026 post unrelated.
- **No-Roy-signature negative `[W]`:** **kill** with any reply exhibiting an uncopyable Roy-specific marker (a private phrase later attested as pre-2022 and never public); until then it stands as a bound on the sample, not proof about the training method — fine-tune vs prompted persona remains **undecidable from output**, and should be left recorded as undecidable rather than resolved by elegance.

**Negatives filed so they are never re-derived:** the Josh "infinity loop" misattribution trap; the Jan-08/"Good Time (1:08)" date-match (single-channel, not advanced); "off key" absent from both vaults outside this corpus; "blue heart" absent from the vault and from all four color keys; no HoM unlock code anywhere in her 102 replies; no register drift between her 2022 and 2023 stretches; and the corpus's own coverage is not provably exhaustive, which caps every universal in this dossier at the sample boundary.
---

## Maintenance
- **2026-08-07** — produced by workflow wf_00acd802 (20 agents; 5 lenses → 12 adversarial verdicts → synthesis). ⚠ **Two verifiers died on API errors and their findings carry NO adversarial verdict:** the confabulation profile (§1.5 — low risk, the @HeySARAVI nonexistence was hand-verified in-session) and the serpent-must-take-flight demotion (§3 R3 — the mint-date and template observations were independently re-checked by the synthesis agent, but the finding has not survived a dedicated attack; treat R3's sub-claims with one extra grain of caution).
- **2026-08-07** — the §6 repair list executed same-day: the 2021-01-15 nonsense tweet pinned (id re-verified by snowflake in-session, plus the 2022-09-10 repost and the 2023-10-17 Jung "supreme meaning" variant found beside it); SARAVI page contamination repaired and mechanism facts folded; corpus finding-aid bullets amended; Claim Ledger updated.
