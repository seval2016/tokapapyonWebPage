
document.addEventListener("click", function (e) {

  const item = e.target.closest(".portfolio-item");
  if (!item) return;

  const type = item.dataset.type;
  const src = item.dataset.src;

  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";

  const content = document.createElement("div");
  content.className = "lightbox-content";

  let innerHTML = `<span class="lightbox-close">&times;</span>`;

  if (type === "image") {
    innerHTML += `<img src="${src}" alt="">`;
  } else {
    innerHTML += `
      <video src="${src}" controls autoplay playsinline></video>
    `;
  }

  content.innerHTML = innerHTML;
  overlay.appendChild(content);
  document.body.appendChild(overlay);

  // Scroll kilitle
  document.body.style.overflow = "hidden";

  // Kapatma
  overlay.addEventListener("click", function (ev) {
    if (
      ev.target.classList.contains("lightbox-overlay") ||
      ev.target.classList.contains("lightbox-close")
    ) {
      overlay.remove();
      document.body.style.overflow = "";
    }
  });

});