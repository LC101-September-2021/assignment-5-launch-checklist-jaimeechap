const { ConsoleReporter } = require('jasmine');
 
 
require('isomorphic-fetch');
 
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let userInput = document.getElementById("missionTarget");
   userInput.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter} </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src="${imageUrl}">
`
};
 
function validateInput(testInput) {
   // let form = document.getElementById("launchForm");
   // form.addEventListener("formSubmit", function(event) {
   //     let pilotName = document.querySelector("input[name=pilotName]");
   //     let copilotName = document.querySelector("input[name=copilotName]");
   //     let fuelLevel = document.querySelector("input[name=fuelLevel]");
   //     let cargoMass = document.querySelector("input[name=cargoMass]");
       if (testInput === "") {
          return "Empty";
       }
        if (!isNaN(testInput)) {
           return "Is a number"
       } else {
           return "Not a number";
       }
};
 
function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
   document.getElementById("pilotName").innerHTML = `Pilot Name: ${pilot}`;
   document.getElementById("copilotName").innerHTML = `Copilot Name: ${copilot}`;
   let userStrings = [pilot, copilot];
   let userNumbers = [fuelLevel, cargoMass];
   for (let value of userStrings) {
       validateInput(value);
       if (" " || !isNaN(value)) {
           alert("Invalid submission")
       };
   };
   for (let value of userNumbers) {
       validateInput(value);
       if ("" || isNaN(value)) {
           alert("Invalid submission");
       };
   };
 
   if (fuelLevel < 10000) {
       document.getElementById("faultyItems").style.visibility = "visible";
       document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey`
       document.getElementById("launchStatus").innerHTML = "<span style='color: red;'>`The shuttle is not ready for launch.`</span>"
   } else if (cargoMass > 10000) {
       document.getElementById("faultyItems").style.visibility = "visible";
       document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off`
       document.getElementById("launchStatus").innerHTML = "<span style='color: red;'>`The shuttle is not ready for launch.`</span>"
   } else {
       document.getElementById("launchStatus").innerHTML = "<span style='color: green;'>`The shuttle is ready for launch.`</span>"
       document.getElementById("faultyItems").innerHTML = "hidden";
   };
};
 
async function myFetch() {
   let planetsReturned = fetch("https://handlers.education.launchcode.org/static/planets.json").then (function(response) {
       return response.json();
       });
 
   return planetsReturned;
};
 
function pickPlanet(planets) {
   return planets[Math.floor(Math.random() * planets.length)];
};
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
 
