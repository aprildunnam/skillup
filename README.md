# SkillUp

**Agent Skills, from zero to advanced.** A course site covering what a skill is, how to
write one that actually fires, and how to ship it across M365 Copilot, Copilot Studio,
and GitHub Copilot.

Live at **https://aprildunnam.github.io/skillup/**

Every example runs on April's Acoustic Cafe, a fictional used record shop with a coffee
counter, a lesson studio, and a Thursday open mic. Skills are boring in the abstract and
obvious the moment you attach them to a person with a task.

---

## What's here

**Four levels.** Foundations, Authoring, Shipping, Advanced. Twenty-five pages ending in
something you can do rather than something you've read.

**Five scenarios.** End-to-end builds at the record shop showing skills, tools, and
knowledge working together.

**Six annotated skills.** Complete working `SKILL.md` files with the reasoning behind
every section, plus three deliberately broken ones.

**Three browser tools.** All client side, no API key, no backend.

- **Skill Forge** — a live `SKILL.md` linter with 22 rules, each mapped to a page
- **Should this be a skill?** — a seven question wizard with six possible verdicts
- **Idea generator** — 56 hand-written skill ideas across nine roles

## What's deliberately not here

A skill library. [microsoft.github.io/skills](https://microsoft.github.io/skills) already
has 175+ skills with one-click install and it's better than anything this site would
build. SkillUp teaches you to read those, judge them, and write your own.

---

## Running it locally

```bash
npm install
npm run build          # markdown in content/ -> static HTML in docs/
npm run check          # verifies every internal link resolves
npm start              # build, then serve at http://localhost:8080/skillup/
```

The site must be served over HTTP rather than opened from the filesystem, because the
Skill Forge fetches sample skill files.

## How the build works

No framework. `build.js` is about 130 lines of Node using `marked`.

```
content/            markdown source, one file per page
  100-foundations/
  200-authoring/
  300-shipping/
  400-advanced/
  scenarios/
  samples/
  lab/
  resources/
templates/
  page.html          shared shell for every content page
  home.html          the front page
assets/
  css/site.css       the whole design system, one file
  js/                forge.js, decide.js, ideas.js, quiz.js, site.js
  skills/            the six sample SKILL.md files, served raw
site.config.js       nav structure. Add a page here and it appears
build.js
check-links.js
docs/                generated output. This is what GitHub Pages serves
```

### Adding a page

1. Add it to the right section's `pages` array in `site.config.js`
2. Create `content/<section>/<name>.md` with frontmatter
3. `npm run build`

Frontmatter fields: `title`, `desc`, `lede`, `eyebrow`, `script` (comma separated JS
files from `assets/js/`).

### The include directive

`<!--include:assets/skills/vinyl-condition-grading.md-->` pulls a real file into the page
as a fenced code block at build time, so the annotated samples can never drift from the
files they document.

## Deployment

GitHub Pages deploys the committed `/docs` output through GitHub Actions whenever `main`
changes. Pull requests run the same build and link checks without deploying. The workflow
also fails when `docs/` is stale, so content and generated HTML stay in sync.

To change the URL, edit `baseUrl` in `site.config.js` and rebuild.

---

## Companion video series

`VIDEO-PLAN.md` has a sixteen week YouTube plan mapped page-by-page to this site. Nine
long-form episodes, thirty-four shorts, one demo environment powering all of it.

## License

MIT. The skills in `assets/skills/` are examples for a fictional record shop, so take
them, but don't expect them to price your actual inventory correctly.
