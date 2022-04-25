import React from "react";

function ValeursCards() {
  return (
    <div data-theme="mytheme" className="flex flex-col justify-center">
      <h2 className="text-center text-3xl font-bold text-primary mt-10">
        Remerciements
      </h2>
      <div className="sm:flex flex-wrap justify-center items-center text-center pb-10 md: px-20">
        <p className="text-md py-4">
          Remerciements à tous ceux qui ont contribués au lancement de cette
          belle aventure, Les Chanteurs Impromptus chansons partagées.
          Remerciements à ceux qui ont abrité un temps, ou plus, nos
          répétitions, Xavier et Jérémie de la BodyGo Surfhouse, ainsi que la
          maison de la Glisse d’Hossegor et Oliver Gonzo Manager chanteur de
          chez Jo and Jo.
        </p>
        <p className="text-md py-4">
          Merci à ceux qui m’ont encouragé au développement de ce projet, les
          dirigeants du Circus de Capbreton et Laurent Marie Joseph pour ses
          conseils vers les musiciens chanteurs Jean-Baptiste Pène Anne Serrano
          et Antoine du Boucher.
        </p>
        <p className="text-md py-4">
          Merci à Violette Faure et son premier groupe d’amis chanteurs ainsi
          qu’à Dominique Daridole et sa muse Liliane pour leur aide et soutien
          constant. Enfin, merci aux chanteurs qui ont participé avec autant
          d’assiduité qu’ils ont pu aux 11 répétitions que nous avons faites
          entre novembre et avril ; Véronique, Rachel, Fabienne, Catherine et
          Philippe, Céline, Dominique, Héléne , Patricia, Véronik, Aline,
          Valérie , Olivier, Bruno et Patrick.
        </p>
      </div>
      {/* <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 pb-10">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg">
          <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
            Remerciements à tous ceux qui ont contribués au lancement de cette
            belle aventure, Les Chanteurs Impromptus chansons partagées.
            Remerciements à ceux qui ont abrité un temps, ou plus, nos
            répétitions, Xavier et Jérémie de la BodyGo Surfhouse, ainsi que la
            maison de la Glisse d’Hossegor et Oliver Gonzo Manager chanteur de
            chez Jo and Jo.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg">
          <p className="text-md text-gray-500 dark:text-gray-300 py-4">
            Merci à ceux qui m’ont encouragé au développement de ce projet, les
            dirigeants du Circus de Capbreton et Laurent Marie Joseph pour ses
            conseils vers les musiciens chanteurs Jean-Baptiste Pène Anne
            Serrano et Antoine du Boucher.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg">
          <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
            Merci à Violette Faure et son premier groupe d’amis chanteurs ainsi
            qu’à Dominique Daridole et sa muse Liliane pour leur aide et soutien
            constant. Enfin, merci aux chanteurs qui ont participé avec autant
            d’assiduité qu’ils ont pu aux 11 répétitions que nous avons faites
            entre novembre et avril ; Véronique, Rachel, Fabienne, Catherine et
            Philippe, Céline, Dominique, Héléne , Patricia, Véronik, Aline,
            Valérie , Olivier, Bruno et Patrick.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default ValeursCards;
