"use client";
import Link from "next/link";
import { useState } from "react";
import { FaLockOpen } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

const ConfirmPassword = () => {
  const [showpassword, setShowpassword] = useState("false");
  const [showConfirmpassword, setShowConfirmPassword] = useState("false");
  const togglePasswordVisibility = () => {
    setShowpassword(!showpassword);
  };
  const toggoleConfirmPasswordVisible = () => {
    setShowConfirmPassword(!showConfirmpassword);
  };
  return (
    <div className="py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center p-2">
          <div className=" rounded-lg  text-center p-5 lg:px-20 lg:py-20">
            <p className="text-3xl pb-10">Confirm Password</p>
            <div className="flex justify-between items-center border-b-2 mb-10 ">
              <input
                type={showpassword ? "password" : "text"}
                placeholder="Password"
                className=" p-2 focus:outline-none"
              />

              <div className="flex items-center">
                <button onClick={togglePasswordVisibility} type="button">
                  {showpassword ? (
                    <IoIosLock className="" />
                  ) : (
                    <FaLockOpen className="" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 mb-10">
              <input
                type={showConfirmpassword ? "password" : "text"}
                placeholder="Confirm Password"
                className=" p-2 focus:outline-none md:w-96 lg:w-96"
              />
              <div className="flex items-center">
                <button onClick={toggoleConfirmPasswordVisible} type="button">
                  {showConfirmpassword ? (
                    <IoIosLock className="" />
                  ) : (
                    <FaLockOpen className="" />
                  )}
                </button>
              </div>
            </div>

            <Link href="/sign-in">
              <button className="bg-primary text-white    px-10 py-2 rounded-md shadow-lg ">
                Send
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
