import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function CardSaison({ id, number, title }) {
  return (
    <div className="w-screen sm:w-1/2 mt-5 px-5 flex flex-col justify-center">
      <Link href={`/chanter-saison-2022/${id}`}>
        <a>
          <div className="bg-white p-3 rounded-md flex items-center gap-5 shadow-md hover:shadow-lg">
            <p className="ml-5 text-3xl">{number} </p>
            <p className="text-xl">{title} </p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default CardSaison;
