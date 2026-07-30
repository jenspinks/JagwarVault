"""Offline HoM Merkle validator, rebuilt 2026-07-29 for the unread-leaf reading pass.
Leaf formula (authoritative, per the open-leaf targets JSON): keccak256(lowercase(code)).
Membership: leaf in still_open_leaf_hashes (42 open). Case is a no-op (formula lowercases).

Usage:
  python3 hom_validate.py "a candidate string" ["another" ...]
  python3 hom_validate.py --file candidates.txt
Prints only HITS plus a coverage tally, so a long run stays readable.
"""
import json, re, sys, itertools
from Crypto.Hash import keccak

VAULT = "/Users/jenniferspinks/Vaults/JagwarTwin"
TARGETS = f"{VAULT}/Sources/Artifacts/Data/HoM Merkle open-leaf targets (42 uncracked rooms) 2026-06-27.json"

_d = json.load(open(TARGETS))
OPEN = set(h.lower() for h in _d["still_open_leaf_hashes"])
ROOT = _d["merkle_root"]


def leaf(s: str) -> str:
    h = keccak.new(digest_bits=256)
    h.update(s.lower().encode())
    return "0x" + h.hexdigest()


def is_open(s: str) -> bool:
    return leaf(s) in OPEN


SEPARATORS = [" ", "_", "-", "", ".", "/", "+", "&", ":", ",", "'"]


def variants(seed: str):
    """Deterministic expansion from a VISIBLE string only. No invented vocabulary."""
    seed = seed.strip()
    if not seed:
        return set()
    out = set()
    base = {seed}
    # curly/straight apostrophe both ways
    base |= {seed.replace("’", "'"), seed.replace("'", "’")}
    # trailing punctuation toggles
    for b in list(base):
        s2 = b.rstrip("?!.;,…")
        base |= {s2, s2 + "?", s2 + "!", s2 + "."}
    out |= base
    # article strip
    for b in list(base):
        out.add(re.sub(r"^(the|a|an)\s+", "", b, flags=re.I))
    # digits-only form (the 3132514932 shape)
    digits = re.sub(r"\D", "", seed)
    if len(digits) >= 4:
        out.add(digits)
    # separator joins
    words = [w for w in re.split(r"[\s_\-]+", seed) if w]
    if len(words) >= 2:
        for sep in SEPARATORS:
            out.add(sep.join(words))
    # strip all non-alnum
    out.add(re.sub(r"[^A-Za-z0-9]", "", seed))
    out.add(re.sub(r"[^A-Za-z0-9 ]", "", seed))
    return {v for v in out if v.strip()}


def run(seeds, label=""):
    tested, hits = set(), []
    for s in seeds:
        for v in variants(s):
            if v in tested:
                continue
            tested.add(v)
            if is_open(v):
                hits.append(v)
    print(f"{label}tested {len(tested)} distinct variants from {len(seeds)} seeds "
          f"vs {len(OPEN)} open leaves")
    for h in hits:
        print(f"  ★ HIT: {h!r}  ->  {leaf(h)}")
    if not hits:
        print("  no hits")
    return hits


if __name__ == "__main__":
    args = sys.argv[1:]
    if args and args[0] == "--file":
        seeds = [l.rstrip("\n") for l in open(args[1]) if l.strip() and not l.startswith("#")]
    else:
        seeds = args
    if not seeds:
        print(f"root {ROOT}\nopen leaves: {len(OPEN)}\nusage: hom_validate.py \"string\" ...")
        sys.exit(0)
    run(seeds)
