import React from 'react'

const Contact = () => {
  return (
    <div name='contact-form' className='w-full h-screen bg-[#19191b] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full' 
            method='POST' action="https://getform.io/f/5f8cb07f-0b33-4132-b1e9-fba94e036cfa">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-200'>
                    Contact
                </p>
                <p className='text-gray-200 py-4'>
                    Submit the form to be contacted or send me an Email
                </p>
            </div>

            {/*Name on form*/}
            <input className='bg-[#e9ef95] p-2'
            type="text" placeholder='Name' name='name'/>

            {/*Email on form*/}
            <input className='my-4 p-2 bg-[#e9ef95]'
            type="email" placeholder='Email' name='email'/>

            {/*Text on form*/}
            <textarea className='bg-[#e9ef95] p-2'
                name="message" rows="10" placeholder='Message'>
            </textarea>
            <button className='text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 px-4 py-3 my-8 mx-auto flex items-center'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Contact