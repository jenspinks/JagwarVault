---
type: reference
citable: false
status: resolved
created: 2026-07-28
revised: 2026-07-29
purpose: "RESOLVED. Originally a handoff brief claiming the quote-cards were structurally unfindable. That claim was wrong. VITRIOL is pinned (YouTube Shorts, 2026-01-14 PT) and the roster was already pinned in the caption-triage worklists. Kept as the correction record and the search recipe."
---

# Quote-Cards, Provenance

> [!warning] **This file originally said the opposite of what is true, and told future sessions not to look.**
> The 2026-07-28 version concluded that quote-card provenance was **structurally unrecoverable** by text search and instructed successors: *"Do not repeat the sweep; it cannot succeed."* That was a **false negative escalated into a declared impossibility.** VITRIOL was already pinned in this vault, with date and permalink, in a **text** corpus, found by the Caption Codex pass on 2026-07-15/16, eleven days before the brief was written. Corrected 2026-07-29. The original diagnosis is preserved in §5 because the *way* it went wrong is the reusable lesson.

---

## 1. ★ VITRIOL, pinned

**Roy posted the motto as a caption, not as a picture of words.**

| field | value |
|---|---|
| **Caption (verbatim)** | *Visita interiora terrae, rectificando invenies occultum lapidem* |
| **Platform** | YouTube Shorts, **@JagwarTwin** |
| **Permalink** | `https://www.youtube.com/shorts/pjNv1dFAdZg` |
| **Posted** | **2026-01-14, 21:23 PT** (`publishDate 2026-01-14T21:23:07-08:00`) = 2026-01-15 UTC |
| **Audio** | *welcome to the circus* · Jagwar Twin & sir lucius |
| **Tier** | `[G]` that he posted it, dated, permalinked |

**Verified live 2026-07-29** (channel, verbatim caption, and audio-track read off the page itself), and independently recorded twice in-vault before that: [[YouTube Caption Triage - Phase 1 sort (2026-07-15)]] §198 and [[YouTube Caption Triage - Phase 2 worklist (2026-07-15)]] §B, from a fresh full-channel `yt-dlp` pull.

⚠ **Two date conventions, both correct, do not "fix" one into the other.** The harvest recorded **2026-01-15** because `yt-dlp` reports `upload_date` in **UTC**. The permalink's own `publishDate` is **2026-01-14 21:23 Pacific**. Per the standing rule that Roy's clock is **PT**, his posting date is **2026-01-14**. This shifts a downstream phrasing: the Caption Codex calls VITRIOL a **release-eve** post against *welcome to the circus* (out 1/16). On the UTC date that reads as one day before; on Roy's own clock it is the night of the **14th**, roughly 27 hours ahead of a midnight-PT 1/16 release. **The motto-before-the-release reading survives; the word "eve" is imprecise.** Fix the phrasing, not the finding.

⚠ **The "cluster" was an artifact of the image-decode pass, not a posting cluster.** The 2026-07-08 findings list VITRIOL "alongside" Kierkegaard, Gurdjieff and four Bible verses, and the original brief built a candidate-window search on that. The pins in §3 show those cards spread across **2026-01 to 2026-06**, mostly *months after* VITRIOL. They were grouped by an analyst, not by Roy. Do not treat co-listing in a findings doc as co-posting.

---

## 2. What was actually wrong with the search

Not one error. Two, compounding, and neither structural:

1. **Wrong scope.** The sweep ran `grep -ril "vitriol"` across `Sources/Artifacts/Data/` only. The quote-card provenance index does not live there. It lives in **`_System/YouTube Caption Triage - Phase 1 sort` and `Phase 2 worklist`**, which enumerate the cards **with dates and permalinks already attached**.
2. **Wrong search term.** Roy's caption is the **Latin motto**. The string `vitriol` appears **nowhere in it**. "VITRIOL" is the *acrostic* the letters spell, which is **Jen's decode**, not Roy's text. Grepping the decode for the source is searching for a word the source does not contain.

**The premise that carried the error:** *"the archives index CAPTIONS, and a quote-card's words live INSIDE THE IMAGE."* For this corpus that is **false**. Roy's quote-card posts put the quote **in the caption**, and Phase 1 records that for most shorts **the caption *is* the title**. That is exactly why §D of the worklist can enumerate **70 curated quote-cards with date + URL**.

**Platform correction.** The original brief sent the next session to walk the **Instagram** grid and Story Highlights. The primary quote-card channel is **YouTube Shorts** (70 in §D) and **TikTok** (§E/§F). Instagram carries a *different class* (see §4).

---

## 3. The roster, already pinned

From the handoff's own "cards currently needing pins" list. Sources: worklist §B (Jen's ✅), §D (YT quote-cards), §E/§F (TikTok). All `[G]` posted, now dated and permalinked.

| Card | Date | Platform | Permalink |
|---|---|---|---|
| **★ VITRIOL** (the motto) | **2026-01-14** PT | YT Shorts | `pjNv1dFAdZg` |
| Dion Fortune, *"the shadow is not evil"* | 2026-02-05 | TikTok | `7603463455680613662` |
| Dion Fortune, *"magick… in accordance with the will"* | 2025-03-12 | YT Shorts | `zjjJml2VODE` |
| Kierkegaard, *"the crowd is the untruth"* | 2026-02-28 | YT Shorts | `Ujs_COXpS70` |
| Kierkegaard, *"anxiety is the dizziness of freedom"* | 2026-02-20 | YT Shorts | `LgQec9AqONU` |
| Kierkegaard, *"freedom of speech… freedom of thought"* | 2026-01-07 | TikTok | `7592418865984834846` |
| Hermes Trismegistus, *"the center is everywhere"* | 2026-04-03 | YT Shorts | `PE7flOGaBGo` |
| Gurdjieff, *"man is asleep. He must wake up"* | 2026-02-21 | YT Shorts | `WYPOVkeIxZM` |
| Alan Watts, *"the attitude of faith is to let go"* | 2025-04-03 | YT Shorts | `2p38x6jByBI` |
| Éliphas Lévi, *"will is the key to magic"* | 2025-10-22 | YT Shorts | `OHY81e1NU88` |
| Rudolf Steiner, *"illusion is not nothing. It is a revelation"* | 2026-03-22 | YT Shorts | `7JpbaCO5Vvs` |
| Blavatsky, *"that cruelest of tyrants, public opinion"* | 2025-11-02 | YT Shorts | `9HQQw0UhYLc` |
| *"H. P."* Maya card (initials-only, keep the flag) | 2026-03-25 / 2026-03-24 | YT Shorts / TikTok | `1ljlNuDiOvQ` / `7620897813693500702` |
| Genesis 3, *"ye shall be as gods"* (3:5) | 2026-04-16 | YT Shorts | `odKNtCm-i5M` |
| Revelation 3:16, *"be not lukewarm"* | 2026-06-19 | YT Shorts | `WSaQXvnBNvc` |
| Matthew 10:16, *"wise as serpents"* | 2026-04-01 | YT Shorts | `feIWLpkK1-A` |
| John 8:32, *"the truth will set you free"* | 2026-03-31 | YT Shorts | `4ZfyPB_arp0` |
| Lao Tzu, *"care about what other people think"* (⚠ keep the misattribution flag) | 2026-02-28 | YT Shorts | `WzV4Qb6UsXY` |

**Note on the Fortune-not-Crowley correction:** the 2025-03-12 caption **credits "Dion Fortune" in Roy's own text**. The attribution is settled by the pin, not by inference.

**Also now pinned, same corpora, beyond the original list:** a second Genesis 3 card (2026-03-13, `WNNdfSIP0Jg`), Amos 3:6 on Lucius Lullaby release night (2026-03-26, `OLVptQf6CTk`), Matthew 12:34 (2026-06-25, `SUZNvyUb3Yo`), four further Jung cards, four Manly P. Hall cards, three further Bailey cards, and the 2025 "loyal servant of the Realm" dumbledore-era set. See worklist §D in full.

---

## 4. What is genuinely still open

Small, and real. Do not let §3 imply everything is closed.

- **Jung's Trickster card** (*Collected Works* 9i ¶472, *"forerunner of the savior… bestial and divine… his chief characteristic is his unconsciousness"*). **No hit in any caption corpus.** Likeliest an image-borne post or a Story. Genuinely needs eyes on pictures.
- **Gurdjieff *"man is a machine"* verbatim.** Not in the corpora as that phrase. The nearest pinned card is 2026-01-16 (`4YPV4KJuhyk`), *"without understanding the workings and functions of his machine, man cannot be free."* Either the vault has been paraphrasing that card as "man is a machine", or a separate card exists unfound. **Resolve which before citing the phrase.**
- **The image-borne IG class, which is a different object from a quote-card.** Photographed *book pages*: Bailey's *Labors of Hercules* (Story, 2026-05-28) and Jung's *CW* 18 (Story, 2026-06-07). Both already have `Sources/Quotes` files and dates. These are the posts for which the original brief's "words live inside the image" and "Stories aren't mirrored" reasoning was **correct**. It was applied to the wrong class.
- `_Private/media-ig-highlights/` exists and is **empty**. If an IG Highlights capture is ever wanted, that is where it was meant to go. **Jen's call, do not build it unasked.**

---

## 5. The lesson (why this file is kept)

This is the **same failure shape** as [[Framework Registry]] row A12, three weeks earlier: a row **scored from memory rather than from a sweep**, which then **gated** downstream work. Here it went one step further and wrote the gate into the vault as a standing instruction.

The chain: one grep, wrong scope, wrong term → "zero hits" → *"that is not a gap in the harvest, it is a category mismatch"* → a structural theory → **an instruction to successors not to try.** Each step is a small reach. The end state is a vault page that **suppresses a finding the vault already contains.**

Guards this earns:

- **A negative result is a fact about the search, not about the world.** Before writing "cannot be found", state the scope searched and the strings tried, and check whether either could be wrong. (Extends the standing *verify before "absent"* rule from *filename* searches to *whole-method* claims.)
- **Never write "do not attempt this" into the vault.** Record what you tried and what it cost. A future session with a different angle must stay free to look. An over-cautious guard reads as rigor while suppressing real structure, the same asymmetry noted on 2026-07-28: **the vault's guards are all anti-over-claiming and have no brake on under-claiming.**
- **Search the decode *and* the source text.** Jen's acrostic is not Roy's words. When a concept has an analyst-supplied name, grep the **verbatim** string too, in the original language.
- **The caption-triage worklists are a provenance index.** For any question of the form *"when did Roy post X?"*, grep [[YouTube Caption Triage - Phase 1 sort (2026-07-15)]] and [[YouTube Caption Triage - Phase 2 worklist (2026-07-15)]] **first**. They carry dates and permalinks for ~719 YouTube items and the TikTok keepers. `citable: false` finding aids, so cite the permalink they name, never the worklist.

---

## 6. Where the results go

**★ [[Brain/Roy Voice/Roy on Influences]] §"2025–26 — Named via his own quote-cards"**, per-bullet, and the *"Per-card dates/URLs pending pin"* caveat comes out as each is filled.

⚠ **Do not open a second quote-card index.** The worklists already *are* the enumerated provenance layer; Roy on Influences is the interpreted layer. Two homes, each with a job, no third.

**Tier discipline is unchanged by pinning.** A pin makes a card `[G] that he posted it, on this date`. It does **not** promote the *reading* of the card, and it does **not** ground the whole of that author's system. Scope each claim to what the card says.
