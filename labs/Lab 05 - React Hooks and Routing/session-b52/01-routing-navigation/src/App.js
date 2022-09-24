// import logo from './logo.svg';
// import './App.css';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [facts, setFacts] = useState(null);

  const fetchFacts = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  };

  useEffect(() => {
    fetchFacts()
      .then((countries) => {
        setFacts(countries.sort((a, b) => a.name.common > b.name.common));
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Outlet context={facts} />
    </div>
  );
};

export default App;
