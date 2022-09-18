import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const [facts, setFacts] = useState(null);
  const { cca3 } = useParams();

  const fetchFacts = async () => {
    const url = `https://restcountries.com/v3.1/alpha/${cca3}`;
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  };

  useEffect(() => {
    fetchFacts()
      .then((facts) => setFacts(facts[0]))
      .catch((error) => {});
  }, [cca3]);

  return (
    <>
      {facts && (
        <div>
          <div>{facts.name.common}</div>
          <div>
            <img
              style={{
                maxWidth: "300px",
                maxHeight: "250px",
              }}
              src={facts.flags.svg}
              alt={`flag of ${facts.name.common}`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { Country };
