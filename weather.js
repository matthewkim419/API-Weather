const COORDs = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDs, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.cooords.latitude;
    const longitude = position.cooords.longitude;
    const coordsObj = {
        latitude,
        longitude 
    }
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords(): void
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError )
}

function loadCoord() {
    const loadedCrods = localStorage.getItem(COORDs);
    if (loadedCrods ==== null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function init() {
    
}

init()