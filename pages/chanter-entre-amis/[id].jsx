import { useRouter } from "next/router";
import React from "react";
import dataSaison from "../../data/dataSaison";

const Song = ({}) => {
  const router = useRouter();
  return (
    <div data-theme="mytheme">
      <p>SONG</p>
      <p>{song.title}</p>
    </div>
  );
};
export default Song;

export const getStaticPaths = async () => {
  const data = dataSaison.songs;

  const paths = data.map((song) => {
    return {
      params: { id: song.title },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStathicProps = async (context) => {
  const id = context.params.id;
  const data = `dataSaison/${id}`;

  return {
    props: { song: data },
  };
};
