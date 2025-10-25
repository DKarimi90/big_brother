import React from "react";
import { Link } from "react-scroll";
import Gallery from "./Gallery";

const Banner = () => {
  return (
    <div name="banner" className="">
      <div className="page_top_space relative">
        <video
          src="./videos/bannervid.mp4"
          className="w-full h-screen md:h-[70vh] object-cover pointer-events-none"
          autoPlay
          muted
          loop
        />
        {/* overlay - set lower z-index */}
        <div className="top-0 absolute flex flex-col pt-60 md:pt-0 items-center md:justify-center left-0 h-full w-full z-0">
          <div className="flex flex-col px-2">
            <div className="flex flex-col items-center bg-gray-900/60 px-2 md:px-8 py-4 rounded-2xl">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-(--secondary)">
                Big Brothers Enterprise
              </h1>
              <p className="px-4 text-center text-xl md:text-2xl lg:text-4xl text-orange-400">
                Dealers in construction of memorial tombstones,
                headstones,(Terrazzo & Granite), plaques & Pulpits
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="w-full flex justify-center gap-4 mt-6">
            <Link to={"services"} smooth="true" duration={700} className="btnTwo">Learn More</Link>
            <Link to={"contact"} smooth="true" duration={700} className="btnThree">Get Quote</Link>
          </div>

          <div className="bottom-0 absolute">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
