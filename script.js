const mnbc = document.getElementById("main-nav");
mnbc.style.background = "linear-gradient(225deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%";

const helpicon = document.getElementById("help");
const helppanel = document.getElementById("helpdesk");
helpicon.addEventListener("click", () => {helppanel.classList.toggle("active")});

const f = document.querySelector("figure");
const mi = document.getElementById("car-panel");
f.addEventListener("click", () => {mi.classList.toggle("active")});

const cars = document.querySelectorAll(".vehicle");
const carpanel = document.getElementById("car-panel")

const panelimage = document.getElementById("carimage");
const panelprice = document.getElementById("carprice");
const panelname = document.getElementById("carname");
const panelpower = document.getElementById("carpower");
const panelengine = document.getElementById("carengine");
const panelseats = document.getElementById("carseats");
const panelts = document.getElementById("cartopspeed");
const paneldt = document.getElementById("cardrivetrain");
const panelaccel = document.getElementById("caraccel");
const paneltrans = document.getElementById("cartransmission");
const dimmer = document.getElementById("underlay");

cars.forEach(car => {
    car.addEventListener("click", (event) => {
        event.stopPropagation();
        panelimage.src = car.dataset.image;
        panelprice.textContent = car.dataset.price;
        panelname.textContent = car.dataset.name;
        panelpower.textContent = `Measured Power: ${car.dataset.power}`;
        panelengine.textContent = car.dataset.engine;
        paneltrans.textContent = car.dataset.trans;
        panelseats.textContent = `Seating Arrangement: ${car.dataset.seats}`;
        panelts.textContent = `Top Speed: ${car.dataset.ts}`;
        paneldt.textContent = `Drivetrain: ${car.dataset.dt}`;
        panelaccel.textContent = `0-62mph/100kmph: ${car.dataset.accel}`;

        carpanel.classList.add("active");
        dimmer.classList.add("active");
        helppanel.classList.remove("active");
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

const filterButtons = document.querySelectorAll("[data-filter]");
const vehicles = document.querySelectorAll(".vehicle");
vehicles.forEach(vehicle => {
    vehicle.classList.add("active");
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        vehicles.forEach(vehicle => {
            if(filter==="all"|| vehicle.classList.contains(filter)){
                vehicle.classList.add("active");
            } else {
                vehicle.classList.remove("active");
            }
        });
    });
});
