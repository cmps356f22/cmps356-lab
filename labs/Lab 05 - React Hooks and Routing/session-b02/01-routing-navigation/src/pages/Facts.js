import { Outlet, useNavigate, useParams } from "react-router-dom";

const Facts = ({ facts }) => {
  const { cca3 } = useParams();
  const navigate = useNavigate();

  return (
    <>
      {facts && (
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            columnGap: "5px",
            maxWidth: "600px",
          }}
        >
          <select
            value={cca3 ?? "—"}
            onChange={(e) => {
              navigate(e.target.value);
            }}
          >
            <option value="—" disabled>
              —
            </option>
            {facts.map((country) => (
              <option
                key={country.cca3.toLowerCase()}
                value={country.cca3.toLowerCase()}
              >
                {country.name.common}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <Outlet context={facts} />
      </div>
    </>
  );
};

export { Facts };
