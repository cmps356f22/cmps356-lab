import { Layout } from "layouts/Layout";
// import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";

const Gallery = () => {
  const { countries } = useOutletContext();

  return (
    <Layout title="Gallery">
      <p>gallery page</p>
      {countries && (
        <div>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              columnGap: "5px",
              maxWidth: "600px",
            }}
          >
            {countries.map((country) => (
              <Link key={country.cca3} to={country.cca3.toLowerCase()}>
                {country.name.common}
              </Link>
            ))}
          </div>
          <div
            style={{
              borderTop: "1px solid black",
              marginTop: "10px",
              padingTop: "10px",
            }}
          >
            <Outlet />
          </div>
        </div>
      )}
    </Layout>
  );
};

export { Gallery };
