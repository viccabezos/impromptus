import Head from "next/head";
import ValeursCards from "../components/cards/valeursCards";
import Carousel from "../components/carousel/carousel";
import SpecialEvent from "../components/hero/event";
import Hero from "../components/hero/Hero";
import Team from "../components/team/Team";

export default function Home() {
  return (
    <div data-theme="mytheme">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <SpecialEvent />
        <Carousel />

        <ValeursCards />

        <Team />
      </div>
    </div>
  );
}
