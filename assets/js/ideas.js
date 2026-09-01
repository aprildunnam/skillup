/* ============================================================
   Skill idea generator. Curated seeds, not random recombination.
   Hands off into the Forge with a real scaffold.
   ============================================================ */
(function () {
  "use strict";
  var roleSel = document.getElementById("ideaRole");
  var platSel = document.getElementById("ideaPlatform");
  var out = document.getElementById("ideaCards");
  var again = document.getElementById("ideaAgain");
  if (!roleSel || !out) return;

  var ALL = window.SKILLUP_IDEAS || [];
  var PLATFORM_LABEL = { m365: "M365 Copilot", studio: "Copilot Studio", github: "GitHub Copilot" };
  var shownIds = {};

  function scaffold(idea) {
    return [
      "---",
      "name: " + idea.name,
      "description: " + idea.desc,
      "---",
      "",
      "# " + idea.name.replace(/-/g, " ").replace(/^./, function (c) { return c.toUpperCase(); }),
      "",
      "## When to use this",
      "",
      "",
      "Do not use this for ",
      "",
      "## Steps",
      "1. ",
      "2. ",
      "3. ",
      "",
      "## Output format",
      "",
      "",
      "## Rules",
      "- ",
      "- If you don't have enough information, ask. Do not guess.",
      ""
    ].join("\n");
  }

  function encode(text) {
    return btoa(unescape(encodeURIComponent(text)));
  }

  function pick(role, platform) {
    var inRole = ALL.filter(function (i) { return i.role === role; });
    var fits = inRole.filter(function (i) { return i.platforms.indexOf(platform) !== -1; });
    var rest = inRole.filter(function (i) { return i.platforms.indexOf(platform) === -1; });

    function shuffleWeighted(list) {
      return list.slice().sort(function (a, b) {
        var sa = (shownIds[a.name] ? 1 : 0) + Math.random();
        var sb = (shownIds[b.name] ? 1 : 0) + Math.random();
        return sa - sb;
      });
    }

    var ordered = shuffleWeighted(fits).concat(shuffleWeighted(rest));
    var chosen = ordered.slice(0, 3);
    chosen.forEach(function (c) { shownIds[c.name] = true; });
    if (Object.keys(shownIds).length >= inRole.length) shownIds = {};
    return chosen;
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function render() {
    var role = roleSel.value;
    var platform = platSel.value;
    var picks = pick(role, platform);

    if (!picks.length) {
      out.innerHTML = '<p>No seeded ideas for that combination yet.</p>';
      return;
    }

    out.innerHTML = picks.map(function (idea) {
      var fits = idea.platforms.indexOf(platform) !== -1;
      var plats = idea.platforms.map(function (p) { return PLATFORM_LABEL[p]; }).join(", ");
      var html = '<div class="ideacard">';
      html += '<div class="nm">' + esc(idea.name) + "</div>";
      html += '<div class="ds">' + esc(idea.desc) + "</div>";
      html += '<div class="why-it"><b>Why this works:</b> ' + esc(idea.why) + "</div>";
      if (!fits) {
        html += '<div class="why-it" style="color:var(--warn)">Better suited to ' + esc(plats) + " than " + esc(PLATFORM_LABEL[platform]) + ", but the file is the same either way.</div>";
      }
      html += '<div class="go"><a class="mini" href="/skillup/lab/forge.html?seed=' + encodeURIComponent(encode(scaffold(idea))) + '">Start this in the Forge</a></div>';
      html += "</div>";
      return html;
    }).join("");
  }

  roleSel.addEventListener("change", render);
  platSel.addEventListener("change", render);
  if (again) again.addEventListener("click", render);
  render();
})();
