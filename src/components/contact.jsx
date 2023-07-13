import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4 pt-[50px] '>
        <form method='POST' action="https://getform.io/f/d8cfb435-183b-43e6-8c9e-b2f857c09dad" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold  text-orange-400'>Contact</p>
            </div>
            <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#fdfdff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffffff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-orange-400 hover:border-white rounded-md px-4 py-3 my-8 mx-auto flex items-center duration-700'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact