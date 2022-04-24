import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Card({ data }) {
  const router = useRouter();
  console.log("router", router);
  const { song } = router.query;
  console.log(router.query);
  return (
    <>
      <div
        data-theme="mytheme"
        className="card w-96 bg-base-100 shadow-xl"
        key={data.title}
      >
        {/* <figure>
          <img
            src="https://api.lorem.space/image/album?w=400&h=225"
            alt="Shoes"
          />
        </figure> */}
        <div className="card-body ">
          <div className="flex  justify-between">
            <h2 className="card-title">{data.title}</h2>
            {/* 
            <div className="bg-secondary rounded-full p-5 text-2xl">
              <p>{data.number}</p>
            </div> */}
          </div>

          <div className="card-actions justify-end">
            {/* <p> {data.title}</p> */}

            {/* <div className="badge badge-secondary">
              <p>{number}</p>
            </div> */}
          </div>
          {/* <div className="card-actions justify-end">
            <p> {data.artist}</p>

            <div className="badge badge-outline">{data.langue} </div>
          </div> */}
          <button className="btn btn-primary">
            <Link
              href={`/chanter-saison-2022/[song]`}
              as={`/chanter-saison-2022/${song}`}
            >
              <a href="">{data.number}</a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
