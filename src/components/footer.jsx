import Logo from "./logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full">
      {/* main footer */}
      <div className="bg-primary40 text-white flex flex-row justify-around px-8 py-16">
        {/* footer logo */}
        <div className="w-16 h-16 items-center">
          <Logo fill="#fff" w="64" h="64" />
        </div>

        {/* footer Links */}
        <div className="flex flex-col">
          <p className="font-2 font-openSans font-bold mb-4">Links</p>
          <Link className="font-2 font-openSans mb-4 font-extralight">
            Home
          </Link>
          <Link className="font-2 font-openSans mb-4 font-extralight">
            About Us
          </Link>
          <Link className="font-2 font-openSans mb-4 font-extralight">
            How it works
          </Link>
        </div>

        {/* resources */}
        <div className="flex flex-col">
          <p className="font-2 font-openSans font-bold mb-4">Resources</p>
          <Link className="font-2 font-openSans mb-4 font-extralight">
            Blog
          </Link>
          <Link className="font-2 font-openSans mb-4 font-extralight">
            White Paper
          </Link>
          <Link
            to={"/privacy-policy"}
            className="font-2 font-openSans mb-4 font-extralight"
          >
            Privacy Policy
          </Link>
        </div>

        {/* contact us */}
        <div>
          <p className="font-2 font-openSans font-bold mb-4">Contact Us</p>
          <p className="font-2 font-openSans mb-2 font-extralight">
            1881 SW 164th Avenue
          </p>
          <p className="font-2 font-openSans mb-4 font-extralight">
            Miramar, FL 33027, USA.
          </p>
          <p className="font-2 font-openSans font-extralight">
            info@grandida.com
          </p>
        </div>

        {/* subscribe */}
        <div>
          <p className="font-2 font-openSans font-bold mb-4">Subscribe</p>
          <p className="font-2 font-openSans mb-4 font-extralight">
            Subcribe to our mailing list
          </p>
        </div>
      </div>{" "}
      {/* ends main footer */}
      {/* sub footer */}
      <div className="flex flex-row p-4 w-full justify-center bg-white">
        <p className="text-2 font-neutral font-extralight text-center">
          Copyright 2023 RECCOIN | All Rights Reserved
        </p>
        <p className="text-2 font-neutral font-extralight hover:underline cursor-pointer absolute right-8">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
