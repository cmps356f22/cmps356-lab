import { NavLink } from "react-router-dom";

const Navigation = ({ children }) => {
  const styleActive = ({ isActive }) => {
    return {
      color: isActive ? "red" : undefined,
    };
  };

  return (
    <>
      {/* <nav
        style={{
          display: "flex",
          // flexFlow: "row wrap",
          columnGap: "5px",
        }}
      >
        <a
          href="/#home"
          onClick={context.dispatch({ type: "PAGE_UPDATE", payload: "Home" })}
        >
          Home
        </a>
        <a
          href="/#gallery"
          onClick={context.dispatch({
            type: "PAGE_UPDATE",
            payload: "Gallery",
          })}
        >
          Gallery
        </a>
        <a
          href="/#about"
          onClick={context.dispatch({ type: "PAGE_UPDATE", payload: "About" })}
        >
          About
        </a>
      </nav> */}
      <nav
        style={{
          display: "flex",
          // flexFlow: "row wrap",
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
