"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const TimelinessChart = () => {
  const timelineData = [
    {
      name: "This Year",
      totalConsultations: 40000,
      cancelled: 10000,
      completed: 30000,
    },
  ];

  return (
    <div>
      <div className=" h-full p-4 bg-white border border-gray-300 rounded-xl shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] ">
        <h6 className=" flex items-center justify-center font-bold text-[14px] mb-3">
          Consultation Timeliness: Completed Vs. Cancelled
        </h6>

        <div className=" flex items-center justify-center mb-2">
          <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center">
            This Year
          </button>

          <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center">
            This Month
          </button>

          <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center">
            This Week
          </button>

          <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center">
            Today
          </button>

          <button className=" text-[#A1A1A1] h-[25px] p-[8px] mr-[6px] border border-[#e0e0e0] rounded-md bg-white text-[10px] flex items-center justify-center">
            Custom
          </button>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            className=" text-[12px]"
            data={timelineData}
            margin={{
              top: 15,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            barCategoryGap="15%"
            barGap={20}
          >
            <CartesianGrid strokeDasharray="" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend
              wrapperStyle={{ bottom: 10, fontSize: "12px", left: 15 }}
              iconSize={10}
            />
            <Bar
              dataKey="totalConsultations"
              fill="#0052cc"
              name="Total Consultations"
              legendType="circle"
            />
            <Bar
              dataKey="cancelled"
              fill="#ff6f61"
              name="Cancelled"
              legendType="circle"
            />
            <Bar
              dataKey="completed"
              fill="#8bc34a"
              name="Completed"
              legendType="circle"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimelinessChart;
