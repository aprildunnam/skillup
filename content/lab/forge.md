---
title: Skill Forge
desc: A live SKILL.md linter. Write on the left, findings on the right.
lede: Twenty rules, every one of them mapped to a page on this site. Type and watch the score move.
script: forge.js
---

<div class="forge">

<div class="forge-pane">
<div class="forge-head">
<p class="eyebrow">SKILL.md</p>
<div class="forge-actions">
<button class="mini" id="forgeBlank" type="button">blank</button>
<button class="mini" id="forgeCopy" type="button">copy</button>
<button class="mini" id="forgeDownload" type="button">download</button>
</div>
</div>
<textarea id="skillEditor" spellcheck="false" aria-label="SKILL.md editor"></textarea>
</div>

<div class="forge-pane">
<div class="forge-head">
<p class="eyebrow">Scorecard</p>
</div>
<div class="score-wrap">
<div class="score-top">
<div class="score-ring">
<svg viewBox="0 0 84 84" aria-hidden="true">
<circle class="track" cx="42" cy="42" r="36" fill="none" stroke-width="6"></circle>
<circle class="bar" id="scoreBar" cx="42" cy="42" r="36" fill="none" stroke-width="6" stroke-linecap="round"></circle>
</svg>
<div class="score-num" id="scoreNum">0</div>
</div>
<div class="score-copy">
<b id="scoreGrade">-</b>
<span id="scoreLine">Start typing.</span>
</div>
</div>
<ul class="findings" id="findings"></ul>
</div>
</div>

</div>

## Load a skill

<p class="eyebrow" style="margin-bottom:8px">The six annotated samples</p>
<div class="chips">
<button class="mini" data-load="vinyl-condition-grading" type="button">vinyl-condition-grading</button>
<button class="mini" data-load="used-record-pricing" type="button">used-record-pricing</button>
<button class="mini" data-load="open-mic-runsheet" type="button">open-mic-runsheet</button>
<button class="mini" data-load="consignment-intake" type="button">consignment-intake</button>
<button class="mini" data-load="lesson-recap-note" type="button">lesson-recap-note</button>
<button class="mini" data-load="shop-site-review" type="button">shop-site-review</button>
</div>

<p class="eyebrow" style="margin-bottom:8px">Three broken on purpose</p>
<div class="chips">
<button class="mini" data-load="broken/never-fires" type="button">never fires</button>
<button class="mini" data-load="broken/fires-constantly" type="button">fires constantly</button>
<button class="mini" data-load="broken/ignores-instructions" type="button">ignores its own instructions</button>
</div>

<div class="note">
<p class="eyebrow">Try this</p>
<p>Load <b>never fires</b> and read the findings. Then fix only the description, leaving the body alone, and watch the score jump. That's the lesson: <a href="/skillup/200-authoring/descriptions.html">the description does almost all the work</a>.</p>
</div>

## What it checks, and what it can't

<div class="grid grid-2">
<div class="card">
<h4>It checks</h4>
<p>Frontmatter validity, name format, description length and trigger language, whether the description just restates the name, body structure, output format, hedging language, filler rules, missing ask-don't-guess, credentials, and body length bands.</p>
</div>
<div class="card">
<h4>It can't check</h4>
<p>Whether your procedure is right. Whether your business rules make sense. Whether it fires against a real model. Whether it overlaps a sibling skill. For those you need a <a href="/skillup/400-advanced/evals.html">test set</a>.</p>
</div>
</div>

<div class="note brass">
<p class="eyebrow">Nothing leaves this page</p>
<p>The whole linter is a JavaScript file in this site's assets. There's no API call, no server, no telemetry. Your draft is kept in your browser's local storage so you don't lose it on a refresh, and that's the only thing it stores.</p>
</div>

## The scoring

Each rule carries a weight. Passing earns full weight, a warning earns a third, a failure earns none. The score is what you earned over what applied, so rules that don't apply to your skill don't count against you.

<div class="table-scroll">

| Score | Grade | Meaning |
|---|---|---|
| 90+ | A | Ship it |
| 80 to 89 | B | Solid. Fix the warnings when you get a minute |
| 65 to 79 | C | It will work, inconsistently |
| 45 to 64 | D | Something here is going to bite you |
| Under 45 | F | It won't fire, or it won't be followed |

</div>
