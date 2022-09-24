import { NavLink } from "react-router-dom";

const Navigation = ({ children }) => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : undefined,
    };
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          // flexFlow: "row wrap",
          columnGap: "5px",
        }}
      >
        {/* <a href="#" onClick={context.setPage("Home")}>Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a> */}
        <NavLink to="/" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/facts" style={activeStyle}>
          Facts
        </NavLink>
        <NavLink to="/about" style={activeStyle}>
          About
        </NavLink>
      </nav>
      {children}
    </>
  );
};

export { Navigation };
