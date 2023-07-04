import { useEffect, useState } from "react"
import Logo from "../../components/logo"
import RegistrationHeader from "../../components/navigation/RegistrationHeader"
import { useRecycle } from "../../context/recycle";

const UserRegPage = () => {

  const {
    registerPicker, connectedAccount, pickers, companies, 
    isMethodCallLoading, isMethodCallSuccessful, account_category
  }  = useRecycle();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isTermsChecked, setIsTermsChecked] = useState(false)


  useEffect(()=>{
    console.log("companies =>", companies);
    console.log("account category => ", account_category);
  }, [])

  const RegisterPicker = () => {

    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = (email) => {
      return email_regex.test(email);
    }

    const validEmail = isValidEmail(userEmail);
    if(!connectedAccount) {
      alert("Connect wallet to continue")
    }
    else if(account_category !== "") {
      alert("Address already registered")
    }
    else if (!userName) {
      alert("Input user name")
    } else if(!validEmail) {
      alert("input valid email")
    }
    else if (!isTermsChecked) {
      alert("Agree to Recylox Terms")
    }
     else {
      for (let i=0; i<=pickers.length; i++) {
        if  (i === connectedAccount) {
          alert("User already registered, kindly login or connect with a different address");
        } else {
          registerPicker(userName, userEmail)
          if (isMethodCallSuccessful) {
            window.location.href = "/user-dashboard";
          }
        }
      }
    }
  }

  return (
    <div className='container mx-auto'>
      <RegistrationHeader/>
      {/* <div className='my-20 w-[34rem] md:w-[62rem] lg:w-[82rem] flex flex-row justify-center'> */}
      <div className='my-20  flex flex-row justify-center'>
      <div>
        <p className='text-[1rem] md:text-[2rem] lg:text-[3.7rem] font-bold text-center'>
          User Registration Page
        </p>
        <div className='flex flex-row justify-center mt-4'>
          <div className='relative'>
            {/* <div className='w-[10rem] md:w-[22rem] lg:w-[29rem] min-h-[34rem] bg-[#F8F9FB] border border-primary40-700'> */}
            <div className='w-[10rem] md:w-[22rem] lg:min-w-[29rem] min-h-[34rem] bg-[#F8F9FB] border border-primary40-700'>
              <div className='flex flex-row mt-10 ml-10'>
                <div className='w-46 h-46 items-center '>
                  <Logo fill='#0D4D00' w='46' h='46' />
                </div>
                <p className='text-[1rem] md:text-[1rem] lg:text-[1.2rem] mt-2 ml-3 text-[#0D4D00]  text-center'>
                  Recylox
                </p>
              </div>
              <div className='ml-8'>
                <h2 className='text-[1rem] md:text-[1rem] lg:text-[1.7rem] font-bold mt-2 ml-3 text-[#0D4D00]'>
                  Registration Form
                </h2>
              </div>
              <div className='flex flex-col items-center  absolute left-16 top-40'>
                <div className='mb-6'>
                  <label
                    htmlFor='company-name'
                    className='block mb-1 text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium text-[#0D4D00] text-left'
                  >
                  Name
                  </label>
                  <input
                    type='text'
                    className='border-b-2 w-[14rem] focus:outline-none border-[#0D4D00] bg-transparent'
                    onChange={(nme) => setUserName(nme.target.value.trim())}
                  />
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='Minimum-Weight-Requirement'
                    className='block mb-1 text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium text-[#0D4D00] text-left'
                  >
                    Email Address
                  </label>
                  <input
                    type='text'
                    className='border-b-2 w-[14rem] focus:outline-none border-[#0D4D00] bg-transparent'
                    onChange={(eml) => setUserEmail(eml.target.value.trim())}
                  />
                </div>
              
              </div>
              <div className='flex flex-row items-center absolute bottom-36 left-10 flex-start'>
                <input
                  className='h-[1.4rem] w-[4rem] border-solid border-[#0D4D00]'
                  type='checkbox'
                  onChange={() => setIsTermsChecked(!isTermsChecked)}
                  value={isTermsChecked}
                  aria-label='Checkbox for following text input'
                />
                <p className='text-[0.5rem] md:text-[0.7rem] lg:text-[0.7rem] mt-2 w-[14rem]  text-[#0D4D00]'>
                  I agree to the terms of the Recylox Subscriber Agreement and
                  the Privacy Policy
                </p>
              </div>
              <button className='rounded-[6px] absolute bottom-20 left-16 py-1 px-6 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] font-medium text-[#fff] bg-[#0D4D00]'
                onClick={RegisterPicker}
              >
                {isMethodCallLoading ? "Loading..." : isMethodCallSuccessful ? "Picker created" : "Register"}
              </button>
            </div>
          </div>
          <div className='w-[10rem] md:w-[16rem] lg:w-[21rem] min-h-[34rem] bg-[url(src/assets/company-bg.svg)]  bg-contain md:bg-cover bg-right bg-no-repeat'></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserRegPage