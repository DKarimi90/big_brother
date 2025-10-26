import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      name="about"
      className="w-full bg-gray-100 py-12 px-4 md:px-8 lg:px-16 grid lg:grid-cols-2 gap-8 items-center"
    >
      {/* Left: Image */}
      <div className="relative flex justify-center items-center">
        <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <img
            src="/images/henry.jpeg"
            alt="Team at work - Big Brothers Grave Services"
            className="object-cover w-full h-[400px] md:h-[500px] transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Optional decorative accent */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-300/40 rounded-full blur-2xl hidden md:block"></div>
      </div>

      {/* Right: Text */}
      <div className="text-gray-800">
        <p className="text-lg text-orange-500 font-semibold mb-2">About Us</p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight">
          Honoring Lives with Dignity and Compassion
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
          At{" "}
          <span className="font-semibold text-gray-900">
            Big Brothers Grave Services
          </span>
          , we’re committed to helping families create lasting memorials that
          celebrate love, legacy, and remembrance. Every service we offer is
          guided by compassion, craftsmanship, and respect.
        </p>

        <ul className="space-y-3 text-base md:text-lg text-gray-700">
          <li>
            <strong>Grave Maintenance:</strong> We ensure each resting place
            remains clean, well-tended, and beautiful year-round.
          </li>
          <li>
            <strong>Headstone Installation:</strong> Skilled experts install and
            restore headstones with unmatched precision and care.
          </li>
          <li>
            <strong>Floral Arrangements:</strong> We offer custom floral
            tributes and seasonal placements to honor cherished memories.
          </li>
          <li>
            <strong>Grave Landscaping:</strong> From trimming grass to planting
            flowers, we cultivate serenity and respect.
          </li>
          <li>
            <strong>Memorial Planning Support:</strong> Our compassionate team
            guides families in creating deeply personal spaces of remembrance.
          </li>
        </ul>

        <div className="mt-8">
          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Let’s Engage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
