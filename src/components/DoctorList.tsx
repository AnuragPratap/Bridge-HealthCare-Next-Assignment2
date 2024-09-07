const DoctorList = () => {
  const doctors = [
    {
      name: "Bessie Cooper",
      id: "#51674738",
      email: "debra.holt@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Devon Lane",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Kristin Watson",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Cameron Will",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Cameron Will",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Cameron Will",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];

  return (
    <div>
      <div className=" p-[60px] flex flex-col">
        <h2 className=" font-bold mb-6 -mt-4">
          Doctor Added In The Month Of October
        </h2>
        <table className=" w-full text-[#53564E] border-collapse rounded-xl shadow-lg shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] overflow-hidden">
          <thead className="  border-b-[rgb(210, 210, 210)]">
            <tr className=" bg-white text-left ">
              <th className=" p-4 border-t-0 border-b-2 border-b-[rgb(210, 210, 210)]">
                Doctor Name
              </th>
              <th className=" pl-2 border-t-0 border-b-2 border-b-[rgb(210, 210, 210)]">
                Doctor ID
              </th>
              <th className=" pl-2 border-t-0 border-b-2 border-b-[rgb(210, 210, 210)]">
                Email
              </th>
              <th className=" pl-2 border-t-0 border-b-2 border-b-[rgb(210, 210, 210)]">
                Location
              </th>
              <th className=" pl-2 border-t-0 border-b-2 border-b-[rgb(210, 210, 210)]">
                Contact Number
              </th>
              <th className=" pl-2 border-t-0 border-b-2 border-b-[rgb(210, 210, 210)]"></th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            {doctors.map((doctor, index) => (
              <tr
                key={index}
                className=" border-b-[1px] border-b-[rgb(210, 210, 210)]"
              >
                <td className=" p-[10px] flex items-center text-[14px]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    width={30}
                    height={30}
                    className=" rounded-full mr-[10px]  "
                  />
                  {doctor.name}
                </td>
                <td className=" p-[10px] text-[14px]">{doctor.id}</td>
                <td className=" p-[10px] text-[14px]">{doctor.email}</td>
                <td className=" p-[10px] text-[14px]">{doctor.location}</td>
                <td className=" p-[10px] text-[14px]">{doctor.contact}</td>
                <td className=" p-[10px] text-[14px]">
                  <button className=" bg-[#53564E] text-[#fff] text-sm p-[8px] rounded-lg">
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;
