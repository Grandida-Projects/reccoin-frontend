import React, { useState } from "react";
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";
import stateGreen from "../../assets/stateGreen.svg";
import stateRed from "../../assets/stateRed.svg";

const HistoryPage = () => {
  const data = [
    {
      value: 55,
      weight: "100 KG",
      id: "XXXX....XXX....XXX...XXX...",
      address: "001f....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 55,
      weight: "100 KG",
      id: "XXXX....XXX....XXX...XXX...",
      date: "5TH MAY 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: "CREDIT",
      address: "ADDRESS",
      date: "5TH MAY 2020, 12:23",
    },
    {
      value: "CREDIT",
      address: "ADDRESS",
      date: "5TH MAY 2020, 12:23",
    },
    {
      value: "20 RC",
      address: "001x33ff...",
      date: "CREDIT",
    },
    {
      value: "20 RC",
      address: "001x33ff...",
      date: "CREDIT",
    },
    {
      value: 55,
      weight: "TOTAL WEIGHT",
      id: 55,
      weight: "100 KG",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 55,
      weight: "TOTAL WEIGHT",
      id: 55,
      weight: "100 KG",
      id: "XXXX....XXX....XXX...XXX...",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 55,
      weight: "TOTAL WEIGHT",
      id: 55,
      weight: "100 KG",
      id: "XXXX....XXX....XXX...XXX...",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 55,
      weight: "TOTAL WEIGHT",
      id: 55,
      weight: "100 KG",
      id: "XXXX....XXX....XXX...XXX...",
      date: "5TH MAY 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: 55,
      weight: "TOTAL WEIGHT",
      id: 55,
      weight: "100 KG",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 55,
      weight: "TOTAL WEIGHT",
      id: 55,
      weight: "100 KG",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: "CREDIT",
      address: "ADDRESS",
      value: "20 RC",
      address: "0013f...",
      date: "5TH MAY 2020, 12:23",
      status: "CREDIT",
    },
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

          {/* Transactions container */}
          <div>
            {data.map((transaction, index) => (
              <div
                key={index}
                className="m-4 md:mx-4  -my-2 border-2 border-black bg-gradient-to-r from-green-400 via-green-200 to-white"
              >
                <div className="flex flex-col md:flex-row justify-between items-center">
                  {/* Total Value */}
                  <div className="flex flex-col items-center px-2 border-b-2 md:border-b-0 border-primary40 w-full">
                    <div className="font-semibold">TOTAL VALUE</div>
                    <div className="text-primary40 font-extrabold">
                      {transaction.value}
                    </div>
                  </div>

                  {/* Total Weight */}
                  <div className="flex flex-col items-center border-b-2 md:border-b-0 border-primary40 w-full">
                    <div className="font-semibold">TOTAL WEIGHT</div>
                    <div className="text-primary40 font-extrabold">
                      {transaction.weight}
                    </div>
                  </div>

                  {/* Transaction ID */}
                  <div className="flex flex-col items-center px-2 border-b-2 md:border-b-0 border-primary40 w-full">
                    <div className="font-semibold">TRANSACTION ID</div>
                    <div className="text-primary40 font-extrabold">
                      {transaction.id}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col items-center border-b-2 md:border-b-0 border-primary40 w-full">
                    <div className="font-semibold">ADDRESS</div>
                    <div className="text-primary40 font-extrabold">
                      {transaction.address}
                    </div>
                  </div>

                  {/* Date and Status */}
                  <div className={`flex flex-col items-end m-2`}>
                    <img
                      className={`h-7 w-7  m-2 p-2 hidden md:block ${
                        transaction.status === "DECLINED"
                          ? "bg-red-700"
                          : "bg-green-700"
                      }`}
                      src={
                        transaction.status === "DECLINED"
                          ? stateRed
                          : stateGreen
                      }
                      alt="State Icon Green"
                    />
                    <div className="flex flex-col">
                      <div className="text-xs font-bold text-gray-500">
                        {transaction.date}
                      </div>
                      <div
                        className={`text-right font-extrabold ${
                          transaction.status === "DECLINED"
                            ? "text-red-700"
                            : "text-green-700"
                        }`}
                      >
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-2 w-full"></div>
          </div>
        </div>
      }
    />
  );
};

export default HistoryPage;
