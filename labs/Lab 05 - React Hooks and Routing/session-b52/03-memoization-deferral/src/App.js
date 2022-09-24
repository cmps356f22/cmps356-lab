// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import { Playground } from "./Playground";

function App() {
  const [lorem, setLorem] = useState("");
  const identity = () => lorem;

  return (
    <div className="App">
      <div
        style={{
          padding: "10px",
          backgroundColor:
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
        }}
      >
        <input
          type="text"
          value={lorem}
          onChange={(e) => {
            setLorem(e.target.value);
          }}
        />
      </div>
      <Playground value={identity} />
    </div>
  );
}

export default App;
