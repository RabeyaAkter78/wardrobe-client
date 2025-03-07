import { AllImages } from "@/assets/AllImages";
import Image from "next/image";
import React from "react";
// import { Great_Vibes } from "@next/font/google";

// const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });



const Banner = () => {
  return (
    <div className="container mx-auto relative">
      <Image
        src={AllImages.banner}
        alt="Banner"
        width={0}
        height={0}
        className="w-full h-auto md:h-[750px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white font-sans">
        <h1 className="text-lg md:text-7xl font-extrabold tracking-wide">
          Find Your Perfect Outfit
        </h1>
        <p className="md:mt-2 md:text-4xl font-medium">
          Great fashion at great prices
        </p>
        <p className="md:mb-4 md:text-2xl font-medium">Shop second-hand, save more</p>
        <button className="md:text-lg border px-6 md:px-12 py-2 font-semibold transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
