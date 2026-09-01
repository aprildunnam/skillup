---
title: Copilot Studio
desc: Creating, uploading, and testing skills on agents powered by the GitHub Copilot harness.
lede: Skills in Copilot Studio sit next to instructions, knowledge, and tools as a first class agent component.
---

## Where they live

Open your agent, go to the **Build** tab, and find **Skills** in the components panel. Everything happens there.

<div class="note warn">
<p class="eyebrow">Prerequisite worth checking first</p>
<p>Skills apply to agents and workflows powered by the <b>GitHub Copilot harness</b>. If your agent was built on a different harness, the Skills panel isn't the thing you're looking for. Check the harness before you spend an afternoon.</p>
</div>

## Creating one from blank

1. **Build** tab, components panel, **Skills**.
2. **Add skill**, then **Create from blank**.
3. **Name**: lowercase letters, numbers, and hyphens. No leading or trailing hyphen. This is enforced.
4. **Description**: what it does and when to activate. This is the field the orchestration runtime reads when deciding whether to invoke your skill, so it does the work described in [Level 200](/skillup/200-authoring/descriptions.html).
5. **Instructions**: your markdown body.
6. **Create**. It shows up in the components panel.

Then test it in the **Preview** tab, which is where the [tightening loop](/skillup/200-authoring/testing.html) actually happens.

## Uploading an existing skill

If you wrote the file in a text editor, or you're bringing one over from a repo, upload it instead of retyping it.

A skill package is a ZIP containing:

- A `SKILL.md` with YAML frontmatter and markdown instructions
- Optional supporting files: scripts, templates, reference documents

That package format is the portability story. The same ZIP is what you hand a coworker, commit to a repo, or attach to a second agent.

```
open-mic-runsheet.zip
  SKILL.md
  templates/
    runsheet.md
    promo-post.md
```

## Editing and managing

Skills you created from blank stay editable from the skill configuration panel at any time. That's the fast loop: tweak the description, hit Preview, ask again.

Skills added from an uploaded package are managed as a unit. Change the file, repackage, re-upload.

<div class="note brass">
<p class="eyebrow">Budget for the loop, not the run</p>
<p>Usage-based billing applies to using, building, testing, <em>and evaluating</em> agents on the GitHub Copilot harness, and those actions can consume Copilot Credits. Iterating on a skill twenty times in an afternoon is a real cost, not a free dev loop. Write the first draft in a text editor, upload it, and use Preview to confirm rather than to explore.</p>
</div>

## Skills next to the other components

Worth keeping straight while you're in the Build tab, because all four live in the same panel:

<div class="table-scroll">

| Component | What it is | Managed by |
|---|---|---|
| Instructions | General agent behavior and personality | Identity configuration |
| Knowledge | Data the agent can reference | Knowledge sources |
| Tools | Actions via external services | Connectors, APIs, MCP servers |
| Skills | Reusable, task-specific capabilities | Skill files or packages |

</div>

Skills can and should tell the agent how to use its tools. That's the [pattern in Level 400](/skillup/400-advanced/skills-plus-tools.html) and it's where Copilot Studio skills get genuinely powerful, because unlike SharePoint skills they can reach outside.

## At the cafe

The consignment agent lives here. Local musicians drop off CDs and vinyl on consignment, and the agent handles intake: terms, split, payout schedule, and writing the row into the tracking system.

It needs to reach the inventory system, so it needs tools. It needs a strict procedure that nobody deviates from, because it's effectively a contract. That's a skill plus tools on a real agent, which is exactly what Copilot Studio is for. Full walkthrough in [the consignment scenario](/skillup/scenarios/consignment.html).
