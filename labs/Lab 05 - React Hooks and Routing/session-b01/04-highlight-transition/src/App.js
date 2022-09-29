// import logo from "./logo.svg";
// import "./App.css";

import { faker } from "@faker-js/faker";
import { useState, useTransition } from "react";

const records = Array.from(Array(10000), () => faker.name.fullName());

const App = () => {
  console.log(records);
  return (
    <div className="App">
      <List />
    </div>
  );
};

const List = () => {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState("");
  // const [matches, setMatches] = useState(records);
  const [isPending, startTransition] = useTransition();

  const handleQuery = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => {
      setHighlight(value);

      // setMatches(
      //   records.filter((record) =>
      //     record.toLowerCase().includes(value.toLowerCase())
      //   )
      // );
    });
  };

  return (
    <>
      <input type="text" value={query} onChange={handleQuery} />
      {isPending && <div>Loading...</div>}
      {records.map((match, index) => (
        <ListItem text={match} highlight={highlight} key={index} />
      ))}
    </>
  );
};

const ListItem = ({ highlight, text }) => {
  const index = text.toLowerCase().indexOf(highlight.toLowerCase());

  if (index !== -1) {
    return (
      <>
        <div>
          <span>{text.substring(0, index)}</span>
          <span
            style={{
              backgroundColor: "yellowgreen",
            }}
          >
            {text.substring(index, index + highlight.length)}
          </span>
          <span>{text.substring(index + highlight.length)}</span>
        </div>
      </>
    );
  } else {
    return <div>{text}</div>;
  }
};

export default App;
