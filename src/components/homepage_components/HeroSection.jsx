import React from "react";
import heroImage from "../../assets/home-bgg.png"
import MediumButton from "../buttons/mediumButton";

const Hero = () => {
  return (
    <>
      <section className="container mx-auto h-full border-t-2 mt-20 bg-white">
        <div className="mt-10 md:mt-20 pb-20 mx-auto bg-herobg lg:bg-contain bg-no-repeat sm:bg-right">
          <div className=" flex flex-col lg:flex-row w-[90%] mx-auto justify-start items-center">
            <div className="flex flex-col lg:w-[60%] xl:[45%] text-center items-center lg:items-start lg:text-left">
              <h2 className=" text-3xl md:text-4xl font-bold">RECYCLING</h2>
              <h2 className=" text-4xl md:text-6xl tracking-wide font-bold text-[#006D44]">WASTE</h2>
              <p className="text-[18px] md:text-[25px] tracking-tight leading-normal mt-5 font-bold">
                Revolutionizing Waste Management with Rewards! Turn your Waste
                into Wealth and Make a Positive Impact on the Planet.
              </p>
              {/* <button className="text-white font-bold tracking-wide bg-[#006D44] px-8 py-4 rounded-lg mt-8 self-start text-base">
                <a href="#">Learn More</a>
              </button> */}
               {/* learn more button */}
             <MediumButton text={"Learn more"} linkto={'/about-us'}/>
            </div>

            <div>
              <img
                src={heroImage}
                alt="home-img"
                className="lg:-mt-28 mt-2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
