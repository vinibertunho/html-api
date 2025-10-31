const API = "https://jsonplaceholder.typicode.com/users";

const lista = document.getElementById("listaUsuarios");
const detalhes = document.getElementById("detalhes");
const inputBuscar = document.getElementById("inputBuscar");
const btnBuscar = document.getElementById("btnBuscar");
const btnReset = document.getElementById("btnReset");
const btnVoltar = document.getElementById("voltar");

let usuario = []; // Array que vai guardar os usuários da API

async function carregarUsuarios() {
  try {
    const resposta = await fetch(API);
    usuario = await resposta.json(); // Preenche o array global
    exibirUsuarios(usuario); // Exibe os usuários na tela
  } catch (error) {
    console.error("Erro ao carregar usuários:", error);
  }
}

carregarUsuarios();

function exibirUsuarios(array) {
  lista.innerHTML = "";
  array.forEach((u) => {
    const div = document.createElement("div");
    div.textContent = u.name;
    div.className = "usuario";
    div.onclick = () => exibirDetalhes(u);
    lista.appendChild(div);
  });
  lista.style.display = "block";
  btnBuscar.style.display = "inline-block";
  btnReset.style.display = "inline-block";
  btnVoltar.style.display = "none";
}

btnBuscar.onclick = () => {
  const termo = inputBuscar.value.toLowerCase();
  const filtrados = usuario.filter((u) => u.name.toLowerCase().includes(termo));
  exibirUsuarios(filtrados);
};

btnReset.onclick = () => {
  inputBuscar.value = "";
  exibirUsuarios(usuario);
};

function exibirDetalhes(u) {
  detalhes.innerHTML = `
    <h2>Detalhes do Usuário</h2>
    <p><strong>Nome:</strong> ${u.name}</p>
    <p><strong>Username:</strong> ${u.username}</p>
    <p><strong>Email:</strong> ${u.email}</p>
    <p><strong>Telefone:</strong> ${u.phone}</p>
    <p><strong>Website:</strong> ${u.website}</p>
    <p><strong>Empresa:</strong> ${u.company.name}</p>
    <p><strong>Endereço:</strong> ${u.address.suite}, ${u.address.street}, ${u.address.city}, ${u.address.zipcode}</p>
    `;
  lista.style.display = "none";
  btnBuscar.style.display = "none";
  btnReset.style.display = "none";
  btnVoltar.style.display = "inline-block";
}

btnVoltar.onclick = voltarLista;

function voltarLista() {
  detalhes.innerHTML = "";
  lista.style.display = "block";
  btnBuscar.style.display = "inline-block";
  btnReset.style.display = "inline-block";
  btnVoltar.style.display = "none";
}
