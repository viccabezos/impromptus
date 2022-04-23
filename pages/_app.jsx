import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Navbar";
import NavBar2 from "../layout/navbar/NavBar2";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NavBar2 /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
