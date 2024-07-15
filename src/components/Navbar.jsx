import React,{useState} from 'react'
import {FaBars ,FaTimes ,FaGithub,FaLinkedin, FaInstagram} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {Link} from 'react-scroll'
import cv from "../images/cv.pdf"

const Navbar = () => {

  const [nav,setNav] = useState(false);
  const handleClick = ()=> setNav(!nav);


  return (
    <>
   

    <div className='fixed w-full bg-black text-white h-[60px] flex justify-between items-center px-5 text-[18px] pt-6'>
       <div className='cursor-pointer z-10  text-orange-400 '>
         <h1  className='text-4xl'>Patil</h1>
       </div>
     
         <ul className='hidden md:flex '>
            <li className='hover:text-orange-400  duration-500'>
            <Link  to="home" smooth={true}  duration={500}>
             Home
            </Link>
            </li>
            <li className='hover:text-orange-400 duration-500'>
            <Link  to="about" smooth={true}  duration={500}>
             About
             </Link>
            </li>
            <li className='hover:text-orange-400 duration-500'>
            <Link  to="skills" smooth={true}  duration={500}>
             Skills
            </Link>
            </li>
            <li className='hover:text-orange-400 duration-500'>
            <Link  to="projects" smooth={true}  duration={500}>
             Projects
            </Link>
            </li>
            <li className='hover:text-orange-400 duration-500'>
            <Link  to="contact" smooth={true}  duration={500}>
             Contact
            </Link>
            </li>
         </ul>
     

       <div className='flex z-10 cursor-pointer md:hidden ' onClick={handleClick}>
         {!nav ?  <FaBars/> : <FaTimes/>}
       
       </div>

       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0  bg-black text-white w-full h-screen flex flex-col justify-center items-center'}>
            <li className='py-4 text-3xl'>
            <Link onClick={handleClick} to="home" smooth={true}  duration={500}>
             Home
            </Link>
            </li>
            <li className='py-4 text-3xl'>
            <Link onClick={handleClick} to="about" smooth={true}  duration={500}>
             About
             </Link>
            </li>
            <li className='py-4 text-3xl'>
            <Link onClick={handleClick} to="skills" smooth={true}  duration={500}>
             Skills
            </Link>
            </li>
            <li className='py-4 text-3xl'>
            <Link onClick={handleClick} to="projects" smooth={true}  duration={500}>
             Projects
            </Link>
            </li>
            <li className='py-4 text-3xl'>
            <Link onClick={handleClick} to="contact" smooth={true}  duration={500}>
             Contact
            </Link>
            </li>
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
                     href="https://www.instagram.com/__nagesh_patil_/" >
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#807e7e33] rounded-md'>
                    <a className=' flex justify-between items-center w-full'
                     href="https://drive.google.com/file/d/1Y_UyG8DB7_f6Do8zn1gmTyLV2EVQ8x2x/view?usp=sharing" download={cv}>
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