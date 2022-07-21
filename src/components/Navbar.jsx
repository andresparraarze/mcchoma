//imports
import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

//nav-bar made with tailwind
const Navbar = () => {
    const {nav, setNav} = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        //logo
        <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#19191b] text-gray-300'>
            <div>
                <img style={{width: '138px'}} src={Logo} alt="Logo Parra" />
            </div>

            {/*Buttons nav bar */}
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>

            {/*Nav bar icon */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/> }
            </div>

            {/*Menu mobile version made */}
            <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[##19191b] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/*social media icons*/}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                            href="https://www.linkedin.com/in/andres-parra-arze-a62634114/" target={'blank'} >
                            Linkedin <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-750'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                            href="https://github.com/andresparraarze" target={'blank'} >
                            Github <FaGithub size={25} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                            href="/" target={'blank'} >
                            Mail <HiOutlineMail size={25} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                            href="/" target={'blank'} >
                            Resume <BsFillPersonLinesFill size={25} />
                        </a>
                    </li>                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                            href="https://m.facebook.com/people/Andres-Parra-Arze/100008705084352" target={'blank'} >
                            Facebook <FaFacebook size={25} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar