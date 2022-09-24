import { useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const Country = () => {
  const { cca3 } = useParams();
  const navigate = useNavigate();
  const context = useOutletContext();
  const facts = context?.find((fact) => fact.cca3 === cca3.toUpperCase());

  useEffect(() => {
    if (!facts) {
      navigate("..");
      return;
    }
  }, []);

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
    </>
  );
};

export { Country };
