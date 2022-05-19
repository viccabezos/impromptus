import React from "react";
import { songs } from "../../data/dataSaison";
import Footer from "../../layout/footer/Footer";

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
  // console.log("lalala", song);
  return (
    <div
      data-theme="mytheme"
      className=" flex flex-col items-center justify-center bg-white"
      id="original"
    >
      {/* SONG  */}
      <div class=" shadow-xl md:w-1/2">
        <div className=" card-body justify-start space-y-2">
          {/* <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          /> */}
          <div className="flex flex-col justify-start ">
            <h1 class="card-title text-3xl">{song.title}</h1>
            <div className="flex justify-between">
              <h3 className="font-medium">by {song.artist}</h3>
              <div class="badge badge-primary text-white text-lg">
                {song.langue}
              </div>
            </div>
            <span class="divider"></span>
            {song.phonetique ? (
              <div class="badge badge-secondary text-white text-lg">
                <a href="#phonetique">voir la version phonétique</a>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col space-y-4">
            {song.verses.map((verse) => (
              <>
                <p className="text-lg">{verse.verse}</p>
              </>
            ))}
          </div>

          <div class="card-actions justify-center" id="phonetique">
            <button class="btn btn-primary text-white">
              <a href="/chanter-saison-2022">
                <p>retourner a la liste de chansons</p>
              </a>
            </button>
          </div>
        </div>
        {song.phonetique ? (
          <div class="card-body">
            <div className="flex flex-col space-y-2">
              <div>
                {song.phonetique.map((header) => (
                  <h2 className="text-bold font-semibold text-2xl">
                    {header.title}
                  </h2>
                ))}
                <div class="badge badge-secondary text-white text-lg">
                  <a href="#original">voir la version originelle</a>
                </div>
                <span class="divider"></span>
              </div>
              <div className="flex flex-col space-y-2">
                {song.phonetique.map((verse) => (
                  <>
                    <p className="text-lg">{verse.verse}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* DESCRIPTION  */}
      <div class="shadow-xl flex flex-col items-center md:w-1/2">
        {song.description ? (
          <div className=" card-body justify-start space-y-2">
            <div className="flex flex-col justify-start ">
              <h2 className="font-semibold">Description:</h2>
              <p>{song.description}</p>
            </div>
            {song.phonetique ? (
              <div class="card-actions justify-center">
                <button class="btn btn-primary text-white">
                  <a href="/chanter-saison-2022">
                    <p>retourner a la liste de chansons</p>
                  </a>
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};
export default Song;
