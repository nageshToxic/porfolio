import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import REDUX from '../assets/redux.png';
import NextJs from '../assets/nextjs.jpeg';
import PostgreSql from '../assets/postgreql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#000000] text-gray-300'>
      
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold  text-orange-400'>Skills</p>
              
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer' >
              <div className='shadow-md shadow-[#6093e0] hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={REDUX} alt="HTML icon" />
                  <p className='my-4'>REDUX</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={NextJs} alt="HTML icon" />
                  <p className='my-4'>NextJs</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={PostgreSql} alt="HTML icon" />
                  <p className='my-4'>PostgreSql</p>
              </div>
              <div className='shadow-md shadow-[#6093e0]  hover:scale-110 duration-1000'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
            
          </div>
      </div>
    </div>
  );
};

export default Skills;