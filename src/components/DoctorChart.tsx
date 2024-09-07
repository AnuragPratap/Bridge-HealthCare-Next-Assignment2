"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DoctorChart = () => {
  const acquisitionData = [
    {
      name: "May",
      "Our Commission": 10,
      "Total Revenue": 12,
    },
    {
      name: "Jun",
      "Our Commission": 20,
      "Total Revenue": 30,
    },
    {
      name: "Jul",
      "Our Commission": 45,
      "Total Revenue": 56,
    },
    {
      name: "Aug",
      "Our Commission": 45,
      "Total Revenue": 60,
    },
    {
      name: "Sep",
      "Our Commission": 55,
      "Total Revenue": 65,
    },
    {
      name: "Oct",
      "Our Commission": 66,
      "Total Revenue": 80,
    },
    {
      name: "Nov",
      "Our Commission": 78,
      "Total Revenue": 87,
    },
    {
      name: "Dec",
      "Our Commission": 86,
      "Total Revenue": 88,
    },
    {
      name: "Jan",
      "Our Commission": 66,
      "Total Revenue": 76,
    },
    {
      name: "Feb",
      "Our Commission": 34,
      "Total Revenue": 45,
    },
    {
      name: "Mar",
      "Our Commission": 33,
      "Total Revenue": 43,
    },
    {
      name: "Apr",
      "Our Commission": 90,
      "Total Revenue": 100,
    },
  ];

  return (
    <div className=" bg-white border border-gray-300 rounded-xl w-full h-full p-4 shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]  ">
      <div className="">
        <div className=" flex justify-between items-center">
          <h5 className=" font-semibold">Doctor Acquisition</h5>
          <div className=" flex items-center justify-center">
            <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#C1CDFF] rounded-md bg-[#FAFBFF] text-[10px] flex items-center justify-center ">
              This Year
            </button>

            <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center ">
              This Month
            </button>

            <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center ">
              This Week
            </button>

            <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center ">
              Today
            </button>

            <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center ">
              Custom
            </button>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            className=" text-[12px]"
            data={acquisitionData}
            margin={{
              top: 15,
              right: 40,
            }}
          >
            <CartesianGrid strokeDasharray="" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              fontSize={10}
              scale="linear"
              type="number"
              allowDataOverflow={false}
              tickCount={11}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Total Revenue"
              stroke="Lime"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DoctorChart;
