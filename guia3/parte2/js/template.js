const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", img: "20200824120546.jpg", price: 1500000 },
    { titulo: "Mouse", desc: "Inalámbrico", img: "mouse-gamer-havit-gamenote-ms1029-rgb.jpg", price: 50000 },
    { titulo: "Teclado", desc: "Mecanico", img: "teclado-gamer-fizz-pro-k616-rgb-blanco-gris-switch-red-redragon-tecnomarketink.png", price: 80000 },
    { titulo: "Pantalla", desc: "Oled", img: "f.elconfidencial.com_original_aaa_b46_208_aaab46208d2685d512ccfa146c4f3531.jpg", price: 500000 },
    { titulo: "Audifonos", desc: "Estereos", img: "097855157157-001-750Wx750H.webp", price: 60000 },
];

productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".card-img").src = `img/${p.img}`;
    clon.querySelector(".card-img").alt = p.titulo;
    clon.querySelector(".price").textContent = p.price.toLocaleString("es-CO", { style: "currency", currency: "COP" });
    contenedor.appendChild(clon);
});
