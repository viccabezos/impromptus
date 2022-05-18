import React from "react";
import groupe1 from "../../public/images/groupe1.jpg";
import groupe2 from "../../public/images/groupe2.jpg";
import groupe3 from "../../public/images/groupe3.jpg";
import groupe4 from "../../public/images/groupe4.jpg";
import groupe5 from "../../public/images/groupe5.jpg";
import Image from "next/image";
function Carousel() {
  return (
    <div className="bg-secondary  justify-center items-center flex ">
      <div className="carousel w-auto h-96">
        <div
          id="slide1"
          className="carousel-item relative w-full  items-center justify-center"
        >
          <Image src={groupe1} className="w-full h-auto " />
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
          <Image src={groupe2} className="" />
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
          <Image src={groupe3} className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image src={groupe4} className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
