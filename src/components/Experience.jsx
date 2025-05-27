import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { MdWork } from 'react-icons/md';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const EXP_COUNT = EXPERIENCES.length;
const PAGES = EXP_COUNT + 1;

export default function Experience() {
  const trackWidth = 'max-w-4xl';

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="absolute top-16 w-full text-center text-4xl font-bold text-white z-20"
      >
        Experience
      </motion.h2>

      <Parallax pages={PAGES} className="w-full h-full">

        {EXPERIENCES.map((exp, i) => (
          <ParallaxLayer key={i} offset={i} speed={0.5} className="flex items-center justify-center z-10">
            <div className={`${trackWidth} text-center px-6 text-white`}>  
              <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
              <p className="text-lg font-semibold mb-1">
                {exp.role} at {exp.company}
              </p>
              <p className="mb-2">{exp.description}</p>
              <p className="text-sm text-cyan-300">
                {exp.technologies.join(', ')}
              </p>
            </div>
          </ParallaxLayer>
        ))}

        <ParallaxLayer offset={EXP_COUNT} speed={0} className="flex items-center justify-center z-10">
          <div className={`${trackWidth} text-center px-6 text-gray-300 text-2xl font-semibold`}>  
            On the way to add more Experience
          </div>
        </ParallaxLayer>
      </Parallax>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 bottom-[calc(70%+45px)] md:bottom-[calc(50%+120px)] backdrop-blur-sm flex justify-center items-end">
            <MdWork size={40} className='text-cyan-400' />
        </div>
        <div className="absolute inset-x-0 top-[calc(70%+45px)] md:top-[calc(50%+120px)] bottom-0 backdrop-blur-sm" />

      </div>
    </div>
  );
}
