---
title: Designing a skill set
desc: One skill per job to be done, and what to do when two both think they're relevant.
lede: Individual skills are easy. A set of forty that don't fight each other is a design problem.
---

## One skill per job to be done

Not per department. Not per document type. Per **job somebody is trying to get done**.

<div class="pair">
<div class="no">
<p class="eyebrow">Organized by department</p>
<p><code>record-floor-skill</code><br><code>cafe-skill</code><br><code>lesson-studio-skill</code></p>
<p>Three enormous skills that each fire on any conversation touching that area, and load everything.</p>
</div>
<div class="yes">
<p class="eyebrow">Organized by job</p>
<p><code>vinyl-condition-grading</code><br><code>used-record-pricing</code><br><code>listing-blurb</code><br><code>open-mic-runsheet</code><br><code>lesson-recap-note</code><br><code>consignment-intake</code></p>
</div>
</div>

The test: can you name the moment someone needs it? "When a crate comes in and needs grading" is a job. "When somebody's doing record floor stuff" is a department.

## The overlap audit

Once you have more than about eight skills, run this. It takes twenty minutes and it's the highest value maintenance you'll do.

1. List every skill's description in one document.
2. For each pair that sounds even slightly similar, write one prompt that could plausibly invoke either.
3. Run it. See which fires.
4. If you can't predict the answer, the scopes overlap.

Fix by making each description name the other's boundary:

<div class="pair">
<div class="no">
<p class="eyebrow">Ambiguous</p>
<p><code>vinyl-condition-grading</code>: "Assess used records."<br><code>used-record-pricing</code>: "Price used records."</p>
</div>
<div class="yes">
<p class="eyebrow">Disjoint</p>
<p><code>vinyl-condition-grading</code>: "...assign a condition grade. Use <b>before pricing</b>, when the grade isn't known yet."<br><code>used-record-pricing</code>: "...set a shelf price from a <b>known</b> grade and recent comps."</p>
</div>
</div>

## Chaining, on purpose

Related skills should hand off explicitly. Say it in the body.

```markdown
## When to use this
The condition grade is already known. If it isn't, use
vinyl-condition-grading first, then come back.
```

That one line does three jobs: it scopes the skill, it prevents the wrong one firing, and it tells the agent what to do instead. It's the cheapest thing on this page.

## Naming conventions

Pick one and never revisit it. Any of these is fine:

<div class="table-scroll">

| Convention | Example | Good for |
|---|---|---|
| `<object>-<action>` | `vinyl-condition-grading` | Most cases, reads naturally |
| `<domain>-<action>` | `consignment-intake` | Sets where the domain is the useful grouping |
| `<action>-<object>` | `grade-vinyl-condition` | Teams who scan for verbs |

</div>

Consistency matters more than which one. A list of forty skills in three naming styles is unreadable, and unreadable lists are how duplicates get written.

## How many is too many?

There's no hard limit, but there are shapes.

<div class="table-scroll">

| Size | What it needs |
|---|---|
| Under 10 | Nothing. Just write them |
| 10 to 40 | A naming convention and an overlap audit twice a year |
| 40 to 100 | An owner per skill, test sets, and a review before merge |
| Over 100 | Split by audience across multiple agents. One agent with 100 skills matches worse than three agents with 35 |

</div>

<div class="note brass">
<p class="eyebrow">The split that usually works</p>
<p>Split by <b>who's asking</b>, not by what the skill does. At the cafe that's a floor staff agent, a lesson studio agent, and a back-office agent. Each gets the fifteen skills its people actually need, and each matches sharply because it isn't competing with the other thirty.</p>
</div>

## Deleting is designing

The most underused tool in skill set design. A skill nobody's used in six months is costing you description tokens and matching precision every single turn, in exchange for nothing.

Delete it. It's in source control. You can bring it back in ninety seconds if somebody complains, and nobody will.
