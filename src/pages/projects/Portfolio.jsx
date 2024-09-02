import React from 'react'

const Portfolio = () => {
    const clientProjectData = [
        {
            id: 1,
            title:"+ Projects",
            count : 1000,
        },
        {
            id: 2,
            title:"+ Years of Service",
            count : 9,
        },
        {
            id: 3,
            title:"Services",
            count : 6,
        },
    ]
  return (
    <section className="flex justify-center py-4 md:py-8 px-4 lg:px-8">
    <div className='max-w-7xl w-full text-center  grid  grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
        {
            clientProjectData.map((item, index)=>(
                <div className={`${index === 1?'text-gray-100  bg-gray-700':'text-gray-700 bg-yellow-500'} items-center flex flex-col item-center justify-center py-8 rounded-xl `} key={item.id}>
                   <p className='text-5xl md:text-6xl font-bold items-center w-fit my-2'> {item.count}</p>
                   <p className=" text-3xl px-1 md:text-4xl font-light mt-4 ">{item.title}</p>
                </div>
            ))
        }
    </div>

    </section>
  )
}

export default Portfolio