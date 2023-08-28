import React from "react";

const Rooms = () => {
  return (
    <div className="mx-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="md:text-4xl  text-3xl font-bold">Fine Interior Rooms</h3>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          magnam hic id sunt ea repudiandae blanditiis tempore deserunt eveniet
          numquam!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2  ">
        <img className="object-cover w-full h-full " src="./img1.jpg" alt="" />
        <img
          className="object-cover row-span-2  w-full h-full "
          src="./img5.jpg"
          alt=""
        />
        <img className="object-cover w-full h-full " src="./img5.jpg" alt="" />
      </div>
    </div>
  );
};

export default Rooms;
