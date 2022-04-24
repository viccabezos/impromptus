import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/cards/Card";
import HeroSaison2022 from "../../components/hero/HeroSaison2022";

export default function Chanter() {
  // const [data, setData] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("api/saison2022");
      const data = await response.json();
      setSongs(data);
    };

    fetchSongs();
  }, []);

  console.log("songs", songs);
  return (
    <div data-theme="mytheme">
      <div>
        <HeroSaison2022 />
      </div>
      <div className="flex flex-col items-center pb-20 gap-3 bg-primary/80">
        {songs.map((song) => (
          <Card data={song} key={song.title} />
        ))}
      </div>
      {/* {songs.map((song) => (
        <p>{song.title} </p>
      ))} */}
    </div>
  );
}
