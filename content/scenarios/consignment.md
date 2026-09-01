---
title: Consignment intake
desc: Terms, splits, and a paper trail that holds up six months later. Two skills, three tools, bundled templates.
eyebrow: Scenario 03
lede: Thirty local musicians have stock on the shelves. Every one of them will eventually ask about a check.
---

## The job

Local artists drop off CDs and vinyl on consignment. Intake has to capture:

- Artist name, contact, title, format, quantity
- The agreed split, which is 60/40 as standard but negotiable
- Shelf date and review date
- A signed record of the terms

Then, monthly, each artist gets a payout statement showing what sold, at what price, and what they're owed.

## What breaks

<div class="grid grid-2">
<div class="card">
<h4>Terms get agreed verbally</h4>
<p>"We said 70/30 for mine." Did we? Nobody knows. The shop eats it, every time.</p>
</div>
<div class="card">
<h4>Intake forms are incomplete</h4>
<p>Missing contact email is the most common. Which surfaces six months later, when there's a check and nowhere to send it.</p>
</div>
<div class="card">
<h4>Payout statements are hand-built</h4>
<p>In a spreadsheet, differently each time, by whoever's free. Two artists get statements that don't look like each other.</p>
</div>
<div class="card">
<h4>Nobody reviews stale stock</h4>
<p>Records that haven't moved in a year, still on the shelf, still on the books.</p>
</div>
</div>

## The build

<div class="stack-rows">
<div class="stack-row"><b>Skill</b><p><code>consignment-intake</code>. The full intake procedure: what to capture, how to validate it, what the standard terms are, what requires the owner's sign-off, and what to do when a field is missing. <a href="/skillup/samples/consignment-intake.html">Read the file.</a></p></div>
<div class="stack-row"><b>Skill</b><p><code>consignment-payout</code>. Monthly statements. Pulls sales, applies the split on record for that artist, produces the statement from a template.</p></div>
<div class="stack-row"><b>Tool</b><p>Consignment register. Reads and writes the artist, terms, and stock records.</p></div>
<div class="stack-row"><b>Tool</b><p>Sales query. What sold, when, at what price, for which consigned item.</p></div>
<div class="stack-row"><b>Tool</b><p>Email. Sends the statement, or flags an artist with no contact on file.</p></div>
<div class="stack-row"><b>Bundled</b><p><code>reference/split-terms.md</code> and <code>templates/payout-statement.md</code>, both alongside the SKILL.md.</p></div>
</div>

### Why each thing is what it is

**This one has to be an agent in Copilot Studio.** It reaches three external systems and it writes records. SharePoint skills [can't do that](/skillup/300-shipping/m365.html), so the shelf is decided by the requirements, not by preference.

**The skill validates, the tool writes.** The skill's job is knowing that an intake without a contact email is invalid, that a non-standard split needs the owner's approval, and that a review date is 12 months out unless agreed otherwise. The tool just writes the row. Keeping the rules out of the connector means changing the standard split is a text edit, not a code change.

**The statement is a bundled template, not prose.** It's a financial document with a fixed shape and a disclaimer at the bottom. [Describing it in the body](/skillup/400-advanced/bundles.html) would be longer, less accurate, and unmaintainable by the person who actually owns the wording.

**`reference/split-terms.md` is bundled, not in the body.** Non-standard splits come up maybe one intake in twelve. Everything about them can sit in a file that costs nothing eleven times out of twelve.

## What comes out

```
> new consignment, Nia Okafor, 20 copies of her LP "Terrace Hymns"

Before I write this in, I need a few things:

- Contact email for Nia (required, this is where payouts go)
- Format confirmation: LP only, or is there a CD too?
- Split: standard 60/40 in the artist's favor, or something agreed?

> email is nia@example.com, LP only, she asked for 70/30

70/30 is above the standard 60/40 and needs April's sign-off before
I can register it. Two options:

1. Register at the standard 60/40 now and amend once approved
2. Hold the intake as pending and flag it for April

Which do you want? I'd suggest 2, because amending a registered
split leaves two records and that's what causes disputes later.

> hold it, flag for april

Held as pending.

**Consignment intake - PENDING APPROVAL**
Artist: Nia Okafor
Contact: nia@example.com
Title: Terrace Hymns
Format: LP, 20 copies
Requested split: 70/30 (artist favor)
Standard split: 60/40
Shelf date: on approval
Review date: 12 months from shelf date
Flagged to: April
Reason: split above standard, requires owner approval
```

The refusal is the feature. A skill that would have quietly registered a 70/30 split because somebody asked nicely is worse than no skill.

<div class="note brass">
<p class="eyebrow">The transferable bit</p>
<p>This is the <b>gatekeeping</b> shape, and it's the highest value thing skills do in a business. Any process where "somebody agreed to something they shouldn't have" is a recurring cost is a candidate. The skill's job isn't to be helpful. It's to know what requires approval and refuse to proceed without it.</p>
</div>
