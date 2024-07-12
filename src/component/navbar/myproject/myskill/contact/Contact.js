import React from 'react';
import contact from './contact2.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  

  return (
    <div className='px-4 md:px-8 lg:px-32 py-8 bg-black text-white'>
      <motion.div
        className='flex justify-center items-center'
  
      >
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-serif font-semibold text-center'>Contact <span className='text-sky-400 text-4xl md:text-8xl font-semibold'>Us </span></h1>
      </motion.div>

      <motion.div
        className='flex flex-col md:flex-row justify-between items-center py-10'
        
      >
        <div className='w-full md:w-1/2 p-4'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-center md:text-left'>SEND US A MESSAGE</h2>
          </div>
          <form className='space-y-4'>
            <div>
              <label htmlFor='Name' className='block text-sm font-medium'>Name</label>
              <input
                type='text'
                id='Name'
                className='mt-1 block w-full bg-black border-2 border-gray-300 focus:outline-none py-2 px-3 rounded'
              />
            </div>
            <div>
              <label htmlFor='Email' className='block text-sm font-medium'>E-mail</label>
              <input
                type='email'
                id='Email'
                className='mt-1 block w-full bg-black border-2 border-gray-300 focus:outline-none py-2 px-3 rounded'
              />
            </div>
            <div>
              <label htmlFor='Message' className='block text-sm font-medium'>Message</label>
              <textarea
                id='Message'
                className='mt-1 block w-full bg-black border-2 border-gray-300 focus:outline-none py-2 px-3 rounded'
                rows='4'
              ></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='w-full bg-sky-300 text-white py-2 px-4 rounded hover:bg-sky-400 transition duration-300'
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        <motion.div
          className='w-full md:w-1/2 p-4'
          
        >
          <img className='w-full h-auto rounded' src={contact} alt='Contact' />
        </motion.div>
      </motion.div>

      <motion.div
        className='flex flex-col md:flex-row justify-center items-center mt-8'
        
      >
        <div className='md:mr-4 mb-4 md:mb-0 text-center md:text-left'>
          <FontAwesomeIcon icon={faPhone} style={{ color: '#ededee', marginRight: '8px' }} />
          +91 7205990747
        </div>
        <div className='text-center md:text-left'>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f7f7f8', marginRight: '8px' }} />
          pradeeptakumarsahoo01@gmail.com
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
