# Sourcing Pass + Final Audit — 2026-07-01

*Private working file (in `_internal/`, not published). Records what shipped this session and the pre-existing backlog the final audit surfaced.*

## What shipped (committed local, NOT pushed) — baseline `70e8be8`
1. **Quote-wiring** — 78 pages wired to `[[The Interview]]` / `[[Public Posts]]` / song pages, with `EP#`/`IG` precision markers. git-diff-verified wire→verify workflow; 100% of diff reviewed twice; **2 Sonnet hallucinations caught & reverted** (`Public Posts.md` "2026"→"2025"; `Source and Interpretation Policy.md` deleted line/reword). Firewall clean; SARAVI page untouched.
2. **Listen-links** — 47/47 songs got a web-verified official URL (43 YouTube / 3 Spotify / 1 Apple), inserted as `> **▶ Listen:**` in the info callout. Era pages 33 / STF / Lucius Lullaby got verified album Spotify (+Apple LL). Method: finder workflow returns a table → vetted (incl. WebFetch spot-checks) → applied deterministically by script (agents never wrote URLs into pages).
3. **Homepage + nav refresh** — homepage "Key sources" (The Interview + Public Posts); Concepts hub +Music as Pattern and Identity; Albums&Eras hub +The Interview; Roy/Lucius path → Ballerina Boy + The Interview. All 7 new pages reachable from nav.

**Audit confirms my pass introduced ZERO new broken links and ZERO firewall leaks.**

## BLOCKER before Publish — PRE-EXISTING linking backlog (~88 broken internal links)
Not from this session. Needs per-link judgment (naive auto-fix produces *wrong* links). Categories:

### A. Clear alias fixes (target page exists under a near-name) — safe to batch-fix
- `Circus`→`The Circus` · `Spectacle`→`The Spectacle` · `Circle`→`The Circle` · `Empty Mirror`→`The Empty Mirror` · `Digital Double`→`The Digital Double`
- `33 (album)`→`33` · `Subject to Flooding (album)`→`Subject to Flooding`
- `Bad Feeling`→`Bad Feeling (Oompa Loompa)` · `Good Time` / `Good Time (1:08)`→`Good Time (1-08)` · `Pay Attention`→`Pay Attention (feat. little luna)`
- `The Loop` / `Circle vs Loop`→`The Loop and the Circle`
- `Lucius Lullaby (song)` / `Lucius Lullaby (title track)`→`Lucius Lullaby`
- `Hell of a Night Pt. 2` / `Hell Of A Night Pt. 2`→`Hell of a Night Pt. 2 (The Hallelujah Stickup)`
- `Keilim`→`Keilim - The Breaking of the Vessels` · `The House & the Vessel`→`The House and the Vessel`
- `The Im 33 Board` / `The Im 33 Board - Decoded`→`The I'm 33 Board` · `The Visual-Canon Throughline` (+long variant)→`The Visual Canon Throughline`
- `The Interview (series)`→`The Interview` · `The Ballerina Boy`→`Ballerina Boy` · `Jagwar Twin (project)`→`Jagwar Twin`
- `Song of Love` / `The Song of Love`→`SOL` · `The Crowd Sings It Back`→`The Crowd`
- `Brain/Songs/Welcome to the Circus`→`Welcome to the Circus` (lab-vault folder-path leak — check for other `Brain/…` / `Sources/…` path links)
- `Roy on Influences` / `Roy on the Heart-Mind Split` / `How to Live Forever (Roy cosmology drawing)`→`Roy` (lab-vault Roy-Voice subpage links; delink or point to Roy) · `Pronoun Audit - I-you machine…`→`Pronoun Audit (I-You)`

### B. Template-boilerplate LEAK (scaffolding text that reached published pages — delete/delink)
`Concept or symbol` (2×) · `Song or video` (2×) · `Other character` · `Another reading path` · `Era or arc` · `First page`/`Second page`/`Third page`/`Fourth page` · `Stylized Capitalization`

### C. Genuinely missing pages (need Jen: create a page, or delink to plain text)
- Recurring, arguably page-worthy: **El Roi** (5×, the throat tattoo), **Leif** (3×, Lucius's henchman), **BMRC** (3×, the label entity), **Heart and Mind / The Heart-Mind Split**
- Symbol/motif candidates: The Eye · The Well · The Boss · The Crown · The Halo · The Gun · The Fool · The Ceiling · The Machine · The Monkey · The Flood · The Dream · The Star-Lined Road · The Stairway to Heaven · The Eye of Horus · Genesis 3 · Tikkun Olam · Heaven's Gate
- Real people (likely delink — no person pages): Michael Morgan · Matt Pauling · Sarah Vaughan · angelbaby · little luna (→Pay Attention) · Alan Watts · Jung
- Misc/sources: Honey Podcast · Coding Consciousness · How to Live Forever · Test Pilot School lighter · Worldstop · Gatekeeper Saga · The Chemist · Hands Up · Egg (Vladimir Kush) / Egg - Sunrise by the Ocean (Vladimir Kush) · a `Sources/Lyrics/…` path link

## Other audit findings
- **~46 song pages** carry a dangling lyric-line placeholder: `> **Full lyrics:** [Genius](https://genius.com) · streaming` — the Genius link is a bare domain (not a song link) and "streaming" is plain text. Cosmetic but reads unfinished on Publish. (A few have a real Genius/Spotify link already: All My Friends, Life Is Good, Online.) Fixable in the same cleanup pass now that we have per-song Spotify/YouTube from the listen-link work.
- **Singles & EPs** era page: streaming line is a curated-playlist placeholder — **Jen to pin** a "Singles & EPs" playlist.
- **Firewall note (not a leak):** `divine-feminine maker` appears in `Jagwar Twin.md` and `Gnosticism - The World as Trap.md` — both PRE-EXISTING and both about the *public* cosmic Maker / Wise One of The Circle (Shekhinah/Mary question), not a SARAVI identification. Consistent with "public firewall verified clean." Flagging only for confirmation.
- **Draft gating OK:** `status: draft` on SARAVI, Pronoun Audit (I-You), Joni and the Prophet Lineage, Open Questions — exclude these from Publish.

## Recommended next pass (needs greenlight)
A careful **link-cleanup workflow** (context-reading, like the sourcing pass): batch-fix category A + strip category B boilerplate + fix the `· streaming` lyric lines using the Spotify/YouTube we now have; return category C as a decision list (create-page vs delink) for Jen. Then re-run this audit → 0 broken links → push → flip Publish.


---

## ADDENDUM — Link-cleanup pass executed (2026-07-01, second session)

**Done this pass:**
- Category A alias-class links batch-fixed by script: ~50 targets/refs retargeted with display-preserving pipes (Circus→The Circus, The Loop→The Loop and the Circle, Bad Feeling→Bad Feeling (Oompa Loompa), 33 (album)→33, Im 33 Board variants, Hell of a Night Pt. 2 variants, Keilim, Visual-Canon variants, Song of Love→SOL, I Like To Party→I Like to Party, etc.)
- Ballerina Boy rename fallout resolved per context: character refs → [[Brandon|Ballerina Boy]]; song refs → [[Ballerina Boy|BALLERINA BOY]]
- Real people (Jen's call 2026-07-01): Wikipedia links (open new tab by Publish default) for Sarah Vaughan, Alan Watts; delinked to plain text where no Wikipedia page fits: Matt Pauling, Michael Morgan, little luna, angelbaby, Worldstop
- Real-world referents → external links: Genesis 3 (BibleGateway), Tikkun Olam, Eye of Horus (Wikipedia)
- Lab-artifact links delinked to styled text: Test Pilot School lighter, How to Live Forever (both variants), Coding Consciousness, Egg/Kush variants, Honey Podcast, Stylized Capitalization
- Broken svg embeds removed from Sir Lucius + SARAVI infoboxes (art can be added later)
- NEW PAGES (Jen's call): [[Carl Jung]] (alias Jung), [[Gurdjieff]], [[Alice Bailey]], [[Roy on Influences]] (roster page with Wikipedia links: Goddard, Steiner, Blavatsky, Watts, Levi, Regardie, da Vinci, Russell, Kybalion, Dion Fortune). Added to Concepts hub (Esoteric traditions) + Esoteric reading path.

**Result: 84 broken targets / 211 refs → 27 targets / 76 refs, ALL deliberate decision-list items:**

### Create-page candidates (Jen to decide; recommended)
- **El Roi (13 refs)** — the throat tattoo; most-referenced missing page, recommend create (symbol)
- **Leif (7)** — Lucius's henchman; recommend create (character)
- **BMRC (6)** — the label entity; recommend create (BMRC3.png sitting at vault root looks intended for it)
- **Heart and Mind cluster (4: Heart and Mind ×2, The Heart-Mind Split, Roy on the Heart-Mind Split)** — the project's CORE dyad has no page; strongly recommend create (concept)
- **Gatekeeper Saga (3)** — the Discord Potter bit release-chronicle; fun fan content, recommend create or delink

### Symbol/motif stubs-in-waiting (20 targets, 43 refs — mostly in song "Key symbols" lists; leave broken, delink, or batch-create small symbol pages)
The Eye (5) · The Well (3) · The Fool (3) · Hands Up (3) · The Star-Lined Road · The Monkey · The Halo · The Gun · The Crown · The Ceiling · The Dream · The Stairway to Heaven · The Machine · The Flood · Water · Heaven's Gate · Blood (2 each) · The Boss · The Song as Channel · The Chemist (1 each)

Unresolved links render as non-clickable muted text on Publish — cosmetically fine to launch with.

**Refinement (Jen 2026-07-01):** collaborators without Wikipedia pages get INSTAGRAM links instead of plain text — applied: Matt Pauling @matthew.pauling, Michael Morgan @themichaelmorgan (both handles from the vault's bounce-reel capture), little luna @littleluna, angelbaby @angelbaby (web-verified).

---

## ADDENDUM 2 — Decision list EXECUTED (2026-07-01, third session): VAULT IS LINK-CLEAN (0 broken / 0 refs)

Jen's calls: make the pages; BMRC contains Leif; The Fool gets its own page (symbol for now, maybe character later); minor symbols consolidated into one cleverly-named page.

**6 new pages (all wired into hubs + built from 5 gather-agent briefs over the vault's own material):**
- `03 Symbols/El Roi.md` — the throat marking (Lucius's character marking per Roy's Tattoos), Genesis 16, El Roy signature, Da'at/root harmonics as framework
- `03 Symbols/The Fool.md` — It's Your Time anchor, Key 0 + "I'm no-thing", fatal leap in #1 Champion, wise-fool in dumbledore, board station; open question: symbol vs character
- `02 Concepts/Heart and Mind.md` (aliases: The Heart-Mind Split, The Heart/Mind Split) — THE core dyad page: serve/slay-the-slayer/Lucifer-archetype/third-voice grounded quotes, cast-as-doctrine, serve-grammar, Beth callout, Tree/tikkun callout
- `02 Concepts/Gatekeeper Saga.md` — the dumbledore label fight Nov 2024→Feb 28 2025, blockchain end-run, "Master gave dumbledore a sock"
- `01 Characters/BMRC.md` (aliases: B.M.R.C., Leif) — production house + weapons brand, deliberately unresolved decode, dated feed posts, Live Underground; **## Leif section** (enforcer, EP5/EP6, foil-that-lets-Lucius-cohere)
- `03 Symbols/The Prop Room.md` — consolidated minor symbols, 18 anchored entries grouped by era (STF: Hands Up/Ceiling/Water/Blood/Heaven's Gate/Machine/Flood/Dream/Stairway · 33: Eye/Well · LL: Monkey/Halo/Gun/Crown/Star-Lined Road/Chemist · cross: Song as Channel); graduation rule stated (Fool = precedent)

**Retargets:** [[Leif]]→[[BMRC#Leif|Leif]] (7) · [[The Boss]]→[[BMRC]] (1) · [[Roy on the Heart-Mind Split]]→[[Albums & Eras/concepts_lift_opus_2026-07-10/Heart and Mind]] (1) · 18 minor-symbol targets→[[The Prop Room#X|display]] (43 refs, display-preserving). All heading anchors verified to exist.

**Hub updates:** Symbols hub +El Roi/The Fool/The Prop Room (+The Moon, which was missing from the hub); Characters hub +BMRC (Forces); Concepts hub +Heart and Mind (core cosmology) +Gatekeeper Saga (wider world).

**FINAL STATE: 0 broken wikilinks across the entire public vault.** Publish-ready pending Jen's re-upload.
