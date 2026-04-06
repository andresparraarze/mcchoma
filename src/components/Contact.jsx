import React from 'react';

const Contact = () => {
  return (
    <section name='contact-form'>
      <div className='section-shell'>
        <div className='surface mx-auto max-w-3xl p-8 md:p-10'>
          <h2 className='section-title'>Contact</h2>
          <p className='section-subtitle mt-3'>Have a project idea or collaboration in mind? Send a message.</p>

          <form
            className='mt-8 flex flex-col gap-4'
            method='POST'
            action='https://getform.io/f/5f8cb07f-0b33-4132-b1e9-fba94e036cfa'
          >
            <label htmlFor='name' className='text-sm font-medium text-gray-100'>
              Name
            </label>
            <input
              id='name'
              className='rounded-xl border border-gray-600 bg-gray-800 px-4 py-3 text-gray-50 placeholder:text-gray-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/60'
              type='text'
              placeholder='Your name'
              name='name'
              required
            />

            <label htmlFor='email' className='text-sm font-medium text-gray-100'>
              Email
            </label>
            <input
              id='email'
              className='rounded-xl border border-gray-600 bg-gray-800 px-4 py-3 text-gray-50 placeholder:text-gray-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/60'
              type='email'
              placeholder='you@example.com'
              name='email'
              required
            />

            <label htmlFor='message' className='text-sm font-medium text-gray-100'>
              Message
            </label>
            <textarea
              id='message'
              className='min-h-40 rounded-xl border border-gray-600 bg-gray-800 px-4 py-3 text-gray-50 placeholder:text-gray-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/60'
              name='message'
              rows='8'
              placeholder='Tell me a little about your project or goals.'
              required
            />

            <button type='submit' className='primary-button mt-2 w-fit'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
