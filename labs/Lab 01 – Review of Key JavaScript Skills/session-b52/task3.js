document.addEventListener("DOMContentLoaded", async () => {
  await refreshWeather();
  document.querySelector("#refresh").addEventListener("click", refreshWeather);
});

async function refreshWeather() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=25.37&longitude=51.49&hourly=temperature_2m&current_weather=true");
  const data = await response.json();

  const temperature = data.current_weather.temperature;
  const windspeed = data.current_weather.windspeed;

  const weather = document.querySelector("#weather");
  const representation = `
    <table>
      <thead>
        <tr>
          <th>Temperature</th>
          <th>Windspeed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${temperature}</td>
          <td>${windspeed}</td>
        </tr>
      </tbody>
    </table>
  `;
  weather.innerHTML = representation;
}
