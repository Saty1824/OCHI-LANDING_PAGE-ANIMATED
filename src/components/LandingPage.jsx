import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-white pt-8'>
        <div className='textstructure mt-40 px-20 '>
            {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((item,index)=>{
                return <div key={index} className='masker'>
                    <div className='w-fit flex'>
                        {index==1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='w-[9vw] h-[5.7vw] -top-[1.3vw] relative  bg-cover mr-2 bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'></motion.div>}


                    
                        <h1 className='text-9xl uppercase leading-[6.5vw]  font-["Founders_Grotesk_X-Condensed"] font-bold text-zinc-800  '>{item}</h1>
                    </div>
            </div>
            
            })}
        </div>
        <div className='border-t-[1px] border-zinc-400 mt-[16vh] flex justify-between items-center '>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
                return <p className='text-md font-light tracking-tighter leading-none mt-7 px-20 pt-1 '>{item}</p>
            })}
            <div className='start flex gap-2 items-center hover:border-zinc-900 hover:text-zinc-100 hover:bg-zinc-900 hover:cursor-pointer '><div className='Btn border-[1px]  border-zinc-400 rounded-full px-4 py-0.5 mt-7 text-md tracking-tighter text-zinc-600 font-light '>START THE PROJECT</div>
                <div className='arrowIcon w-8 h-8 mr-16 mt-7 flex items-center justify-center rounded-full border-[1px] hover:border-zinc-900 hover:bg-zinc-900 hover:text-zinc-100 border-zinc-400 rotate-45 color'>
                    <FaArrowUpLong/>
                </div>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default LandingPage