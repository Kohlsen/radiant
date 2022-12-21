import Navbar from "../components/Navbar";
import StickyHeader from "../components/StickyHeader";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StickyHeader />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
