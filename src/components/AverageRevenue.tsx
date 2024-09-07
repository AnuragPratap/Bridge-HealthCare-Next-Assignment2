"use client";

const AverageRevenue = () => {
  return (
    <div>
      <div className=" w-[97%] flex border items-center justify-between font-bold p-[14px] border-[#D2D2D2] rounded-[10px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] ">
        <span className=" text-lg">Average Revenue Per Patient</span>
        <span className=" text-[20px] bg-[#eeeded] p-[7px] flex items-center justify-center md:min-w-[100px] rounded-md">
          ₹ 565
        </span>
      </div>

      <div
        className="w-[97%] flex border items-center justify-between font-bold p-[14px] border-[#D2D2D2] rounded-[10px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] "
        style={{ marginTop: "12px" }}
      >
        <span className=" text-lg">Average Revenue Per Patient</span>
        <span className=" text-[20px] bg-[#eeeded] p-[7px] flex items-center justify-center md:min-w-[100px] rounded-md">
          ₹ 565
        </span>
      </div>

      <div
        className="w-[97%] flex border items-center justify-between font-bold p-[14px] border-[#D2D2D2] rounded-[10px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] "
        style={{ marginTop: "12px" }}
      >
        <span className=" text-lg">Average Revenue Per TDM Machine</span>
        <span className=" text-[20px] flex items-center justify-center bg-[#eeeded] p-[7px] md:min-w-[100px] rounded-md">
          ₹ 5065
        </span>
      </div>
    </div>
  );
};

export default AverageRevenue;
