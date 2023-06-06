import React from "react";
import heroImage from "../../assets/home-bgg.png"

const Hero = () => {
  return (
    <>
      <section className=" border-t-2 mt-20">
        <div className="my-20 mx-auto bg-herobg bg-contain bg-no-repeat bg-right ">
          <div className=" flex w-[90%] mx-auto justify-start items-start">
            <div className="flex flex-col w-[45%]">
              <h2 className="text-4xl font-bold">RECYCLING</h2>
              <h2 className="text-6xl tracking-wide font-bold text-[#006D44]">WASTE</h2>
              <p className="text-[25px] tracking-tight leading-normal mt-5 font-bold">
                Revolutionizing Waste Management with Rewards! Turn your Waste
                into Wealth and Make a Positive Impact on the Planet.
              </p>
              <button className="text-white font-bold tracking-wide bg-[#006D44] px-8 py-4 rounded-lg mt-8 self-start text-base">
                <a href="#">Learn More</a>
              </button>
            </div>

            <div>
              <img
                src={heroImage}
                alt="home-img"
                className="-mt-28"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
