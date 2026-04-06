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
  { name: 'Tailwind', image: Tailwind, alt: 'Tailwind icon' },
  { name: 'Node', image: Node, alt: 'Node icon' },
  { name: 'GitHub', image: GitHub, alt: 'GitHub icon' },
];

const Skills = () => {
  return (
    <section name='skills' className='h-screen w-full bg-[#19191b] text-gray-300'>
      <div className='mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4'>
        <div>
          <h2 className='inline border-b-4 border-yellow-500 text-4xl font-bold'>Skills and Experience</h2>
          <p className='py-4'>I have made projects and worked with:</p>
        </div>
        <div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4'>
          {skills.map((skill) => (
            <div key={skill.name} className='shadow-md shadow-[#3b3b3d] duration-500 hover:scale-110'>
              <img className='mx-auto w-20' src={skill.image} alt={skill.alt} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
