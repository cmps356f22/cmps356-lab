// import logo from "./logo.svg";
// import "./App.css";
import { Outlet } from "react-router-dom";
import { Layout } from "layouts/Layout";
import { FactsProvider } from "contexts/FactsContext";

function App() {
  return (
    <div className="App">
      <FactsProvider>
        <Layout>
          <Outlet />
        </Layout>
      </FactsProvider>
    </div>
  );
}

export default App;
