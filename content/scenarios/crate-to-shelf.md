---
title: Crate to shelf
desc: Grading, pricing, and listing a crate of used vinyl. Three skills, two tools, one knowledge source.
eyebrow: Scenario 01
lede: A crate comes in Tuesday. By Thursday it's on the floor and online. Four people do this and it comes out four different ways.
---

## The job

Every Tuesday, Marcus opens a crate of maybe forty used records bought from an estate sale or a walk-in. Each one has to be:

1. Graded, disc and sleeve separately, to Goldmine standards
2. Priced against comps and the shop's own history
3. Tagged and shelved, or held behind the counter if it's over $60
4. Photographed and listed online if it's worth more than $25

It takes most of a day. Three other people cover it when Marcus is off.

## What breaks

Nothing is *impossible* without skills. Everything is inconsistent.

<div class="grid grid-2">
<div class="card">
<h4>Grades drift</h4>
<p>One person grades generously, another conservatively. Two identical copies get tagged VG+ and NM in the same week.</p>
</div>
<div class="card">
<h4>"Good" means good</h4>
<p>Except in record grading, where Good is nearly the bottom. Every new person makes this mistake, and customers notice.</p>
</div>
<div class="card">
<h4>Sleeve and disc get merged</h4>
<p>One number for the whole record. Then somebody buys a clean disc in a split sleeve and is annoyed.</p>
</div>
<div class="card">
<h4>Listings sound like a robot</h4>
<p>Or like whoever wrote them that day. The online store reads as five different shops.</p>
</div>
</div>

## The build

<div class="stack-rows">
<div class="stack-row"><b>Skill</b><p><code>vinyl-condition-grading</code>. The Goldmine scale, disc and sleeve separately, what caps a grade, and an explicit "ask, don't guess." <a href="/skillup/samples/vinyl-condition-grading.html">Read the file.</a></p></div>
<div class="stack-row"><b>Skill</b><p><code>used-record-pricing</code>. Takes a known grade, pulls comps and shop history, applies five house rules, produces a price card. <a href="/skillup/samples/used-record-pricing.html">Read the file.</a></p></div>
<div class="stack-row"><b>Skill</b><p><code>listing-blurb</code>. Turns a grade and a price into 40 words for the online store, in the shop's voice, with the condition disclosed honestly.</p></div>
<div class="stack-row"><b>Tool</b><p>Sales history lookup. What we've carried before and what it sold for.</p></div>
<div class="stack-row"><b>Tool</b><p>Market comps connector. Current asking prices for this pressing at this grade.</p></div>
<div class="stack-row"><b>Knowledge</b><p>The full Goldmine standard, as a knowledge source. Referenced for definitions, not for procedure.</p></div>
</div>

### Why each thing is what it is

**Grading is a skill, not knowledge.** The Goldmine standard itself is knowledge, a reference you look things up in. *How this shop applies it*, including the caps and the ask-don't-guess rule, is a procedure. Those are different things and they live in different places.

**Pricing is a separate skill, not the same one.** They're always used in sequence, which makes merging them tempting. Don't. Half the time somebody already knows the grade and just wants a price, and a merged skill would load the entire grading procedure to answer it.

**The comps lookup is a tool, obviously.** But note what stays in the skill: "never price above the median comp for the same grade" is a house rule, and house rules don't belong in a connector.

**The chain is explicit.** `used-record-pricing` says in its body: *if the grade isn't known, use vinyl-condition-grading first.* One line, and the two skills stop fighting.

## What comes out

```
> tuesday crate, item 12. Steely Dan Aja, original 1977 ABC pressing.
> disc has light scuffs, no deep scratches. sleeve has ring wear both
> sides and a price sticker on the back.

**Disc:** VG+ - light surface scuffs, no fingernail-catching scratches
**Sleeve:** VG - ring wear on both faces, price sticker residue
**Caps:** Sleeve capped at VG by ring wear. Disc could reach NM if it cleans up.

> price it

**Price:** $25
**Basis:** Comp median $28 for VG+ disc. Our last copy sold at $24 in March.
**Placement:** floor
**Note:** Sleeve grade is the weak side. Disclose ring wear in the listing.

> listing blurb

Steely Dan, Aja. Original 1977 ABC pressing. Disc plays clean at VG+
with light surface scuffs only. Sleeve is VG with ring wear on both
faces and some sticker residue on the back. A very good copy of a
record that's hard to find looking better than this.
```

Three skills, one conversation, and it comes out the same whether Marcus is in or not.

<div class="note brass">
<p class="eyebrow">The transferable bit</p>
<p>This is the most common shape in the whole set: <b>assess, decide, communicate</b>. Three skills chained, each one narrow, each one handing off explicitly. If your work has that shape, and a surprising amount of work does, this is your template.</p>
</div>
