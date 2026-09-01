---
title: Show, don't tell
desc: Why one worked example outperforms four paragraphs of description.
lede: Adjectives are cheap and models discount them. Examples are expensive and models follow them.
---

## The problem with adjectives

Here's a real thing people write:

> Responses should be professional yet warm, concise but thorough, and reflect the friendly character of the shop while maintaining accuracy.

Every word in that sentence is doing nothing. "Professional yet warm" describes an enormous space of possible outputs. The model picks one. It's probably not yours.

Now here's the same intent as an example:

```markdown
## Output format

**Disc:** VG+ - light surface scuffs, no fingernail-catching scratches
**Sleeve:** VG - ring wear on both faces, price sticker residue
**Caps:** Sleeve capped at VG by ring wear. Disc could reach NM if it cleans up.
```

That's not a description of tone. It's a demonstration of it, and it constrains length, structure, punctuation, and voice at the same time.

## Three places examples pay off

<div class="grid grid-2">
<div class="card">
<h4>The output shape</h4>
<p>Non-negotiable. If your skill produces anything structured, show the structure literally.</p>
</div>
<div class="card">
<h4>A judgment call</h4>
<p>When the rule has a fuzzy edge, one worked case teaches the edge better than a definition does.</p>
</div>
<div class="card">
<h4>The thing that keeps going wrong</h4>
<p>A counterexample, labeled as one, fixes a specific recurring failure faster than another rule.</p>
</div>
<div class="card">
<h4>Not everywhere</h4>
<p>Examples cost tokens in the body. Two good ones beat six mediocre ones.</p>
</div>
</div>

## The counterexample pattern

When a skill keeps drifting the same way, show the drift and the fix side by side. Label them clearly so the model doesn't learn the wrong one.

```markdown
## Grading the sleeve

Ring wear caps the sleeve at VG even if everything else is clean.

Wrong:
  **Sleeve:** NM - minor ring wear, otherwise excellent

Right:
  **Sleeve:** VG - ring wear on both faces caps this below VG+
```

Two lines fixed a failure that three paragraphs of explanation hadn't. Use it sparingly, because a body full of "wrong" examples starts pulling in the direction you don't want.

## A judgment call, taught by example

From the lesson studio. The rule is "note progress honestly but never make a parent feel their kid is behind." That's genuinely hard to state as a rule, so state it as a case.

```markdown
## Tone on progress notes

Honest about what's not working, never comparative, never a diagnosis.

Wrong:
  "Ellie is behind where most students are at eight weeks and is
  struggling with chord transitions."

Right:
  "Ellie's got the C and G shapes solid. Transitions between them
  are the current work, which is normal at this stage. Ten minutes
  of switching practice a day will move it quickly."
```

Same facts. The example carries the tone rule better than any adjective could, and it also quietly demonstrates the "give the parent something to do" habit nobody wrote down.

<div class="note brass">
<p class="eyebrow">Cheap trick that works</p>
<p>Take the best output your agent ever produced for this task and paste it into the skill as the example. You already did the work of judging it. That's the fastest good example you'll ever write.</p>
</div>
