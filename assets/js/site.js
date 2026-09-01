/* Theme toggle + mobile nav. Nothing else. */
(function () {
  var root = document.documentElement;
  var KEY = "skillup-theme";

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* private window, fine */ }
  }

  var saved = stored();
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);

  var btn = document.getElementById("themeToggle");
  if (btn) {
    var label = btn.querySelector(".theme-label");
    function current() {
      var attr = root.getAttribute("data-theme");
      if (attr) return attr;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function sync() { if (label) label.textContent = current() === "dark" ? "Light" : "Dark"; }
    sync();
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(next);
      sync();
    });
  }

  var menu = document.getElementById("menuToggle");
  var sidebar = document.getElementById("sidebar");
  if (menu && sidebar) {
    menu.addEventListener("click", function () {
      var open = sidebar.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
