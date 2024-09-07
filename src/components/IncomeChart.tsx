"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const IncomeChart = () => {
  const [timespan, setTimespan] = useState<string>("Monthly");
  const [service, setService] = useState<string>("All Services");

  const handleTimespanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimespan(e.target.value);
    alert(`You have selected the ${e.target.value} timespan.`);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value);
    alert(`You have selected the ${e.target.value} service.`);
  };

  const revenueData = [
    { name: "May", commission: 30, revenue: 50 },
    { name: "Jun", commission: 40, revenue: 60 },
    { name: "Jul", commission: 20, revenue: 90 },
    { name: "Aug", commission: 50, revenue: 80 },
    { name: "Sep", commission: 30, revenue: 60 },
    { name: "Oct", commission: 70, revenue: 90 },
    { name: "Nov", commission: 60, revenue: 70 },
    { name: "Dec", commission: 40, revenue: 60 },
    { name: "Jan", commission: 80, revenue: 90 },
    { name: "Feb", commission: 50, revenue: 70 },
    { name: "Mar", commission: 20, revenue: 40 },
    { name: "Apr", commission: 90, revenue: 100 },
  ];

  return (
    <div className=" bg-white border border-gray-300 rounded-xl w-full h-full p-4 shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]  ">
      <div className=" flex justify-between items-center ">
        <span className=" font-bold text-[15px] ">
          Income Accumulation Graph
        </span>

        <div className=" flex gap-[10px]">
          <select
            className=" cursor-pointer p-[4px] border border-[#ccc] rounded-[5px] text-[11px] text-[#333133] outline-none "
            value={timespan}
            onChange={handleTimespanChange}
          >
            <option value="Monthly">Select Timespan</option>
            <option value="Weekly">Weekly</option>
            <option value="Quarterly">Quarterly</option>
          </select>
          <select
            className=" cursor-pointer p-[4px] border border-[#ccc] rounded-[5px] text-[#333133] text-[11px] outline-none "
            value={service}
            onChange={handleServiceChange}
          >
            <option value="All Services">Select Service</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={revenueData}
          className=" text-[12px]"
          margin={{
            top: 15,
            right: 40,
          }}
        >
          <CartesianGrid strokeDasharray="" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend verticalAlign="bottom" />
          <Line
            type="monotone"
            dataKey="commission"
            stroke="#3366cc"
            name="Our Commission"
            dot={false}
            legendType="circle"
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#ffcc00"
            name="Total Revenue"
            dot={false}
            legendType="circle"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;
