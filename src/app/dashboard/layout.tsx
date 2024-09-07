import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[16%] bg-[#53564E] p-4">
        <div className=" flex justify-center items-center ">
          <div className="flex items-center bg-[#a6a9ac] rounded-[10px] h-[38px] mt-[5px] ">
            <div className=" flex justify-center items-center w-[50px] h-[50px] border-[4px] border-white rounded-full bg-[#53564E] mr-[10px] ml-[-5px]">
              <div className=" text-[20px] font-bold text-white ">TT</div>
            </div>
            <div className=" flex flex-col pr-2 pb-1 ">
              <h1 className=" text-[21px] text-white mb-[-8px] font-bold">
                {" "}
                BHARA<span className=" text-orange-500 ">T</span>
                <span className=" text-green-800 ">T</span>DM
              </h1>
              <span className=" text-[10px] text-[#FFFFFF] ml-[18px] ">
                Tele-Diagnostic Machine
              </span>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>

      {/* right */}
      <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-[#FAFBFF] overflow-scroll overflow-x-hidden ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
