/* ============================================================
   Should this be a skill? Seven questions, six verdicts.
   ============================================================ */
(function () {
  "use strict";
  var root = document.getElementById("wizard");
  if (!root) return;
  var BASE = "/skillup/";

  var QUESTIONS = [
    {
      key: "recurs",
      q: "How often does this come up?",
      opts: [
        ["often", "Weekly or more"],
        ["sometimes", "A few times a month"],
        ["rare", "Once or twice a year"],
        ["once", "This is a one-off"]
      ]
    },
    {
      key: "steps",
      q: "Is it a procedure, or a single ask?",
      opts: [
        ["multi", "Several steps that have to happen in order"],
        ["format", "One step, but the output has to look a specific way"],
        ["single", "One question, one answer"]
      ]
    },
    {
      key: "external",
      q: "Does it need to reach something outside the agent?",
      opts: [
        ["yes", "Yes, it has to read or write another system"],
        ["maybe", "It needs facts, but somebody could paste them in"],
        ["no", "No, everything it needs is in the conversation"]
      ]
    },
    {
      key: "scope",
      q: "Should this apply to every conversation, or only some?",
      opts: [
        ["always", "Every conversation, always"],
        ["sometimes", "Only when this particular task comes up"]
      ]
    },
    {
      key: "specific",
      q: "Is this how YOUR team does it, or how anyone would?",
      opts: [
        ["ours", "Ours. There are house rules a stranger wouldn't know"],
        ["generic", "Anyone competent would do it roughly the same way"]
      ]
    },
    {
      key: "shared",
      q: "Is it your preference or a team standard?",
      opts: [
        ["team", "A team standard. Others should follow it too"],
        ["mine", "Just how I like things"]
      ]
    },
    {
      key: "lookup",
      q: "Is the hard part knowing a procedure, or finding a fact?",
      opts: [
        ["procedure", "Knowing the procedure"],
        ["fact", "Finding the fact. The procedure is obvious once you have it"]
      ]
    }
  ];

  var VERDICTS = {
    skill: {
      name: "Build a skill",
      line: "This is exactly what skills are for.",
      what: "Repeatable, multi-step, house-specific, and only relevant sometimes. That combination is the definition of a skill.",
      next: "200-authoring/",
      nextLabel: "Go write it"
    },
    instructions: {
      name: "Use instructions",
      line: "This should always be true, which makes it instructions.",
      what: "A skill only applies when the orchestrator thinks it is relevant. Anything that should shape every response belongs in the agent's instructions instead, where it is always in effect.",
      next: "100-foundations/which-is-which.html",
      nextLabel: "See the comparison"
    },
    knowledge: {
      name: "Add knowledge",
      line: "The hard part is the fact, not the procedure.",
      what: "Add the reference as a knowledge source so the agent can look it up. If a house procedure grows around it later, write the skill then and have it point at the knowledge.",
      next: "100-foundations/which-is-which.html",
      nextLabel: "See the comparison"
    },
    tool: {
      name: "You need a tool first",
      line: "Skills are instructions. They cannot reach anything.",
      what: "Connect the system with a connector or MCP server. Then, if there are house rules about how to use it, wrap those in a skill. That combination is where skills get genuinely powerful.",
      next: "400-advanced/skills-plus-tools.html",
      nextLabel: "Skills that drive tools"
    },
    agent: {
      name: "Consider a separate agent",
      line: "Different audience, different permissions, different front door.",
      what: "When the people using it are a different group with different access, a skill inside somebody else's agent is the wrong container. Give it its own agent, then give that agent skills.",
      next: "400-advanced/skill-sets.html",
      nextLabel: "Designing a skill set"
    },
    prompt: {
      name: "Just prompt it",
      line: "Type it and move on.",
      what: "A skill you use twice a year costs description tokens on every single turn in between. That is a bad trade. Write a good prompt, save it in a note if you like, and skip the skill.",
      next: "400-advanced/tokens.html",
      nextLabel: "Why that costs you"
    }
  };

  var answers = {};
  var step = 0;

  function decide(a) {
    var why = [];

    if (a.external === "yes") {
      why.push("It has to read or write an external system, and skills cannot do that on their own.");
      if (a.specific === "ours") why.push("Once the tool exists, your house rules around it are a good skill.");
      return { v: "tool", why: why };
    }
    if (a.scope === "always") {
      why.push("You said it should apply to every conversation.");
      why.push("Skills load only when matched, so an always-on rule would apply inconsistently as a skill.");
      return { v: "instructions", why: why };
    }
    if (a.once === "once" || a.recurs === "once") {
      why.push("A one-off does not earn a permanent description in your context.");
      return { v: "prompt", why: why };
    }
    if (a.recurs === "rare" && a.specific !== "ours") {
      why.push("Once or twice a year, and nothing house-specific about it.");
      why.push("You would pay for the description on every turn in between.");
      return { v: "prompt", why: why };
    }
    if (a.lookup === "fact" && a.steps !== "multi") {
      why.push("The hard part is finding the fact, not following a procedure.");
      why.push("Knowledge sources are built for lookup. Skills are built for procedure.");
      return { v: "knowledge", why: why };
    }
    if (a.shared === "team" && a.specific === "ours" && a.scope === "sometimes" && a.steps === "multi" && a.external === "maybe") {
      why.push("Multi-step, house-specific, team-wide, and only sometimes relevant.");
      why.push("It needs facts, but a person can supply them, so no tool is required yet.");
      return { v: "skill", why: why };
    }
    if (a.specific === "generic" && a.shared === "mine") {
      why.push("Nothing house-specific, and it is your own preference rather than a standard.");
      why.push("The model probably already does this roughly right. Try prompting before building.");
      return { v: "prompt", why: why };
    }
    if (a.steps === "single" && a.specific === "generic") {
      why.push("One step, no house rules. There is nothing for a skill to encode.");
      return { v: "prompt", why: why };
    }

    why.push("Recurring, only relevant sometimes, and it encodes something a stranger would not know.");
    if (a.steps === "format") why.push("A required output shape is one of the strongest reasons to build a skill.");
    if (a.specific === "ours") why.push("The house rules are the thing worth writing down.");
    if (a.shared === "team") why.push("Team-wide, so it belongs somewhere shared rather than in your head.");
    return { v: "skill", why: why };
  }

  function progress() {
    var html = '<div class="wizard-progress">';
    for (var i = 0; i < QUESTIONS.length; i++) {
      html += "<i" + (i < step ? ' class="done"' : "") + "></i>";
    }
    return html + "</div>";
  }

  function renderQuestion() {
    var q = QUESTIONS[step];
    var html = progress();
    html += '<p class="eyebrow">Question ' + (step + 1) + " of " + QUESTIONS.length + "</p>";
    html += "<h3>" + q.q + "</h3><div class=\"opts\">";
    q.opts.forEach(function (o) {
      html += '<button class="opt" data-val="' + o[0] + '">' + o[1] + "</button>";
    });
    html += "</div>";
    if (step > 0) html += '<p style="margin:16px 0 0"><button class="mini" id="wizBack">back</button></p>';
    root.innerHTML = html;
  }

  function renderVerdict() {
    var out = decide(answers);
    var v = VERDICTS[out.v];
    var html = progress();
    html += '<p class="eyebrow">Verdict</p>';
    html += '<p class="verdict-name">' + v.name + "</p>";
    html += "<p><b>" + v.line + "</b></p>";
    html += "<p>" + v.what + "</p>";
    html += '<p class="eyebrow" style="margin-top:20px">Why you got this</p><ul class="why">';
    out.why.forEach(function (w) { html += "<li>" + w + "</li>"; });
    html += "</ul>";
    html += '<p style="margin-top:22px"><a class="btn" href="' + BASE + v.next + '">' + v.nextLabel + "</a> ";
    html += '<button class="mini" id="wizReset" style="margin-left:8px">start over</button></p>';
    root.innerHTML = html;
  }

  root.addEventListener("click", function (e) {
    var t = e.target;
    if (!t.classList) return;
    if (t.id === "wizReset") { answers = {}; step = 0; renderQuestion(); return; }
    if (t.id === "wizBack") { step = Math.max(0, step - 1); renderQuestion(); return; }
    if (t.classList.contains("opt")) {
      answers[QUESTIONS[step].key] = t.getAttribute("data-val");
      step++;
      if (step >= QUESTIONS.length) renderVerdict();
      else renderQuestion();
    }
  });

  renderQuestion();
})();
