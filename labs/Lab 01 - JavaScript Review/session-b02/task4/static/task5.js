document.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.getItem("countries")) {
    const response = await fetch("/api");
    const data = await response.json();

    localStorage.setItem("countries", JSON.stringify(data));
  }

  // countries are stored in local storage by now
  const data = JSON.parse(localStorage.getItem("countries"));

  const weather = document.querySelector("#countries");
  weather.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
    ${
      data
        .sort((a, b) => a.code > b.code)
        .map(country => `<tr><td>${country.name}</td><td>${country.code}</td></tr>`)
        .join('')
    }
    </tbody>
  </table>
  `;
});
