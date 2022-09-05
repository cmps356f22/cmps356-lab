import './App.css';
import { useState } from 'react';

function App() {
  const [regions, setRegions] = useState([
    'Africa',
    'Asia',
    'Europe',
    'North America',
    'South America',
  ]);

  const [countries, setCountries] = useState([]);
  const [facts, setFacts] = useState({});

  const updateCountries = async (event) => {
    console.log("updating countries");
    const region = event.target.value;
    // const url = `https://restcountries.com/v3.1/region/${region}`;
    // const response = await fetch(url);
    // const data = await response.json();
    setCountries(["A", "B", "C", region]);
    console.log(countries);
    // setCountries(data.map((country) => country.name.common).sort());
  };

  document.addEventListener('DOMContentLoaded', () => {
    console.log(document.querySelector('.container'));

    const regionElement = document.querySelector('#region');
    const countryElement = document.querySelector('#country');
    const factsElement = document.querySelector('#facts-area');

    regionElement.addEventListener('change', getCountries);
    countryElement.addEventListener('change', getFacts);
  });

  async function getCountries() {
    const region = document.querySelector('#region').value;

    const url = `https://restcountries.com/v3.1/region/${region}`;
    const response = await fetch(url);

    const data = await response.json();
    const countries = data.map((country) => country.name.common).sort();

    const countriesHTML = countries
      .map((country) => `<option value="${country}">${country}</option>`)
      .join();
    const countryElement = document.querySelector('#country');
    countryElement.innerHTML = countriesHTML;
    await getFacts();
  }

  async function getFacts() {
    const country = document.querySelector('#country').value;

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

    const factsElement = document.querySelector('#facts-area');
    factsElement.innerHTML = factsHTML;
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Country Explorer</h1>
        </header>
        <hr />
        <br />
        <main id="main-content">
          <form action="#">
            <div className="form-group">
              <label>Select a region &nbsp;</label>
              <input
                type="text"
                id="region"
                name="region"
                placeholder="Select a region"
                list="regions"
                onChange={updateCountries}
              />
              <datalist id="regions" name="regions">
                {regions.map(region => <option key={region} value={region}></option>)}
              </datalist>
            </div>
            <div className="form-group">
              <label>Select a country</label>
              <select name="country" id="country"></select>
            </div>
          </form>
          <br />
          <div id="facts-area"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
