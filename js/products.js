console.log("products.js yüklendi");

function waitForProductGrid() {
  const grid = document.getElementById("productGrid");

  if (!grid) {
    requestAnimationFrame(waitForProductGrid);
    return;
  }

  console.log("productGrid bulundu");

  loadProducts(grid);
}

async function loadProducts(grid) {
  try {
    const response = await fetch("./data/products.json");

    if (!response.ok) {
      throw new Error("JSON okunamadı");
    }

    const products = await response.json();

    products.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6";

      col.innerHTML = `
  <article class="premium-card">

    <div class="premium-image-area">
      <img src="${product.image}" 
           alt="${product.title}" 
           class="premium-image">
    </div>

    <div class="premium-body">

      <h3 class="premium-title">
        ${product.title}
      </h3>

      <p class="premium-subtitle">
        ${product.description}
      </p>

      <div class="premium-cta">
        <a href="#contact" class="premium-button btn btn-danger px-4 py-2 btn-lg">
          Teklif Al
        </a>
      </div>

    </div>

  </article>
`;

      grid.appendChild(col);
    });

    console.log("Ürünler basıldı:", products.length);
  } catch (err) {
    console.error("HATA:", err);
  }
}

waitForProductGrid();
