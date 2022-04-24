import React from "react";
import Image from "next/image";
import ukraine from "../../public/images/ukraine.webp";

function SpecialEvent() {
  return (
    <div data-theme="mytheme" className="bg-primary">
      <p>hello</p>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="flex h-20 w-20">
          <Image src={ukraine} layout="fill" alt="concert" />
          {/* <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          /> */}
        </figure>
        {/* <div>
          <img
            src="https://api.lorem.space/image/album?w=400&h=225"
            alt="Shoes"
          />
        </div> */}

        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialEvent;
