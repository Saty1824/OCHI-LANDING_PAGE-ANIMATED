import React from 'react'

function Cards() {
  return (
    <div className='bg-white w-full h-screen flex justify-center items-center gap-5 px-20 border-t-[1px] mt-2 '>
        <div className=' relative w-1/2 h-[50vh] bg-[#004D43] rounded-2xl flex justify-center items-center '>
            <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute text-xs text-[#C3E265] px-5 py-1 rounded-full border-[1px] left-8 bottom-10 border-[#C3E265]'>&copy;2019-2022</button>
        </div>
        <div className='w-1/2 h-[50vh] gap-3 flex justify-center items-center'>
            <div className='relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='uppercase absolute text-zinc-100 px-5 py-1 text-xs rounded-full border-[1px] left-6 bottom-10 border-zinc-100'>rating 5.0 on clutch</button>
               
            </div>
            <div className='relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center'>
                <img className='w-1/3 h-1/8' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='uppercase absolute text-zinc-100 px-5 py-1 text-xs rounded-full border-[1px] left-6 bottom-10 border-zinc-100'>Business bootcamp alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards