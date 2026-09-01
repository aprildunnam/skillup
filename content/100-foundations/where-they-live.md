---
title: Where skills live
desc: The same file format, on different shelves, across the Microsoft stack.
lede: One format, many homes. Knowing which shelf you're putting it on is a Level 300 problem, but knowing that the shelves exist is a Level 100 one.
---

## The short version

The file is the same everywhere. What changes is the folder it goes in and who's allowed to put it there.

<div class="table-scroll">

| Product | Where the skill lives | Who can author |
|---|---|---|
| **Copilot Studio** | The Build tab of an agent, under Skills. Create in the UI or upload a ZIP package | Agent makers |
| **Copilot in SharePoint** | `Agent Assets/Skills/<skill-name>/SKILL.md` in the site's Agent Assets library | Anyone with Edit on the site |
| **GitHub Copilot, repo scope** | `.github/skills/`, `.claude/skills/`, or `.agents/skills/` in the repo | Anyone who can commit |
| **GitHub Copilot, personal scope** | `~/.copilot/skills/` or `~/.agents/skills/` on your machine | You |
| **Visual Studio and VS Code** | Same folders as GitHub Copilot | You, or the repo |

</div>

## What that means in practice

<div class="grid grid-2">
<div class="card">
<h4>SharePoint skills are site-scoped</h4>
<p>A skill in the Records site's Agent Assets library works for people on that site, using permissions they already have. It can't reach outside SharePoint and it can't run code.</p>
</div>
<div class="card">
<h4>Copilot Studio skills are agent-scoped</h4>
<p>They belong to one agent. Reusing a skill across agents means adding the same package to each. Skills there run on agents using the GitHub Copilot harness.</p>
</div>
<div class="card">
<h4>Repo skills travel with the code</h4>
<p>Commit a skill to <code>.github/skills/</code> and everyone who clones the repo gets it. This is the easiest way to share a skill with a team.</p>
</div>
<div class="card">
<h4>Personal skills follow you</h4>
<p>A skill in <code>~/.copilot/skills/</code> applies across all your projects. Great for your own habits, wrong for team standards.</p>
</div>
</div>

<div class="note brass">
<p class="eyebrow">Worth knowing early</p>
<p>Building, testing, and evaluating agents in Copilot Studio consumes Copilot Credits. It's usage-based. This surprises people the first time they iterate on a skill twenty times in an afternoon, so budget for the loop, not just the runtime.</p>
</div>

## At the cafe

The shop ends up with skills in three places, and it's not because anybody planned it that way.

<div class="stack-rows">
<div class="stack-row"><b>SharePoint</b><p>The record floor's grading and intake skills, living on the Records site where the crate logs already are. Marcus wrote them himself in a chat, no repo involved.</p></div>
<div class="stack-row"><b>Copilot Studio</b><p>The consignment agent that local musicians talk to. It needs to reach the inventory system, so it needs tools, so it needs to be a real agent.</p></div>
<div class="stack-row"><b>The web store repo</b><p>A <code>shop-site-review</code> skill in <code>.github/skills/</code> that keeps the two people touching the storefront honest about accessibility and alt text.</p></div>
</div>

That's a normal outcome. Skills are cheap enough that they show up wherever the work is, and the format being identical is what keeps that from becoming a mess.

<div class="note">
<p class="eyebrow">Next</p>
<p><a href="/skillup/100-foundations/checkpoint.html">Checkpoint</a>. Six questions. If you can answer them you're ready for Level 200.</p>
</div>
