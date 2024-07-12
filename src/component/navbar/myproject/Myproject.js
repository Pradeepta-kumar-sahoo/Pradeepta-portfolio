import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import food from './food.png';

const MyProject = () => {
  const { scrollY } = useScroll();
  const location = useLocation();

  // Determine if we are on the /myproject route
  const isMyProjectPage = location.pathname === '/';

  // Header animation
  const headerX = useTransform(scrollY, [0, 300], isMyProjectPage ? [-200, 0] : [0, 0]);
  const headerY = useTransform(scrollY, [0, 300], isMyProjectPage ? [100, 0] : [0, 0]);
  const headerOpacity = useTransform(scrollY, [0, 300], isMyProjectPage ? [0, 1] : [1, 1]);

  // Image animation
  const imageX = useTransform(scrollY, [50, 250], isMyProjectPage ? [0, 0] : [-200, 0]);
  const imageOpacity = useTransform(scrollY, [50, 250], isMyProjectPage ? [1, 1] : [0, 1]);

  // Paragraph animation
  const textX = useTransform(scrollY, [300, 600], isMyProjectPage ? [0, 0] : [-100, 0]);
  const textOpacity = useTransform(scrollY, [300, 600], isMyProjectPage ? [1, 1] : [0, 1]);

  // Button animation
  const buttonX = useTransform(scrollY, [400, 700], isMyProjectPage ? [0, 0] : [200, 0]);
  const buttonOpacity = useTransform(scrollY, [400, 700], isMyProjectPage ? [1, 1] : [0, 1]);

  useEffect(() => {
    // Cleanup logic or effects specific to MyProject component if needed
    return () => {
      // Cleanup logic here if necessary
    };
  }, []);

  return (
    <motion.div className='flex flex-col items-center justify-center px-4 py-60 md:px-32 bg-black text-white '>
      <motion.div
        className='text-4xl md:text-8xl font-semibold mb-20'
        style={isMyProjectPage ? { opacity: headerOpacity, x: headerX, y: headerY } : {}}
      >
        My <span className='text-sky-400 text-4xl md:text-8xl font-semibold'> Project</span>
      </motion.div>

      <section className='w-full flex flex-col md:flex-row justify-around items-center'>
        <motion.div className='mb-4' style={isMyProjectPage ?{ x: imageX, opacity: imageOpacity } : {}}>
          <img src={food} alt='Screenshot of a food-related project' className='w-full md:w-auto' />
          <div className='flex justify-center mt-2'>
            <motion.a
              href='https://github.com/Pradeepta-kumar-sahoo'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-500 text-white py-2 px-4 my-6 rounded hover:bg-blue-700 transition duration-300'
              style={isMyProjectPage?{ x: buttonX, opacity: buttonOpacity } : {}}
            >
              View project
            </motion.a>
          </div>
        </motion.div>

        <motion.p
          className='flex items-center justify-center w-full md:w-1/3 mb-4 md:mb-0 my-6'
          style={isMyProjectPage?{ x: textX, opacity: textOpacity }: {}}
        >
          I specialize in React.js development, crafting responsive and efficient web applications. Additionally, I excel in Java, applying problem-solving skills to create robust solutions. My portfolio showcases a dedication to clean code, user-centric design, and a passion for tackling complex challenges.
        </motion.p>
      </section>
    </motion.div>
  );
};

export default MyProject;
