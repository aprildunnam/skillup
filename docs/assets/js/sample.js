/* Sample pages: "Open this in the Skill Forge" buttons. */
(function () {
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t || !t.getAttribute) return;
    var slug = t.getAttribute("data-load-skill");
    if (!slug) return;
    window.location.href = "/skillup/lab/forge.html?skill=" + encodeURIComponent(slug);
  });
})();
