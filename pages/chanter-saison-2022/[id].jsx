import React from "react";
import Footer from "../../layout/footer/Footer";
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
  // console.log("lalala", song);
  return (
    <div
      data-theme="mytheme"
      className=" flex flex-col items-center justify-center bg-white"
      id="original"
    >
      {/* SONG  */}
      <div class="shadow-lg md:w-1/2">
        <div className="card-body justify-start space-y-2">
          <div className="flex flex-col justify-start ">
            <h1 class="card-title text-3xl">{song.title}</h1>

            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="font-medium">by {song.artist}</h3>
                {song.phonetique ? (
                  <p className="text-sm">version originelle</p>
                ) : null}
              </div>
              <div class="badge badge-secondary text-white text-lg">
                {song.langue}
              </div>
            </div>
            {song.phonetique ? (
              <div class="btn btn-primary text-white mt-3 rounded-full lowercase btn-sm">
                <a href="#phonetique">voir la version phonétique </a>
              </div>
            ) : null}
            <span class="divider"></span>
            <div className="flex flex-col space-y-5 text-sm sm:text-base">
              {song.strophes.map(function (strophe) {
                // console.log("strophe", strophe);
                return (
                  <div className="flex flex-col">
                    {strophe.strophe.map(function (verse) {
                      return (
                        <div className="flex flex-col">
                          <p className="font-semibold">{verse.refrain} </p>
                          <p>{verse.verse} </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          <div class="card-actions justify-center" id="phonetique">
            <button class="btn btn-primary text-white">
              <a href="/chanter-saison-2022">
                <p>retourner a la liste de chansons</p>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="shadow-lg mt-5 md:w-1/2">
        {song.phonetique ? (
          <div class="card-body">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col justify-start ">
                <h1 class="card-title text-3xl">{song.title}</h1>
                <p>version phonétique</p>
                <div class="btn btn-primary text-white mt-3 rounded-full lowercase btn-sm">
                  <a href="#original">voir la version originelle</a>
                </div>

                <span class="divider"></span>
              </div>

              <div className="flex flex-col space-y-2">
                {song.phonetique.map(function (strophe) {
                  // console.log("strophe", strophe);
                  return (
                    <div className="flex flex-col">
                      {strophe.strophe.map(function (verse) {
                        return (
                          <div className="flex flex-col">
                            <p className="font-semibold">{verse.refrain} </p>
                            <p>{verse.verse} </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div class="shadow-lg mt-5 md:w-1/2">
        {song.traduction ? (
          <div class="card-body">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col justify-start ">
                <h1 class="card-title text-3xl">{song.title}</h1>
                <p>version traduction française</p>
                <div class="btn btn-primary text-white mt-3 rounded-full lowercase btn-sm">
                  <a href="#original">voir la version originelle</a>
                </div>

                <span class="divider"></span>
              </div>

              <div className="flex flex-col space-y-2">
                {song.traduction.map(function (strophe) {
                  // console.log("strophe", strophe);
                  return (
                    <div className="flex flex-col">
                      {strophe.strophe.map(function (verse) {
                        return (
                          <div className="flex flex-col">
                            <p className="font-semibold">{verse.refrain} </p>
                            <p>{verse.verse} </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* DESCRIPTION  */}

      <div class="flex flex-col items-center md:w-1/2 shadow-lg mb-5">
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
