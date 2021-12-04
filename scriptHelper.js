// Write your helper functions here!



require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("pilotName").innerHTML = `Pilot Name: ${pilotName}`;
    document.getElementById("copilotName").innerHTML = `Copilot Name: ${copilotName}`;
    if (fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        // look up visibility and how to use it
        document.getElementById("fuelLevel").innerHTML = `There is not enough fuel for the journey`
        document.getElementById("launchStatus").innerHTML = "<span style='color: red;'>`The shuttle is not ready for launch.`</span>"
    if (cargoMass > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoMass").innerHTML = `There is too much mass for the shuttle to take off`
        document.getElementById("launchStatus").innerHTML = "<span style='color: red;'>`The shuttle is not ready for launch.`</span>"
    }
    else if (cargoMass >= 10000 && fuelLevel >= 10000) {
        document.getElementById("launchStatus").innerHTML = "<span style='color: green;'>`The shuttle is ready for launch.`</span>"
    }
}
}

async function myFetch() {
    let planetsReturned = response.json();

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return Math.floor(Math.random() * planets.length);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
