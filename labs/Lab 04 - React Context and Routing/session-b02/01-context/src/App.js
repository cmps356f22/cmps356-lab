import "./App.css";
import Gamer from "components/Gamer";
// import GamerAvatar from "components/GamerAvatar";
import { GamerProvider } from "contexts/GamerContext";

function App() {
  return (
    <GamerProvider>
      <div className="App">
        <Gamer />
      </div>
      {/* <GamerAvatar /> */}
    </GamerProvider>
  );
}

export default App;
