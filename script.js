const corazon = document.getElementById("corazon");
const gifAmor = document.getElementById("gifAmor");

/* GIF DE TENOR */
const gifURL = "https://media.tenor.com/9x7aSM2Vn7gAAAAC/love-mm.gif";

/* IMÁGENES */
const fotos = [
  "Imagenes/1.jpeg",
  "Imagenes/2.jpeg",
  "Imagenes/3.jpeg",
  "Imagenes/4.jpeg",
  "Imagenes/5.jpeg",
  "Imagenes/6.jpeg",
  "Imagenes/7.jpeg",
  "Imagenes/8.jpeg",
  "Imagenes/9.jpeg",
  "Imagenes/10.jpeg",
  "Imagenes/11.jpeg",
];

const mensajes = [
  "Te amo mucho ❤️",
  "Danna mi amor 💕",
  "Mi chichosa 🥰",
  "Mi pollita hermosa 💖",
  "Mi lirio 🌸"
];

/* CLICK EN CORAZÓN */
corazon.addEventListener("click", () => {

  gifAmor.src = gifURL;
  gifAmor.style.display = "block";

  setTimeout(() => {
    gifAmor.style.display = "none";
  }, 5000);

  for (let i = 0; i < 6; i++) setTimeout(crearCorazon, i * 200);
  for (let i = 0; i < 3; i++) setTimeout(crearTexto, i * 400);
  for (let i = 0; i < 2; i++) setTimeout(crearFoto, i * 600);
  for (let i = 0; i < 4; i++) setTimeout(crearLirio, i * 300);
});

/* EFECTOS */
function crearCorazon() {
  const c = document.createElement("div");
  c.className = "caer";
  c.innerText = ["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];
  c.style.left = Math.random() * window.innerWidth + "px";
  c.style.fontSize = "26px";
  document.body.appendChild(c);
  setTimeout(() => c.remove(), 6000);
}

function crearFoto() {
  const f = document.createElement("img");
  f.src = fotos[Math.floor(Math.random() * fotos.length)];
  f.className = "caer foto";
  f.style.left = Math.random() * (window.innerWidth - 80) + "px";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 6000);
}

function crearTexto() {
  const t = document.createElement("div");
  t.className = "caer texto";
  t.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
  t.style.left = Math.random() * (window.innerWidth - 120) + "px";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 6000);
}

function crearLirio() {
  const l = document.createElement("div");
  l.className = "caer";
  l.innerText = "🌸";
  l.style.left = Math.random() * window.innerWidth + "px";
  l.style.fontSize = "24px";
  document.body.appendChild(l);
  setTimeout(() => l.remove(), 6000);
}

/* CONTADOR CONTINUO */
const contador = document.getElementById("contador");
const inicio = new Date(2025, 9, 1, 0, 0, 0);

function actualizarContador() {
  const ahora = new Date();
  let diff = Math.floor((ahora - inicio) / 1000);

  const segundos = diff % 60;
  diff = Math.floor(diff / 60);

  const minutos = diff % 60;
  diff = Math.floor(diff / 60);

  const horas = diff % 24;
  diff = Math.floor(diff / 24);

  const dias = diff % 30;
  const meses = Math.floor(diff / 30);

  contador.innerHTML = `
    Juntos desde ❤️<br>
    ${meses} meses ${dias} días<br>
    ${horas}h ${minutos}m ${segundos}s
  `;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/* CARTA */
const btnCarta = document.getElementById("btnCarta");
const carta = document.getElementById("carta");
const cerrarCarta = document.getElementById("cerrarCarta");

carta.style.display = "none";

btnCarta.addEventListener("click", () => {
  carta.style.display = "block";
});

cerrarCarta.addEventListener("click", () => {
  carta.style.display = "none";
});
