---
title: lesson-recap-note
desc: Tone taught by example, and an explicit rule about what not to write down.
eyebrow: Sample 05 / House voice
lede: Tone is the hardest thing to specify and the easiest thing to demonstrate. This file does almost none of the former.
script: sample.js
---

<div class="chips"><span class="chip">M365 Copilot</span><span class="chip">SharePoint</span><span class="chip">no tools needed</span><span class="chip">~45 lines</span></div>

<p><button class="mini" data-load-skill="lesson-recap-note">Open this in the Skill Forge</button></p>

## The file

<!--include:assets/skills/lesson-recap-note.md-->

## What makes this work

### The format enforces the length

> Exactly three lines. If it is longer, cut it.

Compare that to "be appropriately concise," which is what the first draft said and which produced four-paragraph notes. A literal three-line template is a length constraint the model can actually check itself against.

### The tone rules are prohibitions, not aspirations

<div class="pair">
<div class="no">
<p class="eyebrow">First draft</p>
<p>"Be encouraging and positive while remaining honest. Make parents feel informed and supported."</p>
</div>
<div class="yes">
<p class="eyebrow">What shipped</p>
<p>"Never compare a student to other students, to averages, or to where they should be. Never use the word behind. Never diagnose."</p>
</div>
</div>

Prohibitions are checkable. Aspirations aren't. If you can't tell whether an output violated your rule, the model can't either.

### The example does the heavy lifting

The wrong-and-right pair at the bottom teaches four things at once: don't compare, don't use "behind," name something specific that's working, and end with an action. None of those four are stated as rules in that example. They're demonstrated, and demonstration transfers better. [More on the technique.](/skillup/200-authoring/examples.html)

### It knows what doesn't go in writing

> Frustration, distraction, or a bad day belongs in the internal lesson log, not in the note.

This is the section that makes the skill genuinely good rather than merely consistent. A teacher mentions the student got frustrated, and the skill knows that observation belongs somewhere else. That's a judgment call encoded as a rule, and it's the sort of thing that takes a human three years to learn.

### It escalates patterns instead of documenting them

> If a pattern repeats across three lessons, tell the teacher to raise it in person. Do not put it in writing.

The skill has an opinion about when a written note is the wrong medium. Two lines, and it prevents the specific failure where a paper trail accumulates about a twelve-year-old.
