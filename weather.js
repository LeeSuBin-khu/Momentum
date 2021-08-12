const API_KEY = "270ee2332212a04e4c7bc7c1648aaf33";

function onGeo(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
    const name = data.name;
    const weather = data.weather[0].main;
    const Weather = document.querySelector("#weather span:first-child");
    const City = document.querySelector("#weather span:last-child");
    
    Weather.innerText = weather;
    City.innerText = name;

    });
}

navigator.geolocation.getCurrentPosition(onGeo);