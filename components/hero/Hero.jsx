import React from "react";
import Image from "next/image";
import Hoss from "../../public/hoss.webp";
import Link from "next/link";

function Hero() {
  return (
    <div
      data-theme="mytheme"
      className="hero min-h-min bg-white hero-overlay relative"
    >
      <Image
        src={Hoss}
        layout="fill"
        className="w-full opacity-20"
        objectFit="cover"
      />
      <div className="hero-content text-center text-neutral-content py-10">
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
          <div className="flex flex-col space-y-4">
            <Link href="/chanter-saison-2022">
              <a href="dummy" className="btn btn-primary text-white ">
                Répertoire Impromptus 2022
              </a>
            </Link>
            <Link href="/chanter-entre-amis">
              <a href="dummy" className="btn btn-primary text-white">
                Répertoire Entre Amis
              </a>
            </Link>
            <Link href="https://www.facebook.com/chanteursimpromptus">
              <a target="__blank" className="btn btn-secondary text-white">
                <p>nos prochaines rencontres</p>
                <p>- actualités photos vidéos- événements -</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
