// Infinity Home Care — shared site scripts

(function () {
  "use strict";

  // Mobile navigation toggle
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");

  if (toggle && menu) {
    const closeMenu = function () {
      menu.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("hidden") === false;
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu when a link inside it is tapped
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });

    // Close on Escape and return focus to the toggle
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("hidden") === false) {
        closeMenu();
        toggle.focus();
      }
    });

    // Keep state in sync when crossing to desktop: the menu is `md:hidden`,
    // so reset it (and aria-expanded) whenever the viewport reaches md.
    const desktop = window.matchMedia("(min-width: 768px)");
    const handleViewportChange = function (mq) {
      if (mq.matches) {
        closeMenu();
      }
    };
    // addEventListener on MediaQueryList is supported in modern browsers;
    // fall back to addListener for older ones.
    if (typeof desktop.addEventListener === "function") {
      desktop.addEventListener("change", handleViewportChange);
    } else if (typeof desktop.addListener === "function") {
      desktop.addListener(handleViewportChange);
    }
  }

  // Keep the footer copyright year current
  const yearEls = document.querySelectorAll("#year");
  const year = String(new Date().getFullYear());
  yearEls.forEach(function (el) {
    el.textContent = year;
  });
})();
