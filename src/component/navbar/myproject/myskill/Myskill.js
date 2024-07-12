import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useTransform, useScroll } from 'framer-motion';

const skills = [
  { name: 'React.js', percentage: 70 },
  { name: 'Java Language', percentage: 60 },
  { name: 'JavaScript Language', percentage: 75 },
  { name: 'HTML & CSS', percentage: 100 },
  { name: 'Git & GitHub', percentage: 60 },
];

const Myskill = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { scrollY } = useScroll();

   // Header animation
   const headerY = useTransform(scrollY, [0, 300], [100, 0]);
   const headerOpacity = useTransform(scrollY, [0, 300], [0, 1]);
 
   // Skills animation
  //  const skillsY = useTransform(scrollY, [100, 400], [100, 0]);
  //  const skillsOpacity = useTransform(scrollY, [100, 400], [0, 1]);

  return (
    <div className='flex flex-col items-center align-middle justify-center  md:px-32  bg-black w-full min-h-screen '>
      <header className='flex justify-center items-center mb-4'>
        <motion.h1
          style={{  y: headerY, opacity: headerOpacity }}
          className='text-4xl md:text-8xl font-semibold text-white  mb-10'
        >
          Skill<span className='text-sky-400 text-4xl md:text-8xl font-semibold '>s</span>
        </motion.h1>
      </header>
      <section ref={ref} className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} inView={inView} />
        ))}
      </section>
    </div>
  );
};

const SkillCard = ({ skill, inView }) => {
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = skill.percentage;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setPercentage(Math.floor(start));
      }, 10);
    }
  }, [inView, skill.percentage]);

  return (
    <motion.div
      className='bg-black shadow-md rounded p-4 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className='text-xl font-bold mb-2 text-white'>{skill.name}</h2>
      <p className='text-blue-50'>{percentage}%</p>
      <div className='w-full bg-gray-200 h-4 rounded mt-2'>
        <motion.div
          className='bg-blue-500 h-4 rounded'
          style={{ width: `${percentage}%` }}
          transition={{ duration: 0.3, type: 'tween' }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Myskill;
