---
title: consignment-intake
desc: Validation and gatekeeping. The skill whose main job is to refuse.
eyebrow: Sample 04 / Saying no properly
lede: The most valuable thing this skill does is decline to register something. That's not a limitation, it's the feature.
script: sample.js
---

<div class="chips"><span class="chip">Copilot Studio</span><span class="chip">needs 3 tools</span><span class="chip">writes records</span><span class="chip">~60 lines</span></div>

<p><button class="mini" data-load-skill="consignment-intake">Open this in the Skill Forge</button></p>

## The file

<!--include:assets/skills/consignment-intake.md-->

## What makes this work

### Required fields are stated as a hard gate

> An intake is invalid without all of these. Ask for anything missing. Do not register a partial intake.

Not "try to collect." Not "ideally include." A partial intake is invalid, full stop. Firm language matters here because a model reading "should generally include" will happily proceed without an email address.

### It knows what it isn't allowed to decide

> A split above 60/40, a review period over 12 months, or a quantity over 50 units requires the owner's sign-off before registration.

Three thresholds, each one a case where the shop has been burned. The skill's job isn't to be maximally helpful, it's to know the edge of its own authority. [More on that shape.](/skillup/scenarios/consignment.html)

### It recommends, and says why

> Recommend option 2, because amending a registered split leaves two records and that is what causes disputes later.

The reason is in the skill. That means when the agent explains the recommendation, it explains it correctly, and the person on the other end learns something instead of just being told.

### The boundary line does real work

> Do not use this for stock the shop has bought outright. That is a purchase, not a consignment.

Outright purchases and consignments look nearly identical at intake. Without that line this skill fires on both, and registers a purchase as consigned stock. Six months later somebody's owed money they aren't owed.

### The rare case is bundled

> For non-standard split structures, see `reference/split-terms.md`.

Non-standard splits come up maybe one intake in twelve. The full terms table sits in a file and costs nothing the other eleven times.

<div class="note brass">
<p class="eyebrow">The pattern to steal</p>
<p>Required fields, standard terms, thresholds requiring approval, and an explicit "here are your two options, I recommend this one." That structure works for anything with a contract at the end of it: quotes, discounts, refunds, purchase orders, waivers.</p>
</div>
