import Navbar from "../components/Navbar";
import StickyHeader from "../components/StickyHeader";
import "../styles/globals.css";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StickyHeader />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
