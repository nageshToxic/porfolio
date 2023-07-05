import React from 'react'
import  {HiArrowNarrowRight} from 'react-icons/hi'
import Typewriter from 'typewriter-effect';


const Hero = () => {

  const text = <Typewriter
  options={{
    strings: ['Engineer', 'Developer','Gamer','Designer','Photographer'],
    autoStart: true,
    loop: true,
  }}
/>
  return (
    <>
     <div className='w-full h-screen bg-black text-white '>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <h1 className='text-2xl sm:text-4xl'>Hi , I am Nagesh Patil</h1>
      <p className='flex text-4xl sm:text-7xl'>I am a <span className='px-2 text-orange-400'>{text}</span></p>
      <p className='text-2xl sm:4xl'> A Full-stack-developer specialized in building responsive web applications </p>
      <div className='py-4'>
        <button className='my-2 group border-2 px-6 py-3 flex items-center hover:bg-orange-400'>
          Explore 
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
        </button>

      </div>


      </div>


     </div>
    
    </>
  )
}

export default Hero