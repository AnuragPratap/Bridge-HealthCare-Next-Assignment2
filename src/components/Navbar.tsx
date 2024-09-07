import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-[#FFFFFF] ">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs px-2 ">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className=" w-[200px] p-2 bg-transparent outline-none "
        />
      </div>
      {/* icons AND USER */}
      <div className=" flex items-center gap-6 justify-end w-full md:mr-[70px]  ">
        <div className=" relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/bell-ring.png" alt="" width={20} height={20} />
          <div className=" absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-red-600 text-white rounded-full text-[10px] ">
            01
          </div>
        </div>

        <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/doubts-button.png" alt="" width={20} height={20} />
        </div>

        <span className=" text-[#26323C] ">|</span>

        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className=" rounded-full -mr-2 cursor-pointer"
        />

        <div className=" flex flex-col -ml-2 cursor-pointer ">
          <span className=" text-xs leading-3 font-bold text-[#26323C]  ">
            Admin Name
          </span>
          <span className=" text-[10px] text-gray-500 ">Staff</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
