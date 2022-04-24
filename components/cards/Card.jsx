import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Card({ data }) {
  const router = useRouter();
  console.log("router", router);
  const { song } = router.query;
  console.log(router.query);
  return (
    // <>
    //   <div
    //     data-theme="mytheme"
    //     className="card card-compact flex w-96 bg-base-100 shadow-xl"
    //     key={data.title}
    //   >
    //     <div className="card-body flex flex-row ">
    //       <button className="btn btn-primary">
    //         <Link
    //           href={`/chanter-saison-2022/[song]`}
    //           as={`/chanter-saison-2022/${song}`}
    //         >
    //           <a href="">{data.number}</a>
    //         </Link>
    //       </button>
    //       <h2 className="card-title">{data.title}</h2>
    //     </div>
    //   </div>
    // </>
    <div className="w-screen sm:w-1/2 mt-5 px-5 flex flex-col justify-center">
      <Link href="/">
        <a>
          <div className="bg-white p-3 rounded-md flex items-center gap-5 shadow-md hover:shadow-lg">
            <p className="ml-5 text-3xl">{data.number} </p>

            <p className="text-xl">{data.title} </p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
