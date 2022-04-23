import React from "react";

function Member({ data }) {
  console.log("Hello", data);
  return (
    <>
      {data.map(({ name, poste }) => {
        <div className="flex justify-center items-center flex-col md:flex-row justify evenly">
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center flex flex-col items-center">
              <p className="text-2xl text-gray-800 dark:text-white">{name}</p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                {poste}
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                « J&#39;ai à mon actif 8 albums et plus de 700 concerts. Je suis
                aujourd&#39;hui, médiateur culturel dans les écoles du
                département et musicien dans plusieurs formations, telles que
                Repris de Justesse, Vends du Vent, Tapas en bal ou Jota B. »
              </p>
            </div>
          </div>
        </div>;
      })}
    </>
  );
}

export default Member;
