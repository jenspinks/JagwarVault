---
type: worksheet
citable: false
captured: 2026-06-26
ingest_source: "Exhaustive 13-agent sweep: dissected the 149 known codes for patterns, mined all recoverable Roy English material (lyrics, board hidden-text, Instagram, 2022+2023-24 tweets, Discord, lore/interviews, chain-links), expanded format variants, deduped vs known, ranked. The master brute-force list."
---
# HoM — Master Brute-Force Candidate List

The output of a full multi-agent sweep. **Casing-insensitive** (see below), so each entry's variants are about *content/punctuation*, not capitalization. Companion to [[Sources/Artifacts/HoM - Code Grammar & Guessing Strategy v2 (2026-06-26)]].

> **2026-07-31 method correction.** This worksheet preserves what was actually generated and tested in June, but its body-part “template” is no longer a live generative rule. Direct board crops show a fixed animal index running Swan 1 → Rabbit 10 opposite the Feet 1 → Crown 10 body index; the extant phrases pair complementary addresses. The later exhaustive 5,527-candidate body-part × animal run produced zero new leaves. Read the body syntax below as a historical recognition fingerprint, not permission to create arbitrary combinations.

## 🔑 The unlock mechanic — instant code validation (Jen's HAR, 2026-06-26)
Entering a code calls **`https://us-central1-jagwar-twin-33.cloudfunctions.net/getMintProof?code=<CODE>`** (URL-encoded). The response **instantly tells you if the code is real:**
- `{"success":true,"proof":[]}` → **NOT a valid code** (empty proof). *(e.g. `U ARE THE KEY`, `THE KEYS TO THE VAULT` came back empty.)*
- `{"success":true,"proof":["0x…", …]}` → **VALID code** — a real Merkle proof. ✅ *(e.g. `A BRIDGE BETWEEN WORLDS` returned an 8-hash proof → opened the **Grandma-VI hospital** artifact.)*

Then `updateArtifactsEP` records the unlock in **Firestore** and the room opens — **NO on-chain transaction and NO crown needed** to discover / record / view a room. **Only the final mint-TO-OWN (the NFT) requires the crown.** The on-screen "error" Jen hit was a cosmetic `404` on a malformed background-image URL, not the unlock.
**→ Consequence: every candidate can be validated with a single GET, crown-free — empty vs non-empty `proof` is the answer.** Use the canonical ALL-CAPS form (the field normalizes).

## Answers to the four questions

**① CASING — solved.** The input field **caps-standardizes and stores answers case-insensitively.** Proof: the live gallery renders every code ALL-CAPS (`REBIRTH`, `RA-LINK`) while the Deep Dive board records the *same* codes in Title case (`Rainbow Bridge`, `RA-Link`) — two casings, one answer set. **→ Never spend a guess on a capitalization variant.** (Glyph/cipher codes are the exception — there case is moot anyway; the exact Unicode character is what matters.)

**② DATES & NUMBERS.** **No code in the 149 is a calendar date** — the table's dates are discovery metadata, not answers. So an `October 13`-type clue most likely resolves to **a bare number or a word phrase, NOT a date string.** Numbers are **always digits, never spelled** (`167`, `26`, `0`, `1941`, `51.843` — decimal kept; `0` is the bare digit). A year = the **4 bare digits** only (`1941`). The `WORD + space + number` shape exists (`ALICE 211`, `ARTIFACT 187`). → For an "October 13" candidate, order: (1) bare `13`; (2) `OCTOBER 13`; (3) only as last resort `10-13` / `10/13` / `1013` / with year `101322` / `2022` — **all weighted LOW** (dates aren't an attested shape).

**③ ONE WORD vs SEVERAL — multi-word wins decisively.** Of 145 distinct codes, multi-word = 58%; among *readable-English* codes it's **78% multi-word.** Median ≈ 3 words; the single commonest shape is a **2–3 word phrase.** → **Default to a 2–4 word phrase.** Reserve a bare single word for: proper names (`MARDUK`, `OSCAR`), one-word punchlines (`CAKE`, `ENSO`, `VIBES`), and self-titled artifacts.

**④ CRACKABLE? — mostly no, but ~35–40% is recoverable, and the method is concordance not deduction.** Three braided layers with no surface signal: MEANING (esoteric/Ra/lyric vocabulary), STRUCTURE (self-codes + chain-links ~22%), BOOKKEEPING (cell-codes/numbers/glyphs ~25%, pattern but no meaning). **Mirror/reversal** can derive a code by spelling a title backwards. The animal/body family can be recognized from its fixed paired map, but it is **not generative** beyond the extant concordance. Everything else = **build a concordance of his words and brute-force match** — exactly what this list records.

## The format rules (apply to every guess)
- **Caps don't matter** — type fastest form.
- **Keep:** leading `THE`, literal `&` (no code ever spells "and"), straight ASCII apostrophes, trailing `?`, `_` in filename tokens, hyphens in `-LINK` codes.
- **Drop commas on the first try**, add them only as fallback.
- **Numbers → digits**, exact, no zero-padding/hyphens in cell-IDs (`H1066`, not `H 1066`).
- **Reproduce artifact/code spellings exactly as recorded** (`MAGIK`, `TORTISE`, `CHRITMAS`) first, then the corrected form. This is source-specific: the board/artifact label is **Tortoise**, while Roy's 2023 riddle explicitly instructs *"Tortoise can [be] misspelled as Tortise"* and the unlock code uses `TORTISE`. Preserve the intended code-form without corrupting the source transcription or treating spelling variation as a general generator.

## Roy's code-crafting fingerprints (favor candidates that match)
1. **"X IS Y" flat aphorism** — his single most characteristic shape (`EVERY HUMAN BEING IS A STAR`). **Top-tier when a candidate is one of these.**
2. **Imperative / spiritual instruction** (`LET GO`, `BUILD A BRIDGE`).
3. **Koan / transformation parable** (`THE MONKEY MUST BECOME THE BIRD`).
4. **Pun / wordplay** (`CAKE` = "Caution, All Kings End"; "we love a pun").
5. **Reversal / mirror** — spell the title backwards (`RORRIM EHTNI LIVED`).
6. **Glyph cipher** — copy-paste exact Unicode, never retype.
7. **Self-echo** — the code IS the artifact's own title.
8. **Chain/loop link** — the code is another artifact's name.
9. **Bookkeeping ID** — `{1-2 letters}{3-4 digits}` glued.
10. **Animal/body syntax** `{SIDE} {PART} OF A {ANIMAL}` — a fixed inverse-coordinate family, not an arbitrary template (2026-07-31 correction above).
11. **Verbatim lyrics / tweets** — large slice lifted word-for-word.

---

## TIER 1 — try these first (confirmed maze themes / artifact titles / known-template siblings)
- **`U ARE THE KEY`** (also `YOU ARE THE KEY`, `UR THE KEY`) — Roy verbatim: "u are the key", "the keys to the vault".
- **`THE KEYS TO THE VAULT`** (`KEYS TO THE VAULT`) — Roy verbatim.
- **`A BRIDGE BETWEEN WORLDS`** (`BRIDGE BETWEEN WORLDS`, `I WANT TO BE A BRIDGE BETWEEN WORLDS`) — artifact title → likely self-code.
- **`WHO AM I TO BELIEVE IN?`** (`…IN`) — exact sibling of known `WHO AM I TO KNOW?`.
- **`BUT WHO WAS I TO KNOW?`** (`WHO WAS I TO KNOW?`, no `?`) — past-tense sibling of the known code.
- **`ARE YOU PAYING ATTENTION?`** (`ARE YOU PAYING ATTENTION`, `PAY ATTENTION`) — Attention is a confirmed theme (Marduk, Attention's Gate).
- **`THE PATTERN IS THE PATTERN`** — `THE PATTERN` is a known code; self-equating tautology, very Roy.
- **`YOU'RE THE MIDDLE OF A MAZE`** (`MIDDLE OF A MAZE`) — maze self-ref; ties the MAGIK "middle of a maze".
- **`GET LOST`** — two-word imperative pun (you're in a maze).
- **`HALL OF MIRRORS`** (`IT'S A HALL OF MIRRORS`) — the maze names itself.
- **`WAKE UP FROM THE DREAM`** (`WAKE UP`) — wake/dream confirmed (`JUST WOKE UP`; the `∂®´åµ`=dream glyph).
- **`DO YOU KNOW WHO YOU ARE?`** (`…ARE`) — on the board; identity-question family.

## TIER 2 — strong register match ("X IS Y" / imperative / lore-verbatim)
- **`LOVE IS GRAVITY`** — textbook two-noun equation.
- **`THERE IS ONLY ONE MIND`** (`ONE MIND`) — confirmed Discord theme.
- **`EVERYTHING IS MIND`** — sibling of known `THE ALL IS MIND`.
- **`LUCIUS IS THE MIND`** — Roy verbatim; central character.
- **`DEATH IS JUST A DOORWAY`** (`DEATH IS A DOORWAY`).
- **`WELCOME TO THE CIRCUS`** · **`STEP RIGHT UP`** — Circus framework.
- **`WE ARE THE STORIES WE TELL`** (`THE STORIES WE TELL`) — the 33 thesis.
- **`THE WORLD BEHIND THE WORLD`** — mirrors known `THERE ARE THINGS BEHIND THINGS`.
- **`HEAD ABOVE MY HEART`** · **`THE BRAIN THINKS BUT THE HEART KNOWS`** · **`THE HEART'S SMARTER ANYWAY`** — Heart/Mind split.
- **`BREAK THE SIMULATION`** — imperative + simulation theme.
- **`EVERYTHING YOU IMAGINE IS REAL`** · **`IMAGINATION IS THE LANGUAGE OF GOD`** — imagination (cf. `IMAGINE A WORLD`).
- **`ALL THE ANSWERS ARE WITHIN YOU`** · **`THE KINGDOM IS WITHIN MAN`** — within-theme.
- **`YOUR WEIRDNESS IS THE SUNSHINE`** — weirdness motif.
- **`EVERYTHING YOU DO IS MAGIK`** (then `MAGIC`).
- **`YOU ARE NOT YOURSELF`** · **`YOU'RE NOT A REAL BOY`** — clone/identity theme.
- **`AS ABOVE SO BELOW`** · **`THE LADDER OF DIVINE ASCENT`** · **`SUN OF GOD`** (then `SON OF GOD`) · **`LET THEM EAT CAKE`** · **`GUARDIAN AT THE GATE`** — on or directly represented by the board; Hermetic/Egyptian/gate clusters. **`JACOB'S LADDER`** was also tested in this historical run, but it came from the artwork's now-corrected misidentification and the separate Earth→Heaven hopscotch resonance; it is not literal text established by that pasted icon.
- **`ARTIFACTS ARE POSSESSIONS`** — Roy *repeated* it ("Remember, Artifacts are possessions") = deliberate flag.
- **`I'M JUST A MIRROR`** · **`SHE'S A REFLECTION`** — mirror self-identity.
- **`I KNOW NOTHING`** · **`EVERYTHING COMES FROM NOTHING`** — nothing/emptiness koan.
- **`THE GREAT DESIGN`** · **`THE GREAT ALARM CLOCK`** — the "THE GREAT ___" family.
- **`SIDE QUEST`** (`SIDEQUEST`) · **`I'M THE FINAL BOSS`** — game theme.
- **`SOMEBODY'S WATCHING ME`** — surveillance/watching-eyes.
- **`WE'RE ALL HOLOGRAMS`** — simulation/digital-double.

## TIER 3 — thematic, worth grinding
`THE WHOLE WORLD IS WATCHING YOU BEHIND YOUR SCREEN` · `STRANGERS EVERYWHERE WHISPERING WAKE UP` · `TO CHANGE THE WORLD ONE MUST FIRST CHANGE THE CONCEPT OF THE WORLD` · `YOU MUST BE IT` · `WHAT TO WEAR, WHAT TO LIKE, HOW TO BE` · `LOVE IS THE REALIZATION OF THE IMPOSSIBLE` · `EVERYTHING IS BECOMING` · `THE FORGETTING IS WHAT MAKES IT FUN` · `USE SMALL WORDS` · `DO NUMBERS REALLY EXIST?` · `WHAT MAKES A STAR?` · `YOU CAN'T MAKE A MISTAKE` · `YOU'RE RIGHT WHERE YOU'RE SUPPOSED TO BE` · `FROM OUT OF THE DARKNESS, LIGHT` · `DUALITY OF MAN` · `WE ARE DROPS OF LIGHT` · `EVERYTHING IS MADE OF TRIANGLES` · `THE MOON IS A FLASHING WOMAN` · `A CRAFTY RABBIT HAS THREE BURROWS` · `KNOWLEDGE DIVIDES WISDOM UNITES` · `LIFE IS NOT BIRTH BUT AWARENESS` · `THE GREATEST SCIENTISTS ARE POETS` · `JESUS WAS A CODER` · `GANESHA WAS AN ELEPHANT` · `MATTHEW WAS AN EAGLE` · `PAY ATTENTION SOMETHING IS OUT OF SEQUENCE` · `WE SPEAK OUR OWN NAMES` · `NO THING EVER CREATES ANOTHER THING` · `WHAT IS THE POINT THERE IS NO POINT` · `DO NOT BE DECEIVED BY FORMS` · `RELIGION WAS CREATED TO PERCEIVE THE IMPERCEPTIBLE WORLDS` · `YOU ALREADY KNOW THE GAME` · `THE CODE WRITTEN IN CODE` · `THERE IS A BACKDOOR TO THE NEXT REALM` · `ONLY THE CIRCLE KNOWS ABOUT THE CIRCLE` · `CIRCLES WITHIN CIRCLES` · `THE POINT IS THE CIRCLE` · `CIRCLES NEVER END` · `WHAT WE FIGHT WE BECOME` · `LOYAL SERVANT OF THE REALM` · `GUARDIANS OF THE REALM` · `GOD IS NOT THE WIND BUT GOD IS THE STORM` · `WHERE THERE IS SELF THERE IS NO-TRUTH` · `RELIGION IS THE SMILE ON A DOG` · `IT'S TIME TO TURN EVERYTHING INSIDE OUT` · `THINGS TEND TO FLIP WHEN INSIDE THE HALL OF MIRRORS` · `WE LOVE A PUN` · `I AM RAINBOW BRITE` · `INTUITION IS GENETIC ENCODING` · `WE KIND OF EXIST HERE TO BREAK THE RULES` · `HIDING IN PLAIN SIGHT` · `ONE MIND TOGETHER DREAMING THIS DREAM` · `EVERYTHING'S UPSIDE DOWN` · `A LASSO ROUND THE MOON` (`AROUND`) · `FROM ONE AND THROUGH ELEVEN` · `ONE BECOME TWO` · `ALL WE ARE IS HUMAN` · `TRUTH IS LIKE A SPHERE` · `THE SHADOW HAS ROOTS THAT GO ALL THE WAY TO HELL` · `TWISTED UP AND BACKWARDS AND UPSIDE DOWN` · `INFINITY BEAM OF LIGHT` · `THE HAPPY FACE EXPERIMENT` · `PUT ON A HAPPY FACE` · `ALL REALITY IS, IS THAT IT IS` · `SOUL CALIBRATOR` · `SOUL iOS` · `IMAGINE A WORLD FULL OF WONDER` · `ANOTHER WAY TO HEAVEN` (`II`, `2`) · `THE CIRCLE WILL GROW` · `WHAT A GREAT TIME TO BE HUMAN` · `ONE MUST BE SOMEONE TO EXIST` · `PERSPECTIVE IS A WATER DROPLET` · `TO FIND TRUTH WE MUST PLUNGE INTO ITS BOTTOMLESS WELL` · `MODERN ARCHEOLOGY` · `PURPOSE = FORM` · `I = YOD` (`YOD`) · `CAUSE/EFFECT` · `THE LAW` · `WAYS TO UNWIND` · `ARE YOU CONTENT?` · `ALIEN EXPERIMENT` · `THE FALL INTO MATTER` · `EL ROI` · `CYBERNETICS` · `PORTAL` · `CHRIST` · `3233` · `GENESIS` · `WE'RE ALL THE SAME IN EVERY NATION` · `IT ALL COMES DOWN TO YOU` · `NEVER GONNA DIE` · `JAGUAR SWAGUAR` (`JAGWAR SWAGWAR`) · `I FEEL LIKE DUMBLEDORE` · `BURN THE WITCH` · `EYES WIDE SHUT` · `MACROECONOMIC SCALE` · `IT'S VERY INCONVENIENT TO LIVE LIFE AWAKE` · `ONCE YOU'RE AWAKE YOU CAN'T GO BACK TO SLEEP` · `ROY ENGLISH`

## DO NOT GUESS — these are already known codes (the sweep flagged them)
`REALITY IS THE CHILD OF ILLUSION` · `INSIDE OF THE INSIDE` · `CAUTION ALL KINGS END` (answer = `CAKE`) · `DEATH OF MY GENERATION` · `EVERYBODY'S GOING TO SPACE NOW` · `R100` · `THE GAME IS TO REVEAL THE GAME` · `WHO IS INHABITING YOU` · `EVERYONE LOVES THE INTERNET` · `PLEIADES HONEY BEE` (already opened RAphael) · `LOGOS` (artifact title, likely taken).

## Source
- Full ranked result + per-candidate rationale: workflow `wf_573b267c-c62` output. Known-code corpus: [[Sources/Artifacts/Hall of Mirrors - Artifact Gallery (catalog) 2026-06-25]] + [[Sources/Artifacts/HoM - Deep Dive board (room #→ name → code) 2026-06-26]].
