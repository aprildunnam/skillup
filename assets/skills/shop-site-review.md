---
name: shop-site-review
description: Review changes to the shop storefront for accessibility and content standards before merge. Use when reviewing a pull request, a component, a page template, or product copy for the online store.
license: MIT
---

# Shop site review

## When to use this
Someone is changing the storefront and wants a review, or a PR needs
checking before merge. Applies to templates, components, and product copy.

Do not use this for backend or inventory sync code. This skill only
covers what a customer sees.

## Steps
1. Read the diff. Identify every user-facing change.
2. Run the accessibility checks below on each one.
3. Run the content checks below on each one.
4. Report findings grouped by file, most severe first.

## Accessibility checks
- Every image has meaningful alt text. Decorative images have `alt=""`.
  A record sleeve is never decorative. Its alt text is the artist and
  title.
- Text contrast meets 4.5:1 against its actual background, not the
  background you assume.
- Every interactive element is reachable by keyboard and has a visible
  focus state.
- Form inputs have associated labels. Placeholder text is not a label.
- Heading levels do not skip.

## Content checks
- Condition grades use the Goldmine abbreviations, never plain English.
  "VG+", not "very good plus", and never "good condition."
- Prices show as $XX with no cents.
- Product copy discloses condition faults. A listing that omits a seam
  split is a returns problem, not a copy problem.
- No placeholder text. No lorem, no "TODO", no "Product description".

## Output format
For each finding:

`path/to/file.html:LINE` - **[a11y or content]** - what is wrong, and the fix.

If nothing is wrong, say so in one line. Do not invent findings.

## Rules
- Report the fix, not just the problem.
- Do not comment on code style. That is what the linter is for.
- If the diff is over 400 lines, say so and ask which files matter most
  rather than skimming all of them.
