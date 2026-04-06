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
  ...Array.from({ length: 2 }, (_, index) => ({
    title: `Coming Soon Project ${index + 1}`,
    image: ComingSoon,
    liveDemoUrl: '/',
    codeUrl: '/',
  })),
];

const Projects = () => {
  return (
    <section name='projects'>
      <div className='section-shell'>
        <h2 className='section-title'>Projects</h2>
        <p className='section-subtitle'>A curated set of recent builds that highlight my front-end and full-stack work.</p>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => {
            const isComingSoon = project.liveDemoUrl === '/';

            return (
              <article key={project.title} className='surface overflow-hidden'>
                <img src={project.image} alt={`${project.title} preview`} className='h-48 w-full object-cover' loading='lazy' />

                <div className='space-y-4 p-5'>
                  <h3 className='text-lg font-semibold text-gray-50'>{project.title}</h3>
                  <div className='flex flex-wrap gap-3'>
                    <a
                      href={project.liveDemoUrl}
                      target='_blank'
                      rel='noreferrer noopener'
                      aria-disabled={isComingSoon}
                      className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                        isComingSoon
                          ? 'cursor-not-allowed bg-gray-700 text-gray-300 pointer-events-none'
                          : 'bg-amber-400 text-gray-800 hover:bg-amber-300'
                      }`}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target='_blank'
                      rel='noreferrer noopener'
                      aria-disabled={isComingSoon}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold ${
                        isComingSoon
                          ? 'cursor-not-allowed border-gray-600 text-gray-400 pointer-events-none'
                          : 'border-gray-400 text-gray-50 hover:border-gray-200 hover:bg-gray-700'
                      }`}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
