
const url = 
  `https://api.open-meteo.com/v1/forecast?latitude=30.23&longitude=-92.26&current=temperature_2m,wind_speed_10m,precipitation,weather_code&temperature_unit=fahrenheit&timezone=auto`
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
  weatherArea.textContent = "";
  weatherArea.className = "Card bg-dark text-light shadow-sm p-4 w-50 m-auto";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const icon = document.createElement("p");
    icon.className = "fs-4";
    icon.textContent = getIcon(data.current.weather_code);
    weatherArea.appendChild(icon);
    // Temp
    const temp = document.createElement("p");
    temp.className = "fs-4";
    temp.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
    
    weatherArea.appendChild(temp);

    // Wind Speed
    const wind = document.createElement("p");
    wind.className = "fs-4";
    wind.textContent = "Wind Speed: " + data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m;

    weatherArea.appendChild(wind);

    //Time

    const time = document.createElement("p");
    time.className = "fs-4";
    
    const formattedTime = new Date(data.current.time).toLocaleString([],{
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });

    time.textContent = "Time: " + formattedTime;
    weatherArea.appendChild(time);
    
    // Precipitation
    const precipitation = document.createElement("p");
    precipitation.className = "fs-4";
    precipitation.textContent = "Precipitation: " + data.current.precipitation;

    weatherArea.appendChild(precipitation);
}

    button.addEventListener("click", getWeather)

    function getIcon(code) {
      if (code === 0) return "☀️ Clear";
      if (code <= 2) return "🌤️ Partly Cloudy";
      if (code === 3) return "☁️ Coudy";
      if (code <= 48) return "🌫️ Fog";
      if (code <= 57) return "🌦️ Drizzle";
      if (code <= 67) return "🌧️ Rain";
      if (code <= 77) return "❄️ Snow";
      return "⛈️ Thunderstorm";
      
    }


 
