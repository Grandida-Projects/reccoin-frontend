import { Link } from "react-router-dom";
import reccoinBox from "../../assets/reccoin.png";
import reccoin_reward from "../../assets/reccoin_reward.png";

export default function EarnReccoin() {
    return <div className="bg-white w-full flex justify-center items-center flex-col md:flex-row gap-7 pt-[95px] pb-[110px] px-4">
        <p className="text-primary60 text-[4.3125rem] font-semibold">
            Earn <br />Reccoin
        </p>
        <img src={reccoinBox} alt="reccoin box" className="w-[398.99px] h-[344.56px]" />
    </div>
}

export function EarnReccoinReward() {
    return <div className=" w-full flex justify-center items-center flex-col md:flex-row gap-7 py-4 px-6">
        <img src={reccoin_reward} alt="reccoin box" className="w-[450px] h-full" />
        <div>
            <p className="text-primary60 text-[74px] font-bold leading-[70px]">
                <span className="text-black font-semibold">Earn</span> <br />Reccoin
            </p>
            <p className="mt-10 text-[#005232] text-[1.2rem] font-montserrat font-semibold max-w-[640px]">
                Earn Reccoin tokens for every item you recycle through our waste management system. From plastic bottles to paper and rubber, each
                contribution counts towards building a more
                sustainable future. The more you recycle, the
                more Reccoin you earn!
            </p>
            <br />
          <Link to={'/user-dashboard'} className='py-2 px-14 bg-primary40 rounded-sm text-white my-16 font-openSans font-black'> Earn Now!</Link>
        </div>
    </div>
}

