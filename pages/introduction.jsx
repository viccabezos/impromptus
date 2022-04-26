import React from "react";
import intro from "../data/intro";
import Image from "next/image";
import Hoss from "/public/hoss.webp";

function Introduction() {
  return (
    <div
      class="sm:flex flex-wrap justify-center items-center text-center gap-8 py-10"
      data-theme="mytheme"
    >
      <div
        data-theme="mytheme"
        className="flex bg-hossegorBanner justify-center h-40 bg-white hero-overlay bg-opacity-40 items-center"
      >
        {/* <Image src={Hoss} layout="fill" className="opacity-40" /> */}
        <div className=" text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary">
              Les chanteurs impromptus 2022
            </h1>
          </div>
        </div>
      </div>
      <section className="sm:px-10">
        <div class="w-full max-w-4xl p-10 bg-white mt-6  shadow-lg rounded-lg text-justify space-y-5 ">
          <p className="mb-2">Bienvenue à tous chanteurs de tout horizon!</p>
          <p>
            Le groupe des Chanteurs Impromptus, sous la conduite de notre
            musicien Jean-Baptiste Pène –accordéon guitare- et de notre
            chanteuse Anne Serrano, accompagnés d’Antoine, guitariste, vous
            propose de nous rejoindre autour de quelques représentations durant
            cet été 2022. Nous reprenons –avec vous- des chants d’un répertoire
            éclectique qui doit « Parler-Chanter » au plus grand nombre.
          </p>
          <p>
            Retrouver le plaisir du chant en commun est notre mot d’ordre. Une
            tradition comme il existait jadis dans les villages de nos
            campagnes. Des chants traditionnels français, basques et occitans
            et, bien sûr, élargis à nos voisins européens. Le chant est un
            langage universel qui doit rassembler les femmes et les hommes de
            tous pays et de toutes cultures.
          </p>
          <p>
            Les chants sont annoncés, vous les retrouvezdans ce carnet ou sur
            l’application smartphone. Commencez progressivement à porter votre
            voix sur un refrain ou/et couplets en suivant notre chœur et en
            respectant le rythme de notre musicien. N’hésitezpas à nous
            rejoindre –épaule contre épaule- pour les chansons que vous
            maîtrisez, vous êtes les bienvenus.
          </p>
          <p>
            Chansons d’Amour, de Résistance et de Paix, chantons pour le plaisir
            et l’amitié ; les chants doivent unir les Cœurs des femmes et des
            hommes pour gagner la paix et protéger notre planète pour les
            générations futures…
          </p>
          <div className="flex flex-col items-end w-full">
            <p className="font-medium">Jean-Pierre Arbouet,</p>
            <p>A l’origine du projet Les Chanteurs Impromptus d’Hossegor</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
