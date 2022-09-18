import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Gallery } from "pages/Gallery";
import { About } from "pages/About";
import { Layout } from "layouts/Layout";
import { Country } from "components/Country";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />}>
            <Route path=":cca3" element={<Country />}>
              {/* <Route path="*" element={<p>No such country!</p>} /> */}
            </Route>
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route
          path="*"
          element={
            <Layout>
              <p>404</p>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
