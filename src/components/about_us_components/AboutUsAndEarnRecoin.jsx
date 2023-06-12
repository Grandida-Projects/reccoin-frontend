import { useState } from "react"
import About from "../homepage_components/about";
import { EarnReccoinReward } from "../homepage_components/earnReccoin";
import aboutUsWhiteIcon from '../../assets/aboutUsWhiteIcon.svg'
import aboutUsBlackIcon from '../../assets/aboutUsBlackIcon.svg'
import earnReccoinWhiteIcon from '../../assets/earnReccoinWhiteIcon.svg'
import earnReccoinBlackIcon from '../../assets/earnReccoinBlackIcon.svg'

const AboutUsAndEarnRecoin = () => {

    const [componentToDisplay, setComponentToDisplay] = useState(0)

  return  <section className=" bg-aboutbg">
        
        <div className="flex flex-col md:flex-row justify-center">
            <button onClick={() => setComponentToDisplay(0)} className={` font-montserrat font-black text-lg flex flex-row items-center border rounded-sm px-12 py-4  mr-8 ${componentToDisplay == 0 ? 'bg-primary40 text-white' : "bg-white text-black"}` }>
                <img src={componentToDisplay == 0 ? aboutUsWhiteIcon : aboutUsBlackIcon} alt=" about us icon" className="mr-4"/>About Us
            </button>
            <button onClick={() => setComponentToDisplay(1)} className={`font-montserrat font-black text-lg flex flex-row items-center  border rounded-sm px-12 py-4 ${componentToDisplay == 1 ? 'bg-primary40 text-white' : "bg-white text-black"}`  }>
                <img src={componentToDisplay == 1 ? earnReccoinWhiteIcon : earnReccoinBlackIcon} alt="earn reccoin icon" className="mr-4" />Earn Reccoin
            </button>
        </div>

        {

            componentToDisplay == 0 ? < About/> : <EarnReccoinReward/>
        }
    </section>
  
}

export default AboutUsAndEarnRecoin