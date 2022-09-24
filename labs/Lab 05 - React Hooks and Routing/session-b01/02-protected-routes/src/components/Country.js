import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const Country = () => {
  const context = useOutletContext();
  const navigate = useNavigate();
  const { cca3 } = useParams();
  const facts = context
    ? context.find((country) => country.cca3 === cca3)
    : null;

  if (!facts) {
    navigate("/facts");
    return;
  }

  return (
    <>
      {cca3}
      {context && (
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
