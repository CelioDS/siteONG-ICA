const data = new Date();
const anoAtual = data.getFullYear();
const ano = document.getElementById("ano");
const menuLinks = document.querySelector(".menu");
const menuToggle = document.querySelector("#mobile-menu");

// Só executa se o elemento do ano existir
if (ano) {
  ano.textContent = `© ${anoAtual}`;
}

// Só adiciona o evento se o botão de menu existir no HTML
if (menuToggle && menuLinks) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("is-active");
      menuLinks.classList.remove("active");
    });
  });
}
