document.addEventListener("DOMContentLoaded", async () => {
  await loadCountries();
});

async function loadCountries() {
  if (!localStorage.getItem('countries')) {
    // fetch countries
    const response = await fetch('/api');
    const data = await response.json();

    localStorage.setItem('countries', JSON.stringify(data));
  }

  const countries = JSON.parse(localStorage.getItem(countries));
  console.log(countries);

//   // display to end-user
//   document.querySelector("#countries").innerHTML =
//   html = `<table>
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Code</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>${country.name}</td>
//         <td>${country.code}</td>
//       </tr>
//     </tbody>`;
}
