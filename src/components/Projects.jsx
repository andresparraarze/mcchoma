import React from 'react'
import ComingSoon from '../assets/coming-soon.jpeg'
import NoteTaker from '../assets/notetaker.png'
import WeatherDashBoard from '../assets/weatherdashboard.png'
import NewsProject from '../assets/news.png'
import BookProject from '../assets/book-project.jpeg'
import Project3 from '../assets/project-3.png'

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
                <div style={{backgroundImage: `url(${WeatherDashBoard})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Weather JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://andresparraarze.github.io/mega-dash/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="https://github.com/andresparraarze/mega-dash.git" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Second Project*/}
                <div style={{backgroundImage: `url(${BookProject})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Book Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://limitless-river-58971.herokuapp.com/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="https://github.com/andresparraarze/pejisaurio2000.git" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*third project*/}               
                <div style={{backgroundImage: `url(${Project3})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            MERN E-commerce Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://damp-earth-50504.herokuapp.com/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="https://github.com/andresparraarze/project-3.git" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Fourth Project*/}
                <div style={{backgroundImage: `url(${NoteTaker})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Note Taker JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://secure-earth-88936.herokuapp.com/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="https://github.com/andresparraarze/majadito25.git" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Fifth project*/}               
                <div style={{backgroundImage: `url(${ComingSoon})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Sixth Project*/}
                <div style={{backgroundImage: `url(${ComingSoon})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Seventh project*/}               
                <div style={{backgroundImage: `url(${ComingSoon})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Eight Project*/}
                <div style={{backgroundImage: `url(${ComingSoon})`}} className='shadow-lg shadow-[#464650] group container rounded-md flex justify-center items-center mx-auto div-content'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/" target={'blank'}>
                                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Live Demo</button>
                            </a>
                            <a href="/" target={'blank'}>
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