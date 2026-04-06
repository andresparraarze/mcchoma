import React from 'react';
import Tailwind from '../assets/tailwind.png';
import Mysql from '../assets/mysql.png';
import Node from '../assets/node.png';
import Html from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import ReactImg from '../assets/react.png';
import Mongo from '../assets/mongo.png';

const skills = [
  { name: 'JavaScript', image: JavaScript, alt: 'JavaScript icon' },
  { name: 'HTML', image: Html, alt: 'HTML icon' },
  { name: 'MySQL', image: Mysql, alt: 'MySQL icon' },
  { name: 'MongoDB', image: Mongo, alt: 'MongoDB icon' },
  { name: 'React', image: ReactImg, alt: 'React icon' },
  { name: 'Tailwind CSS', image: Tailwind, alt: 'Tailwind icon' },
  { name: 'Node.js', image: Node, alt: 'Node.js icon' },
  { name: 'GitHub', image: GitHub, alt: 'GitHub icon' },
];

const Skills = () => {
  return (
    <section name='skills'>
      <div className='section-shell'>
        <h2 className='section-title'>Skills and Experience</h2>
        <p className='section-subtitle'>Core tools I use to design, build, and ship modern web applications.</p>

        <div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
          {skills.map((skill) => (
            <article
              key={skill.name}
              className='surface flex flex-col items-center justify-center gap-4 p-6 text-center hover:-translate-y-1 hover:border-amber-300/40'
            >
              <img className='h-16 w-16 object-contain' src={skill.image} alt={skill.alt} loading='lazy' />
              <p className='font-medium text-gray-50'>{skill.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
