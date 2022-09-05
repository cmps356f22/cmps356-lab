import CountrySelector from './components/CountrySelector';
import CountryFacts from './components/CountryFacts';

function App() {
  return (
    <div className="App">
    <div class="lds-circle"><div></div></div>
    <div class="container">
      <header>
        <h1>Country Explorer</h1>
      </header>
      <hr />
      <br />
      <main id="main-content">
        <CountrySelector />
        <br />
        <div id="facts-area">
          <CountryFacts />
        </div>
      </main>
    </div>
    </div>
  );
}

export default App;
