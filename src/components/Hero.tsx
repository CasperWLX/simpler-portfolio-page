import { useState, useEffect } from 'react';
import portait from '../assets/portrait.jpg';
import swim from '../assets/swim.jpg';
import front from '../assets/front.jpg';
import { motion, spring } from 'framer-motion';
import HackingEffect from './HackingEffect';






const Hero = () => {

    
    const [isHovered, setIsHovered] = useState(false);

    
    
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-full mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-3xl'>WELCOME TO MY PORTFOLIO</p>
            <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Hampus Källberg</h1>
            <div>
                <HackingEffect />
            </div>
        </div>
        <div className='flex flex-row h-auto text-center justify-center mx-auto mt-20'>
            <motion.div className='mx-20 md:w-1/6' initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <img src={isHovered ? front : portait} alt="Self Portrait" className='rounded-full' />
            </motion.div>
            <div className='flex flex-wrap md:w-2/6 mx-20 text-bold md:text-[38px] overflow-hidden'>
                <motion.div initial={{ x: "100vw" }} animate={{x:0}} transition={{duration: 2, type: 'spring', delay: 1, stiffness: 130}}>
                    <p>My name is Hampus Källberg, I'm a software developer located in Sweden</p>
                </motion.div>
            </div>
        </div>
        
    </div>
  )
}



export default Hero