function Carousel2() {
  return (
    <div>
      <div className="carousel w-full gap-2 ">
        <div id="item1" className="carousel-item w-auto">
          <img src="/images/groupe1.jpg" className="h-96 w-auto" />
        </div>
        <div id="item2" className="carousel-item w-auto">
          <img src="/images/groupe2.jpg" className="h-96 w-auto" />
        </div>
        <div id="item3" className="carousel-item w-auto">
          <img src="/images/groupe3.jpg" className="h-96 w-auto" />
        </div>
        <div id="item4" className="carousel-item w-auto">
          <img src="/images/groupe4.jpg" className="h-96 w-auto" />
        </div>
        <div id="item5" className="carousel-item w-auto">
          <img src="/images/groupe5.jpg" className="h-96 w-auto" />
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:w-full lg:py-2 ">
        <a href="#item1" className="btn btn-ghost text-gray-500 ">
          &bull;
        </a>
        <a href="#item4" className="btn btn-ghost text-gray-500">
          &bull;
        </a>
        <a href="#item5" className="btn btn-ghost text-gray-500">
          &bull;
        </a>
      </div>
    </div>
  );
}

export default Carousel2;
