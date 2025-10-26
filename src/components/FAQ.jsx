import React, { useState, useEffect, useRef } from "react";
import { GoPlus } from "react-icons/go";
import { RxMinus } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const faqs = [
  {
    question: "How do I request a headstone or tombstone design?",
    answer:
      "You can reach out to us through our contact form or by phone. Our design team will guide you through available styles, materials, and inscriptions, ensuring every detail reflects your loved one’s legacy.",
  },
  {
    question: "Do you handle installation and maintenance?",
    answer:
      "Yes. We offer complete installation services, ensuring each monument is securely placed. We also provide periodic maintenance — cleaning, flower placement, and restoration — to keep the resting place dignified year-round.",
  },
  {
    question: "Can I personalize the headstone design?",
    answer:
      "Absolutely. We help families add meaningful touches such as portraits, custom engravings, religious symbols, or personalized quotes that celebrate life and love.",
  },
  {
    question: "What materials do you use for memorials?",
    answer:
      "We work with high-quality granite, marble, terrazzo, and other durable materials. Each is carefully selected for strength, longevity, and beauty, suited to Kenya’s climate.",
  },
  {
    question: "Do you offer services outside Nairobi?",
    answer:
      "Yes. We proudly serve clients across Kenya — from Nakuru to Mombasa, Kisumu to Eldoret. Our team coordinates logistics to ensure seamless delivery and installation anywhere in the country.",
  },
  {
    question: "How long does it take to complete a memorial?",
    answer:
      "Depending on design complexity, materials, and weather conditions, most projects take between 2–6 weeks. We’ll give you a detailed timeline before work begins and update you every step of the way.",
  },
  {
    question: "Do you provide floral and grave care packages?",
    answer:
      "Yes. We offer weekly, monthly, or seasonal flower and maintenance packages so your loved one’s resting place always looks serene and cared for — even when you’re far away.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      name="faq"
      className="relative w-full bg-gradient-to-br  py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Decorative Background Elements */}


      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-orange-500 font-semibold uppercase tracking-widest">
          FAQs
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
          Here are answers to common questions about our memorial design,
          installation, and maintenance services.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left Section (Image + Details) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="col-span-3 md:col-span-2 relative"
        >
          <div className="transform -rotate-1 hover:rotate-0 transition-all duration-500">
            {/* <img
              src="/images/big_brother.png"
              alt="Grave Services"
              className=" w-[300px] shadow-2xl object-cover"
            /> */}
          </div>

          <div className="mt-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md">
            <h4 className="font-bold text-lg text-gray-700 mb-2">
              Need Personalized Guidance?
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              We understand that every memorial is deeply personal. Our team is
              ready to guide you with compassion and care.
            </p>
            <Link to="contact" spy={true} smooth className="btnTwo w-full">Contact Us Today</Link>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <div
          ref={containerRef}
          className="col-span-3 bg-white/70 p-6 rounded-3xl shadow-lg backdrop-blur-md"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-4 p-4 border border-gray-200 rounded-2xl transition-all ${
                openIndex === index ? "bg-orange-50" : "bg-transparent"
              }`}
            >
              <h4
                className="flex justify-between items-center cursor-pointer font-medium text-gray-800"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
                <span
                  className={`text-orange-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {openIndex === index ? <RxMinus /> : <GoPlus />}
                </span>
              </h4>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
