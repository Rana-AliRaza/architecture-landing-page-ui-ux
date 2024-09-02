import React from 'react';
import { homeLogos } from "../../constants/constants";

const homeLogosData = [
    {
        id: 1,
        pic: homeLogos.housenLogo,
        alt: "housen Logo",
    },
    {
        id: 2,
        pic: homeLogos.maaksonLogo,
        alt: "maakson Logo",
    },
    {
        id: 3,
        pic: homeLogos.urbanLogo,
        alt: "Urban Logo",
    },
    {
        id: 4,
        pic: homeLogos.fastLogo,
        alt: "fast Logo",
    },
  ]
const Logos = () => {
  return (

    <div className="w-full px-4 lg:px-8 max-w-7xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-4 mt-16 my-4 ">
    {
     homeLogosData.map(({id, pic, alt})=>(
         <div className="w-full rounded-sm border overflow-hidden translate duration-300  border-gray-200 py-2 md:py-4 flex items-center justify-center" key={id}>
             <img src={pic} className='hover:scale-110 transition-transform duration-300' alt={alt} />
         </div>
     ))
    }
 </div>
  )
}

export default Logos