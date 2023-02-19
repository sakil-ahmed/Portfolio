import Cursor from "../components/cursor/cursor";
import GlobalStyles from "../styles/globalStyles";
import { Jost } from "@next/font/google";

const jost = Jost({
  subsets: ["latin"],
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <GlobalStyles />
      <main className={jost.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
