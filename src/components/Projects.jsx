import React from "react";
import { HomeDoubleArrow, HomeDoubleRArrow } from "../constants/Svgs";
import { homeLogos, homeProjectHouses } from "../constants/constants";
import HouseProject from "../pages/home/HouseProject";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      housePic: homeProjectHouses.project1,
      altHouse: "modern house",
      title: "Modern House",
      subTitle: "Dark Facade",
    },
    {
      id: 2,
      housePic: homeProjectHouses.project4,
      altHouse: "Jade cafe",
      title: "Jade cafe",
      subTitle: null,
    },
    {
      id: 3,
      housePic: homeProjectHouses.project3,
      altHouse: "Modern Sophisticated house",
      title: "Modern Sophisticated House",
      subTitle: "mix os metal, concrete and stones",
    },
    {
      id: 4,
      housePic: homeProjectHouses.project5,
      altHouse: "Spanish House",
      title: "Spanish House",
      subTitle: "white facade with the perfect balance",
    },
    {
      id: 5,
      housePic: homeProjectHouses.project2,
      altHouse: "farm house",
      title: "Spanish Farm House",
      subTitle: null,
    },
  ];


  return (
    <section className="flex justify-center">
      <div className="max-w-7xl px-4 lg:px-8 w-fit flex-col flex justify-center items-center py-4 sm:py-10">
        <h2 className="text-gray-600 text-2xl px-4 lg:px-8 md:text-4xl py-2 pb-2 mb-2 md:mb-4">
          Project at a Glance
        </h2>
        <div className="flex items-center">
          <div className="border-t-2 w-20 border-yellow-500"></div>
          <span className="border border-yellow-500 rounded-full text-yellow-500 flex p-1 inline-block">
            <HomeDoubleArrow />
          </span>
          <div className="border-t-2 w-20 border-yellow-500"></div>
        </div>
        <p className="text-gray-600 leading-loose mt-4 font-light sm:font-medium w-10/11 sm:w-2/3 text-center my-2 mb-4 md:mb-8">
          Travel inside beautiful places that are loved by owners and satisfy
          one’s aesthetic sense. Each project has its own persona and every
          project is not merely a project it’s an art that can last a lifetime.
        </p>
        <div className="mt-4 md:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectsData.map((project, index) => {
              // Determine the column span based on the index
              let colSpan = "col-span-1";
              if (index === 1) {
                colSpan = "md:col-span-2";
              }
              
              return (
                <HouseProject key={project.id} {...project} cols={colSpan} />
              );
            })}
          </div>
        </div>
        <button className="flex text-base sm:text-xl text-gray-600 hover:text-gray-100  bg-yellow-500 hover:bg-gray-700 py-2 sm:py-3 px-4 sm:px-6 duration-300 items-center rounded-full  mt-6 md:mt-8 gap-x-2 sm:gap-x-4">
            <HomeDoubleRArrow/>
            VIEW MORE PROJECTS
        </button>

      </div>
    </section>
  );
};

export default Projects;
