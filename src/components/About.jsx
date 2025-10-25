import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  grid lg:grid-cols-2 bg-gray-100 mt-4 md:mt-10 px-1"
    >
      {/* image */}
      <div className="">
        <img src="/images/henry.jpeg" className=" object-cover -rotate" />
      </div>

      {/* text */}
      <div className="w-full pt-4 lg:max-w-[700px] p-6">
        <p className="text-lg text-(--primaryOne) font-semibold">About Us</p>
        <div className="mt-2">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold">
            Honoring Lives with Dignity and Compassion
          </p>
        </div>
        <div className="mt-4">
          <ul className="list-disc list-inside space-y-2">
            At{" "}
            <span className="font-semibold">Big Brothers Grave Services</span>,
            we are committed to helping families create lasting memorials that
            honor and celebrate the lives of their loved ones.
            <li className="pl-4">
              <strong>Grave Maintenance:</strong> We ensure each resting place
              remains clean, well-tended, and beautiful year-round.
            </li>
            <li className="pl-4">
              <strong>Headstone Installation:</strong> Our skilled team installs
              and restores headstones with precision and care.
            </li>
            <li className="pl-4">
              <strong>Floral Arrangements:</strong> We provide custom flower
              placement and seasonal tributes to honor memories.
            </li>
            <li className="pl-4">
              <strong>Grave Landscaping:</strong> From trimming grass to
              planting flowers, we maintain a peaceful, respectful environment.
            </li>
            <li className="pl-4">
              <strong>Memorial Planning Support:</strong> We guide families in
              personalizing memorial spaces with compassion and understanding.{" "}
            </li>
            <div className="mt-6">
              <Link to="contact" className="btnTwo" spy={true} smooth={true}>
                Let's Engage
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
