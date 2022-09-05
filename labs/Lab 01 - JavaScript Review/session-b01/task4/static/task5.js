document.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.getItem("countries")) {
    // fetch countries
    const response = await fetch("/api")
    const data = await response.json();
    data.sort((a, b) => a.code > b.code);

    localStorage.setItem("countries", JSON.stringify(data));
  }

  // countries are stored in local storage by now
  const data = JSON.parse(localStorage.getItem("countries"));

  // display to the end-user
  const countries = document.querySelector("#countries");
  let representation = `
  <table>
    <thead>
      <tr><th>Name</th><th>Code</th></tr>
    </thead>
    <tbody>
  `;

  representation += data.map(country => `<tr>
    <td>${country.name}</td>
    <td>${country.code}</td>
  </tr>`).join("");

  representation += `</tbody></table>`;

  countries.innerHTML = representation;
});
