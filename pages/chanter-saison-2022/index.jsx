import React from "react";
import Card from "../../components/cards/Card";
import HeroSaison2022 from "../../components/hero/HeroSaison2022";
import { songs } from "../../data/dataSaison";
import Footer from "../../layout/footer/Footer";

export const getStaticProps = async () => {
  return {
    props: {
      songsList: songs || null,
    },
  };
};

export default function Chanter({ songsList }) {
  // console.log("hello", songsList);
  return (
    <div data-theme="mytheme" className="flex flex-col justify-center">
      <div className="shadow-md">
        <HeroSaison2022 />
      </div>
      <div></div>
      <div className="flex flex-col items-center pb-20 gap-3 bg-primary/80">
        {songsList.map((song) => (
          <Card {...song} id={song.number} key={song.id} />
        ))}
      </div>
      <div className="p-5 flex flex-col justify-center items-center ">
        <button className="btn btn-secondary text-white shadow-md sm:w-1/2">
          <a href="/chanter-entre-amis">CHANSONS entre amis</a>
        </button>
      </div>
      <Footer />
    </div>
  );
}
