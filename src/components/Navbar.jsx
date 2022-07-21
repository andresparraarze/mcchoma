//imports
import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

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
            <div className='hidden'>

            </div>
        </div>
    )
}

export default Navbar