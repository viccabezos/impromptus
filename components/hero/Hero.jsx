import React from "react";
import Image from "next/image";
import Hoss from "../../public/hoss.webp";
function Hero() {
  return (
    <div
      data-theme="mytheme"
      className="hero min-h-screen bg-white"
      //   style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);"
    >
      <Image src={Hoss} layout="fill" className="opacity-10" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Les chanteurs impromptus</h1>
          <p className="mb-2">Bienvenue à tous chanteurs de tout horizon !</p>
          <p className="mb-5">
            "Les impromptus c'est vous tous, qui nous accompagnez dans nos
            chants,
            <br />
            Merci a vous de faire vivre nôtre projet "
          </p>
          <button className="btn btn-primary text-white">
            <a href="/chanter-saison-2022">CHANSONS saison 2022</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
