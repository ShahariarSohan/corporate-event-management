import React from "react";

import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import Banner4 from "../assets/banner4.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={Banner1} className="w-full h-[600px]" />
          <div className="hero-content left-1/4 top-1/2 flex justify-center -translate-y-1/2 absolute text-white">
            <div className="">
              <h1 className="text-5xl font-bold">Investment Strategies</h1>
              <p className="py-6 max-w-md text-sm ">
                Join us for the premier annual technology conference where
                industry leaders, innovators, and entrepreneurs gather to
                discuss the latest advancements in AI, cloud computing, and
                cybersecurity.
              </p>
              <button className="btn bg-purple-900 text-white border-0">
                Book Now
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Banner2} className="w-full h-[600px]" />
          <div className="hero-content left-1/4 top-1/2 flex justify-center -translate-y-1/2 absolute text-white">
            <div className="">
              <h1 className="text-5xl font-bold">Finance Leaders Forum</h1>
              <p className="py-6 max-w-md text-sm ">
                Join us for the premier annual technology conference where
                industry leaders, innovators, and entrepreneurs gather to
                discuss the latest advancements in AI, cloud computing, and
                cybersecurity.
              </p>
              <button className="btn bg-purple-900 text-white border-0">
                Book Now
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Banner3} className="w-full h-[600px]" />
          <div className="hero-content left-1/4 top-1/2 flex justify-center -translate-y-1/2 absolute text-white">
            <div className="">
              <h1 className="text-5xl font-bold">Digital Workshop</h1>
              <p className="py-6 max-w-md text-sm ">
                Join us for the premier annual technology conference where
                industry leaders, innovators, and entrepreneurs gather to
                discuss the latest advancements in AI, cloud computing, and
                cybersecurity.
              </p>
              <button className="btn bg-purple-900 text-white border-0">
                Book Now
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={Banner4} className="w-full h-[600px]" />
          <div className="hero-content left-1/4 top-1/2 flex justify-center -translate-y-1/2 absolute text-white">
            <div className="">
              <h1 className="text-5xl font-bold">Tech Summit 2025</h1>
              <p className="py-6 max-w-md text-sm ">
                Join us for the premier annual technology conference where
                industry leaders, innovators, and entrepreneurs gather to
                discuss the latest advancements in AI, cloud computing, and
                cybersecurity.
              </p>
              <button className="btn bg-purple-900 text-white border-0">
                Book Now
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
};

export default Banner;
