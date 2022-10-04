import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import{Link} from 'react-scroll'

const Homemain = () => {
  return (
    <div name='homemain' className='w-full h-screen bg-[#19191b]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-yellow-400'>Hello I am</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-gray-200'>Andres Parra Arze</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-gray-400'>Full Stack Web Developer </h2>
            <p className='text-gray-200 py-4 max-w-[700px]'>I specialize in the front end area to create interactive experiences,
                i can make full stack web applications with very modern up to date resources
            </p>
            <div>
                <Link to="projects" smooth={true} offset={50} duration={500}>
                    <button className='text-white group border-2 px-5 py-2 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500 hover:pr-1 duration-300 hover:pb-4'> Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-4'/> 
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Homemain