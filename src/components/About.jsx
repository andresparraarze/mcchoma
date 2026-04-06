import React from 'react';

const About = () => {
  return (
    <section name='about'>
      <div className='section-shell'>
        <div className='surface p-8 md:p-10'>
          <h2 className='section-title'>About</h2>
          <p className='section-subtitle'>
            I&apos;m Andres Parra Arze, a developer who blends technical delivery with business-minded problem solving.
          </p>

          <div className='mt-8 grid gap-6 text-gray-100 md:grid-cols-2'>
            <p className='text-lg font-semibold leading-relaxed text-gray-50'>
              I enjoy building products that are useful, polished, and intuitive for real users.
            </p>
            <p className='leading-relaxed text-gray-200'>
              I completed a full-stack web development certification through the University of Toronto and have hands-on
              experience with JavaScript, Node.js, React, MongoDB, MySQL, CSS, Sass, and Tailwind. I especially enjoy
              front-end work because it combines creativity, accessibility, and performance. Across multiple team
              projects, I have delivered production-ready applications ranging from weather dashboards to e-commerce
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
