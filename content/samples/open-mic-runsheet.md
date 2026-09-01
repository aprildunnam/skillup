---
title: open-mic-runsheet
desc: Tribal knowledge written down, with a bundled template doing the formatting.
eyebrow: Sample 03 / Capturing what one person knows
lede: The ordering rules in this file existed nowhere except in two people's heads. That's the entire reason it's worth building.
script: sample.js
---

<div class="chips"><span class="chip">SharePoint</span><span class="chip">1 list</span><span class="chip">bundled template</span><span class="chip">~50 lines</span></div>

<p><button class="mini" data-load-skill="open-mic-runsheet">Open this in the Skill Forge</button></p>

## The file

<!--include:assets/skills/open-mic-runsheet.md-->

## What makes this work

### The rules are the deliverable

Five ordering rules, and not one of them is obvious:

1. First-timers never go first, they go third or fourth
2. Full bands go last so teardown doesn't stall the night
3. Bumped-last-week beats signed-up-earlier
4. Nobody plays two weeks running at somebody else's expense
5. Solo 12 minutes, band 20

Every one of those is a decision somebody made years ago for a good reason. Written down, they survive that person leaving. That's the whole value proposition of this skill and it has nothing to do with AI.

### The format lives in a template, not the body

> Use `templates/runsheet.md` exactly. Do not reformat the table.

The sound engineer owns that file. When they want a column added they edit the template, not the skill. Separating the *shape* of a document from the *procedure* that produces it means two different people can own two different things. [More on bundles.](/skillup/400-advanced/bundles.html)

### It refuses to fail silently

> Never drop somebody from the wait list silently. If they were bumped, the run sheet has to say so.

Nobody asked for this. It came out of writing rule 3 down properly: if bumped-last-week gets priority, something has to record who got bumped. The skill ended up more considerate than the process it replaced, which happens more often than you'd think.

### It escalates instead of guessing

> If the sign-up list has more than 15 names, say so before building. That is a busy night and the owner wants to know.

A threshold plus a notification. Two lines. This is the cheapest kind of business logic to encode and one of the most useful.

### The description covers five phrasings

"lineup," "running order," "who is playing when," "wait list," "Thursday night schedule." Nobody says "run of show" except the person who wrote the skill, which is exactly the trap [Level 200 warns about](/skillup/200-authoring/failure-modes.html).
