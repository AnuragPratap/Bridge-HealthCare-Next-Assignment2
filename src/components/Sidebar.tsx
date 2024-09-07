import Image from "next/image";
import Link from "next/link";

const sidebarItems = [
  {
    title: "Dashboards",
    items: [
      {
        icon: "/user.png",
        label: "TDM",
        href: "",
      },
      {
        icon: "/user.png",
        label: "TDM locations",
        href: "",
      },
      {
        icon: "/user.png",
        label: "TDM locations",
        href: "",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className=" mt-4 text-sm ">
      <div>
        {sidebarItems.map((i) => (
          <div className=" flex flex-col gap-2 " key={i.title}>
            <span className=" hidden md:flex gap-2 flex-row text-white font-light my-4 ">
              <Image src="/dashboards.png" alt="" width={20} height={20} />
              {i.title}
            </span>
            {i.items.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className=" flex items-center justify-center lg:justify-start gap-4 text-[#B5C8D8]  py-2 "
              >
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className=" mt-4  text-white">
        <Link href="/dashboard/revenue" className=" flex flex-row gap-2">
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span> Revenue Management</span>
        </Link>
      </div>

      <div className=" mt-[100%]">
        <Link href="/" className=" flex flex-row gap-2">
          <Image src="/logout.png" alt="" width={20} height={15} />

          <span className="text-white">Log Out</span>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
