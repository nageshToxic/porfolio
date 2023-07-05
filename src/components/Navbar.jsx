import React,{useState} from 'react'
import {FaBars ,FaTimes ,FaGithub,FaLinkedin, FaFacebook} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs"
import { icons } from 'react-icons/lib';

const Navbar = () => {

  const [nav,setNav] =useState(false);
  const handleClick = ()=>setNav(!nav);


  return (
    <>
   

    <div className='fixed w-full bg-black text-white h-[60px] flex justify-between items-center px-5'>
       <div className='cursor-pointer z-10  text-orange-400'>LOGO</div>
     
         <ul className='hidden md:flex '>
            <li>Home</li>
            <li>about</li>
            <li>contact</li>
            <li>Help</li>
         </ul>
     

       <div className='flex z-10 cursor-pointer md:hidden ' onClick={handleClick}>
         {!nav ?  <FaBars/> : <FaTimes/>}
       
       </div>

       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0  bg-black text-white w-full h-screen flex flex-col justify-center items-center'}>
            <li className='py-4 text-3xl'>Home</li>
            <li className='py-4 text-3xl'>about</li>
            <li className='py-4 text-3xl'>contact</li>
            <li className='py-4 text-3xl'>Help</li>
         </ul>

         {/* social icons */}

         <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#807e7e33] rounded-md'>
                    <a className=' flex justify-between items-center w-full'
                     href="https://www.linkedin.com/in/nagesh-patil-913036226/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
     
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#807e7e33] rounded-md'>
                    <a className=' flex justify-between items-center w-full'
                     href="https://github.com/nageshToxic">
                        Github <FaGithub size={30}/>
                    </a>
     
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#807e7e33] rounded-md'>
                    <a className=' flex justify-between items-center w-full'
                     href="nageshpatilm4u@gmail.com">
                        Email <HiOutlineMail size={30}/>
                    </a>
     
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#807e7e33] rounded-md'>
                    <a className=' flex justify-between items-center w-full'
                     href="https://drive.google.com/file/d/1qzmRR8OW0GHC-x5ZdXZmzg5jU3rctFYE/view?usp=sharing">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
     
                </li>
            </ul>
         </div>

    </div>
    

    </>
  )
}

export default Navbar