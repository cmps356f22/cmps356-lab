import { NavLink } from "react-router-dom";

const Navigation = ({ children, userInformation }) => {
  const styleActive = ({ isActive }) => ({
    color: isActive ? "red" : undefined,
  });

  return (
    <>
      <nav
        style={{
          display: "flex",
          columnGap: "5px",
        }}
      >
        <NavLink to="/" style={styleActive}>
          Home
        </NavLink>
        <NavLink to="/facts" style={styleActive}>
          Facts
        </NavLink>
        <NavLink to="/about" style={styleActive}>
          About
        </NavLink>
        {userInformation && (
          <>
            <NavLink to="/profile" style={styleActive}>
              Profile
            </NavLink>
            <NavLink to="/photos" style={styleActive}>
              Photos
            </NavLink>
          </>
        )}
      </nav>
      {children}
    </>
  );
};

export { Navigation };
