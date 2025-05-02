// graphData.js – handles remote fetch + parsing for navigation(1).html
// ------------------------------------------------------------------
// Usage (inside navigation(1).html):
//   import { loadGraphData } from './graphData.js';
//   loadGraphData(maxdim).then(({ nodes, links }) => { ... });

export async function loadGraphData(maxdim) {
  // ---------------- helpers ----------------
  const capitalizeWords = str => str.replace(/\b\w/g, c => c.toUpperCase());
  const extractTitle    = filename => capitalizeWords(filename.replace('.md', '').replace(/_/g, ' '));

  // ---------------- fetch ------------------
  const [refData, tagData] = await Promise.all([
    fetch('https://maxramgraber.github.io/MASTER/main/references.txt').then(r => r.text()),
    fetch('https://maxramgraber.github.io/MASTER/main/tags.txt').then(r => r.text())
  ]);

  // ---------------- parse tags.txt ----------------
  const tagMap = new Map();
  tagData.trim().split('\n').forEach(line => {
    // "filename.md -> [tag: 'Linear Algebra']"
    const m = line.match(/^(.*?) -> \[tag:\s*'(.*?)'\]$/);
    if (m) tagMap.set(m[1].trim(), m[2].trim());
  });

  // ---------------- parse references.txt ----------
  const nodesMap        = new Map();
  const links           = [];
  const referenceCounts = new Map();

  refData.trim().split('\n').forEach(line => {
    // "source.md -> [text: 'Display Text'] [target: 'targetName']"
    const match = line.match(/^(.*?) -> \[text: '(.*?)'\] \[target: '(.*?)'\]$/);
    if (!match) return;

    const sourceFile  = match[1].trim();
    const targetFile  = `${match[3].trim()}.md`;

    const ensureNode = file => {
      if (nodesMap.has(file)) return;
      nodesMap.set(file, {
        id:   file,
        text: extractTitle(file),
        link: `https://maxramgraber.github.io/MASTER/main/pages/${file.replace('.md', '.html')}`
      });
    };

    ensureNode(sourceFile);
    ensureNode(targetFile);

    links.push({ source: sourceFile, target: targetFile });

    referenceCounts.set(targetFile, (referenceCounts.get(targetFile) || 0) + 1);
    referenceCounts.set(sourceFile, (referenceCounts.get(sourceFile) || 0) + 1);
  });

  // ---------------- add orphan tag‑only nodes -------
  tagMap.forEach((tag, file) => {
    if (!nodesMap.has(file)) {
      nodesMap.set(file, {
        id: file,
        text: extractTitle(file),
        link: `https://maxramgraber.github.io/MASTER/main/pages/${file.replace('.md', '.html')}`,
        tag
      });
      referenceCounts.set(file, 0);
    }
  });

  // ---------------- finalise nodes -----------------
  const nodes = Array.from(nodesMap.values());
  nodes.forEach(n => { if (!n.tag && tagMap.has(n.id)) n.tag = tagMap.get(n.id); });

  // radius sizing (kept identical to original)
  const minRadius     = maxdim * 0.01;
  const maxRadius     = maxdim * 0.01;
  const maxReferences = 10;
  nodes.forEach(n => {
    const c = referenceCounts.get(n.id) || 0;
    n.radius = minRadius + (maxRadius - minRadius) * Math.min(c / maxReferences, 1);
  });

  return { nodes, links };
}
