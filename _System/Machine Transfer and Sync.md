---
title: Machine Transfer & Sync
type: system
---
# Machine Transfer & Sync

How the Jagwar Twin work moves between the two Macs. Written 2026-07-21 after the July transfer left sessions running without the vaults.

## The one thing to know

**iCloud is not carrying any of this.** "Desktop & Documents" iCloud sync is off on both machines, and even if it were on, an Obsidian vault holding a git repo is the exact case where iCloud corrupts things, because it syncs `.git` object files independently of each other. **Git is the only transport.** If it is not committed and pushed, it does not exist on the other machine.

That is not a limitation to work around, it is the design. Both vaults already push to GitHub on a timer. The job is just to make sure the timer is running and the tree is clean before you switch machines.

## What lives where

| Piece | Path | Travels by |
|---|---|---|
| The brain (source of truth) | `~/Vaults/JagwarTwin/` | GitHub `jenspinks/JagwarVault` (**private**) |
| The public guide | `~/Vaults/The Jagwar Files/` | GitHub `jenspinks/JagwarTwin-FieldGuide` (**PUBLIC**) |
| `_Private/` (Inner Circle, Secret Document) | inside the brain, gitignored | **nothing. Manual copy only** |
| The harness (CLAUDE.md, hooks, `.mcp.json`, saravi, vault-brain) | `~/Claude/Code/JagWeb/` | local git repo, see below |
| Claude session memory, 53 files | `~/.claude/projects/-Users-jenniferspinks-Claude-Code-JagWeb/memory/` | manual copy |

Both machines use the same username, so every stored path resolves identically. Keep it that way, it is what makes the memory and the 43 transcripts portable at all.

## Before you leave a machine

1. Check both vaults are clean and pushed. In each vault: `git status --short` shows nothing, and `git status -sb` shows no `ahead` marker.
2. If Obsidian is closed, autosync is not running, so do the final check with Obsidian open, or commit by hand.
3. `_Private/` never syncs. If you added anything to it, copy it across deliberately.
4. If you changed anything in `~/Claude/Code/JagWeb/`, commit it there too.

## When you arrive at a machine

1. **Pull before you touch anything.** Both vaults, and expect the other machine's work to be there.
2. Open both vaults in Obsidian. Both windows must stay open, that is what keeps the two REST API servers alive.
3. Confirm autosync is alive, see the checklist below.

## The three things that do not travel, and why

These bit us in July 2026. All three are invisible until something silently stops working.

**1. `.obsidian/plugins/obsidian-git/data.json` in the brain.** The brain's `.gitignore` excludes `.obsidian/plugins/*/data.json`, so the autosync settings can never reach the other machine. After any fresh clone, that file is missing, the plugin falls back to `autoSaveInterval: 0`, and **backups stop with no error shown**. Recreate it by copying the one from `The Jagwar Files`, whose copy *is* tracked.

**2. `.git/info/exclude`.** Local-only by definition, never committed. The Field Guide was relying on it to keep the REST API key out of a public repo. That rule now lives in the tracked `.gitignore` instead. Do not move it back.

**3. Anything under `_Private/`.** By design. Never fix this.

## Autosync health check

Run in each vault:

    git log -1 --format='%h %ad %s' --date=short

Expect a recent `vault backup: <date>` commit. If the newest commit is days old while you have been writing, autosync is dead. Check, in order:

- Is Obsidian actually open on that vault?
- Does `.obsidian/plugins/obsidian-git/data.json` exist, with `autoSaveInterval: 2` and `autoBackupAfterFileChange: true`?
- Is `obsidian-git` in `.obsidian/community-plugins.json`?
- Can git push at all from that vault? `git push` by hand and see what it says.

## Known friction

`.obsidian/community-plugins.json` is tracked in the Field Guide, and the two machines have different plugin sets, so it can flip back and forth between them. Harmless, it just produces the occasional noise commit. It settles once both machines have the same plugins installed. Do not solve it by untracking the file, because a machine that pulls a deleted `community-plugins.json` loads **no** community plugins on next launch, including obsidian-git, which kills autosync silently.
