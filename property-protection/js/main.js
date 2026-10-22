(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  root.classList.add("js");

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.querySelector(".nav-toggle-label").textContent = open ? "Close" : "Menu";
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
})();
