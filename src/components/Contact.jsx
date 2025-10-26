import React from "react";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Contact = () => {
  const navigate = useNavigate();

  const formSubmission = import.meta.env.VITE_FORM_SUBMISSION;

  return (
    <div name="contact" className="pt-24 px-4 md:px-16 lg:px-28">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-light tracking-wide text-gray-800">
          Get in Touch
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          We’re here to guide and support you during difficult moments. Reach
          out for assistance, inquiries, or arrangements.
        </p>
      </div>

      <form
        method="POST"
        action={formSubmission}
        className="grid lg:grid-cols-3 gap-8 items-start"
      >
        {/* Left panel with form */}
        <div className="lg:col-span-2 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Send Us a Message
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              className="w-full bg-gray-50 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="text"
              placeholder="First Name*"
              name="first_name"
              required
            />
            <input
              className="w-full bg-gray-50 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="text"
              placeholder="Last Name*"
              name="last_name"
              required
            />
            <input
              className="w-full bg-gray-50 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="email"
              placeholder="Email*"
              name="email"
              required
            />
            <input
              className="w-full bg-gray-50 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="number"
              placeholder="Phone*"
              name="phone"
              required
            />
          </div>

          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-gray-50 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              name="message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="uppercase tracking-wide btnTwo transition-all"
            onClick={() => alert('working on that feature')}
          >
            Send Message
          </button>
        </div>

        {/* Right panel */}
        <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 p-8 rounded-2xl shadow-md transform rotate-[1deg] hover:rotate-0 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Our Office
          </h2>
          <p className="text-gray-600 mb-4">
            We are located in <strong>Limuru</strong> — a peaceful place where
            we help families arrange dignified final farewells with compassion
            and care.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-800">Contact Info</h3>
            <div className="flex items-center mt-3 text-gray-700">
              <CiPhone className="text-2xl mr-2" />
              <span>0716 903 314</span>
            </div>
            <div className="flex items-center mt-2 text-gray-700">
              <FaWhatsapp className="text-2xl mr-2 text-green-600" />
              <span>0716 903 314</span>
            </div>
          </div>

          <p className="text-gray-500 mt-6 italic">
            “Every life deserves to be remembered beautifully.”
          </p>
        </div>
      </form>

      <div className="flex justify-center mt-8">
        <Link

        to='banner'
        smooth
          className="uppercase px-6 btnTwo"
        >
          Back to Top
        </Link>
      </div>
    </div>
  );
};

export default Contact;
