---
title: Bundled assets
desc: Scripts, templates, checklists, and reference files. When one beats another paragraph.
lede: Anything in the skill folder is available on demand and costs nothing until it's opened. That's a bigger deal than it sounds.
---

## What can go in the folder

```
consignment-intake/
  SKILL.md
  reference/
    split-terms.md          <- the full terms table, rarely needed
    state-rules.md          <- consignment law by state
  templates/
    payout-statement.md     <- the exact document to produce
    intake-form.md
  scripts/
    calc-split.py           <- only where the platform allows it
```

The agent sees the folder. It reads a file when the `SKILL.md` sends it there or when it decides the file is relevant. Otherwise the file costs nothing.

## The four kinds, and when each earns its place

<div class="table-scroll">

| Kind | Use it when | Don't when |
|---|---|---|
| **Reference** | The lookup is long and needed in under half of runs | It's three lines. Put those in the body |
| **Template** | The output is a document with a fixed shape | The shape fits in an output-format block |
| **Checklist** | The procedure has 15+ verification steps | It's the procedure itself. That's the body |
| **Script** | The step is deterministic computation the model shouldn't do by hand | The platform can't run code, which is most of them |

</div>

## The decision rule

Ask two questions.

**How often is it needed?** Under half of runs, bundle it. More than half, it's the body.

**How long is it?** Under about 20 lines, it's the body regardless. The overhead of a separate file isn't worth it.

<div class="pair">
<div class="no">
<p class="eyebrow">Wrong shape</p>
<p>A 900-line Goldmine reference pasted into the body of <code>vinyl-condition-grading</code>, which fires several times a day. Ninety-five percent of runs pay for box-set and Japanese-pressing rules that don't apply.</p>
</div>
<div class="yes">
<p class="eyebrow">Right shape</p>
<p>A 70-line body covering the common cases, plus <code>goldmine-full.md</code> bundled beside it, with one line in the body: "For box sets, promos, or non-US pressings, see goldmine-full.md."</p>
</div>
</div>

## Point at them explicitly

The agent is better at using a bundled file when the body tells it when to reach for one. One line each.

```markdown
## References
- Box sets, promos, or non-US pressings: see `goldmine-full.md`
- Producing a payout statement: use `templates/payout-statement.md`
  exactly, do not reformat it
```

That's the whole technique. "See X for Y" beats hoping the agent notices the file.

## Templates deserve special mention

If your skill produces a document, a bundled template is almost always better than describing the document.

<div class="pair">
<div class="no">
<p class="eyebrow">In the body</p>
<p>Four paragraphs describing what a consignment payout statement contains, in what order, with what headings and what disclaimer at the bottom.</p>
</div>
<div class="yes">
<p class="eyebrow">As a template</p>
<p>The actual statement, with <code>[placeholders]</code>, in <code>templates/payout-statement.md</code>. One line in the body: "Use templates/payout-statement.md exactly."</p>
</div>
</div>

The template version is shorter, more accurate, and editable by the person who owns the document rather than the person who owns the skill. That last part matters more than it sounds.

<div class="note warn">
<p class="eyebrow">Portability note</p>
<p>Bundled files travel well in a ZIP package to Copilot Studio and in a skill folder to GitHub Copilot. <a href="/skillup/300-shipping/m365.html">Keep it simple in SharePoint</a>, and remember scripts only run where the platform allows code execution at all, which is a short list.</p>
</div>
