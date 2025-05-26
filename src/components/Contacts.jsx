import React from 'react'
//TODO - change contact
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { iconCommonClasses } from '../constants'
import { FaTelegramPlane } from 'react-icons/fa'

const Contacts = () => {
  return (
    <div className='borber-b border-r-neutral-900 pb-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-8 flex items-center gap-x-2 justify-center'>Way to reach out quickly
          <a href="https://t.me/Kirti_padhi" target="_blank" rel="noopener noreferrer" aria-label="Telegram Profile" className='text-2xl'>
            <FaTelegramPlane className={iconCommonClasses} />
          </a>
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contacts
