# Lessons Learned — Drift & Process Register

Append-only. Records where the project went wrong, why, and the corrective
rule — so it is not repeated. Newest first. (CLAUDE.md §16.)

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
