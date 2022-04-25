import React from "react";
import { songs } from "../../data/dataSaison";

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      song: songs.find((s) => s.number.toString() === params.id),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = songs.map((song) => {
    return {
      params: { id: song.number.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Song = ({ song }) => {
  console.log("lalala", song);
  return (
    <div data-theme="mytheme">
      <p>SONG : </p>
      <pre>{JSON.stringify(song, null, 2)}</pre>

      <p>{song.title}</p>
    </div>
  );
};
export default Song;
