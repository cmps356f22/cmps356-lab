import { useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const Country = () => {
  const { cca3 } = useParams();
  const context = useOutletContext();
  const navigate = useNavigate();

  const facts = context?.find((country) => cca3 === country.cca3.toLowerCase());

  useEffect(() => {
    if (!facts) {
      navigate("..");
    }
  }, [facts]);

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
