import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleclick = () => {
    setNav(!nav);
    // if (!nav) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "scroll";
    // }
  };
  return (
    <div className="absolute w-full  flex justify-between p-4 items-center">
      <h1 className="text-white text-3xl z-20 font-bold">Experience</h1>
      <FiMenu
        onClick={handleclick}
        className="z-20 text-white cursor-pointer "
        size={30}
      />
      <div
        className={
          nav
            ? " ease-in duration-300 fixed text-gray-700 top-0 left-0 w-full h-screen  flex flex-col justify-center items-center bg-black/90 z-10 "
            : "absolute top-0 left-[-100%] ease-in-out duration-500  h-screen z-10  "
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="text-white text-xl py-5">Home</li>
          <li className="text-white text-xl py-5">Destination</li>
          <li className="text-white text-xl py-5">Reservations</li>
          <li className="text-white text-xl py-5">Amenties</li>
          <li className="text-white text-xl py-5">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
