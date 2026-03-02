document.addEventListener("click", function (e) {

  const button = e.target.closest(".js-whatsapp");
  if (!button) return;

  e.preventDefault();

const phoneNumber = "5528178989";

  const productCard = button.closest(".product-card");

  let message;

  if (productCard) {

    const titleElement = productCard.querySelector(".product-title");
    const productTitle = titleElement ? titleElement.innerText.trim() : "";

    message = `Merhaba, "${productTitle}" modeli için toplu sipariş ve fiyat bilgisi almak istiyorum.`;

  } else {

    message = "Merhaba, 23 Nisan koleksiyonu için toplu sipariş teklifi almak istiyorum.";

  }

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");

});