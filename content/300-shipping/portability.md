---
title: The portability matrix
desc: What actually carries between platforms, and what quietly gets dropped.
lede: One table. Print it, screenshot it, whatever. This is the page you'll come back to.
---

## What carries

<div class="table-scroll">

| | Copilot Studio | Copilot in SharePoint | GitHub Copilot / VS / VS Code |
|---|---|---|---|
| `SKILL.md` markdown body | yes | yes | yes |
| `name` frontmatter | yes | yes | yes |
| `description` frontmatter | yes | yes | yes |
| Bundled supporting files | yes, in a ZIP package | limited, keep it simple | yes, in the skill folder |
| `license` frontmatter | ignored | ignored | yes |
| `allowed-tools` frontmatter | ignored | ignored | yes |
| Can call external systems | yes, through tools | no | yes, through the agent's tools |
| Can run code | through tools | no | yes, with `allowed-tools` |
| Authored in a UI | yes, Build tab | yes, conversationally | no, it's a file |
| Authored as a file | yes, upload a ZIP | yes, edit the .md directly | yes, that's the only way |

</div>

## What that means when you move a skill

<div class="stack-rows">
<div class="stack-row"><b>Repo to Studio</b><p>Usually clean. Zip the skill folder, upload it in the Build tab. Drop <code>allowed-tools</code>, it does nothing there. Re-point any tool references at the agent's actual connectors.</p></div>
<div class="stack-row"><b>Studio to SharePoint</b><p>The body carries. Anything that calls a tool does not. If your skill's steps assume an external lookup, that step has to become "ask the user" or the skill doesn't belong in SharePoint.</p></div>
<div class="stack-row"><b>SharePoint to repo</b><p>Cleanest direction. Copy the .md out of the Agent Assets library into <code>.github/skills/&lt;name&gt;/SKILL.md</code> and you're done.</p></div>
<div class="stack-row"><b>Anywhere to a non-Microsoft agent</b><p>The <code>SKILL.md</code> convention is shared beyond the Microsoft stack, which is why <code>.claude/skills/</code> is one of the recognized folders. Body and frontmatter carry. Everything platform-specific doesn't.</p></div>
</div>

## Write for portability from the start

Four habits that cost nothing and save the rewrite:

<div class="grid grid-2">
<div class="card">
<h4>Only rely on name and description</h4>
<p>Those two fields work everywhere. Everything else is a bonus you should be willing to lose.</p>
</div>
<div class="card">
<h4>Name tools by what they do</h4>
<p>"Look up the last three purchase prices" survives a platform move. "Call GetPriceHistoryV2" does not.</p>
</div>
<div class="card">
<h4>Keep the body platform-neutral</h4>
<p>No references to the Build tab, no SharePoint list names hardcoded in prose, no repo paths.</p>
</div>
<div class="card">
<h4>Put platform specifics in a bundled file</h4>
<p>If you genuinely need them, isolate them. Then porting is deleting one file, not rereading the body.</p>
</div>
</div>

<div class="note warn">
<p class="eyebrow">The honest caveat</p>
<p>This matrix reflects how these products behave today. Skills are moving fast across the whole industry and field support in particular is the thing most likely to change. Check the docs for the platform you're shipping to before you bet a rollout on a row in this table.</p>
</div>
