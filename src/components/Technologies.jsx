import { RiReactjsLine } from 'react-icons/ri'
import { AiOutlinePython } from 'react-icons/ai'
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaGitSquare } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import { motion } from 'framer-motion';
const iconVariants = duration => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})
const Technologies = () => {

  return (
    <div className='borber-b border-white pb-16'>
      <motion.h2 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x: 0}}
      initial={{ opacity: 0, x: -100}}
      transition={{ duration: 1.5}}
      className='flex flex-wrap items-center justify-center gap-4 w-3/5 mx-auto'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <AiOutlinePython className='text-7xl text-yellow-600'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <TbBrandJavascript className='text-7xl text-yellow-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <SiMysql className='text-7xl text-blue-600'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <DiDjango className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <FaGitSquare className='text-7xl text-white'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <DiRuby className='text-7xl text-red-800'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <SiRubyonrails className='text-7xl text-red-600'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-white p-4'>
           <SiTailwindcss className='text-7xl text-blue-400'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
