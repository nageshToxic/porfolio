import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <div name="about" id="about" className="w-full bg-black h-screen text-white ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4  ">
            <p className="text-4xl font-bold  text-orange-400 7 border-orange-400 ">
              About Me
            </p>
          </div>

          <div></div>
        </div>

        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl ">
            Hi,
            <p>I am Nagesh patil nice to meet you please take a look around</p>
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl">
            An independent and self-motivated developer, well-versed in application development and web development.</p> 
          </div>
       
        </div>
        <div className="pt-10 sm:text-[20px]">
          <button className='my-2 group border-2 px-6 py-3 flex items-center justify-center hover:bg-orange-400 duration-700 rounded-md sm:text-rightw-[100px]'>
            <a href="https://drive.google.com/file/d/1Y_UyG8DB7_f6Do8zn1gmTyLV2EVQ8x2x/view?usp=sharing">Download My Resume</a>
            <AiOutlineDownload className='ml-3' size={30} />
        </button>
        </div>
      </div>
    </div>
  );
};

export default About;
