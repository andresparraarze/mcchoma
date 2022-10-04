import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#19191b] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>About</p>
                </div>
                <div>

                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>I'm Andres Parra Arze, i hope youre having a good time looking at my work.</p>
                    </div>
                    <div>
                        <p>
                            Software Developer utilizing a business background in order to create challenging
                            projects that stand out from the competition. Certification earned through University of
                            Toronto, the set of skills I have mastered are JavaScript, jQuery, Node.js, React,
                            MongoDB, MySQL, CSS, Sass and Tailwind. I can utilize these tools to create a
                            responsive and interactive web design, I like to focus on the front end since I love the
                            creativity and thought process that needs to be put into it. I have made multiple projects
                            in teams of 4 and we have been able to successfully reach our targets and deploy full
                            functioning web applications that have gone from Weather websites to e-commerce
                            websites.                        
                        </p>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default About