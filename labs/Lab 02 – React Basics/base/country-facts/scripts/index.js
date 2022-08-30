document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded 2");
    console.log(document.querySelector(".container"));

    const regionElement = document.querySelector("#region");
    const countryElement = document.querySelector("#country");
    const factsElement = document.querySelector("#facts-area");

    regionElement.addEventListener("change", getCountries);
    countryElement.addEventListener("change", getFacts);
});

// console.log("Loaded 1");
// console.log(document.querySelector(".container"));

async function getCountries() {
    const region = document.querySelector("#region").value;

    const url = `https://restcountries.com/v3.1/region/${region}`;
    startLoadProgress();
    setTimeout(endLoadProgress, 3000);

    const response = await fetch(url);

    // check the response status
    // if (response.status === 200) { }
    // assuming the request succeeds

    const data = await response.json();

    const countries = data.map(country => country.name.common).sort();

    const countriesHTML = countries.map(country => `<option value="${country}">${country}</option>`).join();
    const countryElement = document.querySelector("#country");
    countryElement.innerHTML = countriesHTML;
    await getFacts();
}

async function getFacts() {
    const country = document.querySelector("#country").value;

    const url = `https://restcountries.com/v3.1/name/${country}`;
    const response = await fetch(url);

    // check the response status
    // if (response.status === 200) { }
    // assuming the request succeeds

    const data = await response.json();
    const facts = data[0];

    const factsHTML = `
    <h2>Facts about ${facts.name.common}</h2>
    <img src="${facts.flags.svg}" alt="Flag of ${facts.name.official}" />
    <table>
      <tbody>
        <tr><td>Official Name</td><td>${facts.name.official}</td></tr>
        <tr><td>Capital</td><td>${facts.capital[0]}</td></tr>
      </tbody>
    </table>
    `;

    const factsElement = document.querySelector("#facts-area");
    factsElement.innerHTML = factsHTML;
}

function startLoadProgress() {
    document.querySelector(".lds-circle").style = "display: inline-block;";
}

function endLoadProgress() {
    document.querySelector(".lds-circle").style = "display: none;";
}