import Logo from "../logo";
import { Link } from "react-router-dom";
import emailIcon from '../../assets/email.svg'

const HomeFooter = () => {
  return <div className="w-full bg-primary40 text-white flex flex-col justify-center items-center px-8 py-16 md:justify-around md:flex-row">
    {/* footer logo */}
    <div className=" w-32 h-32 items-center">
        <Logo fill="#fff" w="120" h="120" />
    </div>

    <div className="flex flex-row items-center justify-center mt-8 md:mt-0">
         {/* footer Links */}
        <div className="flex flex-col mr-[1.5rem]">
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
    </div>
   
    {/* contact us */}
    <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:items-start md:justify-start">
        <p className="font-2 font-openSans font-bold mb-4 w-full text-center md:text-left">Contact Us</p>
        <p className="font-2 font-openSans mb-2 font-extralight">
        1881 SW 164th Avenue
        </p>
        <p className="font-2 font-openSans mb-4 font-extralight">
        Miramar, FL 33027, USA.
        </p>
        <p className="font-2 font-openSans font-extralight mb-4">
        info@grandida.com
        </p>
    </div>

    {/* subscribe */}
    <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:justify-start  md:items-start">
        <p className="font-2 font-openSans font-bold mb-4 w-full text-center md:text-left">Subscribe</p>
        <p className="font-2 font-openSans mb-4 font-extralight">Subscribe to our mailing list</p>
        {/* subscribe input box */}
        <div className="flex flex-row flex-wrap justify-center md:justify-start">
            <div className="flex flex-row border-b border-white">
                <img src={emailIcon} alt="email-icon" className="mr-2" />
                <input type="text" placeholder="Enter your email" className="outline-none bg-primary40"/>
            </div>
            <button className="bg-white p-2 text-primary40">SUBMIT</button>
        </div>
    </div>
    </div>
  
}

export default HomeFooter