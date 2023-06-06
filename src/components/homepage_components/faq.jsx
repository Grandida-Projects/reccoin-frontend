import React from 'react'
import faqImage from '../../assets/faq.svg'
import { Link } from 'react-router-dom'
import arrowRight from '../../assets/arrowRight.svg'

const faqData = [
    {
        'title': "What are the rewards for earning Reccoin?"
    },
    {
        'title': "Is Reccoin a secure and reliable platform?"
    },
    {
        'title': "How does Reccoin work?"
    }
]

const Faq = () => {
  return <div className='bg-[#F2FAF7]'>
    {/* titles */}
    <h1 className='text-center py-2 font-bold'>FAQ</h1>
    <h3 className='text-center font-bold'>You’ve Got Questions?</h3>
    <h3 className='text-center pt-2 pb-4 font-bold'>We’ve Got Answers</h3>

    {/* buttons and image */}
    <div className='flex flex-row justify-around mb-0'>
        <div>
            {
                faqData.map((item, index) => 
                <Link key={index} className='bg-primary40 flex flex-row justify-between mb-2 text-white p-4'>
                    <h3>{item.title}</h3> 
                    <img src={arrowRight} alt="arrow right" className='ml-4'/>
                </Link>
                )
            }
            <p className='p-4'>
                Can't find your answers? 
                <Link to={'/contact-us'} className='text-[#005232] ml-2'>Contact Us</Link>
            </p> 
        </div>

        {/* image */}
        <img src={faqImage} alt="faq image" className='h-[500px] w-[500px] object-contain -mt-16'/>
    </div>
  </div>
  
}

export default Faq