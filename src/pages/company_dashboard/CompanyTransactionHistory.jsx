import stateGreen from "../../assets/stateGreen.svg";
import stateRed from "../../assets/stateRed.svg";
import { TbArrowsRightLeft } from "react-icons/tb";
import { CgSearch } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";
import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout";

const CompanyTransactionHistory = () => {
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
      _address: "001f....",
      date: "5TH June 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: "45",
      _weight: "123 KG",
      id: "XXXX....XXX.....",
      _address: "021A....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: "CREDIT",
      id: "XXXX....XXX.....",
      _address: "021f....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },

    {
      value: 97,
      _weight: "123 KG",
      id: "XXXX....XXX.....",
      _address: "001f....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 55,
      _weight: "TOTAL WEIGHT",
      id: "XXXX....XXX.....",
      _address: "0047....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 82,
      _weight: "650 KG",
      id: "XXXX....XXX.....",
      _address: "09B6....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 53,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      _address: "046f....",
      date: "5TH MAY 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: 32,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      _address: "031f....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 75,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      _address: "001h....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: "CREDIT",
      id: "XXXX....XXX.....",
      _address: "0013f...",
      date: "5TH MAY 2020, 12:23",
      status: "CREDIT",
    },
    {
      value: 75,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      _address: "001h....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
  ];

  return (
    <CompanyDashboardLayout active_link={"Transactions"}
      dashboard_content={
        <div className="container bg-white px-8">

          {/* Transactions title */}
            <div className="flex items-center gap-3">
                <TbArrowsRightLeft className="text-primary50 text-[29px]" />
                <p className="font-montserrat text-primary50 font-bold text-[35px]">Transactions</p>
            </div>
            <p className="leading-[64px] font-bold italic text-primaryLight">Welcome back. You have 1 transaction to verify.</p>

            <div className="flex justify-between">
                <div className="flex items-center w-full max-w-[382px] bg-white border border-primary50 rounded-[10px] clip px-2.5">
                <input type="text" name="search" placeholder="Search Transactions" className="h-[60px] w-full outline-none placeholder:text-primary50/30 placeholder:font-bold" />
                <CgSearch className="text-primary50 text-[27px] cursor-pointer" />
                </div>
                <div className="flex justify-end items-center gap-[26px] w-full max-w-[430px]">
                    <div className="flex items-center w-full max-w-[202px] bg-white border border-primary50 rounded-[10px] clip px-2.5">
                        <input type="text" name="search" placeholder="Filter" className="h-[60px] w-full outline-none placeholder:text-primary50/30 placeholder:font-bold" />
                        <TiArrowSortedDown className="text-primary50 cursor-pointer" />
                    </div>
                    <div className="flex items-center w-full max-w-[151px] bg-white border border-primary50 rounded-[10px] clip px-2.5">
                        <input type="text" name="search" placeholder="Newest on top" className="h-[60px] w-full outline-none placeholder:text-primary50/30" />
                        <TiArrowSortedDown className="text-primary50 cursor-pointer" />
                    </div>
                </div>
            </div>

            {data.slice(0,5).map((transaction, index) => (
              <div
                key={index}>
                <table className="mt-8 min-w-full border border-primary40 rounded-[10px]">
                  <thead>
                    <tr className=" ">
                      <th className="px-2 py-1">
                        <span className="font-semibold">TRANSACTION ID</span>
                      </th>
                      <th className="px-2 py-1">
                        <span className="font-semibold">ADDRESS</span>
                      </th>
                      <th className="px-2 py-1">
                        <span className="font-semibold">ORIGIN</span>
                      </th>
                      <th className="px-2 py-1">
                        <span className="font-semibold">TOTAL WEIGHT</span>
                      </th>
                      <th className="px-2 py-1">
                        <span className="font-semibold">TOTAL VALUE</span>
                      </th>
                      <th className="px-2 py-1">
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
                    <tr className="text-primary40 text-xs md:text-lg font-extrabold">
                      <td className="px-2 py-1 text-center ">{transaction.value}</td>
                      <td className="px-2 py-1 text-center ">{transaction._weight}</td>
                      <td className="px-2 py-1 text-center ">{transaction.id}</td>
                      <td className="px-2 py-1 text-center ">{transaction._address}</td>
                      <td className="px-2 py-1 items-end text-right">
                        <ul>
                          <li className="text-xs font-bold text-gray-500">{transaction.date}</li>
                          <li
                            className={`font-extrabold ${transaction.status === "DECLINED" ? "text-red-700" : "text-green-700"
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
            {/* <div className="h-2 w-full"></div> */}

            {/* pagination */}
            <div className="flex items-center justify-between p-4 ">
                <p className="font-montserrat text-black/25">2 out of 34</p>
                <div className="flex items-center gap-4 text-primaryLight font-semibold">
                <p className="cursor-pointer">Previous</p>
                <div className="flex items-center gap-4">
                    <p className="font-bold text-primary50 cursor-pointer">1</p>
                    <p className="font-light cursor-pointer">2</p>
                    <p className="font-light cursor-pointer">3</p>
                    <p className="font-bold">...</p>
                </div>
                <p className="cursor-pointer">Next</p>
                </div>
            </div>
        </div>
      }
    />

  );
};
export default CompanyTransactionHistory;