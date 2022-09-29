// import logo from './logo.svg';
// import './App.css';

import { faker } from "@faker-js/faker";
import { useDeferredValue, useState, useTransition } from "react";
const records = Array.from(Array(10000), () => faker.name.fullName());

function App() {
  // console.log(records);
  return (
    <div className="App">
      <List names={records} />
    </div>
  );
}

const List = ({ names }) => {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState("");

  const deferQuery = useDeferredValue(query);
  const [isPending, startTransition] = useTransition();

  const handleQueryUpdate = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => setHighlight(value));
  };

  return (
    <>
      <input type="text" value={query} onChange={handleQueryUpdate} />
      {/* {deferQuery !== query && <div>Loading...</div>} */}
      {isPending && <div>Loading...</div>}
      {names
        // .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
        .map((name, index) => (
          // <ListItem key={index} name={name} query={deferQuery} />
          <ListItem key={index} name={name} query={highlight} />
        ))}
    </>
  );
};

const ListItem = ({ name, query }) => {
  // highlight the whole row
  // if (name.toLowerCase().includes(query.toLowerCase())) {
  //   return <div style={{ backgroundColor: "red" }}>{name}</div>;
  // }

  // highlight only the matching part
  const index = name.toLowerCase().indexOf(query.toLowerCase());

  if (index !== -1) {
    return (
      <div>
        {name.substring(0, index)}
        <span style={{ backgroundColor: "yellowgreen" }}>
          {name.substring(index, index + query.length)}
        </span>
        {name.substring(index + query.length)}
      </div>
    );
  }

  return <div>{name}</div>;
};

export default App;
