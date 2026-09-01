---
title: The lesson studio
desc: Weekly progress notes that parents actually read. Two skills, one tool, and a tone rule that's genuinely hard to write.
eyebrow: Scenario 04
lede: Four teachers, sixty students, and notes that are either three words or three paragraphs with nothing in between.
---

## The job

Every student gets a note after their lesson. It goes to the parent for anyone under 16, to the student otherwise. It should say what they worked on, what's going well, and what to practice this week.

Sixty students. Four teachers, all of whom would rather be teaching.

## What breaks

<div class="grid grid-2">
<div class="card">
<h4>Length is bimodal</h4>
<p>"Good lesson!" or four paragraphs. Parents get one or the other and both are unsatisfying.</p>
</div>
<div class="card">
<h4>Comparison creeps in</h4>
<p>"She's a bit behind where most students are at this point." Nobody means harm and every parent hears it as a verdict.</p>
</div>
<div class="card">
<h4>No practice task</h4>
<p>The most useful line is the one most often missing. Parents want something to do.</p>
</div>
<div class="card">
<h4>Teachers write them at 9pm</h4>
<p>Two days late, from memory, which is where most of the above comes from.</p>
</div>
</div>

## The build

<div class="stack-rows">
<div class="stack-row"><b>Skill</b><p><code>lesson-recap-note</code>. Three-line format, tone rules, an explicit ban on comparative language, and a required practice task with minutes attached. <a href="/skillup/samples/lesson-recap-note.html">Read the file.</a></p></div>
<div class="stack-row"><b>Skill</b><p><code>practice-plan</code>. Used monthly rather than weekly. Builds a four week practice arc from the last four recaps, for students who've plateaued.</p></div>
<div class="stack-row"><b>Tool</b><p>The lesson log. Where teachers dump rough notes during or right after the lesson.</p></div>
<div class="stack-row"><b>Knowledge</b><p>The studio's curriculum outline, so the skill knows what "the next thing" is for a given instrument and level.</p></div>
</div>

### Why each thing is what it is

**The tone rule is the hard part, and it's taught by example.** "Be encouraging but honest" is an instruction that changes nothing. What works is a labeled wrong-and-right pair:

```markdown
Wrong:
  "Ellie is behind where most students are at eight weeks and is
  struggling with chord transitions."

Right:
  "Ellie's got the C and G shapes solid. Transitions between them
  are the current work, which is normal at this stage. Ten minutes
  of switching practice a day will move it quickly."
```

Same facts. The example carries the rule better than any adjective, and it quietly demonstrates the give-them-something-to-do habit nobody wrote down. More on that technique in [Show, don't tell](/skillup/200-authoring/examples.html).

**The three-line format enforces the length.** Not "be concise," which does nothing. An actual three-line template, which does everything.

**`practice-plan` is monthly, so it's a separate skill.** Bundling it into the weekly recap would load a monthly procedure fifty-two times a year to use it twelve.

**Curriculum is knowledge, not a skill.** "What comes after open chords on guitar" is a fact to look up. "How we write a note to a parent" is a procedure. Classic [which-is-which](/skillup/100-foundations/which-is-which.html) call.

## What comes out

```
> ellie, guitar, week 8. worked on C to G transitions, still slow but
> the shapes are clean now. she got frustrated halfway through.

**What we worked on:** C and G chord transitions.
**Going well:** Both shapes are clean and she's fretting them without
looking now, which is the harder half.
**This week's practice:** Ten minutes a day of just switching between
C and G. No song, no strumming, just the change. Speed comes after
the movement is automatic.

> the frustration thing, should that go in?

Not in the note. It's real and worth telling the parent in person
if it repeats, but written down it reads as a judgment about the
student rather than an observation about one lesson. Log it in the
lesson notes so you have the pattern if it comes up again.
```

The second half is the skill doing its actual job. It knows the difference between what belongs in a written note that a parent will keep and what belongs in an internal log, because somebody wrote that rule down once.

<div class="note brass">
<p class="eyebrow">The transferable bit</p>
<p>This is the <b>house voice</b> shape. Anywhere a team writes things to customers, patients, students, or clients and the writing quality varies by who's on shift, the fix is a format plus two or three worked examples. Not a style guide. Nobody reads style guides.</p>
</div>
