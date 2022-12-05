import Cursor from "../components/cursor/cursor";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
