---
title: Should this be a skill?
desc: Seven questions, six verdicts, and the reasoning behind whichever one you get.
lede: Most people can't name a single good use case for a skill. This is faster than reading a page about it.
script: decide.js
---

<div class="wizard" id="wizard"></div>

## The six possible answers

<div class="table-scroll">

| Verdict | You get this when |
|---|---|
| **Build a skill** | Repeatable, multi-step, house-specific, and only sometimes relevant |
| **Use instructions** | It should apply to every conversation, not just some |
| **Add knowledge** | The hard part is finding a fact, not following a procedure |
| **You need a tool first** | It has to read or write an external system |
| **Consider a separate agent** | Different audience, different permissions, different front door |
| **Just prompt it** | One-off, or so rare that a permanent description isn't worth it |

</div>

## Why "no" is the useful answer

Every skill you install costs description tokens on every single turn, forever, whether it fires or not. Forty skills is about 1,600 tokens of standing cost. That's fine when all forty earn it.

The expensive version is twelve skills where four should have been instructions, three should have been knowledge, and two get used twice a year. Those nine are costing you tokens and, worse, [matching precision](/skillup/400-advanced/tokens.html) for the three that actually work.

<div class="note brass">
<p class="eyebrow">The pattern behind the questions</p>
<p>Four of the seven questions are really one question in different clothes: <b>always or sometimes?</b> Always is instructions. Sometimes is a skill. Nearly never is a prompt. If you remember nothing else from this tool, remember that.</p>
</div>

<div class="note">
<p class="eyebrow">Got "build a skill"?</p>
<p>Head to <a href="/skillup/200-authoring/">Level 200</a> to write it properly, or straight to the <a href="/skillup/lab/forge.html">Forge</a> if you'd rather learn the rules by breaking them.</p>
</div>
