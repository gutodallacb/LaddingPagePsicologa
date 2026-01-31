document.querySelectorAll(".toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const servico = btn.closest(".servico");

    document.querySelectorAll(".servico").forEach((s) => {
      if (s !== servico) s.classList.remove("active");
    });

    servico.classList.toggle("active");
  });
});
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    // fecha todos
    document.querySelectorAll(".faq-item").forEach((i) => {
      i.classList.remove("active");
    });

    // se não estava aberto, abre
    if (!isOpen) item.classList.add("active");
  });
});
