import "../styles/globals.css";
import Theme from "themes/theme";

function Application({ Component, pageProps }) {
  return (
    <Theme>
      {/* <Theme mode="dark"> */}
      <Component {...pageProps} />
    </Theme>
  );
}

export default Application;
