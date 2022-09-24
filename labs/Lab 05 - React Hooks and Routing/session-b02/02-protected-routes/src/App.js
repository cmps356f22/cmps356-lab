// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "pages/Home";
import { Facts } from "pages/Facts";
import { About } from "pages/About";
import { Photos } from "pages/Photos";
import { Profile } from "pages/Profile";
import { Login } from "pages/Login";
import { Layout } from "layouts/Layout";
import { Basic } from "layouts/Basic";
import { Country } from "components/Country";
import { ProtectedPage } from "components/ProtectedPage";

const App = () => {
  const [facts, setFacts] = useState(null);
  const [userInformation, setUserInformation] = useState(null);

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
          <Route path="/">
            <Route
              element={
                <Layout
                  userInformation={userInformation}
                  setUserInformation={setUserInformation}
                />
              }
            >
              <Route index element={<Home />} />
              <Route path="facts" element={<Facts facts={facts} />}>
                <Route path=":cca3" element={<Country />}>
                  {/* <Route path="*" element={<p>No such country!</p>} /> */}
                </Route>
              </Route>
              <Route path="about" element={<About />} />
              <Route
                path="photos"
                element={
                  <ProtectedPage userInformation={userInformation}>
                    <Photos />
                  </ProtectedPage>
                }
              />
              <Route
                path="profile"
                element={
                  <ProtectedPage userInformation={userInformation}>
                    <Profile />
                  </ProtectedPage>
                }
              />
            </Route>
            <Route element={<Basic />}>
              <Route
                path="/login"
                element={
                  <Login
                    userInformation={userInformation}
                    setUserInformation={setUserInformation}
                  />
                }
              />
              <Route path="*" element={<p>404</p>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
