---
title: The token economy
desc: What every installed skill costs you before it ever fires, and how to get it back.
lede: Skills are cheap, not free. Knowing exactly where the cost sits is what lets you have forty of them without your agent getting worse.
---

## The three costs

Straight from the [loading model](/skillup/100-foundations/how-it-fires.html):

<div class="tiers">
<div class="tier">
<b>Always-on tax</b>
<p>Every installed skill's name and description, in context, on every turn, forever. You pay this whether the skill fires or not.</p>
<span class="cost">~20 to 60 each</span>
</div>
<div class="tier">
<b>Firing cost</b>
<p>The body, loaded when the skill matches. Paid per invocation.</p>
<span class="cost">~200 to 2,000</span>
</div>
<div class="tier">
<b>Reference cost</b>
<p>Bundled files, read only when the agent decides it needs one. Often never.</p>
<span class="cost">0 most turns</span>
</div>
</div>

## Do the arithmetic once

April's Acoustic Cafe, forty skills across the whole shop:

<div class="table-scroll">

| | Tokens | When |
|---|---|---|
| 40 descriptions at ~40 each | ~1,600 | Every turn, always |
| One skill body fires | ~800 | On matching turns |
| A bundled reference gets opened | ~1,200 | Rarely |
| **Typical turn** | **~1,600 to 2,400** | |
| **Worst case turn** | **~3,600** | |

</div>

That's fine. That's a small fraction of a modern context window and it buys you forty encoded procedures.

Now the version where somebody didn't understand the loading model and wrote forty skills with 40-word descriptions and 2,000-token bodies that fire loosely:

<div class="table-scroll">

| | Tokens |
|---|---|
| 40 bloated descriptions at ~120 each | ~4,800 |
| Three skills fire because scopes overlap | ~6,000 |
| **Typical turn** | **~10,800** |

</div>

Four and a half times the cost, and worse output, because three competing procedures are now arguing inside the same context.

## Context rot

The real cost isn't the bill. It's that models get measurably worse at following instructions as the instruction pile grows. Twelve skills' worth of description, three of which are vague enough to half-match, produces an agent that's *less* reliable than the same agent with six sharp skills.

<div class="note bad">
<p class="eyebrow">The counterintuitive part</p>
<p>Deleting a mediocre skill often improves the agent more than adding a good one. Every description you remove is attention returned to the ones that are left.</p>
</div>

## Five ways to get tokens back

### 1. Cut the always-on tax first

It's the only cost you pay unconditionally, so it's where optimization compounds. Read every description you have and delete words that aren't doing matching work.

<div class="pair">
<div class="no">
<p class="eyebrow">~95 tokens</p>
<p>"This skill provides a comprehensive workflow for grading used vinyl records according to established industry standards, ensuring consistency and accuracy across all condition assessments performed by shop staff. It should be used whenever a record requires evaluation."</p>
</div>
<div class="yes">
<p class="eyebrow">~40 tokens</p>
<p>"Grade used vinyl to Goldmine standards. Use when someone asks to grade, assess, or condition-check a record, LP, 45, or sleeve, or when pricing incoming used stock."</p>
</div>
</div>

Same matching power, better matching power actually, at 42% of the cost. Multiply by forty skills.

### 2. Split fat skills

A 300-line body that fires often is expensive. Look for the split point, which is almost always a natural "or":

<div class="pair">
<div class="no">
<p class="eyebrow">One skill, 300 lines</p>
<p><code>record-intake</code>: grades it, prices it, writes the listing, and updates stock. Fires on all four, loads all 300 lines every time.</p>
</div>
<div class="yes">
<p class="eyebrow">Three skills, 70 to 90 lines</p>
<p><code>vinyl-condition-grading</code><br><code>used-record-pricing</code><br><code>listing-blurb</code><br>Each fires precisely. A grading question loads 70 lines, not 300.</p>
</div>
</div>

### 3. Move reference material out of the body

Rule of thumb: if the agent needs it in fewer than half of runs, it belongs in a bundled file.

The 900-line Goldmine reference covering box sets, promos, and Japanese pressings gets opened maybe once in twenty. In the body it costs 900 lines twenty times. In a bundled file it costs 900 lines once.

### 4. Delete on a schedule

Put a recurring reminder somewhere. Twice a year, list every skill and ask: has anyone used this? If nobody can say yes, delete it. You can always restore from source control.

### 5. Tighten scope before adding a skill

The cheapest optimization is the skill you didn't write. Run the idea through [Should this be a skill?](/skillup/lab/decide.html) first. A meaningful fraction of proposed skills are actually instructions, knowledge, or a one-off prompt.

## Budget rules of thumb

<div class="table-scroll">

| Skills installed | Always-on cost | Verdict |
|---|---|---|
| 1 to 10 | ~400 | Don't think about it |
| 10 to 40 | ~1,600 | Comfortable. Keep descriptions tight |
| 40 to 100 | ~4,000 | Needs a naming convention and a review process |
| 100+ | ~4,000+ and climbing | Split across multiple agents by audience, not one agent with everything |

</div>

<div class="note brass">
<p class="eyebrow">Measure, don't estimate</p>
<p>Every number on this page is a rough band, not a spec. Token counts vary by tokenizer and by platform. If Level 400 decisions are going to drive a real rollout, count your own descriptions with your own tokenizer and publish the method alongside the numbers. Estimates are fine for intuition and bad for arguments.</p>
</div>
