// import logo from './logo.svg';
// import './App.css';
// import { Layout } from "layouts/Layout";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { Gallery } from "pages/Gallery";
// import { Router } from "components/Router";
import { Layout } from "layouts/Layout";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
