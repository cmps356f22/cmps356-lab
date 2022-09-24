// import logo from "./logo.svg";
// import "./App.css";
import { Layout } from "layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Facts } from "pages/Facts";
import { About } from "pages/About";
import { Country } from "components/Country";
import { useState, useEffect } from "react";

const App = () => {
  const [facts, setFacts] = useState(null);

  const fetchFacts = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    fetchFacts().then((data) =>
      setFacts(data.sort((a, b) => a.name.common > b.name.common))
    );
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="facts" element={<Facts facts={facts} />}>
              <Route path=":cca3" element={<Country />} />
            </Route>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
