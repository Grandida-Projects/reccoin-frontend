import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { MdMoveToInbox, MdOutlinePayments } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";

function CompanyDashboardComponent() {
    const [showDeposit, setShowDeposit] = useState(true);
    
    
  return (
    <div className="mt-[29px] w-full bg-white flex flex-row max-w-7xl">
      <div className="w-[60%] px-10 py-8 h-full">
        <p className="text-primaryLight font-montserrat text-[15px]">Welcome back!</p>
        <div className="flex flex-row my-[52px] justify-between">
          <div>
            <div className="flex flex-row items-center">
              <AiFillBank color="#000" size={21} className="mr-[11px]" />
              <p className="">Balance</p>
              <BsEye color="#0D4D00" size={23} className="cursor-pointer ml-[21px]" />
            </div>
            <p className="mt-[13px] font-montserrat text-[32px] font-bold text-primary60">300,000 RC</p>
          </div>
          <div className="flex flex-col bg-primary50 rounded-[10px] p-3">
            <div className="flex gap-1 items-center">
              <HiOutlineUsers color="#fff" size={27} />
              <p className="font-montserrat text-[16px] font-medium text-white">ACTIVE PICKERS</p>
            </div>
            <p className="font-montserrat text-[24px] font-semibold text-white text-right">2,580</p>
          </div>
        </div>
        <div className="h-[68px] bg-primary40/40 w-full rounded-lg flex items-center gap-[52.38px] px-[12.38px] py-1 mb-[15px] border-[3px] border-[#ECECEC] cursor-pointer" onClick={() => setShowDeposit(prev => true)}>
          <MdMoveToInbox color="#0D4D00" size={28} />
          <p className="text-primary60 font-semibold font-montserrat text-[23px]">Deposit Reccoin</p>
        </div>
        <div className="h-[68px] w-full rounded-lg flex items-center gap-[52.38px] px-[12.38px] py-1 border-[3px] border-[#ECECEC] cursor-pointer" onClick={() => setShowDeposit(prev => false)}>
          <MdOutlinePayments color="#0D4D00" size={28} />
          <p className="text-primary60 font-semibold font-montserrat text-[23px]">Buy Reccoin</p>
        </div>
      </div>
      <>
      {showDeposit ? (
        <div className="w-[40%] bg-primary50 p-3 ">
          <div className="w-full flex justify-end mb-2">
            <RiCloseCircleFill color="#fff" size={25} className="cursor-pointer" />
          </div>
          <div className="w-full max-w-[250px] mx-auto flex flex-col gap-8">
            <p className="text-white font-bold font-montserrat text-[23px]">Deposit Reccoin</p>
            <input type="text" name="companyName" placeholder="Company Nmae" className="bg-transparent w-full outline-none border-b-[3px] border-white pb-5 caret-white placeholder:text-white" />
            <input type="text" name="Reccoin" placeholder="Reccoin (RC)" className="bg-transparent w-full outline-none border-b-[3px] border-white pb-5 caret-white placeholder:text-white" />
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <input type="checkbox" name="terms" className="w-7 h-6 accent-[#158B5E] outline-none border-b-[3px]" />
              <p className="text-white font-montserrat text-[15px] leading-4">I am sure the details I provided are correct</p>
            </div>

            <button className="border-[2px] border-white w-20 h-9 text-white bg-[#158B5E] text-[10px] rounded-md">DEPOSIT</button>

            <div className="mb-[140px]">
              <p className="text-[#EDE7D1] italic font-montserrat text-[10px] leading-4">Deposit Successful! Please, keep your Transaction ID somewhere safe.</p>
              <p className="text-white italic font-montserrat font-semibold text-[12px] leading-6">Transaction ID</p>
              <div className="h-20 w-[172px] bg-primary40/60  rounded-[11px] p-2 flex items-center">
                <p className="text-white italic font-montserrat font-semibold text-[12px] leading-6">XXX...XXXX....XXXX</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[40%] bg-primary50 p-3 ">
          <div className="w-full flex justify-end mb-2">
            <RiCloseCircleFill color="#fff" size={25} className="cursor-pointer" />
          </div>
          <div className="w-full max-w-[250px] mx-auto flex flex-col gap-8">
            <p className="text-white font-bold font-montserrat text-[23px]">Buy Reccoin</p>
            <input type="text" name="companyName" placeholder="Company Nmae" className="bg-transparent w-full outline-none border-b-[3px] border-white pb-5 caret-white placeholder:text-white" />
            <input type="text" name="Reccoin" placeholder="Reccoin (RC)" className="bg-transparent w-full outline-none border-b-[3px] border-white pb-5 caret-white placeholder:text-white" />
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <input type="checkbox" name="terms" className="w-7 h-6 accent-[#158B5E] outline-none border-b-[3px]" />
              <p className="text-white font-montserrat text-[15px] leading-4">I am sure the details I provided are correct</p>
            </div>

            <button className="border-[2px] border-white w-20 h-9 text-white bg-[#158B5E] text-[10px] rounded-md">DEPOSIT</button>

            <div className="mb-[140px]">
              <p className="text-[#EDE7D1] italic font-montserrat text-[10px] leading-4">Deposit Successful! Please, keep your Transaction ID somewhere safe.</p>
              <p className="text-white italic font-montserrat font-semibold text-[12px] leading-6">Transaction ID</p>
              <div className="h-20 w-[172px] bg-primary40/60  rounded-[11px] p-2 flex items-center">
                <p className="text-white italic font-montserrat font-semibold text-[12px] leading-6">XXX...XXXX....XXXX</p>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
    </div>
  );
}

export default CompanyDashboardComponent;
