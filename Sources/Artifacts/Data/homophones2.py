"""Homophone audit v2 — tightened after v1 returned only function-word noise.

Three corrections to v1, each of which mattered:
  1. SAME LINE, not same file. The genes/jeans finding is decisive because both
     spellings sit in ONE sung line. File-level co-presence is nearly meaningless
     in a 47-song corpus.
  2. Function words excluded. know/no, your/you're, their/there, for/four and
     eye/i topped v1 purely on frequency. A pair whose members are among the
     commonest words in English cannot be evidence of anything.
  3. VERBATIM TEXT ONLY. v1 swept all of Sources/, but Sources/Artifacts/*.md
     are mostly OUR analytical write-ups, not Roy's text — sweeping them scores
     the lens off our own prose, exactly what the Framework Registry's
     anti-contamination clause forbids. v2 reads Sources/Lyrics/ (verbatim) plus
     ONLY fenced code blocks and blockquotes elsewhere (i.e. quoted source text).

Limits, stated: a fixed dictionary cannot find a pair it does not list, and
co-occurrence is opportunity, never intent. Every hit below is a candidate for
a human read, not a finding.
"""
import os, re, glob, json
from collections import defaultdict

ROOT = "/Users/jenniferspinks/Vaults/JagwarTwin/Sources"

STOP = set("""a an the and or but if then than so as at by for from in into of on to with
know no not none known new knew your youre you our hour there their theyre they them
here hear be been being is are was were am do does did have has had will would can could
i eye aye me my mine we us he she it its his her him one won some sum all any each
right write who whom whose what when where why how this that these those too two to
for four fore way ways weigh see sea so sew sow oh owe wood would while wont want
made maid make made say said just like get got go going gone come came out up down
""".split())

PAIRS = [
    ("sun", "son"), ("suns", "sons"), ("prophets", "profits"), ("prophet", "profit"),
    ("genes", "jeans"), ("mourning", "morning"), ("morn", "mourn"),
    ("father", "farther"), ("rain", "reign"), ("rain", "rein"), ("reign", "rein"),
    ("angel", "angle"), ("angels", "angles"), ("soul", "sole"), ("souls", "soles"),
    ("holy", "wholly"), ("whole", "hole"), ("heal", "heel"), ("heals", "heels"),
    ("altar", "alter"), ("aloud", "allowed"), ("bare", "bear"), ("bury", "berry"),
    ("cell", "sell"), ("scent", "sent"), ("cite", "sight"), ("sight", "site"),
    ("chord", "cord"), ("close", "clothes"), ("creak", "creek"),
    ("dear", "deer"), ("die", "dye"), ("dying", "dyeing"), ("earn", "urn"),
    ("fair", "fare"), ("faun", "fawn"), ("feat", "feet"), ("flee", "flea"),
    ("flour", "flower"), ("gate", "gait"), ("great", "grate"), ("groan", "grown"),
    ("hail", "hale"), ("hair", "hare"), ("hall", "haul"), ("heard", "herd"),
    ("heart", "hart"), ("him", "hymn"), ("hymn", "hem"), ("hoarse", "horse"),
    ("idle", "idol"), ("knight", "night"), ("knot", "not"), ("lead", "led"),
    ("lessen", "lesson"), ("liar", "lyre"), ("lie", "lye"), ("mail", "male"),
    ("main", "mane"), ("mask", "masque"), ("meat", "meet"), ("might", "mite"),
    ("mind", "mined"), ("miner", "minor"), ("missed", "mist"), ("moan", "mown"),
    ("muse", "mews"), ("naval", "navel"), ("need", "knead"), ("or", "oar"),
    ("or", "ore"), ("pain", "pane"), ("pair", "pear"), ("passed", "past"),
    ("peace", "piece"), ("peak", "peek"), ("plain", "plane"), ("pole", "poll"),
    ("poor", "pour"), ("pour", "pore"), ("praise", "prays"), ("prays", "preys"),
    ("pray", "prey"), ("presence", "presents"), ("raise", "rays"), ("rays", "raze"),
    ("read", "reed"), ("real", "reel"), ("ring", "wring"), ("road", "rode"),
    ("role", "roll"), ("root", "route"), ("rose", "rows"), ("sail", "sale"),
    ("scene", "seen"), ("seam", "seem"), ("seas", "sees"), ("sees", "seize"),
    ("shone", "shown"), ("sighs", "size"), ("soar", "sore"), ("stair", "stare"),
    ("steal", "steel"), ("suite", "sweet"), ("tail", "tale"), ("taut", "taught"),
    ("tear", "tier"), ("threw", "through"), ("throne", "thrown"),
    ("thyme", "time"), ("tide", "tied"), ("told", "tolled"), ("vain", "vein"),
    ("vain", "vane"), ("wail", "whale"), ("waist", "waste"), ("wait", "weight"),
    ("war", "wore"), ("weak", "week"), ("weather", "whether"), ("which", "witch"),
    ("whine", "wine"), ("ewe", "yew"), ("cross", "crows"), ("sword", "soared"),
    ("bored", "board"), ("veil", "vale"), ("bell", "belle"), ("berth", "birth"),
    ("bridal", "bridle"), ("council", "counsel"), ("desert", "dessert"),
    ("fowl", "foul"), ("higher", "hire"), ("hoard", "horde"), ("lain", "lane"),
    ("loan", "lone"), ("marshal", "martial"), ("medal", "meddle"),
    ("rap", "wrap"), ("rest", "wrest"), ("rung", "wrung"), ("scull", "skull"),
    ("sleight", "slight"), ("symbol", "cymbal"), ("teem", "team"),
    ("troop", "troupe"), ("vice", "vise"), ("whirled", "world"), ("yoke", "yolk"),
    ("mettle", "metal"), ("metal", "medal"), ("choir", "quire"),
    ("bare", "bear"), ("boar", "bore"), ("wade", "weighed"), ("maize", "maze"),
    ("mall", "maul"), ("moose", "mousse"), ("dual", "duel"), ("cite", "site"),
]
PAIRS = [p for p in PAIRS if not (set(p) & STOP)]


def verbatim_text(path, raw):
    """Return only text we can treat as SOURCE, not our commentary."""
    rel = os.path.relpath(path, ROOT)
    if rel.split(os.sep)[0] == "Lyrics":
        return re.sub(r"^---.*?\n---\n", "", raw, flags=re.S)
    # elsewhere: fenced blocks + blockquotes only
    fenced = "\n".join(re.findall(r"```.*?\n(.*?)```", raw, flags=re.S))
    quoted = "\n".join(re.findall(r"^>\s?(.*)$", raw, flags=re.M))
    return fenced + "\n" + quoted


hits = defaultdict(list)
nfiles = 0
for p in glob.glob(f"{ROOT}/**/*.md", recursive=True):
    try:
        raw = open(p, encoding="utf-8", errors="ignore").read()
    except Exception:
        continue
    text = verbatim_text(p, raw)
    if not text.strip():
        continue
    nfiles += 1
    for line in text.splitlines():
        low = line.lower()
        words = set(re.findall(r"[a-z']+", low))
        for pair in PAIRS:
            present = [m for m in pair if m in words]
            if len(present) >= 2:
                hits[pair].append((os.path.relpath(p, ROOT), line.strip()[:120], present))

print(f"verbatim corpus: {nfiles} files with quotable text\n")
print("=" * 100)
print("SAME-LINE HOMOPHONE CO-OCCURRENCE  (the genes/jeans standard)")
print("=" * 100)
if not hits:
    print("  (none)")
for pair, insts in sorted(hits.items(), key=lambda kv: -len(kv[1])):
    print(f"\n★ {' / '.join(pair)}  — {len(insts)} line(s)")
    seen = set()
    for rel, line, present in insts:
        k = (rel, line)
        if k in seen:
            continue
        seen.add(k)
        print(f"    {rel}")
        print(f"      “{line}”   [{'+'.join(present)}]")

json.dump({" / ".join(k): v for k, v in hits.items()},
          open("/private/tmp/claude-501/-Users-jenniferspinks-Claude-Code-JagWeb/"
               "8d6343d3-88c0-4c39-b11f-08c42878f4ff/scratchpad/homophones2.json", "w"), indent=1)
print(f"\n\npairs tested: {len(PAIRS)}   pairs with a same-line hit: {len(hits)}")
