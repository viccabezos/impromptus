import Footer from "../layout/footer/Footer";
import DrawerNavbar from "../layout/navbar/DrawerNavbar";
import Navbar from "../layout/navbar/Navbar";
import NavBar2 from "../layout/navbar/NavBar2";
import NavTest from "../layout/navbar/NavTest";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <NavTest /> */}
      {/* <NavBar2 /> */}
      <DrawerNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
