---
title: Sharing and packaging
desc: Getting a skill from your machine to your team without it rotting in six months.
lede: A skill nobody else can find is a note to yourself. Here's how to make it a team asset.
---

## Three ways to hand somebody a skill

<div class="table-scroll">

| Method | Best for | Downside |
|---|---|---|
| **ZIP package** | Copilot Studio, one-off sharing, non-technical teams | No version history, easy to end up with four copies |
| **Repo folder** | Anything technical, anything a team maintains | Requires everyone to have the repo |
| **A published skills repo** | A library others install from | More setup, worth it past ~10 skills |

</div>

## The ZIP package

A skill package is a ZIP with a `SKILL.md` at the root and any supporting files alongside it.

```
consignment-intake.zip
  SKILL.md
  reference/
    split-terms.md
  templates/
    payout-statement.md
```

That's the unit you upload to a Copilot Studio agent, email a coworker, or attach to a ticket. Simple, and it's the right answer until you have more than a handful.

## The repo folder

Once more than one person edits skills, put them in a repo.

```
shop-skills/
  .github/skills/
    vinyl-condition-grading/SKILL.md
    used-record-pricing/SKILL.md
    open-mic-runsheet/SKILL.md
    consignment-intake/SKILL.md
  README.md
  tests/
    prompts.md
```

You get diffs, blame, review, and history for free. The `tests/prompts.md` file is the [ten-prompt test set](/skillup/200-authoring/testing.html) for each skill, which is the single highest value thing you can add to a shared library.

## Installing from somebody else's library

The Microsoft skills repo is the reference implementation of a public library:

```bash
npx skills add microsoft/skills
```

That opens an interactive picker so you install the handful you need rather than all 175, which matters because [every installed skill costs you description tokens on every turn](/skillup/400-advanced/tokens.html).

`gh skill` does the same job through the GitHub CLI: search, install, update, publish.

## Running a library that doesn't rot

Five rules. Every one of these came from a library that rotted.

<div class="grid grid-2">
<div class="card">
<h4>One owner per skill</h4>
<p>Written in the README next to the skill name. Shared ownership means nobody notices when it breaks.</p>
</div>
<div class="card">
<h4>A test set per skill</h4>
<p>Ten prompts. Five that should fire, five that shouldn't. Non-negotiable past five skills.</p>
</div>
<div class="card">
<h4>A naming convention decided once</h4>
<p><code>&lt;domain&gt;-&lt;action&gt;</code> is fine. Anything is fine. Inconsistency is not.</p>
</div>
<div class="card">
<h4>A review before merge</h4>
<p>Not for correctness, for overlap. The most common library defect is two skills claiming the same territory.</p>
</div>
<div class="card">
<h4>A deprecation path</h4>
<p>Delete skills. A library that only grows gets worse at matching every quarter.</p>
</div>
<div class="card">
<h4>A README that says what's <em>not</em> here</h4>
<p>Saves people writing the fifth version of a skill that already exists under a name they didn't search for.</p>
</div>
</div>

<div class="note">
<p class="eyebrow">Next</p>
<p><a href="/skillup/400-advanced/">Level 400</a>. What changes when you go from three skills to forty.</p>
</div>
