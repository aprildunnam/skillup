---
title: used-record-pricing
desc: A skill that orchestrates tools instead of duplicating them.
eyebrow: Sample 02 / Skills plus tools
lede: Read the body and notice how little vinyl knowledge is in it. It's a sequence of tool calls plus five rules that only exist at this shop.
script: sample.js
---

<div class="chips"><span class="chip">Copilot Studio</span><span class="chip">needs 2 tools</span><span class="chip">~35 lines</span></div>

<p><button class="mini" data-load-skill="used-record-pricing">Open this in the Skill Forge</button></p>

## The file

<!--include:assets/skills/used-record-pricing.md-->

## What makes this work

### The chain is explicit

> The condition grade is already known. If it isn't, use vinyl-condition-grading first, then come back.

One line, three jobs: it scopes the skill, it stops the wrong skill firing, and it tells the agent what to do instead. This is how you keep two related skills from competing. [More on skill sets.](/skillup/400-advanced/skill-sets.html)

### Tools are named by what they do

"Use the sales history tool," not "call `GetSalesHistoryV2`." That phrasing survives a platform migration, a connector rename, and a move from Copilot Studio to a repo. [More on the pattern.](/skillup/400-advanced/skills-plus-tools.html)

### The business rules are in the skill, not the connector

Five rules, and every one of them is a fact about this shop rather than a fact about records:

- Price to the disc grade, not the sleeve grade
- Never above the median comp
- Round to 0 or 5
- Over $60 goes behind the counter
- 90-day-stale copies set the ceiling for the new one

Those change on the owner's whim. In a connector, that's a code change. In a skill, it's a text edit by the person who made the decision.

### It says what to do when a tool fails

> Say which lookup failed and give a price range from what you do have. Do not present a single price you could not verify.

The single most skipped section in tool-driving skills, and the one that prevents the worst failure mode: a confident price built on a lookup that silently returned nothing.

### The description names the boundary

> Use when the grade is already established.

Its sibling, `vinyl-condition-grading`, says "use before pricing, when the grade isn't known yet." Each description names the other's territory. That's what disjoint scope looks like in practice.
