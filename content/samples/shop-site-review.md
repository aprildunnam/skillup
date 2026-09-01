---
title: shop-site-review
desc: Repo-scoped, for GitHub Copilot. The only sample with a license field.
eyebrow: Sample 06 / Repo scope
lede: Skills aren't only for business users. This one lives in a repo and reviews pull requests.
script: sample.js
---

<div class="chips"><span class="chip">GitHub Copilot</span><span class="chip">VS Code</span><span class="chip">.github/skills/</span><span class="chip">~50 lines</span></div>

<p><button class="mini" data-load-skill="shop-site-review">Open this in the Skill Forge</button></p>

## Where it lives

```
shop-storefront/
  .github/skills/
    shop-site-review/
      SKILL.md
```

Committed to the repo, so everyone who clones it gets the same review standards. That's the [repo scope](/skillup/300-shipping/github-copilot.html) argument in one sentence.

## The file

<!--include:assets/skills/shop-site-review.md-->

## What makes this work

### It carries a license field

The only sample here that does. `license` is a GitHub Copilot frontmatter field and it's [ignored elsewhere](/skillup/300-shipping/portability.html), which is fine. If you might publish a skill, put a license on it.

### It has no allowed-tools field, on purpose

This skill reads a diff and reports findings. It doesn't need shell access, so it doesn't ask for it. Pre-approving `bash` when you don't need it is a security decision made for no reason.

### The checks are specific to this shop

Generic accessibility advice is what a linter is for. What earns this skill its place is the four lines nobody else's review would catch:

- A record sleeve image is never decorative, its alt text is artist and title
- Condition grades use Goldmine abbreviations, never plain English
- Prices show as $XX with no cents
- A listing that omits a seam split is a returns problem

That's institutional knowledge about an online record store. No off-the-shelf tool has it.

### It stays in its lane

> Do not comment on code style. That is what the linter is for.

Without that line the skill will review formatting, and then people stop reading its output, and then the skill is worthless. Knowing what *not* to do is half of a good review skill.

### It handles the too-big case

> If the diff is over 400 lines, say so and ask which files matter most rather than skimming all of them.

A 900-line diff produces either a shallow review or a very long one. Neither is useful. Asking is the right answer and it has to be written down, because the default behavior is to try anyway.

### The output format is a grep-able line

`path/to/file.html:LINE - **[a11y or content]** - what is wrong, and the fix.`

Structured enough to scan, specific enough to act on, and it includes the fix rather than just the complaint.
