import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className=" w-full">
      
      {/* border text content */}
      <div className="flex flex-col p-4 w-full justify-center bg-white md:flex-row">
        <p className=" text-sm font-neutral font-extralight text-center md:text-base">
          Copyright 2023 RECCOIN | All Rights Reserved
        </p>
        <div>
          <Link to="/privacy-policy" className="text-sm font-neutral font-extralight hover:underline cursor-pointer text-center absolute left-[53%] -translate-x-1/2  md:left-[85%] md:base md:text-left">
            Privacy Policy
          </Link>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
