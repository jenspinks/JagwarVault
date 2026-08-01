"""Key/tonic detection across the 14 HoM audio artifacts, tested against the
board's 'AI musical scale' ladder (F C D E F F# G A A# B, ascending).

Method: Krumhansl-Schmuckler key-finding over a chroma_cqt profile, reported with
the correlation margin so weak calls are visible as weak. Also reports the single
strongest chroma bin (the raw pitch-class centre of mass), which is more robust
than a full key call on short, noisy, or wordless material.
"""
import os, glob, json, warnings
warnings.filterwarnings("ignore")
import numpy as np
import librosa

AUDIO = "/Users/jenniferspinks/Vaults/JagwarTwin/Sources/Artifacts/Audio Files"
PC = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

# Krumhansl-Kessler profiles
MAJ = np.array([6.35,2.23,3.48,2.33,4.38,4.09,2.52,5.19,2.39,3.66,2.29,2.88])
MIN = np.array([6.33,2.68,3.52,5.38,2.60,3.53,2.54,4.75,3.98,2.69,3.34,3.17])


def analyse(path):
    y, sr = librosa.load(path, sr=22050, mono=True)
    dur = len(y) / sr
    # harmonic component only — drums/noise pollute chroma badly on lo-fi material
    y_h = librosa.effects.harmonic(y, margin=3.0)
    chroma = librosa.feature.chroma_cqt(y=y_h, sr=sr, bins_per_octave=36)
    prof = chroma.mean(axis=1)
    if prof.sum() <= 0:
        return None
    prof = prof / prof.sum()

    scores = []
    for i in range(12):
        for name, tmpl in (("maj", MAJ), ("min", MIN)):
            r = np.corrcoef(np.roll(tmpl, i), prof)[0, 1]
            scores.append((r, PC[i], name))
    scores.sort(reverse=True)
    best_r, best_pc, best_mode = scores[0]
    margin = best_r - scores[1][0]

    order = np.argsort(prof)[::-1]
    return {
        "dur": round(dur, 1),
        "key": f"{best_pc} {best_mode}",
        "tonic": best_pc,
        "r": round(float(best_r), 3),
        "margin": round(float(margin), 3),
        "top_bins": [(PC[int(i)], round(float(prof[int(i)]), 3)) for i in order[:3]],
    }


files = sorted(glob.glob(f"{AUDIO}/*.mp3") + glob.glob(f"{AUDIO}/*.m4a"))
LADDER = ["F", "C", "D", "E", "F", "F#", "G", "A", "A#", "B"]
ladder_set = set(LADDER)

print(f"Board ladder (ascending, stages 1-10): {' '.join(LADDER)}")
print(f"Distinct pitch classes on the ladder: {sorted(ladder_set)}")
print(f"Absent from the ladder: {sorted(set(PC) - ladder_set)}\n")
print(f"{'recording':<44} {'dur':>6} {'key':>9} {'r':>6} {'marg':>6}  top chroma bins")
print("-" * 108)

rows = []
for f in files:
    name = os.path.basename(f).replace(".mp3", "").replace(".m4a", "")
    try:
        a = analyse(f)
    except Exception as e:
        print(f"{name[:44]:<44} ERROR {e}")
        continue
    if not a:
        continue
    a["name"] = name
    rows.append(a)
    bins = " ".join(f"{p}:{v}" for p, v in a["top_bins"])
    print(f"{name[:44]:<44} {a['dur']:>6} {a['key']:>9} {a['r']:>6} {a['margin']:>6}  {bins}")

print("\n" + "=" * 108)
on = [r for r in rows if r["tonic"] in ladder_set]
off = [r for r in rows if r["tonic"] not in ladder_set]
print(f"Tonic ON the board ladder:  {len(on)}/{len(rows)}")
print(f"Tonic OFF the board ladder: {len(off)}/{len(rows)}" + (f"  -> {[r['tonic'] for r in off]}" if off else ""))

strong = [r for r in rows if r["margin"] >= 0.05]
print(f"\nCalls with a usable margin (>=0.05): {len(strong)}/{len(rows)}")
if strong:
    son = sum(1 for r in strong if r["tonic"] in ladder_set)
    print(f"  of those, tonic on the ladder: {son}/{len(strong)}")

# base rate: 10 of 12 pitch classes are on the ladder, so ~83% is chance
print(f"\nBASE RATE: the ladder covers {len(ladder_set)}/12 pitch classes "
      f"= {len(ladder_set)/12:.0%} expected by chance alone.")
print("A join only means something if the hit-rate materially exceeds that, or if")
print("the STAGE ORDER (not just membership) tracks something.")

json.dump(rows, open("/private/tmp/claude-501/-Users-jenniferspinks-Claude-Code-JagWeb/8d6343d3-88c0-4c39-b11f-08c42878f4ff/scratchpad/keys.json", "w"), indent=1)
