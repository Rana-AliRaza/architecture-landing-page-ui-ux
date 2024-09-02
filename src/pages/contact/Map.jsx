import React from 'react'
import { CallFooterIcon, ContactRestoreIcon, MailIcon, WhatsappFooterIcon } from '../../constants/Svgs'

const Map = () => {
    const contactData = [
        {
            id: 1,
            icon: <WhatsappFooterIcon/>,
            title: "Call us/WhatsApp:",
            linkText: "03-083-153-699"
        },
        {
            id: 2,
            icon: <CallFooterIcon/>,
            title: "U.A.N:",
            linkText: "03-243-865-200"
        },
        {
            id: 3,
            icon: <MailIcon/>,
            title: null,
            linkText: "ranaaliryk568@gmail.com"
        },
        {
            id: 4,
            icon: <ContactRestoreIcon/>,
            title: "Mon - Fri: 9:00 am - 06:00 pm",
            linkText: null
        }
    ]

  return (
    <div className='sm:py-10 py-4 flex items-center justify-center  px-4 md:px-8'>
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="about">
                <h4 className=' text-3xl  md:text-5xl my-2 font-light text-gray-700'> Contact Us</h4>
                <p className=" leading-loose text-gray-600 mt-4 sm:mt-8">
                  Galleria Design is a private architecture and design consultancy company. We focus on strategy, architecture, interior design, project management, supervision, and furniture. We have successfully worked on many public and private sector residential and commercial projects. In few years Galleria Designs has earned its name for professionalism and expertise.
                </p>
                <ul className='mt-4 md:mt-8'>
                    {
                        contactData.map(({id, icon, title, linkText}) => (
                            <li key={id} className='flex gap-x-2  items-center mb-3'>
                              <span className='p-1 text-gray-800  rounded-full bg-yellow-500'>{icon}</span>
                              <div className="flex items-center gap-x-2">
                                <p className='text-lg text-gray-500'>{title}</p>
                                <p type="email" className='hover:text-yellow-500 text-gray-800 cursor-pointer'>{linkText}</p>
                              </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="mapLocation w-full h-full ">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28103.56074322126!2d70.0991130911147!3d28.299987361943174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1725187672372!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps Location"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

        </div>
        
    </div>
  )
}

export default Map