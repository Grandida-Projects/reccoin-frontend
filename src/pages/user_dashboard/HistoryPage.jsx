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
        <div className="m-4 border-2 border-black" style={{ background: 'linear-gradient(to right, rgba(138,227,119,1) 0%, rgba(193,247,181,1) 0%, rgba(255,255,255,1) 54%' }}>
         
        <table>
        <tr>
          <th>TOTAL VALUE</th>
          <th>TOTAL WEIGHT</th>
          <th>TRANSACTION ID</th>
          <th>ADDRESS</th>
          <th>Header 3</th>
        </tr>
        <tr>
          <td>55</td>
          <td>100 KG</td>
          <td>XXXX....XXX....XXX...XXX...</td>
          <td> 001x33ff...</td>
          <td>Row 2, Column 2</td>
    
        </tr>


      </table>

        fvhbverus uzbl
        </div>
    </div>
    } />
  );
};

export default HistoryPage;









// 5TH MAY 2020, 12:23
// APPROVED
// TOTAL VALUE
// TOTAL WEIGHT
// TRANSACTION ID
// 55
// 100 KG
// 5TH MAY 2020, 12:23
// CREDIT
// ADDRESS
// 5TH MAY 2020, 12:23
// CREDIT
// ADDRESS
// 20 RC
// 001x33ff...
// 20 RC
// 001x33ff...