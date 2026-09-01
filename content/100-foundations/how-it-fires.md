---
title: How the agent decides to use it
desc: Progressive disclosure, and why it's the concept that makes every other rule about skills obvious.
lede: Only the name and description are loaded all the time. Once you understand that, every other rule about writing skills stops being arbitrary.
---

## The three tiers

<div class="tiers">
<div class="tier">
<b>name + description</b>
<p>Always loaded, for every skill you have installed, on every single turn. This is all the orchestrator sees when deciding whether your skill is relevant to what the user just typed.</p>
<span class="cost">~20 to 60 tokens</span>
</div>
<div class="tier">
<b>SKILL.md body</b>
<p>Loaded only when the skill fires. This is the procedure, and it's why a long body isn't automatically expensive.</p>
<span class="cost">~200 to 2,000 tokens</span>
</div>
<div class="tier">
<b>bundled files</b>
<p>Scripts, templates, checklists, reference docs. Read on demand, only if the agent decides mid-task that it needs one.</p>
<span class="cost">paid only when opened</span>
</div>
</div>

This pattern has a name: **progressive disclosure**. The agent gets a table of contents up front and pulls the chapter only when it needs it.

## Why this is the whole ballgame

Run the math on Marcus's shop. Say the cafe has forty skills installed across the record floor, the counter, the lesson studio, and the online store.

<div class="table-scroll">

| | Tokens |
|---|---|
| 40 descriptions, always loaded | ~1,600 |
| One skill body, when it fires | ~800 |
| **Cost of a typical turn** | **~2,400** |

</div>

Now imagine skills didn't work this way and every body was always loaded. Forty skills at 800 tokens each is 32,000 tokens of instructions competing for the model's attention on every turn, including "what's the wifi password." The agent would be worse at everything.

<div class="analogy">
<p class="eyebrow">The shelf</p>
<p>Forty binders on a shelf cost you the width of forty spines. Read all forty cover to cover before every conversation and you'd never get anything done. The spine label is the entire interface.</p>
</div>

## What this means for how you write

Every rule in Level 200 falls straight out of the three tiers.

<div class="grid grid-2">
<div class="card">
<h4>Your description does all the work</h4>
<p>It's the only thing competing for the orchestrator's attention. A vague description means your skill never fires, no matter how good the body is.</p>
</div>
<div class="card">
<h4>A long body is not the sin people think it is</h4>
<p>It costs nothing until it fires. The real sin is a long body that fires <em>too often</em>, which is a description problem.</p>
</div>
<div class="card">
<h4>Reference material belongs in bundled files</h4>
<p>If it's a lookup table the agent needs once in twenty runs, it doesn't belong in the body.</p>
</div>
<div class="card">
<h4>Skill sprawl is real but slow</h4>
<p>Descriptions are cheap individually and expensive in aggregate. Forty is comfortable. Four hundred is a problem.</p>
</div>
</div>

## The decision, step by step

1. User types something. `"Can you grade this Steely Dan LP that came in?"`
2. The orchestrator has every installed skill's name and description in context already.
3. It matches the request against those descriptions. `vinyl-condition-grading` says "use when someone asks to grade, assess, or condition-check a record, LP, 45, or sleeve." Direct hit on "grade" and "LP."
4. It loads that skill's body into context.
5. The body's instructions now shape the response for this task.
6. Mid-task, if the body says "see `goldmine-grades.md` for box sets," and this is a box set, it opens that file too.

<div class="note bad">
<p class="eyebrow">Where it goes wrong</p>
<p>Step 3 is where almost every skill failure lives. Not the body. Not the format. The match. If your description doesn't contain the words a real person would type, steps 4 through 6 never happen and you'll swear the skill is broken.</p>
</div>

<div class="note">
<p class="eyebrow">Next</p>
<p><a href="/skillup/100-foundations/which-is-which.html">Skill, instruction, knowledge, or tool</a>. Now that you know how skills load, the difference between them and everything else gets easy.</p>
</div>
