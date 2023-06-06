import React from 'react'
import { Link } from 'react-router-dom'

const MediumButton = ({text, linkto}) => {
  return (
    <Link to={`${linkto}`} className='bg-primary40 p-4 text-white  rounded-lg'>{text}</Link>
  )
}

export default MediumButton
