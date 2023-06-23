
import React, { useState } from "react";
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";
import stateGreen from "../../assets/stateGreen.svg";
import stateRed from "../../assets/stateRed.svg";

const HistoryPage = () => {
  const data = [
    {
      value: 78,
      _weight: "150 KG",
      id: "XXXX....XXX.....",
      _address: "001f....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 89,
      _weight: "98 KG",
      id: "XXXX....XXX.....",
      date: "5TH June 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: "45",
      _weight: "123 KG",
      _address: "021A....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: "CREDIT",
      _address: "021f....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },

    {
      value: 97,
      _weight: "123 KG",
      id: 45,
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 55,
      _weight: "TOTAL WEIGHT",
      id: "XXXX....XXX.....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 82,
      _weight: "650 KG",
      id: "XXXX....XXX.....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 53,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      date: "5TH MAY 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: 32,
      _weight: "100 KG",
      id: 49,
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 75,
      _weight: "100 KG",
      id: 49,
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: "CREDIT",
      _address: "0013f...",
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
                  <table className= "-m-2 min-w-full table-fixed border-2 border-black bg-gradient-to-r from-green-400 via-green-200 to-white">
                    <thead>
                      <tr>
                        <th className="w-1/6 px-2 py-1">
                          <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <span className="font-semibold">TOTAL VALUE</span>
                          </div>
                        </th>
                        <th className="w-1/6 px-2 py-1">
                          <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <span className="font-semibold">TOTAL WEIGHT</span>
                          </div>
                        </th>
                        <th className="w-1/6 px-2 py-1">
                          <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <span className="font-semibold">TRANSACTION ID</span>
                          </div>
                        </th>
                        <th className="w-1/6 px-2 py-1">
                          <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <span className="font-semibold">ADDRESS</span>
                          </div>
                        </th>
                        <th className="w-1/6 px-2 py-1">
                          <div className="flex justify-end">
                            <img
                              className={`h-7 w-7 p-2 ${transaction.status === "DECLINED" ? "bg-red-700" : "bg-green-700"}`}
                              src={transaction.status === "DECLINED" ? stateRed : stateGreen}
                              alt="State Icon Green"
                            />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/6 px-2 py-1 text-center text-primary40 font-extrabold">{transaction.value}</td>
                        <td className="w-1/6 px-2 py-1 text-center text-primary40 font-extrabold">{transaction._weight}</td>
                        <td className="w-1/6 px-2 py-1 text-center text-primary40 font-extrabold">{transaction.id}</td>
                        <td className="w-1/6 px-2 py-1 text-center text-primary40 font-extrabold">{transaction._address}</td>
                        <td className="w-1/6 px-2 py-1 items-end text-right">
                          <ul>
                            <li className="text-xs font-bold text-gray-500">{transaction.date}</li>
                            <li
                              className={`font-extrabold whitespace-nowrap overflow-hidden ${transaction.status === "DECLINED" ? "text-red-700" : "text-green-700"
                                }`}
                            >
                              {transaction.status}
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
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