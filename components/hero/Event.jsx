import React from "react";
import Image from "next/image";
import ukraine from "../../public/images/ukraine.webp";

function SpecialEvent() {
  return (
    <div data-theme="mytheme" className="bg-secondary py-20 md:px-20 mt-28">
      <div class="md:px-10 flex flex-col md:flex-row  md:gap-5 md:py-5 lg:flex shadow-xl bg-white text-justify">
        <figure className="md:w-1/3 py-10 px-2">
          <Image src={ukraine} alt="concert" />
        </figure>
        <div class="px-5 md:w-2/3 py-10 flex flex-col space-y-3 ">
          <h2 class="text-3xl text-left">Evenement: Concert solidaire</h2>
          <p>samedi 2 juillet</p>

          <p>
            À la lumière des événements tragiques qui se déroulent en Ukraine,
            la commune de Vieux-Boucau, le comité d’animation de Vieux-Boucau et
            l’association Landes Musiques Amplifiées en partenariat avec la
            communauté de communes MACS, ont souhaité inscrire la seconde
            édition du festival essentiel dans une démarche solidaire.
          </p>
          <p>
            Nous vous donnons rendez-vous le samedi 2 juillet prochain aux
            Arènes de Vieux-Boucau pour une soirée unique de concerts !
          </p>
          <p>
            Le Cri du Chœur est une chorale éphémère intergénérationnelle,
            composée de 200 chanteurs et chanteuses du territoire âgés de 16 à
            80 ans. Créée pour le Concert Essentiel et Solidaire, la chorale
            interprétera cinq morceaux dirigés par Marie So, cheffe de cœur à
            Capbreton, et sera accompagnée de trois musiciens (guitare, basse et
            batterie) pour un spectacle vivant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpecialEvent;
