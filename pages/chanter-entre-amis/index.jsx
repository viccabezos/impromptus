import React from "react";
import CardPartage from "../../components/cards/CardPartage";
import HeroEntreAmis from "../../components/hero/HeroEntreAmis";
import { songs } from "../../data/dataPartage";
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
        <HeroEntreAmis />
      </div>
      <div></div>
      <div className="flex flex-col items-center pb-20 gap-3 bg-primary/80">
        {songsList.map((song) => (
          <CardPartage {...song} id={song.number} key={song.id} />
        ))}
      </div>
      <div className="p-5 flex flex-col justify-center items-center ">
        <button className="btn btn-secondary text-white shadow-md sm:w-1/2">
          <a href="/chanter-entre-amis">CHANSONS saison 2022</a>
        </button>
      </div>
      <Footer />
    </div>
  );
}
