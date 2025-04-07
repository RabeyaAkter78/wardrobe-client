"use client";
import OtpInput from "react-otp-input";
import React, { useState } from "react";
import { Button, Spin } from "antd";
import Link from "next/link";
import dynamic from "next/dynamic";

const VarificationComponent = () => {
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = async () => { };

  const handleResendOtp = async () => { };

  return (
    <div className=" py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
      <div className="mx-4 md:mx-0 w-auto md:w-[600px]">
        <div className=" py-10 px-5 md:px-14">
          <h1 className="text-3xl text-center font-bold py-5">
            Check your email
          </h1>
          <p className="text-center">
            We sent a reset link. Please enter the 6-digit code mentioned in the
            email.
          </p>
          <div className="py-7 flex justify-center items-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="lg:w-10"> </span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="md:w-8 h-12 bg-transparent border-b-2 border-primary  text-xl focus:outline-none focus:border-blue-400 mx-1"
                />
              )}
            />
          </div>
          <Link href="/confirm-password" className="flex justify-center items-center gap-2">
            <button
              onClick={handleVerifyOtp}
             className="bg-primary  text-white px-10 py-2 rounded-md shadow-lg "
            >
              Verify
            </button>
          </Link>
          <p className="text-center pt-5">
            Didn’t receive the code?
            <span
              onClick={handleResendOtp}
              className="pl-2 underline cursor-pointer"
            >
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// export default VarificationComponent;
export default dynamic(() => Promise.resolve(VarificationComponent), {
  ssr: false,
});