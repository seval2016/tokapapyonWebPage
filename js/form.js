// Basic form handling stub for contact section

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // In production, replace this with real submit (AJAX or external service)
    // For now, just reset the form.
    form.reset();
    form.classList.remove("was-validated");
  });
});

