import { useRouter } from "next/router";
import React from "react";
import dataSaison from "../../data/dataSaison";

// Song.getInitialProps = async ({ query }) => {
//   const { song } = query;
//   return {
//     song,
//   };
// };

const Song = ({ song }) => {
  // const router = useRouter();
  // const { song } = router.query;
  console.log({ song });
  return (
    <div data-theme="mytheme">
      <p>SONG : {song}</p>

      <p>{song.title}</p>
    </div>
  );
};
export default Song;

export const getStaticPaths = async () => {
  const songs = await fetch(dataSaison.songs);
  console.log({ dataSaison });
  const paths = songs.map((song) => {
    return {
      params: { title: song.title },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const title = context.params.title;
  const res = fetch(`dataSaison/${id}`);
  const data = await res.json();
  return {
    props: { song: data },
  };
};
