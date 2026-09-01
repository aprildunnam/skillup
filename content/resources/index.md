---
title: Resources
desc: Where to get skills, read the docs, and go deeper once you know how to write them.
lede: SkillUp teaches you to write skills. These are the places to get them, check them, and keep up as things change.
---

## Skill libraries

<div class="note">
<p class="eyebrow">Start here</p>
<p><b><a href="https://microsoft.github.io/skills">microsoft.github.io/skills</a></b> is the skill explorer: 175+ skills, custom agents, AGENTS.md templates, and MCP server configurations for AI coding agents, browsable with one-click install. Source at <b><a href="https://github.com/microsoft/skills">github.com/microsoft/skills</a></b>.</p>
<p>Install with an interactive picker so you take the handful you need rather than all of them:</p>
<pre><code>npx skills add microsoft/skills</code></pre>
<p>Skills there are organised by language (Core, Foundry, Python, .NET, TypeScript, Java, Rust) and by domain, and the repo explicitly follows a context-driven approach: agents get only the skills they need, to avoid context rot. That's the same argument made on <a href="/skillup/400-advanced/tokens.html">the token economy page</a>, from people running it at scale.</p>
</div>

<div class="note brass">
<p class="eyebrow">Read before you install</p>
<p>A skill is instructions your agent will follow. Before adding somebody else's: read the description (that's what it'll fire on), check for an <code>allowed-tools</code> field, look inside any bundled files, and ask whether its rules are actually yours. The <a href="/skillup/400-advanced/governance.html">governance page</a> has the full checklist.</p>
</div>

## The official docs

<div class="table-scroll">

| Topic | Where |
|---|---|
| Skills overview for Copilot Studio agents | [Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview) |
| Create a skill for a Copilot Studio agent | [Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-create) |
| Add an existing skill package | [Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-add-existing) |
| Extend Copilot in SharePoint with skills | [Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/copilot-in-sharepoint-skills) |
| Adding agent skills for GitHub Copilot | [GitHub Docs](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) |
| Agent skills in Visual Studio | [Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-agent-skills?view=visualstudio) |

</div>

## The one thing to watch

Skills are moving fast, across every vendor, at the same time. The `SKILL.md` convention has held remarkably steady, which is why the same file works in Copilot Studio, SharePoint, GitHub Copilot, and agents outside the Microsoft stack. What changes underneath it is field support, tooling, and where things are allowed to run.

<div class="note warn">
<p class="eyebrow">Practical advice</p>
<p>Write against <code>name</code> and <code>description</code> and a plain markdown body. That combination has worked everywhere, from the beginning, and it's the least likely thing to change. Treat everything else as a bonus you should be willing to lose. The <a href="/skillup/300-shipping/portability.html">portability matrix</a> tracks what's currently where, with the same warning attached.</p>
</div>

## About this site

SkillUp is open source and built by [April Dunnam](https://github.com/aprildunnam). Corrections and additions welcome, particularly on the portability matrix, which is the page most likely to go stale.

<div class="grid grid-2">
<div class="card">
<h4>The source</h4>
<p>Content is markdown in <code>content/</code>, built to static HTML by an 80-line Node script. No framework. <a href="https://github.com/aprildunnam/skillup">The repo</a> has the details.</p>
</div>
<div class="card">
<h4>The shop</h4>
<p>April's Acoustic Cafe isn't real. Every example on this site runs on it because skills are boring in the abstract and obvious the moment you attach them to a person with a task. <a href="/skillup/scenarios/">Meet the shop</a>.</p>
</div>
</div>
