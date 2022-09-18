// import "./App.css";
import { Gamer } from "components/Gamer";
import { GamerProvider, GamerContext } from "contexts/GamerContext";
import { GamerAvatar } from "components/GamerAvatar";

const App = () => {
  return (
    <GamerProvider username="foo" status="Away" age="18">
      <div className="App">
        <Gamer />
        {/* <GamerContext.Consumer>
          {(value) => <p>{value.age}</p>}
        </GamerContext.Consumer> */}
        <GamerAvatar />
      </div>
    </GamerProvider>
  );
};

export default App;
