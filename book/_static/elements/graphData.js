// graphData.js  –  fetch + parse references/tags -----------------------------
export async function loadGraphData(maxdim) {
  // ---------- helpers ----------
  const capitalizeWords = s => s.replace(/\b\w/g, c => c.toUpperCase());
  const extractTitle     = f => capitalizeWords(f.replace('.md','').replace(/_/g,' '));

  // ---------- fetch ----------
  const [refText, tagText] = await Promise.all([
    fetch('https://maxramgraber.github.io/MASTER/main/references.txt').then(r => r.text()),
    fetch('https://maxramgraber.github.io/MASTER/main/tags.txt')     .then(r => r.text())
  ]);

  // ---------- parse tags.txt ----------
  const tagMap = new Map();
  tagText.trim().split('\n').forEach(line => {
    const m = line.match(/^(.*?) -> \[tag:\s*'(.*?)'\]$/);
    if (m) tagMap.set(m[1].trim(), m[2].trim());
  });

  // ---------- parse references.txt ----------
  const nodesMap = new Map();
  const links    = [];
  const refCount = new Map();

  refText.trim().split('\n').forEach(line => {
    const m = line.match(/^(.*?) -> \[text: '(.*?)'\] \[target: '(.*?)'\]$/);
    if (!m) return;
    const [ , src , , tgt ] = m;

    const makeNode = file => {
      if (nodesMap.has(file)) return;
      nodesMap.set(file, {
        id:   file,
        text: extractTitle(file),
        link: `https://maxramgraber.github.io/MASTER/main/pages/${file.replace('.md','.html')}`,
        tag:  tagMap.get(file)
      });
    };
    makeNode(src.trim());
    makeNode(`${tgt.trim()}.md`);

    links.push({ source: src.trim(), target: `${tgt.trim()}.md` });

    [src.trim(), `${tgt.trim()}.md`].forEach(f =>
      refCount.set(f, (refCount.get(f) || 0) + 1)
    );
  });

  // ---------- add standalone tag‑only nodes ----------
  tagMap.forEach((_, file) => { if (!nodesMap.has(file)) {
    nodesMap.set(file, {
      id: file,
      text: extractTitle(file),
      link: `https://maxramgraber.github.io/MASTER/main/pages/${file.replace('.md','.html')}`,
      tag: tagMap.get(file)
    });
    refCount.set(file, 0);
  }});

  // ---------- radii ----------
  const minR = maxdim * 0.01,
        maxR = maxdim * 0.03,
        cap  = 10;
  nodesMap.forEach((n,id) => {
    const cnt = refCount.get(id) || 0;
    n.radius  = minR + (maxR-minR) * Math.min(cnt/cap,1);
  });

  return {
    nodes: Array.from(nodesMap.values()),
    links
  };
}
