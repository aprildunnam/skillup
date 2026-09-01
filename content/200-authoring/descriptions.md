---
title: The description is the whole ballgame
desc: The one field that decides whether your skill ever runs.
lede: The orchestrator reads your description and nothing else when it decides whether to open your skill. Write it like a spine label, not a summary.
---

## What the description is actually for

It is not a summary of the skill. It's a **matching surface**.

The orchestrator has every installed skill's description in context. A user types something. It decides which descriptions, if any, are relevant. If yours doesn't contain language close to what the user typed, your skill loses, no matter how good the body is.

So the job of the description is to contain the words a real person would use.

## The two part formula

Every good description does two things. Most bad ones only do the first.

```
[what it does] + [when to use it, in the user's own words]
```

<div class="pair">
<div class="no">
<p class="eyebrow">Only does part one</p>
<p><code>description: Grades vinyl records.</code></p>
<p>True, useless. Nothing here matches how anybody talks. "Can you check this LP for me" has zero overlap.</p>
</div>
<div class="yes">
<p class="eyebrow">Does both</p>
<p><code>description: Grade used vinyl records for resale using Goldmine standards. Use when someone asks to grade, assess, or condition-check a record, LP, 45, or sleeve, or when pricing an incoming used record.</code></p>
<p>Now "grade," "assess," "condition," "record," "LP," "45," "sleeve," and "pricing" are all live matches.</p>
</div>
</div>

## Collect the trigger words first

Before you write anything, write down five ways somebody would ask for this. Actual sentences, from actual people.

> "can you grade this one"
> "what condition is this Steely Dan"
> "is this LP VG+ or NM"
> "check the sleeve on this"
> "what should we price this at"

Now look at the nouns and verbs: grade, condition, LP, sleeve, price. Those go in the description. You just built it from the outside in, which is the right direction.

<div class="note brass">
<p class="eyebrow">The test</p>
<p>Read your description and ask: if I only had this one sentence and a user's message, could <em>I</em> tell whether to open the binder? If you'd hesitate, so will the orchestrator.</p>
</div>

## Five things that kill a description

<div class="table-scroll">

| Mistake | What it looks like | Why it fails |
|---|---|---|
| Restating the name | `name: vinyl-condition-grading` / `description: Vinyl condition grading` | Adds zero information. You've paid the token cost for nothing |
| Abstraction | "Helps with content and documents" | Matches everything, so it fires constantly and drowns out better skills |
| Internal jargon only | "Runs the CRT-4 intake protocol" | Nobody types "CRT-4." Use jargon <em>and</em> plain words |
| Describing the body | "Contains a six step process with an output template" | Describes the binder, not what's in it |
| No trigger clause | "Grades used vinyl to Goldmine standards" | Accurate, but never says <em>when</em>. Add "Use when..." |

</div>

## Length

Long enough to carry the trigger words, short enough that it isn't a paragraph. Roughly one to three sentences. You're paying for this text on every turn, across every skill you have installed, forever, so it isn't free, but under-writing it to save forty tokens is a bad trade.

<div class="pair">
<div class="no">
<p class="eyebrow">Too short</p>
<p><code>Handles open mic stuff.</code></p>
</div>
<div class="yes">
<p class="eyebrow">About right</p>
<p><code>Build the Thursday open mic run of show from the sign-up list. Use when someone asks about the open mic lineup, set order, sound check schedule, or run sheet for a Thursday night.</code></p>
</div>
</div>

## When two skills both match

It happens, and it's the number one cause of "it used the wrong one." The fix is not a longer description. The fix is **disjoint scope**: make each description say what it's for in a way the other one can't claim.

<div class="pair">
<div class="no">
<p class="eyebrow">Overlapping</p>
<p><code>used-record-pricing</code>: "Price used records."<br><br><code>vinyl-condition-grading</code>: "Assess used records."</p>
<p>"Price" and "assess" both get invoked by "what's this worth," and now it's a coin flip.</p>
</div>
<div class="yes">
<p class="eyebrow">Disjoint</p>
<p><code>vinyl-condition-grading</code>: "...assign a condition grade. Use before pricing, when the grade isn't known yet."<br><br><code>used-record-pricing</code>: "...set a shelf price from a known condition grade and recent comps. Use when the grade is already established."</p>
</div>
</div>

Each one now names the other's boundary. That's the trick.

<div class="note">
<p class="eyebrow">Try it</p>
<p>Paste your description into the <a href="/skillup/lab/forge.html">Skill Forge</a>. It checks length, trigger language, whether you restated the name, and whether you used concrete nouns anybody would actually type.</p>
</div>
