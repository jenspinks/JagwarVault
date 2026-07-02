#!/usr/bin/env python3
"""Regenerate _System/entity-map.md — a machine-readable PATH TABLE that maps
every canonical Ontology ID to its resolved files across all vault layers
(Brain / Sources/Lyrics / Essays / Sources/Credits), plus per-song "packets."

    python3 _System/gen-entity-map.py        # run from anywhere

Why this exists: the curated [[index]] explains *meaning*; [[file-map]] lists
*what exists*; the [[Ontology]] defines *IDs*. None of them gives a guaranteed
ID -> file path for every entity, so an AI must search/guess (and guessing is
unsafe: Brain song pages are album-NESTED, display-name casing varies —
"BALLERINA BOY" vs "Ballerina Boy" — and Essays live in two trees). This map
removes that guess: open the row, fetch the files, done.

SNAPSHOT — regenerate after adding/moving/renaming files. grep against the live
tree is always authoritative if a row looks stale (see the header it writes).
"""
import os, re, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---- helpers ---------------------------------------------------------------
def norm(s):
    """normalize a display name / filename to a comparison key."""
    return re.sub(r'[^a-z0-9]', '', (s or '').lower())

def read_frontmatter(path):
    """return dict of the top-of-file YAML-ish frontmatter (flat scalars only)."""
    fm = {}
    try:
        with open(path, encoding='utf-8') as fh:
            txt = fh.read()
    except Exception:
        return fm
    m = re.match(r'^---\n(.*?)\n---', txt, re.S)
    if not m:
        return fm
    for line in m.group(1).splitlines():
        mm = re.match(r'^([A-Za-z_]+):\s*(.*)$', line)
        if mm:
            fm[mm.group(1)] = mm.group(2).strip()
    return fm

# ---- 1. index every .md by its frontmatter id (for id-exact resolution) -----
SKIP_TOP = {'.git', '_legacy', '_Private'}
id_to_paths = {}          # ONTOLOGY-ID -> [relpath, ...]
all_md = []               # (relpath, normkey, frontmatter)
for dp, dn, fn in os.walk(ROOT):
    dn[:] = [d for d in dn if not d.startswith('.') and d not in SKIP_TOP]
    for f in fn:
        if not f.endswith('.md'):
            continue
        ap = os.path.join(dp, f)
        rel = os.path.relpath(ap, ROOT)
        fm = read_frontmatter(ap)
        all_md.append((rel, norm(f[:-3]), fm))
        if fm.get('id'):
            id_to_paths.setdefault(fm['id'], []).append(rel)

def under(rel, *prefixes):
    return any(rel.replace('\\', '/').startswith(p) for p in prefixes)

def find(eid, name, *prefixes, want_status=False):
    """resolve an entity's file under given folder prefixes: id-match first,
    then normalized-name match. returns (relpath_or_None, status_or_None)."""
    nk = norm(name)
    # id-exact within the prefix(es)
    if eid in id_to_paths:
        for rel in id_to_paths[eid]:
            if under(rel, *prefixes):
                st = next((fm.get('status') for r, _, fm in all_md if r == rel), None)
                return rel, st
    # normalized-name within the prefix(es)
    for rel, k, fm in all_md:
        if k == nk and under(rel, *prefixes):
            return rel, fm.get('status')
    # normalized frontmatter-alias within the prefix(es) — a renamed file
    # (e.g. the link-hostile '#1 Champion…' → 'No. 1 Champion…', 2026-07-01)
    # keeps its display name reachable via `aliases:`.
    for rel, k, fm in all_md:
        raw = fm.get('aliases') or ''
        # read_frontmatter is flat-scalar: an inline list arrives as its raw
        # text — pull the quoted entries out of it.
        aliases = re.findall(r'"([^"]+)"|\'([^\']+)\'', raw)
        aliases = [a or b for a, b in aliases] or ([raw] if raw else [])
        if any(norm(a) == nk for a in aliases) and under(rel, *prefixes):
            return rel, fm.get('status')
    return None, None

# ---- 2. parse the Ontology tables ------------------------------------------
onto = open(os.path.join(ROOT, '_System', 'Ontology.md'), encoding='utf-8').read()
def parse_section(header):
    """rows of `| ID | Display | Note |` under a `## header` (until next ##)."""
    m = re.search(r'^##\s+' + re.escape(header) + r'\s*$(.*?)(?=^##\s|\Z)', onto, re.S | re.M)
    rows = []
    if not m:
        return rows
    for line in m.group(1).splitlines():
        c = [x.strip() for x in line.split('|')]
        # table rows look like ['', '`ID`', 'Display', 'Note', '']
        if len(c) >= 4 and c[1].startswith('`') and c[1].endswith('`'):
            rows.append((c[1].strip('`'), c[2], c[3]))
    return rows

concepts = parse_section('Concepts')
chars    = parse_section('Characters')
albums   = parse_section('Albums')
songs    = parse_section('Songs')
pageless = []  # concepts declared pageless live under a different header
m = re.search(r'## Declared — pageless.*', onto, re.S)
if m:
    for line in m.group(0).splitlines():
        c = [x.strip() for x in line.split('|')]
        if len(c) >= 4 and c[1].startswith('`'):
            pageless.append((c[1].strip('`'), c[2], c[3]))

# ---- 3. album / credits resolution -----------------------------------------
ALBUM_FOLDERS = {  # ontology era string -> Brain/Songs subfolder
    '33 (2022)': '33 (2022)',
    'Lucius Lullaby (2026)': 'Lucius Lullaby (2026)',
    'Subject to Flooding (2018)': 'Subject to Flooding (2018)',
    'Singles & EPs': 'Singles & EPs',
}
credits_files = {norm(f[:-3]): os.path.join('Sources/Credits', f)
                 for f in (os.listdir(os.path.join(ROOT, 'Sources/Credits'))
                           if os.path.isdir(os.path.join(ROOT, 'Sources/Credits')) else [])
                 if f.endswith('.md')}

def era_of(note):
    m = re.search(r'(Subject to Flooding \(2018\)|33 \(2022\)|Lucius Lullaby \(2026\)|Singles & EPs)', note)
    return m.group(1) if m else '—'

def credits_for(era, song_name):
    base = re.sub(r'\s*\(\d{4}\)\s*$', '', era).strip()  # "33 (2022)" -> "33"
    if norm(base) in credits_files:
        return credits_files[norm(base)]
    if norm(song_name) in credits_files:   # singles with their own credits (e.g. The Watchers)
        return credits_files[norm(song_name)]
    return None

# ---- 4. emit ----------------------------------------------------------------
try:
    head = subprocess.check_output(['git', '-C', ROOT, 'rev-parse', '--short', 'HEAD'],
                                   text=True).strip()
    when = subprocess.check_output(['git', '-C', ROOT, 'log', '-1', '--format=%ci'],
                                   text=True).strip()
except Exception:
    head, when = 'unknown', 'unknown'

def cell(rel, status=None):
    if not rel:
        return '—'
    return f'`{rel}`' + (f' · {status}' if status else '')

L = []
L += ['---', 'type: reference', 'citable: false', 'status: stable', '---']
L += [
 '# Entity Map — canonical ID → file paths (machine-readable)',
 '',
 f'> [!info] Generated snapshot — vault commit `{head}` ({when}) · '
 f'{len(songs)} songs · {len(concepts)+len(pageless)} concepts · {len(chars)} characters · {len(albums)} albums',
 '> Regenerate: `python3 _System/gen-entity-map.py`. **If a row looks stale, `grep -rli "term" .` is authoritative.** '
 'Companion to [[index]] (meaning), [[file-map]] (what exists), [[Ontology]] (the ID definitions). '
 'Paths are repo-relative; a `—` means *not present in this snapshot* (pageless concept, un-ingested lyric, un-written essay), not necessarily that nothing exists — confirm with grep before concluding absence.',
 '',
 'Status tokens come from each file\'s own frontmatter (`stable` = verified; `draft` = unverified/scaffold).',
 '',
]

# Songs table (the richest — the "song packet" in tabular form)
L += ['## Songs — packet table',
      '',
      'For any song: fetch **Brain → Lyric → Essay → Credits** in that order (the [[AI Quickstart]] first-pass). '
      'Lyric `status: stable` = Apple/Spotify-verified; `draft` = AZLyrics/Drive-sourced, treat as draft-tier.',
      '',
      '| ID | Song | Era | Brain page | Lyric (source) | Essay | Credits (album) |',
      '|---|---|---|---|---|---|---|']
song_unresolved = []
for eid, disp, note in sorted(songs, key=lambda r: (era_of(r[2]), r[1].lower())):
    era = era_of(note)
    brain, bstat = find(eid, disp, 'Brain/Songs')
    lyric, lstat = find(eid, disp, 'Sources/Lyrics')
    essay, _ = find(eid, disp, 'Essays/Concepts/Songs', 'Essays/Songs', 'Essays/Concepts')
    cred = credits_for(era, disp)
    L.append(f'| `{eid}` | {disp} | {era} | {cell(brain, bstat)} | {cell(lyric, lstat)} | {cell(essay)} | {cell(cred)} |')
    if not brain or not lyric:
        song_unresolved.append((eid, disp, 'no Brain' if not brain else '', 'no Lyric' if not lyric else ''))
L.append('')

# Concepts table
L += ['## Concepts',
      '',
      '| ID | Concept | Brain page | Essay |',
      '|---|---|---|---|']
for eid, disp, note in sorted(concepts, key=lambda r: r[1].lower()):
    brain, bstat = find(eid, disp, 'Brain/Concepts')
    essay, _ = find(eid, disp, 'Essays/Concepts', 'Essays/Arcs')
    L.append(f'| `{eid}` | {disp} | {cell(brain, bstat)} | {cell(essay)} |')
L.append('')

# Pageless concepts (declared, may now be homed as anchor-sections)
L += ['### Pageless / forward-declared concepts',
      '',
      'Declared in [[Ontology]] for reference-resolution; most have no standalone page '
      '(some are homed as anchor-sections of a hub — check the Ontology note).',
      '',
      '| ID | Concept | Brain page (if minted since) |',
      '|---|---|---|']
for eid, disp, note in sorted(pageless, key=lambda r: r[1].lower()):
    # scope to concept/character folders so a pageless name can't false-match a SONG file
    brain, bstat = find(eid, disp, 'Brain/Concepts', 'Brain/Characters')
    L.append(f'| `{eid}` | {disp} | {cell(brain, bstat)} |')
L.append('')

# Characters
L += ['## Characters',
      '',
      '| ID | Character | Brain page | Essay |',
      '|---|---|---|---|']
for eid, disp, note in sorted(chars, key=lambda r: r[1].lower()):
    brain, bstat = find(eid, disp, 'Brain/Characters')
    essay, _ = find(eid, disp, 'Essays/Characters')
    L.append(f'| `{eid}` | {disp} | {cell(brain, bstat)} | {cell(essay)} |')
L.append('')

# Albums
L += ['## Albums',
      '',
      '| ID | Album | Brain page | Credits |',
      '|---|---|---|---|']
for eid, disp, note in sorted(albums, key=lambda r: r[1].lower()):
    brain, bstat = find(eid, disp, 'Brain/Albums')
    cred = credits_files.get(norm(disp))
    L.append(f'| `{eid}` | {disp} | {cell(brain, bstat)} | {cell(cred)} |')
L.append('')

# Resolution gaps (so a reader knows what's genuinely missing vs just un-found)
if song_unresolved:
    L += ['## ⚠ Resolution gaps (songs missing a Brain page or Lyric in this snapshot)', '']
    for eid, disp, a, b in song_unresolved:
        flags = ', '.join(x for x in (a, b) if x)
        L.append(f'- `{eid}` {disp} — {flags}')
    L.append('')

L += ['## Maintenance',
      f'Regenerate with `python3 _System/gen-entity-map.py` after any file add/move/rename, '
      f'then commit. Resolution = frontmatter-`id` match first, then normalized-name match '
      f'(case/punct-insensitive), scoped to each layer\'s folder.', '']

out = os.path.join(ROOT, '_System', 'entity-map.md')
with open(out, 'w', encoding='utf-8') as fh:
    fh.write('\n'.join(L) + '\n')
print(f'wrote _System/entity-map.md · {len(songs)} songs · {len(concepts)} concepts '
      f'· {len(chars)} chars · {len(albums)} albums · {len(song_unresolved)} song gaps')
