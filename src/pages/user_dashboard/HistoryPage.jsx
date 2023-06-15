import React from "react";
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";

const HistoryPage = () => {
  return (
    <UserDashboardLayout active_link={'History'} dashboard_content={
      <div className="w-3/4 bg-white h-full flex] ml-12">
      {/* Transactions title */}
        <div className="font-black text-primary40 p-10">
        <h1 className="text-4xl font-bold text-primary40">History</h1>
        <h3 className="text-2xl font-bold text-primary40 py-4">Transactions</h3>
        </div>
        {/* Transactions container */}
        <div className="m-4" style={{ background: 'linear-gradient(to right, rgba(138,227,119,1) 0%, rgba(193,247,181,1) 0%, rgba(255,255,255,1) 54%' }}>
         {/* Your component's content */}
         <p>sbhvs kxbfuykakv      ua vyyrawevur yvufhhaw v awhkjwaku wva aina\ic jniebfuybff hfbfbcub uwqioq ifncuebfu</p>
        </div>
    </div>
    } />
  );
};

export default HistoryPage;
