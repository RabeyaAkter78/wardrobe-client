'use client';

/* eslint-disable no-unused-vars */
import { DatePicker } from "antd";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import { useState } from "react";

const EarningHistory = () => {
  const [selectedYear, setselectedYear] = useState(dayjs().year());
  const [selectedMonth, setselectedMonth] = useState(dayjs().month() + 1);

const earningStats = {
    data: {
      chartData: {
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        earningStatistics: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      },    
    }
    };


  const months = earningStats?.data?.chartData?.months
  const Earnings = earningStats?.data?.chartData?.earningStatistics


  const mockData = Earnings?.map((data, index) => ({
    name: months[index],
    Earnings: data,
  }));

  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
    setselectedYear(dateString.split("-")[0]);
    setselectedMonth(dateString.split("-")[1]);
  };

  return (
    <div className="mt-4 p-4">
      <div className="bg-gray-50 rounded-lg shadow px-4 py-6">
        {/* Header Section */}


        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h1 className="text-lg md:text-xl font-medium">
            Total Earnings Statistics
          </h1>
          <DatePicker
            onChange={onChange}
            defaultValue={dayjs(dayjs(), "YYYY-MM")}
            format={"YYYY-MM"}
            picker="month"
            className="w-full md:w-auto"
          />
        </div>

        {/* Chart Section */}
        <div className="mt-6" style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={mockData}
              margin={{
                top: 10,
                right: 20,
                left: -10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Earnings" fill="#816a6b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EarningHistory;
