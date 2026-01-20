document.querySelectorAll(".servico").forEach((servico) => {
  servico.querySelector(".servico-header").addEventListener("click", () => {
    servico.classList.toggle("active");
  });
});
