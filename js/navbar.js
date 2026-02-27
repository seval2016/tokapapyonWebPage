// Navbar-related behaviors

document.addEventListener("sections:loaded", () => {
  initNavbar();
});

function initNavbar() {
  const navbar = document.querySelector("header .navbar");
  if (!navbar) return;

  const navLinks = navbar.querySelectorAll("a.nav-link[href^='#']");
  if (!navLinks.length) return;

  enableNavbarScrollHighlight(navLinks);
  enableNavbarCollapseOnClick(navLinks);
  enableNavbarShrinkOnScroll(navbar);
}

function enableNavbarScrollHighlight(links) {
  const sections = Array.from(links)
    .map((link) => {
      const id = link.getAttribute("href")?.substring(1);
      if (!id) return null;
      const section = document.getElementById(id);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const match = sections.find((s) => s.section === entry.target);
        if (!match) return;

        if (entry.isIntersecting) {
          sections.forEach((s) => s.link.classList.remove("active"));
          match.link.classList.add("active");
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((s) => observer.observe(s.section));
}

function enableNavbarCollapseOnClick(links) {
  const toggler = document.querySelector(".navbar-toggler");
  const collapseElement = document.getElementById("mainNavbar");
  if (!toggler || !collapseElement || typeof bootstrap === "undefined") return;

  const collapse = new bootstrap.Collapse(collapseElement, { toggle: false });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const isTogglerVisible = window.getComputedStyle(toggler).display !== "none";
      if (isTogglerVisible) {
        collapse.hide();
      }
    });
  });
}

function enableNavbarShrinkOnScroll(navbar) {
  const shrinkOffset = 24;

  const onScroll = () => {
    const shouldShrink = window.scrollY > shrinkOffset;
    navbar.classList.toggle("navbar-shrink", shouldShrink);
    navbar.classList.toggle("navbar-scrolled", shouldShrink);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}


