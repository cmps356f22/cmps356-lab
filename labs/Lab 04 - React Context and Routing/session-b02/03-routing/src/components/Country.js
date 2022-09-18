import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const Country = () => {
  const [facts, setFacts] = useState(null);
  const { cca3 } = useParams();

  const fetchCountry = async () => {
    const url = `https://restcountries.com/v3.1/alpha/${cca3.toUpperCase()}`;
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    fetchCountry().then((data) => setFacts(data[0]));
  }, [cca3]);

  return (
    <>
      {cca3.toUpperCase()}
      {facts && (
        <>
          <div>{facts.name.common}</div>
          <div>
            <img
              style={{
                maxWidth: "300px",
                minWidth: "250px",
              }}
              src={facts.flags.svg}
              alt={`flag of ${facts.name.common}`}
            ></img>
          </div>
        </>
      )}
      {/* <Outlet /> */}
    </>
  );
};

export { Country };
