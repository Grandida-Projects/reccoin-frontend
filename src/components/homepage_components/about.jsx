import React from 'react'
import MediumButton from '../buttons/mediumButton'
import aboutUsImage from '../../assets/aboutUs.svg'

const About = () => {
  return <>
   
    <div className="bg-[#F2FAF7] w-full pt-8">

      {/* title */}
      <p className='text-center text-[2.4rem] font-bold text-primary60'>ABOUT US</p>

        {/* description and image */}
        <div className='flex justify-around items-center flex-col md:flex-row gap-7 py-4 px-12'>
          <div className='max-w-[640px]'>
          {/* description */}
            <p className='text-black font-base text-[#005232] text-[1.2rem] font-semibold mb-12'>
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit lobortis 
              nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor 
              sit amet, consectetuer adipiscing elit, sed diam nonummy 
              nibh euismod tincidunt ut laoreet dolore magna aliquam 
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
              exerci tation ullamcorper suscipit lobortis nisl ut 
              aliquip ex ea commodo 
            </p>
            
            {/* learn more button */}
            <MediumButton text={"Learn more"} linkto={'/about-us'}/>
          </div>
          {/* image */}
          <img src={aboutUsImage} alt="reccoin box" className="w-[450px] h-[500px]" />
        </div>  
      </div>
  </>
}

export default About