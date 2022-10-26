// import "../styles/globals.css";
import Theme from "themes/theme";
import { StoreProvider } from "contexts/context";

function Application({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </StoreProvider>
  );
}

export default Application;
