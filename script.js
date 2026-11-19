"https://api.open-meteo.com/v1/forecast?latitude=30.23493&longitude=92.26846" + "&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit";

const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    button.addEventListener("click", getWeather)

   
}