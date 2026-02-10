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
    "Imagenes/9.jpeg" ,
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

corazon.addEventListener("click", () => {
    for (let i = 0; i < 8; i++) crearCorazon();
    for (let i = 0; i < 3; i++) crearFoto();
    for (let i = 0; i < 2; i++) crearTexto();
});

function crearCorazon() {
    const c = document.createElement("div");
    c.classList.add("caer");
    c.innerHTML = ["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];
    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.top = "200px";
    c.style.fontSize = "28px";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3500);
}

function crearFoto() {
    const f = document.createElement("img");
    f.src = fotos[Math.floor(Math.random()*fotos.length)];
    f.classList.add("caer","foto");
    f.style.left = Math.random() * window.innerWidth + "px";
    f.style.top = "220px";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 3500);
}

function crearTexto() {
    const t = document.createElement("div");
    t.classList.add("caer","texto");
    t.innerText = mensajes[Math.floor(Math.random()*mensajes.length)];
    t.style.left = Math.random() * window.innerWidth + "px";
    t.style.top = "240px";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3500);
}
