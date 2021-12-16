window.addEventListener("load", function() {
    let form = document.querySelector("form");
    // let list = document.querySelector("faultyItems");
    // document.getElementById("faultyItems").hidden = true;
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let list = document.querySelector("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        // document.getElementById("faultyItems").style.visibility = "hidden";
        // let list = document.querySelector("faultyItems").hidden = true;
        // document.getElementById("faultyItems").hidden = true;
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);

        // event.preventDefault();
 // need to work on list and document, it comes from


    });
    let listedPlanets;
    let listedPlanetsResponse= myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetPicked = pickPlanet(listedPlanets);
  
        // will call function and assign it to planetPicked
        this.addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
  
    });
 });
 