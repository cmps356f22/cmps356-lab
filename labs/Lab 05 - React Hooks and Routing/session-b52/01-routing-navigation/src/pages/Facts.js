import { Layout } from "layouts/Layout";
import {
  Outlet,
  useOutletContext,
  useNavigate,
  useParams,
} from "react-router-dom";

const Facts = () => {
  const facts = useOutletContext();
  const navigate = useNavigate();
  const { cca3 } = useParams();

  return (
    <Layout title="Facts">
      <p>facts page</p>
      {facts && (
        <div>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              columnGap: "5px",
              maxWidth: "600px",
            }}
          >
            <select
              value={cca3 ?? "-"}
              onChange={(e) => {
                navigate(e.target.value);
              }}
            >
              <option disabled value="-">
                -
              </option>
              {facts.map((country) => (
                <option key={country.cca3} value={country.cca3.toLowerCase()}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
          <div
            style={{
              borderTop: "1px solid black",
              marginTop: "10px",
              padingTop: "10px",
            }}
          >
            <Outlet context={facts} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export { Facts };
