import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-2">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] ">
        <img
          className=" row-span-3 object-cover w-full h-full p-2 "
          src="./img2.jpg"
          alt=""
        />
        <img
          className=" row-span-2 object-cover w-full h-full p-2 "
          src="./img6.jpg"
          alt=""
        />
        <img
          className=" row-span-2 object-cover w-full h-full p-2 "
          src="./img7.jpg"
          alt=""
        />
        <img
          className=" row-span-3 object-cover w-full h-full p-2 "
          src="./img8.jpg"
          alt=""
        />
        <img
          className=" row-span-2  object-cover w-full h-full p-2 "
          src="./img9.jpg"
          alt=""
        />
      </div>
      {/* Right side */}
      <div className="flex flex-col justify-center items-center md:ml-[-120px] mt-4">
        <h3 className="md:text-6xl text-3xl font-bold ">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut.
        </p>
        <div className="md:flex">
          <button className="w-[170px] h-9  text-black rounded-md border-black bg-gray-200 mt-3  mr-4 shadow-2xl">
            Learn More
          </button>
          <button className="w-[170px] h-9  text-white   bg-black rounded-md border-black mt-3  ">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
