import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Gallery = () => {
  const [facts, setFacts] = useState(null);

  const styleActive = ({ isActive }) => ({
    color: isActive ? "red" : undefined,
  });

  const fetchFacts = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    fetchFacts().then((data) =>
      setFacts(data.sort((a, b) => a.name.common > b.name.common))
    );
  }, []);

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
          {facts.map((country) => (
            <NavLink
              style={styleActive}
              key={country.cca3}
              to={country.cca3.toLowerCase()}
            >
              {country.name.common}
            </NavLink>
          ))}
        </div>
      )}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export { Gallery };
