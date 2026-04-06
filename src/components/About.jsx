import React from 'react';

const About = () => {
  return (
    <section name='about' className='h-screen w-full bg-[#19191b] text-gray-300'>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <div className='grid w-full max-w-[1000px] grid-cols-2 gap-8'>
          <div className='pb-8 pl-4 sm:text-right'>
            <h2 className='inline border-b-4 border-yellow-400 text-4xl font-bold'>About</h2>
          </div>
          <div />
        </div>
        <div className='grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2'>
          <div className='text-3xl font-bold sm:text-right'>
            <p>I'm Andres Parra Arze, and I hope you enjoy looking at my work.</p>
          </div>
          <div>
            <p>
              Software Developer utilizing a business background in order to create challenging projects that stand
              out from the competition. Certification earned through University of Toronto, and the set of skills I
              have mastered are JavaScript, Node.js, React, MongoDB, MySQL, CSS, Sass and Tailwind. I can utilize
              these tools to create a responsive and interactive web design. I like to focus on the front end since I
              love the creativity and thought process that needs to be put into it. I have made multiple projects in
              teams of 4 and we have been able to successfully reach our targets and deploy full functioning web
              applications that have gone from weather websites to e-commerce websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
