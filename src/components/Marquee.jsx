import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-10 rounded-t-2xl bg-[#004D43]'>
        <div className='text mt-16 border-t-2 border-b-2 border-zinc-300 text-white flex  overflow-hidden whitespace-nowrap pr-10 '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:10}} className='text-[20vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold -mb-16 pt-8'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:10}} className='text-[20vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold -mb-16 pt-8'>we are ochi</motion.h1>
            

        </div>
    </div>
  )
}

export default Marquee