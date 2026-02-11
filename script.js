const corazon = document.getElementById("corazon");

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

/* CLICK EN EL CORAZÓN */
corazon.addEventListener("click", () => {

  /* corazones */
  for (let i = 0; i < 6; i++) {
    setTimeout(crearCorazon, i * 200);
  }

  /* mensajes */
  for (let i = 0; i < 3; i++) {
    setTimeout(crearTexto, i * 400);
  }

  /* fotos */
  for (let i = 0; i < 2; i++) {
    setTimeout(crearFoto, i * 600);
  }

  /* lirios */
  for (let i = 0; i < 4; i++) {
    setTimeout(crearLirio, i * 300);
  }
});

/* FUNCIONES */

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
/* ===== CONTADOR DE DÍAS JUNTOS ===== */
const contador = document.getElementById("contador");

const inicio = new Date("2025-10-01"); // 1 de octubre de 2025

function actualizarContador() {
  const hoy = new Date();
  const diferencia = hoy - inicio;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  contador.innerText = `Juntos desde hace ${dias} días ❤️`;
}

actualizarContador();

