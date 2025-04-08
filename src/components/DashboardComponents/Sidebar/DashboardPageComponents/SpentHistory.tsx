"use client";
import { DatePicker } from "antd";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import { useState } from "react";

const SpentHistory = () => {
  const [selectedYear, setSelectedYear] = useState(dayjs().year());

  const spentStats = {
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
        spentStatistics: [100, 200, 300, 400,200,500,100,400,600,700,800,900],
      },
    },
  };

  const months = spentStats?.data?.chartData?.months
  const Earnings = spentStats?.data?.chartData?.spentStatistics

  const mockData = Earnings?.map((earnings, index) => ({
    name: months[index],
    earnings: earnings
  }))

  const onChange = (date: any, dateString: any) => {
    setSelectedYear(dateString);
  };

  return (
    <div className="mt-4 p-4">
      <div className="bg-gray-50 rounded-lg shadow px-4 py-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h1 className="text-lg md:text-xl font-medium">
            Total Spent Statistics
          </h1>
          <DatePicker
            onChange={onChange}
            defaultValue={dayjs(selectedYear, "YYYY")}
            format={"YYYY"}
            picker="year"
            className="w-full md:w-auto"
          />
        </div>

        {/* Chart Section */}
        <div className="mt-6" style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={mockData}
              margin={{
                top: 10,
                right: 20,
                left: -10,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#816a6b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#816a6b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="earnings"
                stroke="#816a6b"
                fillOpacity={1}
                fill="url(#colorEarnings)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SpentHistory;
