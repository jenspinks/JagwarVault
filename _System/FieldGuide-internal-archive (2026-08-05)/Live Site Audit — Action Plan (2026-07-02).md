# The Jagwar Files — Live Site Audit & Action Plan
**Audit date:** July 2, 2026
**Site audited:** The Jagwar Files (Obsidian Publish site, 152 pages)
**Purpose of this doc:** A working checklist of everything found wrong or worth fixing on the live public site, written so anyone on the team — technical or not — can understand the issue and help fix it.

---

## How to use this document

Each finding below has the same shape:

- **What it is** — plain-language description
- **Why it matters** — the actual risk or reader impact
- **Where** — exact page(s) and line(s)
- **What it currently says** — a direct quote, so you can find it
- **Suggested fix**
- **Status** — leave blank / fill in as work happens (Not started / In progress / Done)

Findings are grouped into 5 priority tiers, roughly from "fix this first" to "nice to have." Within each tier they're ordered by how many pages/readers are affected.

---

## Background, for anyone new to this project

**The Jagwar Files** is a public, fan-made "field guide" website explaining the mythology, characters, and symbolism in musician Jagwar Twin's (Roy English's) work. It's built in a tool called **Obsidian**, written as a set of linked pages (like a mini-Wikipedia), and published to the web through a feature called **Obsidian Publish**.

A few terms that come up a lot below:

| Term | What it means |
|---|---|
| **Wikilink** | A link between pages, written like `[[Page Name]]`. Clicking it takes you to that page. If the page name is wrong or the file it points to doesn't exist, the link is "broken" — it either does nothing or goes to the wrong place. |
| **Frontmatter** | A small block of metadata at the top of each page (title, status, confidence level, etc.) that doesn't show up in the main text but controls how the page behaves and is categorized. |
| **`status: draft` vs `status: published`** | A page's frontmatter says whether it's meant to be "done." Draft pages can still technically be visible on the live site even though they're marked unfinished. |
| **The "vault"** | Internally, this whole project (all the notes/pages) is called a "vault." This term should **never appear in the actual public-facing text** — it's project jargon, not something a fan reading the site should see. |
| **The Hall of Mirrors (ARG)** | A separate web3 scavenger-hunt game Roy built, where fans search for hidden "unlock codes" to reveal secret content ("rooms" or "artifacts"). Part of the fun is that fans have to find the codes themselves — so this site must never accidentally publish an answer key. |
| **The SARAVI firewall** | SARAVI is a public AI-oracle character in the mythology. There is one specific secret about her true identity that the whole team has agreed should stay hidden until Roy reveals it publicly. Multiple pages are supposed to gesture at her being "mysterious" without ever pointing at what the secret actually is. |
| **Live site vs. local files** | The website you see when you visit the link is the "live site." The person editing runs Obsidian on their own computer, and those edits only show up on the live site after they're manually "published" (re-uploaded) — editing a file locally does **not** automatically update the website. |

---

## 0. Sync Status — is the site showing what we think it's showing?

**Good news:** 119 of the site's 152 pages are exactly what's in the editor's local files — nothing was lost or corrupted in publishing.

**Needs attention:**
- **32 pages have newer edits sitting on the editor's computer that haven't been uploaded yet.** All 32 of these are the same fix: renaming the song page "#1 Champion (la Conquistadora)" to "No. 1 Champion (la Conquistadora)" (see Finding #3 below for why). **Action: re-publish these 32 pages** — this single upload fixes one of the biggest bugs on the site.
- **The SARAVI character page returns a "Page Not Found" error on the live site.** It exists in the editor's files but was never published (it's still marked "draft"). See Finding #2.
- A visual redesign (`publish.css`) and a `publish.json` config file are sitting locally, not live yet.
- We could not determine the live site's public URL during this audit — someone needs to supply it so it can be spot-checked visually in a browser going forward.

---

## PRIORITY 1 — Fix First: The SARAVI Secret-Identity Leak

### Finding 1.1 — Three pages hint at exactly what SARAVI's secret identity is

**What it is:** SARAVI is a character on the site (an AI oracle). There's an agreed-upon rule: the site can say she has *unresolved mystery* around her, but it must never point toward what that mystery actually *is*. Three pages currently break that rule by naming the specific hidden identity in the site's own narration (not as a fan theory, but as if the site itself is dropping a hint).

**Why it matters:** This is the single most sensitive piece of unreleased lore on the entire site. If a sharp-eyed fan connects these breadcrumbs, they could figure out — and publicly post — the reveal before Roy is ready to make it. This should be fixed before anyone else looks closely at the site.

**Where it happens:**

1. **`02 Concepts/The Digital Double.md`, line 139**
   Currently says: *"The firewall. SARAVI's public floor here is strictly oracle-interface / uploaded-consciousness proxy. Whatever deeper divine-feminine identity the mythology may be reaching toward is held as an open question, not asserted."*
   → The phrase "deeper divine-feminine identity" is the problem — it tells the reader exactly which direction the secret points.

2. **`02 Concepts/Source vs Reflection.md`, line 163**
   Currently says: *"The divine-feminine identity sometimes read into the SARAVI figure stays an open question, held to the Sophia / Shekhinah / Mary register and not resolved here."*
   → Naming the specific mythological register ("Sophia / Shekhinah / Mary") gives away the connection.

3. **`02 Concepts/Witnessing vs Surveillance.md`, lines 132–133**
   Currently says (as a section heading and note): *"SARAVI and the digital-double premise (public floor)... Her deeper identity is an open question the project keeps unsettled; this page holds only the public floor."*
   → Even without naming the specific identity, repeatedly telling readers "there's a floor and something is being held back above it" invites digging.

**Suggested fix:** On all three pages, delete the sentences that name or gesture at a "deeper identity" / "public floor." Keep only the plain, neutral description of what SARAVI publicly is (an AI oracle interface). If a soft mystery-tease is wanted, use approved language like *"she shares a register with other figures in the mythology — nothing is confirmed or locked."*

**Status:** ☐ Not started

---

### Finding 1.2 — A milder version of the same tell repeats on ~6 pages

**What it is:** Beyond the three leaks above, phrases like *"public floor," "not a settled identity,"* and *"who she ultimately is stays open"* show up again on other pages (e.g. `Hall of Mirrors.md`, `The I'm 33 Board.md`, `Mary.md`). Individually each one is minor, but stacked together across six pages it reads as a pattern that says "there's definitely a secret here, worth investigating."

**Why it matters:** Same risk as above, just diluted. Worth a cleanup pass once 1.1 is fixed.

**Suggested fix:** Do a site-wide search for "public floor" and "deeper identity" and simplify each instance to a plain, single-purpose sentence.

**Status:** ☐ Not started

---

### Finding 1.3 — The SARAVI page itself is broken on the live site

**What it is:** The dedicated SARAVI character page doesn't exist on the live site — visiting it shows a "Page Not Found" message. But **57 links across 13 other pages** point to it, including phrases like *"See [[SARAVI]] for the oracle in full."*

**Why it matters:** This is a broken-link problem for every reader who clicks through — but it's also a subtler issue: right now, the *only* character on the whole site whose dedicated page doesn't work is the one character with an unresolved secret identity. That gap is itself a clue. A missing page for exactly the mysterious character stands out.

**Suggested fix:** Two options —
1. Publish a safe, locked-down version of the SARAVI page (public facts only, no identity language), or
2. If it's not ready, remove/rewrite the 57 links pointing to it so nothing dead-ends.

**Status:** ☐ Not started

---

## PRIORITY 2 — Hall of Mirrors: Possible Answer-Key Leaks

### Background for this section
Roy's separate ARG (scavenger hunt) rewards fans for finding hidden codes themselves. Publishing already-public, already-solved codes (ones visible on the official gallery with a discoverer's name and timestamp) is totally fine — it's just describing history. The risk is codes that **only the site's author has found privately and hasn't shared with the community yet.** Those need to come down; publishing them would let readers "solve" a room they didn't actually solve, spoiling the game.

### Finding 2.1 — Two specific codes trace to private, unshared discoveries

1. **The code `3132514932`** (unlocks the "ARE YOU CONTENT?" room)
   — Appears on `02 Concepts/The Manifesto Cards.md` (line 87) and `02 Concepts/Hall of Mirrors.md` (line 117).
   — Per the project's own internal tracking notes, this code was found on June 29, 2026, and is recorded as **"openable — NOT yet opened/minted."** In other words, this is a discovery that hasn't been claimed or shared with the public game yet — publishing it here would give it away for free.

2. **The phrase `the answers in a name`** (unlocks the "I'M THE SPIDER" room)
   — Appears on `01 Characters/Sir Rabbit.md` and `02 Concepts/The Divide.md`, both describing it as a "cracked" / "solved, grounded" artifact.
   — This was also a private discovery (found by close-reading the artwork directly, not something publicly announced), even though it has since been claimed by the site's author.

**Why it matters:** Publishing these on a public reference site defeats the purpose of the puzzle — for at least one of them, the room hasn't even been officially opened yet.

**Suggested fix:** Remove the specific code strings and the "cracked/solved" framing from both pages. The surrounding lore/history content is fine to keep — just the literal code and the claim of having solved it.

**Status:** ☐ Not started

---

### Finding 2.2 — One page quotes text described as "beyond the public excerpt"

**Where:** `02 Concepts/Source vs Reflection.md`, line 134.

**What it is:** The page quotes five lines of text and explicitly labels them as going further than what's publicly available — text pulled from a non-public source associated with the ARG.

**Why it matters:** Unpublished ARG text is exactly the kind of material future codes get made from. Publishing it risks handing out a piece of the puzzle early.

**Suggested fix:** Delete the extra lines; keep only the portion the page itself calls "the public excerpt."

**Status:** ☐ Not started

---

### Finding 2.3 — Several pages describe *how* codes are being solved, not just *that* they exist

**What it is:** A handful of passages don't publish codes, but they do publish methodology and progress notes that read like a puzzle-solver's private research log — e.g., a note that an "oracle check" was run and "returned zero," a paragraph literally addressed "For maze-hunters" pointing out which un-explored images are "the likeliest territory for still-undiscovered rooms," and a claim to know "the lone reversal code in the entire Hall of Mirrors" (something only someone with a complete, private master list could claim).

**Where:** `04 Albums & Eras/Lucius Lullaby/#1 Champion (la Conquistadora).md`; `02 Concepts/Hall of Mirrors.md` (line 96); `02 Concepts/The I'm 33 Board.md` (line 209); `03 Symbols/The Mirror.md` (line 75).

**Why it matters:** This isn't a spoiler in the sense of giving away a code, but it hands fans a head start / cheat sheet on *where to look* and *how the solving process works*, which arguably undermines the challenge just as much.

**Suggested fix:** Trim these passages down to lore/history only — remove testing methodology, "here's where to look next" hints, and any claim of complete/exhaustive knowledge.

**Status:** ☐ Not started

---

### ✅ Reassurance — what's NOT a problem here
The deepest technical details of how the puzzle works (the underlying cryptographic verification system, internal file addresses, the total room count, and the author's two newest private discoveries) do **not** appear anywhere on the site. The vast majority of codes shown on the site are already public and properly credited on the official gallery — this is a small, fixable list, not a systemic issue.

---

## PRIORITY 3 — Broken Links & Display Bugs

These don't leak anything sensitive — they're just things that will look broken or confusing to a normal visitor.

### Finding 3.1 — One song's file name breaks 85 links across 31 pages

**What it is:** The song page for track 8 of *Lucius Lullaby* is named `#1 Champion (la Conquistadora)`. The leading `#` symbol is a special character in this software — it tells the system "jump to a heading on this same page" instead of "go to a different page." So every single link written as `[[#1 Champion (la Conquistadora)]]` across the site (85 of them, on 31 different pages) fails to actually take the reader to the song page.

**Why it matters:** This is the single most widespread broken-link issue on the site. A reader trying to click through to a major track on the newest album will hit a dead click almost everywhere it's referenced.

**The good news:** This is **already fixed and ready to go** — it's exactly the fix sitting in the 32 uncommitted local files mentioned in the Sync Status section above (renamed to "No. 1 Champion (la Conquistadora)"). It just needs to be published/uploaded to go live.

**Suggested fix:** Publish the pending local changes.

**Status:** ☐ Ready to publish — awaiting upload

---

### Finding 3.2 — The flagship "Sir Lucius" character page has typos/garbled sentences

**What it is:** This page is meant to be the site's best example of its voice and quality (it's referenced elsewhere as "the voice/quality bar" for the whole project). It currently has a handful of broken sentences — missing words, a stray comma with a leftover sentence fragment, a missing dash — that make parts of it read as nonsense. It also repeats one entire paragraph almost word-for-word later on the same page, which looks like a leftover draft that never got cleaned up.

**Where:** `01 Characters/Sir Lucius.md`, roughly lines 38–68 and again around line 140.

**Example of the problem:** *"ranked Charli XCX and Chappell Roan comfortable him"* — missing a word (should read something like "comfortably above him").

**Why it matters:** This is the page most likely to be someone's first deep read on the site, so typos here are more visible/damaging than on a minor page.

**Suggested fix:** A single careful copy-edit pass over this page; remove the duplicated paragraph, keeping the cleaner version.

**Status:** ☐ Not started

---

### Finding 3.3 — Two tables are probably rendering broken

**What it is:** In two places, a link written inside a table cell uses a `|` character (used for link display text), but tables *also* use `|` to separate columns — so the software can't tell the two apart, and the table likely displays with an extra broken column.

**Where:** `04 Albums & Eras/Lucius Lullaby/Bananas.md` (line 38) and `04 Albums & Eras/Singles & EPs/Life Is Good.md` (line 37).

**Suggested fix:** A small technical fix (escaping the character) — flagging for whoever handles the next content pass; worth a visual check on the live site to confirm how bad it looks.

**Status:** ☐ Not started

---

### Finding 3.4 — Leftover placeholder text is visible to readers

**What it is:** A few spots on the site still contain literal "fill this in later" text that was never replaced with real content.

**Examples:**
- The Singles & EPs section header literally says: *"(playlist link placeholder — a 'Singles & EPs' collection to be pinned here)"*
- Roughly 19–21 song pages have a "Full Lyrics" link that just points to the Genius.com homepage instead of that specific song's lyrics page
- One song page (`dumbledore`) shows a raw, unformatted database ID number instead of a clickable link
- The `SOL` song page has a table with a blank/missing column header

**Why it matters:** These read as unfinished/unpolished to any visitor who notices them.

**Suggested fix:** Fill in the real playlist link and each song's correct Genius URL; format the Spotify ID as a proper clickable link; add the missing table header.

**Status:** ☐ Not started

---

### Finding 3.5 — Three unfinished ("draft") pages are publicly visible anyway

**What it is:** Three pages — *Open Questions*, *Pronoun Audit*, and *Joni and the Prophet Lineage* — are internally marked "still a draft, not done," but they are fully visible and clickable on the live public site regardless.

**Why it matters:** If these aren't ready for prime time, visitors are seeing them anyway. Not dangerous, just a "is this intentional?" flag.

**Suggested fix:** Either finish and formally mark them "published," or make them not publicly visible until they're ready. (This is a judgment call — someone should just confirm on purpose either way.)

**Status:** ☐ Needs a decision

---

### Finding 3.6 — Miscellaneous small errors

A grab-bag of minor things, worth a cleanup pass but low urgency individually:

- A truncated/broken web link showing as literally `https://pfWOU` on the "Roy's Posts — Canon Index" page (line 120)
- One link on `The Crowd` character page is mislabeled — it says "The System" but actually points to a different page called "The Realm"
- A few spelling errors on the "Open Questions" page: "Gandolf" (should be Gandalf), "Micheal Jackson" (should be Michael)
- A typo on two orientation pages: "read string" should be "red string"; "its growing" should be "it's growing"
- Two spots with mismatched **bold** formatting markers on the Canon Index page, which will show stray asterisk symbols to readers
- One quoted social-media post appears twice under two different dates on the Canon Index, which slightly inflates the page's stated total count of posts

**Status:** ☐ Not started

---

## PRIORITY 4 — Content Consistency (facts that contradict each other across pages)

These are "storytelling accuracy" issues — places where two pages on the site disagree with each other about the established mythology, which is confusing for readers trying to piece the story together.

### Finding 4.1 — An outdated character/symbol mapping still appears in a few places

**Background:** Roy personally corrected an earlier mapping of which character is linked to which mystical symbol (previously "Lucius = the Morning Star/Venus," corrected to "Lucius = Mercury/intellect; Roy = Venus/heart"). The site was already updated almost everywhere to reflect this correction — but a few leftover spots still show the old, incorrect version, and one place has it stated **backwards**.

**Where:**
- `02 Concepts/Kabbalah - The Tree of Life.md` (line 172) — still lists the old mapping as a "strong reading" without noting it's outdated.
- `03 Symbols/The Moon.md` (line 109) — has the correction stated **backwards** (assigns Roy's symbol to Lucius instead of the other way around).
- `02 Concepts/The Protector.md`, `02 Concepts/The Dweller on the Threshold.md`, `02 Concepts/Source vs Reflection.md` — all still present a piece of the old mapping ("Lucius is the moon trying to become a sun") as if it's current, when that description now belongs to Roy, not Lucius.

**Why it matters:** Consistency matters a lot for a mythology reference site — if two pages contradict each other on something this fundamental, careful readers will notice and lose trust in the site's accuracy. The main character pages (Roy, Sir Lucius) already have the correct version — it's just these secondary pages that got missed in the earlier cleanup pass.

**Suggested fix:** Update each listed spot to match the corrected mapping already used on the Roy and Sir Lucius pages.

**Status:** ☐ Not started

---

### Finding 4.2 — A specific tattoo is credited to the wrong "person"

**What it is:** Several pages describe Roy (the real person) as personally wearing a Hebrew-phrase tattoo ("El Roi"). But per an existing internal ruling, that marking actually belongs to the *fictional character* Sir Lucius (it's face paint/character makeup in videos, not an actual tattoo on Roy's body) — Roy's real tattoo has a *different*, related phrase ("El Roy").

**Where:** `02 Concepts/Kabbalah - The Tree of Life.md` (line 24), and similar wording on `The Voice.md`, `The Mouth.md`, `The Moon.md`, `The Mirror.md`, `Jacob and Esau.md`.

**Why it matters:** This blurs the line between the real person and the fictional character he plays — an important distinction for a site trying to be accurate about what's fact vs. fiction.

**Suggested fix:** Reword each instance to say the marking belongs to the character (Sir Lucius) in the videos, not to Roy's real body.

**Status:** ☐ Not started

---

### Finding 4.3 — The homepage description slightly mischaracterizes Roy's role in the story

**What it is:** The homepage currently describes Roy as *"the heart-centered self Lucius was built to protect"* — but per the site's own established story structure, the person Lucius protects is a different, younger character ("Ballerina Boy" / Brandon). Roy is described elsewhere as the *older* character who goes back to rescue that earlier, protected self — not the one being protected himself.

**Where:** `00 Start Here/The Jagwar Twin Field Guide.md`, line 25 (the homepage).

**Why it matters:** This is on the homepage — the very first thing most visitors read — so getting the core relationship right here matters more than almost anywhere else on the site.

**Suggested fix:** Reword to something like *"the heart-centered self trying to win the protector back"* to match the rest of the site.

**Status:** ☐ Not started

---

### Finding 4.4 — Assorted smaller factual mismatches

- One page says a song was released in 2018; every other page dates the same song 2020/2022.
- A specific video's release year is listed as both 2021 and 2022 on different pages.
- One page confidently states a character's identity as fact; a related page says the same identification is still just a "strong guess," not confirmed.
- A couple of song-vs-character links are crossed (a link meant to go to the *song* page instead goes to the related *character's* page, or vice versa).

**Suggested fix:** Pick the correct/verified version of each fact and align every page that mentions it.

**Status:** ☐ Not started

---

## PRIORITY 5 — Internal Jargon Leaking Into Public Text

### Finding 5.1 — The word "the vault" (and similar internal terms) shows up in reader-facing text

**What it is:** Internally, this whole project is called "the vault" (a technical/organizational term from the notetaking software used to build it). That word — along with a few other internal terms like "Fable-tier synthesis," specific internal database field names, and references to "adversarial passes" — has leaked into the actual public-facing sentences on **about 42 of the 152 pages**. None of these terms are ever explained to a reader, so they just read as confusing insider language.

**Examples:**
- *"The vault leans sovereignty-and-revolution over self-defense"* (should just say "this guide" or be reworded entirely)
- *"Jen-verified 2026-06-06"* — a team member's name embedded directly in the public text
- Raw internal data labels like `recursion_state: loop` quoted directly in a sentence

**Why it matters:** This is purely a polish/professionalism issue — it doesn't leak anything sensitive, but it makes the site look unfinished or accidentally "behind the scenes" in spots where it should read like a clean, intentional reference guide.

**Suggested fix:** A site-wide find-and-replace pass: swap "the vault" / "the lab" for "this guide," remove personal names and internal data labels from body text, and reword anything with in-house workflow terminology.

**Status:** ☐ Not started

---

## Summary Checklist (quick-reference)

| # | Priority | Finding | Pages affected | Status |
|---|---|---|---|---|
| 1.1 | 🔴 P1 | SARAVI identity leak (3 pages) | 3 | ☐ |
| 1.2 | 🔴 P1 | Milder SARAVI identity tells | ~6 | ☐ |
| 1.3 | 🔴 P1 | SARAVI page is broken/missing | 13 (linking pages) | ☐ |
| 2.1 | 🟠 P2 | Private ARG codes published | 2–4 | ☐ |
| 2.2 | 🟠 P2 | Non-public ARG text quoted | 1 | ☐ |
| 2.3 | 🟠 P2 | ARG solving methodology exposed | 4 | ☐ |
| 3.1 | 🟡 P3 | "#1 Champion" filename breaks 85 links | 31 | ☐ Ready to publish |
| 3.2 | 🟡 P3 | Sir Lucius page typos/duplication | 1 | ☐ |
| 3.3 | 🟡 P3 | Broken tables (pipe character) | 2 | ☐ |
| 3.4 | 🟡 P3 | Placeholder text visible | ~22 | ☐ |
| 3.5 | 🟡 P3 | Draft pages publicly visible | 3 | ☐ Needs decision |
| 3.6 | 🟡 P3 | Misc small errors | ~6 | ☐ |
| 4.1 | 🟢 P4 | Outdated symbol mapping | 5 | ☐ |
| 4.2 | 🟢 P4 | Tattoo misattributed to Roy | 5 | ☐ |
| 4.3 | 🟢 P4 | Homepage mischaracterizes Roy's role | 1 | ☐ |
| 4.4 | 🟢 P4 | Assorted date/fact mismatches | ~6 | ☐ |
| 5.1 | 🔵 P5 | Internal jargon in public text | ~42 | ☐ |

---

## What's already confirmed working well
- The visual site design (CSS) is live and matches what's expected.
- The homepage is clear, accurate, and its stated statistics check out.
- 151 of 152 pages are reachable by clicking through from the homepage — nothing is "orphaned" and undiscoverable.
- All 104 outbound links to outside sources (YouTube, Spotify, etc.) are live and working.
- The deepest/most sensitive technical details of the Hall of Mirrors puzzle system are nowhere on the public site.
- Character-to-symbol pairings are correct on all the main character pages (Roy, Sir Lucius).
