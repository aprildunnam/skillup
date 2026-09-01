---
title: Checkpoint
desc: Six questions to confirm Level 100 landed before you move on.
lede: Answer these without scrolling back. Wrong answers link you to the page that covers it.
script: quiz.js
---

<div class="quiz" id="quiz">

<div class="q" data-answer="c">
<p class="qtext">1. Which parts of a skill are loaded into context on every single turn?</p>
<button class="opt" data-k="a">The whole SKILL.md file</button>
<button class="opt" data-k="b">Nothing, until you name the skill in your prompt</button>
<button class="opt" data-k="c">Just the name and the description</button>
<button class="opt" data-k="d">The name, description, and any bundled files</button>
<div class="explain" hidden><b>Just the name and the description.</b> Everything else loads on demand. That's progressive disclosure, and it's why the description carries so much weight. <a href="/skillup/100-foundations/how-it-fires.html">Review it here.</a></div>
</div>

<div class="q" data-answer="b">
<p class="qtext">2. The shop wants the agent to always sign off as "April's Acoustic Cafe" and never as an AI. Skill or not?</p>
<button class="opt" data-k="a">Skill</button>
<button class="opt" data-k="b">Instructions</button>
<button class="opt" data-k="c">Knowledge</button>
<button class="opt" data-k="d">Tool</button>
<div class="explain" hidden><b>Instructions.</b> It applies to every response, not to one task. Anything that should always be true is instructions, not a skill. <a href="/skillup/100-foundations/which-is-which.html">Review the comparison.</a></div>
</div>

<div class="q" data-answer="d">
<p class="qtext">3. A skill needs to pull the last three purchase prices for a title out of the shop's inventory system. What does the skill actually need?</p>
<button class="opt" data-k="a">Nothing, skills can query databases</button>
<button class="opt" data-k="b">A longer body with the prices written in</button>
<button class="opt" data-k="c">To be converted into knowledge</button>
<button class="opt" data-k="d">A tool, which the skill then tells the agent how to use</button>
<div class="explain" hidden><b>A tool.</b> Skills are instructions, not connections. The skill's job is to say which tool to call, in what order, and what to do with the answer. <a href="/skillup/400-advanced/skills-plus-tools.html">More on that pattern.</a></div>
</div>

<div class="q" data-answer="a">
<p class="qtext">4. Your skill has a great 1,200 word body and it never fires. Where's the bug?</p>
<button class="opt" data-k="a">The description</button>
<button class="opt" data-k="b">The body is too long</button>
<button class="opt" data-k="c">The output format section</button>
<button class="opt" data-k="d">The folder name</button>
<div class="explain" hidden><b>The description.</b> The body isn't even read at match time. If the skill never fires, the orchestrator never saw a reason to open it, and that decision is made entirely on the description. <a href="/skillup/200-authoring/descriptions.html">Fix it here.</a></div>
</div>

<div class="q" data-answer="c">
<p class="qtext">5. Where does a skill live in Copilot in SharePoint?</p>
<button class="opt" data-k="a">In the site's Site Assets library</button>
<button class="opt" data-k="b">In a .github/skills folder</button>
<button class="opt" data-k="c">In Agent Assets/Skills/&lt;skill-name&gt;/SKILL.md</button>
<button class="opt" data-k="d">Attached to the individual user's profile</button>
<div class="explain" hidden><b>Agent Assets/Skills/&lt;skill-name&gt;/SKILL.md.</b> That library is created and managed by the product, and standard SharePoint permissions apply to it. <a href="/skillup/300-shipping/m365.html">More on M365 and SharePoint.</a></div>
</div>

<div class="q" data-answer="b">
<p class="qtext">6. You have 900 lines of grading minutiae covering box sets, promos, and Japanese pressings. Needed maybe once in twenty runs. Where does it go?</p>
<button class="opt" data-k="a">In the SKILL.md body</button>
<button class="opt" data-k="b">In a bundled file next to the SKILL.md</button>
<button class="opt" data-k="c">In the description</button>
<button class="opt" data-k="d">Split into twenty separate skills</button>
<div class="explain" hidden><b>A bundled file.</b> It costs nothing until the agent decides it needs it. Putting it in the body means paying for it every time the skill fires, which is nineteen times out of twenty for nothing. <a href="/skillup/400-advanced/bundles.html">More on bundles.</a></div>
</div>

</div>

<div class="quiz-result" id="quizResult" hidden></div>

<div class="note">
<p class="eyebrow">Passed?</p>
<p>Go to <a href="/skillup/200-authoring/">Level 200</a> and write one. Or skip straight to the <a href="/skillup/lab/forge.html">Skill Forge</a> and start typing, and let the scorecard teach you the rules in reverse.</p>
</div>
