import React from 'react';

const Contact = () => {
  return (
    <section name='contact-form' className='flex h-screen w-full items-center justify-center bg-[#19191b] p-4'>
      <form
        className='flex w-full max-w-[600px] flex-col'
        method='POST'
        action='https://getform.io/f/5f8cb07f-0b33-4132-b1e9-fba94e036cfa'
      >
        <div className='pb-8'>
          <h2 className='inline border-b-4 border-yellow-500 text-4xl font-bold text-gray-200'>Contact</h2>
          <p className='py-4 text-gray-200'>Submit the form to be contacted or send me an Email.</p>
        </div>

        <label htmlFor='name' className='mb-1 text-gray-200'>
          Name
        </label>
        <input id='name' className='bg-[#e9ef95] p-2' type='text' placeholder='Name' name='name' required />

        <label htmlFor='email' className='mb-1 mt-4 text-gray-200'>
          Email
        </label>
        <input id='email' className='bg-[#e9ef95] p-2' type='email' placeholder='Email' name='email' required />

        <label htmlFor='message' className='mb-1 mt-4 text-gray-200'>
          Message
        </label>
        <textarea
          id='message'
          className='bg-[#e9ef95] p-2'
          name='message'
          rows='10'
          placeholder='Message'
          required
        />
        <button
          type='submit'
          className='mx-auto my-8 flex items-center border-2 px-4 py-3 text-white hover:border-yellow-500 hover:bg-yellow-500'
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
