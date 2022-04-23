import React from "react";
import Card from "./Card";
function GetCards({ data }) {
  //   console.log("SONGG", data.songs);
  console.log("data", data);
  return (
    <div className="flex flex-col justify-center items-center">
      {data.map(({ title, artist, verses, number, langue }) => (
        <>
          <Card
            title={title}
            artist={artist}
            verses={verses}
            number={number}
            langue={langue}
            key={number}
          />
        </>
      ))}
    </div>
  );
}

export default GetCards;
