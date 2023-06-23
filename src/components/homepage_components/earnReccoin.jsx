import { Link } from "react-router-dom";
import reccoinBox from "../../assets/reccoin.png";
import reccoin_reward from "../../assets/reccoin_reward.png";

export default function EarnReccoin() {
    return <div className="bg-white w-full items-center pt-[95px] pb-[110px] px-4">
        <p className="text-primary60 text-[4.3125rem] font-semibold">
            Earn <br />Reccoin
        </p>
        <img src={reccoinBox} alt="reccoin box" className="w-[398.99px] h-[344.56px]" />
    </div>
}

export function EarnReccoinReward() {
    return <div className=" w-full h-[500px] items-center pl-6 ">
        
            <div className="relative mt-16 mb-20 h-[400px] text-[#005232] text-[16px] font-montserrat font-[700] ">
            {/* bg-earnRecyloxBg bg-contain bg-no-repeat bg-right-bottom -scale-x-100 */}
               
               <p className="">
                Earn Reccoin tokens for every item you recycle through <br /> 
                our waste management system. From plastic bottles to <br />
                paper and rubber, each contribution counts towards <br />
                building a more sustainable future. <br /> 
                The more you recycle, the more Reccoin you earn!
               </p>

                <Link to={'/user-dashboard'} 
                    className='absolute top-[280px] py-2 px-8 bg-primary40 rounded-sm text-white font-black'> 
                    Earn Now!
                </Link>
                <img src={reccoin_reward} alt="" className=" w-[400px] h-[600px] absolute -right-8 top-5 object-contain -scale-x-100 " />
            </div>
            
          
    </div>
}

