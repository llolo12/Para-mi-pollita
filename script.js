const corazon = document.getElementById("corazon");
const btnCarta = document.getElementById("btnCarta");
const carta = document.getElementById("carta");
const contador = document.getElementById("contador");

/* CONTADOR */
const inicio = new Date("2024-10-01");
setInterval(() => {
    const hoy = new Date();
    const dias = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
    contador.innerText = `Juntos desde hace ${dias} días 💕`;
}, 1000);

/* LLUVIA AUTOMÁTICA */
setInterval(() => {
    crearCorazon();
}, 400);

corazon.addEventListener("click", () => {
    for (let i = 0; i < 6; i++) crearCorazon();
});

/* CORAZONES */
function crearCorazon() {
    const c = document.createElement("div");
    c.classList.add("caer");
    c.innerText = "💗";
    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.fontSize = "24px";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
}

/* CARTA */
btnCarta.onclick = () => carta.style.display = "block";
function cerrarCarta() {
    carta.style.display = "none";
}
