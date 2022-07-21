import React from 'react'
import NewsProject from '../assets/news.png'
import BookProject from '../assets/book-project.jpeg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#19191b]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline boder-b-4 border-yellow-500'>
                    Projects
                </p>
                <p className='py-6 '>
                    These are some of my most recent projects:
                </p>
            </div>

            {/*Projects*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
                
                {/*First project*/}               
                <div style={{backgroundImage: `url(${NewsProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Second Project*/}
                <div style={{backgroundImage: `url(${BookProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*third project*/}               
                <div style={{backgroundImage: `url(${NewsProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Fourth Project*/}
                <div style={{backgroundImage: `url(${BookProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Fifth project*/}               
                <div style={{backgroundImage: `url(${NewsProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Sixth Project*/}
                <div style={{backgroundImage: `url(${BookProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Seventh project*/}               
                <div style={{backgroundImage: `url(${NewsProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Eight Project*/}
                <div style={{backgroundImage: `url(${BookProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects