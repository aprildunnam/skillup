---
title: Skill, instruction, knowledge, or tool
desc: The comparison table people screenshot, plus the question that settles it in five seconds.
lede: Four things sound similar and do completely different jobs. Getting this wrong is the most common reason a skill doesn't work.
---

## The table

<div class="table-scroll">

| | What it is | When it applies | Where it's managed |
|---|---|---|---|
| **Instructions** | The agent's general behavior and personality | Always, every turn | Agent identity or configuration |
| **Knowledge** | Data the agent can search and reference | Whenever the agent needs a fact | Knowledge sources, files, sites, indexes |
| **Tools** | Actions taken against external systems | When an action is required | Connectors, APIs, MCP servers |
| **Skills** | Reusable, task-specific procedures | Only when the task comes up | Markdown files or packages |

</div>

## The five second version

Ask yourself one question: **does this apply always, sometimes, or only when I go get it?**

<div class="grid grid-2">
<div class="card">
<h4>Always</h4>
<p>That's instructions. "Be concise. Never quote a price without a date. Sign off as the Cafe, not as an AI."</p>
</div>
<div class="card">
<h4>Sometimes, and it's a procedure</h4>
<p>That's a skill. "Here's how we grade vinyl." Nobody needs that during a conversation about the espresso machine.</p>
</div>
<div class="card">
<h4>Sometimes, and it's a fact</h4>
<p>That's knowledge. The Goldmine grading standard itself, the supplier price list, last year's open mic schedule.</p>
</div>
<div class="card">
<h4>It has to touch something outside</h4>
<p>That's a tool. Reading the inventory database, sending the email, writing a row to the list.</p>
</div>
</div>

## Worked examples from the shop

<div class="table-scroll">

| What somebody wants | Answer | Why |
|---|---|---|
| "Always write in the shop's voice, never corporate" | Instructions | Applies to every response, not to one task |
| "How we grade used vinyl" | Skill | A procedure, needed only sometimes |
| "The full Goldmine grading standard document" | Knowledge | It's a reference to look things up in |
| "Check what we paid for this title last time" | Tool | Requires reading the inventory system |
| "How we run the Thursday open mic, start to finish" | Skill | A multi-step procedure with a house format |
| "The current lesson rate card" | Knowledge | A fact that changes independently of any procedure |
| "Post the promo to Instagram" | Tool | An action against an external system |
| "How we write a promo post, and what never goes in one" | Skill | The procedure around the tool, not the tool |

</div>

Notice the last two. That pair comes up constantly. **The tool does the thing. The skill knows how your shop does the thing.** They work together, and neither replaces the other.

<div class="note brass">
<p class="eyebrow">The pattern worth remembering</p>
<p>A good skill often does nothing but tell the agent how to use tools it already has, in what order, with what house rules. That's not a lesser kind of skill. That's the best kind. There's a whole page on it in <a href="/skillup/400-advanced/skills-plus-tools.html">Level 400</a>.</p>
</div>

## Two more that trip people up

**An agent, not a skill.** If the audience is different, the permissions are different, or you'd want it to have its own name and its own front door, that's a separate agent. A skill lives inside an agent.

**A prompt, not a skill.** If you're going to do it once, type it. Skills are for the thing you do every Tuesday.

<div class="note">
<p class="eyebrow">Try it</p>
<p>The <a href="/skillup/lab/decide.html">Should this be a skill?</a> tool in the lab walks these questions one at a time and tells you which of the six answers you landed on, and why.</p>
</div>
