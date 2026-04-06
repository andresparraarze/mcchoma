import React from 'react';
import ComingSoon from '../assets/coming-soon.jpeg';
import NoteTaker from '../assets/notetaker.png';
import WeatherDashBoard from '../assets/weatherdashboard.png';
import BookProject from '../assets/book-project.jpeg';
import Project3 from '../assets/project-3.png';

const projects = [
  {
    title: 'Weather JavaScript Application',
    image: WeatherDashBoard,
    liveDemoUrl: 'https://andresparraarze.github.io/mega-dash/',
    codeUrl: 'https://github.com/andresparraarze/mega-dash.git',
  },
  {
    title: 'Book Application',
    image: BookProject,
    liveDemoUrl: 'https://limitless-river-58971.herokuapp.com/',
    codeUrl: 'https://github.com/andresparraarze/pejisaurio2000.git',
  },
  {
    title: 'MERN E-commerce Application',
    image: Project3,
    liveDemoUrl: 'https://damp-earth-50504.herokuapp.com/',
    codeUrl: 'https://github.com/andresparraarze/project-3.git',
  },
  {
    title: 'Note Taker JavaScript Application',
    image: NoteTaker,
    liveDemoUrl: 'https://secure-earth-88936.herokuapp.com/',
    codeUrl: 'https://github.com/andresparraarze/majadito25.git',
  },
  ...Array.from({ length: 4 }, (_, index) => ({
    title: `JavaScript Application ${index + 1}`,
    image: ComingSoon,
    liveDemoUrl: '/',
    codeUrl: '/',
  })),
];

const Projects = () => {
  return (
    <section name='projects' className='w-full bg-[#19191b] text-gray-300 md:h-screen'>
      <div className='mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4'>
        <div className='pb-8'>
          <h2 className='inline border-b-4 border-yellow-500 text-4xl font-bold'>Projects</h2>
          <p className='py-6'>These are some of my most recent projects:</p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4'>
          {projects.map((project) => (
            <article
              key={project.title}
              style={{ backgroundImage: `url(${project.image})` }}
              className='group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#464650] div-content'
            >
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold tracking-wider text-black'>{project.title}</span>
                <div className='pt-8 text-center'>
                  <a
                    href={project.liveDemoUrl}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='m-2 inline-block rounded-lg bg-white px-3 py-3 text-center text-lg font-bold text-gray-600'
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='m-2 inline-block rounded-lg bg-white px-3 py-3 text-center text-lg font-bold text-gray-600'
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
