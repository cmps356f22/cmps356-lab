import Hello from './components/Hello';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Hello name="React" title="Mr." />
      <Hello name="Kenobe" title="Mr." />
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
        <li>Six</li>
      </ul>
      <User firstName="John" lastName="Doe" />
      <User firstName="فلان" lastName="الفلاني" />
    </div>
  );
}

export default App;
