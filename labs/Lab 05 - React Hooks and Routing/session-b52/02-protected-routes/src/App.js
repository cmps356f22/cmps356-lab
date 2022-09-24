// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import { Layout } from "layouts/Layout";
import { Basic } from "layouts/Basic";
// import { Router } from "components/Router";
import { Home } from "pages/Home";
import { Facts } from "pages/Facts";
import { About } from "pages/About";
import { Photos } from "pages/Photos";
import { Profile } from "pages/Profile";
import { Login } from "pages/Login";
import { ProtectedRoute } from "components/ProtectedRoute";
import { Country } from "components/Country";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [facts, setFacts] = useState(null);
  const [user, setUser] = useState(null);

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
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<Layout user={user} setUser={setUser} />}>
              <Route index element={<Home />} />
              <Route path="facts" element={<Facts facts={facts} />}>
                <Route path=":cca3" element={<Country />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route element={<ProtectedRoute user={user} />}>
                <Route path="photos" element={<Photos />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              {/* <Route
                path="photos"
                element={
                  <ProtectedRoute user={user}>
                    <Photos />
                  </ProtectedRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <ProtectedRoute user={user}>
                    <Profile />
                  </ProtectedRoute>
                }
              /> */}
            </Route>
            <Route element={<Basic />}>
              <Route
                path="login"
                element={<Login user={user} setUser={setUser} />}
              />
              <Route path="*" element={<p>404!</p>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
