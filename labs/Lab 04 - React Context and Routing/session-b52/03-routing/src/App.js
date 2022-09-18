// import logo from './logo.svg';
// import './App.css';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState(null);

  const fetchCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  };

  useEffect(() => {
    fetchCountries()
      .then((countries) => {
        setCountries(countries.sort((a, b) => a.name.common > b.name.common));
        console.log("countries set");
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      {/* <code>CMPS 356</code> */}
      <Outlet context={{ countries }} />
    </div>
  );
};

export default App;
