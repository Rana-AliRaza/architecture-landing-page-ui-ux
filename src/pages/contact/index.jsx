import React from 'react'
import Hero from '../../components/Hero'
import hero from "../../asset/img/contact-hero.jpg";
import Map from './Map';

const Contact = () => {
  return (
    <div>
       <Hero  heroImg={hero} heading="Contact Us" subHeading="We are team of Professional with passion"  />
       <Map/>
    </div>
  )
}

export default Contact