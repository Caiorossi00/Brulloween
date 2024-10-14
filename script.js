const colaboradores = [
  {
    foto: "https://github.com/Caiorossi00/Brulloween/blob/main/assets/colaboradores/bruno.jpg?raw=true",
    nome: "Bruno Gonçalves",
    instagram: "https://instagram.com/gbrunoramos",
    whatsapp: "https://wa.me/53991056073",
  },
  {
    foto: "https://github.com/Caiorossi00/Brulloween/blob/main/assets/colaboradores/elisa.jpg?raw=true",
    nome: "Elisa Florência",
    instagram: "https://instagram.com/elisaf.m",
    whatsapp: "https://wa.me/53984790472",
  },
  {
    foto: "https://github.com/Caiorossi00/Brulloween/blob/main/assets/colaboradores/marttina.jpg?raw=true",
    nome: "Marttina Velasques",
    instagram: "https://instagram.com/marttinavelas.q",
    whatsapp: "https://wa.me/54984440067",
  },
  {
    foto: "https://github.com/Caiorossi00/Brulloween/blob/main/assets/colaboradores/patrick.jpg?raw=true",
    nome: "Patrick Martins",
    instagram: "https://instagram.com/patrickb.martins",
    whatsapp: "https://wa.me/5399711254",
  },
  {
    foto: "https://github.com/Caiorossi00/Brulloween/blob/main/assets/colaboradores/sarah.jpg?raw=true",
    nome: "Sarah Lima",
    instagram: "https://instagram.com/sarah_limadacunha",
    whatsapp: "https://wa.me/53984694733",
  },
  {
    foto: "https://github.com/Caiorossi00/Brulloween/blob/main/assets/colaboradores/theo.jpg?raw=true",
    nome: "Theodoro Gallo",
    instagram: "https://instagram.com/theoggallo",
    whatsapp: "https://wa.me/53984735604",
  },
];

function displayColaboradores() {
  const colaboradoresContainer = document.querySelector(".colaboradores");
  colaboradoresContainer.innerHTML = "";

  colaboradores.forEach((colaborador) => {
    const colaboradorHTML = `
      <div class="colaborador">
        <img src="${colaborador.foto}" alt="${colaborador.nome}">
        <h1 class="h1-colaborador">${colaborador.nome}</h1>
        <div class="contatos">
          ${
            colaborador.whatsapp
              ? `<a href="${colaborador.whatsapp}" target="_blank"><i class="fab fa-whatsapp" style="color: #E82809;"></i></a>`
              : ""
          }
          ${
            colaborador.instagram
              ? `<a href="${colaborador.instagram}" target="_blank"><i class="fab fa-instagram" style="color: #E82809;"></i></a>`
              : ""
          }
        </div>
      </div>
    `;

    colaboradoresContainer.innerHTML += colaboradorHTML;
  });
}

displayColaboradores();

AOS.init();

document
  .getElementById("comprar-ingresso")
  .addEventListener("click", function () {
    const phoneNumber = "5391056073";
    const message = "Quero comprar um ingresso para o Brulloween 3.0";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  });

function toggleMenu() {
  document.body.classList.toggle("menu-open");
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("menu-open");
}
