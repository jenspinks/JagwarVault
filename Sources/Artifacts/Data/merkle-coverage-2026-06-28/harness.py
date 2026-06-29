"""Authoritative offline Merkle validator + deterministic variant exploder.
Leaf formula (per HoM Merkle open-leaf targets JSON): keccak256(lowercase(code)).
Membership test: leaf in still_open_leaf_hashes (42). Case is a NO-OP (formula lowercases)."""
import json, re, itertools
from Crypto.Hash import keccak

OPEN = set(json.load(open('/private/tmp/merkle/open_leaves.json')))

def leaf(s: str) -> str:
    h = keccak.new(digest_bits=256); h.update(s.lower().encode()); return '0x'+h.hexdigest()

def is_open(s: str) -> bool:
    return leaf(s) in OPEN

# ---- deterministic variant explosion for a seed phrase ----
SEPARATORS = [' ', '_', '-', '', '.', '/', '+', '&', '#', "'", ':', ',']
TRANSPORT  = ['%20', '%23']   # url-encoded forms (expected-miss; included for proof of coverage)

def variants(seed: str):
    seed = seed.strip()
    if not seed: return set()
    out = set()
    # word split on whitespace/_/-
    words = re.split(r'[\s_\-]+', seed)
    words = [w for w in words if w]
    # 1) the raw seed as-is + punctuation toggles
    base_forms = {seed}
    # apostrophe normalize both ways
    base_forms |= {seed.replace('’',"'"), seed.replace("'",'’')}
    # trailing punctuation toggles
    stripped = seed.rstrip('?!.;,')
    for b in list(base_forms):
        s2 = b.rstrip('?!.;,')
        base_forms |= {s2, s2+'?', s2+'!', s2+'.'}
    out |= base_forms
    # 2) separator joins of the word tokens (multiword only)
    if len(words) >= 2:
        for sep in SEPARATORS:
            out.add(sep.join(words))
        # url-encoded space/# transport forms
        out.add('%20'.join(words))
        # 's possessive collapse forms already covered by tokens; add concat
        out.add(''.join(words))
    # 3) single-token: also try with a trailing '#'->'sharp' style handled by caller seeds
    return {v for v in out if v}

def explode_and_test(seeds):
    """seeds: iterable of strings. Returns (rows, hits). rows=[(candidate,leaf,is_open)]."""
    seen=set(); rows=[]; hits=[]
    for s in seeds:
        for v in variants(s):
            key=v.lower()
            if key in seen: continue
            seen.add(key)
            lf=leaf(v); op=lf in OPEN
            rows.append((v,lf,op))
            if op: hits.append((v,lf))
    return rows, hits

if __name__=='__main__':
    import sys
    # self-test: explode a known code and a control
    rows,hits = explode_and_test(['gnothi seauton','grey in a#','tear the roof off my house'])
    print(f"self-test: {len(rows)} variants, {len(hits)} open-hits (expect 0 — gnothi already cracked)")
    print("sample variants of 'grey in a#':", sorted(variants('grey in a#'))[:12])
