import React from 'react'
//images import
import Tailwind from '../assets/tailwind.png'
import Mysql from '../assets/mysql.png'
import Node from '../assets/node.png'
import Html from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import GitHub from '../assets/github.png'
import ReactImg from '../assets/react.png'
import Mongo from '../assets/mongo.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#19191b] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline boder-b-4 border-yellow-500'>
                   Skills and Experience 
                </p>
                <p className='py-4'>
                    I have made projects and worked with:
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="javascript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="Html icon" />
                    <p className='my-4'>Html</p>
                </div>
                <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mysql} alt="Mysql icon" />
                    <p className='my-4'>Mysql</p>
                </div>
                <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongodb icon" />
                    <p className='my-4'>Mongo db</p>
                </div>
                <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills