"use client";

const RevenueCards = () => {
  return (
    <div className="  flex gap-[15px] justify-center items-center flex-wrap max-w-[270px]  ">
      <div className=" w-[120px] h-[120px] pl-[10px] flex flex-col items-left justify-start bg-white border border-gray-300 rounded-2xl shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] ">
        <div className=" border border-gray-300 rounded-[12px] w-[40%] h-[30%] bg-[#815CFB] mt-[8px] mb-[8px]"></div>
        <span className=" text-[11px] mb-[7px]">Total Revenue</span>
        <span className=" font-bold">₹ 2,00,000</span>
      </div>

      <div className=" w-[120px] h-[120px] pl-[10px] flex flex-col items-left justify-start bg-white border border-gray-300 rounded-2xl shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        <div className=" border border-gray-300 rounded-[12px] w-[40%] h-[30%] bg-[#815CFB] mt-[8px] mb-[8px]"></div>
        <span className=" text-[11px] mb-[7px]">Total Commission</span>
        <span className=" font-bold">₹ 1,50,000</span>
      </div>

      <div className=" w-[120px] h-[120px] pl-[10px] flex flex-col items-left justify-start bg-white border border-gray-300 rounded-2xl shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        <div className=" border border-gray-300 rounded-[12px] w-[40%] h-[30%] bg-[#815CFB] mt-[8px] mb-[8px]"></div>
        <span className=" text-[11px] mb-[7px]">
          Revenue from Online Consultation
        </span>
        <span className=" font-bold mb-[3px]">₹ 10,000</span>
      </div>

      <div className=" w-[120px] h-[120px] pl-[10px]  flex flex-col items-left justify-start bg-white border border-gray-300 rounded-2xl shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        <div className=" border border-gray-300 rounded-[12px] w-[40%] h-[30%] bg-[#815CFB] mt-[8px] mb-[8px]"></div>
        <span className=" text-[11px] mb-[7px]">
          Return of Investment (ROI)
        </span>
        <span className=" font-bold mb-[3px]">₹ 1,50,000</span>
      </div>
    </div>
  );
};

export default RevenueCards;
