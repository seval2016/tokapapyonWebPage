// Main entry: dynamic section includes and global behaviors

document.addEventListener("DOMContentLoaded", () => {
  injectCurrentYear();
  includeSections().then(() => {
    document.dispatchEvent(new CustomEvent("sections:loaded"));
  });
});

async function includeSections() {
  const includeTargets = document.querySelectorAll("[data-include]");

  const fetchPromises = Array.from(includeTargets).map(async (el) => {
    const file = el.getAttribute("data-include");
    if (!file) return;

    try {
      const response = await fetch(file);
      if (!response.ok) {
        // In production you might want better error logging
        el.innerHTML = "<!-- Section yüklenemedi -->";
        return;
      }
      const html = await response.text();
      el.innerHTML = html;
    } catch (error) {
      el.innerHTML = "<!-- Section yüklenemedi -->";
    }
  });

  await Promise.all(fetchPromises);
}

function injectCurrentYear() {
  const target = document.getElementById("footerYear");
  if (target) {
    target.textContent = new Date().getFullYear().toString();
  }
}

