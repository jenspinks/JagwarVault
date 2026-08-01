"""Crack attempt on HoM open leaf e163466b (audio, 1:47).

Content identified 2026-08-01: Roy speaking about water droplets going downstream,
then singing a quatrain recombined from Hannah Hurnard's "Water Song"
(_Hinds' Feet on High Places_, 1955).

Leaf formula (established, offline-verifiable): leaf = keccak256(lowercase(code)).
Target: 0xe163466b4452ac1ef0ede8ddf1e2d0f1b3586c338781430def634c8ee73ec567
Control: keccak256("a bullet in her genes") must equal 0x442795f9f776...
"""
import re, itertools, json
from Crypto.Hash import keccak

TARGET = "0xe163466b4452ac1ef0ede8ddf1e2d0f1b3586c338781430def634c8ee73ec567"
CONTROL_IN = "a bullet in her genes"
CONTROL_OUT = "0x442795f9f776aa7cc558db168eab94beaadf5b731f5fbdc21c184825302993c8"


def leaf(s):
    h = keccak.new(digest_bits=256)
    h.update(s.lower().encode())
    return "0x" + h.hexdigest()


assert leaf(CONTROL_IN) == CONTROL_OUT, "leaf formula control FAILED"
print(f"control OK: keccak('{CONTROL_IN}') = {CONTROL_OUT[:12]}...\n")

# ---------------------------------------------------------------- seed phrases
# A) Hurnard's Water Song, verbatim (every line + every couplet + the whole)
HURNARD_LINES = [
    "Come, oh come! let us away",
    "Lower, lower every day",
    "Oh, what joy it is to race",
    "Down to find the lowest place",
    "This the dearest law we know",
    "It is happy to go low",
    "Sweetest urge and sweetest will",
    "Let us go down lower still",
    "Hear the summons night and day",
    "Calling us to come away",
    "From the heights we leap and flow",
    "To the valleys down below",
    "Always answering to the call",
    "To the lowest place of all",
    "Sweetest urge and sweetest pain",
    "To go low and rise again",
]

# B) Roy's SUNG quatrain as heard (machine, pending ear) + its plausible variants
ROY_SUNG = [
    "From the heights we leap and flow",
    "To the valley far below",
    "Sweetest urge and sweetest will",
    "Sweetest earth and sweetest will",
    "Sweetest earth and sweetest hill",
    "To go lower, lower still",
    "lower, lower still",
    "go lower, lower still",
    "lower lower still",
]

# C) Roy's SPOKEN framing + titles/labels for the source
SPOKEN = [
    "water droplet", "water droplets", "the water song", "water song",
    "the song of the waters", "song of the waters",
    "downstream", "going downstream", "the eddies",
    "they're going lower", "they are going lower", "going lower",
    "this beautiful ocean", "beautiful ocean", "the ocean",
    "hinds feet on high places", "hinds' feet on high places",
    "hinds feet", "high places", "the high places",
    "much afraid", "much-afraid", "the shepherd",
    "the lowest place", "the lowest place of all", "lowest place",
    "it is happy to go low", "happy to go low",
    "the dearest law", "this the dearest law we know",
    "melody just came to me", "i didn't have to work at it",
    "i love that", "that's so good",
]

seeds = set()
for group in (HURNARD_LINES, ROY_SUNG, SPOKEN):
    seeds |= set(group)

# couplets + the full song (Hurnard) — codes in this ARG are sometimes multi-line
for i in range(len(HURNARD_LINES) - 1):
    seeds.add(HURNARD_LINES[i] + " " + HURNARD_LINES[i + 1])
seeds.add(" ".join(HURNARD_LINES))
# Roy's recombined quatrain, as a whole and pairwise
seeds.add("From the heights we leap and flow To the valley far below "
          "Sweetest urge and sweetest will To go lower, lower still")
seeds.add("From the heights we leap and flow To the valleys down below "
          "Sweetest urge and sweetest will Let us go down lower still")

# ---------------------------------------------------------------- variant blowup
SEPS = [" ", "_", "-", "", ".", "+", "&"]


def variants(seed):
    seed = seed.strip()
    out = set()
    base = {seed, seed.replace("’", "'"), seed.replace("'", "’")}
    for b in list(base):
        s = b.rstrip("?!.;,")
        base |= {s, s + "?", s + "!", s + "."}
        # drop internal punctuation entirely (commas/apostrophes)
        base.add(re.sub(r"[,!?;:]", "", s))
        base.add(re.sub(r"[,!?;:']", "", s))
    out |= base
    for b in list(base):
        words = [w for w in re.split(r"[\s_\-]+", b) if w]
        if len(words) >= 2:
            for sep in SEPS:
                out.add(sep.join(words))
            # leading-article drop
            if words[0].lower() in ("the", "a", "an", "to", "and"):
                out.add(" ".join(words[1:]))
    return {v for v in out if v}


cands = set()
for s in seeds:
    cands |= variants(s)

print(f"seeds: {len(seeds)}   candidates after variant explosion: {len(cands)}")

hits = [c for c in cands if leaf(c) == TARGET]
print(f"\n{'*** HIT ***' if hits else 'no hit'}")
for h in hits:
    print(f"  CODE = {h!r}   -> {leaf(h)}")

if not hits:
    print("\nNearest-miss check is meaningless for a hash; recording as a bounded")
    print("negative: these %d exact strings are ELIMINATED for e163466b." % len(cands))
    json.dump(sorted(cands), open("/private/tmp/claude-501/-Users-jenniferspinks-Claude-Code-JagWeb/"
                                  "8d6343d3-88c0-4c39-b11f-08c42878f4ff/scratchpad/"
                                  "e163466b_eliminated.json", "w"), indent=0)
