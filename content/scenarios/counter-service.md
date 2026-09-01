---
title: Counter service
desc: The cafe side. Par levels, reorder emails, and a specials board. Two skills, two tools.
eyebrow: Scenario 05
lede: The smallest scenario here, and the one most likely to look like your job.
---

## The job

The espresso bar runs on par levels. Every morning somebody counts what's low, and if the supplier order isn't in by 3pm the delivery slips a week. There's also a specials board that gets rewritten daily and hasn't been interesting since about 2019.

## What breaks

<div class="grid grid-2">
<div class="card">
<h4>The 3pm cutoff gets missed</h4>
<p>Not because nobody knows about it. Because the count happens at 2:45 and the email takes fifteen minutes to write.</p>
</div>
<div class="card">
<h4>Par levels live on a laminated card</h4>
<p>Updated by hand, twice, in three years. The oat milk number has been wrong since they switched brands.</p>
</div>
<div class="card">
<h4>Orders miss the minimums</h4>
<p>The supplier has free shipping over $200 and nobody checks against it, so half the orders come in at $180.</p>
</div>
<div class="card">
<h4>The specials board says "COFFEE"</h4>
<p>In fairness, it is coffee.</p>
</div>
</div>

## The build

<div class="stack-rows">
<div class="stack-row"><b>Skill</b><p><code>reorder-check</code>. Compares current counts against par, builds the order, checks it against the free shipping minimum, and drafts the supplier email in the format that supplier expects.</p></div>
<div class="stack-row"><b>Skill</b><p><code>daily-board</code>. Writes the specials board copy. Short, specific, never the word "artisanal," always names one actual thing about the coffee.</p></div>
<div class="stack-row"><b>Tool</b><p>Inventory counts. Whatever the counting app writes into.</p></div>
<div class="stack-row"><b>Tool</b><p>Email, to send the order.</p></div>
<div class="stack-row"><b>Knowledge</b><p>Par levels, per item, as a maintained list rather than a laminated card.</p></div>
</div>

### Why each thing is what it is

**Par levels are knowledge, not a skill.** They're facts that change independently of the procedure. Putting them in the skill body means editing a skill to change a number, which is exactly how the oat milk number went stale.

**The free shipping check is a skill rule.** It's a house rule about how this shop orders, not a fact about the supplier, and it's the sort of thing nobody remembers at 2:50pm.

**`daily-board` barely needs a body.** Six rules and two examples. It's the smallest skill in the whole set and probably the one with the best return per line, because "never say artisanal" is enforceable in a way that "write good copy" isn't.

**Both of these could live in SharePoint** if the counts and par levels are in lists there. Neither needs an external system. That makes this the cheapest scenario to actually build.

## What comes out

```
> morning count is in

Three items under par:

| Item | Count | Par | Order |
|------|-------|-----|-------|
| Oat milk | 4 | 12 | 12 |
| House blend 2kg | 1 | 3 | 3 |
| Paper cups 12oz | 200 | 600 | 600 |

Order total: $184.
You're $16 under the $200 free shipping threshold. Adding one more
2kg of house blend gets you to $218 and you'll use it within the
week based on the last four orders.

Want me to add it and draft the email?

> yes

Draft ready, addressed to orders@ with the account number and the
Tuesday delivery window. Send it before 3pm or it slips to next week.
```

Ninety seconds instead of fifteen minutes, and the free shipping check pays for the whole thing on its own.

<div class="note brass">
<p class="eyebrow">The transferable bit</p>
<p>This is the <b>deadline plus rule</b> shape, and it's the easiest win in this entire set. Any recurring task with a hard cutoff and two or three rules nobody remembers under time pressure is a skill worth twenty minutes of your afternoon. Start here if you're looking for your first one.</p>
</div>
