import React from "react";
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";

const HistoryPage = () => {
  return (
    <UserDashboardLayout active_link={'History'} dashboard_content={
      <div className="w-3/4 bg-white h-full flex border-2 border-blue-200 ml-12">
      <div className="w-3/4 p-4">
        <h1 className=" text-3xl font-black text-primary40 py-4">History</h1>
        <div className="m-4">
          <div className="m-2">
            
            
          </div>
          <div className="m-2">
            
          </div>
        </div>
      </div>
    </div>
    } />
  );
};

export default HistoryPage;
