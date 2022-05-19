import React from "react";

function ValeursCards() {
  return (
    <div data-theme="mytheme" className="flex flex-col mt-20">
      <h2 className="text-center text-3xl font-bold text-primary mt-10">
        Remerciements
      </h2>
      <div className="flex flex-col justify-center text-justify pb-10 px-5 md:px-20">
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
          constant.
        </p>
        <p className="text-md py-4">
          Enfin merci aux chanteurs qui ont participés avec autant d’assiduité
          qu’ils ont pu aux 11 répétitions que nous avons faite entre Nov et
          Avril… Anne Sophie, Elisa, Marie Thérèse, Stella, Véronique, Rachel,
          Fabienne, Catherine et Philippe, Céline, Dominique, Héléne, Patricia,
          Véronik, Aline, Valérie , Olivier, Bruno ,Patrick Jean Michel…
        </p>
      </div>
    </div>
  );
}

export default ValeursCards;
