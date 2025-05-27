import { HERO_CONTENT } from "../constants";
import { motion } from 'framer-motion';
import mainProfilePic from "../assets/mainProfilePic.png";

const container = delay => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay + 1.2},
    }
});

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pt-4 lg:mb-35 mt-10 pb-8'>
            <div className='flex flex-wrap justify-evenly px-4'>
                <div className='w-full md:w-3/5 lg:w-2/5 p-8'>
                    <div className='flex justify-center'>
                        <motion.img src={mainProfilePic} alt="Kirti Padhi profile picture"
                        initial={{ y:-100,opacity: 0}}
                        animate={{ y: 0, opacity: 1}}
                        transition={{ duration: 1, delay: 0}}
                        className='rounded-lg'
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 px-4'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        >
                            Kirti Padhi
                        </motion.h1>
                        <motion.span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent' 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p 
                        className='my-2 max-w-xl py-6 font-light tracking-tighter text-justify md:text-left'
                        variants={container(1)}
                        initial="hidden"
                        animate="visible">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
