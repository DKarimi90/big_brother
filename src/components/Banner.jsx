import React from "react";
import { Link } from "react-scroll";
import Gallery from "./Gallery";

const Banner = () => {
  return (
    <section
      name="banner"
      className="relative w-full h-screen md:h-[80vh] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        src="./videos/bannervid.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-orange-400 drop-shadow-lg animate-fadeIn">
          Big Brothers Enterprise
        </h1>

        <p className="text-lg md:text-2xl lg:text-3xl text-gray-100 mb-8 leading-relaxed">
          Specialists in{" "}
          <span className="text-orange-300 font-semibold">
            Memorial Tombstones
          </span>
          , Headstones (Terrazzo & Granite), Plaques & Pulpits
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="services"
            smooth={true}
            duration={700}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="px-6 py-3 border-2 border-orange-400 hover:bg-orange-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* Gallery at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <Gallery />
      </div>
    </section>
  );
};

export default Banner;
