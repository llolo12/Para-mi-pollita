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

// CONTADOR
const inicio = new Date("2024-10-01");
const hoy = new Date();
const dias = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
document.getElementById("contador").innerText =
  `Juntos desde hace ${dias} días 💖`;

// LLUVIA AUTOMÁTICA (spam rápido / caída lenta)
setInterval(() => {
  for (let i = 0; i < 3; i++) crearCorazon();
  crearFoto();
  crearTexto();
}, 600);

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
  f.src = fotos[Math.floor(Math.random()*fotos.length)];
  f.className = "caer foto";
  f.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 6000);
}

function crearTexto() {
  const t = document.createElement("div");
  t.className = "caer texto";
  t.innerText = mensajes[Math.floor(Math.random()*mensajes.length)];
  t.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 6000);
}

// SPARKLES
setInterval(() => {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.innerText = "✨";
  s.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 4000);
}, 1500);

// CARTA
document.getElementById("btnCarta").onclick = () =>
  document.getElementById("carta").style.display = "block";

document.getElementById("cerrarCarta").onclick = () =>
  document.getElementById("carta").style.display = "none";

// MENSAJE FINAL + LIRIOS
setTimeout(() => {
  document.getElementById("mensajeFinal").style.display = "flex";
  for (let i = 0; i < 20; i++) {
    const l = document.createElement("div");
    l.className = "caer";
    l.innerText = "🌸";
    l.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(l);
    setTimeout(() => l.remove(), 6000);
  }
}, 10000);
