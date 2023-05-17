import React from "react";
import Logo from './logo';


const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="h-[560px] w-full bg-primary40 flex flex-row items-center px-[5.3vw]">
        <div>
          <Logo fill="#fff" w="247.93" h="234" />
        </div>
      </div>
      <div className="h-[94px] flex flex-col md:flex-row py-4 px-0 md:px-4">
        <div className="flex flex-row justify-center items-center flex-1">
          <p className="text-[22px] font-[#5C5F5C]">Copyright 2023 RECCOIN | All Rights Reserved</p>
        </div>
        <div className="px-[47px] flex flex-row justify-center items-center ">
          <p className="text-[22px] font-[#5C5F5C cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
