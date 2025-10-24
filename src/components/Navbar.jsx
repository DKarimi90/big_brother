import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import {IoMdCall} from "react-icons/io"
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa6";



const Navbar = () => {
const [showMenu, setShowMenu] = useState(false)
const [scroll, setScroll] = useState(false);

  const links = [
    { title: "Home", url: "banner" },
    { title: "About Us", url: "about" },
    { title: "Services", url: "services" },
    { title: "Pricing", url: "pricing" },
    { title: "Testimonials", url: "testimonials" },
    { title: "FAQs", url: "faq" },
    { title: "Contact", url: "contact" },
  ];
  const socials = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/p/Big-Brothers-Enterprise-100089368881036/",

      bgColor: "bg-blue-600",
      color: "text-white",
    },
    {
      icon: <FaXTwitter />,

      bgColor: "bg-sky-500",
      color: "text-white",
    },
    {
      icon: <FaLinkedinIn />,

      bgColor: "bg-[#0077B5]",
      color: "text-white",
    },
    // {
    //   icon: <FaWhatsapp />,

    //   bgColor: "bg-[#00b54b]",
    //   color: "text-white",
    // },
    {
      icon: <FaPinterestP />,

      bgColor: "bg-[#e21d1d]",
      color: "text-white",
    },
  ];


  const toggleMobileMenu = () => {
    setShowMenu(prev => !prev)
  }

useEffect(() => {
  // Scroll handler
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // Attach scroll listener
  window.addEventListener("scroll", handleScroll);

  // Cleanup when component unmounts
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div
      className={`w-full fixed h-16 md:h-42 Z-50 ${
        !scroll ? "bg-(--secondary)" : "bg-white"
      } fixed top-0`}
    >
      {/* desktop */}

      <div className="w-full h-full items-center max-w-[1200px] mx-auto hidden md:flex justify-between px-2 md:px-0">
        {/* logo */}
        <div className="w-[250px] cursor-pointer">
          <Link to="banner">
            <img src="./images/big_brother.png" />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 justify-end">
            <div className="flex items-center">
              <span>
                <IoMdCall />
              </span>
              : +254 - 903 - 314
            </div>
            <div className="flex items-center">
              <span>
                <MdEmail />
              </span>
              : ruthmwathi9@gmail.com
            </div>
          </div>
          <div className="h-0.5 w-full bg-(--primaryOne) my-2"></div>
          <div className=" flex gap-2">
            {links.map((link, index) => (
              <div className="cursor-pointer" key={index}>
                <Link
                  to={link.url}
                  smooth={true}
                  spy={true}
                  activeClass="text-(--primaryOne) border-b"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-center gap-2">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-125 duration-700 p-2 rounded-full ${social.bgColor} ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href="https://wa.me/254716903314?text=Thank%20you%20for%20contacting%20Big%20Brothers%20Enterprise"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btnOne">WhatsApp</button>
            </a>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="fixed md:hidden z-60 top-0 left-0 w-full">
        {/* Toggle Button */}
        <div className="flex">
          <div className="px-2">
            <Link onClick={toggleMobileMenu} to={"banner"}>
              <img
                src="./images/big_brother.png"
                alt="Big Brother Logo"
                className="w-[100px]"
              />
            </Link>
          </div>

          <div className="flex text-(--primaryOne) text-xs pl-4 flex-col items-center  justify-center">
            <div className="flex items-center">
              <span>
                <IoMdCall />
              </span>
              : +254 - 903 - 314
            </div>
            <div className="flex items-center">
              <span>
                <MdEmail />
              </span>
              : ruthmwathi9@gmail.com
            </div>
          </div>

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
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 w-[50%] left-0 bg-(--secondary) h-screen md:hidden transition-transform duration-700  ${
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
                <Link
                  onClick={toggleMobileMenu}
                  key={index}
                  to={mobile_link.url}
                  smooth={true}
                  spy={true}
                  activeClass="text-(--primaryOne)"
                >
                  {mobile_link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>
              <div className="flex justify-center gap-1">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:scale-125 duration-700 p-2 rounded-full ${social.bgColor} ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://wa.me/254716903314?text=Thank%20you%20for%20contacting%20Big%20Brothers%20Enterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btnOne">WhatsApp</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
