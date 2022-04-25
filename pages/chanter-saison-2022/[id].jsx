import React from "react";
import { songs } from "../../data/dataSaison";

// export const getStaticProps = async ({ params }) => {
//   const songsLists = songs.filter((p) => p.i === params.id);

//   return {
//     props: {
//       song: songsLists[0],
//     },
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const songsList = songs.map((song) => {
//     song.number === params.id;
//   });

//   return {
//     props: {
//       song: data,
//     },
//   };
// };

// export const getStaticProps = async (context) => {
//   console.log(" cont", context);
//   const id = context.params.id;
//   console.log("coucou", id);
//   return {
//     props: await { song: data },
//   };
// };

export const getStaticProps = async ({ params }) => {
  const songsList = songs.map((song) => {
    song.number === params.id;
  });

  return {
    props: {
      song: songsList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = songs.map((song) => {
    return {
      params: { id: song.number.toString() },
    };
  });

  console.log("YO", paths);
  return {
    paths,
    fallback: false,
  };
};

const Song = ({ song }) => {
  console.log("lalala", song);
  return (
    <div data-theme="mytheme">
      <p>SONG : {song}</p>

      <p>{song.title}</p>
    </div>
  );
};
export default Song;
