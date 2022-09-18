import { createContext, useState } from "react";

const FactsContext = createContext();

const FactsProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <>
      <FactsContext.Provider value={{ data, setData }}>
        {children}
      </FactsContext.Provider>
    </>
  );
};

export { FactsContext, FactsProvider };
