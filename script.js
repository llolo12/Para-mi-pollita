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
  "Te amo mucho ❤️",
  "Danna mi amor 💕",
  "Mi chichosa 🥰",
  "Mi pollita hermosa 💖",
  "Mi lirio 🌸"
];

let lluviaNormal;
let lluviaLirios;

/* CREA ELEMENTOS QUE CAEN DESDE ARRIBA */
function crearElemento(tipo = "normal") {
  const el = document.createElement("div");
  el.classList.add("caer");
  el.style.left = Math.random() * 90 + "vw";
  el.style.top = "-120px"; // 👈 SIEMPRE DESDE ARRIBA

  if (tipo === "lirio") {
    el.textContent = "🌸";
    el.style.fontSize = "30px";
  } else {
    const r = Math.random();
    if (r < 0.4) {
      const img = document.createElement("img");
      img.src = fotos[Math.floor(Math.random() * fotos.length)];
      img.classList.add("foto");
      el.appendChild(img);
    } else if (r < 0.7) {
      el.textContent = mensajes[Math.floor(Math.random() * mensajes.length)];
      el.classList.add("texto");
    } else {
      el.textContent = ["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];
      el.style.fontSize = "26px";
    }
  }

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 12000);
}

/* LLUVIA NORMAL AUTOMÁTICA */
lluviaNormal = setInterval(() => {
  crearElemento("normal");
}, 450);

/* MENSAJE FINAL + LIRIOS */
setTimeout(() => {
  document.getElementById("finalMessage").classList.add("show");
  lluviaLirios = setInterval(() => {
    crearElemento("lirio");
  }, 300);
}, 10000);

/* CERRAR MENSAJE Y DETENER LIRIOS */
document.getElementById("finalMessage").addEventListener("click", () => {
  document.getElementById("finalMessage").classList.remove("show");
  clearInterval(lluviaLirios);
});
