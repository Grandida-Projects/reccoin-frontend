import React from "react";
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";

const HistoryPage = () => {
  return (
    <UserDashboardLayout active_link={'History'} dashboard_content={
      <div className="w-3/4 bg-white h-full flex] ml-12">
      {/* Transactions title */}
        <div className="font-black text-primary40 p-4">
        <h1 className="text-4xl font-bold text-primary40">History</h1>
        <h3 className="text-2xl font-bold text-primary40 py-4">Transactions</h3>
        </div>

        <div className="w-3/4 p-4">
        

      </div>
    </div>
    } />
  );
};

export default HistoryPage;
