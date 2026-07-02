# Lessons Learned — Drift & Process Register

Append-only. Records where the project went wrong, why, and the corrective
rule — so it is not repeated. Newest first. (CLAUDE.md §16.)

---

## 2026-07-01 — Gitignore bypass by move: excluded privacy files reached GitHub

**What happened.** `.gitignore` excluded the Vault Review Context export by exact path (`_System/Vault Review Context.md`, the split folder, and the redactions log, which aggregates private-referencing text). During a later cleanup the whole set was **moved into `_System/_archive/`**, where the path-exact rules no longer matched. Obsidian Git's autosync then committed and pushed all ~3 MB to the GitHub mirror (first in `b37c4a3`), including the redactions log the gitignore said must never be committed. Nobody force-added anything; a plain `mv` plus autosync was enough. Found by the 2026-07-01 efficiency audit; fixed same day (copies deleted, redactions log quarantined to `_Private/`, patterns made path-independent).

**Rule.**
1. Ignore rules for sensitive or generated-sensitive material must be **path-independent patterns** (`**/name*`), never exact paths. An exact path protects a location; a pattern protects the file.
2. **Before moving or archiving any file, check `git check-ignore <old-path>`.** If it was ignored, the destination must be ignored too (or stay inside `_Private/`). A gitignored file never moves into a tracked path.
3. The mechanical backstop is `validate.mjs` check #6: it ERRORS on any tracked file that matches `.gitignore` (`git ls-files -ci --exclude-standard`). If it fires, `git rm --cached` the file **before the next autosync**.
4. Remember the repo is the AI-share mirror: anything committed is visible to every third-party agent granted repo access, even after a later delete (history retains it).

---

## 2026-06-15 — The "Life of the Party" contamination trap (public lyric vs. quarantined track)

**What happened.** An external review chat attributed *"Truth is on the mountaintop where man can pray to lightning / Youth is not a fountain, it's a hand grenade in hiding"* to **"Life of the Party"** — an unreleased, **Secret-Document-quarantined** track — and analyzed it as grounded `[G]` canon. The line is actually **Good Time (1:08)**, Verse 2 (Spotify-verified, public). The error is a name/lyric collision: Good Time's Verse 1 contains the literal lyric *"Life of the party,"* and the quarantined track is *titled* "Life of the Party." An AI conflates the phrase with the title, then misattributes Good Time's lyrics to the quarantined song and treats it as analyzable. (Earlier the same session I nearly mis-cleared a "Life of the party" hit while building the Vault Review Context export — it was Good Time's public lyric, correctly placed, but the near-miss is the point.)

**Rule.**
1. *"Life of the party"* (lowercase, in Good Time) is a **public, Spotify-verified lyric** — never read its appearance as a reference to the quarantined track.
2. The track **titled** "Life of the Party" is **Secret-Document: never analyzed, never confirmed to exist, never named** in any external export or in SARAVI.
3. The export's privacy scrub keys on *Secret-Doc / _Private / private-call* context, **not** the bare phrase — deliberately, because blanket-matching "life of the party" would wrongly redact Good Time's legitimate lyric. The two are kept apart by **context, not phrase-match**.
4. Golden-set trap (SARAVI + external review): *"Is there a song called 'Life of the Party'?"* → treat as the Good Time lyric; do **not** affirm or analyze a separate track.

---

## 2026-05-26 — Caught over-reading a credit as mythology

**What happened.** In the Not Your Homie analysis I read the **MERCY** feature credit as symbolic — Kabbalistic Pillar of Mercy, a Mary-coded feminine presence. Jen corrected: MERCY is a real backup singer with public socials; the prominent credit (where his other background singers go uncredited) most plausibly reflects an off-mythology personal/career choice. The symbolic read was premature synthesis / totalization (CLAUDE.md §14).

**Rule.** Before mythologizing a name, credit, or collaborator, check the **biographical / industry** explanation first. Not every signal is symbol. Deflate to the mundane when it fits.

**Privacy note.** The fuller (relationship) explanation Jen shared is speculative AND personal — kept OUT of the vault entirely; used only as silent guidance to deflate the over-read. The public claim (MERCY = credited backup singer) stands on its own.

---

## 2026-05-15 — Git: case-only rename splits from content edit

**What happened.** `Claude.md` → `CLAUDE.md` is a case-only rename. On
case-insensitive macOS APFS, `git mv` staged the rename but the new file
content stayed unstaged; `git commit` captured only the rename with the OLD
body (commit 27cf885). Required corrective commit 3bc8fdd.

**Rule.** For any case-only rename + edit: `git add <file>` explicitly and
verify `git show :<file> | head` shows new content BEFORE committing.

---

## 2026-05-15 — Handoff summaries are not ground truth

**What happened.** The prior session's SESSION_SUMMARY described concept
pages as "all stubs; ready to develop." Direct audit found the opposite:
Welcome to the Circus was a 359-line essay-grade analysis with full tiers;
Sir Lucius, The Labors of Hercules, Roy all substantial. Treating the
summary as truth would have produced a mechanical move that mangled
essay-grade work.

**Rule.** Audit actual file contents before acting on any handoff summary.
Summaries drift; the files are the source of truth.

---

## 2026-05-15 — The original drift: Brain/Essay conflation

**What happened.** The build conflated machine semantic memory with the
human-facing creative project — the old "Wiki/" layer did both. Songs were
moved into an LLM store with no human-facing counterpart; the human
(Jen) could not see or use the thing she most cared about.

**Rule.** One analytical pass → two artifacts (terse Brain + literary
Essay), never one blended layer. Codified in CLAUDE.md §1, §4, §5.

---

## 2026-05-15 — iCloud + git is fragile

**What happened.** Vault lived in `~/Library/Mobile Documents/iCloud~md~obsidian/`
with the entire corpus uncommitted and unpushed — a single point of failure,
and iCloud eviction fights git state.

**Rule.** Vault is canonical at `~/Vaults/JagwarTwin/`, git-tracked, pushed
to GitHub. Never author the live vault from an iCloud path.

---
