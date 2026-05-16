// _System/lib-frontmatter.mjs
// Minimal frontmatter reader for the CONTROLLED JagwarTwin schema only.
// Not a general YAML parser — handles exactly the shapes CLAUDE.md §6 defines:
//   key: scalar
//   key: [a, b, c]
//   connections:
//     grounded: [..]
//     strong_read: [..]
//     resonance: [..]
import { readFileSync } from "node:fs";

export function readFrontmatter(absPath) {
  const text = readFileSync(absPath, "utf8");
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { fm: null, body: text };
  const body = text.slice(m[0].length);
  const lines = m[1].split(/\r?\n/);
  const fm = {};
  let parentKey = null;
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const indented = /^\s{2,}\S/.test(line);
    const km = line.match(/^(\s*)([A-Za-z_]+):\s*(.*)$/);
    if (!km) continue;
    const [, , key, rawRest] = km;
    const rest = rawRest.trim();
    const parseVal = (v) => {
      if (v === "") return "";
      if (v.startsWith("[") && v.endsWith("]")) {
        return v.slice(1, -1).split(",").map((s) => s.trim()).filter(Boolean);
      }
      return v.replace(/^["']|["']$/g, "");
    };
    if (!indented) {
      if (rest === "") { fm[key] = {}; parentKey = key; }
      else { fm[key] = parseVal(rest); parentKey = null; }
    } else if (parentKey && typeof fm[parentKey] === "object" && !Array.isArray(fm[parentKey])) {
      fm[parentKey][key] = parseVal(rest);
    }
  }
  return { fm, body, fmRaw: m[1], fmBlock: m[0] };
}

// All entity refs a page points at (related + every connections tier).
export function outRefs(fm) {
  if (!fm) return [];
  const out = [];
  if (Array.isArray(fm.related)) out.push(...fm.related);
  const c = fm.connections;
  if (c && typeof c === "object") {
    for (const tier of ["grounded", "strong_read", "resonance"]) {
      if (Array.isArray(c[tier])) out.push(...c[tier]);
    }
  }
  return [...new Set(out)];
}
