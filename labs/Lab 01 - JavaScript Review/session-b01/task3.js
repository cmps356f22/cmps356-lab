document.addEventListener("DOMContentLoaded",  async() => {
  document.querySelector("#refresh").addEventListener("click", refreshWeather);
  await refreshWeather();
});

async function refreshWeather() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=25.38&longitude=51.49&current_weather=true")
  const data = await response.json();

  const temperature = data.current_weather.temperature;
  const windspeed = data.current_weather.windspeed;

  const weather = document.querySelector("#weather");
  weather.innerHTML = `
  <table>
    <thead>
      <tr><th>Temperature</th><th>Wind Speed</th>
    </thead>
    <tbody>
      <tr><td>${temperature}</td><td>${windspeed}</td>
    </tbody>
  </table>`;
}
