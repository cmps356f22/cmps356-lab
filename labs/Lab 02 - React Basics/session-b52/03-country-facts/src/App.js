import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const regions = [
    'Africa',
    'Asia',
    'Europe',
    'North America',
    'South America',
  ];

  const [countries, setCountries] = useState([]);
  const [facts, setFacts] = useState(null);

  const regionChanged = async () => {
    console.log('region changed');
    const region = document.querySelector('#region').value;
    const url = `https://restcountries.com/v3.1/region/${region}`;

    const response = await fetch(url);
    const data = await response.json();

    setCountries(data.map((country) => country.name.common).sort());
    console.log('countries updated', countries);
  };

  const countryChanged = async () => {
    console.log('country changed');
    const country = document.querySelector('#country').value;
    const url = `https://restcountries.com/v3.1/name/${country}`;
    const response = await fetch(url);
    const data = await response.json();

    setFacts(data[0]);
    console.log('facts updated');
  };

  useEffect(() => {
    countryChanged();
  }, [countries]);

  return (
    <div className="App">
      <div className="lds-circle">
        <div />
      </div>
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
                onChange={regionChanged}
              />
              <datalist id="regions" name="regions">
                {regions.map((region) => (
                  <option key={region} value={region} />
                ))}
              </datalist>
            </div>
            <div className="form-group">
              <label>Select a country</label>
              <select name="country" id="country" onChange={countryChanged}>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
              </select>
            </div>
          </form>
          <br />
          <div id="facts-area">
            <h2>Facts about {facts?.name?.common}</h2>
            <img src={facts?.flags?.svg} alt={facts?.name?.official} />
            <table>
              <tbody>
                <tr>
                  <td>Official Name</td>
                  <td>{facts?.name?.official}</td>
                </tr>
                <tr>
                  <td>Capital</td>
                  <td>{facts?.capital[0]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
