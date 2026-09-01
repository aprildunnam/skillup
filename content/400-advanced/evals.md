---
title: Evaluating skills
desc: A twenty prompt test set and a scorecard that measures two things, not one.
lede: "Does it work" is not a measurable question. "Does it fire" and "does it follow" both are, and they have different fixes.
---

## The two metrics

Every skill evaluation measures exactly two things. Keep them separate or you'll fix the wrong thing.

<div class="stack-rows">
<div class="stack-row"><b>Fire rate</b><p>Of the prompts that should invoke this skill, how many did? And of the prompts that shouldn't, how many did anyway? Both are description problems.</p></div>
<div class="stack-row"><b>Follow rate</b><p>Given that it fired, did the output match the format and obey the rules? That's a body problem.</p></div>
</div>

A skill with a 100% fire rate and a 40% follow rate needs a different fix than one with a 40% fire rate and a 100% follow rate, and the two look identical if you only ask "did it work."

## The twenty prompt test set

Ten that should fire. Five that shouldn't but are close. Five that shouldn't and are obvious.

The close-but-shouldn't ones are where all the information is.

```
SHOULD FIRE (10)
1.  can you grade this one
2.  what condition is this Steely Dan LP
3.  is this VG+ or NM
4.  check the sleeve on this Blue Note
5.  this came in the Tuesday crate, what's the condition
6.  how bad is the ring wear on this
7.  grade this 45 for me
8.  is this box set worth listing
9.  condition check please
10. what grade would you give this jacket

SHOULD NOT FIRE, but close (5)
11. what should we price this VG+ copy at        -> used-record-pricing
12. write a listing blurb for this               -> listing-blurb
13. do we have another copy of this in stock     -> tool call
14. what does VG+ mean                           -> knowledge
15. how do we usually clean records              -> different skill

SHOULD NOT FIRE, obvious (5)
16. what's the wifi password
17. how much is a flat white
18. who's playing Thursday
19. is the espresso machine descaled
20. when does the lesson studio open
```

Prompts 11 through 15 are the whole point. If your grading skill fires on "what should we price this at," you have an overlap problem that prompts 16 through 20 would never have caught.

## The scorecard

Run all twenty. Fill this in. It takes fifteen minutes and it's the only honest read you'll get.

<div class="table-scroll">

| Metric | How to count | Target |
|---|---|---|
| **True fires** | Should-fire prompts that fired | 9 or 10 of 10 |
| **False fires** | Should-not prompts that fired | 0 of 10 |
| **Format match** | Of the true fires, how many matched the output format exactly | 9 or 10 |
| **Rule compliance** | Of the true fires, how many obeyed every stated rule | 9 or 10 |
| **Guessed** | Times it invented a fact instead of asking | 0 |

</div>

## Reading the result

<div class="table-scroll">

| Pattern | Diagnosis | Fix |
|---|---|---|
| Low true fires | Description doesn't carry the user's vocabulary | Add trigger words from the failing prompts, verbatim |
| Any false fires from 11-15 | Scope overlaps a sibling skill | Make both descriptions name the boundary |
| Any false fires from 16-20 | Description is too abstract | Replace abstract nouns with concrete ones |
| Low format match | Output format section is missing, buried, or described instead of shown | Show the literal shape |
| Low rule compliance | Rules stated as preferences, or diluted by filler | "Always" and "never," and cut the filler |
| Any guessing | No explicit instruction to ask | Add "If you don't have enough information, ask. Do not guess." |

</div>

## Make it repeatable

Keep the test set next to the skill. In a repo that's `tests/vinyl-condition-grading.md`. In SharePoint it's a comment block at the bottom of the SKILL.md.

Re-run it when you change the skill, when you add a sibling skill that sounds similar, and once a quarter for anything important. Adding a new skill can break an old one's fire rate without anybody touching the old one, and that's the failure mode nobody sees coming.

<div class="note brass">
<p class="eyebrow">Don't overbuild this</p>
<p>Twenty prompts in a markdown file, run by hand, beats an automated harness nobody maintains. If you get to the point where running it by hand is the bottleneck, automate it then, and not before.</p>
</div>
