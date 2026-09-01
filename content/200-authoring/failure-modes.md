---
title: The five ways skills fail
desc: Symptom, cause, fix. The page to come back to when something's wrong.
lede: Almost every broken skill is one of these five. Find your symptom, jump to the fix.
---

## 1. It never fires

**Symptom:** You ask for the thing. The agent answers like the skill doesn't exist. You check, it's definitely installed.

**Cause:** The description doesn't contain language close to what you typed. Nine times out of ten this is it. The body is irrelevant here, because it never got read.

**Fix:**

- Write down five ways a real person would ask for this. Put those nouns and verbs in the description.
- Add an explicit "Use when..." clause if there isn't one.
- Check the description isn't just restating the name.
- Test with the exact phrasing you'd naturally use, not the phrasing you invented while writing the skill.

<div class="note bad">
<p class="eyebrow">The trap</p>
<p>You wrote the skill, so you ask for it in the skill's own vocabulary and it fires perfectly. Then a coworker asks in normal words and nothing happens. Always test with somebody else's phrasing.</p>
</div>

## 2. It fires constantly

**Symptom:** The vinyl grading skill turns up in a conversation about the espresso machine. Everything gets graded.

**Cause:** The description is too abstract. "Helps assess items" matches almost any request.

**Fix:**

- Replace abstract nouns with concrete ones. "Items" becomes "vinyl records, LPs, 45s, sleeves."
- Add a boundary to the description: what it's for, and implicitly what it isn't.
- Add a "Do not use this for..." line to the **When to use this** section of the body.

## 3. It fires, then ignores half the instructions

**Symptom:** Right skill, wrong output. It grades the record but merges disc and sleeve into one number, which the skill explicitly says not to do.

**Cause:** Usually one of three things. The instruction is buried in prose. The instruction is stated as a preference rather than a rule. Or the body is long enough that the important part is competing with filler.

**Fix:**

- Move the critical rule into the **Output format** section and show it, don't say it.
- Cut the filler. Every sentence that doesn't change the output is diluting the ones that do.
- Convert "should generally" into "always" or "never."
- If it still drifts, add a labeled counterexample.

## 4. Two skills fight

**Symptom:** Sometimes you get the grading skill, sometimes the pricing skill, for the same question. Feels random because it is.

**Cause:** Overlapping descriptions. Both claim the same territory.

**Fix:** Make the scopes disjoint, and have each description name the other's boundary.

<div class="pair">
<div class="no">
<p class="eyebrow">Fighting</p>
<p><code>vinyl-condition-grading</code>: "Assess used records."<br><code>used-record-pricing</code>: "Price used records."</p>
</div>
<div class="yes">
<p class="eyebrow">Separated</p>
<p><code>vinyl-condition-grading</code>: "...assign a condition grade. Use before pricing, when the grade isn't known yet."<br><code>used-record-pricing</code>: "...set a shelf price from a known grade and recent comps. Use when the grade is already established."</p>
</div>
</div>

If they genuinely can't be separated, they're one skill.

## 5. It works in preview and dies in production

**Symptom:** Perfect in the test pane. Wrong for everybody else.

**Causes, in order of likelihood:**

- **Permissions.** Especially in SharePoint, where a skill can only do what the *running user* is already allowed to do. Your test worked because you're a site owner.
- **Missing tools.** The skill assumes a connector the production agent doesn't have.
- **Different skill set.** Production has thirty other skills competing. Yours was unopposed in your test environment.
- **Phrasing again.** You tested with your words. Real users use theirs.

**Fix:** Test as a normal user, in the real agent, with the real skill set installed, using somebody else's phrasing. Every one of those four words is doing work.

## The triage order

<div class="stack-rows">
<div class="stack-row"><b>First</b><p>Did it fire at all? If no, it's the description. Stop looking at the body.</p></div>
<div class="stack-row"><b>Second</b><p>Did it fire when it shouldn't? Also the description, in the other direction.</p></div>
<div class="stack-row"><b>Third</b><p>Did it fire and misbehave? Now it's the body, and usually the output format section.</p></div>
<div class="stack-row"><b>Fourth</b><p>Is it inconsistent across people? Permissions, tools, or a competing skill.</p></div>
</div>
