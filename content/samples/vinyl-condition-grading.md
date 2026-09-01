---
title: vinyl-condition-grading
desc: The simplest useful skill on the site, annotated line by line.
eyebrow: Sample 01 / Read this one first
lede: If you only read one file on this site, read this one. Everything Level 200 teaches is visible in about forty lines.
script: sample.js
---

<div class="chips"><span class="chip">M365 Copilot</span><span class="chip">SharePoint</span><span class="chip">no tools needed</span><span class="chip">~45 lines</span></div>

<p><button class="mini" data-load-skill="vinyl-condition-grading">Open this in the Skill Forge</button></p>

## The file

<!--include:assets/skills/vinyl-condition-grading.md-->

## What makes this work

### The description carries eight trigger words

`grade`, `assess`, `condition-check`, `record`, `LP`, `45`, `sleeve`, `pricing`. Every one of those is a word somebody would actually type. That's not decoration, it's the entire matching surface. [More on descriptions.](/skillup/200-authoring/descriptions.html)

### It says what it isn't for

> Do not use this for sealed new stock, which is Mint by definition, or for CDs, which use a different scale.

Two exclusions, one line, and it prevents a whole category of confident wrong answers. The most-skipped section in every badly written skill.

### The output format is shown, not described

Three lines of literal shape. No instructions about being concise, no adjectives about tone. The format does all of that work implicitly, and it does it more reliably. [More on showing versus telling.](/skillup/200-authoring/examples.html)

### The rules are only rules people break

Look at what's *not* in there. No "be accurate," no "be helpful," no "consider the customer." Every rule is a specific mistake somebody has actually made:

- "Good" is a low grade, not a compliment
- A fingernail-catching scratch caps the disc at VG
- Ring wear on both faces caps the sleeve at VG

Those exist because somebody got them wrong. That's the bar for including a rule.

### "Ask, don't guess" is explicit

> If you don't have enough information, ask. Do not guess a grade.

Without this line the model will confidently invent a grade from a vague description. It's one sentence and it's the difference between a useful question and a wrong answer that gets tagged onto a record.

### The heavy reference is bundled, not inline

> For box sets, promos, or non-US pressings, see `goldmine-full.md`.

The full Goldmine reference is 900 lines covering cases that come up maybe once in twenty runs. In the body it would cost 900 lines every time. Bundled, it costs nothing until it's needed. [More on bundles.](/skillup/400-advanced/bundles.html)

<div class="note bad">
<p class="eyebrow">Compare it to the broken version</p>
<p>The Forge ships with a deliberately broken variant of this exact skill. Same task, same platform, and it fires correctly but ignores half its own instructions. <button class="mini" data-load-skill="broken/ignores-instructions">Load the broken one</button> and see what the scorecard says.</p>
</div>
