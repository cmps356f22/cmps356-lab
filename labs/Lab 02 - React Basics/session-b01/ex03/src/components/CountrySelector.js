import { useState } from 'react';

function CountrySelector(props) {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const region = document.querySelector("#region").value;
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const response = await fetch(url);
    const data = await response.json();

    setCountries(data.map(country => country.name.common).sort());

    // await getFacts();
  }

  return (
    <form action="#">
      <div class="form-group">
        <label>Select a region &nbsp;</label>
        <input
          type="text"
          id="region"
          name="region"
          placeholder="Select a region"
          list="regions"
          onChange={getCountries}
        />
        <datalist id="regions" name="regions">
          <option value="Africa"></option>
          <option value="Asia"></option>
          <option value="Europe"></option>
          <option value="North America"></option>
          <option value="South America"></option>
        </datalist>
      </div>
      <div class="form-group">
        <label>Select a country</label>
        <select name="country" id="country">
          {countries.map(country => <option key={country} value={country}>{country}</option>)}
        </select>
      </div>
    </form>
  );
}

export default CountrySelector;
