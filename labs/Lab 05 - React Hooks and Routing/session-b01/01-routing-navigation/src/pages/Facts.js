import { Outlet, useNavigate, useParams } from "react-router-dom";

const Facts = (props) => {
  const navigate = useNavigate();
  const { cca3 } = useParams();

  return (
    <>
      <div
        style={{
          color: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          display: "flex",
          flexFlow: "row wrap",
          columnGap: "5px",
          maxWidth: "720px",
        }}
      >
        {props.facts && (
          <select
            onChange={(e) => {
              navigate(e.target.value);
            }}
          >
            <option selected disabled>
              –
            </option>
            {props.facts.map((country) => (
              <option
                selected={cca3 === country.cca3}
                key={country.cca3}
                value={country.cca3}
              >
                {country.name.common}
              </option>
            ))}
          </select>
        )}
      </div>
      <Outlet context={props.facts} />
    </>
  );
};

export { Facts };
