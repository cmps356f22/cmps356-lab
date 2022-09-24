// import logo from './logo.svg';
// import './App.css';
import { Input } from "components/Input";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(3);
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Input value={value} />
    </div>
  );
}

export default App;
