import "./App.css";
import Hello from "./components/Hello";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Hello />
      <div>
        <Hello />
        <Hello title="Mr." name="React" />
        <Hello title="Ms." name="Index" />
      </div>
      <User firstname="John" lastname="Doe" />
      <User firstname="Jane" lastname="Doe" />
      <User firstname="فلان" lastname="الفلاني" />
    </div>
  );
}

export default App;
