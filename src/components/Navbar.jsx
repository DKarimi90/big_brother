import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {

  const links = [
    { title: "Home", url: "banner" },
    { title: "About Us", url: "about" },
    { title: "Services", url: "services" },
    { title: "Pricing", url: "pricing" },
    { title: "Testimonials", url: "testimonials" },
    { title: "FAQs", url: "faq" },
    { title: "Contact", url: "contact" },
  ];
  return (
    <div className='w-full h-22 bg-gray-300'>
      {/* desktop */}
      <div className='w-full max-w-[1200px] mx-auto flex'>
        {links.map((link, index) => (
          <div key={index}>
            <Link to={link.url}>{link.title}</Link>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Navbar
