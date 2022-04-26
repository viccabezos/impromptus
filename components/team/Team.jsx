import React from "react";
import teamData from "../../data/teamData";
import Image from "next/image";

function Team() {
  return (
    <div data-theme="mytheme" className="p-8 bg-secondary shadow">
      <div className=" py-5 flex flex-col gap-2 ">
        <h2 className="text-center text-3xl font-bold text-primary ">
          Nos musiciens
        </h2>
        <p className="text-center text-xl font-normal text-white">
          Nous reprenons –avec vous- des chants d’un répertoire éclectique qui
          doit « Parler-Chanter » au plus grand nombre.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row md:items-center justify evenly gap-3 mt-5">
        {teamData.map((member, i) => (
          <div className="p-4 bg-white rounded-md shadow-md" key={i}>
            <div className="text-center mb-4 opacity-90">
              <Image
                src={member.image}
                alt={member.altImage}
                height={140}
                width={140}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
            <div className="text-center ">
              <p className="text-lg text-primary font-medium">{member.name}</p>
              <p className="text-md text-neutral font-light">{member.poste}</p>
              <p className="text-sm text-neutral max-w-xs py-4 font-light border-t border-gray-200 mt-5">
                {member.description}
              </p>
            </div>
            <div className="pt-4 flex border-t w-44 mx-auto text-primary justify-center">
              <a href={member.social}>
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="hover:text-primary transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
