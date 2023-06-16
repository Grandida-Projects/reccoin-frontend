import React, {useState} from "react";
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";
import stateGreen from "../../assets/stateGreen.svg";
import stateRed from "../../assets/stateRed.svg";

const HistoryPage = () => {

  // hardcoded static dataset
  const data = [
    {
      value: 55,
      weight: '100 KG',
      id: 'XXXX....XXX....XXX...XXX...',
      address: '001f....',
      date: '5TH MAY 2020, 12:23',
      status: 'APPROVED'
    },
    {
      value: 55,
      weight: '100 KG',
      id: 'XXXX....XXX....XXX...XXX...',
      date: '5TH MAY 2020, 12:23',
      status: 'DECLINED'
    },
    {
      value: 'CREDIT',
      address: 'ADDRESS',
      date: '5TH MAY 2020, 12:23'
    },
    {
      value: 'CREDIT',
      address: 'ADDRESS',
      date: '5TH MAY 2020, 12:23'
    },
    {
      value: '20 RC',
      address: '001x33ff...',
      date: 'CREDIT'
    },
    {
      value: '20 RC',
      address: '001x33ff...',
      date: 'CREDIT'
    },
    {
      value: 'TOTAL VALUE',
      weight: 'TOTAL WEIGHT',
      id: 55,
      weight: '100 KG',
      date: '5TH MAY 2020, 12:23',
      status: 'DEPOSITED'
    },
    {
      value: 'TOTAL VALUE',
      weight: 'TOTAL WEIGHT',
      id: 55,
      weight: '100 KG',
      id: 'XXXX....XXX....XXX...XXX...',
      date: '5TH MAY 2020, 12:23',
      status: 'DEPOSITED'
    },
    {
      value: 'TOTAL VALUE',
      weight: 'TOTAL WEIGHT',
      id: 55,
      weight: '100 KG',
      id: 'XXXX....XXX....XXX...XXX...',
      date: '5TH MAY 2020, 12:23',
      status: 'APPROVED'
    },
    {
      value: 'TOTAL VALUE',
      weight: 'TOTAL WEIGHT',
      id: 55,
      weight: '100 KG',
      id: 'XXXX....XXX....XXX...XXX...',
      date: '5TH MAY 2020, 12:23',
      status: 'DECLINED'
    },
    {
      value: 'TOTAL VALUE',
      weight: 'TOTAL WEIGHT',
      id: 55,
      weight: '100 KG',
      date: '5TH MAY 2020, 12:23',
      status: 'DEPOSITED'
    },
    {
      value: 'TOTAL VALUE',
      weight: 'TOTAL WEIGHT',
      id: 55,
      weight: '100 KG',
      date: '5TH MAY 2020, 12:23',
      status: 'DEPOSITED'
    },
    {
      value: 'CREDIT',
      address: 'ADDRESS',
      value: '20 RC',
      address: '0013f...',
      date: '5TH MAY 2020, 12:23',
      status: 'CREDIT'
    }
  ];

  return (
    <UserDashboardLayout
      active_link={"History"}
      dashboard_content={
        <div className="w-3/4 bg-white h-full ml-12">
          {/* Transactions title */}
          <div className="font-black text-primary40 p-10">
            <h1 className="text-4xl font-bold text-primary40">History</h1>
            <h3 className="text-2xl font-bold text-primary40 py-4">
              Transactions
            </h3>
          </div>
          
          <div className="m-4 border-2 border-black bg-gradient-to-r from-green-400 via-green-200 to-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              
              <div className="flex flex-col items-center px-2 border-b-2 md:border-b-0 border-primary40 w-full">
                <div className="font-semibold">TOTAL VALUE</div>
                <div className="text-primary40 font-extrabold">55</div>
              </div>

              <div className="flex flex-col items-center border-b-2 md:border-b-0 border-primary40 w-full">
                <div className="font-semibold">TOTAL WEIGHT</div>
                <div className="text-primary40 font-extrabold">100 KG</div>
              </div>

              <div className="flex flex-col items-center px-2 border-b-2 md:border-b-0 border-primary40 w-full">
                <div className="font-semibold">TRANSACTION ID</div>
                <div className="text-primary40 font-extrabold">XXXX....XXX....XXX...XXX...</div>
              </div>

              <div className="flex flex-col items-center border-b-2 md:border-b-0 border-primary40 w-full">
                <div className="font-semibold">ADDRESS</div>
                <div className="text-primary40 font-extrabold">001x33ff...</div>
              </div>

              <div className="flex flex-col items-end m-2">
                <img className="h-7 w-7 bg-red-700 m-2 p-2 hidden md:block" src={stateRed} alt="State Icon Green" />
                <div className="text-xs font-bold text-gray-500">5TH MAY 2020, 12:23</div>
                <div className="text-right text-primary40 font-extrabold">APPROVED</div>
              </div>
            </div>
          </div>

          
        </div>
      }
    />
  );
};

export default HistoryPage;
