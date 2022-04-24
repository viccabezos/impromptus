import { useRouter } from "next/router";
import React from "react";
import { songs } from "../../data/dataSaison";

export const getStaticProps = async ({ params }) => {
  const songsLists = songs.filter((p) => p.i === params.id);

  return {
    props: {
      song: songsLists[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = songs();
  paths.then((data) => console.log("daaatA", data));

  return {
    paths,
    fallback: false,
  };
};

const Song = ({ song }) => {
  console.log({ song });
  return (
    <div data-theme="mytheme">
      <p>SONG : {song}</p>

      <p>{song.title}</p>
    </div>
  );
};
export default Song;
