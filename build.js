#!/usr/bin/env node
/* SkillUp static site build. Markdown in, HTML out. No framework, no magic. */
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const config = require("./site.config.js");

const ROOT = __dirname;
const CONTENT = path.join(ROOT, "content");
const OUT = path.join(ROOT, "docs");
const TEMPLATE = fs.readFileSync(path.join(ROOT, "templates/page.html"), "utf8");

function frontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { data, body: raw.slice(m[0].length) };
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function pageUrl(slug, name) {
  return name === "index" ? config.baseUrl + slug + "/" : config.baseUrl + slug + "/" + name + ".html";
}

const flat = [];
for (const sec of config.sections) {
  for (const [name, title] of sec.pages) {
    flat.push({ sec, name, title, url: pageUrl(sec.slug, name) });
  }
}

function buildNav(currentSlug, currentName) {
  let out = "";
  for (const sec of config.sections) {
    const open = sec.slug === currentSlug;
    out += '<div class="nav-group' + (open ? " is-open" : "") + '">';
    out += '<a class="nav-group-head" href="' + config.baseUrl + sec.slug + '/">';
    if (sec.level) out += '<span class="nav-level">' + sec.level + "</span>";
    out += "<span>" + esc(sec.label) + "</span></a>";
    out += '<ul class="nav-list">';
    for (const [name, title] of sec.pages) {
      const active = open && name === currentName;
      out += '<li><a class="nav-link' + (active ? " is-active" : "") + '" href="' + pageUrl(sec.slug, name) + '">' + esc(title) + "</a></li>";
    }
    out += "</ul></div>";
  }
  return out;
}

function render(tpl, vars) {
  return tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ""));
}

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name), d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

let count = 0, missing = 0;
for (let i = 0; i < flat.length; i++) {
  const page = flat[i];
  const src = path.join(CONTENT, page.sec.slug, page.name + ".md");
  if (!fs.existsSync(src)) {
    console.warn("  MISSING content/" + page.sec.slug + "/" + page.name + ".md");
    missing++;
    continue;
  }
  const parsed = frontmatter(fs.readFileSync(src, "utf8"));
  const data = parsed.data;
  // <!--include:assets/skills/x.md--> pulls a real file in as a fenced block,
  // so the samples pages can never drift from the files they document.
  const body = parsed.body.replace(/<!--include:(.+?)-->/g, function (_, rel) {
    const f = path.join(ROOT, rel.trim());
    if (!fs.existsSync(f)) return "`missing include: " + rel + "`";
    return "```markdown\n" + fs.readFileSync(f, "utf8").trimEnd() + "\n```";
  });
  const prev = flat[i - 1], next = flat[i + 1];

  let footNav = '<nav class="pagenav">';
  footNav += prev
    ? '<a class="pagenav-item prev" href="' + prev.url + '"><span class="eyebrow">Previous</span><span>' + esc(prev.title) + "</span></a>"
    : "<span></span>";
  footNav += next
    ? '<a class="pagenav-item next" href="' + next.url + '"><span class="eyebrow">Next</span><span>' + esc(next.title) + "</span></a>"
    : "<span></span>";
  footNav += "</nav>";

  const html = render(TEMPLATE, {
    title: esc(data.title || page.title),
    pageTitle: esc(data.title || page.title) + " - SkillUp",
    description: esc(data.desc || config.tagline),
    eyebrow: esc(data.eyebrow || (page.sec.level ? "Level " + page.sec.level + " / " + page.sec.label : page.sec.label)),
    lede: data.lede ? '<p class="lede">' + esc(data.lede) + "</p>" : "",
    nav: buildNav(page.sec.slug, page.name),
    content: marked.parse(body),
    footNav,
    scripts: data.script
      ? data.script.split(",").map(function (s) {
          return '<script src="' + config.baseUrl + "assets/js/" + s.trim() + '" defer></script>';
        }).join("\n")
      : "",
    base: config.baseUrl,
    repo: config.repo,
    year: new Date().getFullYear()
  });

  write(path.join(OUT, page.sec.slug, page.name === "index" ? "index.html" : page.name + ".html"), html);
  count++;
}

const homeTpl = fs.readFileSync(path.join(ROOT, "templates/home.html"), "utf8");
const home = frontmatter(fs.readFileSync(path.join(CONTENT, "index.md"), "utf8"));
write(path.join(OUT, "index.html"), render(homeTpl, {
  content: marked.parse(home.body),
  base: config.baseUrl,
  repo: config.repo,
  year: new Date().getFullYear()
}));
count++;

copyDir(path.join(ROOT, "assets"), path.join(OUT, "assets"));
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
if (fs.existsSync(path.join(ROOT, "assets/404.html"))) {
  fs.copyFileSync(path.join(ROOT, "assets/404.html"), path.join(OUT, "404.html"));
}

console.log("SkillUp built: " + count + " pages -> docs/" + (missing ? "  (" + missing + " missing)" : ""));
