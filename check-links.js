/* Internal link check. Run after build. */
const fs = require("fs"), path = require("path");
const OUT = path.join(__dirname, "docs");
const BASE = "/skillup/";
let files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p) : files.push(p);
  }
})(OUT);

const html = files.filter(f => f.endsWith(".html"));
let bad = 0, checked = 0;
for (const f of html) {
  const src = fs.readFileSync(f, "utf8");
  const hrefs = [...src.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]);
  for (const h of hrefs) {
    if (!h.startsWith(BASE)) continue;
    checked++;
    let rel = h.slice(BASE.length).split("#")[0].split("?")[0];
    if (rel === "" || rel.endsWith("/")) rel += "index.html";
    const target = path.join(OUT, rel);
    if (!fs.existsSync(target)) {
      console.log("BROKEN  " + path.relative(OUT, f) + "  ->  " + h);
      bad++;
    }
  }
}
console.log(`checked ${checked} internal links across ${html.length} pages, ${bad} broken`);
process.exit(bad ? 1 : 0);
