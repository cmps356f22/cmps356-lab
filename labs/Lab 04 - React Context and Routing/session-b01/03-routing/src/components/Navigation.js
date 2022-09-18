import { NavLink } from "react-router-dom";

const Navigation = ({ children }) => {
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
        <NavLink exact to="/" style={styleActive}>
          Home
        </NavLink>
        <NavLink to="/gallery" style={styleActive}>
          Gallery
        </NavLink>
        <NavLink to="/about" style={styleActive}>
          About
        </NavLink>
      </nav>
      {children}
    </>
  );
};

export { Navigation };
