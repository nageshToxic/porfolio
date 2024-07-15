import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import img from "../assets/bg_img.png";

const Hero = () => {
  const text = (
    <Typewriter
      options={{
        strings: ["Engineer", "Developer", "Designer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
  return (
    <>
      <div name="home" className="w-full h-screen bg-black text-white ">
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-2xl sm:text-4xl">Hi , I am Nagesh Patil</h1>
          <p className="flex text-4xl sm:text-7xl">
            I am a <span className="px-2 text-orange-400">{text}</span>
          </p>
          <p className="text-2xl sm:4xl mt-4">
            {" "}
            A Full-stack-developer specialized in building responsive web
            applications{" "}
          </p>
          <div className="py-4">
            <button className="my-2 group border-2 px-6 py-3 flex items-center hover:bg-orange-400 rounded-md duration-700">
              Explore
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
              <img
                src={img}
                alt=""
                className="rounded-md sm:h-[300]"
                height={200}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
