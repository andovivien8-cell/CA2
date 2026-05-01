const planets = document.querySelectorAll(".planet");

planets.forEach(planet => {

    planet.addEventListener("click", () => {

        document.getElementById("planet-name").textContent =
            planet.dataset.name;

        document.getElementById("planet-size").textContent =
            planet.dataset.size;

        document.getElementById("planet-distance").textContent =
            planet.dataset.distance;

        document.getElementById("planet-temp").textContent =
            planet.dataset.temp;

    });

});