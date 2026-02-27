document.addEventListener("sections:loaded", async () => {

  const slider = document.getElementById("heroSlider");
  if (!slider || typeof bootstrap === "undefined") return;

  const inner = slider.querySelector(".carousel-inner");
  const indicators = slider.querySelector(".carousel-indicators");

  // Temizle (güvenlik için)
  inner.innerHTML = "";
  indicators.innerHTML = "";

  try {
    const response = await fetch("data/hero-slides.json");
    const slides = await response.json();

    slides.forEach((slide, index) => {

      // Slide
      const slideDiv = document.createElement("div");
      slideDiv.className = `carousel-item ${index === 0 ? "active" : ""}`;

      slideDiv.innerHTML = `
        <div class="hero-slide">
          <img src="${slide.image}" class="hero-img" alt="">
          <div class="hero-overlay"></div>

          <div class="container hero-content">
            <div class="hero-copy">
              <p class="hero-eyebrow">${slide.eyebrow}</p>
              <h2 class="hero-title">${slide.title}</h2>
              <p class="hero-subtitle">${slide.subtitle}</p>
              <div class="hero-buttons">
                <a href="${slide.primaryButtonLink}" 
                   class="btn btn-danger btn-lg rounded-pill px-4">
                   ${slide.primaryButtonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

      inner.appendChild(slideDiv);

      // Indicator
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-bs-target", "#heroSlider");
      button.setAttribute("data-bs-slide-to", index);
      if (index === 0) button.classList.add("active");

      indicators.appendChild(button);
    });

    // Carousel başlat
    bootstrap.Carousel.getOrCreateInstance(slider, {
      interval: 5000,
      pause: false,
      wrap: true
    });

  } catch (err) {
    console.error("Hero slider yüklenemedi:", err);
  }

});