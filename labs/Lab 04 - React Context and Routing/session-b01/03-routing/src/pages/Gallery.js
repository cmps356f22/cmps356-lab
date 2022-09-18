import { useEffect, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FactsContext } from "contexts/FactsContext";

const Gallery = () => {
  const context = useContext(FactsContext);

  const styleActive = ({ isActive }) => ({
    color: isActive ? "red" : undefined,
  });

  const fetchCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    fetchCountries().then((data) =>
      context.setData(data.sort((a, b) => a.name.common > b.name.common))
    );
  }, []);

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
        {context.data && (
          <>
            {context.data.map((country) => (
              <NavLink style={styleActive} to={country.cca3} key={country.cca3}>
                {country.name.common}
              </NavLink>
            ))}
          </>
        )}
      </div>
      <Outlet />
    </>
  );
};

export { Gallery };
