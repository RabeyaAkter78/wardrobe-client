/* eslint-disable no-unused-vars */
import { Col } from "antd";
import { FaUsers } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoIosCut } from "react-icons/io";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LuPiggyBank } from "react-icons/lu";

const Analytics = () => {
    const summery = {
        data: {
        totalEarnings: 100,
        totalSpent: 50000,
        yourSavings: 500,
        },
    };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Col>
        <div className="flex justify-between md:justify-center items-center border-r-2 p-4 bg-gray-200 rounded gap-5 md:gap-20 h-auto md:h-28">
          <div className="flex gap-3 items-center">
            <p className="bg-white rounded-full h-14 w-14 flex justify-center items-center">
            <BiSolidPurchaseTag className="text-primary" size={35} />
            </p>

            <p className="text-base md:text-lg font-bold">Total Earnings</p>
          </div>
          <p className="text-primary text-3xl md:text-4xl font-bold font-sans">
            {summery?.data?.totalEarnings}
          </p>
        </div>
      </Col>
      <Col>
        <div className="flex justify-between md:justify-center items-center border-r-2 p-4 bg-gray-200 rounded gap-5 md:gap-20 h-auto md:h-28">
          <div className="flex gap-3 items-center">
            <p className="bg-white rounded-full h-14 w-14 flex justify-center items-center">
            <FaMoneyCheckDollar className="text-primary" size={35} />
            </p>

            <p className="text-base md:text-lg font-bold">Total Spent</p>
          </div>
          <p className="text-primary text-3xl md:text-4xl font-bold font-sans">
            {summery?.data?.totalSpent}
          </p>
        </div>
      </Col>
      <Col>
        <div className="flex justify-between md:justify-center items-center border-r-2 p-4 bg-gray-200 rounded gap-5 md:gap-20 h-auto md:h-28">
          <div className="flex gap-3 items-center">
            <p className="bg-white rounded-full h-14 w-14 flex justify-center items-center">
              <LuPiggyBank className="text-primary" size={35} />
            </p>

            <p className="text-base md:text-lg font-bold">Total Savings</p>
          </div>
          <p className="text-primary text-3xl md:text-4xl font-bold font-sans">
            {summery?.data?.yourSavings}
          </p>
        </div>
      </Col>
    </div>
  );
};

export default Analytics;
