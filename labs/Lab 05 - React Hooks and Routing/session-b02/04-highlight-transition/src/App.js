// import logo from './logo.svg';
// import './App.css';

import { faker } from "@faker-js/faker";
import { useDeferredValue, useState, useTransition } from "react";

const records = Array.from(Array(10000), () => faker.name.fullName()).sort(
  (a, b) => (a > b ? 1 : -1)
);

const App = () => {
  return (
    <div className="App">
      <List names={records} />
    </div>
  );
};

const List = ({ names }) => {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState("");
  const [isPending, startTransition] = useTransition();
  // const deferQuery = useDeferredValue(query);

  const handleQueryUpdate = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => {
      setHighlight(value);
    });
  };

  return (
    <>
      <input type="text" value={query} onChange={handleQueryUpdate} />
      {isPending && <div>Pending...</div>}
      {/* {deferQuery !== query && <div>Pending...</div>} */}
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
  const index = name.toLowerCase().indexOf(query.toLowerCase());

  if (index === -1) {
    // return <div>{name}</div>;
  } else {
    return (
      <div>
        {name.substring(0, index)}
        <span
          style={{
            backgroundColor: "yellowgreen",
          }}
        >
          {name.substring(index, index + query.length)}
        </span>
        {name.substring(index + query.length)}
      </div>
    );
  }
};

export default App;
