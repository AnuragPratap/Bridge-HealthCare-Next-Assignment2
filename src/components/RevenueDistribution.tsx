"use client";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueDistribution = () => {
  const [pieTimespan, setPieTimespan] = useState<string>("Select");

  const handlePieTimespanChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPieTimespan(event.target.value);
  };

  const pieData = {
    labels: [
      "Online Consultations",
      "Online Consultations",
      "Online Consultations",
      "Online Consultations",
    ],
    datasets: [
      {
        label: "Revenue Distribution",
        data: [30, 20, 40, 10],
        backgroundColor: ["#6F58E9", "#2DDAC1", "#36A2EB", "#94D13D"],
        hoverBackgroundColor: ["#4BC0f0", "#26A2E2", "#FFD384", "#FGCE56"],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className=" border border-[#D2D2D2] rounded-[15px] bg-white w-[355px] h-[300px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
      <div style={{ width: "92%", padding: "10px" }}>
        <div className=" flex flex-col items-end mr-[30px] ">
          <span className=" font-bold text-[14px]">
            Revenue Distribution By Source
          </span>
          <select
            className=" w-[45%] mt-[4px] p-[3px] rounded-[5px] border border-[#D2D2D2] text-[11px] "
            value={pieTimespan}
            onChange={handlePieTimespanChange}
          >
            <option value="Select">Select Timespan</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        {/* Pie chart */}
        <div className=" w-[150px] ml-[90px] mt-[15px] -mb-[10px]">
          <Pie data={pieData} options={options} />
        </div>

        {/*  pie chart */}

        {/* pie chart label */}
        <div className=" grid grid-cols-2 gap-[10px] mt-[20px] justify-items-center">
          {pieData.labels.map((label, index) => (
            <div key={index} className=" flex items-center text-[12px]">
              <span
                className=" inline-block w-[15px] h-[15px] rounded-full ml-[10px] "
                style={{
                  backgroundColor: pieData.datasets[0].backgroundColor[index]
                }}
              ></span>
              {label}
            </div>
          ))}
        </div>
        {/* pie chart label */}
      </div>
    </div>
  );
};

export default RevenueDistribution;
