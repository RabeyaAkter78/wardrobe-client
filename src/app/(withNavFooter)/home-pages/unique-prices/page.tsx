"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { AllImages } from "@/assets/AllImages";
import Image from "next/image";
import React from "react";
import Link from "next/link";


import { CiHeart } from "react-icons/ci";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const UniquePrice = () => {
  const data = [
    {
      id: 1,
      name: "Floral Summer Dress",
      description:
        "A beautiful floral summer dress, perfect for casual outings.",
      price: "$15",
      size: "5-6 Years",
      color: "Pink",
      condition: "Gently Used",
      material: "Cotton",
      availability: "In Stock",
      image: AllImages.dress1,
    },
    {
      id: 2,
      name: "Elegant Party Dress",
      description:
        "A stylish party dress with lace details and a satin finish.",
      price: "$25",
      size: "7-8 Years",
      color: "White",
      condition: "Like New",
      material: "Satin & Lace",
      availability: "In Stock",
      image: AllImages.dress2,
    },
    {
      id: 3,
      name: "Denim Jumper Dress",
      description: "Trendy denim jumper dress with adjustable straps.",
      price: "$18",
      size: "4-5 Years",
      color: "Blue",
      condition: "Good",
      material: "Denim",
      availability: "Out of Stock",
      image: AllImages.dress3,
    },
    {
      id: 4,
      name: "Princess Gown",
      description: "A fairy-tale inspired gown for special occasions.",
      price: "$35",
      size: "6-7 Years",
      color: "Purple",
      condition: "Excellent",
      material: "Tulle & Satin",
      availability: "In Stock",
      image: AllImages.dress4,
    },
    {
      id: 5,
      name: "Casual Cotton Dress",
      description: "Comfortable cotton dress for everyday wear.",
      price: "$12",
      size: "3-4 Years",
      color: "Yellow",
      condition: "Gently Used",
      material: "100% Cotton",
      availability: "In Stock",
      image: AllImages.dress5,
    },
    {
      id: 6,
      name: "Winter Wool Dress",
      description: "Cozy wool dress with a stylish design, perfect for winter.",
      price: "$28",
      size: "8-9 Years",
      color: "Red",
      condition: "Like New",
      material: "Wool",
      availability: "In Stock",
      image: AllImages.dress6,
    },
  ];

  return (
    <div className="container mx-auto md:my-20">
      <SectionTitle title="Unique Prices" subtitle="Discover our unique prices"/>
      <Swiper
        breakpoints={{
          0:{
            slidesPerView: 1,
          },
          640:{
            slidesPerView: 2,
          },
          768:{
            slidesPerView: 3,
          },
          1440:{
            slidesPerView: 3,
          }
        }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="border border-gray-300  rounded-t-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CiHeart className="text-primary absolute top-2 right-2 h-5 w-5 "/>
              <div className="flex flex-col md:flex-row justify-between items-center  p-2  gap-2">
          
              <Image
                src={item.image}
                alt={item.name}
                width={250}
                height={300}
                className="  h-full w-full md:h-96 md:w-52"
              />
              <div className="flex flex-col justify-start items-start p-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className=" text-sm h-12">{item.description}</p>
                {/* <p className="text-gray-800 text-sm">
                  <strong>Size:</strong> {item.size}
                </p>
                <p className="text-gray-800 text-sm">
                  <strong>Color:</strong> {item.color}
                </p>              <p className="text-gray-800 text-sm">
                  <strong>Condition:</strong> {item.condition}
                </p>
                <p className="text-gray-800 text-sm">
                  <strong>Material:</strong> {item.material}
                </p> */}
                <p className=" text-sm">
                  <strong>Availability:</strong> {item.availability}
                </p>
                <p className="">Price: {item.price}</p>
                <div className="flex justify-between items-center  gap-2">
               
                  <Link href={`/home-pages/unique-prices/${item.id}`}>
                    <button className="mt-2 px-4 py-2 bg-primary text-white rounded-lg">
                 See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
        <div className=" !pt-[50px]" />
      </Swiper>
    </div>
  );
};

export default UniquePrice;
