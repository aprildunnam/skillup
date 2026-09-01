---
title: Before and after
desc: Five real bad skills, rewritten line by line.
lede: The highest value page in Level 200. Every one of these is a mistake people actually make.
---

## 1. The one that describes itself

<div class="pair">
<div class="no">
<p class="eyebrow">Before</p>
<p><code>name: open-mic-runsheet</code><br><code>description: Open mic run sheet skill.</code></p>
</div>
<div class="yes">
<p class="eyebrow">After</p>
<p><code>name: open-mic-runsheet</code><br><code>description: Build the Thursday open mic run of show from the sign-up list, including set order and sound check times. Use when someone asks about the open mic lineup, running order, who's playing when, or the Thursday night schedule.</code></p>
</div>
</div>

**What changed:** the before version restates the name and matches nothing. The after version carries eight trigger phrases somebody would actually type: lineup, running order, who's playing when, Thursday night, sound check, set order, sign-up, open mic.

## 2. The one made of adjectives

<div class="pair">
<div class="no">
<p class="eyebrow">Before</p>
<pre><code># Lesson recap

Write professional yet friendly recaps of student
lessons. Be encouraging and positive while remaining
honest. Keep it appropriately concise and make sure
parents feel informed and supported.</code></pre>
</div>
<div class="yes">
<p class="eyebrow">After</p>
<pre><code># Lesson recap

## Output format
**What we worked on:** [one line]
**Going well:** [one specific thing]
**This week's practice:** [one task, with minutes per day]

## Rules
- Never compare a student to other students.
- Never use the word "behind."
- Always end with something the parent can act on.
- Three lines. If it's longer, cut it.</code></pre>
</div>
</div>

**What changed:** four adjectives became a format and four rules. The format enforces "concise" better than the word "concise" ever did.

## 3. The one that's really instructions

<div class="pair">
<div class="no">
<p class="eyebrow">Before</p>
<pre><code>name: shop-voice
description: Use the shop's tone of voice in all
  responses. Never sound corporate. Sign off as
  April's Acoustic Cafe.</code></pre>
</div>
<div class="yes">
<p class="eyebrow">After</p>
<p>Delete the skill. Move those three lines into the agent's instructions.</p>
<p>This should apply to every response, which makes it instructions by definition. As a skill it's worse than useless, because now it only applies when the orchestrator happens to think tone is relevant.</p>
</div>
</div>

**What changed:** the right answer was "this isn't a skill." Run it through the [decision tool](/skillup/lab/decide.html) if you're unsure.

## 4. The one that's four skills

<div class="pair">
<div class="no">
<p class="eyebrow">Before</p>
<pre><code>name: record-floor-helper
description: Handles record floor tasks including
  grading, pricing, listing, restocking, and
  customer questions about inventory.</code></pre>
<p>340 lines of body covering all five.</p>
</div>
<div class="yes">
<p class="eyebrow">After</p>
<pre><code>vinyl-condition-grading   (~70 lines)
used-record-pricing       (~90 lines)
listing-blurb             (~40 lines)
restock-check             (~50 lines)</code></pre>
<p>Customer inventory questions turned out to be a tool call, not a skill.</p>
</div>
</div>

**What changed:** one skill that fires on everything and loads 340 lines became four that fire precisely and load 40 to 90. The description "handles record floor tasks" was matching every conversation on the floor.

## 5. The one that guesses

<div class="pair">
<div class="no">
<p class="eyebrow">Before</p>
<pre><code>## Steps
1. Determine the condition of the record.
2. Assign a grade.
3. Provide the grade to the user.</code></pre>
</div>
<div class="yes">
<p class="eyebrow">After</p>
<pre><code>## Steps
1. Ask for the disc condition if you weren't told:
   scuffs, fingernail-catching scratches, warps.
2. Ask for the sleeve condition: seam splits, ring
   wear, writing, corner dings.
3. Assign a grade to each, separately.
4. Note anything that caps the grade.

## Rules
- If you don't have enough information, ask.
  Do not guess a grade.</code></pre>
</div>
</div>

**What changed:** "determine the condition" gave the model permission to invent one. Naming what to ask for, and adding an explicit "do not guess," turns a confident wrong answer into a useful question.

<div class="note">
<p class="eyebrow">Your turn</p>
<p>The <a href="/skillup/lab/forge.html">Skill Forge</a> ships with three deliberately broken skills. Load one, read the findings, fix it, and watch the score move.</p>
</div>
