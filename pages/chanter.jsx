import React from "react";
import GetCards from "../components/cards/GetCards";
import HeroSong from "../components/hero/HeroSong";
import { useState } from "react";
import dataSaison from "../data/dataSaison";
import dataPartage from "../data/dataPartage";

function Chanter() {
  const [data, setData] = useState([]);

  function handleSaisonClick() {
    const dataCards = dataSaison.songs;
    if (dataCards.length > 0) {
      setData(dataCards);
      console.log("HELLO", dataCards);
    }
  }

  function handlePartageClick() {
    const dataCards = dataPartage.songs;
    if (dataCards.length > 0) {
      setData(dataCards);
      console.log("HELLO", dataCards);
    }
  }

  return (
    <div>
      <div>
        <HeroSong
          handleSaisonClick={handleSaisonClick}
          handlePartageClick={handlePartageClick}
        />
      </div>
      {data.length > 0 && (
        <div>
          <GetCards data={data} />
        </div>
      )}
    </div>
  );
}

export default Chanter;
