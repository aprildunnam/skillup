---
title: One file, many shelves
desc: The same SKILL.md installed across Copilot Studio, M365, SharePoint, GitHub Copilot, and VS Code.
lede: The format is portable. The plumbing isn't. Here's what actually transfers and what you have to redo.
---

## The good news

You write one file. `name`, `description`, markdown body. That file is understood by Copilot Studio, Copilot in SharePoint, GitHub Copilot, Visual Studio, VS Code, and agents outside the Microsoft stack entirely.

That's genuinely unusual and it's the reason skills are worth learning once rather than learning per product.

## The catch

What differs is everything around the file:

<div class="grid grid-2">
<div class="card">
<h4>Where it goes</h4>
<p>A folder in a repo, a library in SharePoint, a panel in Copilot Studio. Same file, four different homes.</p>
</div>
<div class="card">
<h4>What it can reach</h4>
<p>A SharePoint skill can't call an external API. A Copilot Studio skill can, through tools. That changes what you can write.</p>
</div>
<div class="card">
<h4>Who can author it</h4>
<p>Site editors, agent makers, anyone with commit rights. Governance is per platform.</p>
</div>
<div class="card">
<h4>What it costs</h4>
<p>Copilot Studio agents on the GitHub Copilot harness consume Copilot Credits, including while you're building and testing.</p>
</div>
</div>

## Pick your shelf

<div class="tocgrid">
<a class="toccard" href="/skillup/300-shipping/copilot-studio.html"><b>Copilot Studio</b><span>Build tab, create from blank or upload a package. Skills sit alongside tools and knowledge.</span></a>
<a class="toccard" href="/skillup/300-shipping/m365.html"><b>M365 Copilot and SharePoint</b><span>Author by talking to Copilot. Lives in the site's Agent Assets library. Hard limits worth knowing.</span></a>
<a class="toccard" href="/skillup/300-shipping/github-copilot.html"><b>GitHub Copilot and VS Code</b><span>Repo scope versus personal scope, the gh skill CLI, and allowed-tools.</span></a>
<a class="toccard" href="/skillup/300-shipping/portability.html"><b>The portability matrix</b><span>One table. What carries, what gets ignored, what breaks.</span></a>
<a class="toccard" href="/skillup/300-shipping/sharing.html"><b>Sharing and packaging</b><span>ZIP packages, repos, and how to run a team library that doesn't rot.</span></a>
</div>
