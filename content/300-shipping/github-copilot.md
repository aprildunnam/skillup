---
title: GitHub Copilot and VS Code
desc: Repo scope, personal scope, the gh skill CLI, and the one field that's a security decision.
lede: The fastest loop of any platform, because a skill here is just a file you commit.
---

## Two scopes

<div class="table-scroll">

| Scope | Folders | Who gets it |
|---|---|---|
| **Project** | `.github/skills/`, `.claude/skills/`, `.agents/skills/` | Everyone who clones the repo |
| **Personal** | `~/.copilot/skills/`, `~/.agents/skills/` | You, across every project |

</div>

Three project folders are recognized, which exists so a repo can carry skills that work across different agent tools without duplicating them. Pick one and be consistent. `.github/skills/` is the obvious default in a GitHub repo.

<div class="note">
<p class="eyebrow">The rule of thumb</p>
<p>Team standards go in the repo. Your own habits go in your home folder. If you'd be annoyed that a coworker inherited it, it's personal scope.</p>
</div>

## The file

Same as everywhere. A folder with a `SKILL.md` and optional supporting files.

```
.github/skills/
  shop-site-review/
    SKILL.md
    checklist.md
```

Frontmatter:

```yaml
---
name: shop-site-review
description: Review changes to the shop storefront for accessibility
  and content standards. Use when reviewing a PR, a component, or a
  page template for the online store.
license: MIT
---
```

`name` and `description` are required. `license` is optional and useful if you're publishing.

## allowed-tools

There's an optional `allowed-tools` field that pre-approves specific tools, like `shell` or `bash`, for this skill.

<div class="note bad">
<p class="eyebrow">Treat this as a security decision</p>
<p>Pre-approving <code>bash</code> means a skill can run shell commands without the usual prompt. Only add it after you've read the skill, and never on a skill you pulled from somewhere you don't trust. A skill is executable-adjacent content, and this field is the part that makes that literal.</p>
</div>

## Where skills apply

Skills you add work across the Copilot cloud agent, code review, the GitHub CLI, the GitHub Copilot app, and VS Code agent mode. It's the same skill in all of them. Copilot decides when to use it based on your prompt and the skill's description, the same matching behavior as everywhere else.

## The gh skill CLI

`gh skill` handles the library side: searching, installing, updating, and publishing skills from repositories. That's how you consume somebody else's skills rather than writing your own, and it's how you'd publish yours for a team.

The [Microsoft skills repo](https://github.com/microsoft/skills) uses a similar install flow:

```bash
npx skills add microsoft/skills
```

which opens an interactive picker so you take the four skills you want rather than all 175.

## Visual Studio

Visual Studio supports agent skills for GitHub Copilot from the same folders. If your team is split between VS Code and Visual Studio, one `.github/skills/` folder covers both, which is a decent argument for putting team skills in the repo rather than in everyone's home directory.

## Why this is the best place to learn

The loop is a text editor and a chat window. No credits, no deployment, no waiting. If you're new to writing skills and you have a repo handy, write your first three here even if they'll eventually live in Copilot Studio. The format is identical and the feedback is instant.
