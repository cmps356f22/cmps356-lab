import { Navigation } from "components/Navigation";

const Header = ({ children }) => {
  return (
    <>
      <header>
        {children}
        <Navigation>
          <p>navigation</p>
        </Navigation>
      </header>
    </>
  );
};

export { Header };
