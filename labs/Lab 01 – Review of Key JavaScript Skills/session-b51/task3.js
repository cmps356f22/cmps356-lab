document.addEventListener("DOMContentLoaded", async () => {
  // await updateWeather();

  document.querySelector("#update").addEventListener("click", async () => {
    await updateWeather();
  });
});

async function updateWeather() {
  // fetch weather
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=25.37&longitude=51.49&hourly=temperature_2m,relativehumidity_2m&current_weather=true');
  const data = await response.json();

  const temperature = data.current_weather.temperature;
  const windSpeed = data.current_weather.windspeed;

  // display to end-user
  document.querySelector("#weather").innerHTML = `<table>
    <thead>
      <tr>
        <th>Temperature</th>
        <th>Wind Speed</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${temperature}°C</td>
        <td>${windSpeed}</td>
      </tr>
    </tbody>`;
}
