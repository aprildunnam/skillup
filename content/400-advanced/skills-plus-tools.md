---
title: Skills that drive tools
desc: The pattern where a skill orchestrates connectors and MCP servers instead of duplicating them.
lede: This is where skills stop being fancy prompts. The best skills often contain no domain knowledge at all, just the order of operations.
---

## The division of labor

<div class="stack-rows">
<div class="stack-row"><b>The tool</b><p>Knows how to talk to the inventory system. Doesn't know your business.</p></div>
<div class="stack-row"><b>The skill</b><p>Knows which tools to call, in what order, what to do with the answers, and what your shop does differently. Can't talk to anything itself.</p></div>
<div class="stack-row"><b>Together</b><p>An agent that prices a used record the way your shop prices used records.</p></div>
</div>

## A worked example

`used-record-pricing` at the cafe. The agent has three tools already: an inventory lookup, a sales history query, and a market comps connector. None of them know anything about how April prices records.

```markdown
---
name: used-record-pricing
description: Set a shelf price for a used record from a known condition
  grade and recent comps. Use when the grade is already established and
  someone asks what to price it at, what it's worth, or how to tag it.
---

# Used record pricing

## When to use this
The condition grade is already known. If it isn't, use
vinyl-condition-grading first.

## Steps
1. Look up whether we've carried this title before, and what it
   sold for. Use the sales history tool.
2. Pull current market comps for this pressing and grade.
3. Check current stock. If we already have two or more copies,
   flag it and price to move.
4. Apply the shop's pricing rules below.
5. Produce the price card.

## The shop's pricing rules
- Price to the disc grade, not the sleeve grade.
- Never price above the median comp for the same grade.
- Round to the nearest dollar, always ending in 0 or 5.
- Anything over $60 goes behind the counter, not on the floor.
- If we've had a copy sit longer than 90 days, price the new one
  10% under what that one is tagged at.

## Output format
**Price:** $XX
**Basis:** [comp median, our history, or floor rule]
**Placement:** floor / behind counter
**Note:** [anything the tagger needs to know, or "none"]

## If a tool fails
Say which lookup failed and give a price range from what you do
have. Do not present a single price you couldn't verify.
```

Read the body again. There is almost no vinyl knowledge in it. It's a sequence of tool calls plus five rules that exist only at this shop. That's the pattern.

## Why this is better than the alternatives

<div class="grid grid-2">
<div class="card">
<h4>Better than baking data into the skill</h4>
<p>Prices change. A skill with prices in it is wrong within a month. A skill that says "look it up, then apply these rules" stays right.</p>
</div>
<div class="card">
<h4>Better than a bigger tool</h4>
<p>Business rules don't belong in a connector. Rules change weekly, connectors change quarterly, and one of those is a code change.</p>
</div>
<div class="card">
<h4>Better than instructions</h4>
<p>These rules only matter while pricing. Making them always-on costs you tokens and attention on every unrelated turn.</p>
</div>
<div class="card">
<h4>Portable-ish</h4>
<p>Move the skill to a different agent with equivalent tools and the sequence still holds. Name tools by what they do, not by their API name, and this gets much easier.</p>
</div>
</div>

## Four rules for tool-driving skills

**Name tools by function, not by ID.** "Use the sales history tool" survives a platform migration. "Call `GetSalesHistoryV2`" doesn't.

**Say what to do when a tool fails.** This is the most-skipped section in every skill of this type. Without it, the agent will confidently make something up to fill the gap.

**Put the order in the steps.** If step 3 depends on step 1's output, say so. Models will parallelize things that shouldn't be parallelized.

**Keep the rules separate from the sequence.** Steps say what to do. Rules say how your shop is different. Mixing them makes both harder to edit.

<div class="note warn">
<p class="eyebrow">Platform reality check</p>
<p>This pattern needs tools, which means it needs a platform that has them. Copilot Studio agents and GitHub Copilot can do this. <a href="/skillup/300-shipping/m365.html">Copilot in SharePoint can't reach external systems</a>, so a tool-driving skill written there has to become "ask the user for the number" instead.</p>
</div>
