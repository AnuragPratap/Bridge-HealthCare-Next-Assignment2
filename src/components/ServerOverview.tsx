"use client";

const ServerOverview = () => {
  return (
    <div>
      <div className="overview">
        <div className=" p-4 flex flex-col items-center justify-center bg-white border border-[#D3D3D3] rounded-xl shadow-lg shadow-[ 0px 4px 8px rgba(0, 0, 0, 0.1)] ">
          <h4>Server Cost And Bandwidth Overview</h4>

          <div className=" text-sm">
            <div className="cost">
              <span className=" font-bold text-[#26323C] text-[13px]">
                Server Cost
              </span>
              <div className="all-cost">
                <div>
                  <div className=" flex gap-4 text-[12px] ">
                    <span className=" text-gray-500">
                      Today: <b className=" text-black ml-[40px]">₹1,000</b>
                    </span>
                    <span className=" text-gray-500">
                      This Month:{" "}
                      <b className="  text-black ml-[10px]">₹1,000</b>
                    </span>
                  </div>
                  <div className=" flex text-[12px] mt-[5px] gap-4  ">
                    <span className=" text-gray-500 ml-[2px]">
                      Last Month:{" "}
                      <b className=" text-black ml-[10px] ">₹1,000</b>
                    </span>
                    <span className=" text-gray-500 ml-[2px]">
                      Last Year: <b className=" text-black ml-[19px]">₹1,000</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bandwidth">
              <span className=" font-bold text-[#26323C] text-[13px]">
                Bandwidth Usage
              </span>

              <div className="all-bandwidth">
                <div>
                  <div className=" flex gap-3 text-[12px] ">
                    <span className=" text-gray-500">Today:</span>{" "}
                    <b className=" ml-[35px]">300 GB</b>
                    <span className=" mr-3 text-gray-500">Yesterday:</span>
                    <b>278 GB</b>
                  </div>
                  <div className=" flex text-[12px] mt-[10px]">
                    <span className=" text-gray-500">7 Day Average: </span>
                    <b className=" ml-[4px]">320 GB</b>
                    <span className=" ml-[10px] text-gray-500">
                      Peak Today:
                    </span>
                    <b>27 Mbps @ 21:00</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className=" text-sm text-gray-500 mt-4 -mb-2">
            Last Backup At 20:41 On 21.05.2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServerOverview;
