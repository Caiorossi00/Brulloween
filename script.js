const colaboradores = [
  {
    foto: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nome: "Bruno Gonçalves",
    instagram: "https://instagram.com/bruno",
    whatsapp: "https://wa.me/123456789"
  },
  {
    foto: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nome: "Elisa Florência",
    instagram: "https://instagram.com/elisa",
    whatsapp: "https://wa.me/987654321",
  },
  {
    foto: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nome: "Martina Velasques",
    instagram: "https://instagram.com/martina",
    whatsapp: "https://wa.me/987654321"
  },
  {
    foto: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nome: "Patrick Martins",
    instagram: "https://instagram.com/patrick",
    whatsapp: "https://wa.me/1122334455"
  },
  {
    foto: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nome: "Sarah Lima",
    instagram: "https://instagram.com/sarah",
    whatsapp: "https://wa.me/5566778899"
  },
  {
    foto: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nome: "Theodoro Gallo",
    instagram: "https://instagram.com/theodoro",
    whatsapp: "https://wa.me/9988776655"
  },
  {
    foto: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nome: "Nome Sobrenome",
    instagram: "https://instagram.com/nome",
    whatsapp: "https://wa.me/5544332211"
  }
];


function displayColaboradores() {
  const colaboradoresContainer = document.querySelector('.colaboradores');
  colaboradoresContainer.innerHTML = "";

  colaboradores.forEach(colaborador => {
    const colaboradorHTML = `
      <div class="colaborador">
        <img src="${colaborador.foto}" alt="${colaborador.nome}">
        <h1>${colaborador.nome}</h1>
        <div class="contatos">
          ${colaborador.whatsapp ? `<a href="${colaborador.whatsapp}" target="_blank"><i class="fab fa-whatsapp" style="color: #E82809;"></i></a>` : ""}
          ${colaborador.instagram ? `<a href="${colaborador.instagram}" target="_blank"><i class="fab fa-instagram" style="color: #E82809;"></i></a>` : ""}
        </div>
      </div>
    `;

    colaboradoresContainer.innerHTML += colaboradorHTML;
  });
}

displayColaboradores();


