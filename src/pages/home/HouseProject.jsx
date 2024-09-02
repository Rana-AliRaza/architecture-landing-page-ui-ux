import React from 'react'
import { Link } from 'react-router-dom'

const HouseProject = ({housePic, altHouse, title,subTitle, cols}) => {
  return (
    <Link className={`relative  rounded-lg ${cols} overflow-hidden h-[350px]`}>
    <img src={housePic}  className='h-[350px] w-full rounded-lg hover:scale-110 brightness-100 sm:brightness-50 hover:brightness-100 duration-500' alt={altHouse} />
    <div className="heading absolute bottom-8  left-0 right-0 text-gray-100  text-center ">
        <h4 className='mb-2 sm:mb-4 text-xl md:text-2xl '> {title}</h4>
        <p className="my-1 sm:my-2 text-base"> {subTitle}</p>
        <button className="  mt-1 sm:mt-2 text-yellow-500 border border-yellow-500 rounded-full py-1.5 px-4 ">VIEW DETAIL</button>
    </div>
</Link>
  )
}

export default HouseProject