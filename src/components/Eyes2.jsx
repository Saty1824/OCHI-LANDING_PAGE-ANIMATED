import React from 'react'
import { useEffect,useState } from 'react'

function Eyes2() {
    const [rotate,setRotate]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;

            let deltaX= mouseX - window.innerWidth/2;
            let deltaY= mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) *(180/Math.PI);
            setRotate(angle-180)
            

        })
    })
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='relative w-full h-screen bg-[#CEEA67] flex flex-col items-center justify-center text-center '>
        <div className='w-full h-1/2 font-["Founders_Grotesk_X-Condensed"] uppercase flex-col  text-9xl  font-semibold mt-40'>
            <h1 className='h-1/3 text-[25vh] mb-5'>Ready</h1>
            <h1 className='h-1/3 text-[25vh] mb-5'>to Start</h1>
            <h1 className='h-1/3 text-[25vh] '>the project?</h1>

        </div>
        <div className='w-full h-1/2 flex flex-col font-["Neue_Montreal"]'>
            <div className=' flex justify-center items-center w-full mt-20 '>
                <h3 className=' flex justify-center items-center gap-10 py-4 px-6 text-zinc-100 bg-black rounded-full text-sm'>
                    START THE PROJECT
                    <div className='w-2 h-2 rounded-full bg-zinc-100 '></div>
                </h3>

            </div>
            <h3 className='m-5'>OR</h3>
            <div className=' flex justify-center items-center w-full mb-32 '>
                <h3 className=' uppercase flex justify-center items-center gap-10 py-4 px-6 text-zinc-600 bg-transparent border-[1px] border-zinc-600 rounded-full text-sm'>
                    Hello@ochi.design
                    <div className='w-2 h-2 rounded-full bg-zinc-900 '></div>
                </h3>

            </div>



        </div>
        <div className='absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full'>
                            <div className='flex justify-center items-center w-7 h-7 rounded-full bg-zinc-100'></div>
                        </div>
                        
                    </div>
                </div>
                <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full'>
                            <div className='flex justify-center items-center w-7 h-7 rounded-full bg-zinc-100'></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        

    </div>
  )
}

export default Eyes2