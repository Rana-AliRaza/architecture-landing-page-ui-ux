import React from 'react'
import { HomeDoubleRArrow } from '../constants/Svgs';
import { Link } from 'react-router-dom';

const Hero = ({heroImg,heading, subHeading}) => {
  return (
    <div className='flex items-center justify-center '  style={{ 
      background: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '40vh',
      width: '100%',
    }}>
        <div className="flex flex-col px-4 lg:px-8 text-center  justify-center items-center py-4  text-gray-100 w-fit h-auto">
         <h2 className='text-2xl  sm:text-3xl md:text-5xl font-light mb-4 md:mb-8'>{heading}</h2>
         <p className='md:text-xl text-lg   mb-4 md:mb-8 font-light'>{subHeading}</p>
          <Link to="/" className="flex items-center mt-4 md:mt-8 border-2 border-yellow-500 hover:border-none hover:bg-gray-700 rounded-full px-8 py-2 gap-x-2 text-yellow-500 hover:text-gray-100">
            <span className='rotate-180'> <HomeDoubleRArrow/></span>
             GO BACK
          </Link>

        </div>
    </div>
  )
}

export default Hero