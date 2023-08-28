import React from "react";

const Body = () => {
  return (
    <div className="w-full h-screen">
      <img
        className=" top-0 left-0 w-full h-screen object-cover"
        src="./img6.jpg"
        alt=""
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-screen " />
      <div className="w-full h-full absolute top-0 flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className=" md:ml-[-700px]  ml-[-220px]">All inclusive</p>
          <h1 className="md:text-6xl font-bold text-4xl drop-shadow-2xl">
            Private Beaches & Gateways
          </h1>
          <p className="max-w-[800px] mx-3 ml-[-12px]  py-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            labore vero suscipit debitis placeat nesciunt. Tempora, vel. Aliquam
          </p>
          <button className="w-[160px] h-[40px] rounded-xl bg-white text-black">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
