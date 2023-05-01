import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" py-16 mt-10">
      <hr className="bg-gray-50 mb-24" />
      <div className="my-container">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-center md:text-left">
            <Link to="/" className="">
              <span className=" text-2xl font-bold tracking-wide">
                onlyChefs
              </span>
            </Link>
            <p className="text-base text-gray-500 md:text-lg mt-3">
              Discover the latest job openings from top companies and connect
              with hiring managers.
            </p>
            <div className="flex justify-center md:justify-start gap-2 mt-2">
              <span className="h-6 w-6 lg:h-10 lg:w-10">
                <FaFacebookF />
              </span>
              <span className="h-6 w-6 lg:h-10 lg:w-10">
                <FaTwitter />
              </span>
              <span className="h-6 w-6 lg:h-10 lg:w-10">
                <FaInstagram />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl mb-3 text-white">Company</h2>
              <p className="text-base text-gray-500 md:text-lg">About Us</p>
              <p className="text-base text-gray-500 md:text-lg">Work</p>
              <p className="text-base text-gray-500 md:text-lg">Latest News</p>
              <p className="text-base text-gray-500 md:text-lg">Careers</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl mb-3 text-white">Product</h2>
              <p className="text-base text-gray-500 md:text-lg">Prototype</p>
              <p className="text-base text-gray-500 md:text-lg">
                Plans & Pricing
              </p>
              <p className="text-base text-gray-500 md:text-lg">Customers</p>
              <p className="text-base text-gray-500 md:text-lg">Integrations</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl mb-3 text-white">Support</h2>
              <p className="text-base text-gray-500 md:text-lg">Help Desk</p>
              <p className="text-base text-gray-500 md:text-lg">Sales</p>
              <p className="text-base text-gray-500 md:text-lg">
                Become a Partner
              </p>
              <p className="text-base text-gray-500 md:text-lg">Developers</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl mb-3 text-white">Contact</h2>
              <p className="text-base text-gray-500 md:text-lg">
                524 Broadway , NYC
              </p>
              <p className="text-base text-gray-500 md:text-lg">
                +1 777 - 978 - 5570
              </p>
            </div>
          </div>
        </div>
        <hr className="bg-gray-50 mt-12" />
        <div className="flex flex-col md:flex-row md:justify-between text-center mt-6 text-base text-gray-500 md:text-lg ">
          <span>@2023 onlyChefs. All Rights Reserved</span>
          <span>Powered by onlyChefs</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
