import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";

const Banner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-screen">
      <Carousel slideInterval={10000}>
        <div className="flex relative h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="w-full" src={banner1} alt="" />
          <div class="absolute top-500 left-20 px-4 py-2 opacity-100 ">
            <h2 class="text-3xl text-left  text-gray-700 font-bold">
            Organic foods have a reputation 
            </h2>
            <h2 class="text-3xl text-gray-700 font-bold ">
            for being healthy and nutritious 
            </h2>
            <h2 class="text-xl text-gray-700 font-light">
            Avoids the use of man-made fertilisers, pesticides
            </h2>
          </div>
        </div>
        <div className="flex relative h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="w-full" src={banner2} alt="" />
          <div class="absolute top-500 left-20 px-4 py-2 opacity-100 ">
            <h2 class="text-3xl text-left  text-gray-700 font-bold">
            Organic food is grown without 
            </h2>
            <h2 class="text-3xl mb-2 text-gray-700 font-bold ">
            the use of synthetic chemicals
            </h2>
            <h2 class="text-xl text-gray-700 font-light">
              Your journey to a healthier life.
            </h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
