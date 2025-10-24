import React, { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false)

  const links = [
    { title: "Home", url: "banner" },
    { title: "About Us", url: "about" },
    { title: "Services", url: "services" },
    { title: "Pricing", url: "pricing" },
    { title: "Testimonials", url: "testimonials" },
    { title: "FAQs", url: "faq" },
    { title: "Contact", url: "contact" },
  ];

  const toggleMobileMenu = () => {
    setShowMenu(prev => !prev)
  }
  return (
    <div className="w-full h-22 md:bg-gray-300 sticky top-0">
      {/* desktop */}
      <div className="w-full h-full items-center max-w-[1200px] mx-auto hidden md:flex justify-between px-2 md:px-0">
        {/* logo */}
        <div className="w-[120px] cursor-pointer">
          <Link to="banner">
            <img src="./images/big_brother.png" />
          </Link>
        </div>
        <div className=" flex gap-2">
          {links.map((link, index) => (
            <div key={index}>
              <Link
                to={link.url}
                className="cursor-pointer"
                smooth={true}
                spy={true}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* mobile */}
      <div className="fixed md:hidden z-60 top-0 left-0 w-full">
        {/* Toggle Button */}
        <div
          className="absolute right-4 top-4 text-black"
          onClick={toggleMobileMenu}
        >
          {showMenu ? (
            <RiCloseLargeLine size={20} />
          ) : (
            <CiMenuFries size={30} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 w-[50%] left-0 bg-gray-200 h-screen md:hidden transition-transform duration-700 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu Content */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="p-4 flex justify-start">
              <Link onClick={toggleMobileMenu} to={"banner"}>
                <img
                  src="./images/big_brother.png"
                  alt="Big Brother Logo"
                  className="w-[100px]"
                />
              </Link>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 p-4">
              {links.map((mobile_link, index) => (
                <Link onClick={toggleMobileMenu} key={index} to={mobile_link.url}>
                  {mobile_link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
