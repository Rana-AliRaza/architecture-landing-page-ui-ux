import React from 'react';
import   homeVideo from "../../asset/videos/home-animation.mp4";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='header-section  relative '>
        <video
           playsInline={true}
           autoPlay
           loop
           muted
           preload='auto'
          className='w-full h-[70vh] md:h-[90vh] overflow-hidden object-cover '
        >
            <source src={homeVideo} type='video/mp4'   />
        </video>
        
        <div className="heading absolute flex flex-col justify-center items-center mx-auto w-2/3 lg:w-1/2 top-[20%] left-[17%] lg:left-[25%]">
          <h1 className=' text-yellow-700 font-semibold text-2xl sm:text-3xl md:text-5xl  mb-4 text-center'> Let's inspire you with our work </h1>
          <p className=' text-lg sm:text-xl md:text-2xl text-yellow-700 mt-2  text-center mb-4'> Click on any of the services offered by Galleria Design to explore our portfolio</p>

           <div className="servies grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
              <div className='bg-gray-400 w-full py-2 md:py-3 rounded-md hover:bg-gray-600 group text-yellow-700 hover:text-gray-100'>
                <Link to='/'>
                  <h4 className=' text-base sm:text-lg md:text-2xl font-base md:font-semibold text-center '> Architecture</h4>
                </Link>
              </div>
              <div className='bg-gray-400 w-full py-2 md:py-3 rounded-md hover:bg-gray-600 group text-yellow-700 hover:text-gray-100'>
                <Link to='/'>
                  <h4 className=' text-base sm:text-lg md:text-2xl font-base md:font-semibold text-center '> Interior Design</h4>
                </Link>
              </div>
              <div className='bg-gray-400 w-full py-2 md:py-3 rounded-md hover:bg-gray-600 group text-yellow-700 hover:text-gray-100'>
                <Link to='/'>
                  <h4 className=' text-base sm:text-lg md:text-2xl font-base md:font-semibold text-center px-1 md:px-0'> Construction Grey Structure</h4>
                </Link>
              </div>
              <div className='bg-gray-400 w-full py-2 md:py-3 rounded-md hover:bg-gray-600 group text-yellow-700 hover:text-gray-100'>
                <Link to='/'>
                  <h4 className=' text-base sm:text-lg md:text-2xl font-base md:font-semibold text-center flex items-center justify-center'> Landscaping</h4>
                </Link>
              </div>



            
           </div>
        </div>

    </section>
  )
}

export default Hero