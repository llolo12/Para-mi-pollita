/* ===============================
   CONTADOR (NO TOCAR)
================================ */
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

/* ===============================
   CORAZÓN + GIF + LLUVIA
================================ */
const corazon = document.getElementById("corazon");
const gif = document.getElementById("gifAmor");

const gifURL = "https://media.tenor.com/7Yq0f6z5pVMAAAAC/love-heart.gif";

corazon.addEventListener("click", () => {

    /* MOSTRAR GIF */
    gif.src = gifURL;
    gif.style.display = "block";
    gif.style.margin = "15px auto";
    gif.style.width = "120px";

    setTimeout(() => {
        gif.style.display = "none";
    }, 5000);

    /* LLUVIA */
    for (let i = 0; i < 8; i++) {
        setTimeout(crearLluvia, i * 400);
    }
});

function crearLluvia() {
    const elemento = document.createElement("div");
    elemento.textContent = Math.random() > 0.5 ? "❤️" : "Te amo 💕";

    elemento.style.position = "fixed";
    elemento.style.left = Math.random() * 90 + "vw";
    elemento.style.top = "-30px";
    elemento.style.fontSize = "20px";
    elemento.style.animation = "caer 6s linear forwards";
    elemento.style.zIndex = "999";

    document.body.appendChild(elemento);

    setTimeout(() => {
        elemento.remove();
    }, 6000);
}
