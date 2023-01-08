import Navbar from "../components/Navbar";
import StickyHeader from "../components/StickyHeader";
import "../styles/globals.css";
import Footer from "../components/Footer";
import { Lato } from "@next/font/google";
import { useEffect } from "react";
// import "tw-elements";

const lato = Lato({
  subsets: ["latin"],
  variable: "--lato",
  weight: ["100", "300", "400", "700", "900"],
});
function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <main className={`${lato.variable} font-sans`}>
      <StickyHeader />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
export default App;
