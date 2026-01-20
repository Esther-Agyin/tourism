// HERO SLIDER
const images = ["images/h1.jpg", "images/h2.jpg", "images/h3.jpg"];
let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("heroImage").src = images[index];
}, 4000);

// SCROLL BUTTON
function scrollToSection() {
    document.getElementById("featured").scrollIntoView({ behavior: "smooth" });
}

// DESTINATIONS DATA
const destinations = [
    { name: "L'Estartit, Spain", image: "images/card4.jpg" },
    { name: "Colosseum, Piazza del Colosseo, Rome", image: "images/rome.jpg" },
    { name: "Étretat, France", image: "images/france.jpg" }
];

// LOAD DESTINATIONS
const container = document.getElementById("destinationCards");

destinations.forEach(place => {
    container.innerHTML += `
        <div class="card">
            <img src="${place.image}">
            <h3>${place.name}</h3>
        </div>
    `;
});




