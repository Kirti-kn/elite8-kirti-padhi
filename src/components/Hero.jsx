import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logoSrc from '../assets/K.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HeroDetails from './HeroDetails';

export default function Hero() {
  const logoControls = useAnimation();
  const nameControls = useAnimation();
  const [stage, setStage] = useState('intro');
  const [progress, setProgress] = useState(0);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0, x: 0 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    drift: { x: -30, transition: { duration: 0.4, ease: 'easeOut' } },
  };
  const nameVariants = {
    hidden: { opacity: 0, scale: 0, x: -10 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    drift: { x: 30, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    async function runSequence() {
      await Promise.all([
        logoControls.start('enter'),
        nameControls.start('enter'),
      ]);
      await Promise.all([
        logoControls.start('drift'),
        nameControls.start('drift'),
      ]);
      setStage('loading');
      let value = 0;
      const interval = setInterval(() => {
        value += 1;
        setProgress(value);
        if (value >= 100) {
          clearInterval(interval);
          setStage('show');
        }
      }, 25);
    }
    runSequence();
  }, [logoControls, nameControls]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-auto ">
      {stage !== 'show' && (
        <div className="relative flex h-screen items-center justify-center">
          {stage === 'loading' && (
            <div className="absolute w-64 h-64">
              <CircularProgressbar
                value={progress}
                strokeWidth={4}
                styles={buildStyles({
                  pathColor: '#22d3ee',
                  trailColor: 'rgba(0,0,0,0)',
                })}
              />
            </div>
          )}

          <motion.img
            src={logoSrc}
            alt="Logo"
            className="w-24 h-24 relative z-20"
            initial="hidden"
            animate={logoControls}
            variants={logoVariants}
          />

          <motion.h1
            className="text-4xl md:text-5xl text-white absolute z-10"
            initial="hidden"
            animate={nameControls}
            variants={nameVariants}
          >
            irti
          </motion.h1>
        </div>
      )}

      {stage === 'show' && (
        <HeroDetails />
      )}
    </div>
  );
}
