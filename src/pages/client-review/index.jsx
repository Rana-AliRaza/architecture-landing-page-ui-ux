import React from 'react'
import Hero from "../../components/Hero";
import heroImg from "../../asset/img/client-review-hero.jpg";
import Feedback from './Feedback';
const ClientReview = () => {
    const subHeading = (
        <>
            "The Details Are Not Merely Details, They Make the Design" - 
            <span className="text-yellow-700 font-medium "> GD </span>
        </>
    );
  return (
    <div>
        <Hero heroImg={heroImg} heading="Client Reviews" subHeading={subHeading} />
        <Feedback/>
    </div>
  )
}

export default ClientReview