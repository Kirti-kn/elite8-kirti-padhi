import profilePicLaptop from "../assets/profilePicLaptop.png";
import { ABOUT_TEXT } from '../constants';
import Technologies from './Technologies';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {
  const fadeControls1 = useAnimation();
  const fadeControls2 = useAnimation();

  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView1) {
      fadeControls1.start({ opacity: 1, y: 0 });
    } else {
      fadeControls1.start({ opacity: 0, y: 30 });
    }

    if (inView2) {
      fadeControls2.start({ opacity: 1, y: 0 });
    } else {
      fadeControls2.start({ opacity: 0, y: 30 });
    }
  }, [inView1, inView2, fadeControls1, fadeControls2]);

  return (
    <div className='border-b border-neutral-900 pb-4 overflow-hidden px-8'>
      <h2 className='my-20 text-center text-4xl'>
        About <span className='text-cyan-500'>Me</span>
      </h2>

      <motion.div
        ref={ref1}
        animate={fadeControls1}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className='flex flex-wrap mb-[30vh]'
      >
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img src={profilePicLaptop} alt="about" className='rounded-2xl' />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 text-justify'>{ABOUT_TEXT}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        animate={fadeControls2}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <Technologies />
      </motion.div>
    </div>
  );
};

export default About;