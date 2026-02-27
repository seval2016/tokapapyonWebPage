document.addEventListener("click", function (e) {

  const item = e.target.closest(".previous-item");
  if (!item) return;

  const imgSrc = item.querySelector("img").src;

  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";

  overlay.innerHTML = `
    <div class="lightbox-content">
      <img src="${imgSrc}" alt="">
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener("click", () => {
    overlay.remove();
  });

});