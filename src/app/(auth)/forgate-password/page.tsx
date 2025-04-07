"use client";

import Link from "next/link";
import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";

const ForgetPassword = () => {
  return (
    <div className=" py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
      <div className="container mx-auto pt-32 pb-16">
        <div className="flex justify-center items-center p-2">
          <div className=" rounded-lg p-5 lg:px-20 md:py-16  lg:py-24">
            <div className="mb-20">
              <h1 className="font-bold text-2xl md:text-3xl mb-5">
                Forgot Password ?
              </h1>
              <p>
                Enter your details below to request an your capture award
                account password reset.
              </p>
            </div>
            <div className="flex justify-between items-center border-b-2 border-button-color mb-10">
              <input
                type="text"
                placeholder="Email"
                className="bg-transparent w-full p-2 focus:outline-none"
              />
              <IoMailOpenOutline className="h-8 w-8" />
            </div>

            <Link href="/verification" className="flex justify-center items-center gap-2">
              <button className="bg-primary text-white    px-10 py-2 rounded-md shadow-lg ">
              Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
