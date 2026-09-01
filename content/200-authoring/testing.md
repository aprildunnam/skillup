---
title: The tightening loop
desc: Write, run, read what it actually did, tighten, repeat.
lede: You can't reason your way to a good skill. You get there by watching it fail in specific ways and fixing exactly that.
---

## The loop

<div class="stack-rows">
<div class="stack-row"><b>1. Write</b><p>Get a rough version down. Description, when-to-use, steps, output format. Twenty minutes, not two hours.</p></div>
<div class="stack-row"><b>2. Run</b><p>Ask for the thing the way a normal person would, not the way you'd phrase it having just written the skill.</p></div>
<div class="stack-row"><b>3. Read</b><p>Not "was it good." Ask two separate questions: did it fire, and did it follow. They have different fixes.</p></div>
<div class="stack-row"><b>4. Tighten</b><p>Change one thing. Run it again. Changing three things at once means you learn nothing about which one worked.</p></div>
</div>

## Did it fire, or did it follow?

This is the whole diagnostic and people constantly conflate the two.

<div class="table-scroll">

| What you saw | Which problem | Where to fix it |
|---|---|---|
| Generic answer, no sign of your rules | It didn't fire | The description |
| Your skill's structure, but on the wrong request | It fired when it shouldn't | The description |
| Right task, wrong format | It fired and didn't follow | Output format section |
| Right format, invented facts | It fired and didn't follow | Rules, add "ask, don't guess" |
| Different result every time | Two skills competing | Both descriptions |

</div>

## Build a tiny test set

Ten prompts, written once, reused forever. Five that should fire the skill, five that shouldn't.

```
SHOULD FIRE
1. can you grade this one
2. what condition is this Steely Dan LP
3. is this VG+ or NM
4. check the sleeve on this Blue Note
5. what should we price this at

SHOULD NOT FIRE
6. what's the wifi password
7. how much is a flat white
8. who's playing Thursday
9. can you write a listing blurb for this
10. is the espresso machine descaled
```

Number 9 is the interesting one. It's about the same record, on the same shelf, and it's a different skill. If grading fires on it, your scopes overlap.

<div class="note brass">
<p class="eyebrow">Keep the list</p>
<p>Paste it in a comment at the bottom of the SKILL.md, or in the repo next to it. When you edit the skill in three months you'll re-run it in ninety seconds instead of re-deriving it.</p>
</div>

## Where to run the loop

<div class="table-scroll">

| Product | How you test |
|---|---|
| **Copilot Studio** | The Preview tab. Note that building, testing, and evaluating consume Copilot Credits, so the loop has a real cost |
| **Copilot in SharePoint** | Run it from the Copilot chat panel on the site, ideally signed in as a normal member, not as the owner |
| **GitHub Copilot** | Ask in chat with the skill in `.github/skills/`. Fastest loop of the three because it's just a file |

</div>

## When to stop

When it fires on all five should-fires, on none of the should-nots, and the output shape is stable across three runs. That's good enough to ship. Skills are cheap to change later, so shipping a solid one beats polishing a perfect one.

<div class="note">
<p class="eyebrow">Next</p>
<p><a href="/skillup/300-shipping/">Level 300</a>. You have a skill that works. Now put it somewhere other people can use it.</p>
</div>
