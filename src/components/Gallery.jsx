import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  const galleryItems = [
    { id: 1, image: "./gallery/one.jpeg", title: "Granite Tombstones" },
    { id: 2, image: "./gallery/two.jpeg", title: "Terrazzo Headstones" },
    { id: 3, image: "./gallery/three.jpeg", title: "Memorial Plaques" },
    { id: 4, image: "./gallery/four.jpeg", title: "Granite Pulpits" },
    { id: 5, image: "./gallery/five.jpeg", title: "Grave Restoration" },
    { id: 6, image: "./gallery/six.jpeg", title: "Custom Cross Designs" },
    { id: 7, image: "./gallery/seven.jpeg", title: "Custom Cross Designs" },
  ];

  return (
    <div name="gallery" className="w-full py-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {galleryItems.map((item, index) => (
            <div key={index} className="px-1">
              <div className="relative group rounded-lg shadow-md h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 duration-500 flex items-center justify-center">
                  <p className="text-white text-sm sm:text-lg md:text-2xl font-semibold opacity-0 group-hover:opacity-100 duration-700 text-center px-2">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
