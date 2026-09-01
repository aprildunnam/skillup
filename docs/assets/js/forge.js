/* ============================================================
   Skill Forge. A client-side SKILL.md linter.
   Every rule here maps to a page on this site. Nothing leaves
   the browser, there is no API key, there is no backend.
   ============================================================ */
(function () {
  "use strict";

  var BASE = "/skillup/";
  var editor = document.getElementById("skillEditor");
  if (!editor) return;

  var scoreNum = document.getElementById("scoreNum");
  var scoreBar = document.getElementById("scoreBar");
  var scoreGrade = document.getElementById("scoreGrade");
  var scoreLine = document.getElementById("scoreLine");
  var findingsEl = document.getElementById("findings");
  var CIRC = 2 * Math.PI * 36;
  var showPassing = false;

  /* ---------- parse ---------- */
  function parse(raw) {
    var doc = { raw: raw, hasFm: false, fmRaw: "", name: "", description: "", body: raw, fields: {} };
    var m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (m) {
      doc.hasFm = true;
      doc.fmRaw = m[1];
      doc.body = raw.slice(m[0].length);
      var lines = m[1].split(/\r?\n/);
      var key = null;
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var kv = line.match(/^([A-Za-z][\w-]*)\s*:\s*(.*)$/);
        if (kv) {
          key = kv[1].toLowerCase();
          doc.fields[key] = kv[2].trim();
        } else if (key && /^\s+\S/.test(line)) {
          doc.fields[key] += " " + line.trim();
        }
      }
      doc.name = (doc.fields.name || "").replace(/^["']|["']$/g, "");
      doc.description = (doc.fields.description || "").replace(/^["']|["']$/g, "");
    }
    doc.bodyLines = doc.body.split(/\r?\n/).filter(function (l) { return l.trim() !== ""; }).length;
    doc.bodyLower = doc.body.toLowerCase();
    return doc;
  }

  /* ---------- rules ---------- */
  var ABSTRACT = ["item", "items", "content", "document", "documents", "task", "tasks",
    "thing", "things", "data", "information", "stuff", "request", "requests", "process"];
  var BOILERPLATE = ["you are a helpful", "be helpful", "be accurate", "as an ai",
    "professional language", "consider the customer", "ensure customer satisfaction",
    "high quality", "best practices"];
  var HEDGES = ["should generally", "usually preferable", "try to", "where possible",
    "typically", "it is worth", "generally speaking", "if possible", "as needed",
    "appropriately", "as appropriate"];
  var SECRETS = [
    /sk-[A-Za-z0-9]{16,}/,
    /\bBearer\s+[A-Za-z0-9._-]{20,}/i,
    /\b(api[_-]?key|client[_-]?secret|password)\s*[:=]\s*\S{6,}/i,
    /https?:\/\/[^\s/]+:[^\s@]+@/
  ];

  function has(hay, needles) {
    for (var i = 0; i < needles.length; i++) if (hay.indexOf(needles[i]) !== -1) return needles[i];
    return null;
  }

  var RULES = [
    {
      id: "fm", weight: 18, label: "Frontmatter parses", cap: 20, capWhy: "there is no frontmatter, so nothing can load this skill",
      link: "100-foundations/anatomy.html",
      run: function (d) {
        if (!d.hasFm) return fail("No frontmatter found. A skill starts with a --- block containing name and description.");
        return pass("Frontmatter block found and parsed.");
      }
    },
    {
      id: "name", weight: 8, label: "Name is present",
      link: "200-authoring/naming.html",
      run: function (d) {
        if (!d.hasFm) return skip();
        if (!d.name) return fail("No name field. Add one, lowercase with hyphens.");
        return pass("Name: " + d.name);
      }
    },
    {
      id: "name-format", weight: 7, label: "Name format is valid",
      link: "200-authoring/naming.html", fix: "name",
      run: function (d) {
        if (!d.name) return skip();
        if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(d.name)) {
          return fail("Name must be lowercase letters, numbers, and hyphens, with no leading or trailing hyphen. This is enforced, not a style preference.");
        }
        return pass("Lowercase, hyphenated, no stray hyphens.");
      }
    },
    {
      id: "name-shape", weight: 3, label: "Name reads like a job", warnOnly: true,
      link: "200-authoring/naming.html",
      run: function (d) {
        if (!d.name) return skip();
        var words = d.name.split("-").length;
        if (words < 2) return warn("One-word names are usually too vague to match well and too generic to sit next to thirty siblings. Two to four words.");
        if (words > 5) return warn("Five-plus words means you are describing the procedure in the name. That is the description's job.");
        return pass(words + " words. Good length.");
      }
    },
    {
      id: "desc", weight: 16, label: "Description is present", cap: 25, capWhy: "with no description the orchestrator has nothing to match on",
      link: "200-authoring/descriptions.html",
      run: function (d) {
        if (!d.hasFm) return skip();
        if (!d.description) return fail("No description field. This is the only thing the orchestrator reads when deciding whether to use your skill. Without it, the skill never fires.");
        return pass(d.description.length + " characters.");
      }
    },
    {
      id: "desc-length", weight: 5, label: "Description length", warnOnly: true,
      link: "200-authoring/descriptions.html",
      run: function (d) {
        if (!d.description) return skip();
        var n = d.description.length;
        if (n < 45) return warn("Only " + n + " characters. Too short to carry the words a real person would type. Aim for one to three sentences.");
        if (n > 600) return warn(n + " characters. You pay for this on every turn, for every skill installed. Trim to the words doing matching work.");
        return pass(n + " characters. In the sweet spot.");
      }
    },
    {
      id: "desc-restate", weight: 8, label: "Description adds information", cap: 50, capWhy: "the description carries no matching information",
      link: "200-authoring/descriptions.html",
      run: function (d) {
        if (!d.description || !d.name) return skip();
        var plain = d.name.replace(/-/g, " ").toLowerCase();
        var dl = d.description.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
        if (dl === plain || dl === plain + " skill" || dl.length < plain.length + 12) {
          return fail("The description just restates the name. You are paying tokens on every turn for zero matching information.");
        }
        return pass("Description carries more than the name does.");
      }
    },
    {
      id: "desc-trigger", weight: 12, label: "Description says when to use it", cap: 55, capWhy: "with no trigger clause this will not reliably fire",
      link: "200-authoring/descriptions.html",
      run: function (d) {
        if (!d.description) return skip();
        var dl = d.description.toLowerCase();
        if (/\b(use when|use this when|when someone|when a user|when the user|when asked|when reviewing|for when)\b/.test(dl)) {
          return pass("Has an explicit trigger clause.");
        }
        return fail("No trigger clause. Add \"Use when...\" followed by the words somebody would actually type. This is the highest-leverage fix on this page.");
      }
    },
    {
      id: "desc-concrete", weight: 6, label: "Description names concrete things", warnOnly: true, cap: 70, capWhy: "the description is abstract enough that this will fire on everything",
      link: "200-authoring/descriptions.html",
      run: function (d) {
        if (!d.description) return skip();
        var words = d.description.toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/);
        var abstract = 0, i;
        for (i = 0; i < words.length; i++) if (ABSTRACT.indexOf(words[i]) !== -1) abstract++;
        var capsOrNouns = (d.description.match(/\b[A-Z][a-zA-Z]{2,}\b/g) || []).length;
        if (abstract >= 2 && capsOrNouns === 0) {
          return warn("Leaning on abstract nouns (" + abstract + " of them) with no specific ones. \"Items\" and \"documents\" match everything, so the skill fires constantly and drowns out better ones.");
        }
        return pass("Names specific things rather than abstractions.");
      }
    },
    {
      id: "body", weight: 8, label: "Body exists",
      link: "200-authoring/body-structure.html",
      run: function (d) {
        if (d.bodyLines < 3) return fail("Almost no body. A skill with nothing but frontmatter will fire and change nothing.");
        return pass(d.bodyLines + " non-empty lines.");
      }
    },
    {
      id: "body-scope", weight: 7, label: "Body scopes itself", warnOnly: true,
      link: "200-authoring/body-structure.html",
      run: function (d) {
        if (d.bodyLines < 3) return skip();
        if (/^#{1,4}\s*when to use/im.test(d.body) || /\bwhen to use this\b/i.test(d.body)) {
          return pass("Has a \"when to use this\" section.");
        }
        return warn("No \"When to use this\" section. The description gets you invoked, this section stops the skill applying to requests that only looked relevant.");
      }
    },
    {
      id: "body-boundary", weight: 5, label: "Body says what it is NOT for", warnOnly: true,
      link: "200-authoring/failure-modes.html",
      run: function (d) {
        if (d.bodyLines < 3) return skip();
        if (/\b(do not use this|don't use this|not for|do not use it for|this does not cover)\b/i.test(d.body)) {
          return pass("States a boundary.");
        }
        return warn("No boundary line. One sentence saying what this is not for prevents more misfires than anything else you can add.");
      }
    },
    {
      id: "body-steps", weight: 6, label: "Body has a procedure", warnOnly: true,
      link: "200-authoring/body-structure.html",
      run: function (d) {
        if (d.bodyLines < 3) return skip();
        var numbered = (d.body.match(/^\s*\d+[.)]\s+\S/gm) || []).length;
        if (numbered >= 2 || /^#{1,4}\s*steps/im.test(d.body)) return pass("Numbered steps found.");
        return warn("No numbered steps. Prose procedures get followed loosely. Numbered, imperative, one action each.");
      }
    },
    {
      id: "body-output", weight: 10, label: "Body shows an output format", warnOnly: true,
      link: "200-authoring/examples.html",
      run: function (d) {
        if (d.bodyLines < 3) return skip();
        if (/^#{1,4}\s*(output|output format|format|response format)/im.test(d.body)) {
          return pass("Has an output format section.");
        }
        return warn("No output format section. This is the highest-leverage thing you can add. Show the literal shape you want back instead of describing it.");
      }
    },
    {
      id: "body-length", weight: 5, label: "Body length is sane", warnOnly: true,
      link: "400-advanced/tokens.html",
      run: function (d) {
        var n = d.bodyLines;
        if (n < 3) return skip();
        if (n < 10) return warn("Only " + n + " lines. Usually too thin to change behavior. What is this actually adding?");
        if (n > 300) return warn(n + " lines. Almost always two skills, or one skill and a bundled reference file.");
        if (n > 150) return warn(n + " lines. Fine if it is genuinely a big procedure, but check whether reference material should move to a bundled file.");
        return pass(n + " lines. Good size.");
      }
    },
    {
      id: "no-boilerplate", weight: 5, label: "No filler rules", warnOnly: true,
      link: "200-authoring/body-structure.html",
      run: function (d) {
        var hit = has(d.bodyLower, BOILERPLATE);
        if (hit) return warn("Found \"" + hit + "\". Rules nobody would violate anyway are dead weight in your context. Keep only rules somebody actually breaks.");
        return pass("No generic assistant boilerplate.");
      }
    },
    {
      id: "no-hedging", weight: 6, label: "Rules are stated firmly", warnOnly: true,
      link: "200-authoring/failure-modes.html",
      run: function (d) {
        var hit = has(d.bodyLower, HEDGES);
        if (hit) return warn("Found hedging language (\"" + hit + "\"). A model reading \"should generally\" will generally not. Use always, never, and do not.");
        return pass("No hedging language.");
      }
    },
    {
      id: "no-guess", weight: 5, label: "Says what to do with missing info", warnOnly: true,
      link: "200-authoring/rewrites.html",
      run: function (d) {
        if (d.bodyLines < 10) return skip();
        if (/\b(do not guess|don't guess|ask for|ask the user|if you (do not|don't) have enough)\b/i.test(d.body)) {
          return pass("Tells the agent to ask rather than invent.");
        }
        return warn("Nothing tells the agent what to do when information is missing. Without it, it will confidently invent something. Add: \"If you don't have enough information, ask. Do not guess.\"");
      }
    },
    {
      id: "no-secrets", weight: 12, label: "No credentials in the file", cap: 30, capWhy: "there is a credential in the file",
      link: "400-advanced/governance.html",
      run: function (d) {
        for (var i = 0; i < SECRETS.length; i++) {
          if (SECRETS[i].test(d.raw)) return fail("This looks like a credential. Skills get shared, committed, and packaged. Never put a key, token, or password in one.");
        }
        return pass("No credential patterns detected.");
      }
    },
    {
      id: "placeholders", weight: 14, label: "No placeholder text", cap: 60, capWhy: "it is still a scaffold, not a finished skill",
      link: "200-authoring/body-structure.html",
      run: function (d) {
        var hits = [];
        if (/your-skill-name|<the words|<[a-z][a-z -]{4,}>/i.test(d.raw)) hits.push("template placeholders");
        if (/\bTODO\b|\bTBD\b|\bFIXME\b|lorem ipsum/i.test(d.raw)) hits.push("TODO markers");
        if (/\[(placeholder|your [a-z]+|fill in|xxx)\]/i.test(d.raw)) hits.push("bracketed placeholders");
        if (hits.length) return fail("Still contains " + hits.join(" and ") + ". This is a scaffold, not a skill yet. Fill it in before you install it anywhere.");
        return pass("No placeholder text left.");
      }
    },
    {
      id: "unfinished", weight: 12, label: "Sections are filled in", cap: 65, capWhy: "sections are empty, so the structure is scoring better than the content",
      link: "200-authoring/body-structure.html",
      run: function (d) {
        if (d.bodyLines < 3) return skip();
        var lines = d.body.split(/\r?\n/);
        var emptyItems = 0, danglers = 0, i, t;
        for (i = 0; i < lines.length; i++) {
          t = lines[i];
          if (/^\s*(?:[-*]|\d+[.)])\s*$/.test(t)) emptyItems++;
          if (/(?:^|\s)(?:for|to|with|the)\s*$/.test(t) && t.trim().length > 8) danglers++;
        }
        // headings immediately followed by another heading or end of file
        var emptySections = 0;
        for (i = 0; i < lines.length; i++) {
          if (!/^#{1,6}\s+\S/.test(lines[i])) continue;
          var j = i + 1, sawContent = false;
          while (j < lines.length && !/^#{1,6}\s+\S/.test(lines[j])) {
            if (lines[j].trim() !== "") { sawContent = true; break; }
            j++;
          }
          if (!sawContent) emptySections++;
        }
        var total = emptyItems + danglers + emptySections;
        if (total >= 3) {
          return fail(emptySections + " empty section(s) and " + (emptyItems + danglers) + " unfinished line(s). The structure is right and the content is missing, which scores well and works badly.");
        }
        if (total > 0) {
          return warn(total + " unfinished spot(s): an empty section or a bullet with nothing after it. Fill them in or delete them.");
        }
        return pass("Every section has content.");
      }
    },
    {
      id: "headings", weight: 3, label: "Heading structure is clean", warnOnly: true,
      link: "200-authoring/body-structure.html",
      run: function (d) {
        if (d.bodyLines < 10) return skip();
        var hs = d.body.match(/^#{1,6}\s+/gm) || [];
        if (hs.length === 0) return warn("No headings in the body. Sections make a skill scannable for the model and for the next person to edit it.");
        return pass(hs.length + " headings.");
      }
    }
  ];

  function pass(detail) { return { status: "ok", detail: detail }; }
  function warn(detail) { return { status: "warn", detail: detail }; }
  function fail(detail) { return { status: "err", detail: detail }; }
  function skip() { return { status: "skip", detail: "" }; }

  /* ---------- run ---------- */
  function evaluate() {
    var doc = parse(editor.value);
    var earned = 0, possible = 0;
    var results = [];

    RULES.forEach(function (rule) {
      var r = rule.run(doc);
      if (r.status === "skip") return;
      possible += rule.weight;
      if (r.status === "ok") earned += rule.weight;
      else if (r.status === "warn") earned += rule.weight * 0.35;
      results.push({ rule: rule, res: r });
    });

    var score = possible > 0 ? Math.round((earned / possible) * 100) : 0;

    // Some failures are fatal, not merely costly. A skill that cannot fire
    // does not get a B because the rest of the file is tidy.
    var capReason = null;
    results.forEach(function (item) {
      if (item.res.status === "ok") return;
      if (item.rule.cap === undefined) return;
      if (item.res.status === "warn" && item.rule.cap >= 70 === false) return;
      if (score > item.rule.cap) {
        score = item.rule.cap;
        capReason = item.rule.capWhy;
      } else if (score === item.rule.cap && !capReason) {
        capReason = item.rule.capWhy;
      }
    });

    render(score, results, doc, capReason);
    saveDraft(editor.value);
  }

  function gradeFor(score) {
    if (score >= 90) return ["A", "Ship it."];
    if (score >= 80) return ["B", "Solid. Fix the warnings when you get a minute."];
    if (score >= 65) return ["C", "It will work, inconsistently."];
    if (score >= 45) return ["D", "Something here is going to bite you."];
    return ["F", "This will not fire, or will not be followed."];
  }

  function render(score, results, doc, capReason) {
    var g = gradeFor(score);
    scoreNum.textContent = score;
    scoreGrade.textContent = g[0] + " grade";
    scoreLine.textContent = capReason ? "Capped: " + capReason + "." : g[1];
    scoreBar.style.strokeDasharray = CIRC;
    scoreBar.style.strokeDashoffset = CIRC * (1 - score / 100);
    scoreBar.style.stroke = score >= 80 ? "var(--good)" : score >= 55 ? "var(--warn)" : "var(--bad)";

    var order = { err: 0, warn: 1, ok: 2 };
    results.sort(function (a, b) { return order[a.res.status] - order[b.res.status]; });

    findingsEl.innerHTML = "";
    var passing = results.filter(function (r) { return r.res.status === "ok"; });
    var issues = results.filter(function (r) { return r.res.status !== "ok"; });

    if (!issues.length) {
      var done = document.createElement("li");
      done.className = "finding ok";
      done.innerHTML = '<span class="tag">ok</span><div><b>Every check passed</b><p>Nothing left for a linter to tell you. The next step is a <a href="' + BASE + '400-advanced/evals.html">test set</a>, which is the only thing that can tell you whether it actually fires.</p></div>';
      findingsEl.appendChild(done);
    }

    issues.concat(passing).forEach(function (item, idx) {
      var li = document.createElement("li");
      li.className = "finding " + item.res.status;
      var tag = item.res.status === "err" ? "fix" : item.res.status === "warn" ? "warn" : "ok";
      var html = '<span class="tag">' + tag + "</span><div><b>" + item.rule.label + "</b>";
      html += "<p>" + escapeHtml(item.res.detail) + "</p>";
      if (item.res.status !== "ok" && item.rule.link) {
        html += '<a href="' + BASE + item.rule.link + '">Read the fix</a>';
      }
      if (item.res.status !== "ok" && item.rule.fix === "name" && doc.name) {
        html += ' <button class="mini" data-fixname="1" style="margin-top:6px">Fix the name for me</button>';
      }
      html += "</div>";
      li.innerHTML = html;
      if (item.res.status === "ok") li.classList.add("is-pass");
      findingsEl.appendChild(li);
    });

    if (passing.length) {
      var toggle = document.createElement("li");
      toggle.className = "finding-toggle";
      toggle.innerHTML = '<button class="mini" type="button" id="togglePass">' +
        (showPassing ? "hide" : "show") + " " + passing.length + " passing check" + (passing.length === 1 ? "" : "s") + "</button>";
      findingsEl.insertBefore(toggle, findingsEl.querySelector(".is-pass"));
    }
    findingsEl.classList.toggle("hide-pass", !showPassing);
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- the one automatic fix ---------- */
  function fixName() {
    var doc = parse(editor.value);
    if (!doc.name) return;
    var fixed = doc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    editor.value = editor.value.replace(
      new RegExp("^(\\s*name\\s*:\\s*).*$", "m"),
      "$1" + fixed
    );
    evaluate();
  }

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t || !t.getAttribute) return;
    if (t.getAttribute("data-fixname")) fixName();
    if (t.id === "togglePass") { showPassing = !showPassing; evaluate(); }
  });

  /* ---------- drafts ---------- */
  function saveDraft(v) { try { localStorage.setItem("skillup-forge-draft", v); } catch (err) {} }
  function loadDraft() { try { return localStorage.getItem("skillup-forge-draft"); } catch (err) { return null; } }

  /* ---------- loading skills ---------- */
  var STARTER = [
    "---",
    "name: your-skill-name",
    "description: What it does. Use when someone asks to <the words a real person would type>.",
    "---",
    "",
    "# Your skill",
    "",
    "## When to use this",
    "",
    "",
    "Do not use this for ",
    "",
    "## Steps",
    "1. ",
    "2. ",
    "",
    "## Output format",
    "",
    "",
    "## Rules",
    "- ",
    ""
  ].join("\n");

  function loadSkill(slug) {
    var url = BASE + "assets/skills/" + slug + ".md";
    fetch(url).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (text) {
      editor.value = text;
      evaluate();
      editor.scrollTop = 0;
      var pane = document.querySelector(".forge");
      if (pane) pane.scrollIntoView({ behavior: "smooth", block: "start" });
    }).catch(function () {
      window.alert("Couldn't load that skill file. If you're viewing this page from your filesystem rather than a web server, fetch is blocked. Serve the site over http and it'll work.");
    });
  }

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t || !t.getAttribute) return;
    var slug = t.getAttribute("data-load");
    if (slug) { loadSkill(slug); return; }
    if (t.id === "forgeBlank") { editor.value = STARTER; evaluate(); }
    if (t.id === "forgeCopy") {
      navigator.clipboard.writeText(editor.value).then(function () {
        t.textContent = "copied";
        setTimeout(function () { t.textContent = "copy"; }, 1400);
      });
    }
    if (t.id === "forgeDownload") {
      var doc = parse(editor.value);
      var blob = new Blob([editor.value], { type: "text/markdown" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "SKILL.md";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    }
  });

  /* ---------- boot ---------- */
  var params = new URLSearchParams(window.location.search);
  var wanted = params.get("skill");
  var seeded = params.get("seed");

  if (wanted) {
    loadSkill(wanted);
  } else if (seeded) {
    try { editor.value = decodeURIComponent(escape(atob(seeded))); } catch (err) { editor.value = STARTER; }
    evaluate();
  } else {
    var draft = loadDraft();
    editor.value = draft && draft.trim() ? draft : STARTER;
    evaluate();
  }

  var t = null;
  editor.addEventListener("input", function () {
    clearTimeout(t);
    t = setTimeout(evaluate, 180);
  });
})();
