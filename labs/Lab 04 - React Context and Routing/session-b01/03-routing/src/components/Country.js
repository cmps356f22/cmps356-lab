import { useMemo, useContext } from "react";
import { useParams } from "react-router-dom";
import { FactsContext } from "contexts/FactsContext";

const Country = () => {
  const context = useContext(FactsContext);
  const { cca3 } = useParams();
  const facts = context.data
    ? context.data.find((country) => country.cca3 === cca3)
    : null;

  return (
    <>
      {cca3}
      {context.data && (
        <div>
          <div>{facts.name.common}</div>
          <div>
            <img
              src={facts.flags.svg}
              alt={`flag of ${facts.name.common}`}
              style={{
                maxHeight: "200px",
                maxWidth: "250px",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { Country };
