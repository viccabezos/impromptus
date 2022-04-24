import React from "react";

function Carousel() {
  return (
    <div className="carousel w-full h-96">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://www.surfholidays.com/assets/images/blog/2013-10-08--bars-in-hossegor-0.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f4/d1/f6/hotel-de-la-plage.jpg?w=900&h=700&s=1"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://livefrance.webcam/wp-content/uploads/2021/08/hossegor-webcam-1536x1024.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
