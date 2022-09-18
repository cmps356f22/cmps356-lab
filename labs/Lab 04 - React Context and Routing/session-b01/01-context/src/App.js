import "./App.css";
import Gamer from "components/Gamer";
import { GamerProvider } from "contexts/GamerContext";
import GamerAvatar from "components/GamerAvatar";

function App() {
  return (
    <GamerProvider>
      <div className="App">
        <Gamer />
      </div>
      <GamerAvatar />
      {/* <GamerContext.Consumer>
        {(value) => value.age}
      </GamerContext.Consumer> */}
    </GamerProvider>
  );
}

export default App;
