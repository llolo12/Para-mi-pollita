/* FECHA DE INICIO: 1 OCTUBRE 2025 */
const fechaInicio = new Date(2025, 9, 1, 0, 0, 0);

/* CONTADOR CONTINUO */
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

/* CARTA */
const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");
const contenidoCarta = document.getElementById("contenidoCarta");

btnAbrir.addEventListener("click", () => {
    contenidoCarta.classList.remove("cerrada");
});

btnCerrar.addEventListener("click", () => {
    contenidoCarta.classList.add("cerrada");
});

/* GIF + LLUVIA */
const corazon = document.getElementById("corazon");
const gifAmor = document.getElementById("gifAmor");

/* GIF estilo "mm" (funcional) */
const gifURL = "https://media.tenor.com/7Yq0f6z5pVMAAAAC/love-heart.gif";

corazon.addEventListener("click", () => {
    gifAmor.src = gifURL;
    gifAmor.style.display = "block";

    setTimeout(() => {
        gifAmor.style.display = "none";
    }, 5000);
});
