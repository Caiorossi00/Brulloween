const colaboradores = [
  {
    foto: "../../assets/colaboradores/bruno.jpg",
    nome: "Bruno Gonçalves",
    instagram: "https://instagram.com/gbrunoramos",
    whatsapp: "https://wa.me/53991056073",
  },
  {
    foto: "../../assets/colaboradores/elisa.jpg",
    nome: "Elisa Florência",
    instagram: "https://instagram.com/elisaf.m",
    whatsapp: "https://wa.me/53984790472",
  },
  {
    foto: "../../assets/colaboradores/marttina.jpg",
    nome: "Marttina Velasques",
    instagram: "https://instagram.com/marttinavelas.q",
    whatsapp: "https://wa.me/54984440067",
  },
  {
    foto: "../../assets/colaboradores/patrick.jpg",
    nome: "Patrick Martins",
    instagram: "https://instagram.com/patrickb.martins",
    whatsapp: "https://wa.me/5399711254",
  },
  {
    foto: "../../assets/colaboradores/sarah.jpg",
    nome: "Sarah Lima",
    instagram: "https://instagram.com/sarah_limadacunha",
    whatsapp: "https://wa.me/53984694733",
  },
  {
    foto: "../../assets/colaboradores/theo.jpg",
    nome: "Theodoro Gallo",
    instagram: "https://instagram.com/theoggallo",
    whatsapp: "https://wa.me/53984735604",
  },
  {
    foto: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nome: "Nome Sobrenome",
    instagram: "https://instagram.com/nome",
    whatsapp: "https://wa.me/5544332211",
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
