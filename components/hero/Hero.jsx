import React from "react";
import Image from "next/image";
import Hoss from "../../public/hoss.webp";
function Hero() {
  return (
    <div
      data-theme="mytheme"
      className="hero min-h-screen bg-white hero-overlay bg-opacity-40"
    >
      <Image src={Hoss} layout="fill" className="opacity-40" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-primary">
            Les chanteurs impromptus
          </h1>
          <p className="mb-2 text-neutral">
            Bienvenue à tous chanteurs de tout horizon!
          </p>
          <p className="mb-5 text-neutral">
            "Les impromptus c'est vous tous, qui nous accompagnez dans nos
            chants,
            <br />
            Merci a vous de faire vivre nôtre projet "
          </p>
          <button className="btn btn-primary text-white shadow-md">
            <a href="/chanter-saison-2022">CHANSONS saison 2022</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
