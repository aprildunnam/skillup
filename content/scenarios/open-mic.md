---
title: Open mic night
desc: Turning fifteen sign-ups into a run of show and a promo post. Two skills, one tool, two templates.
eyebrow: Scenario 02
lede: Same night, every week, and somebody rebuilds the run sheet from scratch every single time.
---

## The job

Thursday open mic. Sign-ups open Sunday and close Wednesday at noon. By Wednesday afternoon somebody has to produce:

- A run of show: who plays, in what order, for how long
- A sound check schedule for anyone bringing more than a guitar
- A promo post for Instagram and the shop's mailing list

Eleven slots. Usually fifteen sign-ups. The house rules about ordering are real and nobody has written them down.

## What breaks

<div class="grid grid-2">
<div class="card">
<h4>The house rules live in one head</h4>
<p>First timers go third or fourth, never first. Anyone with a full band goes last so teardown doesn't stall the night. Nobody knows this except the two people who've run it for years.</p>
</div>
<div class="card">
<h4>The format changes weekly</h4>
<p>Sometimes it's a table, sometimes a list, sometimes a paragraph. Sound engineers hate this reasonably.</p>
</div>
<div class="card">
<h4>Overflow gets handled badly</h4>
<p>Fifteen sign-ups into eleven slots. Who gets bumped, and does anybody tell them?</p>
</div>
<div class="card">
<h4>The promo post is always late</h4>
<p>Because it's the last thing and everyone's tired of the run sheet by then.</p>
</div>
</div>

## The build

<div class="stack-rows">
<div class="stack-row"><b>Skill</b><p><code>open-mic-runsheet</code>. Reads the sign-up list, applies the ordering rules, allocates sound check windows, handles overflow, and outputs the run sheet in one fixed format. <a href="/skillup/samples/open-mic-runsheet.html">Read the file.</a></p></div>
<div class="stack-row"><b>Skill</b><p><code>promo-post</code>. Takes a finished run sheet and writes the Instagram caption and the mailing list blurb. Two different lengths, same facts, shop voice.</p></div>
<div class="stack-row"><b>Tool</b><p>The sign-up list. A SharePoint list the form writes into.</p></div>
<div class="stack-row"><b>Template</b><p><code>templates/runsheet.md</code> bundled with the skill. The exact table the sound engineer expects.</p></div>
<div class="stack-row"><b>Template</b><p><code>templates/promo-post.md</code>. Caption structure, where the date goes, the standard closing line.</p></div>
</div>

### Why each thing is what it is

**The ordering rules are the entire value.** "First timers third or fourth, bands last, nobody who played last week goes before somebody who didn't" is exactly the kind of thing that lives in one person's head and leaves when they do. Writing it into a skill is the point.

**Templates instead of prose.** The run sheet is a document with a fixed shape, so [bundle the shape](/skillup/400-advanced/bundles.html) rather than describing it. The sound engineer owns `templates/runsheet.md` and can change it without touching the skill.

**Two skills, not one.** They almost always run together, which is the trap. But the promo post gets rewritten three times some weeks and the run sheet gets built once. Separate skills means iterating on one without reloading the other.

**This one runs in SharePoint.** No external systems, no code, just a list and some documents. It's the cheapest possible place to put it, and the people who run open mic are already on that site.

## What comes out

```
> build thursday's run sheet

**Open Mic - Thursday March 14**
11 slots, 15 sign-ups. 4 on the wait list.

| # | Artist | Set | Sound check | Notes |
|---|--------|-----|-------------|-------|
| 1 | Del Ramirez | 12 min | 6:15 | Regular, plays solo |
| 2 | Casey Whitmore | 12 min | 6:25 | Regular |
| 3 | Nia Okafor | 12 min | 6:35 | FIRST TIME |
| 4 | Tom Bright | 12 min | 6:40 | FIRST TIME |
...
| 11 | The Wilder Sons | 20 min | 7:10 | Full band, closing slot |

**Wait list:** Ana Reyes, Kit Doyle, Marcus Vance, Priya Shah
**Wait list rule:** all four signed up before Wednesday noon and get
first refusal next week. Ana and Kit were also bumped last week and
should be slotted regardless.

**Sound check:** 6:15 to 7:30. The Wilder Sons need the full
20 minutes at 7:10, everything before them is 5 minute checks.

> promo post for this

Thursday night, 8pm, free as always. Eleven acts on the list
including two first-timers and The Wilder Sons closing it out.
Coffee's on until 9. Sign-ups for next week open Sunday.
```

The wait list note is the interesting part. Nobody wrote "tell people why they got bumped and remember who got bumped last time" as a feature request. It fell out of writing the ordering rules down properly.

<div class="note brass">
<p class="eyebrow">The transferable bit</p>
<p>This is the <b>tribal knowledge capture</b> shape. The work isn't hard, it's just undocumented, and the documentation has never been worth writing because nobody would read it. A skill is documentation that gets read every single time, automatically. That changes the math on writing it.</p>
</div>
