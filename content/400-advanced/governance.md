---
title: Versioning and governance
desc: Source control, review, ownership, and who's allowed to author what.
lede: Skills change agent behavior for everyone who uses that agent. At some point that needs a process, and the process should be small.
---

## Version in source control, not in the name

<div class="pair">
<div class="no">
<p class="eyebrow">Don't</p>
<p><code>vinyl-grading</code><br><code>vinyl-grading-v2</code><br><code>vinyl-grading-new</code><br><code>vinyl-grading-FINAL</code></p>
<p>Four skills competing for the same requests, and the orchestrator has no idea which one you meant.</p>
</div>
<div class="yes">
<p class="eyebrow">Do</p>
<p>One <code>vinyl-condition-grading</code>, with history in git.</p>
<p>Old versions are recoverable. None of them are live.</p>
</div>
</div>

This is the single most common governance failure and it's entirely self-inflicted.

## The minimum viable process

Six lines in a README. Genuinely enough for most teams.

```markdown
## Skill library rules

1. One owner per skill, listed below. The owner reviews changes.
2. Every skill has a test set in tests/.
3. New skills need one reviewer, checking for overlap with
   existing skills. Not correctness. Overlap.
4. Naming: <object>-<action>, lowercase, hyphens.
5. Deprecate by deleting. Git remembers.
6. Overlap audit every six months.
```

Rule 3 is the one that matters. The most common defect in a shared library isn't a badly written skill, it's a second skill claiming territory the first one already had.

## Who can author, per platform

<div class="table-scroll">

| Platform | Author | Use | Admin control |
|---|---|---|---|
| **Copilot in SharePoint** | Edit permission on the site | View permission on the site | None specific to skills. Standard SharePoint governance applies |
| **Copilot Studio** | Agent makers | Anyone who can use the agent | Environment and agent-level controls |
| **GitHub Copilot, repo** | Anyone who can commit | Anyone who clones | Branch protection and code review |
| **GitHub Copilot, personal** | You | You | None. It's your machine |

</div>

<div class="note brass">
<p class="eyebrow">SharePoint's quiet advantage</p>
<p>Skills there are ordinary documents in the Agent Assets library, so versioning, retention, sensitivity labels, and audit already apply, with nothing new to configure. It also means you tighten access by breaking inheritance on that library, the same way you'd protect any other content.</p>
</div>

## The permission model that catches people

A skill never grants access. It can only do what the person running it is already allowed to do.

That sounds obviously safe, and it is, but it produces a specific confusing failure: **the skill works for the author and fails for everyone else.** The author is usually a site owner. The users usually aren't.

Test as a normal user. Every time.

## Reviewing a skill you didn't write

Before you install somebody else's skill, five questions:

<div class="grid grid-2">
<div class="card">
<h4>What does the description claim?</h4>
<p>That's what it'll fire on. Does it overlap something you already have?</p>
</div>
<div class="card">
<h4>Does it set allowed-tools?</h4>
<p>Pre-approving <code>bash</code> or <code>shell</code> means the skill runs commands without the usual prompt. Read the body before you accept that.</p>
</div>
<div class="card">
<h4>What's in the bundled files?</h4>
<p>They're part of the skill. A clean SKILL.md with a hostile script beside it is still a hostile skill.</p>
</div>
<div class="card">
<h4>Does it encode rules that are actually yours?</h4>
<p>Somebody else's pricing rules will confidently produce wrong prices at your shop.</p>
</div>
</div>

<div class="note">
<p class="eyebrow">Where to get skills worth reviewing</p>
<p>The <a href="https://microsoft.github.io/skills">Microsoft skills explorer</a> is the largest curated set, 175+ skills with one-click install. Full list on the <a href="/skillup/resources/">resources page</a>.</p>
</div>
