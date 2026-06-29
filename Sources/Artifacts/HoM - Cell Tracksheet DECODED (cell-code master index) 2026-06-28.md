---
type: artifact
status: stable
created: 2026-06-28
purpose: "Decode of the wallet-gated 'Hall of Mirrors Cell Tracksheet' (Google Sheet 1193kgL…, created 2022-08-23, modified 2022-10-20 — inside the live campaign window). Resolves the long-open 'cell-codes = board coordinates' theory: the Tracksheet IS the master index of which 'I'm 33' board cells are codes. Decode rule proven; but the layer it maps is already fully cracked (0 open-room hits)."
---
# HoM — The Cell Tracksheet, decoded (the cell-code master index)

**Source:** wallet-gated Google Sheet **"Hall of Mirrors Cell Tracksheet"** (`docs.google.com/spreadsheets/d/1193kgL0wOCOzb2m6b1aF5Nvgj8n5bXVYs-DHQG4SeIM`, created **2022-08-23**, last-mod **2022-10-20** — squarely in the HoM campaign window). Jen exported it as xlsx (the board's own download is restricted, but this sheet wasn't) → saved `Sources/Artifacts/Data/HoM Cell Tracksheet (2022-08-23) source.xlsx` + parsed cells `…/HoM Cell Tracksheet - parsed cells 2026-06-28.json`.

## What it is
A pure **No/Yes coordinate grid**, 26 columns × 1065 rows: **1,624 cells = "No"** (the default), **20 cells = "1" (YES)**, **1 = "YES"** (the legend marker at C33), **14 = "0"** (explicit negatives/decoys). Columns are all headered **"No"** (rows 1–2); the signal is entirely in the 20 YES marks.

## ★ The decode (rule PROVEN)
**A YES at spreadsheet cell `(col C, row R)` → the unlock code is the cell-code `{letter(C−1)}{R}`** (the sheet has a one-column leading offset). This is the **cell-code = board-coordinate** mechanic, finally pinned. Proof — 15 of the YES cells map *exactly* to long-known, **GCS-confirmed-valid** catalog cell-codes:

| Tracksheet YES | → code (col−1) | valid? |
|---|---|---|
| W222 | **V222** | ✓ |
| H228 | **G228** | ✓ |
| G316 | **F316** | ✓ |
| K403 | **J403** | ✓ |
| B565 | **A565** | ✓ |
| E637 | **D637** | ✓ |
| Y672 | **X672** | ✓ |
| M737 | **L737** | ✓ |
| B749 | **A749** | ✓ |
| K763 + R763 | **J763 + Q763** | ✓ ✓ (multi-YES row = a code *pair*) |
| D876 + X876 | **C876 + W876** | ✓ ✓ (multi-YES row) |
| C1034 / C1035 | **B1034 / B1035** | ✓ ✓ |
| C33 (the "YES" legend) | **C33** | ✓ (self-referential legend) |

## ★ But it cracks NOTHING open
- **All 21 YES coordinates, every form** (raw, col−1, col−2…col+1, row-only) → checked against the **42 open Merkle leaves** (offline, all room types) **+ the live oracle** → **0 matches.** The cell-code layer this sheet indexes is **already entirely known/minted.**
- **5 YES cells don't resolve to any valid code:** `H70, D844, W1042, A1060, G1065` (→ G70/C844/V1042/F1065, all invalid; A1060 → col 0). Possible reads: decoys, empty board cells, or a code-form other than the coordinate. **Note the "0" decoys cluster around them** — a column of `0` at **H61–H69** immediately above the H70 YES, and bottom-row `0`s (X1039, W1041, T1045, C1047, S1063). The H-column 0→1 pattern hints these may be a *different* tracking axis, not coordinates.
- **✅ The 5 unexplained cells were READ (Jen screenshots, 2026-06-28) → 0 new:** `G70` = the geometric *poly1* cone diagram (no code); `A1060` = the "Statue of Roy" museum photo (no code); `V1042` = "5+3=8" name-numerology (no code); `G1065` = "alice 211 song mirror" / Carroll's *Through the Looking-Glass* p.211 → yields **`alice 211`** + **`A-Sitting on a Gate`** (both valid codes — confirming board-content-as-code — but **already minted**, not open). So the YES cells that *do* hold phrases hold **already-cracked** ones; the rest are diagrams/notes. **The Tracksheet is fully closed: 0 open rooms, read as coordinates OR as board phrases.**

## Verdict
The Cell Tracksheet **answers "YES → which cell" definitively** (it's the cell-code index) and **closes the coordinate-theory question** — but the layer is a solved one. It does **not** contain the open frontier. This corroborates the standing conclusion: the **~35 still-open rooms need non-board / external surfaces** (mint-time→Julian-date via the `1iZdcy…` WHO/WHEN log, lost 2022 Spaces/TikTok lives), not more board/coordinate work.

Related: [[Sources/Artifacts/HoM - Merkle coverage proof + 4 known-code recoveries (2026-06-28)]] · [[Sources/Artifacts/Roy - I'm 33 this year (spreadsheet)]] · [[_System/HoM - Session Handoff & Index]] · [[_System/HoM - Finds Ledger (all cracks + status)]].
