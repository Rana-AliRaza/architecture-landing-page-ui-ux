import React from 'react';
import feedback1 from "../../asset/img/client-review-1.jpg";
import feedback2 from "../../asset/img/client-review-2.jpg";
import feedback3 from "../../asset/img/client-review-3.jpg";

const Feedback = () => {
    const feedbackData = [
        {
            id: 1,
            pic: feedback1,
            alt:"feedback 1"
        },
        {
            id: 2,
            pic: feedback2,
            alt:"feedback 2"
        },
        {
            id: 3,
            pic: feedback3,
            alt:"feedback 3"
        },
    ]
  return (
    <div className="flex justify-center items-center py-8">
    <div className='max-w-7xl w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 lg:px-8 gap-4'>
        {
            feedbackData.map(({id,pic, alt})=>(
                <div className="flex" key={id}>
                   <img src={pic} className='border border-gray-400 p-2' alt={alt} />
                </div>
            ))
        }
    </div>

    </div>
  )
}

export default Feedback