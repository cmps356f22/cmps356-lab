import { Navigation } from "components/Navigation";

const Header = ({ children, userInformation }) => {
  return (
    <>
      <header>
        {children}
        <Navigation userInformation={userInformation} />
      </header>
    </>
  );
};

export { Header };
