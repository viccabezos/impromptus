function HeroSaison2022({ handleSaisonClick, handlePartageClick }) {
  return (
    <>
      <section
        data-theme="mytheme"
        className="mx-auto max-w-screen-xl pb-10 px-4 sm:px-8"
      >
        <div className="text-center space-y-4 pt-10">
          <h1 className="text font-bold text-3xl md:text-4xl">
            Notre liste de chansons
            <span className="text-primary"> saison 2022</span>
          </h1>
          {/* <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            facilis similique explicabo id recusandae nulla consequatur impedit
            laborum. Repudiandae nisi dolore sit cum eveniet sequi voluptatum
            sed doloremque, fugit explicabo!
          </p> */}
        </div>
        {/* <div className="mt-12 justify-center items-center space-x-6 flex">
          <button className="btn btn-primary" onClick={handleSaisonClick}>
            saison 2022
          </button>
          <button className="btn btn-secondary" onClick={handlePartageClick}>
            Chanter entre amis
          </button>
        </div> */}
      </section>
    </>
  );
}

export default HeroSaison2022;
