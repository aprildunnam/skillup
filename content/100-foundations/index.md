---
title: Skills in ninety seconds
desc: What an Agent Skill is, in plain language, with a real one on screen.
lede: A skill is a folder with a markdown file in it that teaches your agent how you do a thing. Everything else on this site is detail.
---

## Start with the problem

Marcus works the record floor at April's Acoustic Cafe. Every Tuesday a crate of used vinyl comes in and he has to grade the condition of each record, which means checking the sleeve and the disc separately against a standard, writing it up the same way every time, and never using the word "good" because in record grading "Good" actually means beat to hell.

He asks Copilot to help. It writes him a nice paragraph about the record. It uses "good" to mean good. It grades the sleeve and the disc as one thing. It's wrong in the same four ways every single week.

Marcus is not going to retype the rules every Tuesday. So he writes them down once, in a file, and hands that file to the agent.

That file is a skill.

<div class="analogy">
<p class="eyebrow">The analogy this whole site runs on</p>
<p>A skill is the binder you hand a new hire.</p>
<p>Your agent's <b>instructions</b> are the job description. Always in effect, applies to everything. Your <b>knowledge</b> is the filing cabinet it can go search. Your <b>tools</b> are the keys to the building, the till, and the email account. And a <b>skill</b> is the three page binder on the shelf labeled "how we grade used vinyl," which nobody opens until somebody's grading vinyl.</p>
<p>Here's the part that matters: the only thing anybody reads until they need it is the label on the spine. Write a bad label and the binder never gets opened.</p>
</div>

## Here's a real one

This is the actual file. Nothing is hidden and nothing is abbreviated.

```markdown
---
name: vinyl-condition-grading
description: Grade used vinyl records for resale using Goldmine standards.
  Use when someone asks to grade, assess, or condition-check a record,
  LP, 45, or sleeve, or when pricing an incoming used record.
---

# Vinyl condition grading

## When to use this
A record has come in and needs a condition grade before it can be
priced or listed. Applies to LPs, 45s, and box sets.

## Grade the disc and the sleeve separately
Always produce two grades. Never average them into one.

Use Goldmine grades only, in this order, best to worst:
Mint (M), Near Mint (NM), Very Good Plus (VG+), Very Good (VG),
Good (G), Poor (P).

## Steps
1. Ask for the disc condition if you weren't told: visible scuffs,
   scratches you can feel with a fingernail, warps, spindle marks.
2. Ask for the sleeve condition: seam splits, ring wear, writing,
   corner dings, whether the inner sleeve is original.
3. Assign a grade to each using the rules above.
4. Note anything that caps the grade, like a seam split or a
   fingernail-catching scratch.

## Output format
Always respond with exactly this:

**Disc:** [grade] - [one line of reasoning]
**Sleeve:** [grade] - [one line of reasoning]
**Caps:** [anything preventing a higher grade, or "none"]

## Rules
- "Good" is a low grade, not a compliment. Never use it loosely.
- A scratch you can catch a fingernail on caps the disc at VG.
- A split seam caps the sleeve at VG.
- If you don't have enough information, ask. Do not guess a grade.
```

That's the whole thing. Frontmatter at the top, markdown underneath. No code, no JSON schema, no deployment pipeline.

## What changed

<div class="pair">
<div class="no">
<p class="eyebrow">Without the skill</p>
<p>"This looks like a well-loved copy in good condition with some minor wear to the jacket. It should still play nicely!"</p>
</div>
<div class="yes">
<p class="eyebrow">With the skill</p>
<p><b>Disc:</b> VG+ - light surface scuffs, no fingernail-catching scratches<br>
<b>Sleeve:</b> VG - ring wear on both faces, price sticker residue<br>
<b>Caps:</b> Sleeve capped at VG by ring wear. Disc could reach NM if it cleans up.</p>
</div>
</div>

Same model. Same question. The difference is that somebody wrote down how the shop actually does it.

## Three things people get wrong immediately

<div class="grid grid-2">
<div class="card">
<h4>A skill is not a prompt</h4>
<p>A prompt is something you type. A skill is something that sits there and gets picked up automatically when it's relevant. You don't invoke it by name.</p>
</div>
<div class="card">
<h4>A skill is not a tool</h4>
<p>Tools reach out and touch other systems. Skills are instructions. A skill can tell the agent how to use a tool, but it can't be one.</p>
</div>
<div class="card">
<h4>A skill isn't always on</h4>
<p>This is the good part. A skill costs you almost nothing until the moment it's needed, which is why you can have forty of them.</p>
</div>
<div class="card">
<h4>You don't need to be a developer</h4>
<p>Marcus isn't one. If you can write a decent set of instructions for a coworker, you can write a skill.</p>
</div>
</div>

<div class="note">
<p class="eyebrow">Next</p>
<p>Take that file apart piece by piece in <a href="/skillup/100-foundations/anatomy.html">Anatomy of a SKILL.md</a>. Then read <a href="/skillup/100-foundations/how-it-fires.html">how the agent decides to use it</a>, which is the single page on this site that makes everything else make sense.</p>
</div>
