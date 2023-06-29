import { useState } from "react";
import {Link} from "react-router-dom";
import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout"
import { CompanyDashboardData } from "../../data/DepositTransactionData";
import closeIcon from "../../assets/close.svg";
import { useToken } from "../../context/recylox";
import eyesIcon from '../../assets/eyesIcon.svg';
import eyesOpenIcon from '../../assets/eyeOpenIcon.svg';
import { useRecycle } from "../../context/recycle";
import usersIcon from '../../assets/users.svg'
import merchantIcon from '../../assets/merchant.svg'

// deposit plastic content
const DepositReccoinTab = ({ toggleClose, depositPlastic,  isMethodCallLoading, isMethodCallSuccessful }) => {

  const [companyName, setCompanyName] = useState('');
  const [transferAmt, setTransferAmt] = useState(0);
  const [isTermsChecked, setisTermsChecked] = useState(false)

  // const DepositReccoin = () => {
  //     if (!companyName) {
  //         alert("Input company name");
  //     } else if (!transferAmt){
  //         alert("Input plastic weight")
  //     }
  //     else if (!isTermsChecked) {
  //         alert("Agree to Recylox Terms")
  //     } else {
  //         depositPlastic(companyName, transferAmt)
  //     }
  // }

  return (
    <div className="bg-[#005232] w-full mx-auto flex flex-col justify-start text-white p-10 font-montserrat">
        {/* close button */}
        <button className="flex flex-row justify-end" onClick={toggleClose}>
            <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
        </button>
        <h1 className="font-bold text-2xl my-8">Deposit Reccoin</h1>
        {/* company name */}
        <label htmlFor="companyName">Company Name</label>
        <input type="text" name="companyName" id="companyName"
                onChange={(fn) => setCompanyName(fn.target.value)}
                className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mb-4"
        />
        {/* plastic weight */}
        <label htmlFor="depositRecylox">Amount (RC)</label>
        <input type="text" name="depositRecylox" id="depositRecylox"
                onChange={(ln) => setTransferAmt(ln.target.value)}
                className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mb-4"
        />
        <div className="flex">
            <input type="checkbox" name="depositRecylox" id="depositRecylox"
                    className="h-6 w-6 mr-1"
                    onChange={() => setisTermsChecked(!isTermsChecked)}
                    value={isTermsChecked}
            />
            <span className="mr-1">I am sure the details I provided are correct</span>
        </div>
        {/* submit button */}
        <button 
            className="w-[60%] border-2 border-white rounded-lg p-2 bg-[#006D44] my-6"
            onClick={() => null}
        >
        {isMethodCallLoading ? "Loading..." : isMethodCallSuccessful ? "Picker created" : "Register"}
        </button>
    </div>
  );
};

// transfer reccoin tab
const TransferRecyloxTab = ({toggleClose, isTransferSuccessful, transferLoading,  TransferToken}) => {

  const [recipientAddress, setRecipientAddress] = useState('');
  const [transferAmount, setTransferAmount] = useState(0);
  const [isTransferChecked, setIsTransferChecked] = useState(false);

  const transferToken = async () => {

      if (!recipientAddress) {
          alert("Input recipient address")
      }
      else if (!transferAmount) {
  
          alert("Input transfer amount")
      } 
      else if(!isTransferChecked) {
          alert("You need to agree that the details provided are correct")
      }
      else {
          const transfer_amt = ethers.utils.parseEther(transferAmount)
         await TransferToken(recipientAddress, transfer_amt)
      }
  }
  
return   <div className="bg-[#005232] w-full mx-auto flex flex-col justify-start text-white p-10">
  {/* header */}
  <div className='relative'>
      {/* title */}
      <h1 className='font-montserrat text-[1.5rem] font-[700] text-center'>Transfer Recyclox</h1>
      {/* close button */}
      <button className="absolute right-0 -top-4" onClick={toggleClose}>
          <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
      </button>
  </div>
  {/* recipient's address */}
  <label htmlFor="recipientAddress" className='mt-[5rem] font-montserrat text-[16px] font-[600]'>Recipient's Address</label>
  <input type="text" name="recipientAddress" id="recipientAddress"
      onChange={(adr) => setRecipientAddress(adr.target.value)}
      className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mt-[1rem] mb-[2.5rem]"
  />
  {/* amount to transfer */}
  <label htmlFor="transferAmount" className='font-montserrat text-[16px] font-[600]'>Amount</label>
  <input type="number" name="transferAmount" id="transferAmount"
      onChange={(amt) => setTransferAmount(amt.target.value)}
      className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mt-[1rem]"
  />
  {/* checkbox */}
  <div className="flex mt-[1.4rem]">
      <label htmlFor="check_box"
          onClick={() => setIsTransferChecked(!isTransferChecked)}
          className = {`relative h-6 w-6 p-[2px] mr-1 ${isTransferChecked ? 'bg-[#158B5E]' : ""} border-[2px] border-white transition duration-150 ease-in-out`}
      >
          {isTransferChecked ? <img src={tickIcon} alt="tick-icon" className='absolute top-1 left-1 h-3 w-3' /> : ""}
      </label>
      
      <span className="mr-1 italic font-[400] font-montserrat text-[0.8rem]">I am sure the details I provided are correct</span>
  </div>
  {/* submit button */}
  <button className="w-[60%] border-2 border-white rounded-lg p-2 bg-[#158B5E] my-6"
  onClick={transferToken}>
  {transferLoading ? "Loading..." : "TRANSFER"}
  </button>
  </div>

}

const CompanyDashboard = () => {

  const {transferTokens, isMethodCallSuccessful, isMethodCallLoading} = useToken();
  const {contract, tokenHolderBalance, picker_count} = useRecycle()

  const [componentToDisplay, setComponentToDisplay] = useState(0);
  const [toggleBalance, setToggleBalance] = useState(false);
  const [balance, setBalance] = useState(0)

  // function to close nav content
  const toggleCLose = () => {
      setComponentToDisplay(0);
  };

  // 
  const ToggleBalance = () => {
    if (!contract) {
        alert("contract not initialized")
    } else  {
        setToggleBalance(!toggleBalance)
    }
}

  return <CompanyDashboardLayout active_link={"Dashboard"} dashboard_content={
    <div className=' bg-white font-montserrat border-2 border-[#ECECEC]'>

    {/* settings main content  */}
    <div className='flex flex-row w-full'>

        {/*  content header and nav items*/}
        <div className='px-4 mt-10 w-full'>
            {/* content header */}
            <h2 className='text-[#71B453] italic font-montserrat font-[400] text-[1rem]'>Welcome back!</h2>
            <div className='w-full flex flex-row items-center my-6'>
              <div className="flex flex-col mr-12 ">
                 {/* toggle button n balance */}
                <div className="flex flex-row justify-between items-center">
                  <img src={merchantIcon} alt="merchant-icon" />
                  <h2 className='text-primary40 font-montserrat font-[500] text-[20px] ml-4'>Balance</h2>
                  <img src={toggleBalance ? eyesOpenIcon : eyesIcon} alt="eyes-icon" className='h-4 w-4 ml-4 hover:cursor-pointer' onClick={ToggleBalance} />
                </div>
                {/* balance */}
                <h1 className='text-[#0D4D00] text-[1.6rem] font-[700] font-montserrat my-4'>{toggleBalance ? tokenHolderBalance.toString() : "XXXXX"}</h1>
                {/* pickers div */}
              </div>
             
              <div className=" w-full bg-primary40 p-4 rounded-md flex flex-col text-white">
                <div className="flex flex-row justify-between items-center">
                  <img src={usersIcon} alt="users-icon"/>
                  <h2 className="text-[16px] font-[500] ">ACTIVE PICKERS</h2>
                </div>
                <h2 className="text-[24px] font-[600]">{picker_count.toString()}</h2>
              </div>
               
            </div>
            {/* settings nav items */}
            <ul className='w-full'>
            {
                CompanyDashboardData.map((item, index) =>
                    <Link to={item.user_a_link} key={index} 
                        onClick={() => setComponentToDisplay(index+1)}
                        className=' flex flex-row bg-[rgba(0, 109, 68, 0.01)] border-2 border-[#ECECEC] p-3 mb-4 items-center rounded-lg active:bg-[rgba(0, 109, 68, 0.33)]'>
                        <img src={item.icon} alt={`${item.title} icon`} className='mr-4'/>
                        <h1>{item.title}</h1>
                    </Link>
                )
            }
            </ul>
        </div>

        {/* settings display nav content */}
        <div className='w-full'>
            {
              componentToDisplay === 1 ? <DepositReccoinTab 
                // toggleClose={toggleCLose}
                // depositPlastic = {depositReccoin}                                    
                // isMethodCallLoading = {isMethodCallLoading}
                // isMethodCallSuccessful = {isMethodCallSuccessful}
              /> 
              : componentToDisplay === 2 ? <TransferRecyloxTab 
                  toggleClose={toggleCLose}
                  TransferToken={transferTokens}
                  transferLoading={isMethodCallLoading}
                  isTransferSuccessful={isMethodCallSuccessful}
              /> 
              : ""
            }

        </div>
    </div>
</div>
  // <CompanyTransactions />
}/>;
}

export default CompanyDashboard