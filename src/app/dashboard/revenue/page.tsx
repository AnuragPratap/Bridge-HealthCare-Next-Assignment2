import AverageRevenue from "@/components/AverageRevenue";
import CompareCharts from "@/components/CompareCharts";
import ExportDataCard from "@/components/ExportDataCard";
import IncomeChart from "@/components/IncomeChart";
import RevenueCards from "@/components/RevenueCards";
import RevenueDistribution from "@/components/RevenueDistribution";

const RevenuePage = () => {
  return (
    <div className=" flex flex-col p-6 md:flex-col bg-transparent">
      <span className=" font-bold text-[20px] mb-4 ">Revenue</span>
      <div className=" flex flex-col md:flex-row gap-4 mb-4">
        <div className=" md:min-w-[470px] lg:min-w-[525px] h-[262px]">
          <IncomeChart />
        </div>

        <div>
          <RevenueCards />
        </div>

        <div>
          <ExportDataCard />
        </div>
      </div>

      <div className=" flex flex-col md:flex-row gap-4">
        <div className=" w-1/3 bg-transparent rounded-[15px]">
          <RevenueDistribution />
        </div>

        <div className=" w-2/3 flex flex-col">
          <div className=" ">
            <AverageRevenue />
          </div>

          <div className=" w-[48%] ml-[52%]">
            <CompareCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;
