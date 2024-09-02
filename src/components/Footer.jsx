import React from "react";
import "../styling/global.css";
import {
  CallFooterIcon,
  MailFooterIcon,
  MailIcon,
  NextFooterIcon,
  ProfileFooterIcon,
  WhatsappFooterIcon,
} from "../constants/Svgs";
// import { Link } from 'react-router-dom';
import footerBimg from "../asset/img/footer-formPic.jpg";
import logo from "../asset/img/galleriansLogo.png";
import footerimg from "../asset/img/footer-formPic.jpg";

const Footer = () => {
  return (
    <footer className="footer ">
      <div
        className="footerForm px-4 lg:px-8 h-[70vh] md:h-[90vh] w-full "
        style={{
          background: `url(${footerimg})`,
          position: "relative",
          backgroundPosition: "center",
          backgroundSize: "cover", // Ensures the image covers the entire background
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="pt-4 sm:pt-8  lg:pt-12 mx-auto max-w-7xl">
          <h2 className="sm:text-2xl text-xl md:text-3xl lg:text-5xl font-light text-gray-300 text-center">
            Our Experts Will be
            <span className="mx-2 font-medium">Happy</span>
            to Help You
          </h2>
          <div className=" w-full sm:w-[75%] md:w-[65%] lg:w-[50%] form mt-8  bg-slate-50 rounded-md mx-auto p-3 sm:p-6 md:p-8 lg:p-16 ">
            <form action="" >
              <input
                type="text"
                required
                placeholder="Name"
                className="py-1.5 pl-3 w-full focus:outline-yellow-700 border border-gray-300 rounded-md mb-4"
              />
              <div className="flex py-1.5 pl-3 w-full focus:outline-yellow-700 border border-gray-300 rounded-md mb-4">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full focus:outline-none"
                />
                <span className="text-yellow-600 mr-2">
                  <MailIcon />
                </span>
              </div>
              <input
                type="number"
                required
                placeholder="Phone Number"
                className="py-1.5 pl-3 pr-2 w-full focus:outline-yellow-700 border border-gray-300 rounded-md mb-4"
              />
              <div className="flex gap-x-4">
                <div className="w-full focus-within:outline-yellow-600">
                  <input
                    list="headings"
                    className="py-1.5 border border-gray-300 rounded-md pl-2 focus:outline-yellow-600 w-full"
                    id="headingInput"
                    name="headingInput"
                    placeholder="Select Your Service"
                  />
                  <datalist id="headings">
                    <option value="Architecture"></option>
                    <option value="Interior Design"></option>
                    <option value="Construction Grey Structure"></option>
                    <option value="Landscaping"></option>
                  </datalist>
                </div>
                <div className="w-full focus:outline-yellow-600">
                  <input
                    list="hireInput"
                    className="py-1.5 border border-gray-300 rounded-md pl-2 focus:outline-yellow-600 w-full"
                    id="hireInput"
                    name="hireInput"
                    placeholder="I wish to hire service"
                  />
                  <datalist id="hireInput">
                    <option value="I wish to hire service"></option>
                    <option value="For a turn key solution"></option>
                    <option value="For renovation and upgradation"></option>
                  </datalist>
                </div>
              </div>
              <div className="w-full focus-within:outline-yellow-600 mt-4">
                <input
                  list="plotHeadings"
                  className="py-1.5 border border-gray-300 rounded-md pl-2 focus:outline-yellow-600 w-full"
                  id="plotHeadings"
                  name="headingInput"
                  placeholder="Select Your Plot Size"
                />
                <datalist id="plotHeadings">
                  <option value="5 Marla">5 Marla</option>
                  <option value="10 Marla">10 Marla</option>
                  <option value="1 Kanal">1 Kanal</option>
                  <option value="2 Kanal">2 Kanal</option>
                  <option value="3 Kanal or Above">3 Kanal or Above</option>
                </datalist>
              </div>
              <div className="flex gap-x-4 mt-4">
                <input
                  className="py-1.5 border border-gray-300 rounded-md pl-2 focus:outline-yellow-600 w-full"
                  placeholder="Your City name"
                />
                <input
                  className="py-1.5 border border-gray-300 rounded-md pl-2 focus:outline-yellow-600 w-full"
                  placeholder="Location of Site"
                />
              </div>
              <textarea
                className="w-full h-28 my-4 text-gray-500 focus:outline-yellow-600 pl-4 pt-2 border border-gray-200 rounded-md"
                placeholder="Any additional requirements "
              ></textarea>
              <button className="bg-yellow-600 rounded-md text-gray-50 font-semibold  w-full py-2 text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-white py-20 ">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50 "
          style={{ backgroundImage: `url(${footerBimg})` }}
        ></div>

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid ml-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mt-4 lg:mt-0">
              <img
                src={logo}
                className="w-[110px] h-[100px]"
                alt="Galleria Design Logo"
              />
              <p className="text-gray-100 mt-4">
                Galleria Design is a private architecture and design consultancy
                company. We focus on strategy, architecture, design, and project
                management.
              </p>
            </div>

            {/* Contact Us Section */}
            <div className="mt-4 lg:mt-0 text-gray-100">
              <h2 className="text-xl mb-4">Contact Us</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <WhatsappFooterIcon />
                  <p className="font-base">Call Us/WhatsApp: 03-083-153-699</p>
                </div>
                <div className="flex items-center gap-2">
                  <CallFooterIcon />
                  <p className="font-base">Call Us: 03-083-153-699</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailFooterIcon />
                  <p className="font-base">Email: info@galleriadesign.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <ProfileFooterIcon />
                  <p className="font-base">Visit Us: www.galleriadesign.com</p>
                </div>
              </div>
            </div>

            {/* Our Services Section */}
            <div className="mt-4 lg:mt-0 text-gray-100">
              <h2 className="text-xl mb-4">Our Services</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <NextFooterIcon />
                  <p className="font-base">Architecture</p>
                </div>
                <div className="flex items-center gap-2">
                  <NextFooterIcon />
                  <p className="font-base">Interior Design</p>
                </div>
                <div className="flex items-center gap-2">
                  <NextFooterIcon />
                  <p className="font-base">Construction Grey Structure</p>
                </div>
                <div className="flex items-center gap-2">
                  <NextFooterIcon />
                  <p className="font-base">Landscaping</p>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="mt-4 lg:mt-0 text-gray-100">
              <h2 className="text-xl mb-4">Quick Links</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <NextFooterIcon />
                  <p className="font-base">About Us</p>
                </div>
                <div className="flex items-center gap-2">
                  <NextFooterIcon />
                  <p className="font-base">Our Services</p>
                </div>
                <div className="flex items-center gap-2">
                  <NextFooterIcon />
                  <p className="font-base">Our Projects</p>
                </div>
                <div className="flex items-center gap-2">
                  <NextFooterIcon />
                  <p className="font-base">Client Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
