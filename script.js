/*
const hb = document.querySelector("header");
hb.style.background = "linear-gradient(180deg, #ff3038 0%, #d63a3a 80%, #0a0c0e 100%)";
*/
const mnbc = document.getElementById("main-nav");
mnbc.style.background = "linear-gradient(225deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%";

const helpicon = document.getElementById("help");
const helppanel = document.getElementById("helpdesk");
helpicon.addEventListener("click", () => {helppanel.classList.toggle("active")});

const f = document.querySelector("figure");
const mi = document.getElementById("maininfo");
f.addEventListener("click", () => {mi.classList.toggle("active")});

const cars = document.querySelectorAll(".car");
const carpanel = document.getElementById("car-panel")

const panelimage = document.getElementById("carimage");
const panelname = document.getElementById("carname");
const panelpower = document.getElementById("carpower");
const panelengine = document.getElementById("carengine");
const panelprice = document.getElementById("carprice");
const dimmer = document.getElementById("underlay");

cars.forEach(car => {
    car.addEventListener("click", (event) => {
        event.stopPropagation();
        panelimage.src = car.dataset.image;
        panelname.textContent = car.dataset.name;
        panelpower.textContent = car.dataset.power;
        panelengine.textContent = car.dataset.engine;
        panelprice.textContent = car.dataset.price;

        carpanel.classList.add("active");
        dimmer.classList.add("active");
    });
});

document.addEventListener("click", (event) => {
    if (
        carpanel.classList.contains("active") &&
        !carpanel.contains(event.target)
    ) {
        carpanel.classList.remove("active")
        dimmer.classList.remove("active")
    }
});