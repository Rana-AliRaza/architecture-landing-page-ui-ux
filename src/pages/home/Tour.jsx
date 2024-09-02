import React from 'react';
import project1 from "../../asset/img/project-3.jpg";
import { HomePlayIcon } from '../../constants/Svgs';
const Tour = () => {
  return (
    <div className='w-screen h-screen flex  flex-col items-center justify-center brightness-100 sm:brightness-50  hover:brightness-100' 
      style={{
        backgroundImage:`url(${project1})`,
         objectSize:'cover',
         backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        width: '100%',
        
        }}>
        <h2 className='text-2xl sm:text-4xl md:text-5xl pt-8 text-gray-100 font-normal text-center'> EXPERIENCE OUR MODEL RESIDENTIAL <span className='font-semibold block'>Project</span></h2>
        <button className="flex text-base md:text-xl text-gray-600 hover:text-gray-100  bg-yellow-500 hover:bg-gray-700 py-2 md:py-3 px-4 md:px-6 duration-300 items-center rounded-full  mt-8 md:mt-12 gap-x-2 md:gap-x-4">
            <HomePlayIcon/>
            VIEW MORE PROJECTS
        </button>
    </div>
  )
}

export default Tour