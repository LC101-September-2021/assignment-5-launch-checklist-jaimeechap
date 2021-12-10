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
//    document.getElementById("pilotName").innerHTML = `Pilot Name: ${pilot}`;
//    document.getElementById("copilotName").innerHTML = `Copilot Name: ${copilot}`;
   let userStrings = [pilot, copilot];
   let userNumbers = [fuelLevel, cargoMass];

    // for (let value of userStrings) {
    //     if (validateInput(value) === "Empty" || validateInput(value) === "Is a number") {
    // } alert ("Invalid submission");
    // }; 

    // for (let value of userNumbers) {
    //     if (validateInput(value) === "Empty" || validateInput(value) === "Not a number"){
    // } alert ("Invalid submission");
    // };
//    for (let value of userStrings) {
//        let validateStrings = validateInput(value);
//        while (validateStrings === "" || validateStrings !isNaN(value)
//    }
    for (let value of userStrings) {
    validateInput(value);
        if ("" || !isNaN(value)) {
        alert("Invalid submission")
        }
    }

    for (let value of userNumbers) {
        validateInput(value);
        if ("" || isNaN(value)) {
            alert("Invalid submission")
        }
    }

//     for (let value of userNumbers) {
//         validateInput(value);
//         while ("" || isNaN(value)) {
//             alert("Invalid submission")
//     };
//     };
//    for (let value of userStrings) {
//     validateInput(value);
//     if ("" || !isNaN(value)) {
//         alert("Invalid submission")
//     }
//     }

//     for (let value of userNumbers) {
//         validateInput(value);
//         if ("" || isNaN(value)) {
//             alert("Invalid submission")
//         }
//     }
//     }
//     for (let value of userStrings) {
//         validateInput(value);
//      while (undefined || !isNaN(value)) {
//        alert("Invalid submission")
//     } 

//    for (let value of userNumbers) {
//     validateInput(value);
//         while (null || isNaN(value)) {
//        alert("Invalid submission")
//         }
//    }
    //    } 
    //    }
    //     for (let value of userStrings) {
    //       let validateStringStatus = validateInput(value);
    //        if (validateStringStatus === " " || validateStringStatus === !isNaN(value)) {
    //            alert("Invalid submission")
    //         } else {
    //             validateStringStatus === true;
           
    //    };
//    for (let value of userNumbers) {
//        let validateNumberStatus = validateInput(value);
//        if (validateNumberStatus === "" ||validateNumberStatus === isNaN(value)) {
//            alert("Invalid submission");
//        } else {
//         validateNumberStatus === true;
      
//    };

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

   document.getElementById("pilotStatus").innerHTML =`${pilot.value}`;
   document.getElementById("copilotStatus").innerHTML =`${copilot.value}`;
   document.getElementById("fuelStatus").innerHTML =`${fuelLevel.value}`;
   document.getElementById("cargoStatus").innerHTML =`${cargoMass.value}`;

//    return form
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
 
