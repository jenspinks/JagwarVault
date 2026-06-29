# Boundaries

The public/private boundary rules for the JagwarTwin vault. Any contributor (Claude, the user, or future collaborators) must follow these rules. The vault is being built toward an eventual public-facing artifact; everything in it should be drafted accordingly.

This file is the canonical place for boundary rules. [[Claude.md]] references this file. [[Master Source List]] follows from it.

---

## Boundary decision tree (TL;DR — start at the top; first match wins)

> A fast router for the prose below. When uncertain, read the named section.

1. **Is it the Secret Document, or an idea traceable only to it?** → **never quote / name / describe / reconstruct.** You *may read it* to inform understanding, but an idea it raises enters the vault **only** as `[~]`/`[?]`/an Open Question, or re-grounded on an independent public source — else omit. *(§The Secret Document)*
2. **Released catalogue / official video / public social post / published interview / filmed public event?** → **PUBLIC.** Cite the underlying source. *(§What's public)*
3. **Does it appear only inside a consolidation Doc** (Lyrics Doc, transcript Doc, Quotes Doc)? → cite the **underlying public source**, never the Doc. *(§What's "private" but actually public)*
4. **Did Roy himself purposefully expose it publicly** (incl. screenshots he circulated)? → **PUBLIC** — *except* any **Jen↔Roy DM**, which stays **private** (confirm which bubbles are Jen's). *(§DMs and screenshots)*
5. **Inner-Circle post by Roy that he later echoed publicly?** → cite the **public echo**; the Inner-Circle version alone is **private**. *(§Inner Circle content)*
6. **Member-to-member Inner-Circle content, private DMs/screenshots, or private-call transcripts?** → **PRIVATE.**
7. **Can't tell?** → default **PRIVATE**, ask Jen. *(§When in doubt)*

---

## The single most important rule

**If a claim cannot be defended on public material alone, it cannot go in the vault.**

Private material can *guide* analysis and may be **read** freely. It cannot *substitute* for public evidence in a **grounded claim.** The Secret Document promotes confidence in readings that already stand on public material; on its own it can only inspire **explicitly-flagged speculation** (`[~]`/`[?]`/Open Question), never a grounded claim — see [§The Secret Document](#the-secret-document).

If you find yourself writing a **grounded** claim and your only support is something Roy said privately, the grounded claim doesn't go in. Find the public anchor, downgrade it to flagged speculation, or hedge harder.

---

## What's public

Treat everything in this list as fully citable, quotable, and reference-able.

- **Released catalogue** — songs, albums, lyrics published on streaming platforms. **(Clarified 2026-05-30 per Jen: names that appear in released lyrics are public — quote and analyze them freely; no anonymization or privacy scrub. This is distinct from names in private DMs/calls/screenshots, which remain private per "DMs and screenshots" below.)**
- **Music videos** — official Jagwar Twin YouTube uploads
- **The theatrical YouTube series** — The Interview EP 1–7, The Spoon EP 4, listening party episodes (see [[Master Source List]] for full citations)
- **Public social media** — Twitter/X, Instagram, TikTok, Facebook posts from verified Jagwar Twin accounts
- **Public interviews & podcasts** — anything published on a podcast, magazine, video channel, or article
- **Roy's curated public quotes & influences** — the catalog he maintains visibly (Bailey quotes, etc.)
- **Visible iconography** — tattoos in public photos, face paint, the Empty Mirror, the Circle, the rabbit hat, the Power of Three — anything observable in publicly released images
- **Universal sources** — Bible, mythology, Kabbalah, Jung, Bailey, Gurdjieff, tarot, Hermeticism, Theosophy, philosophical traditions, published books
- **Public events that occurred in front of cameras** — the listening party (filmed and released), public performances, premieres documented in the YouTube series

---

## What's private

Do not quote, paraphrase, summarize, or attribute. Do not name as a source.

- **Unreleased lyrics** — anything not yet released to streaming
- **Private chats** — DMs, direct messages, group chat content from non-public channels
- **Private call transcripts** — phone calls, video calls, voice notes
- **The Secret Document** — see Section below
- **Inner Circle member-to-member content** — other subscribers' messages within Roy's paid Inner Circle chat; private without their explicit consent
- **Anything Roy has shared specifically as "this is between us" material** — even if shared in the Inner Circle, even if shared publicly-adjacent

---

## The Secret Document

A Google Doc designated **Secret Document** exists (in the user's Google Drive; a gitignored local copy may also exist outside the tracked repo). It contains private, unreleased, and personally-shared material from Roy.

**It is findable and readable — just never quotable.** A contributor (including an AI chat the user has given access to it) **may locate and read it to inform their understanding.** It is *not* hidden from the analyst, and you should not refuse to look at it or tell the user to stop looking for it. The constraint is on *use in the vault*, not on *reading*:

1. **Never quote** any content from it. Not a sentence, not a phrase.
2. **Never paraphrase** it closely enough that the original is reconstructible.
3. **Never name it as a source**, and never *describe* its contents in vault content. Not in citations, not in section labels, not in attribution tags, not in `(per the synthesis materials)`-style attributions.
4. **An idea it raises has exactly two legitimate paths into the vault — otherwise omit it:**
   - **(a) Cast it as clearly-flagged speculation** — a Resonance `[~]` / flagged-leap `[?]` / Open Question, hedged as unverified, **never grounded**, and **never reproducing the document's wording.** The hypothesis stands on its own as a question; the private doc is not cited as its evidence.
   - **(b) Find an independent public source** that supports it, and ground/cite *that* instead.
   *(This refines the older "silent guidance only" framing: the doc may be read, and may legitimately **inspire** flagged speculation — it just may never be quoted, named, described, or used to ground a claim.)*
5. **Operational test:** *"Would this stand as a **grounded** claim if the Secret Document did not exist?"* If no → it can only enter as flagged speculation (4a) or via an alternate public source (4b).
6. **The Secret Document is acknowledged in [[Master Source List]] as existing**, but its contents are never reproduced.
7. **If the user references content from the Secret Document in conversation**, treat it as private material shared for understanding. Use it under rule 4; do not reproduce it into the vault.
8. **If you suspect a vault page may have leaked private material** (quoted / closely paraphrased / named / described), flag it for user review immediately.

The single exception: **the line "the song hidden inside its wings"** is from a public Twitter/X post and is therefore freely citable, even though related material exists in the Secret Document. The line is publicly anchored; the rest of that material cluster is not.

---

## What's "private" but actually public — read carefully

The user has many private Google Docs that consolidate *public* material in one place for convenience. Examples:

- A Lyrics Doc (consolidates lyrics from released songs)
- Roy Vs Lucius transcripts (consolidates dialogue from public YouTube episodes)
- A Quotes-Interviews Doc (consolidates Roy's public quotes from various interviews)
- Mirror Sessions Doc (consolidates Mirror Sessions content)
- GPT-Organized Context Docs (the user's working synthesis)

**These Docs are reference libraries, not citations.** Their *contents* are public. Their *consolidation* is private.

When citing material that appears in any of these docs:

- Cite the **underlying public source** (the actual song, the actual episode, the actual interview)
- **Never** cite the Doc itself
- **Never** mention the Doc's name in vault content
- Treat the Doc as your reference shortcut, not as a source

This rule applies to all working Docs except the Secret Document, which is fully off-limits regardless.

---

## Inner Circle content

Roy maintains a paid Instagram subscription chat called "Inner Circle." Three rules:

1. **Roy's own posted content in Inner Circle** is borderline. If he subsequently echoes the same content publicly (in YouTube content, on Twitter, in a song), the public version is citable. The Inner Circle version on its own is private.
2. **Member-to-member chat content** (other subscribers' messages) is private. Not citable without their explicit consent.
3. **The user's own Inner Circle posts** are the user's to decide about. If the user wants to include their own Inner Circle writing in the vault, that's their call. They cannot include other members' content without consent.

---

## DMs and screenshots — attribution caution

When the user shares a DM or chat screenshot:

- **Do not assume** which side of the conversation belongs to whom. The user might be either party, neither, or a third person screenshotting both sides of someone else's conversation.
- **Ask for clarification** before drawing conclusions.
- **Do not name** the other person without explicit permission, even if their handle is visible in the screenshot.
- **Treat all DM content as private** unless the user has explicitly cleared it for public reference.

**Refinement (2026-06-01, Jen) — Roy-exposed material:** content **Roy himself has purposefully exposed publicly** (including DM/chat screenshots *he* chose to share or embed in material he circulates — e.g. his own "I'm 33 this year" board) **is citable. Do not second-guess Roy's decision to expose his own information.** The one carve-out: **Jen's own DMs with Roy are NOT public** and remain private even when they appear on Roy's board. Operational consequence: embedded DMs on a Roy-exposed artifact are citable *except* any that are Jen↔Roy — and since the speaker often isn't identifiable from the bubble, **confirm with Jen which (if any) are hers before transcribing**, then quote the rest. This does **not** loosen the Secret Document, private *calls*, member-to-member Inner Circle content, or DMs Roy did **not** expose.

---

## Living document disclosure

These rules can evolve as the project does. If the project's public/private intent shifts (e.g. the user decides certain currently-private material is now okay to reference), update this file with the date and the change. Do not silently update; the boundary is too important.

- **2026-05-30** — Jen: *names in released lyrics need no privacy treatment.* They're public (it's the released song). Applied in "What's public." Does **not** loosen the Secret Document, private DMs/calls, or member-to-member Inner Circle rules.
- **2026-06-01** — Jen: *anything Roy has purposefully exposed publicly is citable — don't second-guess his exposure* (incl. DMs he shares/embeds in his own circulated material). Carve-out: **Jen's own DMs with Roy stay private.** Applied in "DMs and screenshots." Does **not** loosen the Secret Document, private calls, Inner Circle member content, or un-exposed DMs.
- **2026-06-05** — Jen: *the Secret Document is **findable and readable**, just never quotable.* A contributor may read it for understanding (do not refuse to look or tell the user to stop seeking it); an idea it raises must be **cast as flagged speculation** or **re-grounded on an independent public source**, else omitted. Corrects an earlier characterization (Code's) that the chat should simply "stop looking for it." Does **not** loosen never-quote / never-reconstruct / never-name / never-describe.

---

## When in doubt

Default to **private**. If you can't tell whether something is public or private, treat it as private and ask the user. The vault's credibility depends on these boundaries holding. A single leaked private claim can damage trust with the artist and with future readers more than a hundred well-cited public claims build it.

---

## Maintenance

- Update [[Master Source List]] when adding new public sources.
- Update this file when boundary rules change.
- Note any concerns about possible leaks in [[log]] for the user's review.
- If you find existing vault pages that may have leaked private material, flag them — do not silently fix.

---
