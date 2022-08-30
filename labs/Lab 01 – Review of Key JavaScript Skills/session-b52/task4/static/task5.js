document.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.getItem("countries")) {
    const response = await fetch("/api");
    const data = await response.json();

    localStorage.setItem("countries", JSON.stringify(data));
  }

  // countries exists in local storage
  const data = JSON.parse(localStorage.getItem("countries"));

  const countries = document.querySelector("#countries");
  const representation = `<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
      ${data
      .sort((a, b) => a.name > b.name)
      .map(country => `
      <tr>
        <td>${country.name}</td>
        <td>${country.code}</td>
      </tr>`)
      .join("")
      }
    </tbody>
  </table>
  `;

  countries.innerHTML = representation;
});
