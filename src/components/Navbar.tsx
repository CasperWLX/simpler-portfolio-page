import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';
import { navLinks } from '../constants';
import { motion, spring } from 'framer-motion';
import { NavTypes } from '../constants/types';


interface NavbarProps {
  navLinks: NavTypes;
}


const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-24 mx-auto md:px-40 px-10 text-white sticky top-0 z-20 bg-slate-950 w-full">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

        <ul className="hidden md:flex">
          {navLinks.map((item: NavTypes) => (
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 1}}>
              <li key={item.id} className='p-8 text-[25px] cursor-pointer'>{item.name}</li>
            </motion.div>
            
          ))}
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%] top-0 ease-in-out duration-300'}>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-5 px-5">REACT.</h1>
          <ul className='uppercase p-4'>
            <li className="p-8 text-[25px] border-b border-b-gray-600">About</li>
            <li className="p-8 text-[25px] border-b border-b-gray-600">Projects</li>
            <li className="p-8 text-[25px]">Contact</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar