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
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora obcaecati velit soluta. Itaque minima assumenda asperiores debitis nisi autem voluptatibus quaerat quia! Sequi, temporibus dicta maiores voluptates hic laboriosam non.
                        </p>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default About