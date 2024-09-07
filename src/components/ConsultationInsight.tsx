"use client";

const ConsultationInsight = () => {
  return (
    <div className="bg-white pl-[40px] border border-gray-300 rounded-xl shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] p-4 w-80">
      <h3 className="text-[#26323C] text-[14px] flex justify-center font-bold mb-3">
        Consultation Insights
      </h3>
      <ul>
        <li className="flex gap-3 items-center mb-2">
          <span className="w-[25%] text-blue-600 font-bold p-1 rounded-xl bg-[#DFFFFD] flex items-center justify-center text-[15px]">
            124
          </span>
          <span className="text-gray-500 text-[15px]">Daily Consultation</span>
        </li>
        <li className="flex gap-3 items-center mb-2">
          <span className=" w-[25%] text-yellow-600 font-bold p-1 rounded-xl bg-[#DFFFFD] flex items-center justify-center  text-[15px]">
            21:00
          </span>
          <span className="text-gray-500 text-[15px]">
            Consultation Duration
          </span>
        </li>
        <li className="flex gap-4 items-center mb-2">
          <span className=" w-[25%] text-green-600 font-bold p-1 rounded-xl bg-[#DFFFFD] flex items-center justify-center  text-[15px]">
            ₹300
          </span>
          <span className="text-gray-500 text-[15px]">
            Avg Consultation Fee
          </span>
        </li>
        <li className="flex gap-4 items-center mb-2">
          <span className=" w-[25%] text-blue-600 font-bold p-1 rounded-xl bg-[#DFFFFD] flex items-center justify-center  text-[15px]">
            ₹145
          </span>
          <span className="text-gray-500 text-[15px]">
            Mini-Consultation Fee
          </span>
        </li>
        <li className="flex gap-3 items-center mb-2">
          <span className="w-[25%] text-teal-600 font-bold p-1 rounded-xl bg-[#DFFFFD] flex items-center justify-center  text-[15px]">
            ₹650
          </span>
          <span className="text-gray-500 text-[15px]">
            Max-Consultation Fee
          </span>
        </li>
      </ul>
      <div className="mt-4 flex justify-center items-center text-gray-500 gap-2 ">
        <select
          className="w-[128px] text-[13px] p-1 bg-white border border-gray-300 rounded-md outline-none cursor-pointer"
          aria-label="Select Duration"
        >
          <option>Select Duration</option>
          <option>1 Hour</option>
          <option>1 Day</option>
          <option>1 Week</option>
        </select>
        <span className=" text-gray-400 p-2 text-sm w-4 h-4 flex items-center justify-center bg-white border border-gray-300 rounded-full outline-none cursor-pointer">
          i
        </span>
      </div>
    </div>
  );
};
export default ConsultationInsight;
