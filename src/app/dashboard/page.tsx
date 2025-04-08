import Analytics from "@/components/DashboardComponents/Sidebar/DashboardPageComponents/Analytics";
import EarningHistory from "@/components/DashboardComponents/Sidebar/DashboardPageComponents/EarningHistory";
import SpentHistory from "@/components/DashboardComponents/Sidebar/DashboardPageComponents/SpentHistory";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <Analytics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <EarningHistory/>
        <SpentHistory/>
      </div>
    </div>
  );
};

export default DashboardPage;
