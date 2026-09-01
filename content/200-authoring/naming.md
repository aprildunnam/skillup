---
title: Naming rules that aren't optional
desc: Short page, high hit rate. This is what gets your skill rejected.
lede: Four rules, thirty seconds, and you'll stop seeing validation errors.
---

## The rules

<div class="table-scroll">

| Rule | Good | Bad |
|---|---|---|
| Lowercase only | `vinyl-condition-grading` | `Vinyl-Condition-Grading` |
| Hyphens for spaces, not underscores or spaces | `open-mic-runsheet` | `open_mic_runsheet`, `open mic runsheet` |
| No leading or trailing hyphen | `consignment-intake` | `-consignment-intake-` |
| Match the folder name | folder `lesson-recap-note/` holds a skill named `lesson-recap-note` | folder `recap/` holding `lesson-recap-note` |

</div>

## Name it after the job, not the department

The name is a secondary matching signal and a primary human one. You'll be scrolling a list of these in six months.

<div class="pair">
<div class="no">
<p class="eyebrow">Names that age badly</p>
<p><code>records-helper</code><br><code>skill-v2</code><br><code>april-custom-1</code><br><code>process-automation</code></p>
</div>
<div class="yes">
<p class="eyebrow">Names that stay useful</p>
<p><code>vinyl-condition-grading</code><br><code>open-mic-runsheet</code><br><code>consignment-intake</code><br><code>lesson-recap-note</code></p>
</div>
</div>

## Length

Two to four words. One word is usually too vague to be a good match and too generic to sit next to thirty siblings. Six words means you're describing the procedure in the name, which is what the description is for.

<div class="note warn">
<p class="eyebrow">Don't version in the name</p>
<p><code>vinyl-grading-v2</code> means somewhere there's a <code>vinyl-grading</code> that also still matches, and now they're competing. Version in source control, not in the filename. There's more on this in <a href="/skillup/400-advanced/governance.html">Versioning and governance</a>.</p>
</div>
