import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/cards/Card";
import HeroSaison2022 from "../../components/hero/HeroSaison2022";
import { dataSaison } from "../../data/dataSaison";

export const getStaticProps = async () => {
  // const data = await dataSaison();
  // console.log("COUCOU", data);
  // return {
  //   props: {
  //     songs: res || null,
  //   },
  // };

  // const res = await dataSaison();
  // const data = res.json();

  return {
    props: {
      songsList: dataSaison || null,
    },
  };
};

export default function Chanter({ songsList }) {
  // const [songs, setSongs] = useState([]);
  // console.log(dataSaison);

  // useEffect(() => {
  //   const fetchSongs = async () => {
  //     const response = await fetch("api/saison2022");
  //     const data = await response.json();
  //     setSongs(data);
  //   };

  //   fetchSongs();
  // }, []);

  // console.log("songs useSTate", songs);
  console.log("hello", songsList);
  return (
    <div data-theme="mytheme">
      <div>
        <HeroSaison2022 />
      </div>
      <div></div>
      {/* <div className="flex flex-col items-center pb-20 gap-3 bg-primary/80">
        {songs.map((song) => (
          <Card data={song} key={song.title} />
        ))}
      </div> */}
    </div>
  );
}
