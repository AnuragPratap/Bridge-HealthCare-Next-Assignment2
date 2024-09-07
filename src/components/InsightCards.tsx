import Image from "next/image";

const InsightCards = () => {
  return (
    <div className="  flex gap-[15px] justify-between flex-wrap  ">
      <div className=" flex items-center justify-center border border-gray-300 rounded-2xl bg-[#FFFFFF] p-2 flex-col min-w-[120px] w-[150px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        {/* card 1 */}
        <Image
          src="/colorUser.png"
          alt=""
          width={55}
          height={55}
          className=" bg-[#F3EFFF] p-1 rounded-lg"
        />
        <span className=" font-bold text-[18px]">3540</span>
        <span className=" text-[12px] text-[#929292]">Total Patients</span>
      </div>

      <div className=" flex items-center justify-center border border-gray-300 rounded-2xl bg-[#FFFFFF] p-1 flex-col min-w-[120px] w-[150px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        {/* card 2 */}
        <Image
          src="/electrocardiogram.png"
          alt=""
          width={55}
          height={55}
          className=" bg-[#FFF5EC] p-2 rounded-lg"
        />
        <span className=" font-bold text-[18px]">3540</span>
        <span className=" text-[12px] text-[#929292]">Active Doctors</span>
      </div>

      <div className=" flex items-center justify-center border border-gray-300 rounded-2xl bg-[#FFFFFF] p-1 flex-col min-w-[120px] w-[150px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        {/* card 3 */}
        <Image
          src="/stethoscope.png"
          alt=""
          width={55}
          height={55}
          className=" bg-[#E7F9E9] p-2 rounded-lg"
        />
        <span className=" font-bold text-[18px]">3540</span>
        <span className=" text-[12px] text-[#929292]">Total Doctors</span>
      </div>

      <div className=" flex items-center justify-center border border-gray-300 rounded-2xl bg-[#FFFFFF] p-1 flex-col min-w-[120px] w-[150px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        {/* card 4 */}
        <Image
          src="/doctor-bag.png"
          alt=""
          width={55}
          height={55}
          className=" bg-[#DDEBFF] p-2 rounded-lg"
        />
        <span className=" font-bold text-[18px]">3540</span>
        <span className=" text-[12px] text-[#929292]">Total Consultations</span>
      </div>

      <div className=" flex items-center justify-center border border-gray-300 rounded-2xl bg-[#FFFFFF] p-1 flex-col min-w-[120px] w-[150px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        {/* card 5 */}
        <Image
          src="/electrocardiogram1.png"
          alt=""
          width={55}
          height={55}
          className=" bg-[#FFDDE5] p-2 rounded-lg"
        />
        <span className=" font-bold text-[18px]">3540</span>
        <span className=" text-[12px] text-[#929292]">Total TDMs</span>
      </div>

      <div className=" flex items-center justify-center border border-gray-300 rounded-2xl bg-[#FFFFFF] p-1 flex-col min-w-[120px] w-[150px] shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)]">
        {/* card 6 */}
        <Image
          src="/stethoscope.png"
          alt=""
          width={50}
          height={50}
          className=" bg-[#DFFFFD] p-2 rounded-lg"
        />
        <span className=" font-bold text-[18px]">3540</span>
        <span className=" text-[12px] text-[#929292]">Active TDMs</span>
      </div>
    </div>
  );
};
export default InsightCards;
