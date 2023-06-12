import React, {useState} from 'react'
import UserDashboardLayout from '../../components/dashboard_components/UserDashboardLayout'
import {DepositTransaction} from "../../data/DepositTransactionData";
import {Link} from "react-router-dom";

import closeIcon from "../../assets/close.svg";

const DepositPlasticTab = ({ toggleClose }) => {
    const [companyName, setCompanyName] = useState('');
    const [depositPlastic, setDepositPlastic] = useState('');

    return (
        <div className="bg-[#005232] w-full mx-auto flex flex-col justify-start text-white p-10">
            {/* close button */}
            <button className="flex flex-row justify-end" onClick={toggleClose}>
                <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
            </button>
            <h1 className="font-bold text-2xl my-8">Deposit Plastic</h1>
            {/* company name */}
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" id="companyName"
                   onChange={(fn) => setCompanyName(fn.target.value)}
                   className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mb-4"
            />
            {/* plastic weight */}
            <label htmlFor="depositPlastic">Plastic Weight (kg)</label>
            <input type="text" name="depositPlastic" id="depositPlastic"
                   onChange={(ln) => setDepositPlastic(ln.target.value)}
                   className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mb-4"
            />
            <div className="flex">
                <input type="checkbox" name="depositPlastic" id="depositPlastic"
                       className="h-6 w-6 mr-1"
                />
                <span className="mr-1">I am sure the details I provided are correct</span>
            </div>
            {/* submit button */}
            <button className="w-[60%] border-2 border-white rounded-lg p-2 bg-[#006D44] my-6">
                SUBMIT
            </button>
        </div>
    );
};

// notification settings content
const TransactionTab = ({ toggleClose }) => {
    // set toggle state

    return <>
        <div className='bg-[#005232] w-full h-full flex flex-col justify-start text-white p-4'>
            {/* close button */}
            <button className='flex flex-row justify-end' onClick={toggleClose}>
                <img src={closeIcon} alt="close-icon" className='w-8 h-8' />
            </button>
            <h1 className='font-bold text-2xl my-8'>Transactions</h1>

            <div className="bg-[#ffffff] flex rounded-lg m-2 p-2 flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">Total Value</div>
                    <div className="text-green-800 text-[10px]">55</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TOTAL WEIGHT</div>
                    <div className="text-green-800 text-[10px]">100 KG</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TRANSACTION ID</div>
                    <div className="text-green-800 text-[10px]"><i>XXXX....XXX....XXX...XXX...</i></div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1 text-right">
                    <div className="uppercase font-bold text-black p-2 text-xs"><i className="">X</i></div>
                    <div className="text-green-800 text-[8px]"><span><em>5th May 2020, 12:23</em></span></div>
                </div>
            </div>
            <div className="bg-[#ffffff] flex rounded-lg m-2 p-2 flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">Total Value</div>
                    <div className="text-green-800 text-[10px]">55</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TOTAL WEIGHT</div>
                    <div className="text-green-800 text-[10px]">100 KG</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TRANSACTION ID</div>
                    <div className="text-green-800 text-[10px]"><i>XXXX....XXX....XXX...XXX...</i></div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1 text-right">
                    <div className="uppercase font-bold text-black p-2 text-xs"><i className="">X</i></div>
                    <div className="text-green-800 text-[8px]"><span><em>5th May 2020, 12:23</em></span></div>
                </div>
            </div>
            <div className="bg-[#ffffff] flex rounded-lg m-2 p-2 flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">Total Value</div>
                    <div className="text-green-800 text-[10px]">55</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TOTAL WEIGHT</div>
                    <div className="text-green-800 text-[10px]">100 KG</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TRANSACTION ID</div>
                    <div className="text-green-800 text-[10px]"><i>XXXX....XXX....XXX...XXX...</i></div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1 text-right">
                    <div className="uppercase font-bold text-black p-2 text-xs"><i className="">X</i></div>
                    <div className="text-green-800 text-[8px]"><span><em>5th May 2020, 12:23</em></span></div>
                </div>
            </div>
            <div className="bg-[#ffffff] flex rounded-lg m-2 p-2 flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">Total Value</div>
                    <div className="text-green-800 text-[10px]">55</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TOTAL WEIGHT</div>
                    <div className="text-green-800 text-[10px]">100 KG</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TRANSACTION ID</div>
                    <div className="text-green-800 text-[10px]"><i>XXXX....XXX....XXX...XXX...</i></div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1 text-right">
                    <div className="uppercase font-bold text-black p-2 text-xs"><i className="">X</i></div>
                    <div className="text-green-800 text-[8px]"><span><em>5th May 2020, 12:23</em></span></div>
                </div>
            </div>
            <div className="bg-[#ffffff] flex rounded-lg m-2 p-2 flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">Total Value</div>
                    <div className="text-green-800 text-[10px]">55</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TOTAL WEIGHT</div>
                    <div className="text-green-800 text-[10px]">100 KG</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
                    <div className="font-sans font-bold uppercase text-black text-[12px]">TRANSACTION ID</div>
                    <div className="text-green-800 text-[10px]"><i>XXXX....XXX....XXX...XXX...</i></div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1 text-right">
                    <div className="uppercase font-bold text-black p-2 text-xs"><i className="">X</i></div>
                    <div className="text-green-800 text-[8px]"><span><em>5th May 2020, 12:23</em></span></div>
                </div>
            </div>
        </div>
    </>
}

const UserDashboard = () => {
    // Component to Display for dashboard
    const [componentToDisplay, setComponentToDisplay] = useState(1);

    // function to close nav content
    const toggleCLose = () => {
        setComponentToDisplay(1);
    };

    return (
        <UserDashboardLayout active_link={'Dashboard'} dashboard_content={
            <>
                <div className='bg-white border-2 border-[#ECECEC]'>

                    {/* settings main content  */}
                    <div className='flex flex-row w-full '>

                        {/* settings content heade and nav items*/}
                        <div className='px-4 mt-10 w-full'>
                            {/* settings content header */}
                            <div className='flex flex-row items-center my-6'>
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9.5H2V16.5H5V9.5Z" fill="green"/>
                                    <path d="M11.5 9.5H8.5V16.5H11.5V9.5Z" fill="green"/>
                                    <path d="M20 18.5H0V21.5H20V18.5Z" fill="green"/>
                                    <path d="M18 9.5H15V16.5H18V9.5Z" fill="green"/>
                                    <path d="M10 0.5L0 5.5V7.5H20V5.5L10 0.5Z" fill="green"/>
                                </svg>
                                <h2 className='text-primary40 font-montserrat font-black text-[1.6rem]'>Balance</h2>
                            </div>
                            {/* settings nav items */}
                            <ul className='w-full'>
                                {
                                    DepositTransaction.map((item, index) =>
                                        <Link to={item.user_a_link} key={index} onClick={() => setComponentToDisplay(index+1)}
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
                                componentToDisplay === 1 ?
                                    <DepositPlasticTab toggleClose={toggleCLose}/> : componentToDisplay === 2 ?
                                        <TransactionTab toggleClose={toggleCLose}/> : ""}

                        </div>
                    </div>
                </div>
            </>
        }/>
    )
}

export default UserDashboard