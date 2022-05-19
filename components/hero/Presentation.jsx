import React from "react";
import Image from "next/image";
import pops from "../../public/images/pops.jpg";

function Presentation() {
  return (
    <div data-theme="mytheme" className="bg-secondary py-20 md:px-20 ">
      <div class="md:px-10 flex flex-col lg:flex-row  md:gap-5  md:py-5 lg:flex shadow-xl bg-white text-justify">
        <figure className="lg:w-1/3 py-5 px-10 lg:px-0">
          <Image src={pops} alt="concert" />
        </figure>
        <div class="px-10 lg:w-2/3 py-5 flex flex-col space-y-4 lg:px-0 ">
          <h2 class="text-3xl text-left">Presentation:</h2>
          <h2 class="text-2xl text-left">
            Bienvenue à tous chanteurs de tout horizon!
          </h2>

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
            <p className="text-right">
              A l’origine du projet Les Chanteurs Impromptus d’Hossegor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
