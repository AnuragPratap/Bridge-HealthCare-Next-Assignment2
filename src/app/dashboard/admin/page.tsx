import CompareCharts from "@/components/CompareCharts";
import ConsultationInsight from "@/components/ConsultationInsight";
import DoctorChart from "@/components/DoctorChart";
import IncomeChart from "@/components/IncomeChart";
import InsightCards from "@/components/InsightCards";
import ServerOverview from "@/components/ServerOverview";
import TimelinessChart from "@/components/TimelinessChart";

const AdminPage = () => {
  return (
    <div className=" p-6 gap-4 flex flex-col md:flex-col bg-transparent">
      {/* USER CARDS */}
      <div className="max-w-[1000px]">
        <InsightCards />
      </div>

      {/* Middle Charts */}
      <div className="flex gap-4 flex-col lg:flex-row ">
        {/* Doctor Acquisition Chart */}
        <div className=" w-full h-[262px]">
          <DoctorChart />{" "}
        </div>

        {/* Income accumulation graph */}
        <div className=" w-full h-[262px] ">
          <IncomeChart />{" "}
        </div>
      </div>

      {/* bottom Charts and DATA Cards */}
      <div className=" flex gap-4 flex-col md:flex-row">
        {/* CONSULTATION TIMELINESS */}
        <div className=" h-[288px] ">
          <TimelinessChart />
        </div>

        {/* CONSULTATION INSIGHTS */}
        <div className=" h-[288px] ">
          <ConsultationInsight />
        </div>

        {/* cost & bandwidth and compare charts */}
        <div className="flex flex-col h-[288px] ">
          <div>
            <ServerOverview />
          </div>

          <div>
            <CompareCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
