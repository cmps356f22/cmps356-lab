import './App.css';
import Hello from './components/Hello';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello name="React" />
      <Hello name="CMPS" />
      <Hello title="Mr." name="React" />
      <div>
        <Hello title="Mr." name="React" />
        <Hello title="Ms." name="Index" />
      </div>
      <User firstName="John" lastName="Doe" />
      <User firstName="فلان" lastName="الفلاني" />
    </div>
  );
}

export default App;
