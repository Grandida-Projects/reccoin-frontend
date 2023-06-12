import React from 'react'
import MediumButton from '../buttons/mediumButton'
import aboutUsImage from '../../assets/aboutUs.svg'
import settingsIcon from '../../assets/settingsIc.svg'
import innovationIcon from '../../assets/innovationIc.svg'
import environmentIcon from '../../assets/environmentIc.svg'
import rewardIcon from '../../assets/rewardIc.svg'
import trustIcon from '../../assets/trustIc.svg'
import { Link } from 'react-router-dom'

const About = () => {

  const aboutData = [
    {
      'title': "Our Expertise",
      'icon': settingsIcon
    },
    {
      'title': "Innovative Recycling Approach",
      'icon': innovationIcon
    },
    {
      'title': "Environmental Impact",
      'icon': environmentIcon
    },
    {
      'title': "Rewards & Incentives",
      'icon': rewardIcon
    },
    {
      'title': "Trust & Transparency",
      'icon': trustIcon
    }
  ]

  return  <div className="w-[100%] pt-8">

      {/* title */}
      <p className='text-center text-[2rem] font-bold text-primary60 font-openSans'>Empowering Change through Recycling:</p>

      {/* description and image */}
      <div className='flex justify-around items-center flex-col-reverse md:flex-row gap-7 pb-4 px-12'>
        <div className='max-w-[640px]'>
        {/* description */}
          {
            aboutData.map((item, index) => 
              <p key={index} className='py-4  flex flex-row font-black font-montserrat'> <img src={item.icon} alt={`${item.title} icon`} className='mr-4 w-8 h-8' /> {item.title}</p>
            )
          }
          
          {/* learn more button */}
          <br />
          <Link to={'/about-us'} className='py-2 px-14 bg-primary40 rounded-sm text-white my-16 font-openSans font-black'> Learn More</Link>
        </div>
        {/* image */}
        <img src={aboutUsImage} alt="reccoin box" className="w-[450px] h-[500px]" />
      </div>  
  </div>
}

export default About