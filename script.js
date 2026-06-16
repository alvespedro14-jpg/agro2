// Efeito simples de interação ao rolar a página
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.style.border = "2px solid #a5d6a7";
    } else {
      sec.style.border = "none";
    }
  });
});

// Mensagem inicial
console.log("Site do Agro no Brasil carregado com sucesso 🌱");
