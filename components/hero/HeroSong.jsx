function HeroSong({ handleSaisonClick, handlePartageClick }) {
  return (
    <>
      <section className="mt-24 mx-auto max-w-screen-xl pb-24 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Notre liste de
            <span className="text-indigo-600"> chansons</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            facilis similique explicabo id recusandae nulla consequatur impedit
            laborum. Repudiandae nisi dolore sit cum eveniet sequi voluptatum
            sed doloremque, fugit explicabo!
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <button className="btn btn-primary" onClick={handleSaisonClick}>
            saison 2022
          </button>
          <button className="btn btn-secondary" onClick={handlePartageClick}>
            Partage
          </button>
        </div>
      </section>
    </>
  );
}

export default HeroSong;
