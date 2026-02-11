/* ===== CONTADOR ===== */
const fechaInicio = new Date(2025, 9, 1, 0, 0, 0);

function actualizarContador() {
    const ahora = new Date();
    let diff = ahora - fechaInicio;

    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const diasTotales = Math.floor(diff / (1000 * 60 * 60 * 24));
    const meses = Math.floor(diasTotales / 30);
    const dias = diasTotales % 30;

    document.getElementById("contador").textContent =
        `Juntos hace ${meses} meses, ${dias} días, ${horas}h ${minutos}m ${segundos}s ❤️`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

/* ===== CORAZÓN ===== */
const corazon = document.getElementById("corazon");
const gif = document.getElementById("gifAmor");

const gifURL = "https://media.tenor.com/7Yq0f6z5pVMAAAAC/love-heart.gif";

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
  "Imagenes/11.jpeg"
];


const mensajes = [
  "Te amo ❤️",
  "Mi pollita hermosa 💖",
  "Siempre contigo 💕",
  "Mi amor eterno 🌸"
];

corazon.addEventListener("click", () => {

    /* GIF */
    gif.src = gifURL;
    gif.style.display = "block";
    setTimeout(() => gif.style.display = "none", 5000);

    /* CORAZONES */
    for (let i = 0; i < 5; i++) setTimeout(crearCorazon, i * 300);

    /* FRASES */
    for (let i = 0; i < 4; i++) setTimeout(crearTexto, i * 500);

    /* FOTOS */
    for (let i = 0; i < 3; i++) setTimeout(crearFoto, i * 700);
});

/* ===== LLUVIA ===== */
function crearCorazon() {
    crearElemento("❤️", "26px");
}

function crearTexto() {
    const t = document.createElement("div");
    t.className = "caer texto";
    t.textContent = mensajes[Math.floor(Math.random() * mensajes.length)];
    t.style.left = Math.random() * 80 + "vw";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 6000);
}

function crearFoto() {
    const f = document.createElement("img");
    f.src = fotos[Math.floor(Math.random() * fotos.length)];
    f.className = "caer foto";
    f.style.left = Math.random() * 80 + "vw";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 6000);
}

function crearElemento(texto, size) {
    const e = document.createElement("div");
    e.className = "caer";
    e.textContent = texto;
    e.style.fontSize = size;
    e.style.left = Math.random() * 90 + "vw";
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 6000);
}

/* ===== CARTA ===== */
document.getElementById("btnAbrir").onclick = () =>
    document.getElementById("contenidoCarta").classList.remove("cerrada");

document.getElementById("btnCerrar").onclick = () =>
    document.getElementById("contenidoCarta").classList.add("cerrada");

