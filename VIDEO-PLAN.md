# SkillUp video plan

A YouTube series that maps to the SkillUp site, shot entirely inside one fictional
business, April's Acoustic Cafe. The site is the reference. The videos are the
front door. Every video drives to a specific page, and every page has a video.

---

## The strategy in four lines

1. **One demo environment powers everything.** April's Acoustic Cafe is built once and
   reused across the site, the videos, the shorts, and conference sessions. No more
   inventing a new fictional company per talk.
2. **Two flagships carry the series.** A canonical explainer at the front and a full
   showcase at the end. Everything between them is a focused 10 to 15 minute episode.
3. **Search-shaped titles, not clever ones.** People are typing "skills vs MCP" and
   "what is a SKILL.md." Rank for what they type, then teach them the thing they
   actually needed.
4. **Every long-form spawns three shorts.** The shorts are extracted, not written
   separately. That's the only way the cadence survives conference season.

---

## The confusion map

Every episode targets one specific confusion. This is the list, ranked by how often
people actually search for it.

| Rank | The confusion | Episode |
|---|---|---|
| 1 | Skills vs MCP. Genuinely the biggest one right now | E2 |
| 2 | Skills vs instructions vs prompts vs custom agents | E2 |
| 3 | What even is a skill and why would I want one | E0, E1 |
| 4 | I wrote a skill and it doesn't do anything | E3, E4 |
| 5 | Where do I actually put the file | E5 |
| 6 | Do skills slow my agent down or cost me money | E6 |
| 7 | What should I use a skill for | E7 |

---

## Flagship 1

### E0. What Is an AI Skill and Why Everyone Suddenly Cares

**Runtime** 18 to 22 min
**Drives to** skillup site home and Level 100
**Status** already in production

The canonical explainer. Long form plus a short form cut. This is the video every
other video links back to, so it's worth over-investing in.

**Cold open, 0:00 to 0:20.** No intro. Same prompt, twice, side by side. Left pane
without a skill, right pane with one. Left says "this looks like a well-loved copy in
good condition." Right returns a clean two-line Goldmine grade. Then the title card.

**Beats**
- The binder analogy. Instructions are the job description, knowledge is the filing
  cabinet, tools are the keys to the building, a skill is the binder on the shelf.
- Open a real SKILL.md on screen. Forty lines. Nothing hidden.
- The three-tier loading model, animated. Name and description always loaded, body on
  trigger, bundled files on demand. **This is the moment the video exists for.**
- Where they live across M365, Copilot Studio, and GitHub Copilot. Fast, 90 seconds.
- Write one live, in about four minutes, for the record shop.

**Shorts from this** the side-by-side cold open, the binder analogy on its own,
the three-tier model as a 40 second animation.

---

## The core series

### E1. Your Copilot Isn't Broken, It Just Doesn't Know How You Work

**Runtime** 11 to 13 min
**Drives to** Level 100, the loading model page

The emotional entry point for people who've written Copilot off. It's not that the
model is bad, it's that nobody told it your house rules.

**Cold open.** Marcus grading a record wrong, four different ways, four weeks running.
Then the fix in ninety seconds.

**Beats**
- Why generic output is a specification problem, not a model problem
- The four things a skill encodes that a prompt doesn't
- Live build of `vinyl-condition-grading`, start to finish
- The before and after, run twice to show consistency

---

### E2. Skills vs MCP vs Instructions vs Prompts, Sorted Out for Good

**Runtime** 13 to 15 min
**Drives to** Level 100, "Skill, instruction, knowledge, or tool"
**Priority** highest. This is the one that ranks.

The most searched confusion in the entire space, and most of the answers online are
either wrong or written for developers only. This should be the definitive one.

**Cold open.** Five terms on screen. "By the end of this you'll never mix these up
again." No preamble.

**Beats**
- The five second test: always, sometimes, or only when I go get it
- The comparison table, on screen, held long enough to screenshot
- Eight real examples from the record shop, each one sorted live
- The pair that trips everyone: "post to Instagram" is a tool,
  "how we write a promo post" is a skill, and you need both
- Skills vs MCP specifically, given its own three minute segment. MCP connects,
  skills instruct. They compose, they don't compete.

**Shorts from this** the five second test, the tool-versus-skill pair, the
comparison table as a static hold.

---

### E3. I Wrote Three Terrible Skills So You Don't Have To

**Runtime** 14 to 16 min
**Drives to** Level 200 failure modes, the Skill Forge

The most rewatchable episode in the series, because everybody has written at least
one of these.

**Cold open.** "This skill is perfect and it has never once worked." Show it.

**Beats**
- Broken skill 1, never fires. Diagnose live, fix only the description, watch it work
- Broken skill 2, fires constantly, grades the espresso machine
- Broken skill 3, fires and ignores half its own instructions
- Run each one through the Skill Forge on the site and read the findings on camera
- The triage order: did it fire, should it have fired, did it follow

**Shorts from this** the espresso machine getting graded, "your skill fails for one of
five reasons," the fix-the-description-only moment.

---

### E4. Three Words That Decide Whether Your Skill Ever Runs

**Runtime** 9 to 11 min
**Drives to** Level 200 descriptions

Short, sharp, extremely practical. Probably the highest completion rate in the series.

**Beats**
- The description is the only field read at match time. Everything follows from that
- Collect five real phrasings before you write a word
- The two-part formula, what it does plus when to use it
- Five description killers, with rewrites
- Disjoint scope, and why two skills fighting is always a description problem

---

### E5. One File, Five Places

**Runtime** 15 to 17 min
**Drives to** Level 300 and the portability matrix

The install episode. Screen recording heavy, low narration, high utility. This is the
one people bookmark and come back to.

**Beats**
- Copilot Studio, Build tab, create from blank, then the same skill as a ZIP upload.
  Mention Copilot Credits honestly, including that testing burns them
- Copilot in SharePoint, authored conversationally, then find the file in
  `Agent Assets/Skills/`. Show the permissions gotcha: works as owner, fails as member
- GitHub Copilot, `.github/skills/` versus `~/.copilot/skills/`, and the
  `allowed-tools` security conversation
- The same file, running in three places, side by side at the end
- The portability matrix on screen

---

### E6. Your Agent Is Getting Worse and Your Skills Are Why

**Runtime** 11 to 13 min
**Drives to** Level 400 token economy

The spicy one. Real content behind a provocative title, which is the only kind of
provocative title worth using.

**Beats**
- What every installed skill costs before it fires
- The arithmetic, on screen, forty skills at forty tokens
- Context rot. Why deleting a mediocre skill often beats adding a good one
- The five ways to get tokens back, with a before and after on a real description
- When to split one agent into three

**Shorts from this** "delete a skill, get a better agent," the description that went
from 95 tokens to 40 with more matching power, the forty skill arithmetic.

---

### E7. Should This Even Be a Skill

**Runtime** 8 to 10 min
**Drives to** the decision tool in the lab

The shortest episode and the most useful one for people who are stuck at "I don't know
what I'd use this for."

**Beats**
- Six things people build as skills that shouldn't be
- The seven questions, walked live using the tool on the site
- Three real ideas, sorted on camera, two of which turn out not to be skills
- The always-sometimes-rarely rule as the takeaway

---

## Flagship 2

### E8. I Gave a Record Shop an Entire AI Team

**Runtime** 20 to 24 min
**Drives to** the scenarios section

The payoff video. Everything from E0 through E7, assembled, running a business.

**Cold open.** A montage of the shop. Crate arriving, open mic sign-up sheet, a
consignment form, the espresso counter. "Eleven staff, six departments, and about
forty things nobody has written down."

**Beats, one per scenario**
- Crate to shelf. Assess, decide, communicate. Three chained skills
- Open mic night. Tribal knowledge capture, and the wait list rule nobody asked for
- Consignment intake. The gatekeeping shape, and the skill refusing a 70/30 split
- The lesson studio. House voice, taught by example
- Counter service. The free shipping check that pays for the whole thing

Close on the honest part: this took a weekend, not a quarter, and most of the value
came from writing things down rather than from the AI.

---

## The shorts engine

Two shorts a week, both extracted from long-form. Never written from scratch.

### Format A. Skill of the Week
45 to 60 seconds. One cafe skill. Before, after, done.
`before → the file on screen for 8 seconds → after → "full build in the description"`

### Format B. Spot the Bug
30 to 45 seconds. A bad description on screen. Three seconds of silence. The fix.
Pure comment bait, and the comments are people learning.

### Format C. One Rule
20 to 30 seconds. A single line from the site, delivered flat.
"Good is a low grade, not a compliment. Your skill needs to say that, because the
model doesn't know it."

### The standing short bank
- The five second test, always vs sometimes vs go get it
- "Delete a skill, get a better agent"
- Three words that make a skill fire
- "Your skill has never worked and here's the one line why"
- The binder on the shelf, 30 seconds
- "Skills vs MCP in 25 seconds"

---

## Cadence

| Week | Long form | Shorts |
|---|---|---|
| 1 | E0 flagship | 2 |
| 2 | - | 2 |
| 3 | E1 | 2 |
| 4 | - | 2 |
| 5 | E2 (the ranker) | 3, all pushing E2 |
| 6 | - | 2 |
| 7 | E3 | 2 |
| 8 | - | 2 |
| 9 | E4 | 2 |
| 10 | - | 2 |
| 11 | E5 | 2 |
| 12 | - | 2 |
| 13 | E6 | 3 |
| 14 | - | 2 |
| 15 | E7 | 2 |
| 16 | E8 flagship | 3 |

Sixteen weeks, nine long form, thirty-four shorts. If conference season eats a week,
skip a long form and keep the shorts. The shorts are the thing that holds the
audience while you're on a plane.

---

## Production notes

### Build the shop once
Every video draws on the same environment. Budget the build as its own piece of work,
not as part of episode one.

- SharePoint site with a Records library, a crate log list, a consignment register,
  and an Agent Assets library with the skills in it
- A Copilot Studio agent for consignment, with three tools wired up
- A small storefront repo with `.github/skills/` in it
- Sample data with enough volume to look real on camera. Roughly 200 inventory rows,
  30 consignment artists, 60 lesson students, 15 open mic sign-ups

Once that exists it also powers conference demos and any course work, which is the
real argument for doing it properly.

### Visual identity
Match the site so the two feel like one thing. Warm paper background, ink blue accent,
brass highlight. The record label mark from the site's favicon works as a lower third
and as the thumbnail anchor.

### Thumbnails
One system across the series. The record mark, one or two words, one face. The
words are the searchable part, so use the confusion, not the answer: `SKILLS vs MCP`,
`IT NEVER FIRES`, `DELETE THIS`.

### Titles
No colons. Search-shaped. Lead with the problem, not the feature. "Your Copilot Isn't
Broken" beats "Understanding Agent Skills in Microsoft 365."

### Descriptions
Every video description links the specific site page, the Skill Forge, and the
microsoft/skills repo. The site is the thing that keeps working after the video
stops being recommended.

---

## What each video needs from the site

| Episode | Page it drives to | Already built |
|---|---|---|
| E0 | `/100-foundations/` and `/100-foundations/how-it-fires.html` | yes |
| E1 | `/100-foundations/how-it-fires.html` | yes |
| E2 | `/100-foundations/which-is-which.html` | yes |
| E3 | `/200-authoring/failure-modes.html` and `/lab/forge.html` | yes |
| E4 | `/200-authoring/descriptions.html` | yes |
| E5 | `/300-shipping/portability.html` | yes |
| E6 | `/400-advanced/tokens.html` | yes |
| E7 | `/lab/decide.html` | yes |
| E8 | `/scenarios/` | yes |

Every episode already has its landing page. That's the point of building the site
first.

---

## Two things to decide before shooting

**Does E2 come first?** It's the highest search volume and the least well answered
online. There's a real argument for leading with it instead of E0, and letting the
canonical explainer be episode two for people who arrive confused rather than curious.

**How much of the shop do you show?** The scenarios are more compelling with actual
screen recordings of SharePoint lists and a Copilot Studio agent. That's more build
time up front and much better video. Worth deciding before you start, because it
changes the environment spec.
