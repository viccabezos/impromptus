import React from "react";
import HeroSong from "../../components/hero/HeroSaison2022";
import { useState } from "react";
import dataSaison from "../../data/dataSaison";
import dataPartage from "../../data/dataPartage";
import Card from "../../components/cards/Card";

export default function Chanter() {
  // const [data, setData] = useState([]);
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    const response = await fetch("api/saison2022");
    const data = await response.json();
    setSongs(data);
  };

  // function handleSaisonClick() {
  //   const dataCards = dataSaison.songs;
  //   if (dataCards.length > 0) {
  //     setData(dataCards);
  //     console.log("HELLO", dataCards);
  //   }
  // }

  // function handlePartageClick() {
  //   const dataCards = dataPartage.songs;
  //   if (dataCards.length > 0) {
  //     setData(dataCards);
  //     console.log("HELLO", dataCards);
  //   }
  // }

  return (
    <div data-theme="mytheme">
      <div>
        <HeroSong
          handleSaisonClick={fetchSongs}
          // handlePartageClick={handlePartageClick}
        />
      </div>

      {/* <div className="flex flex-col justify-center items-center pb-20 gap-5">
        {data.map((song) => (
          <Card data={song} key={song.title} />
        ))}
      </div> */}
      <div className="flex flex-col justify-center items-center pb-20 gap-5">
        {songs.map((song) => (
          <Card data={song} key={song.title} />
        ))}
      </div>
    </div>
  );
}
