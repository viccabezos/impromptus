import Head from "next/head";
import Remerciements from "../components/cards/Remerciements";
import Carousel2 from "../components/carousel/carousel2";
import Hero from "../components/hero/Hero";
import Presentation from "../components/hero/Presentation";
import Team from "../components/team/Team";
import Footer from "../layout/footer/Footer";

export default function Home() {
  return (
    <div data-theme="mytheme">
      <Head>
        <title>Impromptus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Team />
        <Remerciements />

        <Carousel2 />
        <Presentation />
        <Footer />
      </div>
    </div>
  );
}
