import React from "react";

function Card({ title, artist, verses, number, langue }) {
  //   console.log(title, number);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/album?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <div className="flex  justify-between">
            <h2 className="card-title">{title}</h2>

            <div className="badge badge-secondary">
              <p>{number}</p>
            </div>
          </div>

          <div className="card-actions justify-end">
            <p> {title}</p>

            {/* <div className="badge badge-secondary">
              <p>{number}</p>
            </div> */}
          </div>
          <div className="card-actions justify-end">
            <p> {artist}</p>

            <div className="badge badge-outline">{langue} </div>
          </div>
          <button className="btn btn-primary">CHANTER</button>
        </div>
      </div>
    </>
  );
}

export default Card;
