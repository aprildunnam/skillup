---
title: Anatomy of a SKILL.md
desc: Every part of a skill file, labeled and explained.
lede: A skill has exactly three parts, and only one of them has rules you can't bend.
---

## The shape on disk

A skill is a folder, not a file. The folder holds a `SKILL.md` and anything else the skill needs.

```
vinyl-condition-grading/
  SKILL.md              <- required, this is the skill
  goldmine-grades.md    <- optional reference the agent can open
  templates/
    listing-blurb.md    <- optional template it can pull from
```

The folder name should match the skill name. Most skills are just a `SKILL.md` and nothing else, and that's completely fine. Bundled files earn their place later, in [Level 400](/skillup/400-advanced/bundles.html).

## Part one: the frontmatter

```yaml
---
name: vinyl-condition-grading
description: Grade used vinyl records for resale using Goldmine standards.
  Use when someone asks to grade, assess, or condition-check a record,
  LP, 45, or sleeve, or when pricing an incoming used record.
---
```

Two required fields. That's the whole contract.

<div class="table-scroll">

| Field | Required | Rules |
|---|---|---|
| `name` | yes | Lowercase letters, numbers, hyphens. No leading or trailing hyphen. Match the folder name. |
| `description` | yes | What the skill does and when to use it. This field decides whether your skill ever runs. |
| `license` | no | Free text. Useful if you're publishing. |
| `allowed-tools` | no | Pre-approves specific tools like `bash` or `shell`. A security decision, not a convenience. |

</div>

<div class="note warn">
<p class="eyebrow">The one that bites people</p>
<p>Field support varies by product. <code>name</code> and <code>description</code> work everywhere. <code>allowed-tools</code> is a GitHub Copilot concept and gets ignored elsewhere. Check the <a href="/skillup/300-shipping/portability.html">portability matrix</a> before you rely on anything past the two required fields.</p>
</div>

## Part two: the body

Everything after the closing `---` is markdown, and it's yours. There's no required structure, which is exactly why so many skills are bad.

What actually works, in this order:

<div class="table-scroll">

| Section | Job |
|---|---|
| A one line summary | Reminds the agent what it just picked up |
| When to use this | Scopes it. Stops the skill running on adjacent-but-different requests |
| Steps | The actual procedure, numbered |
| Output format | The highest leverage section on the page. Show the shape you want |
| Rules and edge cases | The stuff a new hire gets wrong in week one |
| What not to do | Short, specific, only where you've been burned |

</div>

You don't need every section every time. A skill with nothing but "when to use this" and an output format can be excellent. [Body structure that works](/skillup/200-authoring/body-structure.html) goes deeper.

## Part three: bundled files

Anything else in the folder is available to the agent, which reads it only if it decides it needs it.

That's the whole point. `goldmine-grades.md` might be 900 lines of grading minutiae covering box sets, promos, and Japanese pressings. It sits there costing nothing until the day somebody walks in with a Japanese promo pressing.

## Read it as one thing

<div class="stack-rows">
<div class="stack-row"><b>Spine label</b><p>The <code>name</code> and <code>description</code>. What the orchestrator sees while scanning for something relevant.</p></div>
<div class="stack-row"><b>Binder</b><p>The <code>SKILL.md</code> body. The actual procedure, opened once the label matched.</p></div>
<div class="stack-row"><b>Appendix</b><p>Bundled files. Pulled off the shelf only if the procedure sends the agent there.</p></div>
</div>

<div class="note">
<p class="eyebrow">Next</p>
<p><a href="/skillup/100-foundations/how-it-fires.html">How the agent decides to use it</a>. This is where the three parts stop being trivia and become a design constraint.</p>
</div>
