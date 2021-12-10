window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let list = document.querySelector("faultyItems");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        formSubmission(document, pilot, copilot, fuelLevel, cargoMass);
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
        this.addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.imageUrl);
  
    });
 });
 