import React, { useState } from "react";
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";
import stateGreen from "../../assets/stateGreen.svg";
import stateRed from "../../assets/stateRed.svg";

const HistoryPage = () => {
  const data = [
    {
      value: 78,
      weight: "150 KG",
      id: "XXXX....XXX....XXX...XXX...",
      address: "001f....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 89,
      weight: "98 KG",
      id: "XXXX....XXX....XXX...XXX...",
      date: "5TH June 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: "CREDIT",
      address: "ADDRESS",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: "CREDIT",
      address: "ADDRESS",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },

    {
      value: 97,
      weight: "123 KG",
      id: 45,
      weight: "100 KG",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 55,
      weight: "TOTAL WEIGHT",
      id: 54,
      weight: "100 KG",
      id: "XXXX....XXX....XXX...XXX...",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 82,
      weight: "650 KG",
      id: 235,
      weight: "100 KG",
      id: "XXXX....XXX....XXX...XXX...",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 53,
      weight: "100 KG",
      id: 85,
      weight: "100 KG",
      id: "XXXX....XXX....XXX...XXX...",
      date: "5TH MAY 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: 32,
      weight: "100 KG",
      id: 49,
      weight: "140 KG",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 75,
      weight: "100 KG",
      id: 60,
      weight: "900 KG",
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
          <div className="font-black text-primary40 p-2">
            <h1 className="text-4xl font-bold text-primary40">History</h1>
            <h3 className="text-2xl font-bold text-primary40 py-2">
              Transactions
            </h3>
          </div>

          <div>
            {data.map((transaction, index) => (
              <div
                key={index}>
                <table className="-m-2 md:mx-4 w-full table-fixed border-2 border-black bg-gradient-to-r from-green-400 via-green-200 to-white">
                  <tr className="">
                    <th className="w-1/6 m-2">TOTAL VALUE</th>
                    <th className="w-2/6 m-2">TOTAL WEIGHT</th>
                    <th className="w-1/6 m-2">TRANSACTION ID</th>
                    <th className="w-1/6 m-2">ADDRESS</th>
                    <th className="w-1/6 m-2">
                      <div className="flex justify-end">
                        <img className={`h-7 w-7   m-2 p-2  ${transaction.status === "DECLINED"
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
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <td className="text-center text-primary40 font-extrabold"> {transaction.value}</td>
                    <td className="text-center text-primary40 font-extrabold">{transaction.weight}</td>
                    <td className="text-center text-primary40 font-extrabold"> {transaction.id}</td>
                    <td className="text-center text-primary40 font-extrabold"> {transaction.address}</td>
                    <td className="items-end text-end">
                      <ul>


                        <li className="text-xs font-bold text-gray-500">{transaction.date}</li>
                        <li className={`text-right font-extrabold ${transaction.status === "DECLINED"
                          ? "text-red-700"
                          : "text-green-700"
                          }`}
                        >
                          {transaction.status} </li>
                      </ul>
                    </td>
                  </tr>
                </table>
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
