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
      image: "/images/floral-dress.jpg",
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
      image: "/images/party-dress.jpg",
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
      image: "/images/denim-dress.jpg",
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
      image: "/images/princess-gown.jpg",
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
      image: "/images/casual-dress.jpg",
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
      image: "/images/winter-dress.jpg",
    },
  ];

  return (
    <div className="container mx-auto md:my-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border border-gray-300  rounded-lg">
              <Image
                src={AllImages.banner}
                alt={item.name}
                width={250}
                height={300}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 p-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-gray-800 text-sm">
                  <strong>Size:</strong> {item.size}
                </p>
                <p className="text-gray-800 text-sm">
                  <strong>Color:</strong> {item.color}
                </p>
                <p className="text-gray-800 text-sm">
                  <strong>Condition:</strong> {item.condition}
                </p>
                <p className="text-gray-800 text-sm">
                  <strong>Material:</strong> {item.material}
                </p>
                <p className="text-gray-800 text-sm">
                  <strong>Availability:</strong> {item.availability}
                </p>
                <button className="mt-2 px-4 py-2 bg-primary text-white rounded-lg">
                  Price: {item.price}
                </button>
                <Link href={`/home-pages/unique-prices/${item.id}`}>
                <button className="mt-2 px-4 py-2 bg-primary text-white rounded-lg">
                  Buy Now
                </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UniquePrice;
