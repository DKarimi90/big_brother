import React from "react";
import { GiStoneCrafting, GiGraveFlowers, GiTombstone } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaCross, FaChurch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const servicesData = [
  {
    icon: <GiTombstone className="more-card" />,
    title: "Granite & Terrazzo Tombstones",
    description:
      "We design and construct durable granite and terrazzo tombstones that capture lasting memories. Our stones are polished, weather-resistant, and customized to reflect every cherished legacy.",
    link: "/packages/tombstones",
  },
  {
    icon: <GiStoneCrafting className="more-card" />,
    title: "Headstones & Memorials",
    description:
      "Whether simple or ornate, our headstones and memorials are crafted with precision and compassion. We ensure each design conveys dignity, honor, and timeless elegance.",

  },
  {
    icon: <MdDesignServices className="more-card" />,
    title: "Plaques & Inscriptions",
    description:
      "From marble plaques to engraved granite markers, we offer detailed craftsmanship and personalized inscriptions that tell every story beautifully and respectfully.",

  },
  {
    icon: <FaChurch className="more-card" />,
    title: "Pulpits & Church Décor",
    description:
      "We design and build high-quality terrazzo and granite pulpits, church altars, and memorial décor that blend durability with grace for sacred spaces.",

  },
  {
    icon: <GiGraveFlowers className="more-card" />,
    title: "Grave Restoration",
    description:
      "Restore old and weathered graves to their original splendor. Our team cleans, re-polishes, and repairs existing stones to preserve memories for generations.",

  },
  {
    icon: <FaCross className="more-card" />,
    title: "Custom Engravings & Crosses",
    description:
      "We craft custom crosses, lettering, and engraved portraits tailored to your design. Every detail is handled with artistry and care.",
   
  },
];

const Services = () => {
  return (
    <div name="services" className="w-full pt-10">
      <div className="">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-bold text-2xl text-(--primaryOne) md:text-4xl lg:text-6xl border-b mb-2">
            Our <span className="text-(--primary)">Services</span>
          </h1>
          <p className="text-center">
            Crafting elegant memorials that stand the test of time
          </p>
        </div>

        <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 mt-6">
          {servicesData.map((service, index) => (
            <div key={index} className="group">
              <div className=" h-full bg-(--secondary) p-2 rounded-md">
                <div className="text-5xl">{service.icon}</div>
                <div className="col-span-2 p-3 flex flex-col items-center">
                  <h1 className="text-2xl text-(--primary)">
                    {service.title}
                  </h1>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services;
