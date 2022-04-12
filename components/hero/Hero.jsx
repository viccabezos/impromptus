import React from "react";

function Hero() {
  return (
    <div
      data-theme="mytheme"
      className="hero min-h-screen bg-primary-focus"
      //   style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Les chanteurs impromptus</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white">
            <a href="/chanter">CHANTER</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
