import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-green-800 text-white">
      <div className="grid md:grid-cols-4 gap-16 md:w-9/12 mx-auto py-16 items-center justify-center">
        <div>
          <div className="flex mb-2">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
            <span className="text-xl font-semibold">Organic Life</span>
          </div>
          <p>
            Organic foods are clearly healthier for the planet, because they
            support an agricultural system that avoids synthetic fertilizers and
            pesticides
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold mb-3">Company</p>
          <a href="">
            <p className="font-semibold mb-2">About Us</p>
          </a>
          <a href="">
            <p className="font-semibold mb-2">Our Services</p>
          </a>
          <a href="">
            <p className="font-semibold mb-2">Clients Reviews</p>
          </a>
          <a href="">
            <p className="font-semibold mb-2">Contact Us</p>
          </a>
        </div>
        <div>
          <p className="text-xl font-semibold mb-3">Main Office</p>
          <p className="font-semibold mb-2">
            Building: 10A, Dhanmondi 10, Dhaka, Bangladesh
          </p>
          <p className="font-semibold mb-2">wali@gmail.com</p>
          <p className="font-semibold mb-2">(+123) 456 789</p>
        </div>
        <div>
          <p className="text-xl font-semibold mb-3">Newslatter Subscription</p>
          <p className="font-semibold mb-2">
            Please Subscribe to Our NewsLatter
          </p>
          <button className="bg-lime-500 py-2 px-4 rounded text-white font-semibold hover:bg-orange-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
