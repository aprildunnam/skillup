---
title: Body structure that works
desc: A skeleton you can copy, and the reasoning behind each section.
lede: There's no required structure for a skill body, which is exactly why most of them are bad. Here's one that holds up.
---

## The skeleton

```markdown
# [Skill name in plain words]

## When to use this
[One or two sentences scoping it. Include when NOT to use it.]

## Steps
1. [First thing]
2. [Second thing]
3. [Third thing]

## Output format
[Show the literal shape you want back.]

## Rules
- [The thing people get wrong]
- [The other thing people get wrong]

## Don't
- [Only if you've actually been burned]
```

Copy that. Delete what you don't need. Most good skills use four of those six sections.

## Section by section

### When to use this

This is the description's backup, and it does a different job. The description gets you invoked. This section stops the agent from applying the skill to a request that only *looked* relevant.

```markdown
## When to use this
A record has come in and needs a condition grade before it can be
priced or listed. Applies to LPs, 45s, and box sets.

Do not use this for sealed new stock, which is graded M by definition,
or for CDs, which use a different scale.
```

That second paragraph saves you from a whole category of weird behavior.

### Steps

Numbered, imperative, one action each. If a step has an "and" in it, it's probably two steps.

<div class="pair">
<div class="no">
<p class="eyebrow">Mushy</p>
<p>"Review the record's condition and consider the sleeve as well, then determine appropriate grades based on the standards."</p>
</div>
<div class="yes">
<p class="eyebrow">Followable</p>
<p>1. Ask for the disc condition if you weren't told.<br>2. Ask for the sleeve condition.<br>3. Assign a grade to each.<br>4. Note anything that caps the grade.</p>
</div>
</div>

The second version also encodes something the first doesn't: **ask, don't guess**. That behavior falls out of the structure for free.

### Output format

If you take one thing from this page, take this. Showing the shape is worth more than any amount of describing it.

```markdown
## Output format
Always respond with exactly this:

**Disc:** [grade] - [one line of reasoning]
**Sleeve:** [grade] - [one line of reasoning]
**Caps:** [anything preventing a higher grade, or "none"]
```

Three lines. No adjectives about tone, no instructions about being concise. The format *is* the instruction about being concise.

### Rules

Only rules somebody actually breaks. A rule that nobody would violate anyway is dead weight in your context.

<div class="pair">
<div class="no">
<p class="eyebrow">Dead weight</p>
<p>"Be accurate. Be helpful. Use professional language. Consider the customer's needs."</p>
</div>
<div class="yes">
<p class="eyebrow">Earns its tokens</p>
<p>"'Good' is a low grade, not a compliment. Never use it loosely."<br>"A scratch you can catch a fingernail on caps the disc at VG."<br>"If you don't have enough information, ask. Do not guess a grade."</p>
</div>
</div>

### Don't

Optional. Use it when there's a specific failure you keep seeing. Two or three lines maximum. If your "Don't" section is longer than your "Steps" section, the skill is fighting the model instead of guiding it, and it'll lose.

## How long should the body be?

Long enough to be complete, short enough that you'd read it. Practical bands:

<div class="table-scroll">

| Length | Verdict |
|---|---|
| Under ~15 lines | Usually too thin to change behavior. Ask what it's actually adding |
| ~20 to 120 lines | The sweet spot for most skills |
| ~120 to 300 lines | Fine if it's genuinely a big procedure. Check whether reference material should move to a bundled file |
| Over ~300 lines | Almost always two skills, or one skill and a bundled reference |

</div>

Remember the loading model: the body costs nothing until the skill fires. So length isn't the enemy. **Length that fires too often** is the enemy, and that's a description problem.

<div class="note">
<p class="eyebrow">Next</p>
<p><a href="/skillup/200-authoring/examples.html">Show, don't tell</a>. The single technique that improves skill output more than any structural change.</p>
</div>
