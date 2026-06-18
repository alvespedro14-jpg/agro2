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
let fontSize = 16;
let speech;

function increaseFont() {
  fontSize += 2;
  document.body.style.fontSize = fontSize + "px";
}

function decreaseFont() {
  fontSize -= 2;
  document.body.style.fontSize = fontSize + "px";
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
  document.body.classList.toggle("large-text");
}

// Leitura em voz alta (acessibilidade para deficiência visual)
function readPage() {
  const text = document.body.innerText;
  speech = new SpeechSynthesisUtterance(text);
  speech.lang = "pt-BR";
  window.speechSynthesis.speak(speech);
}

function stopReading() {
  window.speechSynthesis.cancel();
}
