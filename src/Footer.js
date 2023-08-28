import React from "react";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-4 bg-gray-800  mt-[100px]">
      <div className="max-w-[1400px] w-full grid md:grid-cols-6 grid-cols-2 text-white py-8">
        <div className="md:ml-0 ml-[-80px]">
          <ul>
            <li className="px-2 py-2 font-bold">Solution</li>
            <li className="px-2 py-2">Travel </li>
            <li className="px-2 py-2">Booking</li>
            <li className="px-2 py-2">Flight</li>
            <li className="px-2 py-2">Ground</li>
            <li className="px-2 py-2">Crusines</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="px-2 py-2 font-bold ">Support</li>
            <li className="px-2 py-2 ">Pricing</li>
            <li className="px-2 py-2 ">Documentation</li>
            <li className="px-2 py-2 ">Refund</li>
          </ul>
        </div>
        <div className="md:mt-0 mt-8 md:ml-0 ml-[-80px] flex flex-col">
          <ul>
            <li className="px-2 py-2 font-bold ">Company</li>
            <li className="px-2 py-2 m ">About</li>
            <li className="px-2 py-2 ">Blogs</li>
            <li className="px-2 py-2 ">Jobs</li>

            <li className="px-2 py-2 ">Partners</li>
            <li className="px-2 py-2 ">Press</li>
          </ul>
        </div>
        <div className="md:mt-0 mt-8">
          <ul>
            <li className="px-2 py-2 font-bold">Legal</li>
            <li className="px-2 py-2">Claims</li>
            <li className="px-2 py-2">Privacy</li>
            <li className="px-2 py-2">conditions</li>
            <li className="px-2 py-2">terms</li>
            <li className="px-2 py-2">policies</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2 ml-[-10px]">
          <h3 className="text-xl my-4 md:ml-[-48px] uppercase ">
            Suscribe to our newsletter
          </h3>
          <p className="mt-3 ">
            The Latest details and resources send to your e-mail
          </p>
          <input
            className="md:w-[350px] w-[300px] rounded-md text-gray-500 h-[40px] mt-8  px-2"
            type="text"
            placeholder="Enter the text"
          />
          <button className="md:w-[350px] w-[300px] rounded-md text-gray-300 h-[40px] mt-8  px-2 border-2 border-gray-600">
            Suscribe
          </button>
          <div className="flex mt-[50px] md:ml-[50px]">
            <FiInstagram size={30} className="mx-2" />
            <FiLinkedin size={30} className="mx-2" />
            <FaWhatsapp size={30} className="mx-2" />
            <FaTwitter size={30} className="mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
