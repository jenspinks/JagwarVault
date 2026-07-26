---
publish: false
---

# FieldGuide Go-Live Readiness — audit (2026-07-26)

Structural + boundary publish-readiness pass over the public FieldGuide
(215 pages). Lives in `_internal/` (publish-excluded) with `publish: false`
so it never ships. Two safe fixes were applied on branch
`claude/go-live-cleanup-2026-07-26`; everything else below is a judgment call
left for Jen.

**Headline:** structurally the site is in good shape — **0 broken image
embeds, 0 orphan pages**, and only a handful of genuinely broken links. The
real launch gates are **boundary/privacy confirmations** (P0), not structure.

---

## ✅ Already fixed on this branch (safe, mechanical)

1. **Dead link — dash mismatch.** `Concepts/The Deep End/Flattened Identity — The Deep End.md`
   linked `[[Roy's Posts - Canon Index]]` (hyphen); the real page uses an
   em-dash (`Roy's Posts — Canon Index`). Repaired.
2. **Internal-doc name leaking into public prose.** `Albums & Eras/Singles & EPs/All My Friends.md`
   read "…the **Master Source List** ties the two together as the same
   crowd-erases-you fear." "Master Source List" is internal vault
   vocabulary. Rephrased to drop the reference; meaning preserved.

---

## P0 — Boundary / privacy gates (clear these BEFORE publishing)

Per `Boundaries.md`: a claim that can't be defended on public material can't
be public; DMs/private calls/member-to-member Inner Circle content are private;
Roy-exposed material is citable **except Jen↔Roy DMs**. These need your eyes —
I did **not** touch them, because removing something that's actually fine would
be its own error.

1. **Quoted DM on a public page.** `Hall of Mirrors/Artifacts - Gallery 2 (38-74).md`
   (~line 72) quotes *"remember that whole portal timeline where your 'true
   voice' came in?"* attributed to "a DM." Confirm this is **not a Jen↔Roy
   DM** (those stay private even when they appear on Roy's board). If it is
   yours, pull or paraphrase-out the quote.
2. **iMessage bubbles.** `Hall of Mirrors/Artifacts - Poems, Texts and Social Posts.md`
   (~line 86) describes/quotes two message bubbles (*"Here"* / *"At the gate"*).
   Confirm Roy-exposed and not a private thread of yours.
3. **Discord / Inner Circle quotations.** Several pages quote Discord posts and
   reference the paid Inner Circle:
   - `Albums & Eras/Singles & EPs/LOOP.md` (~111) — Roy's own Discord posts.
   - `Concepts/Gatekeeper Saga.md` (~61, ~70) — quotes **"Michael"** and **"a
     Circle member,"** plus a dated Discord timeline.
   - `Source & Structure/Roy's Posts — Canon Index.md` (~372) — Inner Circle
     promo line.
   Roy's *own* posts (and content he echoed publicly) are citable; **member-to-
   member** content is not without consent. Confirm every quoted line is Roy's
   own / public, especially the "Michael" and "Circle member" quotes.
4. **Private-tier marker shown publicly.** `Symbols/Beth.md` (~78) ends a claim
   with a literal `[P]` (Private tier): *"…the album's SOL-hidden-under-the-
   Devil's-marquee thesis at the level of the alphabet. `[P]`"* A private-tier
   reading is being displayed on the public site. Either the claim is fine to
   be public (then drop the marker) or it isn't (then cut it). See P2 for the
   marker-style question generally.

---

## P1 — Broken internal links (dead ends for a public reader)

1. **`[[Joni and the Prophet Lineage]]` — target page not published.** 5 links
   across 4 pages point to a page that doesn't exist in the public site:
   - `Albums & Eras/33/Down to You.md` (×2, aliased "Joni" / "Joni Mitchell")
   - `Albums & Eras/33/Soul Is A Star.md`
   - `Concepts/Pronoun Audit (I-You).md`
   - `Concepts/The Speaker Problem.md`
   - `Influences/Musical Lineage.md`
   In the source vault this is a Brain page ("Joni and the Prophet lineage -
   alignment audit (not a claim)"). **Decide:** publish a public version of the
   page, or delink these to plain text. (This is the biggest single broken
   cluster — worth resolving before launch.)
2. **`[[Michael Morgan]]` — no page.** `Characters/Stars/Sir Lucius.md` links a
   character page that doesn't exist. Michael Morgan reads as a real
   collaborator — per the MERCY rule, don't mythologize a real person into
   iconography. **Decide:** create a short factual page, or delink.

---

## P2 — Internal scaffolding / tier codes bleeding into the public voice

Most of the 215 pages read as finished public prose. A few carry internal
tier codes (`[G]` grounded, `[W]` strong-read, `[~]` resonance, `[P]` private)
inline — the vault's private confidence system, visible to the reader. Only
**7 lines** do this, which suggests it's leakage, not a house style. **Decide a
convention** (keep as visible confidence tags, convert to prose hedges like
"reads as / suggests," or strip) and apply consistently:

- `Albums & Eras/Singles & EPs/Good Time (1-08).md` (~87) — `[~]` (Josh Dun ID)
- `Albums & Eras/Lucius Lullaby/Great Time to Be Human.md` (~80) — `[~]` (same)
- `Albums & Eras/Subject to Flooding/Move To You.md` (~65) — `[G]`
- `Symbols/Water.md` (~92) — `[~]` (woven into deliberate prose; may be fine)
- `Symbols/Beth.md` (~54, ~55) — `[G]` ×2; (~78) — `[P]` (also P0 above)

If you want, I can strip/convert all of these consistently in one pass once
you pick the convention.

---

## P3 — Polish / sanity checks (nice-to-have, non-blocking)

1. **Ambiguous page name `The I'm 33 Board`.** Three files share this basename
   (`Concepts/`, `Hall of Mirrors/`, `Hall of Mirrors Spreadsheet/`). Any bare
   `[[The I'm 33 Board]]` link resolves unpredictably. Disambiguate the
   inbound links with folder-qualified paths.
2. **Publish selection.** `.obsidian/publish.json` shows `"included": []` and
   excludes only `_internal`. Worth a 60-second sanity check in the Obsidian
   Publish app that every page you intend to ship is actually selected (and
   that `_internal/` — including this file — is excluded).
3. **Public "housekeeping" aside.** `Albums & Eras/Singles & EPs/The Watchers.md`
   (~242) carries an in-prose sourcing note (SideQuest-EP-2025 vs Oct-2024-
   single). Fine to keep, but confirm that meta-tone is intended for public
   readers.

---

## ✅ Verified clean (do-not-touch confirmations)

- **0 broken image/asset embeds** across all 215 pages.
- **0 orphan pages** — every page has at least one inbound link.
- `Hall of Mirrors/The I'm 33 Board.md` (~321) explicitly **declines to
  reproduce** the private conversations taped to Roy's board — boundary
  correctly respected. Good pattern.
- The Hall of Mirrors gallery pages describe Roy's **own** board artifacts
  (his tweets, his Apple Notes lyric drafts) — within the "Roy-exposed material
  is citable" rule. Left as-is (except the two DM/message items flagged in P0,
  which need the Jen↔Roy check).

---

*Method: static scan of the FieldGuide repo (link-integrity, orphan, asset,
tier-marker, and boundary-term passes) plus targeted reads of every flagged
line. No interpretive/content edits were made — only the two mechanical fixes
noted at top.*
