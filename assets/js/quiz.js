/* Checkpoint quiz. Reveals the explanation on any answer, right or wrong. */
(function () {
  var quiz = document.getElementById("quiz");
  if (!quiz) return;
  var result = document.getElementById("quizResult");
  var questions = Array.prototype.slice.call(quiz.querySelectorAll(".q"));
  var answered = 0, correct = 0;

  questions.forEach(function (q) {
    var right = q.getAttribute("data-answer");
    var opts = Array.prototype.slice.call(q.querySelectorAll(".opt"));
    opts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (q.classList.contains("done")) return;
        q.classList.add("done");
        var picked = btn.getAttribute("data-k");
        opts.forEach(function (o) {
          o.disabled = true;
          if (o.getAttribute("data-k") === right) o.classList.add("is-right");
        });
        if (picked !== right) btn.classList.add("is-wrong");
        else correct++;
        var ex = q.querySelector(".explain");
        if (ex) ex.hidden = false;
        answered++;
        if (answered === questions.length && result) {
          result.hidden = false;
          var msg = correct === questions.length
            ? "All six. Level 100 is done, go write one."
            : correct >= 4
              ? "Solid. Skim the pages linked above for the ones you missed, then move on."
              : "Worth another pass at Level 100 before Level 200. The loading model page is the one that matters most.";
          result.innerHTML = '<p class="eyebrow">Result</p><p><b>' + correct + " of " + questions.length + "</b>. " + msg + "</p>";
          result.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });
    });
  });
})();
