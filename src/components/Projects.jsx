import React from 'react';

const projects = () => {
  return (
    <div name='projects' id='projects' className='w-full h-screen bg-[#000000] text-gray-300'>
      
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold  text-orange-400'>Projects</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer'>
            <div id='retail'>
                <h1>Retail digitization</h1>
            </div>
          </div>
      </div>
    </div>
  );
};

export default projects;