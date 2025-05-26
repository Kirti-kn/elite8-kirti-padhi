import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    `transition duration-200 hover:scale-125 ${isActive ? 'text-white' : 'text-gray-400'
    }`;

  return (
    <div className='
  flex gap-x-10 px-3 mx-auto py-2 justify-around text-2xl 
  fixed left-1/2 -translate-x-1/2 z-50 md:w-1/2 lg:w-1/3
  top-auto bottom-4 md:top-4 md:bottom-auto
  bg-blue-400/10 border border-gray-100/10 backdrop-blur-md shadow-lg 
  rounded-lg
'>      <NavLink to="/" className={navLinkStyle}>
        <FaHome />
      </NavLink>
      <NavLink to="/about" className={navLinkStyle}>
        <IoMdContact />
      </NavLink>
      <NavLink to="/experience" className={navLinkStyle}>
        <MdWork />
      </NavLink>
      <NavLink to="/projects" className={navLinkStyle}>
        <GrProjects />
      </NavLink>
      <NavLink to="/contact" className={navLinkStyle}>
        <MdAttachEmail />
      </NavLink>
    </div>
  )
}

export default Navbar
