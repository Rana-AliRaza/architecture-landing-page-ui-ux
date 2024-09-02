import React from "react";
import architecturePic from "../../asset/img/home-architecture.jpg";
import interiorPic from "../../asset/img/interiorDesign.jpg";
import greyStructure from "../../asset/img/home-greystructure.jpg";
import landscaping from "../../asset/img/home-landscaping.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      pic: architecturePic,
      alt: "Architecture Design",
      path: "/architecture",
      title: "Architecture",
    },
    {
      id: 2,
      pic: interiorPic,
      alt: "Interior Design",
      path: "/interiordesign",
      title: "Interior Design",
    },
    {
      id: 3,
      pic: greyStructure,
      alt: "Grey Structure Design",
      path: "/greystructure",
      title: "Construction - Grey Structure",
    },
    {
      id: 4,
      pic: landscaping,
      alt: "Landscaping Design",
      path: "/landscaping",
      title: "Landscaping",
    },
  ];
  return (
    <div className="max-w-7xl px-4 lg:px-8 w-fit flex-col flex justify-center items-center py-4 sm:py-10">
      <h2 className="text-gray-600 text-2xl px-4 lg:px-8 md:text-4xl py-2 pb-4 border-b-2 border-yellow-500 mb-2 md:mb-4">
        OUR SERVICES
      </h2>
      <p className="text-gray-600 font-light sm:font-medium leading-relaxed  w-4/5 sm:w-2/3 text-center my-2  mb-4 md:mb-8">
        At Galleria Designs our teams of Architects, Interior Designers,
        Furniture Designers, Landscaping Experts, Engineers and Project Managers
        collaborate and deliver you your dream projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicesData.map(({ id, pic, alt, title, path }) => (
          <Link
            to={path}
            className="relative overflow-hidden h-[320px] brightness-105 sm:brightness-50 hover:brightness-100 rounded-lg transition duration-300"
            key={id}
          >
            <img
              src={pic}
              className="h-[320px] w-full cursor-pointer rounded-lg hover:scale-105 transition-transform duration-300"
              alt={alt}
            />
            <h4 className="absolute bottom-12 text-white font-semibold text-2xl grid place-center w-2/3 left-0 right-0 mx-auto">
              {title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
