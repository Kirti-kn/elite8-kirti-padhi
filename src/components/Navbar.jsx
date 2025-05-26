import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
import { iconCommonClasses } from '../constants';
const Navbar = () => {
  return (
    <nav className='mb-20 mt-4 flex items-center justify-around text-2xl py-6 w-full md:w-1/2 mx-auto '>
      <a href="https://www.linkedin.com/in/kirti-padhi-b83614245/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
        <FaLinkedin className={iconCommonClasses} />
      </a>
      <a href="https://github.com/Kirti-kn" target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
            <FaGithub className={iconCommonClasses} />
      </a>
      <a href="https://t.me/Kirti_padhi" target="_blank" rel="noopener noreferrer" aria-label="Telegram Profile">
            <FaTelegramPlane className={iconCommonClasses} />
      </a>
    </nav>
  )
}

export default Navbar
