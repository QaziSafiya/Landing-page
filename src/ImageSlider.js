import React, { useState } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://thumbs.dreamstime.com/b/light-food-2388934.jpg",

      title: "Lobster",
    },
    {
      url: "./img4.jpg",

      title: "Lobster",
    },
    {
      url: "./img3.jpg",

      title: "Lobster",
    },
    {
      url: "https://cdn2.stylecraze.com/wp-content/uploads/2015/06/8-Easy-Whole-Wheat-Pasta.jpg",
      title: "lobester",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevslide = () => {
    const isFirstslide = currentIndex === 0;
    const newIndex = isFirstslide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextslide = () => {
    const isLastslide = currentIndex === slides.length - 1;
    const newIndex = isLastslide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1400px] flex justify-center items-center md:h-[600px] h-[400px]  w-full m-auto relative py-16 px-4 group md:mt-[-200px] ">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        {" "}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2  group hover:bg-black/50 text-white cursor-pointer bg-black/30"
        onClick={nextslide}
      >
        <BiSolidChevronRight />
      </div>
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2  group hover:bg-black/50 text-white cursor-pointer bg-black/30"
        onClick={prevslide}
      >
        <BiSolidChevronLeft />
      </div>
    </div>
  );
};

export default ImageSlider;
