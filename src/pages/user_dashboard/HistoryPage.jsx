import React from "react";
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";
import _stateIconGreen from "../../assets/_stateIconGreen.svg";
import _stateIconRed from "../../assets/_stateIconRed.svg";

const HistoryPage = () => {
  return (
    <UserDashboardLayout
      active_link={"History"}
      dashboard_content={
        <div className="w-3/4 bg-white h-full flex] ml-12">
          {/* Transactions title */}
          <div className="font-black text-primary40 p-10">
            <h1 className="text-4xl font-bold text-primary40">History</h1>
            <h3 className="text-2xl font-bold text-primary40 py-4">
              Transactions
            </h3>
          </div>
          {/* Transactions container */}
          <div
            className="m-4 border-2 border-black"
            style={{
              background:
                "linear-gradient(to right, rgba(138,227,119,1) 0%, rgba(193,247,181,1) 0%, rgba(255,255,255,1) 54%",
            }}
          >
            <div className="flex flex-row  justify-between items-center">
              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">TOTAL VALUE</div>
                <div className="text-primary40 font-extrabold">55</div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">TOTAL WEIGHT</div>
                <div className="text-primary40 font-extrabold">100 KG</div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">TRANSACTION ID</div>
                <div className="text-primary40 font-extrabold">XXXX....XXX....XXX...XXX...</div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="font-semibold">ADDRESS</div>
                <div className="text-primary40 font-extrabold">001x33ff...</div>
              </div>

              <div className="flex flex-col items-center px-2">
                  <img className="h-6 w-6" src={_stateIconGreen} alt="State Icon Green" />
                  <div className="text-l">5TH MAY 2020, 12:23</div>
                  <div className="text-right justify-end text-primary40 font-extrabold">APPROVED</div>
              </div>

            </div>
          </div>
        </div>
      }
    />
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
