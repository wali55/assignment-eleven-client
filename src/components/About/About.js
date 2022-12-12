import React from "react";
import aboutImg from "../../images/about-img.png";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import logo from "../../images/logo.png";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 md:w-9/12 mx-auto my-16 items-center">
      <div>
        <img src={logo} className="mr-3 h-6 sm:h-9 mb-3" alt="" />
        <h2 className="text-3xl font-bold text-gray-700">
          We Provide Good Food For Your Family
        </h2>
        <p className="text-gray-700 my-4">
          Organic food is food produced by methods that comply with the
          standards of organic farming. Standards vary worldwide, but organic
          farming features practices that cycle resources.
        </p>
        <p className="mb-3 font-semibold">
          <PaperAirplaneIcon className="h-5 w-5 text-lime-500 inline-block mr-1"></PaperAirplaneIcon>
          Premium Quality
        </p>
        <p className="mb-3 font-semibold">
          <PaperAirplaneIcon className="h-5 w-5 text-lime-500 inline-block mr-1"></PaperAirplaneIcon>
          Harvest Everyday
        </p>
        <p className="mb-3 font-semibold">
          <PaperAirplaneIcon className="h-5 w-5 text-lime-500 inline-block mr-1"></PaperAirplaneIcon>
          100% Organic
        </p>
        <p className="mb-3 font-semibold">
          <PaperAirplaneIcon className="h-5 w-5 text-lime-500 inline-block mr-1"></PaperAirplaneIcon>
          Fast Delivery
        </p>
        <p className="mb-3 font-semibold">
          <PaperAirplaneIcon className="h-5 w-5 text-lime-500 inline-block mr-1"></PaperAirplaneIcon>
          Super Fresh
        </p>
      </div>
      <div>
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
