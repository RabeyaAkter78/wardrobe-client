'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { AllImages } from '@/assets/AllImages';

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  colors: string[];
}

interface UniquePriceProps {
  productData: Product[];
  handleAddToCart: (item: Product) => void;
  handleViewDetails: () => void;
}

const UniquePrice: React.FC<UniquePriceProps> = () => {
    const productData = [
        { id: 1, name: 'Grinder 1', image:AllImages.banner, price: '$20', colors: ['#FF0000', '#00FF00', '#0000FF'] },
        { id: 2, name: 'Grinder 2', image: AllImages.logo, price: '$25', colors: ['#FF6347', '#4682B4', '#32CD32'] }
      ];
    
      const handleAddToCart = (item: { id: number }) => {
        console.log('Added to cart:', item);
      };
    
      const handleViewDetails = () => {
        console.log('View all deals clicked');
      };
  
  
    return (
    <div>
      <div className="bg-primary border-b border-nutral-400">
        <div className="container mx-auto pb-10">
          <div className="pt-10 md:pt-32">
            <h1 className="ml-10 md:ml-20 text-3xl lg:text-5xl text-textCololr md:mb-8 lg:mb-16 font-bold">
              Grinders
            </h1>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {/* First Slide */}
            <SwiperSlide>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 px-8 md:px-20 mt-10 justify-center items-center">
                {productData.map((item) => (
                  <div key={item.id}>
                    <div className="md:h-[450px] w-auto border border-textCololr bg-white relative mb-5">
                      <div className="flex justify-center items-center">
                        <Link href="/all-product-details">
                         
                            <Image
                              src={item.image}
                              alt={item.name}
                              height={0}
                              width={0}
                              className="md:h-48 w-auto p-2 cursor-pointer mt-5"
                            />
                        
                        </Link>
                      </div>
                      <button className="absolute -top-4 left-2 md:left-4 bg-buttonCollor text-white px-4 py-1">
                        20% Off
                      </button>

                      <div className="px-1 md:px-6">
                        <div className="h-24 flex flex-col justify-start items-start md:gap-3">
                          <h1 className="h-9 text-md md:text-2xl text-[#403427] font-bold mb-5">
                            {item.name}
                          </h1>
                          <p className="md:text-lg text-[#403427]">{item.price}</p>
                        </div>
                        {/* Color picker */}
                        <div className="flex gap-2 md:mt-5 mb-5 md:mb-8">
                          {item.colors.map((color, index) => (
                            <div
                              key={index}
                              style={{ backgroundColor: color }}
                              className="h-2 w-10 rounded-full"
                            />
                          ))}
                        </div>

                        <Link href="/add-to-cart-page">
                         
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="w-full py-2 text-xs md:text-lg font-semibold text-[#403427] flex justify-center items-center gap-1 md:gap-3 bg-primary mb-2"
                            >
                              Add To Cart
                              <IoCartOutline />
                            </button>
                        
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            {/* 2nd Slide */}
            <SwiperSlide>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 px-8 md:px-20 mt-10 justify-center items-center">
                {productData.map((item) => (
                  <div key={item.id}>
                    <div className="md:h-[450px] w-auto border border-textCololr bg-white relative mb-5">
                      <div className="flex justify-center items-center">
                        <Link href="/all-product-details">
                  
                            <Image
                              src={item.image}
                              alt={item.name}
                              height={0}
                              width={0}
                              className="md:h-48 w-auto p-2 cursor-pointer mt-5"
                            />
                        
                        </Link>
                      </div>
                      <button className="absolute -top-4 left-2 md:left-4 bg-buttonCollor text-white px-4 py-1">
                        20% Off
                      </button>

                      <div className="px-1 md:px-6">
                        <div className="h-24 flex flex-col justify-start items-start md:gap-3">
                          <h1 className="h-9 text-md md:text-2xl text-[#403427] font-bold mb-5">
                            {item.name}
                          </h1>
                          <p className="md:text-lg text-[#403427]">{item.price}</p>
                        </div>
                        {/* Color picker */}
                        <div className="flex gap-2 md:mt-5 mb-5 md:mb-10">
                          {item.colors.map((color, index) => (
                            <div
                              key={index}
                              style={{ backgroundColor: color }}
                              className="h-2 w-10 rounded-full"
                            />
                          ))}
                        </div>
                        <Link href="/add-to-cart-page">
                     
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="w-full py-2 text-xs md:text-lg font-semibold text-[#403427] flex justify-center items-center gap-1 md:gap-3 bg-primary mb-2"
                            >
                              Add To Cart
                              <IoCartOutline />
                            </button>
                     
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center md:justify-between items-center">
            <button
              onClick={handleViewDetails}
              className="px-10 ml-10 md:ml-20 py-3 bg-buttonCollor text-white"
            >
              View All Deals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniquePrice;
