import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import dropdown from '../../assets/dropdown.svg'
import Logo from '../logo'
import { TokenContext } from '../../context/reccoin'
import menuIcon from '../../assets/menuGreen.svg'
import { HeaderData } from '../../data/HeaderData'

const Header = () => {

    const {connectedAccount, initializeContract, loading} = useContext(TokenContext)

    const [selectedOption, setSelectedOption] = useState('');
    const [toggle_menu, setToggleMenu] = useState(false);


    // toggle menu
    const toggleMenu =() => {
        setToggleMenu(!toggle_menu)
    }

  return (
    <header className=" z-10 fixed bg-white top-0 h-20 w-full font-roboto font-bold text-base text-primary40 flex flex-row items-center shadow-light px-2 justify-between md:justify-around">
        {/* logo */}
        <div className='w-12 h-12'>
            <Logo fill="#0D4D00" h="48" w="48" /> 
        </div>

            {/* header links */}
        <ul className={`absolute items-center md:inline-block md:static md:flex md:flex-row  
            ${!toggle_menu ? '-left-full -top-full' : ' left-0 top-0 flex-col w-[80%] bg-white p-4 mt-20 rounded-b-md '}
            transition-all duration-500
            `}>
            <li className=' hover:underline flex flex-row my-4 border-b border-primary40 md:mr-4 md:border-none'>
                <Link to="/">HOME</Link> <img src={dropdown} alt="dropdown icon" />
            </li>
            {
            HeaderData.map((item, index) => 
                <li className='mr-4 hover:underline my-4 border-b border-primary40 md:border-none' key={index}>
                    <Link to={item.link}>{item.title}</Link>
                </li>
            )
            }        
        </ul>

        {/* toggle menu and connect button  */}
            {/* connect button */}
            <button className='rounded text-white bg-primary40 p-2 md:ml-4 text-sm md:text-base' onClick={() => initializeContract()} >
                {loading ? "loading..." : connectedAccount ? connectedAccount.slice(0,5) + "..." + connectedAccount.slice(connectedAccount.length-5, connectedAccount.length): " CONNECT WALLET"}
            </button>

            {/* toggle  menu */}
            <button className='md:hidden md:ml-5' onClick={toggleMenu}>
            <img src={menuIcon} alt="menu-icon" />
            </button>
  
    </header>
  
    )
}

export default Header