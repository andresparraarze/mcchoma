import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Homemain = () => {
  return (
    <section name='homemain' className='flex min-h-screen items-center'>
      <div className='section-shell pt-32'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-amber-300'>Hello, I am</p>
        <h1 className='mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl'>Andres Parra Arze</h1>
        <h2 className='mt-3 text-2xl font-semibold text-gray-200 sm:text-4xl'>Full-Stack Web Developer</h2>
        <p className='section-subtitle'>
          I build fast, accessible, and scalable web experiences with a strong focus on front-end interaction,
          thoughtful design, and reliable full-stack implementation.
        </p>

        <div className='mt-10 flex flex-wrap gap-4'>
          <Link to='projects' smooth offset={-70} duration={500} className='primary-button cursor-pointer'>
            View Projects
            <HiArrowNarrowRight className='text-lg' />
          </Link>
          <Link to='contact-form' smooth offset={-70} duration={500} className='secondary-button cursor-pointer'>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homemain;
