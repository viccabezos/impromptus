import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/cards/Card";
import HeroSaison2022 from "../../components/hero/HeroSaison2022";
import { songs } from "../../data/dataSaison";

export const getStaticProps = async () => {
  return {
    props: {
      songsList: songs || null,
    },
  };
};

export default function Chanter({ songsList }) {
  console.log("hello", songsList);
  return (
    <div data-theme="mytheme">
      <div>
        <HeroSaison2022 />
      </div>
      <div></div>
      <div className="flex flex-col items-center pb-20 gap-3 bg-primary/80">
        {songsList.map((song) => (
          <Card {...song} key={song.id} />
        ))}
      </div>
    </div>
  );
}
