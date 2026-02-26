// WhatsApp integration stub

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("whatsappButton");
  if (!button) return;

  button.addEventListener("click", () => {
    // Replace with your WhatsApp number in international format (e.g. 905xxxxxxxxx)
    const phone = "900000000000";
    const text = encodeURIComponent("Merhaba, Tokapapyon 23 Nisan koleksiyonu hakkında bilgi almak istiyorum.");
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank", "noopener");
  });
});

