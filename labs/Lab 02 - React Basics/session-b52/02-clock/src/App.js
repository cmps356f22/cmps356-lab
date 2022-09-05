import './App.css';
import Clock from './components/Clock';

function App(props) {
  return (
    <div className="App">
      <Clock />
      <Clock offset="1" title={props.title} />
      <Clock offset="24" title={props.title} />
    </div>
  );
}

export default App;
