// Write your helper functions here!

const { ConsoleReporter } = require('jasmine');



require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let userInput = document.getElementById("missionTarget");
    userInput.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${pickPlanet.name}</li>
                    <li>Diameter: ${pickPlanet.diameter} </li>
                    <li>Star: ${pickPlanet.star}</li>
                    <li>Distance from Earth: ${pickPlanet.distance}</li>
                    <li>Number of Moons: ${pickPlanet.moons}</li>
                </ol>
                <img src="${pickPlanet.imageUrl}">
`
}

function validateInput(testInput) {
    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel === null || cargoMass === null) {
           alert("Field is empty");
        }
         if (!isNaN(pilotName)|| !isNaN(copilotName)) {
            alert("Is a number")
        } if (isNaN(cargoMass) || isNaN(fuelLevel)) {
            alert("Not a number");
        }
           event.preventDefault();
});
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    document.getElementById("pilotName").innerHTML = `Pilot Name: ${pilotName}`;
    document.getElementById("copilotName").innerHTML = `Copilot Name: ${copilotName}`;
    if (fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        // look up visibility and how to use it
        document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey`
        document.getElementById("launchStatus").innerHTML = "<span style='color: red;'>`The shuttle is not ready for launch.`</span>"
    } else if (cargoMass > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off`
        document.getElementById("launchStatus").innerHTML = "<span style='color: red;'>`The shuttle is not ready for launch.`</span>"
    }
    else {
        document.getElementById("launchStatus").innerHTML = "<span style='color: green;'>`The shuttle is ready for launch.`</span>"
        document.getElementById("faultyItems").innerHTML = "hidden";
    };
};

async function myFetch() {

    let planetsReturned = fetch("https://handlers.education.launchcode.org/static/planets.json").then (function(response) {
        console.log(response);
        });

    return planetsReturned;
}

function pickPlanet() {
    return Math.floor(Math.random(planetsReturned) * planetsReturned.length);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
