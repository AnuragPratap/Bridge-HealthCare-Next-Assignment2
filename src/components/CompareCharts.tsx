import Image from "next/image";
import Link from "next/link";

const CompareCharts = () => {
  return (
    <div className=" ml-[150px] bg-white border border-[#D3D3D3] rounded-lg shadow-lg shadow-[ 0px 4px 8px rgba(0, 0, 0, 0.1)] mt-6 p-2">
      <Link href="" className=" flex gap-3 justify-center items-center ">
        <Image
          src="/sorting.png"
          alt=""
          width={30}
          height={30}
          className=" bg-[#53564E] p-[5px] rounded-[5px] flex justify-center items-center"
        />
        <span>compare charts</span>
      </Link>
    </div>
  );
};

export default CompareCharts;
