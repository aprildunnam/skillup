---
title: Skill idea generator
desc: Pick a role and a platform, get three skills worth building.
lede: Curated seeds, hand written, not random recombination. Every one of these is a real repeatable job with house rules worth encoding.
script: ideas-data.js, ideas.js
---

<div class="picker">
<div>
<label class="eyebrow" for="ideaRole">Your role</label>
<select id="ideaRole">
<option value="finance">Finance</option>
<option value="hr">HR and people</option>
<option value="sales">Sales</option>
<option value="it">IT and operations engineering</option>
<option value="legal">Legal</option>
<option value="marketing">Marketing</option>
<option value="support">Customer support</option>
<option value="ops">Operations</option>
<option value="developer">Developer</option>
</select>
</div>
<div>
<label class="eyebrow" for="ideaPlatform">Where it'll live</label>
<select id="ideaPlatform">
<option value="m365">M365 Copilot and SharePoint</option>
<option value="studio">Copilot Studio</option>
<option value="github">GitHub Copilot</option>
</select>
</div>
<div style="display:flex;align-items:flex-end">
<button class="btn ghost" id="ideaAgain" type="button">Show me three more</button>
</div>
</div>

<div class="ideacards" id="ideaCards"></div>

## How to use these

<div class="stack-rows">
<div class="stack-row"><b>1</b><p>Find one that made you nod. That reaction is the signal, not the cleverness of the idea.</p></div>
<div class="stack-row"><b>2</b><p>Hit <b>Start this in the Forge</b>. You get a scaffold with the name and a draft description already filled in.</p></div>
<div class="stack-row"><b>3</b><p>Rewrite the description in <em>your</em> vocabulary. The seeded one is generic on purpose. Yours should contain the words your colleagues actually type.</p></div>
<div class="stack-row"><b>4</b><p>Fill in the steps and the output format from how your team already does it. If you can't name the house rules, that's a sign this might not be a skill. Run it through the <a href="/skillup/lab/decide.html">decision tool</a>.</p></div>
</div>

<div class="note brass">
<p class="eyebrow">The best idea isn't on this list</p>
<p>It's whatever you explained to a colleague twice last month. Skills are for the thing everybody does slightly differently and nobody has written down. That's almost never the thing you'd think to search for.</p>
</div>

<div class="note">
<p class="eyebrow">Looking for skills to install rather than write?</p>
<p>This generator gives you ideas, not files. For ready-made skills, go to <a href="https://microsoft.github.io/skills">microsoft.github.io/skills</a>, which has 175+ browsable with one-click install. More on the <a href="/skillup/resources/">resources page</a>.</p>
</div>
