import React from "react";
import {
  About,
  Banner,
  Contact,
  FAQ,
  Pricing,
  Services,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="">
        <About />
        <Services />
        {/* <Pricing /> */}
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
