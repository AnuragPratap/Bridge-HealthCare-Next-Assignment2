"use client";
import Image from "next/image";
import { useState } from "react";

const ExportDataCard = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleExport = () => {
    if (selectedOption) {
      alert(`You chose to export: ${selectedOption}`);
    } else {
      alert("Please select an option to export.");
    }
  };

  return (
    <div>
      <div className=" flex flex-col items-center p-[20px] border border-[#DFDFDF] rounded-[10px] w-[230px] bg-white h-[250px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] ">
        <div className=" mb-[10px] flex items-center justify-center p-[40px] rounded-[15px] bg-[rgb(240,240,240)] h-[70px]">
          <i className="text-[55px] text-gray-500">
            <Image src="/file-export.png" alt="" width={60} height={60} />
          </i>
        </div>
        <select
          className=" mb-[10px] p-[5px] w-[80%] rounded-[5px] border border-[#ccc] text-[14px]"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="select">Select the Format</option>
          <option value="Format1">Format 1</option>
          <option value="Format2">Format 2</option>
        </select>
        <div>
          <label className="flex items-center cursor-pointer text-[12px]">
            <input
              type="radio"
              name="options"
              defaultValue="option1"
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Export the Current Data</span>
          </label>
          {/* Option 2 */}
          <label className="flex items-center cursor-pointer text-[12px]">
            <input
              type="radio"
              name="options"
              defaultValue="option2"
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Export the Whole Data</span>
          </label>
        </div>

        <button
          className=" w-[90%] px-[20px] py-[8px] mt-[10px] bg-[#26323C] text-white rounded-[5px] cursor-pointer text-[14px]"
          onClick={handleExport}
        >
          Export Data
        </button>
      </div>
    </div>
  );
};

export default ExportDataCard;
